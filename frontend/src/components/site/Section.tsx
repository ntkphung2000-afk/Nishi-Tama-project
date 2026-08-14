import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "dark",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      <p className={`eyebrow ${tone === "light" ? "text-cream/70" : ""}`}>{eyebrow}</p>
      <h2
        className={`mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-[1.08] tracking-tight ${
          tone === "light" ? "text-cream" : "text-forest-deep"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-[1.0625rem] ${
            tone === "light" ? "text-cream/75" : "text-muted-foreground"
          } ${centered ? "mx-auto" : "max-w-2xl"}`}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className = "",
  tone = "cream",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "cream" | "beige" | "forest" | "card";
}) {
  const tones: Record<string, string> = {
    cream: "bg-background",
    beige: "bg-secondary",
    card: "bg-card",
    forest: "bg-forest-deep text-cream",
  };
  return (
    <section
      id={id}
      className={`scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36 ${tones[tone]} ${className}`}
    >
      <div className="mx-auto w-full max-w-[1400px]">{children}</div>
    </section>
  );
}
