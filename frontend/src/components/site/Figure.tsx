import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/dictionary";

/**
 * Image with a graceful placeholder.
 * If the file in src/config/images.ts does not exist yet, an elegant
 * textured placeholder is shown instead of a broken image.
 */
export function Figure({
  src,
  alt,
  className = "",
  imgClassName = "",
  eager = false,
  label,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
  label?: string;
}) {
  const [failed, setFailed] = useState(false);
  const { t } = useLang();

  return (
    <div className={`relative overflow-hidden bg-secondary ${className}`}>
      {failed ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[repeating-linear-gradient(135deg,var(--color-secondary)_0px,var(--color-secondary)_10px,var(--color-muted)_10px,var(--color-muted)_20px)] px-4 text-center"
        >
          <span className="h-px w-8 bg-forest/40" />
          <span className="eyebrow">{label ?? t(ui.common.placeholder)}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding={eager ? "sync" : "async"}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      )}
      {failed && <span className="sr-only">{alt}</span>}
    </div>
  );
}
