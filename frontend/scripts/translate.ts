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
  console.warn("  ⚠️ 翻訳結果の形式が不正のため、1回だけ再試行します。");
  const retryPrompt = `${prompt}\n\nIMPORTANT: Your previous response was invalid. Return ONLY a valid JSON object with exactly these 6 non-empty string keys: en, vi, zh, ko, de, ru. No extra text, no missing keys.`;
  const retry = await requestTranslation(retryPrompt);

  if (!isValidTranslation(retry)) {
    throw new Error("❌ Groq の翻訳結果が6言語すべてを含んでいません。");
  }

  return retry;
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
// Replace ONLY description blocks in places.ts
//
// We locate each place's `description: { ... }` object directly
// from the parsed AST (not by pattern-matching text) and splice
// just that node's exact character range in the original source.
// Everything else — mapUrl, website, _internal, comments,
// whichever fields happen to follow description — is untouched,
// regardless of property order.
// ============================================================

function updateDescriptions(
  source: string,
  sourceFile: ts.SourceFile,
  translatedPlaces: Map<string, Localized>
): string {
  const edits: { start: number; end: number; text: string }[] = [];

  for (const obj of findPlacesArrayLiteral(sourceFile).elements) {
    if (!ts.isObjectLiteralExpression(obj)) continue;

    const id = getStringLiteralValue(getProperty(obj, "id")?.initializer);
    if (!id || !translatedPlaces.has(id)) continue;

    const descProp = getProperty(obj, "description");
    if (!descProp || !ts.isObjectLiteralExpression(descProp.initializer)) {
      console.warn(`⚠️ description を置換できませんでした: ${id}`);
      continue;
    }

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

  let translatedCount = 0;
  let skippedCount = 0;

  for (const place of places) {
    const name = place.nameJa ?? place.nameEn ?? place.id;

    console.log(`📍 ${name}`);

    // --------------------------------------------------------
    // No Japanese description
    // --------------------------------------------------------

    if (!place.description?.ja) {
      console.log("  ⏭️ 日本語の説明文がないためスキップ\n");
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

  if (translatedPlaces.size === 0) {
    console.log("ℹ️ 更新する翻訳データはありません。");
    return;
  }

  // ----------------------------------------------------------
  // Update only descriptions
  // ----------------------------------------------------------

  const updatedSource = updateDescriptions(
    originalSource,
    sourceFile,
    translatedPlaces
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
  console.log("🎉 翻訳処理が完了しました！");
  console.log("========================================");
  console.log(`📍 全スポット: ${places.length}`);
  console.log(`🌐 翻訳したスポット: ${translatedCount}`);
  console.log(`⏭️ スキップ: ${skippedCount}`);
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