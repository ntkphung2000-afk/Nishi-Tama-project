import { useState, type FormEvent } from "react";
import { LOCALES, useLang } from "@/lib/i18n";
import { ui } from "@/lib/dictionary";
import { Section, SectionHeader } from "../site/Section";
import { Reveal } from "../site/Reveal";

const field =
  "mt-2 min-h-12 w-full border border-forest/25 bg-background px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-muted-foreground focus:border-forest";

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
