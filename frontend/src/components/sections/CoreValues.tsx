import type { ComponentType } from "react";
import { useLang, type Localized } from "@/lib/i18n";
import { ui } from "@/lib/dictionary";
import { Section } from "../site/Section";
import { Reveal } from "../site/Reveal";

/* ------------------------------------------------------------------
 * "Three Core Values" band — a compact row of colour-filled info
 * blocks paired with hand-drawn line illustrations. Layout concept
 * only; colours are three light tints within a single green family,
 * with one shared dark-green ink color, matching the Hero's forest
 * green identity. Sits directly below the Hero.
 * ------------------------------------------------------------------ */

const svgProps = {
  viewBox: "0 0 320 170",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  className: "h-auto w-full",
};

/** Block 1 — a mountain / river / sun healing scene. */
function HealingIllustration() {
  return (
    <svg {...svgProps}>
      <circle cx="255" cy="40" r="14" />
      <path d="M255 21v-9M274 27l6-6M236 27l-6-6M283 44h9M227 44h-9" />
      <path d="M0 120 L60 62 L104 104 L150 56 L200 108 L260 70 L320 118" />
      <path d="M0 146 L52 110 L92 134 L140 100 L190 136 L250 106 L320 144" />
      <ellipse cx="160" cy="146" rx="98" ry="15" />
      <path d="M118 143 h22M146 150 h32M186 143 h18" />
      <path d="M60 44 q6 -7 12 0 q6 -7 12 0" />
    </svg>
  );
}

/** Block 2 — a quiet, respectful gesture at a shrine gate. */
function MannersIllustration() {
  return (
    <svg {...svgProps}>
      <path d="M24 138 H296" />
      <path d="M116 138 V54" />
      <path d="M204 138 V54" />
      <path d="M100 54 Q160 48 220 54" />
      <path d="M100 54 l-5 -5M220 54 l5 -5" />
      <path d="M116 72 H204" />
      <path d="M160 54 V72" />
      {/* stone lantern */}
      <path d="M60 138 V122M52 122 H68M54 110 H66 L64 122 H56 ZM53 110 Q60 100 67 110M60 98 V94" />
      {/* bowing visitor — abstract, non-identifiable */}
      <circle cx="255" cy="90" r="6" />
      <path d="M255 96 C252 106 246 116 242 126" />
      <path d="M242 126 L237 138" />
      <path d="M242 126 L246 138" />
      <path d="M251 104 C246 110 244 118 245 125" />
    </svg>
  );
}

/** Block 3 — a train on the line, heading toward the mountains. */
function DiscoverIllustration() {
  return (
    <svg {...svgProps}>
      <path d="M0 70 L46 30 L82 60 L130 22 L178 64 L226 32 L280 66 L320 44" />
      <path d="M40 168 L150 84" />
      <path d="M280 168 L170 84" />
      <path d="M64 150 H256M90 130 H230M113 112 H207M132 98 H188" />
      <path d="M138 96 q0 -8 8 -8 h20 q8 0 8 8 v26 h-36 z" />
      <path d="M144 98 h10 v8 h-10 zM160 98 h10 v8 h-10 z" />
      <path d="M156 106 v16" />
      <circle cx="146" cy="126" r="3" />
      <circle cx="166" cy="126" r="3" />
    </svg>
  );
}

type Block = {
  n: string;
  bg: string;
  headline: Localized;
  subtext: Localized;
  Illustration: ComponentType;
};

/* Shared ink — one dark forest green used across all three blocks so
 * they read as one family, with only the background tint varying. */
const INK = "text-[#33452E]";
const INK_SOFT = "text-[#33452E]/80";
const INK_FAINT = "text-[#33452E]/45";
const BORDER = "border-[#33452E]/15";
const PANEL = "bg-[#33452E]/[0.06]";

const blocks: Block[] = [
  {
    n: "01",
    bg: "bg-[#E7ECDD]", // soft sage
    headline: ui.coreValues.block1.headline,
    subtext: ui.coreValues.block1.subtext,
    Illustration: HealingIllustration,
  },
  {
    n: "02",
    bg: "bg-[#DCE3C8]", // warmer, olive-leaning green
    headline: ui.coreValues.block2.headline,
    subtext: ui.coreValues.block2.subtext,
    Illustration: MannersIllustration,
  },
  {
    n: "03",
    bg: "bg-[#D3E0D6]", // cooler, jade-leaning green
    headline: ui.coreValues.block3.headline,
    subtext: ui.coreValues.block3.subtext,
    Illustration: DiscoverIllustration,
  },
];

export function CoreValuesSection() {
  const { t } = useLang();

  return (
    <Section id="core-values" tone="cream">
      <Reveal>
        <p className="eyebrow">{t(ui.coreValues.eyebrow)}</p>
      </Reveal>

      <ul className="mt-8 grid gap-4 sm:gap-5 md:mt-10 md:grid-cols-3">
        {blocks.map(({ n, bg, headline, subtext, Illustration }, i) => (
          <Reveal
            as="li"
            key={n}
            delay={i * 90}
            className={`flex flex-col overflow-hidden ${INK} ${bg}`}
          >
            <div className="flex flex-1 flex-col p-7 sm:p-8">
              <span className={`font-display text-2xl ${INK_FAINT}`}>{n}</span>
              <h3 className={`mt-3 font-display text-xl leading-snug ${INK} sm:text-2xl`}>
                {t(headline)}
              </h3>
              <p className={`mt-3 text-sm leading-relaxed ${INK_SOFT}`}>{t(subtext)}</p>
            </div>
            <div className={`border-t ${BORDER} ${PANEL} px-7 py-6 ${INK_SOFT} sm:px-8`}>
              <div className="mx-auto w-full max-w-[280px]">
                <Illustration />
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}