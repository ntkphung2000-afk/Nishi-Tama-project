import type { Lang } from "./i18n";
import { ui } from "./dictionary";

/* ------------------------------------------------------------------
 * EVENT DATE FORMATTING
 *
 * The 35 non-August events use descriptive Japanese period phrases
 * (上旬/中旬/下旬, 第N曜日, etc.) rather than exact days, per the source
 * calendar's own precision. `EventItem.date` stays a plain Japanese
 * string (the master data) — this module parses that small, recurring
 * vocabulary and renders it per-language at display time, rather than
 * requiring a full Localized translation of every individual date.
 *
 * August's existing dates ("8/1", "8/7 – 9") contain none of this
 * vocabulary and pass through unchanged for every language.
 * ------------------------------------------------------------------ */

type Period = "early" | "mid" | "late";

type DatePart =
  | { kind: "day"; month: number; days: number[] }
  | { kind: "period"; month: number; period: Period }
  | { kind: "weekday"; month: number; nth: number; weekdayIndex: number }
  | { kind: "month"; month: number };

const WEEKDAY_KANJI = ["日", "月", "火", "水", "木", "金", "土"];

function parsePart(text: string, fallbackMonth?: number): DatePart | null {
  const trimmed = text.trim();

  // 11月第3日曜日 — the Nth <weekday> of the month
  let m = trimmed.match(/^(\d{1,2})月第(\d)(日|月|火|水|木|金|土)曜日$/);
  if (m) {
    return {
      kind: "weekday",
      month: Number(m[1]),
      nth: Number(m[2]),
      weekdayIndex: WEEKDAY_KANJI.indexOf(m[3]!),
    };
  }

  // 5月2日・3日 — two specific days in the same month
  m = trimmed.match(/^(\d{1,2})月(\d{1,2})日[・、](\d{1,2})日$/);
  if (m) {
    return { kind: "day", month: Number(m[1]), days: [Number(m[2]), Number(m[3])] };
  }

  // 1月10日 — a single specific day
  m = trimmed.match(/^(\d{1,2})月(\d{1,2})日$/);
  if (m) {
    return { kind: "day", month: Number(m[1]), days: [Number(m[2])] };
  }

  // 10月上旬 / 10月中旬 / 10月下旬 / 8月末
  m = trimmed.match(/^(\d{1,2})月(上旬|中旬|下旬|末)$/);
  if (m) {
    // 末 ("the very end of the month") reads close enough to 下旬
    // ("late") that we don't give it a distinct label per language.
    const period: Period = m[2] === "上旬" ? "early" : m[2] === "中旬" ? "mid" : "late";
    return { kind: "period", month: Number(m[1]), period };
  }

  // Bare period with no month digit — the right side of a same-month
  // range like "3月上旬〜下旬", inherits the left side's month.
  m = trimmed.match(/^(上旬|中旬|下旬|末)$/);
  if (m && fallbackMonth) {
    const period: Period = m[1] === "上旬" ? "early" : m[1] === "中旬" ? "mid" : "late";
    return { kind: "period", month: fallbackMonth, period };
  }

  // 12月 — a bare month, the left side of "12月〜3月中旬"
  m = trimmed.match(/^(\d{1,2})月$/);
  if (m) {
    return { kind: "month", month: Number(m[1]) };
  }

  return null;
}

function parseEventDate(raw: string): { left: DatePart; right?: DatePart } | null {
  const sides = raw.split("〜");
  const left = parsePart(sides[0] ?? "");
  if (!left) return null;
  if (sides.length === 1) return { left };

  const right = parsePart(sides[1] ?? "", left.month);
  if (!right) return { left };
  return { left, right };
}

/** True if the string contains none of the date vocabulary this module
 *  understands — e.g. August's "8/1", "8/7 – 9" — so it's already
 *  language-neutral and should be shown as-is. */
function isPlainNumericDate(raw: string): boolean {
  return !/[月日旬曜第]/.test(raw);
}

// ---- Russian: needs distinct grammatical cases, unlike every other
// language here. Nominative for a bare month label, genitive after a
// day number or an "early/mid/late of" phrase. ----
const RU_MONTH_NOMINATIVE = [
  "январь", "февраль", "март", "апрель", "май", "июнь",
  "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь",
];
const RU_MONTH_GENITIVE = [
  "января", "февраля", "марта", "апреля", "мая", "июня",
  "июля", "августа", "сентября", "октября", "ноября", "декабря",
];
// Neuter ordinal forms (первое/второе/третье…) — grammatically correct
// for воскресенье (Sunday, neuter). Every "Nth weekday" date in the
// current dataset is a Sunday. If a future event uses a different
// weekday, this would need gender-matched forms for that weekday too
// (e.g. masculine "первый/второй/третий" for понедельник/Monday).
const RU_ORDINAL_NEUTER = ["первое", "второе", "третье", "четвёртое", "пятое"];
const RU_WEEKDAY_NOMINATIVE = [
  "воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота",
];

const WEEKDAY_EN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const WEEKDAY_VI = ["Chủ nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
const WEEKDAY_ZH = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
const WEEKDAY_KO = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
const WEEKDAY_DE = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

const ORDINAL_EN = ["1st", "2nd", "3rd", "4th", "5th"];
const ORDINAL_KO = ["첫째", "둘째", "셋째", "넷째", "다섯째"];

function monthNameEn(month: number): string {
  return ui.events.monthNames.en?.[month - 1] ?? String(month);
}
function monthNameDe(month: number): string {
  return ui.events.monthNames.de?.[month - 1] ?? String(month);
}

function formatPart(part: DatePart, lang: Lang): string {
  switch (part.kind) {
    case "day": {
      const [d1, d2] = part.days;
      switch (lang) {
        case "en":
          return d2 ? `${monthNameEn(part.month)} ${d1} & ${d2}` : `${monthNameEn(part.month)} ${d1}`;
        case "vi":
          return d2 ? `${d1} & ${d2} tháng ${part.month}` : `${d1} tháng ${part.month}`;
        case "zh":
          return d2 ? `${part.month}月${d1}日、${d2}日` : `${part.month}月${d1}日`;
        case "ko":
          return d2 ? `${part.month}월 ${d1}일, ${d2}일` : `${part.month}월 ${d1}일`;
        case "de":
          return d2 ? `${d1}. und ${d2}. ${monthNameDe(part.month)}` : `${d1}. ${monthNameDe(part.month)}`;
        case "ru": {
          const m = RU_MONTH_GENITIVE[part.month - 1];
          return d2 ? `${d1} и ${d2} ${m}` : `${d1} ${m}`;
        }
        default:
          return `${part.month}月${d1}日${d2 ? `・${d2}日` : ""}`;
      }
    }
    case "period": {
      switch (lang) {
        case "en":
          return part.period === "mid"
            ? `mid-${monthNameEn(part.month)}`
            : `${part.period} ${monthNameEn(part.month)}`;
        case "vi": {
          const word = { early: "đầu", mid: "giữa", late: "cuối" }[part.period];
          return `${word} tháng ${part.month}`;
        }
        case "zh": {
          const word = { early: "上旬", mid: "中旬", late: "下旬" }[part.period];
          return `${part.month}月${word}`;
        }
        case "ko": {
          const word = { early: "초", mid: "중순", late: "말" }[part.period];
          return `${part.month}월 ${word}`;
        }
        case "de": {
          const word = { early: "Anfang", mid: "Mitte", late: "Ende" }[part.period];
          return `${word} ${monthNameDe(part.month)}`;
        }
        case "ru": {
          const word = { early: "начало", mid: "середина", late: "конец" }[part.period];
          return `${word} ${RU_MONTH_GENITIVE[part.month - 1]}`;
        }
        default: {
          const word = { early: "上旬", mid: "中旬", late: "下旬" }[part.period];
          return `${part.month}月${word}`;
        }
      }
    }
    case "weekday": {
      const { month, nth, weekdayIndex } = part;
      switch (lang) {
        case "en":
          return `the ${ORDINAL_EN[nth - 1] ?? `${nth}th`} ${WEEKDAY_EN[weekdayIndex]} of ${monthNameEn(month)}`;
        case "vi":
          return `${WEEKDAY_VI[weekdayIndex]} thứ ${nth} của tháng ${month}`;
        case "zh":
          return `${month}月第${nth}个${WEEKDAY_ZH[weekdayIndex]}`;
        case "ko":
          return `${month}월 ${ORDINAL_KO[nth - 1] ?? `${nth}번째`} ${WEEKDAY_KO[weekdayIndex]}`;
        case "de":
          return `der ${nth}. ${WEEKDAY_DE[weekdayIndex]} im ${monthNameDe(month)}`;
        case "ru":
          return `${RU_ORDINAL_NEUTER[nth - 1] ?? `${nth}-е`} ${RU_WEEKDAY_NOMINATIVE[weekdayIndex]} ${RU_MONTH_GENITIVE[month - 1]}`;
        default:
          return `${month}月第${nth}${WEEKDAY_KANJI[weekdayIndex]}曜日`;
      }
    }
    case "month": {
      switch (lang) {
        case "en":
          return monthNameEn(part.month);
        case "vi":
          return `tháng ${part.month}`;
        case "zh":
          return `${part.month}月`;
        case "ko":
          return `${part.month}월`;
        case "de":
          return monthNameDe(part.month);
        case "ru":
          return RU_MONTH_NOMINATIVE[part.month - 1] ?? String(part.month);
        default:
          return `${part.month}月`;
      }
    }
  }
}

/** Renders an EventItem.date string for the given language. Japanese
 *  always shows the raw source text unchanged; a date with none of the
 *  recognized vocabulary (August's "8/1" style) also passes through
 *  unchanged for every language. */
export function formatEventDate(raw: string, lang: Lang): string {
  if (lang === "ja" || isPlainNumericDate(raw)) return raw;

  const parsed = parseEventDate(raw);
  if (!parsed) return raw; // unrecognized shape — fail safe to the source text

  const left = formatPart(parsed.left, lang);
  if (!parsed.right) return left;

  const right = formatPart(parsed.right, lang);
  return `${left} – ${right}`;
}
