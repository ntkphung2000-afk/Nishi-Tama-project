import Groq from "groq-sdk";
import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";

// Load .env
dotenv.config();

const apiKey = process.env.GROQ_API_KEY;

if (!apiKey) {
  console.error(
    "❌ GROQ_API_KEY が見つかりません。.env ファイルを確認してください。"
  );
  process.exit(1);
}

const groq = new Groq({ apiKey });
const MODEL = "openai/gpt-oss-120b";

const TARGET_LANGUAGES = ["en", "vi", "zh", "ko", "de", "ru"] as const;
type TargetLanguage = (typeof TARGET_LANGUAGES)[number];

// ============================================================
// The 35 curated events (11 months, excluding August which already
// exists in events.ts). This script does NOT write to events.ts —
// it writes scripts/proposed-events.json for review.
// ============================================================

type SourceEvent = {
  id: string;
  month: number;
  nameJa: string;
  date: string;
  locationJa: string;
  areaJa: string;
};

const sourceEvents: SourceEvent[] = [
  // January
  { id: "akiruno-daruma-ichi", month: 1, nameJa: "だるま市", date: "1月10日", locationJa: "檜原街道沿い（五日市地区 下町周辺）", areaJa: "あきる野市" },
  { id: "ome-daruma-ichi", month: 1, nameJa: "だるま市", date: "1月12日", locationJa: "青梅街道", areaJa: "青梅市" },
  { id: "akigawa-fudoson-hiwatari", month: 1, nameJa: "秋川不動尊火渡り", date: "1月第3日曜日", locationJa: "西福寺", areaJa: "日の出町" },

  // February
  { id: "ome-marathon", month: 2, nameJa: "青梅マラソン", date: "2月中旬", locationJa: "青梅街道", areaJa: "青梅市" },

  // March
  { id: "yoshino-baigo-ume-matsuri", month: 3, nameJa: "吉野梅郷 梅まつり", date: "3月上旬〜下旬", locationJa: "吉野梅郷", areaJa: "青梅市" },
  { id: "shunki-taisai", month: 3, nameJa: "春季大祭", date: "3月8日", locationJa: "武蔵御嶽神社", areaJa: "青梅市" },
  { id: "fussa-sakura-matsuri", month: 3, nameJa: "ふっさ桜まつり", date: "3月下旬〜4月上旬", locationJa: "多摩川堤防沿い", areaJa: "福生市" },
  { id: "hamura-hana-mizu-matsuri", month: 3, nameJa: "はむら花と水のまつり〜桜まつり〜", date: "3月下旬〜4月中旬", locationJa: "羽村の堰", areaJa: "羽村市" },

  // April
  { id: "shiofune-tsutsuji-matsuri", month: 4, nameJa: "塩船観音つつじ祭り", date: "4月中旬〜5月上旬", locationJa: "塩船観音寺・霞丘陵自然公園", areaJa: "青梅市" },
  { id: "chofu-taisai", month: 4, nameJa: "調布大祭", date: "4月中旬", locationJa: "長淵地区", areaJa: "青梅市" },
  { id: "musashi-mitake-kendo-taikai", month: 4, nameJa: "武蔵御嶽神社 奉納剣道大会", date: "4月29日", locationJa: "武蔵御嶽神社大鳥居前広場", areaJa: "青梅市" },

  // May
  { id: "ome-taisai", month: 5, nameJa: "青梅大祭", date: "5月2日・3日", locationJa: "青梅街道", areaJa: "青梅市" },
  { id: "fussa-otako-age-taikai", month: 5, nameJa: "大凧揚げ大会", date: "5月5日", locationJa: "多摩川中央公園", areaJa: "福生市" },
  { id: "musashi-mitake-hinode-sai", month: 5, nameJa: "武蔵御嶽神社日の出祭", date: "5月8日", locationJa: "武蔵御嶽神社", areaJa: "青梅市" },
  { id: "fussa-kagayaki-festival", month: 5, nameJa: "ふっさ輝きフェスティバル", date: "5月第3日曜日", locationJa: "多摩川中央公園", areaJa: "福生市" },
  { id: "fukiage-hanashobu-matsuri", month: 5, nameJa: "吹上花しょうぶまつり", date: "5月下旬〜6月下旬", locationJa: "吹上しょうぶ公園", areaJa: "青梅市" },
  { id: "shiofune-saito-goma-hiwatari", month: 5, nameJa: "柴燈護摩供・火渡り荒行", date: "5月3日", locationJa: "塩船観音寺護摩堂前広場", areaJa: "青梅市" },
  { id: "kamanofuchi-shinryoku-sai", month: 5, nameJa: "釜の淵新緑祭〜生涯学習フェスティバル〜", date: "5月上旬", locationJa: "釜の淵公園付近", areaJa: "青梅市" },

  // June
  { id: "fussa-hotaru-matsuri", month: 6, nameJa: "福生ほたる祭り", date: "6月中旬", locationJa: "ほたる公園、玉川上水周辺（青梅橋付近）", areaJa: "福生市" },
  { id: "shimin-ongaku-sai", month: 6, nameJa: "市民音楽祭", date: "6月中旬", locationJa: "市民会館", areaJa: "福生市" },

  // July
  { id: "rengeshouma-matsuri", month: 7, nameJa: "レンゲショウマまつり", date: "7月下旬〜8月末", locationJa: "御岳山富士峰園地他", areaJa: "青梅市" },
  { id: "yakumo-matsuri", month: 7, nameJa: "八雲まつり", date: "7月下旬", locationJa: "福生市内全域", areaJa: "福生市" },
  { id: "kyodo-geino-matsuri", month: 7, nameJa: "郷土芸能まつり", date: "7月下旬〜8月上旬", locationJa: "秋川駅北口駅前大通り", areaJa: "あきる野市" },

  // September
  { id: "mitake-jinja-sairei", month: 9, nameJa: "御嶽神社祭礼", date: "9月1日", locationJa: "吉野岳", areaJa: "瑞穂町" },
  { id: "eiji-ki", month: 9, nameJa: "英治忌", date: "9月7日", locationJa: "吉川英治記念館", areaJa: "青梅市" },

  // October
  { id: "nihon-sangaku-taikyu-race", month: 10, nameJa: "日本山岳耐久レース", date: "10月上旬", locationJa: "奥多摩全山", areaJa: "あきる野市" },
  { id: "tenku-momiji-matsuri", month: 10, nameJa: "天空もみじまつり", date: "10月中旬〜11月中旬", locationJa: "御岳山", areaJa: "青梅市" },
  { id: "fussa-international-fair", month: 10, nameJa: "福生インターナショナルフェア", date: "10月中旬", locationJa: "横田基地前商店街周辺", areaJa: "福生市" },
  { id: "mitake-keikoku-shuushoku-matsuri", month: 10, nameJa: "みたけ渓谷秋色まつり", date: "10月下旬〜11月下旬", locationJa: "御岳渓谷", areaJa: "青梅市" },

  // November
  { id: "ome-sangyo-kanko-matsuri", month: 11, nameJa: "青梅産業観光まつり", date: "11月上旬", locationJa: "永山公園", areaJa: "青梅市" },
  { id: "omejuku-art-festival", month: 11, nameJa: "青梅宿アートフェスティバル", date: "11月中旬", locationJa: "青梅駅周辺", areaJa: "青梅市" },
  { id: "nishitama-sports-meet", month: 11, nameJa: "西多摩地域広域行政圏体育大会", date: "11月第3日曜日", locationJa: "※毎年会場が変わります", areaJa: "西多摩地域全域" },
  { id: "fussa-fureai-festival", month: 11, nameJa: "福生ふれあいフェスティバル", date: "11月上旬", locationJa: "市営福生野球場、市民会館他", areaJa: "福生市" },

  // December
  { id: "hossawa-fuyu-matsuri", month: 12, nameJa: "払沢の滝冬まつり", date: "12月〜3月中旬", locationJa: "払沢の滝", areaJa: "檜原村" },
  { id: "ougu-illumination", month: 12, nameJa: "大久野イルミネーション", date: "12月上旬〜下旬", locationJa: "大久野地区", areaJa: "日の出町" },
];

console.log(`📅 対象イベント数: ${sourceEvents.length}\n`);

// ============================================================
// Established place-name conventions — trimmed to just what these
// 35 events actually reference, to keep each prompt small (free-tier
// TPM budget is tight).
// ============================================================

type PlaceNameReference = { ja: string; en: string; zh: string; ko: string; ru: string };

const PLACE_NAME_REFERENCE: PlaceNameReference[] = [
  { ja: "御岳山", en: "Mount Mitake", zh: "御岳山", ko: "미타케산", ru: "Гора Митаке" },
  { ja: "御岳渓谷", en: "Mitake Gorge", zh: "御岳溪谷", ko: "미타케 계곡", ru: "Ущелье Митаке" },
  { ja: "武蔵御嶽神社", en: "Musashi Mitake Shrine", zh: "武藏御嶽神社", ko: "무사시 미타케 신사", ru: "Святилище Мусаси Митаке" },
  { ja: "吉野梅郷", en: "Yoshino Baigo", zh: "吉野梅乡", ko: "요시노 바이고", ru: "Йосино Байго" },
  { ja: "塩船観音寺", en: "Shiofune Kannon-ji", zh: "盐船观音寺", ko: "시오후네 관음사", ru: "Храм Сиофунэ Каннон-дзи" },
  { ja: "払沢の滝", en: "Hossawa Falls", zh: "拂泽瀑布", ko: "호사와 폭포", ru: "Водопад Хоссава" },
  { ja: "多摩川", en: "Tama River", zh: "多摩川", ko: "다마강", ru: "Река Тама" },
  { ja: "玉川上水", en: "Tamagawa Josui", zh: "玉川上水", ko: "다마가와 조스이", ru: "Тамагава Дзёсуй" },
  { ja: "青梅市", en: "Ome City", zh: "青梅市", ko: "오메시", ru: "Город Оме" },
  { ja: "福生市", en: "Fussa City", zh: "福生市", ko: "후사시", ru: "город Фусса" },
  { ja: "羽村市", en: "Hamura City", zh: "羽村市", ko: "하무라시", ru: "Город Хамура" },
  { ja: "日の出町", en: "Hinode Town", zh: "日之出町", ko: "히노데마치", ru: "город Хинодэ" },
  { ja: "瑞穂町", en: "Mizuho Town", zh: "瑞穗町", ko: "미즈호마치", ru: "город Мидзухо" },
  { ja: "あきる野市", en: "Akiruno City", zh: "秋留野市", ko: "아키루노시", ru: "Город Акируно" },
  { ja: "檜原村", en: "Hinohara Village", zh: "桧原村", ko: "히노하라촌", ru: "Деревня Хинохара" },
];

function formatPlaceNameReference(): string {
  return PLACE_NAME_REFERENCE.map(
    (r) => `- ${r.ja} -> en/vi/de: "${r.en}" | zh: "${r.zh}" | ko: "${r.ko}" | ru: "${r.ru}"`
  ).join("\n");
}

const PLACE_NAME_RULES = `Local place names inside the description prose: for en/vi/de keep established romanization (don't translate kanji meaning); for zh/ko/ru transliterate phonetically into that script (don't leave raw Latin text). Known names:
${formatPlaceNameReference()}
For names not listed, apply the same principle: romanize the specific root for en/vi/de, transliterate it for zh/ko/ru, translate only generic descriptor words (mountain/river/valley/shrine/park/festival).`;

// ============================================================
// One combined call per event: generate a factual ja description,
// then translate it into 6 languages, then give a single shared
// Latin-script name/location (en only — not per-language).
// ============================================================

const EVENT_JSON_SCHEMA = {
  type: "object",
  properties: {
    descriptionJa: { type: "string" },
    nameEn: { type: "string" },
    locationEn: { type: "string" },
    description: {
      type: "object",
      properties: {
        en: { type: "string" }, vi: { type: "string" }, zh: { type: "string" },
        ko: { type: "string" }, de: { type: "string" }, ru: { type: "string" },
      },
      required: ["en", "vi", "zh", "ko", "de", "ru"],
      additionalProperties: false,
    },
  },
  required: ["descriptionJa", "nameEn", "locationEn", "description"],
  additionalProperties: false,
} as const;

type Localized6 = Record<TargetLanguage, string>;
type EventResult = {
  descriptionJa: string;
  nameEn: string;
  locationEn: string;
  description: Localized6;
};

function isValidResult(value: unknown): value is EventResult {
  if (!value || typeof value !== "object") return false;
  const r = value as Record<string, unknown>;
  if (typeof r.descriptionJa !== "string" || !r.descriptionJa.trim()) return false;
  if (typeof r.nameEn !== "string" || !r.nameEn.trim()) return false;
  if (typeof r.locationEn !== "string" || !r.locationEn.trim()) return false;
  if (!r.description || typeof r.description !== "object") return false;
  const d = r.description as Record<string, unknown>;
  return TARGET_LANGUAGES.every((lang) => typeof d[lang] === "string" && (d[lang] as string).trim().length > 0);
}

function buildPrompt(event: SourceEvent, extra?: string): string {
  const skipLocation = event.locationJa.startsWith("※");
  return `
You are building a multilingual event calendar for a tourism website about the Nishi Tama region of Tokyo, Japan.

Event:
- Japanese name: ${event.nameJa}
- Date: ${event.date}
- Japanese location: ${event.locationJa}
- Area: ${event.areaJa}

1. Write a short, factual 1-2 sentence description of this event IN JAPANESE, based only on the name/date/location/area above. Do not invent unstated details.
2. Translate that description into exactly 6 languages: en, vi, zh, ko, de, ru. ${PLACE_NAME_RULES}
3. Give "nameEn": a single Latin-script name for the event (used for ALL non-Japanese readers, not translated per-language). Reuse an established English name if this is a well-known place/shrine/landmark; otherwise natural Hepburn romanization for Japanese-name parts, natural English words for generic descriptors (festival/market/tournament), and keep any katakana loanword (カフェ=Cafe etc.) as the actual foreign word. Never invent a fake "official" brand name.
4. Give "locationEn": same single-shared-Latin-name treatment for the location "${event.locationJa}".${skipLocation ? ` This location literally means "venue varies each year" — just return it as "${event.locationJa}" unchanged, it is not a place name.` : ""}

Return ONLY the requested JSON object.
${extra ?? ""}
`;
}

async function requestEvent(event: SourceEvent, extra?: string): Promise<EventResult> {
  const response = await groq.chat.completions.create({
    model: MODEL,
    messages: [{ role: "user", content: buildPrompt(event, extra) }],
    response_format: {
      type: "json_schema",
      json_schema: { name: "event", strict: true, schema: EVENT_JSON_SCHEMA },
    },
  });

  const text = response.choices[0]?.message?.content;
  if (!text) throw new Error("no response");
  return JSON.parse(text) as EventResult;
}

async function generateEvent(event: SourceEvent): Promise<EventResult> {
  const first = await withRateLimitRetry(() => requestEvent(event));
  if (isValidResult(first)) return first;

  console.warn("   ⚠️ 形式が不正のため再試行します。");
  const retry = await withRateLimitRetry(() =>
    requestEvent(
      event,
      "\n\nIMPORTANT: Your previous response was invalid/incomplete. Return ONLY a valid JSON object with descriptionJa, nameEn, locationEn (all non-empty strings) and description with all 6 non-empty language keys."
    )
  );
  if (!isValidResult(retry)) throw new Error("invalid response after retry");
  return retry;
}

// ============================================================
// Retry helper — backs off and retries once on a 429 rate-limit
// response instead of failing the whole event. Reads the server's
// own "try again in Xs" hint when present.
// ============================================================

async function withRateLimitRetry<T>(fn: () => Promise<T>): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (message.includes("429") || message.includes("rate_limit")) {
      const match = message.match(/try again in ([\d.]+)s/);
      const waitMs = match ? Math.ceil(parseFloat(match[1]) * 1000) + 1000 : 15000;
      console.warn(`   ⏳ レート制限のため${Math.round(waitMs / 1000)}秒待って再試行します。`);
      await sleep(waitMs);
      return fn();
    }
    throw error;
  }
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ============================================================
// Main
// ============================================================

const MONTH_TAG = ["", "jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

type ProposedEvent = {
  id: string;
  month: number;
  monthTag: string;
  date: string;
  ja: string;
  en: string;
  locationJa: string;
  locationEn: string;
  areaJa: string;
  description: Localized6 & { ja: string };
};

async function main() {
  const results: ProposedEvent[] = [];

  for (const event of sourceEvents) {
    console.log(`📅 [${MONTH_TAG[event.month]}] ${event.id} — ${event.nameJa}`);
    try {
      const result = await generateEvent(event);

      results.push({
        id: event.id,
        month: event.month,
        monthTag: MONTH_TAG[event.month],
        date: event.date,
        ja: event.nameJa,
        en: result.nameEn,
        locationJa: event.locationJa,
        locationEn: result.locationEn,
        areaJa: event.areaJa,
        description: { ja: result.descriptionJa, ...result.description },
      });
      console.log(`   ✅ ${result.nameEn}\n`);
    } catch (error) {
      console.error(`   ❌ 失敗: ${event.id}`, error instanceof Error ? error.message : error);
    }

    // Pace conservatively: free-tier TPM budget is 8000/min and each
    // combined call runs ~3000-4000 tokens.
    await sleep(12000);
  }

  const outPath = path.join(
    path.resolve(import.meta.dirname, ".."),
    "scripts",
    "proposed-events.json"
  );
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), "utf-8");
  console.log(`\n💾 提案リストを書き出しました: ${outPath}`);
  console.log(`✅ 完了: ${results.length}/${sourceEvents.length} 件`);
}

main().catch((error) => {
  console.error("\n❌ エラー:", error);
  process.exit(1);
});
