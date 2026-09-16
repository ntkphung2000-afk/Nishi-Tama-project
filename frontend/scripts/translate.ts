import Groq from "groq-sdk";
import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";
import * as ts from "typescript";

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

// ============================================================
// Configuration
// ============================================================

const TARGET_LANGUAGES = ["en", "vi", "zh", "ko", "de", "ru"] as const;

type TargetLanguage = (typeof TARGET_LANGUAGES)[number];

const DESCRIPTION_FIELDS = ["ja", ...TARGET_LANGUAGES] as const;

type Localized = Partial<Record<(typeof DESCRIPTION_FIELDS)[number], string>>;

// Only the fields this script actually reads from each place object.
type ExtractedPlace = {
  id: string;
  nameJa?: string;
  nameEn?: string;
  description: Localized;
};

// ============================================================
// Paths
// ============================================================

const projectRoot = path.resolve(import.meta.dirname, "..");
const placesPath = path.join(projectRoot, "src", "data", "places.ts");

// ============================================================
// Read places.ts
// ============================================================

function readPlacesFile(): string {
  if (!fs.existsSync(placesPath)) {
    throw new Error(`places.ts が見つかりません: ${placesPath}`);
  }

  return fs.readFileSync(placesPath, "utf-8");
}

// ============================================================
// Parse places.ts with the TypeScript compiler API
//
// IMPORTANT:
// places.ts is real TypeScript source (unquoted keys, comments,
// etc.), not JSON, so we never JSON.parse it. We parse it into an
// AST and read values directly off the nodes. This also gives us
// the exact character range of each place's `description` object
// later, so writing back only ever touches that one property.
// ============================================================

function getStringLiteralValue(
  expr: ts.Expression | undefined
): string | undefined {
  return expr && ts.isStringLiteralLike(expr) ? expr.text : undefined;
}

function getProperty(
  obj: ts.ObjectLiteralExpression,
  name: string
): ts.PropertyAssignment | undefined {
  return obj.properties.find(
    (prop): prop is ts.PropertyAssignment =>
      ts.isPropertyAssignment(prop) &&
      ts.isIdentifier(prop.name) &&
      prop.name.text === name
  );
}

function findPlacesArrayLiteral(
  sourceFile: ts.SourceFile
): ts.ArrayLiteralExpression {
  let found: ts.ArrayLiteralExpression | undefined;

  const visit = (node: ts.Node) => {
    if (found) return;
    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.name.text === "places" &&
      node.initializer &&
      ts.isArrayLiteralExpression(node.initializer)
    ) {
      found = node.initializer;
      return;
    }
    node.forEachChild(visit);
  };

  sourceFile.forEachChild(visit);

  if (!found) {
    throw new Error(
      "❌ places.ts から `export const places: Place[] = [...]` を見つけられませんでした。"
    );
  }

  return found;
}

function extractDescription(obj: ts.ObjectLiteralExpression): Localized {
  const descProp = getProperty(obj, "description");
  const description: Localized = {};

  if (!descProp || !ts.isObjectLiteralExpression(descProp.initializer)) {
    return description;
  }

  for (const field of DESCRIPTION_FIELDS) {
    const value = getStringLiteralValue(
      getProperty(descProp.initializer, field)?.initializer
    );
    if (value !== undefined) {
      description[field] = value;
    }
  }

  return description;
}

function parsePlacesFile(source: string): {
  sourceFile: ts.SourceFile;
  places: ExtractedPlace[];
} {
  const sourceFile = ts.createSourceFile(
    "places.ts",
    source,
    ts.ScriptTarget.Latest,
    true
  );

  const places = findPlacesArrayLiteral(sourceFile)
    .elements.filter(ts.isObjectLiteralExpression)
    .map(
      (obj): ExtractedPlace => ({
        id: getStringLiteralValue(getProperty(obj, "id")?.initializer) ?? "",
        nameJa: getStringLiteralValue(getProperty(obj, "nameJa")?.initializer),
        nameEn: getStringLiteralValue(getProperty(obj, "nameEn")?.initializer),
        description: extractDescription(obj),
      })
    );

  return { sourceFile, places };
}

// ============================================================
// Established place-name conventions
//
// Cross-checked against areas.ts / content.ts / stations.ts. For
// Latin-script languages (en/vi/de) these names stay romanized, not
// translated by kanji meaning. For zh/ko/ru they are NOT left as raw
// Latin text either — they get the site's own native-script
// transliteration, matching what content.ts already uses everywhere.
// ============================================================

type PlaceNameReference = {
  ja: string;
  en: string;
  zh: string;
  ko: string;
  ru: string;
};

const PLACE_NAME_REFERENCE: PlaceNameReference[] = [
  { ja: "御岳山", en: "Mount Mitake", zh: "御岳山", ko: "미타케산", ru: "Гора Митаке" },
  { ja: "御岳渓谷", en: "Mitake Gorge", zh: "御岳溪谷", ko: "미타케 계곡", ru: "Ущелье Митаке" },
  { ja: "武蔵御嶽神社", en: "Musashi Mitake Shrine", zh: "武藏御嶽神社", ko: "무사시 미타케 신사", ru: "Святилище Мусаси Митаке" },
  { ja: "御岳岩石園", en: "Mitake Rock Garden", zh: "御岳岩石园", ko: "미타케 록 가든", ru: "Скальный сад Митаке" },
  { ja: "吉野梅郷", en: "Yoshino Baigo", zh: "吉野梅乡", ko: "요시노 바이고", ru: "Йосино Байго" },
  { ja: "青梅旧市街", en: "Ome Old Town", zh: "青梅旧街区", ko: "오메 구시가지", ru: "Старый город Оме" },
  { ja: "釜の淵公園", en: "Kamanofuchi Park", zh: "釜之渊公园", ko: "카마노후치 공원", ru: "Парк Каманофути" },
  { ja: "塩船観音寺", en: "Shiofune Kannon-ji", zh: "盐船观音寺", ko: "시오후네 관음사", ru: "Храм Сиофунэ Каннон-дзи" },
  { ja: "秋川渓谷", en: "Akigawa Valley", zh: "秋川溪谷", ko: "아키가와 계곡", ru: "Долина Акигава" },
  { ja: "あきる野市", en: "Akiruno City", zh: "秋留野市", ko: "아키루노시", ru: "Город Акируно" },
  { ja: "払沢の滝", en: "Hossawa Falls", zh: "拂泽瀑布", ko: "호사와 폭포", ru: "Водопад Хоссава" },
  { ja: "檜原村", en: "Hinohara Village", zh: "桧原村", ko: "히노하라촌", ru: "Деревня Хинохара" },
  { ja: "奥多摩湖", en: "Lake Okutama", zh: "奥多摩湖", ko: "오쿠타마호", ru: "Озеро Окутама" },
  { ja: "奥多摩町", en: "Okutama Town", zh: "奥多摩町", ko: "오쿠타마정", ru: "Поселок Окутама" },
  { ja: "小河内ダム", en: "Ogochi Dam", zh: "小河内水坝", ko: "오고치 댐", ru: "Дамба Оготи" },
  { ja: "日原鍾乳洞", en: "Nippara Limestone Cave", zh: "日原钟乳洞", ko: "니파라 종유동", ru: "Карстовая пещера Ниппара" },
  { ja: "白丸湖", en: "Shiromaru Lake", zh: "白丸湖", ko: "시로마루호", ru: "Озеро Сиромару" },
  { ja: "多摩川", en: "Tama River", zh: "多摩川", ko: "다마강", ru: "Река Тама" },
  { ja: "鳩ノ巣渓谷", en: "Hatonosu Valley", zh: "鸠之巢溪谷", ko: "하토노스 계곡", ru: "Ущелье Хатоносу" },
  { ja: "百尋ノ滝", en: "Hyakuhiro Falls", zh: "百寻瀑布", ko: "하쿠히로 폭포", ru: "Водопад Хякухиро" },
  { ja: "氷川エリア", en: "Hikawa Area", zh: "冰川地区", ko: "히카와 에리어", ru: "Район Хикава" },
  { ja: "日の出山", en: "Mount Hinode", zh: "日之出山", ko: "히노데산", ru: "Гора Хиноде" },
  { ja: "日の出町", en: "Hinode Town", zh: "日之出町", ko: "히노데마치", ru: "город Хинодэ" },
  { ja: "大岳山", en: "Mount Odake", zh: "大岳山", ko: "오다케산", ru: "Гора Одакэ" },
  { ja: "羽村市動物公園", en: "Hamura Zoo", zh: "羽村市动物公园", ko: "하무라시 동물공원", ru: "Зоопарк Хамура" },
  { ja: "羽村市", en: "Hamura City", zh: "羽村市", ko: "하무라시", ru: "Город Хамура" },
  { ja: "東京サマーランド", en: "Tokyo Summerland", zh: "东京夏乐园（Summerland）", ko: "도쿄 서머랜드", ru: "Токио Саммерленд" },
  { ja: "ひので三ツ沢つるつる温泉", en: "Hinode Tsurutsuru Onsen", zh: "日之出鹤鹤温泉", ko: "히노데 츠루츠루 온천", ru: "Онсэн Хиноде Цурутсуру" },
  { ja: "小澤酒造（澤乃井）", en: "Ozawa Sake Brewery (Sawanoi)", zh: "小泽酒造（泽乃井）", ko: "오자와 주조 (사와노이)", ru: "Пивоварня сакэ Одзава (Саваноэ)" },
  { ja: "石川酒造", en: "Ishikawa Brewery", zh: "石川酒造", ko: "이시카와 주조", ru: "Пивоварня Исикава" },
  { ja: "福生市", en: "Fussa City", zh: "福生市", ko: "후사시", ru: "город Фусса" },
];

function formatPlaceNameReference(): string {
  return PLACE_NAME_REFERENCE.map(
    (r) => `- ${r.ja} -> en/vi/de: "${r.en}" | zh: "${r.zh}" | ko: "${r.ko}" | ru: "${r.ru}"`
  ).join("\n");
}

const PLACE_NAME_RULES = `
This text may reference local place names (mountains, rivers, valleys, shrines, neighborhoods). For en/vi/de, preserve their established romanization instead of translating the literal meaning of the kanji. For zh/ko/ru, do NOT leave the name as raw Latin/English text either — transliterate it phonetically into that language's own script, matching the site's established convention. Reference examples already used on this site:
${formatPlaceNameReference()}
For place names not listed above, apply the same principle: keep the specific name root as a natural Hepburn romanization for en/vi/de, phonetically transliterate it into zh/ko/ru's native script, and only translate generic descriptor words (mountain, river, valley, shrine, park, festival, etc.) into the target language.
`;

// ============================================================
// Translate Japanese → 6 languages
// ============================================================

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
${PLACE_NAME_RULES}
Requirements:
1. Preserve the original meaning accurately.
2. Use natural, welcoming language suitable for an international tourism website.
3. Do NOT translate proper nouns unnecessarily — see the place-name rule above.
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
  console.warn("  ⚠️ 翻訳結果の形式が不正のため、1回だけ再試行します。");
  const retryPrompt = `${prompt}\n\nIMPORTANT: Your previous response was invalid. Return ONLY a valid JSON object with exactly these 6 non-empty string keys: en, vi, zh, ko, de, ru. No extra text, no missing keys.`;
  const retry = await requestTranslation(retryPrompt);

  if (!isValidTranslation(retry)) {
    throw new Error("❌ Groq の翻訳結果が6言語すべてを含んでいません。");
  }

  return retry;
}

// ============================================================
// Propose a single shared Latin-script name for places missing nameEn
//
// One name is used for ALL non-Japanese languages (en/vi/zh/ko/de/ru)
// — not translated per language, matching how nameEn is already a
// single shared field on Place, never a Localized per-language one.
// ============================================================

const NAME_JSON_SCHEMA = {
  type: "object",
  properties: {
    name: { type: "string" },
  },
  required: ["name"],
  additionalProperties: false,
} as const;

function buildNamePrompt(nameJa: string): string {
  return `
You are naming places for a multilingual tourism website about the Nishi Tama region of Tokyo, Japan.
${PLACE_NAME_RULES}
Task: give a single Latin-script name for this Japanese place name, to be used for ALL non-Japanese languages (English, Vietnamese, Chinese, Korean, German, Russian) — not translated per language, just one shared Latin-script string.

Rules:
1. If this is a well-known official place (shrine, park, station, landmark), use its standard English name if one exists.
2. If the name contains a katakana word borrowed from English or another Western language (e.g. カフェ = Cafe, スイーツ = Sweets, レストラン = Restaurant, ベーカリー = Bakery), render that part as the actual foreign word, not a phonetic romanization of the katakana.
3. For genuinely Japanese words (kanji, hiragana, personal names), use natural Hepburn-style romanization. Do NOT translate the meaning into English. Do NOT invent an "official-sounding" English brand name that doesn't exist.
4. Keep it concise — this is a name, not a description.
5. Return ONLY the requested JSON object with a single "name" field.

Japanese name:
${nameJa}
`;
}

async function requestName(nameJa: string): Promise<string> {
  const response = await groq.chat.completions.create({
    model: MODEL,
    messages: [{ role: "user", content: buildNamePrompt(nameJa) }],
    response_format: {
      type: "json_schema",
      json_schema: {
        name: "place_name",
        strict: true,
        schema: NAME_JSON_SCHEMA,
      },
    },
  });

  const text = response.choices[0]?.message?.content;
  if (!text) throw new Error("❌ Groq API から名前を取得できませんでした。");

  const result = JSON.parse(text) as { name?: string };
  if (!result.name || typeof result.name !== "string" || !result.name.trim()) {
    throw new Error("❌ Groq からの名前が空です。");
  }
  return result.name;
}

// ============================================================
// Escape text for TypeScript string
// ============================================================

function escapeTsString(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\r?\n/g, "\\n");
}

// ============================================================
// Render a Localized description as TS object-literal source text
// (just the `{ ... }` body — no `description:` prefix, no
// trailing comma, since we splice this in place of the existing
// initializer node and its surroundings stay untouched).
// ============================================================

function createDescriptionObjectText(
  description: Localized,
  indent: string
): string {
  const lines: string[] = ["{"];

  for (const field of DESCRIPTION_FIELDS) {
    const value = description[field];
    if (value) {
      lines.push(`${indent}  ${field}: "${escapeTsString(value)}",`);
    }
  }

  lines.push(`${indent}}`);

  return lines.join("\n");
}

// ============================================================
// Apply translated descriptions and proposed names to places.ts
//
// Both kinds of edit are located directly from the parsed AST (not
// by pattern-matching text): a description edit replaces the exact
// character range of that place's `description: { ... }` object; a
// name edit inserts `nameEn: "...",` immediately before the existing
// `nameJa` property (matching the Place type's declared field
// order). All edits — of both kinds, across all places — are
// collected into one list and applied back-to-front so earlier
// offsets stay valid. Everything else in the file — mapUrl, website,
// _internal, comments, property order — is untouched.
// ============================================================

function applyUpdates(
  source: string,
  sourceFile: ts.SourceFile,
  translatedPlaces: Map<string, Localized>,
  proposedNames: Map<string, string>
): string {
  const edits: { start: number; end: number; text: string }[] = [];

  for (const obj of findPlacesArrayLiteral(sourceFile).elements) {
    if (!ts.isObjectLiteralExpression(obj)) continue;

    const id = getStringLiteralValue(getProperty(obj, "id")?.initializer);
    if (!id) continue;

    if (translatedPlaces.has(id)) {
      const descProp = getProperty(obj, "description");
      if (!descProp || !ts.isObjectLiteralExpression(descProp.initializer)) {
        console.warn(`⚠️ description を置換できませんでした: ${id}`);
      } else {
        const { character } = sourceFile.getLineAndCharacterOfPosition(
          descProp.getStart(sourceFile)
        );

        edits.push({
          start: descProp.initializer.getStart(sourceFile),
          end: descProp.initializer.getEnd(),
          text: createDescriptionObjectText(
            translatedPlaces.get(id)!,
            " ".repeat(character)
          ),
        });
      }
    }

    if (proposedNames.has(id)) {
      const nameJaProp = getProperty(obj, "nameJa");
      if (!nameJaProp) {
        console.warn(`⚠️ nameEn を追加できませんでした（nameJa が見つかりません）: ${id}`);
      } else {
        const { character } = sourceFile.getLineAndCharacterOfPosition(
          nameJaProp.getStart(sourceFile)
        );
        const indent = " ".repeat(character);
        const at = nameJaProp.getStart(sourceFile);

        edits.push({
          start: at,
          end: at,
          text: `nameEn: "${escapeTsString(proposedNames.get(id)!)}",\n${indent}`,
        });
      }
    }
  }

  // Apply from the end of the file backwards so earlier offsets
  // stay valid as each edit is spliced in.
  edits.sort((a, b) => b.start - a.start);

  let updatedSource = source;
  for (const edit of edits) {
    updatedSource =
      updatedSource.slice(0, edit.start) +
      edit.text +
      updatedSource.slice(edit.end);
  }

  return updatedSource;
}

// ============================================================
// Main
// ============================================================

async function runTranslation() {
  console.log("🚀 Nishi Tama 多言語翻訳を開始します...\n");

  const originalSource = readPlacesFile();

  const { sourceFile, places } = parsePlacesFile(originalSource);

  console.log(`📍 places.ts: ${places.length} 件\n`);

  const translatedPlaces = new Map<string, Localized>();
  const proposedNames = new Map<string, string>();

  let translatedCount = 0;
  let namedCount = 0;
  let skippedCount = 0;

  for (const place of places) {
    const name = place.nameJa ?? place.nameEn ?? place.id;

    console.log(`📍 ${name}`);

    // --------------------------------------------------------
    // Missing a Latin-script name — propose one (single shared
    // name for all non-Japanese languages, same as places already
    // backfilled in an earlier pass).
    // --------------------------------------------------------

    if (!place.nameEn && place.nameJa) {
      try {
        const proposed = await requestName(place.nameJa);
        proposedNames.set(place.id, proposed);
        console.log(`  🏷️ nameEn 提案: ${proposed}`);
        namedCount++;
        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (error) {
        console.error(`  ❌ 名前生成失敗: ${name}`);
        if (error instanceof Error) console.error(`     ${error.message}`);
      }
    }

    // --------------------------------------------------------
    // No Japanese description
    // --------------------------------------------------------

    if (!place.description?.ja) {
      console.log("  ⏭️ 日本語の説明文がないため説明の翻訳はスキップ\n");
      skippedCount++;
      continue;
    }

    // --------------------------------------------------------
    // Check missing languages
    // --------------------------------------------------------

    const missingLanguages = TARGET_LANGUAGES.filter(
      (lang) => !place.description?.[lang]
    );

    if (missingLanguages.length === 0) {
      console.log("  ✅ すでに6言語すべて翻訳済み → スキップ\n");
      skippedCount++;
      continue;
    }

    console.log(
      `  🌐 翻訳対象: ${missingLanguages.join(", ")}`
    );

    try {
      const translated = await translateText(place.description.ja);

      const updatedDescription: Localized = {
        ...place.description,
        ja: place.description.ja,
      };

      // Only fill missing languages.
      for (const lang of missingLanguages) {
        updatedDescription[lang] = translated[lang];
      }

      translatedPlaces.set(place.id, updatedDescription);

      console.log("  ✅ 翻訳完了\n");

      translatedCount++;

      // Small delay to avoid sending requests too quickly.
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`  ❌ 翻訳失敗: ${name}`);

      if (error instanceof Error) {
        console.error(`     ${error.message}`);
      }

      console.log("");
    }
  }

  // ----------------------------------------------------------
  // Nothing to update
  // ----------------------------------------------------------

  if (translatedPlaces.size === 0 && proposedNames.size === 0) {
    console.log("ℹ️ 更新するデータはありません。");
    return;
  }

  // ----------------------------------------------------------
  // Update descriptions and insert proposed names
  // ----------------------------------------------------------

  const updatedSource = applyUpdates(
    originalSource,
    sourceFile,
    translatedPlaces,
    proposedNames
  );

  // ----------------------------------------------------------
  // Safety check
  // ----------------------------------------------------------

  if (updatedSource === originalSource) {
    throw new Error(
      "❌ 翻訳データを更新できませんでした。元の places.ts は変更していません。"
    );
  }

  // ----------------------------------------------------------
  // Backup before writing
  // ----------------------------------------------------------

  const backupPath = `${placesPath}.backup`;

  fs.writeFileSync(
    backupPath,
    originalSource,
    "utf-8"
  );

  console.log(`💾 バックアップを作成しました:`);
  console.log(`   ${backupPath}\n`);

  // ----------------------------------------------------------
  // Write updated places.ts
  // ----------------------------------------------------------

  fs.writeFileSync(
    placesPath,
    updatedSource,
    "utf-8"
  );

  console.log("========================================");
  console.log("🎉 処理が完了しました！");
  console.log("========================================");
  console.log(`📍 全スポット: ${places.length}`);
  console.log(`🌐 翻訳したスポット: ${translatedCount}`);
  console.log(`🏷️ nameEn を追加したスポット: ${namedCount}`);
  console.log(`⏭️ 説明の翻訳をスキップ: ${skippedCount}`);
  console.log(`💾 更新ファイル: src/data/places.ts`);
  console.log(`🛡️ バックアップ: src/data/places.ts.backup`);
  console.log("========================================\n");
}

// ============================================================
// Start
// ============================================================

runTranslation().catch((error) => {
  console.error("\n❌ 処理中にエラーが発生しました。");

  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error(error);
  }

  process.exit(1);
});