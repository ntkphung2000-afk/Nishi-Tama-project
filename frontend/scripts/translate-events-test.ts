import Groq from "groq-sdk";
import * as dotenv from "dotenv";

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

// --- 3 sample events for testing (console output only, does NOT write to events.ts) ---
const testEvents = [
  {
    id: "eiji-ki",
    nameJa: "英治忌",
    date: "9月7日",
    locationJa: "吉川英治記念館",
    areaJa: "青梅市",
  },
  {
    id: "nishitama-sports-meet",
    nameJa: "西多摩地域広域行政圏体育大会",
    date: "第3日曜日",
    locationJa: "※毎年会場が変わります",
    areaJa: "西多摩地域全域",
  },
  {
    id: "yoshino-baigo-ume-matsuri",
    nameJa: "吉野梅郷 梅まつり",
    date: "3月上旬〜下旬",
    locationJa: "吉野梅郷",
    areaJa: "青梅市",
  },
];

// Reference: established romanization/transliteration conventions
// already used elsewhere in this codebase (areas.ts, content.ts,
// stations.ts). For en/vi/de these names stay romanized (not
// translated by kanji meaning). For zh/ko/ru they are NOT left as
// raw Latin text either — content.ts always gives them a proper
// native-script transliteration, so we do the same here.
type PlaceNameReference = { ja: string; en: string; zh: string; ko: string; ru: string };

const PLACE_NAME_REFERENCE: PlaceNameReference[] = [
  { ja: "吉野梅郷", en: "Yoshino Baigo", zh: "吉野梅乡", ko: "요시노 바이고", ru: "Йосино Байго" },
  { ja: "御岳山", en: "Mount Mitake", zh: "御岳山", ko: "미타케산", ru: "Гора Митаке" },
  { ja: "御岳渓谷", en: "Mitake Gorge", zh: "御岳溪谷", ko: "미타케 계곡", ru: "Ущелье Митаке" },
  { ja: "武蔵御嶽神社", en: "Musashi Mitake Shrine", zh: "武藏御嶽神社", ko: "무사시 미타케 신사", ru: "Святилище Мусаси Митаке" },
  { ja: "塩船観音寺", en: "Shiofune Kannon-ji", zh: "盐船观音寺", ko: "시오후네 관음사", ru: "Храм Сиофунэ Каннон-дзи" },
  { ja: "払沢の滝", en: "Hossawa Falls", zh: "拂泽瀑布", ko: "호사와 폭포", ru: "Водопад Хоссава" },
  { ja: "多摩川", en: "Tama River", zh: "多摩川", ko: "다마강", ru: "Река Тама" },
  { ja: "秋川渓谷", en: "Akigawa Valley", zh: "秋川溪谷", ko: "아키가와 계곡", ru: "Долина Акигава" },
  { ja: "奥多摩湖", en: "Lake Okutama", zh: "奥多摩湖", ko: "오쿠타마호", ru: "Озеро Окутама" },
  { ja: "奥多摩町", en: "Okutama Town", zh: "奥多摩町", ko: "오쿠타마정", ru: "Поселок Окутама" },
  { ja: "青梅市", en: "Ome City", zh: "青梅市", ko: "오메시", ru: "Город Оме" },
  { ja: "福生市", en: "Fussa City", zh: "福生市", ko: "후사시", ru: "город Фусса" },
  { ja: "羽村市", en: "Hamura City", zh: "羽村市", ko: "하무라시", ru: "Город Хамура" },
  { ja: "あきる野市", en: "Akiruno City", zh: "秋留野市", ko: "아키루노시", ru: "Город Акируно" },
  { ja: "日の出町", en: "Hinode Town", zh: "日之出町", ko: "히노데마치", ru: "город Хинодэ" },
  { ja: "檜原村", en: "Hinohara Village", zh: "桧原村", ko: "히노하라촌", ru: "Деревня Хинохара" },
];

function formatPlaceNameReference(): string {
  return PLACE_NAME_REFERENCE.map(
    (r) => `- ${r.ja} -> en/vi/de: "${r.en}" | zh: "${r.zh}" | ko: "${r.ko}" | ru: "${r.ru}"`
  ).join("\n");
}

const LOCALIZED_SCHEMA = {
  type: "object",
  properties: {
    en: { type: "string" },
    vi: { type: "string" },
    zh: { type: "string" },
    ko: { type: "string" },
    de: { type: "string" },
    ru: { type: "string" },
  },
  required: ["en", "vi", "zh", "ko", "de", "ru"],
  additionalProperties: false,
} as const;

const EVENT_JSON_SCHEMA = {
  type: "object",
  properties: {
    descriptionJa: { type: "string" },
    name: LOCALIZED_SCHEMA,
    location: LOCALIZED_SCHEMA,
    description: LOCALIZED_SCHEMA,
  },
  required: ["descriptionJa", "name", "location", "description"],
  additionalProperties: false,
} as const;

type Localized6 = Record<TargetLanguage, string>;
type EventTranslationResult = {
  descriptionJa: string;
  name: Localized6;
  location: Localized6;
  description: Localized6;
};

function isValidLocalized6(value: unknown): value is Localized6 {
  if (!value || typeof value !== "object") return false;
  const record = value as Record<string, unknown>;
  return TARGET_LANGUAGES.every(
    (lang) => typeof record[lang] === "string" && record[lang].trim().length > 0
  );
}

function isValidResult(value: unknown): value is EventTranslationResult {
  if (!value || typeof value !== "object") return false;
  const record = value as Record<string, unknown>;
  return (
    typeof record.descriptionJa === "string" &&
    record.descriptionJa.trim().length > 0 &&
    isValidLocalized6(record.name) &&
    isValidLocalized6(record.location) &&
    isValidLocalized6(record.description)
  );
}

function buildPrompt(event: (typeof testEvents)[number]): string {
  return `
You are helping build a multilingual event calendar for a tourism website about the Nishi Tama region of Tokyo, Japan.

Event:
- Japanese name: ${event.nameJa}
- Date: ${event.date}
- Japanese location: ${event.locationJa}
- Area: ${event.areaJa}

Step 1: Write a short, factual 1-2 sentence description of this event IN JAPANESE, based only on the event name, date, and location given above. Do NOT invent details (attendance figures, specific activities, history) that are not reasonably implied by the name/location/type itself.

Step 2: Translate the event name, the location, and your Japanese description into exactly these 6 languages: English (en), Vietnamese (vi), Simplified Chinese (zh), Korean (ko), German (de), Russian (ru).

This text may reference local place names (mountains, rivers, valleys, shrines, neighborhoods). For en/vi/de, preserve their established romanization instead of translating the literal meaning of the kanji. For zh/ko/ru, do NOT leave the name as raw Latin/English text either — transliterate it phonetically into that language's own script, matching the site's established convention. Reference examples already used on this site:
${formatPlaceNameReference()}
For place names not listed above, apply the same principle: keep the specific name root as a natural Hepburn romanization for en/vi/de, phonetically transliterate it into zh/ko/ru's native script, and only translate generic descriptor words (mountain, river, valley, shrine, festival, etc.) into the target language.

Requirements:
1. Preserve the original meaning accurately.
2. Use natural, welcoming language suitable for an international tourism website.
3. Do NOT translate proper nouns unnecessarily — see the romanization rule above.
4. Do not add information that does not exist in the Japanese text.
5. Keep translations concise and natural.
6. Return ONLY the requested JSON object.
`;
}

async function requestEventTranslation(
  event: (typeof testEvents)[number],
  extraInstruction?: string
): Promise<EventTranslationResult> {
  const prompt = buildPrompt(event) + (extraInstruction ?? "");

  const response = await groq.chat.completions.create({
    model: MODEL,
    messages: [{ role: "user", content: prompt }],
    response_format: {
      type: "json_schema",
      json_schema: {
        name: "event_translation",
        strict: true,
        schema: EVENT_JSON_SCHEMA,
      },
    },
  });

  const text = response.choices[0]?.message?.content;
  if (!text) {
    throw new Error("❌ Groq API から翻訳結果を取得できませんでした。");
  }

  return JSON.parse(text) as EventTranslationResult;
}

async function translateEvent(
  event: (typeof testEvents)[number]
): Promise<EventTranslationResult> {
  const first = await requestEventTranslation(event);
  if (isValidResult(first)) return first;

  console.warn("   ⚠️ 翻訳結果の形式が不正のため、1回だけ再試行します。");
  const retry = await requestEventTranslation(
    event,
    "\n\nIMPORTANT: Your previous response was invalid or incomplete. Return ONLY a valid JSON object with descriptionJa plus name/location/description, each containing all 6 non-empty string keys: en, vi, zh, ko, de, ru."
  );

  if (!isValidResult(retry)) {
    throw new Error("❌ Groq の翻訳結果が期待した形式になっていません。");
  }
  return retry;
}

function printLocalized(label: string, value: Localized6) {
  console.log(`   ${label}:`);
  for (const lang of TARGET_LANGUAGES) {
    console.log(`     ${lang}: ${value[lang]}`);
  }
}

async function runTest() {
  console.log(
    "🧪 Test dịch 3 sự kiện mẫu (chỉ in ra màn hình, KHÔNG ghi events.ts)\n"
  );

  for (const event of testEvents) {
    console.log(`📅 [${event.id}] ${event.nameJa}`);
    console.log(`   date: ${event.date}`);
    console.log(`   location (ja): ${event.locationJa}`);
    console.log(`   area (ja): ${event.areaJa}`);

    try {
      const result = await translateEvent(event);

      console.log(`   descriptionJa: ${result.descriptionJa}`);
      printLocalized("name", result.name);
      printLocalized("location", result.location);
      printLocalized("description", result.description);
      console.log("   ✅ OK\n");
    } catch (error) {
      console.error("   ❌ Lỗi:", error instanceof Error ? error.message : error);
      console.log("");
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  console.log("🎉 Test hoàn tất.");
}

runTest().catch((error) => {
  console.error("\n❌ Lỗi không mong muốn:", error);
  process.exit(1);
});
