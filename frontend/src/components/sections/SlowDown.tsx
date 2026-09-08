import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/dictionary";
import { sampleDay, slowTravelActivities, whyNishiTama } from "@/data/content";
import { adventureLineStations } from "@/data/stations";
import { Section, SectionHeader } from "../site/Section";
import { Reveal } from "../site/Reveal";

/* ------------------------------------------------------------------
 * Additive homepage sections that frame Nishi Tama as "Another Side of
 * Tokyo — slow down, go west." All reuse the existing design system.
 * ------------------------------------------------------------------ */

export function WhyNishiTamaSection() {
  const { t } = useLang();

  return (
    <Section id="why" tone="cream">
      <SectionHeader eyebrow={t(ui.why.eyebrow)} title={t(ui.why.title)} lead={t(ui.why.lead)} />

      <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
        {whyNishiTama.map((r, i) => (
          <Reveal as="li" key={r.id} delay={(i % 4) * 80}>
            <span className="font-display text-2xl text-forest/50">{`0${i + 1}`}</span>
            <h3 className="rule-line mt-3 text-xl text-forest-deep">{t(r.title)}</h3>
            <p className="mt-4 text-sm leading-[1.85] text-charcoal/80">{t(r.body)}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

export function OmeLineTeaserSection() {
  const { t } = useLang();
  const keyStops = adventureLineStations.filter((s) => s.key);

  return (
    <Section id="ome-line" tone="beige">
      <SectionHeader
        eyebrow={t(ui.omeLine.eyebrow)}
        title={t(ui.omeLine.title)}
        lead={t(ui.omeLine.lead)}
      />

      <Reveal className="mt-12 lg:mt-16">
        <ol className="flex flex-wrap items-center gap-x-3 gap-y-4">
          {keyStops.map((s, i) => (
            <li key={s.code} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden="true" className="h-px w-6 bg-forest/40" />}
              <span className="border border-forest/30 bg-background px-4 py-2">
                <span className="block font-display text-lg leading-tight text-forest-deep">
                  {s.en}
                </span>
                <span className="block font-jp text-xs text-charcoal/60">{s.ja}</span>
              </span>
            </li>
          ))}
        </ol>

        <Link
          to="/travel-guide"
          hash="railway"
          className="mt-10 inline-flex min-h-11 items-center gap-3 border border-forest-deep px-6 text-[0.75rem] tracking-[0.2em] uppercase text-forest-deep transition-colors hover:bg-forest-deep hover:text-cream"
        >
          {t(ui.omeLine.cta)}
          <span aria-hidden="true" className="h-px w-6 bg-current" />
        </Link>
      </Reveal>
    </Section>
  );
}

export function ADayAwaySection() {
  const { t } = useLang();

  return (
    <Section id="a-day-away" tone="cream">
      <SectionHeader eyebrow={t(ui.day.eyebrow)} title={t(ui.day.title)} lead={t(ui.day.lead)} />

      <ol className="mt-14 max-w-2xl border-t border-forest/20 lg:mt-20">
        {sampleDay.map((m, i) => (
          <Reveal
            as="li"
            key={m.id}
            delay={(i % 4) * 60}
            className="grid grid-cols-[7rem_minmax(0,1fr)] gap-4 border-b border-forest/20 py-6 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8"
          >
            <p className="eyebrow pt-1">{t(m.label)}</p>
            <p className="text-base leading-relaxed text-charcoal/85">{t(m.text)}</p>
          </Reveal>
        ))}
      </ol>

      <p className="mt-8 max-w-2xl text-xs leading-relaxed text-muted-foreground">
        {t(ui.day.note)}
      </p>
    </Section>
  );
}

export function WeekdayNoteSection() {
  const { t } = useLang();

  return (
    <Section id="weekday" tone="card">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader eyebrow={t(ui.weekday.eyebrow)} title={t(ui.weekday.title)} />
          <Reveal delay={100}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/80">
              {t(ui.weekday.lead)}
            </p>
            <p className="mt-5 font-display text-2xl leading-snug text-forest">
              {t(ui.weekday.reassure)}
            </p>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <p className="eyebrow">{t(ui.weekday.activities)}</p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {t(slowTravelActivities).map((a) => (
                <li
                  key={a}
                  className="border border-forest/25 px-4 py-2 text-[0.8125rem] text-forest-deep"
                >
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="mt-10 border border-forest/20 bg-background p-7">
            <h3 className="text-xl text-forest-deep">{t(ui.picnic.title)}</h3>
            <p className="mt-3 text-sm leading-[1.85] text-charcoal/80">{t(ui.picnic.body)}</p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export function ClosingSection() {
  const { t } = useLang();

  return (
    <Section id="go-west" tone="forest">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="font-display text-[clamp(1.75rem,5vw,3.25rem)] leading-tight text-cream">
          {t(ui.closing.title)}
        </p>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
          {t(ui.closing.lead)}
        </p>
        <Link
          to="/discover"
          className="mt-10 inline-flex min-h-12 items-center justify-center gap-3 border border-cream/60 px-9 text-[0.8125rem] tracking-[0.18em] text-cream uppercase transition-colors hover:bg-cream/12"
        >
          {t(ui.closing.cta)}
          <span aria-hidden="true" className="h-px w-6 bg-current" />
        </Link>
      </Reveal>
    </Section>
  );
}
