import { images } from "@/config/images";
import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/dictionary";
import { areas } from "@/data/content";
import { Section, SectionHeader } from "../site/Section";
import { Reveal } from "../site/Reveal";
import { Figure } from "../site/Figure";

export function IntroSection() {
  const { t } = useLang();

  return (
    <Section id="discover" tone="cream">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20">
        <div>
          <SectionHeader
            eyebrow={t(ui.intro.eyebrow)}
            title={t(ui.intro.title)}
          />
          <Reveal delay={100}>
            <p className="mt-8 text-base leading-[1.9] text-charcoal/85">{t(ui.intro.body)}</p>
            <p className="mt-5 text-base leading-[1.9] text-charcoal/85">{t(ui.intro.body2)}</p>

            <dl className="mt-10 grid gap-6 border-t border-forest/15 pt-8 sm:grid-cols-3">
              {[ui.intro.stat1, ui.intro.stat2, ui.intro.stat3].map((s, i) => (
                <div key={i}>
                  <dt className="font-display text-3xl text-forest">{`0${i + 1}`}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{t(s)}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={150} className="relative">
          <Figure
            src={images.nishitama}
            alt="Countryside village surrounded by forested mountains in western Tokyo"
            className="aspect-4/5 w-full sm:aspect-3/2 lg:aspect-4/5"
          />
          {/* Elegant regional diagram overlay */}
          <div className="relative -mt-10 ml-4 mr-4 border border-forest/15 bg-background/95 p-6 backdrop-blur-sm sm:-mt-16 sm:ml-10 sm:mr-10 sm:p-8">
            <p className="eyebrow">{t(ui.intro.mapNote)}</p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
              {areas.map((a) => (
                <span key={a.id} className="flex items-baseline gap-2">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-forest/60" />
                  <span className="font-jp text-sm text-forest-deep">{a.ja}</span>
                  <span className="text-[0.6875rem] tracking-wide text-muted-foreground">
                    {a.en}
                  </span>
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 text-[0.6875rem] tracking-[0.2em] uppercase text-muted-foreground">
              <span>Tokyo</span>
              <span className="h-px flex-1 bg-forest/25" />
              <span className="text-forest-deep">Nishi Tama</span>
              <span className="h-px w-6 bg-forest/25" />
              <span>Mountains</span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function AreasSection() {
  const { t } = useLang();

  return (
    <Section id="areas" tone="beige">
      <SectionHeader
        eyebrow={t(ui.areas.eyebrow)}
        title={t(ui.areas.title)}
        lead={t(ui.areas.lead)}
      />

      <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
        {areas.map((area, i) => (
          <Reveal as="li" key={area.id} delay={(i % 4) * 90} className="group flex flex-col">
            <Figure
              src={area.image}
              alt={`${area.en} — ${t(area.intro)}`}
              className="img-zoom aspect-4/5 w-full"
              label={area.en}
            />
            <div className="mt-5 flex min-w-0 flex-col">
              <span className="font-jp text-lg text-forest-deep">{area.ja}</span>
              <h3 className="mt-1 text-2xl text-charcoal">{area.en}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(area.intro)}</p>

              <p className="eyebrow mt-5">{t(ui.areas.highlights)}</p>
              <ul className="mt-2 space-y-1.5">
                {t(area.highlights).map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-charcoal/80">
                    <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-forest/50" />
                    {h}
                  </li>
                ))}
              </ul>

              <span className="mt-5 inline-flex items-center gap-2 text-[0.75rem] tracking-[0.2em] uppercase text-forest transition-colors group-hover:text-forest-deep">
                {t(ui.areas.explore)}
                <span aria-hidden="true" className="h-px w-6 bg-current transition-all duration-300 group-hover:w-9" />
              </span>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
