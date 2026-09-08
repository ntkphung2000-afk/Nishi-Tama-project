import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { x } from "@/lib/dictionary-extra";

/**
 * Nishi Tama mascot — a cat holding an ume plum.
 * Drop the artwork at: public/images/nishi-tama-mascot.png
 * Nothing is rendered until that file exists, so layouts never break.
 */
export const MASCOT_SRC = "/images/nishi-tama-mascot.png";

export function NishiTamaMascot({
  className = "w-40",
  showLabel = false,
}: {
  className?: string;
  showLabel?: boolean;
}) {
  const { t } = useLang();
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <figure className={`flex flex-col items-center gap-3 ${className}`}>
      <img
        src={MASCOT_SRC}
        alt={t(x.mascot.alt)}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className="h-auto w-full max-w-full object-contain"
      />
      {showLabel && (
        <figcaption className="eyebrow text-center text-forest/80">{t(x.mascot.label)}</figcaption>
      )}
    </figure>
  );
}
