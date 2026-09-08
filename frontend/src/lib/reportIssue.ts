import { CONTACT_EMAIL } from "@/config/contact";
import { pick, type Lang } from "@/lib/i18n";
import { x } from "@/lib/dictionary-extra";
import type { Place } from "@/data/places";

/**
 * Build a mailto: link pre-filled with the place name, nearest station
 * and a prompt to describe the problem — used by the "report incorrect
 * info" link on every Place Card. The body is bilingual (current UI
 * language + Japanese) so the report is readable regardless of who
 * reads it first; JA is skipped as a duplicate when it's already the
 * active language.
 */
export function buildReportMailtoUrl(place: Place, stationLabel: string, lang: Lang): string {
  const placeName = place.nameEn ?? place.nameJa ?? "";
  const subject = `${pick(x.report.subject, lang)}: ${placeName}`;

  const block = (l: Lang) =>
    [
      `${pick(x.report.placeLabel, l)}: ${placeName}`,
      `${pick(x.report.stationLabel, l)}: ${stationLabel}`,
      "",
      pick(x.report.issuePrompt, l),
      "",
    ].join("\n");

  const body = lang === "ja" ? block("ja") : `${block(lang)}\n---\n${block("ja")}`;

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
