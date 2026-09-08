import { useLang } from "@/lib/i18n";
import { x } from "@/lib/dictionary-extra";

/** Small disclaimer shown wherever real place listings are displayed. */
export function PlaceDataDisclaimer({ className = "" }: { className?: string }) {
  const { t } = useLang();
  return (
    <p className={`text-[0.75rem] leading-relaxed text-muted-foreground ${className}`}>
      {t(x.disclaimer.info)}
    </p>
  );
}
