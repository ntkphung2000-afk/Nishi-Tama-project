import { useState } from "react";
import { useLang, type Lang } from "@/lib/i18n";
import { ui } from "@/lib/dictionary";
import { experiences } from "@/data/content";
import { eventsByMonth, featuredEvent } from "@/data/events";
import { Section, SectionHeader } from "../site/Section";
import { Reveal } from "../site/Reveal";
import { Figure } from "../site/Figure";
import { MonthTabs } from "../site/MonthTabs";
import { formatEventDate } from "@/lib/eventDate";

/**
 * "What's happening in {Month}" heading text for the given language.
 * Shared by the Events page's PageHeader and this section's own
 * SectionHeader so both stay in sync with the selected month.
 */
export function eventsMonthTitle(lang: Lang, month: number): string {
  const names = ui.events.monthNames[lang] ?? ui.events.monthNames.en ?? [];
  const monthName = names[month - 1] ?? "";
  const whatsHappeningIn = ui.events.whatsHappeningIn[lang] ?? ui.events.whatsHappeningIn.en ?? "";
  // ja/zh put the month before the phrase ("8月のイベント"); every other
  // language here puts it after ("What's happening in August").
  return lang === "ja" || lang === "zh"
    ? `${monthName}${whatsHappeningIn}`
    : `${whatsHappeningIn} ${monthName}`;
}

export function ExperiencesSection() {
  const { t } = useLang();

  return (
    <Section id="experiences" tone="cream">
      <SectionHeader
        eyebrow={t(ui.experiences.eyebrow)}
        title={t(ui.experiences.title)}
        lead={t(ui.experiences.lead)}
      />

      <div className="mt-14 space-y-16 lg:mt-20 lg:space-y-24">
        {experiences.map((e, i) => (
          <Reveal
            as="article"
            key={e.id}
            className={`grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16 ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Figure
              src={e.image}
              alt={t(e.title)}
              className="img-zoom aspect-3/2 w-full lg:aspect-16/11"
              label={t(e.title)}
            />
            <div className="lg:px-4">
              <p className="eyebrow">{`0${i + 1}`}</p>
              <h3 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] leading-tight text-forest-deep">
                {t(e.title)}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-charcoal/85">{t(e.description)}</p>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {t(e.items).map((item) => (
                  <li
                    key={item}
                    className="border border-forest/25 px-4 py-2 text-[0.8125rem] text-forest-deep"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function EventsSection({
  month: controlledMonth,
  onMonthChange,
}: {
  /** Omit for a self-contained section (e.g. the homepage teaser) — it
   *  then manages its own month state, starting at August. */
  month?: number;
  onMonthChange?: (month: number) => void;
} = {}) {
  const { t, lang } = useLang();
  const [internalMonth, setInternalMonth] = useState(8);
  const month = controlledMonth ?? internalMonth;
  const setMonth = onMonthChange ?? setInternalMonth;

  const events = eventsByMonth.find((m) => m.month === month)?.events ?? [];

  return (
    <Section id="events" tone="beige">
      <SectionHeader
        eyebrow={t(ui.events.eyebrow)}
        title={eventsMonthTitle(lang, month)}
        lead={t(ui.events.lead)}
      />

      <Reveal className="mt-10 lg:mt-14">
        <MonthTabs month={month} onChange={setMonth} />
      </Reveal>

      {/* Featured event — only August has a curated featured banner */}
      {month === 8 && (
        <Reveal className="mt-10 lg:mt-14">
          <article className="grid overflow-hidden bg-forest-deep text-cream lg:grid-cols-[1.1fr_1fr]">
            <Figure
              src={featuredEvent.image}
              alt={featuredEvent.en}
              className="aspect-3/2 w-full lg:aspect-auto lg:h-full lg:min-h-[26rem]"
              label={featuredEvent.en}
            />
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
              <p className="eyebrow text-cream/60">{t(ui.events.featured)}</p>
              <p className="mt-5 font-display text-3xl text-cream">
                {formatEventDate(featuredEvent.date, lang)}
              </p>
              <h3 className="mt-4 font-jp text-xl leading-snug text-cream/90">{featuredEvent.ja}</h3>
              <p className="mt-2 font-display text-[1.75rem] leading-tight text-cream">
                {featuredEvent.en}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-cream/75">
                {t(featuredEvent.description)}
              </p>
              <p className="mt-6 text-[0.6875rem] tracking-[0.2em] uppercase text-cream/55">
                {t(featuredEvent.location)}
              </p>
            </div>
          </article>
        </Reveal>
      )}

      {/* Calendar list — remounts on month change (key={month}) so the
          existing Reveal fade-in replays as a brief crossfade between
          months, at a shorter duration than the default scroll-reveal. */}
      <Reveal key={month} duration={400} className="mt-14">
        {events.length === 0 ? (
          <p className="border-t border-forest/20 py-10 text-sm text-muted-foreground">
            {t(ui.events.noEventsThisMonth)}
          </p>
        ) : (
          <ul className="border-t border-forest/20">
            {events.map((e, i) => (
              <Reveal as="li" key={e.id} delay={(i % 4) * 60}>
                <article className="group grid grid-cols-1 items-start gap-4 border-b border-forest/20 py-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-md sm:grid-cols-[7rem_10rem_minmax(0,1fr)] sm:items-center sm:gap-8 lg:grid-cols-[8rem_14rem_minmax(0,1fr)]">
                  <div className="flex items-center gap-4 sm:contents">
                    <p className="font-display text-2xl text-forest sm:text-[1.75rem]">
                      {formatEventDate(e.date, lang)}
                    </p>

                    <Figure
                      src={e.image}
                      alt={e.en}
                      className="img-zoom aspect-square w-20 shrink-0 sm:col-start-2 sm:row-span-2 sm:aspect-4/3 sm:w-full lg:aspect-3/2"
                      label={e.en}
                    />
                  </div>

                  <div className="min-w-0 sm:col-start-3">
                    <h3 className="font-jp text-base text-forest-deep sm:text-lg">{e.ja}</h3>
                    <p className="mt-1 font-display text-xl text-charcoal sm:text-2xl">{e.en}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {t(e.description)}
                    </p>
                    <p className="mt-3 text-[0.6875rem] tracking-[0.2em] uppercase text-forest/80">
                      {t(e.location)}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        )}
      </Reveal>
    </Section>
  );
}
