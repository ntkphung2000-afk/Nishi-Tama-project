/**
 * A small geographic identity mark: a stylised outline of the Nishi Tama
 * region (the 8 municipalities west of central Tokyo — Ome, Fussa, Hamura,
 * Akiruno, Mizuho, Hinode, Hinohara, Okutama). Traced by hand from the
 * region's real silhouette (a wider eastern base along the Tama River
 * plain, narrowing west into two mountainous prongs — Okutama to the
 * northwest, Hinohara to the southwest) since no GIS/SVG asset for the
 * region exists in the project. This is a simplified geographic likeness
 * for use as a subtle brand mark, not a surveyed boundary.
 *
 * Deliberately non-interactive, thin-lined and low-opacity — a signature,
 * not a feature. "NISHI TAMA" is set as plain text rather than through the
 * Localized/useLang system, matching the same treatment already used for
 * the brand name in Header.tsx (a proper noun shown identically in every
 * language, not a translated UI string).
 */
export function NishiTamaMapMark({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none flex flex-col items-end gap-1.5 ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 200 160"
        className="h-16 w-auto text-cream/80 drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)] sm:h-20 md:h-[5.5rem]"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <path
          d="M178,55 188,48 192,60 186,72 190,82 180,92 170,88 162,100 168,112 158,124 146,120 136,132 120,138 108,148 92,146 78,152 62,146 48,150 34,138 40,124 28,116 34,100 22,90 28,76 18,62 26,48 20,34 32,24 44,30 56,18 70,26 84,16 98,24 110,16 124,26 138,20 148,32 162,28 170,40 Z"
          opacity={0.9}
        />
        <circle cx="118" cy="70" r="2.6" fill="currentColor" stroke="none" opacity={0.9} />
      </svg>
      <span className="eyebrow text-[0.6rem] tracking-[0.28em] text-cream/70">NISHI TAMA</span>
    </div>
  );
}
