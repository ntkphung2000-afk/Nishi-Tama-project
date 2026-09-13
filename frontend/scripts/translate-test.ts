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

// --- 3 địa điểm mẫu để test ---
const testPlaces = [
  {
    name: "かふぇ・ばいきょう",
    ja: "落ち着いた空間でゆっくり過ごせるカフェ。テラス席もあります。",
  },
  {
    name: "紅梅苑",
    ja: "梅の風味を生かした和菓子や甘味を楽しめる、吉野梅郷の菓子処。",
  },
  {
    name: "青梅市梅の公園",
    ja: "約1,200本の梅が植えられた、吉野梅郷を代表する梅の名所。",
  },
];

function buildPrompt(japaneseText: string): string {
  return `
You are a professional multilingual tourism translator.

Translate the following Japanese tourism website text into exactly these 6 languages:

- English (en)
- Vietnamese (vi)
- Simplified Chinese (zh)
- Korean (ko)
- German (de)
- Russian (ru)

Requirements:
1. Preserve the original meaning accurately.
2. Use natural, welcoming language suitable for an international tourism website.
3. Do NOT translate proper nouns unnecessarily.
4. Do not add information that does not exist in the Japanese text.
5. Do not remove important information.
6. Keep the translation concise and natural.
7. Return ONLY the requested JSON object.

Japanese:
${japaneseText}
`;
}

const TRANSLATION_JSON_SCHEMA = {
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

function isValidTranslation(
  value: unknown
): value is Record<TargetLanguage, string> {
  if (!value || typeof value !== "object") return false;
  const record = value as Record<string, unknown>;
  return TARGET_LANGUAGES.every(
    (lang) => typeof record[lang] === "string" && record[lang].trim().length > 0
  );
}

async function requestTranslation(
  prompt: string
): Promise<Record<TargetLanguage, string>> {
  const response = await groq.chat.completions.create({
    model: MODEL,
    messages: [{ role: "user", content: prompt }],
    response_format: {
      type: "json_schema",
      json_schema: {
        name: "translation",
        strict: true,
        schema: TRANSLATION_JSON_SCHEMA,
      },
    },
  });

  const text = response.choices[0]?.message?.content;
  if (!text) {
    throw new Error("❌ Groq API から翻訳結果を取得できませんでした。");
  }

  return JSON.parse(text) as Record<TargetLanguage, string>;
}

async function translateText(
  japaneseText: string
): Promise<Record<TargetLanguage, string>> {
  const prompt = buildPrompt(japaneseText);

  const first = await requestTranslation(prompt);
  if (isValidTranslation(first)) {
    return first;
  }

  // Retry once with a stricter instruction if the shape came back malformed.
  console.warn("   ⚠️ 翻訳結果の形式が不正のため、1回だけ再試行します。");
  const retryPrompt = `${prompt}\n\nIMPORTANT: Your previous response was invalid. Return ONLY a valid JSON object with exactly these 6 non-empty string keys: en, vi, zh, ko, de, ru. No extra text, no missing keys.`;
  const retry = await requestTranslation(retryPrompt);

  if (!isValidTranslation(retry)) {
    throw new Error("❌ Groq の翻訳結果が6言語すべてを含んでいません。");
  }

  return retry;
}

async function runTest() {
  console.log("🧪 Test dịch 3 địa điểm mẫu (chỉ in ra màn hình, KHÔNG ghi file)\n");

  for (const place of testPlaces) {
    console.log(`📍 ${place.name}`);
    console.log(`   ja: ${place.ja}`);

    try {
      const translated = await translateText(place.ja);
      for (const lang of TARGET_LANGUAGES) {
        console.log(`   ${lang}: ${translated[lang]}`);
      }
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
