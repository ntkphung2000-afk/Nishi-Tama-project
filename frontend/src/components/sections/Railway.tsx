import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/dictionary";
import { x } from "@/lib/dictionary-extra";
import {
  adventureLineStations,
  chuoLineStations,
  omeLineStations,
  stationCards,
  type RailStation,
} from "@/data/stations";
import { Section, SectionHeader } from "../site/Section";
import { Reveal } from "../site/Reveal";
import { NishiTamaMascot } from "@/components/site/NishiTamaMascot";

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

function StationLabel({ s }: { s: RailStation }) {
  return (
    <>
      <span
        className={`inline-block border px-2 py-0.5 text-[0.625rem] tracking-[0.14em] ${
          s.key
            ? "border-forest-deep bg-forest-deep text-cream"
            : "border-forest/35 text-forest/80"
        }`}
      >
        {s.code}
      </span>
      <span
        className={`mt-2 block leading-tight ${
          s.key ? "font-display text-lg text-forest-deep" : "text-[0.8125rem] text-charcoal/85"
        }`}
      >
        {s.en}
      </span>
      <span className="mt-0.5 block font-jp text-xs text-charcoal/60">{s.ja}</span>
    </>
  );
}

/** One railway leg: horizontal on desktop, vertical timeline on mobile. */
function Leg({
  label,
  note,
  stations,
}: {
  label: string;
  note?: string;
  stations: RailStation[];
}) {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="eyebrow">{label}</p>
        <p className="inline-flex items-center gap-2 text-[0.6875rem] tracking-[0.2em] uppercase text-forest/70">
          <TrainIcon className="h-4 w-4" />
          West
          <span aria-hidden="true">→</span>
        </p>
      </div>
      {note && <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{note}</p>}

      {/* Desktop */}
      <div className="mt-7 hidden md:block">
        <div className="relative">
          <span aria-hidden="true" className="absolute top-[7px] right-0 left-0 h-px bg-forest/35" />
          <ol
            className="relative grid gap-1"
            style={{ gridTemplateColumns: `repeat(${stations.length}, minmax(0, 1fr))` }}
          >
            {stations.map((s) => (
              <li key={s.code + s.en} className="flex flex-col items-center text-center">
                <span
                  aria-hidden="true"
                  className={`block h-[15px] w-[15px] rounded-full border-2 border-forest ${
                    s.key ? "border-forest-deep bg-forest-deep" : "bg-background"
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

      {/* Mobile */}
      <ol className="mt-7 md:hidden">
        {stations.map((s, i) => (
          <li key={s.code + s.en} className="relative flex gap-4 pb-6 last:pb-0">
            {i < stations.length - 1 && (
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
    </div>
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
      <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16">
        <div>
          <SectionHeader
            eyebrow={t(ui.railway.eyebrow)}
            title={t(ui.railway.title)}
            lead={t(ui.railway.lead)}
          />
          <p className="mt-3 font-jp text-base text-charcoal/70">新宿から西多摩へ</p>
        </div>
        <NishiTamaMascot className="mx-auto w-32 sm:w-40 lg:w-48" showLabel />
      </div>

      <Reveal className="mt-12 space-y-12 border border-forest/20 bg-secondary/50 p-6 sm:p-10 lg:mt-16 lg:p-14">
        {/* Central Tokyo → Tachikawa */}
        <div>
          <p className="mb-3 inline-block border border-forest/30 px-3 py-1 text-[0.625rem] tracking-[0.2em] uppercase text-forest">
            {t(x.rail.centralTokyo)} → {t(x.rail.hub)}
          </p>
          <Leg label={t(x.rail.chuoLine)} stations={chuoLineStations} />
          <p className="mt-4 text-xs text-muted-foreground">
            {t(x.rail.mainAccess)}: Shinjuku 新宿駅 (JC 05) · {t(x.rail.hub)}: Tachikawa 立川駅 (JC 19)
          </p>
        </div>

        {/* Tachikawa → Ome */}
        <div className="border-t border-forest/20 pt-10">
          <p className="mb-3 inline-block border border-forest-deep bg-forest-deep px-3 py-1 text-[0.625rem] tracking-[0.2em] uppercase text-cream">
            {t(x.rail.nishitama)}
          </p>
          <Leg label={t(x.rail.omeLine)} note={t(x.rail.through)} stations={omeLineStations} />
        </div>

        {/* Ome → Okutama */}
        <div className="border-t border-forest/20 pt-10">
          <p className="mb-3 inline-block border border-forest/30 px-3 py-1 text-[0.625rem] tracking-[0.2em] uppercase text-forest">
            {t(x.rail.deeper)}
          </p>
          <Leg
            label={t(x.rail.adventureLine)}
            note={`${t(x.rail.transfer)} — ${t(x.rail.deeperNote)}`}
            stations={adventureLineStations}
          />
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

      {/* Clickable station cards */}
      <div className="mt-16 border-t border-forest/20 pt-12">
        <p className="eyebrow">{t(x.rail.stations)}</p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {t(x.rail.stationsLead)}
        </p>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stationCards.map((s, i) => (
            <Reveal as="li" key={s.id} delay={(i % 3) * 80} className="flex">
              <div className="flex w-full flex-col border border-forest/20 bg-background p-6">
                <span className="inline-block self-start border border-forest/35 px-2 py-0.5 text-[0.625rem] tracking-[0.14em] text-forest/80">
                  {s.code}
                </span>
                <h3 className="mt-3 font-display text-2xl leading-tight text-forest-deep">{s.en}</h3>
                <p className="font-jp text-sm text-charcoal/70">{s.ja}</p>
                <p className="eyebrow mt-2">{t(s.character)}</p>
                <dl className="mt-4 space-y-1 text-xs text-muted-foreground">
                  <div className="flex gap-2">
                    <dt className="shrink-0 uppercase tracking-[0.16em]">{t(x.rail.line)}</dt>
                    <dd>{t(s.line)}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 uppercase tracking-[0.16em]">{t(x.rail.area)}</dt>
                    <dd>{t(s.municipality)}</dd>
                  </div>
                </dl>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal/85">
                  {t(s.description)}
                </p>
                <a
                  href={`/areas/${s.areaId}`}
                  className="mt-6 inline-flex min-h-11 items-center justify-center gap-3 border border-forest-deep px-5 text-[0.7rem] tracking-[0.2em] uppercase text-forest-deep transition-colors hover:bg-forest-deep hover:text-cream"
                >
                  {t(x.rail.exploreArea)}
                  <span aria-hidden="true" className="h-px w-5 bg-current" />
                </a>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
