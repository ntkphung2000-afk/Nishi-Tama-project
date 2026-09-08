import type { Place, PlaceCategoryGroup } from "@/data/places";
import type { StationCard as StationCardData } from "@/data/stations";
import {
  extractIntents,
  extractRatingMin,
  extractWalkMaxMinutes,
  primaryGroup,
  wordsForTag,
  type Intent,
} from "./searchKeywords";

/* ------------------------------------------------------------------
 * TRIP PLANNER — deterministic, local matching + itinerary generation.
 * No external LLM call. Every place returned comes straight from
 * src/data/places.ts; nothing here invents a name, time or URL.
 * ------------------------------------------------------------------ */

export type SearchOptions = {
  stationId?: string | undefined;
  walkMaxMinutes?: number | undefined;
  /** Internal-only bias, e.g. from "3.5以上" — never a UI control. */
  ratingMin?: number | undefined;
};

export type ResolvedQuery = {
  intents: Intent[];
  stationId?: string | undefined;
  walkMaxMinutes?: number | undefined;
  ratingMin?: number | undefined;
};

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Detect a station mentioned by kanji name or English name in free text. */
export function findStationId(query: string, stations: StationCardData[]): string | undefined {
  if (!query.trim()) return undefined;
  for (const s of stations) {
    if (query.includes(s.ja)) return s.id;
  }
  for (const s of stations) {
    const re = new RegExp(`\\b${escapeRegExp(s.en)}\\b`, "i");
    if (re.test(query)) return s.id;
  }
  return undefined;
}

function dedupeIntents(intents: Intent[]): Intent[] {
  const map = new Map<string, Intent>();
  for (const intent of intents) {
    const key = [...intent.groups].sort().join(",");
    const existing = map.get(key);
    if (!existing || (!existing.tag && intent.tag)) map.set(key, intent);
  }
  return [...map.values()];
}

/** Parse a free-text query (any of the 7 locales) into structured search intent. */
export function resolveQuery(query: string, stations: StationCardData[]): ResolvedQuery {
  return {
    intents: dedupeIntents(extractIntents(query)),
    stationId: findStationId(query, stations),
    walkMaxMinutes: extractWalkMaxMinutes(query),
    ratingMin: extractRatingMin(query),
  };
}

function placeText(place: Place): string {
  const desc = place.description ? Object.values(place.description).join(" ") : "";
  return `${place.categoryRaw} ${desc}`.toLowerCase();
}

function matchesTag(place: Place, tag: string): boolean {
  const words = wordsForTag(tag).map((w) => w.toLowerCase());
  const text = placeText(place);
  return words.some((w) => text.includes(w));
}

function scorePlace(place: Place, opts: SearchOptions): number {
  let score = 0;
  if (opts.stationId && place.stationId === opts.stationId) score += 50;
  if (place.walkMinutes !== undefined) score += Math.max(0, 20 - place.walkMinutes);
  if (!place.mapUrlGenerated) score += 5;
  if (place.description) score += 5;
  if (place.website) score += 2;
  if (opts.ratingMin !== undefined && place._internal?.rating !== undefined) {
    score += place._internal.rating >= opts.ratingMin ? 10 : -5;
  }
  return score;
}

/** Places matching one intent, scored and sorted (best first). Never includes candidate rows. */
export function matchPlaces(places: Place[], intent: Intent, opts: SearchOptions = {}): Place[] {
  let pool = places.filter((p) => !p.candidate);
  if (opts.stationId) pool = pool.filter((p) => p.stationId === opts.stationId);
  if (opts.walkMaxMinutes !== undefined) {
    const max = opts.walkMaxMinutes;
    pool = pool.filter((p) => p.walkMinutes !== undefined && p.walkMinutes <= max);
  }
  pool = pool.filter((p) => p.groups.some((g) => intent.groups.includes(g)));
  if (intent.tag) {
    pool = pool.filter((p) => matchesTag(p, intent.tag!));
  }
  return pool
    .map((p) => ({ p, score: scorePlace(p, opts) }))
    .sort((a, b) => b.score - a.score)
    .map((x) => x.p);
}

function dedupePlacesById(list: Place[]): Place[] {
  const seen = new Set<string>();
  const out: Place[] = [];
  for (const p of list) {
    if (!seen.has(p.id)) {
      seen.add(p.id);
      out.push(p);
    }
  }
  return out;
}

/** Pick the station where the most requested intents have at least one match. */
function pickBestStation(
  places: Place[],
  intents: Intent[],
  opts: SearchOptions,
): string | undefined {
  const stationIds = [...new Set(places.filter((p) => !p.candidate).map((p) => p.stationId))];
  let best: { id: string; count: number; score: number } | undefined;
  for (const id of stationIds) {
    let count = 0;
    let score = 0;
    for (const intent of intents) {
      const top = matchPlaces(places, intent, { ...opts, stationId: id }).at(0);
      if (top) {
        count += 1;
        score += scorePlace(top, opts);
      }
    }
    if (!best || count > best.count || (count === best.count && score > best.score)) {
      best = { id, count, score };
    }
  }
  return best && best.count > 0 ? best.id : undefined;
}

const DEFAULT_DWELL_MINUTES: Record<PlaceCategoryGroup, number> = {
  food: 60,
  cafe: 30,
  nature: 90,
  outdoor: 120,
  onsen: 60,
  attraction: 45,
  omiyage: 20,
};

function formatTime(totalMinutes: number): string {
  const h = Math.floor(totalMinutes / 60) % 24;
  const m = totalMinutes % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

export type ItineraryStep =
  | { kind: "arrive"; time: string }
  | { kind: "activity"; time: string; intent: Intent; place: Place }
  | { kind: "return"; time: string };

/**
 * Build a *suggested* schedule (default 09:00 start, generic dwell times
 * per category) around real matched places. This is a planning aid, not
 * a verified timetable — walking minutes come from the data when known.
 */
function buildSteps(intents: Intent[], places: Place[]): ItineraryStep[] {
  let clock = 9 * 60;
  const steps: ItineraryStep[] = [{ kind: "arrive", time: formatTime(clock) }];
  for (let i = 0; i < intents.length; i++) {
    const intent = intents[i];
    const place = places[i];
    if (!intent || !place) continue;
    clock += place.walkMinutes ?? 10;
    steps.push({ kind: "activity", time: formatTime(clock), intent, place });
    clock += DEFAULT_DWELL_MINUTES[primaryGroup(intent)];
  }
  steps.push({ kind: "return", time: formatTime(clock) });
  return steps;
}

export type PlanResult =
  | { kind: "no-query" }
  | { kind: "no-match" }
  | { kind: "single"; intent: Intent; stationId?: string | undefined; places: Place[] }
  /**
   * No place matched the requested sub-tag (e.g. "sushi") at the
   * requested station, but the broader category (e.g. any "food" place)
   * did. Shown as a clearly-labeled alternative — never silently
   * substituted for an exact match.
   */
  | { kind: "single-relaxed"; intent: Intent; stationId: string; places: Place[] }
  | { kind: "itinerary"; intents: Intent[]; stationId: string; steps: ItineraryStep[] }
  | { kind: "partial"; intents: Intent[]; stationId?: string | undefined; places: Place[] };

/** Core matching/itinerary logic, given already-resolved search options. */
export function planTrip(resolved: ResolvedQuery, places: Place[]): PlanResult {
  const { intents } = resolved;
  if (intents.length === 0) return { kind: "no-match" };

  const opts: SearchOptions = {
    stationId: resolved.stationId,
    walkMaxMinutes: resolved.walkMaxMinutes,
    ratingMin: resolved.ratingMin,
  };

  if (intents.length === 1) {
    const intent = intents[0];
    if (!intent) return { kind: "no-match" };
    const matched = matchPlaces(places, intent, opts);
    if (matched.length > 0) {
      return { kind: "single", intent, stationId: resolved.stationId, places: matched };
    }
    // No exact sub-tag match at the requested station — offer the
    // broader category there as a transparent alternative instead of
    // returning nothing, or (the bug this guards against) silently
    // handing back an unrelated place from a too-loose match.
    if (intent.tag && opts.stationId) {
      const broader = matchPlaces(places, { groups: intent.groups }, opts);
      if (broader.length > 0) {
        return { kind: "single-relaxed", intent, stationId: opts.stationId, places: broader };
      }
    }
    return { kind: "no-match" };
  }

  const stationId = resolved.stationId ?? pickBestStation(places, intents, opts);
  if (!stationId) {
    const flat = dedupePlacesById(intents.flatMap((intent) => matchPlaces(places, intent, opts)));
    return flat.length === 0 ? { kind: "no-match" } : { kind: "partial", intents, places: flat };
  }

  const stationOpts = { ...opts, stationId };
  const stepPlaces = intents.map((intent) => matchPlaces(places, intent, stationOpts)[0]);
  const matchedCount = stepPlaces.filter(Boolean).length;

  if (matchedCount === 0) return { kind: "no-match" };
  if (matchedCount < intents.length) {
    const flat = dedupePlacesById(stepPlaces.filter((p): p is Place => Boolean(p)));
    return { kind: "partial", intents, stationId, places: flat };
  }

  return {
    kind: "itinerary",
    intents,
    stationId,
    steps: buildSteps(intents, stepPlaces as Place[]),
  };
}
