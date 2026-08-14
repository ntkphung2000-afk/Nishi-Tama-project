import { Link } from "@tanstack/react-router";
import { LOCALES, useLang } from "@/lib/i18n";
import { ui } from "@/lib/dictionary";

const links = [
  { to: "/discover", label: ui.nav.discover },
  { to: "/destinations", label: ui.nav.destinations },
  { to: "/experiences", label: ui.nav.experiences },
  { to: "/events", label: ui.nav.events },
  { to: "/travel-guide", label: ui.nav.guide },
  { to: "/travel-guide", label: ui.nav.faq, hash: "faq" },
  { to: "/contact", label: ui.nav.contact },
] as const;

const socials = ["Instagram", "YouTube", "X", "Facebook"];

export function Footer() {
  const { t, lang, setLang } = useLang();

  return (
    <footer className="bg-forest-deep px-5 py-16 text-cream sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid gap-12 border-b border-cream/15 pb-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl tracking-[0.24em]">NISHI TAMA</p>
            <p className="mt-2 font-jp text-sm tracking-[0.3em] text-cream/60">西多摩</p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/70">
              {t(ui.tagline)}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow text-cream/55">{t(ui.footer.explore)}</p>
            <ul className="mt-5 space-y-3">
              {links.map((l, i) => (
                <li key={`${l.to}-${i}`}>
                  <Link
                    to={l.to}
                    {...("hash" in l ? { hash: l.hash as string } : {})}

                    className="text-sm text-cream/80 transition-colors hover:text-cream"
                  >
                    {t(l.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-cream/55">{t(ui.nav.language)}</p>
            <div className="mt-5 flex flex-col items-start gap-3">
              {LOCALES.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setLang(l.code)}
                  aria-pressed={lang === l.code}
                  className={`text-sm transition-colors hover:text-cream ${
                    lang === l.code ? "text-cream underline underline-offset-4" : "text-cream/70"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <p className="eyebrow mt-10 text-cream/55">{t(ui.footer.social)}</p>
            <ul className="mt-5 flex flex-wrap gap-4">
              {socials.map((s) => (
                <li key={s}>
                  <span className="cursor-default text-sm text-cream/60">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>{t(ui.footer.rights)}</p>
          <p>{t(ui.footer.disclaimer)}</p>
        </div>
      </div>
    </footer>
  );
}
