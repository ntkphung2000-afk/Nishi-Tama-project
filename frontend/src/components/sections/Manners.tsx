import { images } from "@/config/images";
import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/dictionary";
import { manners } from "@/data/content";
import { Section, SectionHeader } from "../site/Section";
import { Reveal } from "../site/Reveal";
import { Figure } from "../site/Figure";

export function MannersSection() {
  const { t } = useLang();

  return (
    <Section id="manners" tone="card">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            eyebrow={t(ui.manners.eyebrow)}
            title={t(ui.manners.title)}
          />
          <Reveal delay={100}>
            <p className="mt-6 font-display text-2xl leading-snug text-forest">
              {t(ui.manners.subtitle)}
            </p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-charcoal/80">
              {t(ui.manners.lead)}
            </p>
            <Figure
              src={images.manners}
              alt="A quiet countryside lane in Nishi Tama"
              className="mt-10 hidden aspect-4/3 w-full lg:block"
            />
          </Reveal>
        </div>

        <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {manners.map((g, i) => (
            <Reveal as="li" key={g.id} delay={(i % 2) * 80}>
              <h3 className="rule-line text-xl text-forest-deep">{t(g.title)}</h3>
              <ul className="mt-4 space-y-2.5">
                {t(g.points).map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-charcoal/80">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-forest/60" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>

      <Reveal className="mt-20 border-t border-forest/15 pt-16 text-center lg:mt-28">
        <p className="font-display text-[clamp(1.75rem,5vw,3.25rem)] leading-tight text-forest-deep">
          {t(ui.manners.closing1)}
          <br />
          {t(ui.manners.closing2)}
        </p>
        <ul className="mx-auto mt-12 grid max-w-3xl gap-8 sm:grid-cols-3">
          {[ui.manners.p1, ui.manners.p2, ui.manners.p3].map((p, i) => (
            <li key={i} className="border-t border-forest/25 pt-5">
              <span className="eyebrow">{`0${i + 1}`}</span>
              <p className="mt-2 font-display text-xl text-charcoal">{t(p)}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
