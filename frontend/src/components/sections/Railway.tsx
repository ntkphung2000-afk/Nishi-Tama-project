import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/dictionary";
import { chuoLineStations, nishiTamaAreas, type Station } from "@/data/content";
import { Section, SectionHeader } from "../site/Section";
import { Reveal } from "../site/Reveal";

/** Small train pictogram, drawn with SVG so it stays crisp and editable. */
function TrainIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <rect x="5" y="3" width="14" height="13" rx="3" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6.5 9.5h11" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="9" cy="12.8" r="1" fill="currentColor" />
      <circle cx="15" cy="12.8" r="1" fill="currentColor" />
      <path d="M8.5 16 6.5 19M15.5 16l2 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function StationLabel({ s, tone = "dark" }: { s: Station; tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <>
      <span
        className={`inline-block border px-2 py-0.5 text-[0.625rem] tracking-[0.14em] ${
          s.key
            ? light
              ? "border-cream/70 bg-cream/15 text-cream"
              : "border-forest-deep bg-forest-deep text-cream"
            : light
              ? "border-cream/35 text-cream/70"
              : "border-forest/35 text-forest/80"
        }`}
      >
        {s.code}
      </span>
      <span
        className={`mt-2 block leading-tight ${
          s.key
            ? `font-display text-lg ${light ? "text-cream" : "text-forest-deep"}`
            : `text-[0.8125rem] ${light ? "text-cream/85" : "text-charcoal/85"}`
        }`}
      >
        {s.en}
      </span>
      <span className={`mt-0.5 block font-jp text-xs ${light ? "text-cream/60" : "text-charcoal/60"}`}>
        {s.ja}
      </span>
    </>
  );
}

export function RailwaySection() {
  const { t } = useLang();

  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&origin=" +
    encodeURIComponent("新宿駅") +
    "&destination=" +
    encodeURIComponent("奥多摩駅") +
    "&travelmode=transit";

  return (
    <Section id="railway" tone="cream">
      <SectionHeader
        eyebrow={t(ui.railway.eyebrow)}
        title={t(ui.railway.title)}
        lead={t(ui.railway.lead)}
      />
      <p className="mt-3 font-jp text-base text-charcoal/70">新宿から西多摩へ</p>

      <Reveal className="mt-12 border border-forest/20 bg-secondary/50 p-6 sm:p-10 lg:mt-16 lg:p-14">
        {/* --- Chuo Line ---------------------------------------------- */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="eyebrow">{t(ui.railway.chuo)}</p>
          <p className="inline-flex items-center gap-2 text-[0.6875rem] tracking-[0.2em] uppercase text-forest/70">
            <TrainIcon className="h-4 w-4" />
            West
            <span aria-hidden="true">→</span>
          </p>
        </div>

        {/* Desktop: horizontal line */}
        <div className="mt-8 hidden md:block">
          <div className="relative">
            <span aria-hidden="true" className="absolute top-[7px] right-0 left-0 h-px bg-forest/35" />
            <ol className="relative grid grid-cols-13 gap-1">
              {chuoLineStations.map((s) => (
                <li key={s.code} className="flex flex-col items-center text-center">
                  <span
                    aria-hidden="true"
                    className={`block rounded-full border-2 border-forest bg-background ${
                      s.key ? "h-[15px] w-[15px] border-forest-deep bg-forest-deep" : "h-[15px] w-[15px]"
                    }`}
                  />
                  <div className="mt-3">
                    <StationLabel s={s} />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <ol className="mt-8 md:hidden">
          {chuoLineStations.map((s, i) => (
            <li key={s.code} className="relative flex gap-4 pb-6 last:pb-0">
              {i < chuoLineStations.length - 1 && (
                <span aria-hidden="true" className="absolute top-3 bottom-0 left-[7px] w-px bg-forest/35" />
              )}
              <span
                aria-hidden="true"
                className={`relative mt-1.5 block h-[15px] w-[15px] shrink-0 rounded-full border-2 border-forest ${
                  s.key ? "border-forest-deep bg-forest-deep" : "bg-background"
                }`}
              />
              <div className="min-w-0">
                <StationLabel s={s} />
              </div>
            </li>
          ))}
        </ol>

        {/* --- Branch to Nishi Tama ------------------------------------ */}
        <div className="mt-12 grid gap-6 border-t border-forest/20 pt-10 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-12">
          <div className="lg:w-64">
            <p className="eyebrow">{t(ui.railway.hub)}</p>
            <p className="mt-3 font-display text-3xl leading-tight text-forest-deep">Tachikawa</p>
            <p className="font-jp text-base text-charcoal/70">立川駅</p>
            <p className="mt-2 inline-block border border-forest-deep bg-forest-deep px-2 py-0.5 text-[0.625rem] tracking-[0.14em] text-cream">
              JC 19
            </p>
            <p className="mt-4 flex items-center gap-3 text-[0.6875rem] tracking-[0.2em] uppercase text-forest/80">
              <span aria-hidden="true" className="h-px w-8 bg-forest/40" />
              {t(ui.railway.branch)}
            </p>
          </div>

          <div>
            <p className="eyebrow">{t(ui.railway.areas)}</p>
            <ul className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
              {nishiTamaAreas.map((a) => (
                <li key={a.ja} className="flex items-start gap-3 border-t border-forest/20 pt-3">
                  <span aria-hidden="true" className="mt-2 block h-2 w-2 shrink-0 rounded-full bg-forest" />
                  <span className="min-w-0">
                    <span className="block text-sm leading-tight text-forest-deep">{a.en}</span>
                    <span className="mt-0.5 block font-jp text-xs text-charcoal/65">{a.ja}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <div>
          <p className="text-base leading-relaxed text-charcoal/85">{t(ui.railway.message)}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t(ui.railway.note)}</p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <p className="eyebrow">{t(ui.railway.daytrip)}</p>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-3 border border-forest-deep px-6 text-[0.75rem] tracking-[0.2em] uppercase text-forest-deep transition-colors hover:bg-forest-deep hover:text-cream"
          >
            {t(ui.railway.cta)}
            <span aria-hidden="true" className="h-px w-6 bg-current" />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
