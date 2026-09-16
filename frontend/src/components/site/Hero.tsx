import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { images } from "@/config/images";
import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/dictionary";
import { NishiTamaMapMark } from "./NishiTamaMapMark";

const SCENES = images.heroScenes;

// Faster pacing per feedback on the first pass (which used the design
// brief's slower 5-7s/1.2-1.8s suggestion) -- still a crossfade + Ken Burns,
// just quicker to read as "alive" rather than a slow dissolve.
const SCENE_DURATION_MS = 4000;
const CROSSFADE_MS = 800;

/** Tracks the user's OS-level reduced-motion preference (SSR-safe default: false). */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export function Hero() {
  const { t } = useLang();
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [generation, setGeneration] = useState(0);
  const [paused, setPaused] = useState(false);
  const sceneCount = SCENES.length;
  const hasMultipleScenes = sceneCount > 1;

  // `generation` forces the active <img> to remount even when looping back
  // to the same index (4→1 in the general case), so its Ken Burns animation
  // always restarts from scratch rather than freezing on its end frame.
  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % sceneCount) + sceneCount) % sceneCount);
      setGeneration((g) => g + 1);
    },
    [sceneCount],
  );

  useEffect(() => {
    if (!hasMultipleScenes || paused || reducedMotion) return;
    const id = window.setTimeout(() => goTo(index + 1), SCENE_DURATION_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, reducedMotion, hasMultipleScenes, goTo]);

  return (
    <section
      className="relative flex min-h-[88svh] items-center justify-center overflow-hidden lg:min-h-[94svh]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* `isolate` traps the per-scene z-index (0/1, used for crossfade
          layering) inside this container's own stacking context — without
          it, those z-indices leak into the section's stacking order and can
          paint above the gradient overlays below, regardless of DOM order. */}
      <div className="absolute inset-0 isolate">
        {SCENES.map((src, i) => {
          const active = i === index;
          return (
            <div
              key={i}
              aria-hidden={!active}
              className="absolute inset-0 transition-opacity"
              style={{ transitionDuration: `${CROSSFADE_MS}ms`, opacity: active ? 1 : 0, zIndex: active ? 1 : 0 }}
            >
              <img
                // Remounting only the active layer (via the `generation` key)
                // restarts its Ken Burns animation on every activation,
                // including the loop back to scene 0.
                key={active ? `${i}-${generation}` : i}
                src={src}
                alt=""
                width={1920}
                height={1088}
                fetchPriority={i === 0 ? "high" : "low"}
                loading={i === 0 ? "eager" : "lazy"}
                className={`h-full w-full object-cover object-[60%_center] sm:object-center ${
                  active && !reducedMotion ? "hero-kenburns" : ""
                }`}
                style={
                  active && !reducedMotion
                    ? {
                        animationDuration: `${SCENE_DURATION_MS + CROSSFADE_MS}ms`,
                        ["--kb-tx" as string]: i % 2 === 0 ? "-1.6%" : "1.4%",
                        ["--kb-ty" as string]: i % 2 === 0 ? "-1%" : "-1.2%",
                      }
                    : undefined
                }
              />
            </div>
          );
        })}
      </div>

      {/* A single, fixed screen-reader description of the Hero photography —
          kept independent of which scene is currently visible, since the
          scenes are a decorative atmosphere rather than distinct content. */}
      <span className="sr-only">
        Mist and evening light over the forested mountains and river valleys of Nishi Tama, western Tokyo
      </span>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--charcoal)_66%,transparent)_0%,color-mix(in_oklab,var(--charcoal)_46%,transparent)_42%,color-mix(in_oklab,var(--forest-deep)_76%,transparent)_100%)]"
      />
      {/* A second, focused scrim behind the text column only — keeps the
          headline/lead readable regardless of which scene's brightness is
          behind it (the misty valley and the sunlit river read very
          differently), without darkening the photo at its edges/corners. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(62%_55%_at_50%_48%,color-mix(in_oklab,var(--charcoal)_46%,transparent)_0%,transparent_75%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-24 pt-32 text-center sm:pb-28">
        <p className="eyebrow animate-fade-in text-cream/85">{t(ui.hero.kicker)}</p>
        <h1 className="mt-6 animate-fade-in font-display text-[clamp(2.5rem,8vw,5.75rem)] font-light leading-[1.02] tracking-tight text-cream">
          {t(ui.hero.title)}
        </h1>
        <p className="mt-5 animate-fade-in font-display text-[clamp(1.25rem,3.5vw,1.875rem)] font-light tracking-wide text-cream/90">
          {t(ui.hero.motto)}
        </p>
        <p className="mx-auto mt-6 max-w-xl animate-fade-in text-base leading-relaxed text-cream/85 sm:text-lg">
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

      {hasMultipleScenes && (
        <div className="absolute bottom-7 left-5 z-10 flex items-center gap-2.5 sm:bottom-8 sm:left-8">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Resume scene playback" : "Pause scene playback"}
            className="flex h-7 w-7 items-center justify-center rounded-full text-cream/70 transition-colors hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-cream/80"
          >
            {paused ? (
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3 w-3" fill="currentColor">
                <path d="M7 5v14l12-7Z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3 w-3" fill="currentColor">
                <path d="M7 5h3v14H7Zm7 0h3v14h-3Z" />
              </svg>
            )}
          </button>
          <div className="flex items-center gap-2">
            {SCENES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show scene ${i + 1} of ${sceneCount}`}
                aria-current={i === index}
                className="flex h-7 w-4 items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-cream/80"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-500 ${
                    i === index ? "w-5 bg-cream" : "w-1.5 bg-cream/45 hover:bg-cream/70"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      <NishiTamaMapMark className="absolute bottom-6 right-5 z-10 sm:bottom-8 sm:right-8" />

      <a
        href="#discover"
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-cream/70 transition-colors hover:text-cream"
      >
        <span className="eyebrow text-cream/70">{t(ui.hero.scroll)}</span>
        <span aria-hidden="true" className="relative block h-12 w-px overflow-hidden bg-cream/25">
          <span className="absolute inset-x-0 top-0 block h-4 animate-[scrollhint_2.4s_ease-in-out_infinite] bg-cream/90" />
        </span>
      </a>

      <style>{`
        @keyframes scrollhint{0%{transform:translateY(-100%)}60%{transform:translateY(300%)}100%{transform:translateY(300%)}}
        @keyframes heroKenBurns{
          from{transform:scale(1) translate3d(0,0,0);}
          to{transform:scale(1.06) translate3d(var(--kb-tx,-1.5%),var(--kb-ty,-1%),0);}
        }
        .hero-kenburns{animation-name:heroKenBurns;animation-timing-function:ease-out;animation-fill-mode:forwards;will-change:transform;}
      `}</style>
    </section>
  );
}
