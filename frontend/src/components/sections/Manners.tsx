import { Leaf, Landmark, Users } from "lucide-react";
import { images } from "@/config/images";
import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/dictionary";
import { manners } from "@/data/manners";
import { Section, SectionHeader } from "../site/Section";
import { Reveal } from "../site/Reveal";
import { Figure } from "../site/Figure";

// Stand-in background: free Unsplash photo (mossy stone stairs to a torii
// gate, Japan) — swap for real Nishi Tama photography/illustration later.
const closingBackground =
  "https://images.unsplash.com/photo-1610338732118-09d3b6fd030c?auto=format&fit=crop&w=2400&q=80";

// Icons are lucide-react placeholders standing in for a future hand-drawn
// set (one per manners.p1/p2/p3 — nature, people, local culture).
const closingItems = [
  { text: ui.manners.p1, Icon: Leaf },
  { text: ui.manners.p2, Icon: Users },
  { text: ui.manners.p3, Icon: Landmark },
];

export function MannersSection() {
  const { t } = useLang();

  return (
    <>
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

    </Section>

    {/* Full-bleed closing statement — its own top-level section (not nested
        in Section's max-w container) so the background image can run edge
        to edge, the way PageHeader does. */}
    <section className="relative overflow-hidden bg-forest-deep px-5 py-24 text-center sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="absolute inset-0">
        <Figure src={closingBackground} alt="" className="h-full w-full" />
      </div>
      <span className="sr-only">A misty stone stairway leading to a torii gate in a mossy forest</span>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-forest-deep/20 via-forest-deep/55 to-forest-deep/90"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        <Reveal>
          <p className="font-display text-[clamp(1.75rem,5vw,3.25rem)] leading-tight text-cream">
            {t(ui.manners.closing1)}
            <br />
            {t(ui.manners.closing2)}
          </p>
        </Reveal>

        <ul className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
          {closingItems.map(({ text, Icon }, i) => (
            <Reveal
              as="li"
              key={i}
              delay={i * 90}
              className="rounded-2xl border border-cream/20 bg-cream/10 px-6 py-8 backdrop-blur-md"
            >
              <Icon aria-hidden="true" className="mx-auto h-7 w-7 text-cream/70" />
              <span className="mx-auto mt-5 flex h-10 w-10 items-center justify-center rounded-full border border-vermillion-bright font-display text-lg text-vermillion-bright">
                {`0${i + 1}`}
              </span>
              <p className="mt-4 font-display text-xl text-cream">{t(text)}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
    </>
  );
}
