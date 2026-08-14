import { Figure } from "./Figure";
import { useLang, type Localized } from "@/lib/i18n";

export function PageHeader({
  kicker,
  title,
  lead,
  image,
}: {
  kicker: Localized;
  title: Localized;
  lead: Localized;
  image: string;
}) {
  const { t } = useLang();

  return (
    <header className="relative flex min-h-[58svh] items-end overflow-hidden pt-28 sm:min-h-[62svh]">
      <Figure
        src={image}
        alt={t(title)}
        className="absolute inset-0 h-full w-full"
        eager
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--charcoal)_55%,transparent),color-mix(in_oklab,var(--forest-deep)_78%,transparent))]"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-14 sm:px-8 sm:pb-20 lg:px-12">
        <p className="eyebrow text-cream/75">{t(kicker)}</p>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.05] text-cream">
          {t(title)}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/80">{t(lead)}</p>
      </div>
    </header>
  );
}
