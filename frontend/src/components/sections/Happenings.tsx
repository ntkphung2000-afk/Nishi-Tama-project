import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/dictionary";
import { augustEvents, experiences, featuredEvent } from "@/data/content";
import { Section, SectionHeader } from "../site/Section";
import { Reveal } from "../site/Reveal";
import { Figure } from "../site/Figure";

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

export function EventsSection() {
  const { t } = useLang();

  return (
    <Section id="events" tone="beige">
      <SectionHeader
        eyebrow={t(ui.events.eyebrow)}
        title={t(ui.events.title)}
        lead={t(ui.events.lead)}
      />

      {/* Featured event */}
      <Reveal className="mt-14 lg:mt-20">
        <article className="grid overflow-hidden bg-forest-deep text-cream lg:grid-cols-[1.1fr_1fr]">
          <Figure
            src={featuredEvent.image}
            alt={featuredEvent.en}
            className="aspect-3/2 w-full lg:aspect-auto lg:h-full lg:min-h-[26rem]"
            label={featuredEvent.en}
          />
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
            <p className="eyebrow text-cream/60">{t(ui.events.featured)}</p>
            <p className="mt-5 font-display text-3xl text-cream">{featuredEvent.date}</p>
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
            <button
              type="button"
              className="mt-8 inline-flex min-h-11 w-fit items-center gap-3 border border-cream/50 px-6 text-[0.75rem] tracking-[0.2em] uppercase text-cream transition-colors hover:bg-cream/12"
            >
              {t(ui.events.details)}
              <span aria-hidden="true" className="h-px w-6 bg-current" />
            </button>
          </div>
        </article>
      </Reveal>

      {/* Calendar list */}
      <ul className="mt-14 border-t border-forest/20">
        {augustEvents.map((e, i) => (
          <Reveal as="li" key={e.id} delay={(i % 4) * 60}>
            <article className="group grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-b border-forest/20 py-7 sm:grid-cols-[7rem_10rem_minmax(0,1fr)] sm:items-center sm:gap-8 lg:grid-cols-[8rem_14rem_minmax(0,1fr)_9rem]">
              <p className="font-display text-2xl text-forest sm:text-[1.75rem]">{e.date}</p>

              <Figure
                src={e.image}
                alt={e.en}
                className="img-zoom col-start-2 row-span-2 hidden aspect-3/2 w-full sm:block sm:aspect-4/3 lg:aspect-3/2"
                label={e.en}
              />

              <div className="col-span-2 min-w-0 sm:col-span-1 sm:col-start-3">
                <h3 className="font-jp text-base text-forest-deep sm:text-lg">{e.ja}</h3>
                <p className="mt-1 font-display text-xl text-charcoal sm:text-2xl">{e.en}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(e.description)}
                </p>
                <p className="mt-3 text-[0.6875rem] tracking-[0.2em] uppercase text-forest/80">
                  {t(e.location)}
                </p>
              </div>

              <button
                type="button"
                className="col-start-2 row-start-1 justify-self-end text-[0.6875rem] tracking-[0.2em] uppercase text-forest underline-offset-4 hover:underline sm:col-start-4 sm:row-start-auto lg:justify-self-start"
              >
                {t(ui.events.details)}
              </button>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
