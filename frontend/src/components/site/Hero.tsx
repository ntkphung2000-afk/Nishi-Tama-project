import { Link } from "@tanstack/react-router";
import { images } from "@/config/images";
import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/dictionary";

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative flex min-h-[88svh] items-center justify-center overflow-hidden lg:min-h-[94svh]">
      <img
        src={images.hero}
        alt="Mist rising over the forested mountains and river valleys of Nishi Tama, western Tokyo"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[60%_center] sm:object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--charcoal)_62%,transparent)_0%,color-mix(in_oklab,var(--charcoal)_28%,transparent)_38%,color-mix(in_oklab,var(--forest-deep)_72%,transparent)_100%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-24 pt-32 text-center sm:pb-28">
        <p className="eyebrow animate-fade-in text-cream/85">{t(ui.hero.kicker)}</p>
        <h1 className="mt-6 animate-fade-in font-display text-[clamp(2.5rem,8vw,5.75rem)] font-light leading-[1.02] tracking-tight text-cream">
          {t(ui.hero.title)}
        </h1>
        <p className="mx-auto mt-7 max-w-xl animate-fade-in text-base leading-relaxed text-cream/85 sm:text-lg">
          {t(ui.hero.lead)}
        </p>

        <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            to="/discover"
            className="inline-flex min-h-12 w-full items-center justify-center bg-cream px-9 text-[0.8125rem] tracking-[0.18em] text-forest-deep uppercase transition-colors hover:bg-beige sm:w-auto"
          >
            {t(ui.hero.ctaPrimary)}
          </Link>
          <Link
            to="/travel-guide"
            hash="plan"
            className="inline-flex min-h-12 w-full items-center justify-center border border-cream/60 px-9 text-[0.8125rem] tracking-[0.18em] text-cream uppercase transition-colors hover:bg-cream/12 sm:w-auto"
          >
            {t(ui.hero.ctaSecondary)}
          </Link>
        </div>
      </div>

      <a
        href="#discover"
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-cream/70 transition-colors hover:text-cream"
      >
        <span className="eyebrow text-cream/70">{t(ui.hero.scroll)}</span>
        <span aria-hidden="true" className="relative block h-12 w-px overflow-hidden bg-cream/25">
          <span className="absolute inset-x-0 top-0 block h-4 animate-[scrollhint_2.4s_ease-in-out_infinite] bg-cream/90" />
        </span>
      </a>

      <style>{`@keyframes scrollhint{0%{transform:translateY(-100%)}60%{transform:translateY(300%)}100%{transform:translateY(300%)}}`}</style>
    </section>
  );
}
