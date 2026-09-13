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
// Read-only: find every place with nameJa but no nameEn.
// This script does NOT write to places.ts — it only proposes
// names for review.
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
  if (!found) throw new Error("places array not found");
  return found;
}

const projectRoot = path.resolve(import.meta.dirname, "..");
const placesPath = path.join(projectRoot, "src", "data", "places.ts");
const source = fs.readFileSync(placesPath, "utf-8");
const sourceFile = ts.createSourceFile(
  "places.ts",
  source,
  ts.ScriptTarget.Latest,
  true
);

type Candidate = { id: string; nameJa: string };

const candidates: Candidate[] = findPlacesArrayLiteral(sourceFile)
  .elements.filter(ts.isObjectLiteralExpression)
  .map((obj) => ({
    id: getStringLiteralValue(getProperty(obj, "id")?.initializer),
    nameEn: getStringLiteralValue(getProperty(obj, "nameEn")?.initializer),
    nameJa: getStringLiteralValue(getProperty(obj, "nameJa")?.initializer),
  }))
  .filter(
    (p): p is { id: string; nameEn: undefined; nameJa: string } =>
      !!p.id && !p.nameEn && !!p.nameJa
  )
  .map((p) => ({ id: p.id, nameJa: p.nameJa }));

console.log(`📍 nameEn が欠けているスポット: ${candidates.length} 件\n`);

// ============================================================
// Reference table: established romanization/name conventions
// already used elsewhere in this codebase (areas.ts, content.ts,
// stations.ts), confirmed by grep before writing this prompt.
// ============================================================

const REFERENCE_NAMES = `
- 吉野梅郷 -> Yoshino Baigo
- 鳩ノ巣 -> Hatonosu
- 白丸 -> Shiromaru
- 御岳 -> Mitake
- 奥多摩 -> Okutama
- 小河内 -> Ogochi
- 多摩川 -> Tama River
- 青梅 -> Ome
- 羽村 -> Hamura
- 福生 -> Fussa
- 玉川上水 -> Tamagawa Josui
`;

const NAME_JSON_SCHEMA = {
  type: "object",
  properties: {
    name: { type: "string" },
  },
  required: ["name"],
  additionalProperties: false,
} as const;

function buildPrompt(nameJa: string): string {
  return `
You are naming places for a multilingual tourism website about the Nishi Tama region of Tokyo, Japan. The site already has established Latin-script names for well-known landmarks — reuse those name roots when they appear inside a longer name. Reference examples already used on the site:
${REFERENCE_NAMES}

Task: give a single Latin-script name for this Japanese place name, to be used for ALL non-Japanese languages (English, Vietnamese, Chinese, Korean, German, Russian) — not translated per language, just one shared Latin-script string.

Rules:
1. If this is a well-known official place (shrine, park, station, landmark), use its standard English name if one exists.
2. If the name contains a katakana word borrowed from English or another Western language (e.g. カフェ = Cafe, スイーツ = Sweets, レストラン = Restaurant, ベーカリー = Bakery), render that part as the actual foreign word, not a phonetic romanization of the katakana sound.
3. For genuinely Japanese words (kanji, hiragana, personal names), use natural Hepburn-style romanization. Do NOT translate the meaning into English (e.g. 悠 as a name character becomes "Yu", not "Tranquility"). Do NOT invent an "official-sounding" English brand name that doesn't exist.
4. Keep it concise — this is a name, not a description.
5. Return ONLY the requested JSON object with a single "name" field.

Japanese name:
${nameJa}
`;
}

async function proposeName(nameJa: string): Promise<string> {
  const response = await groq.chat.completions.create({
    model: MODEL,
    messages: [{ role: "user", content: buildPrompt(nameJa) }],
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
  if (!text) throw new Error("no response");

  const result = JSON.parse(text) as { name?: string };
  if (!result.name || typeof result.name !== "string") {
    throw new Error("malformed response");
  }
  return result.name;
}

async function main() {
  const results: { id: string; nameJa: string; proposedName: string }[] = [];

  for (const candidate of candidates) {
    try {
      const proposedName = await proposeName(candidate.nameJa);
      results.push({ ...candidate, proposedName });
      console.log(`${candidate.id.padEnd(35)} ${candidate.nameJa.padEnd(20)} -> ${proposedName}`);
    } catch (error) {
      console.error(
        `❌ 失敗: ${candidate.id} (${candidate.nameJa}):`,
        error instanceof Error ? error.message : error
      );
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  const outPath = path.join(projectRoot, "scripts", "proposed-names.json");
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), "utf-8");
  console.log(`\n💾 提案リストを書き出しました: ${outPath}`);
  console.log(`✅ 完了: ${results.length}/${candidates.length} 件`);
}

main().catch((error) => {
  console.error("\n❌ エラー:", error);
  process.exit(1);
});
