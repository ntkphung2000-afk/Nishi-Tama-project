import { useState, type ComponentType, type FormEvent } from "react";
import { LOCALES, useLang, type Localized } from "@/lib/i18n";
import { ui } from "@/lib/dictionary";
import { Section, SectionHeader } from "../site/Section";
import { Reveal } from "../site/Reveal";

const field =
  "mt-2 min-h-12 w-full border border-forest/25 bg-background px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-muted-foreground focus:border-forest";

/* ------------------------------------------------------------------
 * Useful Links — a row of 3 external-link cards that overlaps the
 * bottom of the contact page hero. Same card language as the rest of
 * the site (thin forest border, cream background, sharp corners).
 * ------------------------------------------------------------------ */

const iconProps = {
  viewBox: "0 0 24 24",
  "aria-hidden": true as const,
  className: "h-6 w-6 text-forest",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function InstagramIcon() {
  return (
    <svg {...iconProps}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="16.6" cy="7.4" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.6 2.3 4 5.3 4 8.5s-1.4 6.2-4 8.5c-2.6-2.3-4-5.3-4-8.5s1.4-6.2 4-8.5Z" />
    </svg>
  );
}

type LinkCard = {
  href: string;
  host: string;
  Icon: ComponentType;
  title: Localized;
  description: Localized;
};

const linkCards: LinkCard[] = [
  {
    href: "https://www.instagram.com/nishitama_tokyo_/",
    host: "instagram.com",
    Icon: InstagramIcon,
    title: ui.usefulLinks.card1.title,
    description: ui.usefulLinks.card1.description,
  },
  {
    href: "https://www.nishitama-kouiki.jp/",
    host: "nishitama-kouiki.jp",
    Icon: GlobeIcon,
    title: ui.usefulLinks.card2.title,
    description: ui.usefulLinks.card2.description,
  },
  {
    href: "https://www.ohtama.or.jp/en/",
    host: "ohtama.or.jp",
    Icon: GlobeIcon,
    title: ui.usefulLinks.card3.title,
    description: ui.usefulLinks.card3.description,
  },
];

export function UsefulLinksSection() {
  const { t } = useLang();

  return (
    <section className="relative z-10 -mt-10 px-5 sm:-mt-14 sm:px-8 lg:-mt-20 lg:px-12">
      <div className="mx-auto w-full max-w-[1400px]">
        <Reveal>
          <p className="eyebrow text-cream/80">{t(ui.usefulLinks.eyebrow)}</p>
        </Reveal>

        <ul className="mt-4 grid gap-4 sm:gap-5 md:grid-cols-3">
          {linkCards.map(({ href, host, Icon, title, description }, i) => (
            <Reveal as="li" key={host} delay={i * 80}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col border border-forest/15 bg-background p-6 shadow-[0_10px_30px_-18px_rgba(33,75,50,0.55)] transition-colors hover:border-forest/45 sm:p-7"
              >
                <Icon />
                <h3 className="mt-4 text-lg leading-tight text-forest-deep">{t(title)}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t(description)}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[0.6875rem] tracking-[0.14em] uppercase text-forest transition-colors group-hover:text-forest-deep">
                  {host}
                  <span
                    aria-hidden="true"
                    className="h-px w-4 bg-current transition-all group-hover:w-6"
                  />
                </span>
                <span className="sr-only"> ({t(ui.usefulLinks.newTab)})</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ContactSection() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <Section id="contact" tone="cream">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <SectionHeader
          eyebrow={t(ui.contact.eyebrow)}
          title={t(ui.contact.title)}
          lead={t(ui.contact.lead)}
        />

        <Reveal delay={80}>
          <form onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="c-name" className="eyebrow">
                {t(ui.contact.name)}
              </label>
              <input id="c-name" name="name" required autoComplete="name" className={field} />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="c-email" className="eyebrow">
                {t(ui.contact.email)}
              </label>
              <input
                id="c-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={field}
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="c-country" className="eyebrow">
                {t(ui.contact.country)}
              </label>
              <input id="c-country" name="country" autoComplete="country-name" className={field} />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="c-lang" className="eyebrow">
                {t(ui.contact.language)}
              </label>
              <select id="c-lang" name="language" className={field} defaultValue="en">
                {LOCALES.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="c-message" className="eyebrow">
                {t(ui.contact.message)}
              </label>
              <textarea id="c-message" name="message" rows={6} required className={field} />
            </div>

            <div className="sm:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center bg-forest-deep px-9 text-[0.75rem] tracking-[0.2em] uppercase text-cream transition-colors hover:bg-forest"
              >
                {t(ui.contact.send)}
              </button>
              <p aria-live="polite" className="text-sm text-forest">
                {sent ? t(ui.contact.sent) : ""}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
