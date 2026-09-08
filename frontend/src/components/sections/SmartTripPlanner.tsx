import { useEffect, useMemo, useRef, useState } from "react";
import { useSearch } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { x } from "@/lib/dictionary-extra";
import { places, type PlaceCategoryGroup } from "@/data/places";
import { nishiTama20Stations, stationById } from "@/data/stations";
import { planTrip, resolveQuery, type ItineraryStep } from "@/lib/tripPlanner";
import { primaryGroup } from "@/lib/searchKeywords";
import { Section, SectionHeader } from "../site/Section";
import { Reveal } from "../site/Reveal";
import { CategoryIcon } from "@/components/site/CategoryIcon";
import { PlaceCard } from "@/components/site/PlaceCard";
import { PlaceDataDisclaimer } from "@/components/site/PlaceDataDisclaimer";
import { SearchSuggestions } from "@/components/site/SearchSuggestions";

const CATEGORY_OPTIONS: PlaceCategoryGroup[] = [
  "food",
  "cafe",
  "omiyage",
  "nature",
  "attraction",
  "onsen",
  "outdoor",
];

const DISTANCE_OPTIONS: { minutes: number; label: keyof typeof x.search }[] = [
  { minutes: 3, label: "within3" },
  { minutes: 5, label: "within5" },
  { minutes: 7, label: "within7" },
  { minutes: 15, label: "within15" },
];

function chipClass(active: boolean) {
  return `min-h-11 border px-5 py-2 text-[0.8125rem] tracking-wide transition-colors ${
    active
      ? "border-forest-deep bg-forest-deep text-cream"
      : "border-forest/30 text-forest-deep hover:border-forest"
  }`;
}

export function SmartTripPlanner() {
  const { t } = useLang();
  const { q } = useSearch({ from: "/travel-guide" });
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [stationFilter, setStationFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<PlaceCategoryGroup | "all">("all");
  const [distanceFilter, setDistanceFilter] = useState<number | "any">("any");
  const [inputFocused, setInputFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Apply an incoming ?q= (from the header search shortcut or a deep link).
  useEffect(() => {
    if (q === undefined) return;
    setQuery(q);
    setSubmittedQuery(q);
  }, [q]);

  // When arriving via the header search shortcut, scroll to and focus the
  // input. Re-asserted a few times to beat the router's scroll restoration.
  useEffect(() => {
    if (typeof window === "undefined" || window.location.hash !== "#smart-search") return;
    const scrollToSection = () =>
      document.getElementById("smart-search")?.scrollIntoView({ behavior: "smooth", block: "start" });
    const timers = [
      window.setTimeout(scrollToSection, 80),
      window.setTimeout(scrollToSection, 350),
      window.setTimeout(() => {
        scrollToSection();
        inputRef.current?.focus({ preventScroll: true });
      }, 700),
    ];
    return () => timers.forEach(window.clearTimeout);
  }, [q]);

  function applySuggestion(text: string) {
    setQuery(text);
    setSubmittedQuery(text);
    setInputFocused(false);
    inputRef.current?.blur();
  }

  const hasAnyInput =
    submittedQuery.trim() !== "" ||
    stationFilter !== "all" ||
    categoryFilter !== "all" ||
    distanceFilter !== "any";

  const result = useMemo(() => {
    if (!hasAnyInput) return { kind: "no-query" as const };
    const parsed = resolveQuery(submittedQuery, nishiTama20Stations);
    const resolved = {
      intents: categoryFilter !== "all" ? [{ groups: [categoryFilter] }] : parsed.intents,
      stationId: stationFilter !== "all" ? stationFilter : parsed.stationId,
      walkMaxMinutes: distanceFilter !== "any" ? distanceFilter : parsed.walkMaxMinutes,
      ratingMin: parsed.ratingMin,
    };
    return planTrip(resolved, places);
  }, [hasAnyInput, submittedQuery, stationFilter, categoryFilter, distanceFilter]);

  return (
    <Section id="smart-search" tone="card">
      <SectionHeader
        eyebrow={t(x.search.eyebrow)}
        title={t(x.search.title)}
        lead={t(x.search.lead)}
      />

      <Reveal className="mt-10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmittedQuery(query);
          }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <div className="relative flex-1">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              placeholder={t(x.search.placeholder)}
              className="min-h-12 w-full border border-forest/30 bg-background px-4 text-base text-charcoal placeholder:text-muted-foreground focus:border-forest-deep focus:outline-none"
            />
            {inputFocused && query.trim() === "" && (
              <SearchSuggestions
                onPick={applySuggestion}
                className="absolute inset-x-0 top-[calc(100%+0.5rem)] z-20 border border-forest/15 bg-background py-2 shadow-[0_16px_40px_-16px_rgba(33,75,50,0.45)]"
              />
            )}
          </div>
          <button
            type="submit"
            className="min-h-12 shrink-0 border border-forest-deep bg-forest-deep px-8 text-[0.75rem] tracking-[0.2em] uppercase text-cream transition-colors hover:bg-forest"
          >
            {t(x.search.submit)}
          </button>
        </form>

        <div className="mt-8 space-y-6">
          <fieldset>
            <legend className="eyebrow">{t(x.search.stationFilter)}</legend>
            <div className="mt-3 flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={() => setStationFilter("all")}
                className={chipClass(stationFilter === "all")}
              >
                {t(x.search.allStations)}
              </button>
              {nishiTama20Stations.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setStationFilter(s.id)}
                  className={chipClass(stationFilter === s.id)}
                >
                  {s.en}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="eyebrow">{t(x.search.categoryFilter)}</legend>
            <div className="mt-3 flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={() => setCategoryFilter("all")}
                className={chipClass(categoryFilter === "all")}
              >
                {t(x.search.allCategories)}
              </button>
              {CATEGORY_OPTIONS.map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setCategoryFilter(g)}
                  className={`${chipClass(categoryFilter === g)} inline-flex items-center gap-2`}
                >
                  <CategoryIcon group={g} className="h-3.5 w-3.5" />
                  {t(x.categories[g])}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="eyebrow">{t(x.search.distanceFilter)}</legend>
            <div className="mt-3 flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={() => setDistanceFilter("any")}
                className={chipClass(distanceFilter === "any")}
              >
                {t(x.search.anyDistance)}
              </button>
              {DISTANCE_OPTIONS.map((d) => (
                <button
                  key={d.minutes}
                  type="button"
                  onClick={() => setDistanceFilter(d.minutes)}
                  className={chipClass(distanceFilter === d.minutes)}
                >
                  {t(x.search[d.label])}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
      </Reveal>

      <div className="mt-14">
        <PlanResultView result={result} query={submittedQuery} />
      </div>
    </Section>
  );
}

function PlanResultView({
  result,
  query,
}: {
  result: ReturnType<typeof planTrip> | { kind: "no-query" };
  query: string;
}) {
  const { t } = useLang();

  if (result.kind === "no-query") return null;

  if (result.kind === "no-match") {
    return <p className="text-sm leading-relaxed text-muted-foreground">{t(x.search.noResults)}</p>;
  }

  if (result.kind === "single") {
    return (
      <div>
        <p className="eyebrow">{t(x.search.matchedPlaces)}</p>
        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {result.places.map((p) => (
            <li key={p.id}>
              <PlaceCard place={p} />
            </li>
          ))}
        </ul>
        <PlaceDataDisclaimer className="mt-6" />
      </div>
    );
  }

  if (result.kind === "partial") {
    return (
      <div>
        <p className="text-sm leading-relaxed text-charcoal/80">{t(x.search.partial)}</p>
        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {result.places.map((p) => (
            <li key={p.id}>
              <PlaceCard place={p} />
            </li>
          ))}
        </ul>
        <PlaceDataDisclaimer className="mt-6" />
      </div>
    );
  }

  if (result.kind === "single-relaxed") {
    return (
      <div>
        <p className="text-sm leading-relaxed text-charcoal/80">{t(x.search.noExactMatch)}</p>
        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {result.places.map((p) => (
            <li key={p.id}>
              <PlaceCard place={p} />
            </li>
          ))}
        </ul>
        <PlaceDataDisclaimer className="mt-6" />
      </div>
    );
  }

  // kind === "itinerary"
  const station = stationById(result.stationId);
  const stepPlaces = result.steps.filter(
    (s): s is Extract<ItineraryStep, { kind: "activity" }> => s.kind === "activity",
  );

  return (
    <div className="border border-forest/20 bg-background p-6 sm:p-10">
      <p className="eyebrow">{t(x.search.resultTitle)}</p>
      {query && <p className="mt-3 font-display text-xl text-forest-deep">“{query}”</p>}

      <div className="mt-6 border-t border-forest/15 pt-5">
        <p className="eyebrow">{t(x.search.recommendedArea)}</p>
        <p className="mt-2 text-lg text-forest-deep">
          {station?.en}
          <span className="ml-2 font-jp text-sm text-charcoal/60">{station?.ja}</span>
        </p>
      </div>

      <div className="mt-8 border-t border-forest/15 pt-6">
        <p className="eyebrow">{t(x.search.suggestedItinerary)}</p>
        <ol className="mt-5 space-y-4">
          {result.steps.map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="w-14 shrink-0 font-display text-sm text-forest/70">{step.time}</span>
              <div className="flex-1 border-l-2 border-forest/20 pb-1 pl-4">
                {step.kind === "arrive" && (
                  <p className="text-sm text-charcoal/85">
                    {t(x.search.arrive)} {station?.en}
                  </p>
                )}
                {step.kind === "return" && (
                  <p className="text-sm text-charcoal/85">{t(x.search.returnToStation)}</p>
                )}
                {step.kind === "activity" && (
                  <div className="flex items-center gap-2 text-sm text-charcoal/85">
                    <CategoryIcon
                      group={primaryGroup(step.intent)}
                      className="h-4 w-4 text-forest"
                    />
                    <span>{t(x.categories[primaryGroup(step.intent)])}</span>
                    <span aria-hidden="true">—</span>
                    <span>{step.place.nameEn ?? step.place.nameJa}</span>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-8 border-t border-forest/15 pt-6">
        <p className="eyebrow">{t(x.search.matchedPlaces)}</p>
        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stepPlaces.map((s) => (
            <li key={s.place.id}>
              <PlaceCard place={s.place} />
            </li>
          ))}
        </ul>
        <PlaceDataDisclaimer className="mt-6" />
      </div>
    </div>
  );
}
