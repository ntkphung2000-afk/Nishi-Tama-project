import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Lang, LOCALES, useLang } from "@/lib/i18n";
import { ui } from "@/lib/dictionary";
import { HeaderSearch } from "./HeaderSearch";

const navItems = [
  { to: "/discover", label: ui.nav.discover },
  { to: "/destinations", label: ui.nav.destinations },
  { to: "/experiences", label: ui.nav.experiences },
  { to: "/events", label: ui.nav.events },
  { to: "/travel-guide", label: ui.nav.guide },
  { to: "/about", label: ui.nav.about },
  { to: "/contact", label: ui.nav.contact },
] as const;

export function Header() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || !overHero;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-forest/10 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <div className="flex min-w-0 items-center gap-2 sm:gap-4">
          <Link to="/" className="group flex min-w-0 items-baseline gap-3">
            <span
              className={`font-display text-xl tracking-[0.28em] transition-colors sm:text-2xl ${
                solid ? "text-forest-deep" : "text-cream"
              }`}
            >
              NISHI TAMA
            </span>
            <span
              className={`hidden font-jp text-sm tracking-[0.2em] transition-colors sm:inline ${
                solid ? "text-forest/70" : "text-cream/70"
              }`}
            >
              西多摩
            </span>
          </Link>
          <HeaderSearch solid={solid} />
        </div>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden items-center gap-x-6 xl:flex 2xl:gap-x-7">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`relative text-[0.8125rem] tracking-wide transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100 data-[status=active]:after:scale-x-100 ${
                solid ? "text-charcoal/80 hover:text-forest-deep" : "text-cream/85 hover:text-cream"
              }`}
            >
              {t(item.label)}
            </Link>
          ))}
          <span className={`h-4 w-px ${solid ? "bg-forest/25" : "bg-cream/30"}`} />
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            className={`cursor-pointer rounded border bg-transparent px-2 py-1 text-[0.75rem] tracking-widest outline-none transition-colors ${
              solid
                ? "border-forest/25 text-charcoal hover:border-forest/50"
                : "border-cream/30 text-cream hover:border-cream/60"
            }`}
          >
            {LOCALES.map((l) => (
              <option key={l.code} value={l.code} className="bg-forest-deep text-cream">
                {l.short} - {l.label}
              </option>
            ))}
          </select>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={t(ui.nav.menu)}
          aria-expanded={open}
          className={`flex h-11 w-11 items-center justify-center xl:hidden ${
            solid ? "text-forest-deep" : "text-cream"
          }`}
        >
          <span className="sr-only">{t(ui.nav.menu)}</span>
          <span className="flex flex-col gap-[6px]">
            <span className="block h-px w-7 bg-current" />
            <span className="block h-px w-7 bg-current" />
            <span className="block h-px w-5 bg-current" />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 xl:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-charcoal/50 transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-forest-deep px-7 pb-10 pt-6 text-cream transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-lg tracking-[0.28em]">NISHI TAMA</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t(ui.nav.close)}
              className="flex h-11 w-11 items-center justify-center text-cream"
            >
              <span aria-hidden="true" className="relative block h-5 w-5">
                <span className="absolute left-0 top-1/2 h-px w-5 rotate-45 bg-current" />
                <span className="absolute left-0 top-1/2 h-px w-5 -rotate-45 bg-current" />
              </span>
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-12 flex flex-col">
            {navItems.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                style={{ transitionDelay: `${open ? 120 + i * 45 : 0}ms` }}
                className={`border-b border-cream/12 py-4 font-display text-2xl tracking-wide transition-all duration-500 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-10">
            <p className="eyebrow text-cream/60">{t(ui.nav.language)}</p>
            <div className="mt-3">
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as Lang)}
                className="w-full cursor-pointer rounded border border-cream/35 bg-forest-deep px-4 py-2.5 text-sm tracking-wider text-cream outline-none focus:border-cream"
              >
                {LOCALES.map((l) => (
                  <option key={l.code} value={l.code} className="bg-forest-deep text-cream">
                    {l.label} ({l.short})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
