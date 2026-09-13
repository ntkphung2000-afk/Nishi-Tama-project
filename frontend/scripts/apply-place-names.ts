import * as fs from "fs";
import * as path from "path";
import * as ts from "typescript";

// ============================================================
// Applies the reviewed nameEn proposals in proposed-names.json to
// places.ts. AST-based: locates each place's existing `nameJa`
// property by id and inserts `nameEn: "...",` immediately before it
// (matching the Place type's declared field order). Nothing else in
// the file is touched. Backs up places.ts before writing, same as
// translate.ts.
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

function escapeTsString(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

const projectRoot = path.resolve(import.meta.dirname, "..");
const placesPath = path.join(projectRoot, "src", "data", "places.ts");
const proposalsPath = path.join(projectRoot, "scripts", "proposed-names.json");

const source = fs.readFileSync(placesPath, "utf-8");
const proposals = JSON.parse(fs.readFileSync(proposalsPath, "utf-8")) as {
  id: string;
  nameJa: string;
  proposedName: string;
}[];

const sourceFile = ts.createSourceFile(
  "places.ts",
  source,
  ts.ScriptTarget.Latest,
  true
);

const proposalsById = new Map(proposals.map((p) => [p.id, p]));
const edits: { at: number; text: string }[] = [];

let applied = 0;
let skippedAlreadyHasNameEn = 0;
let skippedNotFound = 0;
let skippedNameJaMismatch = 0;

for (const obj of findPlacesArrayLiteral(sourceFile).elements) {
  if (!ts.isObjectLiteralExpression(obj)) continue;

  const id = getStringLiteralValue(getProperty(obj, "id")?.initializer);
  if (!id) continue;

  const proposal = proposalsById.get(id);
  if (!proposal) continue;

  const nameEnProp = getProperty(obj, "nameEn");
  if (nameEnProp) {
    console.warn(`⚠️ すでに nameEn があるためスキップ: ${id}`);
    skippedAlreadyHasNameEn++;
    continue;
  }

  const nameJaProp = getProperty(obj, "nameJa");
  if (!nameJaProp) {
    console.warn(`⚠️ nameJa が見つからないためスキップ: ${id}`);
    skippedNotFound++;
    continue;
  }

  const actualNameJa = getStringLiteralValue(nameJaProp.initializer);
  if (actualNameJa !== proposal.nameJa) {
    console.warn(
      `⚠️ nameJa が提案リストと一致しないためスキップ: ${id} (file="${actualNameJa}" proposal="${proposal.nameJa}")`
    );
    skippedNameJaMismatch++;
    continue;
  }

  const { character } = sourceFile.getLineAndCharacterOfPosition(
    nameJaProp.getStart(sourceFile)
  );
  const indent = " ".repeat(character);

  edits.push({
    at: nameJaProp.getStart(sourceFile),
    text: `nameEn: "${escapeTsString(proposal.proposedName)}",\n${indent}`,
  });
  applied++;
}

// Apply from the end of the file backwards so earlier offsets stay valid.
edits.sort((a, b) => b.at - a.at);

let updatedSource = source;
for (const edit of edits) {
  updatedSource =
    updatedSource.slice(0, edit.at) + edit.text + updatedSource.slice(edit.at);
}

if (updatedSource === source) {
  console.log("ℹ️ 変更なし。places.ts は更新していません。");
  process.exit(0);
}

const backupPath = `${placesPath}.backup`;
fs.writeFileSync(backupPath, source, "utf-8");
console.log(`💾 バックアップを作成しました: ${backupPath}`);

fs.writeFileSync(placesPath, updatedSource, "utf-8");

console.log("========================================");
console.log(`✅ nameEn を追加: ${applied} 件`);
console.log(`⏭️ すでに nameEn あり: ${skippedAlreadyHasNameEn} 件`);
console.log(`⏭️ nameJa 不一致: ${skippedNameJaMismatch} 件`);
console.log(`⏭️ nameJa 未検出: ${skippedNotFound} 件`);
console.log(`📄 提案リスト総数: ${proposals.length} 件`);
console.log("========================================");
