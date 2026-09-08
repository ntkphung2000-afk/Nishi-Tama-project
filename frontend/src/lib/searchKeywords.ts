import type { Lang } from "@/lib/i18n";
import type { PlaceCategoryGroup } from "@/data/places";

/* ------------------------------------------------------------------
 * SMART SEARCH — centralized multilingual keyword mapping.
 * Deterministic, local, no external API. One entry maps a set of
 * words (across all 7 supported locales) to one or more
 * PlaceCategoryGroup, plus an optional sub-tag used to narrow matches
 * further (e.g. "udon" within the "food" group).
 * ------------------------------------------------------------------ */

export type Intent = { groups: PlaceCategoryGroup[]; tag?: string | undefined };

/** The primary (first) category group of an intent — groups is always non-empty. */
export function primaryGroup(intent: Intent): PlaceCategoryGroup {
  return intent.groups[0] ?? "attraction";
}

type KeywordConcept = {
  groups: PlaceCategoryGroup[];
  tag?: string;
  words: Record<Lang, string[]>;
};

const CONCEPTS: KeywordConcept[] = [
  {
    groups: ["food"],
    tag: "udon",
    words: {
      en: ["udon"],
      ja: ["うどん"],
      vi: ["udon", "mì udon"],
      zh: ["乌冬", "乌冬面", "烏冬"],
      ko: ["우동"],
      de: ["udon"],
      ru: ["удон"],
    },
  },
  {
    groups: ["food"],
    tag: "soba",
    words: {
      en: ["soba"],
      ja: ["そば", "蕎麦"],
      vi: ["soba", "mì soba"],
      zh: ["荞麦面", "荞麦"],
      ko: ["소바", "메밀국수"],
      de: ["soba"],
      ru: ["соба"],
    },
  },
  {
    groups: ["food"],
    tag: "ramen",
    words: {
      en: ["ramen"],
      ja: ["ラーメン"],
      vi: ["ramen", "mì ramen"],
      zh: ["拉面", "拉麵"],
      ko: ["라멘", "라면"],
      de: ["ramen"],
      ru: ["рамен"],
    },
  },
  {
    groups: ["food"],
    tag: "sushi",
    words: {
      en: ["sushi", "sashimi"],
      ja: ["寿司", "すし", "sushi", "刺身", "さしみ"],
      vi: ["sushi", "sashimi"],
      zh: ["寿司", "刺身", "寿司店"],
      ko: ["초밥", "스시", "사시미", "회"],
      de: ["sushi", "sashimi"],
      ru: ["суши", "сасими"],
    },
  },
  {
    groups: ["food"],
    words: {
      en: ["food", "eat", "restaurant", "dinner", "lunch", "meal", "dining"],
      ja: ["食事", "ごはん", "ランチ", "ディナー", "食べる", "グルメ", "レストラン"],
      vi: ["ăn", "đồ ăn", "nhà hàng", "bữa ăn", "ẩm thực"],
      zh: ["美食", "吃饭", "餐厅", "午餐", "晚餐", "用餐"],
      ko: ["음식", "식사", "맛집", "레스토랑", "점심", "저녁"],
      de: ["essen", "restaurant", "mittagessen", "abendessen"],
      ru: ["еда", "поесть", "ресторан", "обед", "ужин"],
    },
  },
  {
    groups: ["cafe"],
    words: {
      en: ["cafe", "café", "coffee"],
      ja: ["カフェ", "喫茶", "コーヒー"],
      vi: ["cà phê", "quán cà phê"],
      zh: ["咖啡", "咖啡馆", "咖啡厅"],
      ko: ["카페", "커피"],
      de: ["café", "cafe", "kaffee"],
      ru: ["кафе", "кофе"],
    },
  },
  {
    groups: ["omiyage"],
    words: {
      en: ["omiyage", "souvenir", "shopping", "shop"],
      ja: ["お土産", "おみやげ", "買い物", "ショッピング"],
      vi: ["quà lưu niệm", "mua sắm"],
      zh: ["伴手礼", "手信", "购物"],
      ko: ["기념품", "쇼핑"],
      de: ["souvenir", "einkaufen", "shopping"],
      ru: ["сувенир", "покупки", "шопинг"],
    },
  },
  {
    groups: ["nature"],
    words: {
      en: ["nature", "scenic", "river", "valley"],
      ja: ["自然", "渓谷", "景色"],
      vi: ["thiên nhiên", "cảnh đẹp", "thung lũng"],
      zh: ["自然", "溪谷", "风景"],
      ko: ["자연", "계곡", "경치"],
      de: ["natur", "tal"],
      ru: ["природа", "долина"],
    },
  },
  {
    groups: ["outdoor", "nature"],
    words: {
      en: ["hiking", "hike", "mountain", "trail", "outdoor"],
      ja: ["ハイキング", "登山", "山", "トレイル", "アウトドア"],
      vi: ["leo núi", "đi bộ đường dài", "núi", "đường mòn", "ngoài trời"],
      zh: ["徒步", "登山", "爬山", "户外"],
      ko: ["하이킹", "등산", "트레일", "야외"],
      de: ["wandern", "berg", "outdoor"],
      ru: ["хайкинг", "поход", "гора", "тропа", "активный отдых"],
    },
  },
  {
    groups: ["onsen"],
    words: {
      en: ["onsen", "hot spring"],
      ja: ["温泉"],
      vi: ["suối nước nóng", "onsen"],
      zh: ["温泉"],
      ko: ["온천"],
      de: ["onsen", "therme"],
      ru: ["онсэн", "горячий источник"],
    },
  },
  {
    groups: ["attraction"],
    words: {
      en: ["culture", "attraction", "shrine", "temple", "sightseeing"],
      ja: ["文化", "観光", "神社", "寺"],
      vi: ["văn hoá", "văn hóa", "tham quan", "đền", "chùa"],
      zh: ["文化", "景点", "神社", "寺庙", "观光"],
      ko: ["문화", "관광", "신사", "절"],
      de: ["kultur", "sehenswürdigkeit", "schrein", "tempel"],
      ru: ["культура", "достопримечательность", "святилище", "храм"],
    },
  },
];

function includesWord(haystack: string, needle: string): boolean {
  return haystack.includes(needle);
}

/** Extract every matching intent from a free-text query, any of the 7 locales. */
export function extractIntents(query: string): Intent[] {
  const q = query.toLowerCase();
  const found: Intent[] = [];
  for (const concept of CONCEPTS) {
    const allWords = Object.values(concept.words).flat();
    const hit = allWords.some((w) => includesWord(q, w.toLowerCase()));
    if (hit) {
      found.push({ groups: concept.groups, tag: concept.tag });
    }
  }
  return found;
}

/** All known words (every locale) for a given sub-tag, e.g. "udon" → ["udon", "うどん", ...]. */
export function wordsForTag(tag: string): string[] {
  return CONCEPTS.filter((c) => c.tag === tag).flatMap((c) => Object.values(c.words).flat());
}

const WALK_MINUTE_PATTERNS: RegExp[] = [
  /(\d+)\s*分\s*以内/, // Japanese "N分以内"
  /(\d+)\s*分钟(?:以内|内)/, // Chinese "N分钟以内"
  /(\d+)\s*분\s*이내/, // Korean "N분 이내"
  /trong\s*(\d+)\s*phút/i, // Vietnamese "trong N phút"
  /within\s*(\d+)\s*min/i, // English "within N min"
  /innerhalb\s*(?:von\s*)?(\d+)\s*min/i, // German "innerhalb N min"
  /в\s*течение\s*(\d+)\s*мин/i, // Russian "в течение N мин"
  /до\s*(\d+)\s*мин/i, // Russian "до N мин"
  /(\d+)\s*分/, // bare Japanese "N分"
  /(\d+)\s*分钟/, // bare Chinese "N分钟"
  /(\d+)\s*분/, // bare Korean "N분"
  /(\d+)\s*phút/i, // bare Vietnamese "N phút"
  /(\d+)\s*min/i, // bare English/German "N min"
  /(\d+)\s*мин/i, // bare Russian "N мин"
];

/** "河辺駅 7分以内" / "within 7 min" / "trong 7 phút" → 7. */
export function extractWalkMaxMinutes(query: string): number | undefined {
  for (const re of WALK_MINUTE_PATTERNS) {
    const m = query.match(re);
    if (m?.[1]) return parseInt(m[1], 10);
  }
  return undefined;
}

const RATING_PATTERNS: RegExp[] = [
  /(\d(?:\.\d)?)\s*以上/, // Japanese "3.5以上"
  /(\d(?:\.\d)?)\s*\+/, // "3.5+"
  /trên\s*(\d(?:\.\d)?)/i, // Vietnamese "trên 3.5"
  /at least\s*(\d(?:\.\d)?)/i,
];

/**
 * Internal data-selection hint only (e.g. "3.5以上") — used to softly
 * bias scoring toward places with a verified rating at or above this
 * value when one exists. Never exposed as a UI filter or control.
 */
export function extractRatingMin(query: string): number | undefined {
  for (const re of RATING_PATTERNS) {
    const m = query.match(re);
    if (m?.[1]) return parseFloat(m[1]);
  }
  return undefined;
}
