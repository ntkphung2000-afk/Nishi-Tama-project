import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/dictionary";
import { durations, faqs, guideSections, interests, itineraries } from "@/data/content";
import { Section, SectionHeader } from "../site/Section";
import { Reveal } from "../site/Reveal";

export function PlanSection({
  showDuration = true,
  showItineraries = true,
}: { showDuration?: boolean; showItineraries?: boolean } = {}) {
  const { t } = useLang();
  const [duration, setDuration] = useState<string>("all");
  const [interest, setInterest] = useState<string>("all");
  const [when, setWhen] = useState<string>("all");

  const matched = itineraries.filter(
    (it) =>
      (duration === "all" || it.duration === duration) &&
      (interest === "all" || it.interests.includes(interest)),
  );

  // On a weekday, surface nature/river/shrine routes first — they don't
  // depend on shops, cafés or small museums that may keep limited hours.
  const visible =
    when === "weekday"
      ? [...matched].sort(
          (a, b) => Number(Boolean(b.weekdayFriendly)) - Number(Boolean(a.weekdayFriendly)),
        )
      : matched;

  const chip = (active: boolean) =>
    `min-h-11 border px-5 py-2 text-[0.8125rem] tracking-wide transition-colors ${
      active
        ? "border-forest-deep bg-forest-deep text-cream"
        : "border-forest/30 text-forest-deep hover:border-forest"
    }`;

  return (
    <Section id="plan" tone="beige">
      <SectionHeader eyebrow={t(ui.plan.eyebrow)} title={t(ui.plan.title)} lead={t(ui.plan.lead)} />

      <Reveal className="mt-12 space-y-7">
        {showDuration && (
          <fieldset>
            <legend className="eyebrow">{t(ui.plan.duration)}</legend>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={() => setDuration("all")}
                className={chip(duration === "all")}
              >
                {t(ui.plan.all)}
              </button>
              {durations.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setDuration(d.id)}
                  className={chip(duration === d.id)}
                >
                  {t(d.label)}
                </button>
              ))}
            </div>
          </fieldset>
        )}

        <fieldset>
          <legend className="eyebrow">{t(ui.plan.interests)}</legend>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => setInterest("all")}
              className={chip(interest === "all")}
            >
              {t(ui.plan.all)}
            </button>
            {interests.map((it) => (
              <button
                key={it.id}
                type="button"
                onClick={() => setInterest(it.id)}
                className={chip(interest === it.id)}
              >
                {t(it.label)}
              </button>
            ))}
          </div>
        </fieldset>

        {showItineraries && (
          <fieldset>
            <legend className="eyebrow">{t(ui.plan.when)}</legend>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <button type="button" onClick={() => setWhen("all")} className={chip(when === "all")}>
                {t(ui.plan.all)}
              </button>
              <button
                type="button"
                onClick={() => setWhen("weekday")}
                className={chip(when === "weekday")}
              >
                {t(ui.plan.weekday)}
              </button>
              <button
                type="button"
                onClick={() => setWhen("weekend")}
                className={chip(when === "weekend")}
              >
                {t(ui.plan.weekend)}
              </button>
            </div>
          </fieldset>
        )}
      </Reveal>

      {showItineraries && when === "weekday" && (
        <Reveal className="mt-8 border-l-2 border-forest/40 bg-secondary/40 p-5 text-sm leading-relaxed text-charcoal/80">
          {t(ui.plan.weekdayNote)}
        </Reveal>
      )}

      {showItineraries &&
        (visible.length === 0 ? (
          <p className="mt-14 text-sm text-muted-foreground">{t(ui.plan.none)}</p>
        ) : (
          <ul className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((it, i) => (
              <Reveal as="li" key={it.id} delay={(i % 3) * 80} className="flex">
                <article className="flex w-full flex-col border border-forest/20 bg-background p-7 transition-colors hover:border-forest/45">
                  <p className="eyebrow">{t(durations.find((d) => d.id === it.duration)!.label)}</p>
                  <h3 className="mt-4 text-2xl leading-tight text-forest-deep">{t(it.title)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t(it.summary)}
                  </p>

                  <ol className="mt-6 space-y-0">
                    {t(it.steps).map((step, si, arr) => (
                      <li key={`${step}-${si}`} className="flex flex-col">
                        <span className="text-sm text-charcoal/85">{step}</span>
                        {si < arr.length - 1 && (
                          <span aria-hidden="true" className="my-1 h-4 w-px bg-forest/30" />
                        )}
                      </li>
                    ))}
                  </ol>

                  <ul className="mt-6 flex flex-wrap gap-2 border-t border-forest/15 pt-4">
                    {it.interests.map((id) => (
                      <li
                        key={id}
                        className="text-[0.6875rem] tracking-[0.16em] uppercase text-forest/80"
                      >
                        {t(interests.find((x) => x.id === id)!.label)}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </ul>
        ))}
    </Section>
  );
}

export function GuideSection() {
  const { t } = useLang();

  return (
    <Section id="guide" tone="cream">
      <SectionHeader
        eyebrow={t(ui.guide.eyebrow)}
        title={t(ui.guide.title)}
        lead={t(ui.guide.lead)}
      />

      <div className="mt-14 grid gap-x-14 gap-y-12 lg:mt-20 lg:grid-cols-2">
        {guideSections.map((g, i) => (
          <Reveal as="article" key={g.id} delay={(i % 2) * 80}>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl text-forest/50">{`0${i + 1}`}</span>
              <h3 className="text-2xl text-forest-deep">{t(g.title)}</h3>
            </div>
            <div className="mt-4 space-y-3 border-t border-forest/15 pt-4">
              {t(g.body).map((p, pi) => (
                <p key={pi} className="text-sm leading-[1.85] text-charcoal/80">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function FaqSection() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" tone="card">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeader eyebrow={t(ui.faq.eyebrow)} title={t(ui.faq.title)} />

        <ul className="border-t border-forest/20">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={i} className="border-b border-forest/20">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-lg text-forest-deep sm:text-xl">
                      {t(f.q)}
                    </span>
                    <span
                      aria-hidden="true"
                      className="relative mt-2 block h-3 w-3 shrink-0 text-forest"
                    >
                      <span className="absolute top-1/2 left-0 h-px w-3 bg-current" />
                      <span
                        className={`absolute top-1/2 left-0 h-px w-3 bg-current transition-transform duration-300 ${
                          isOpen ? "rotate-0" : "rotate-90"
                        }`}
                      />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  hidden={!isOpen}
                  className="pb-7 text-sm leading-[1.85] text-charcoal/80"
                >
                  {t(f.a)}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
