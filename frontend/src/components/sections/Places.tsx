import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/dictionary";
import { destinations, tasteOfNishiTamaData } from "@/data/content";
import { Section, SectionHeader } from "../site/Section";
import { Reveal } from "../site/Reveal";
import { Figure } from "../site/Figure";

export function DestinationsSection() {
  const { t } = useLang();

  return (
    <Section id="destinations" tone="cream">
      <SectionHeader
        eyebrow={t(ui.destinations.eyebrow)}
        title={t(ui.destinations.title)}
        lead={t(ui.destinations.lead)}
      />

      <ul className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
        {destinations.map((d, i) => (
          <Reveal as="li" key={d.id} delay={(i % 3) * 90} className="group flex flex-col">
            <Figure
              src={d.image}
              alt={`${d.en} (${d.ja}) in ${t(d.area)}`}
              className="img-zoom aspect-3/2 w-full"
              label={d.en}
            />
            <div className="mt-5 flex flex-1 flex-col">
              <p className="eyebrow">{t(d.area)}</p>
              <h3 className="mt-3 text-[1.75rem] leading-tight text-forest-deep">{d.en}</h3>
              <p className="mt-1 font-jp text-base text-charcoal/70">{d.ja}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t(d.description)}</p>

              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-forest/15 pt-4">
                <div className="min-w-0">
                  <dt className="eyebrow">{t(ui.destinations.season)}</dt>
                  <dd className="mt-1.5 text-sm text-charcoal/85">{t(d.season)}</dd>
                </div>
                <div className="min-w-0">
                  <dt className="eyebrow">{t(ui.destinations.experience)}</dt>
                  <dd className="mt-1.5 text-sm text-charcoal/85">{t(d.experience)}</dd>
                </div>
              </dl>

              <div className="mt-6 border-t border-forest/15 pt-4">
                <p className="eyebrow">{t(ui.destinations.activities)}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {t(d.activities).map((a) => (
                    <li
                      key={a}
                      className="border border-forest/25 bg-secondary/60 px-3 py-1.5 text-[0.8125rem] leading-none text-forest-deep"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex min-h-11 w-fit items-center gap-3 pt-6 text-[0.6875rem] tracking-[0.2em] uppercase text-forest transition-colors hover:text-forest-deep"
              >
                {t(ui.destinations.map)}
                <span aria-hidden="true" className="h-px w-6 bg-current transition-all group-hover:w-9" />
                <span className="sr-only">{`— ${d.en}`}</span>
              </a>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

export function SpecialtiesSection() {
  const { t } = useLang();

  return (
    <Section id="specialties" tone="forest">
      <SectionHeader
        eyebrow={t(ui.specialties.eyebrow)}
        title={t(ui.specialties.title)}
        lead={t(ui.specialties.lead)}
        tone="light"
      />

      <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
        {tasteOfNishiTamaData.map((s, i) => (
          <Reveal as="li" key={s.id} delay={(i % 3) * 90} className="group">
            <Figure
              src={s.image}
              alt={t(s.title)}
              className="img-zoom aspect-4/3 w-full"
              label={t(s.title)}
            />
            <h3 className="mt-5 text-2xl text-cream">{t(s.title)}</h3>
            <p className="mt-3 text-sm leading-relaxed text-cream/70">{t(s.description)}</p>
            <p className="mt-4 text-[0.6875rem] tracking-[0.2em] uppercase text-cream/50">
              {t(s.area)}
            </p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
