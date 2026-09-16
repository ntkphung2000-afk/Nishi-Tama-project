import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/dictionary";

/**
 * Horizontal month selector for the Events page. The active-tab
 * underline slides to the newly selected tab (ref-measured position,
 * CSS transition — same duration-300 timing as the nav-link underline
 * in Header.tsx) instead of jumping.
 */
export function MonthTabs({
  month,
  onChange,
}: {
  month: number;
  onChange: (month: number) => void;
}) {
  const { t } = useLang();
  const labels = t(ui.events.months);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [underline, setUnderline] = useState<{ left: number; width: number } | null>(null);

  useEffect(() => {
    const button = buttonRefs.current[month - 1];
    const container = containerRef.current;
    if (!button || !container) return;

    const update = () => {
      const buttonRect = button.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setUnderline({
        left: buttonRect.left - containerRect.left + container.scrollLeft,
        width: buttonRect.width,
      });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [month, labels]);

  return (
    <div
      ref={containerRef}
      role="tablist"
      aria-label="Month"
      className="relative flex gap-1 overflow-x-auto border-b border-forest/15 pb-px sm:gap-2"
    >
      {labels.map((label, i) => {
        const m = i + 1;
        const active = m === month;
        return (
          <button
            key={m}
            ref={(el) => {
              buttonRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(m)}
            className={`shrink-0 px-3 py-2.5 text-[0.75rem] tracking-[0.14em] uppercase transition-colors sm:px-4 ${
              active ? "text-forest-deep" : "text-muted-foreground hover:text-forest-deep"
            }`}
          >
            {label}
          </button>
        );
      })}
      {underline && (
        <span
          aria-hidden="true"
          className="absolute bottom-0 h-px bg-forest-deep transition-[left,width] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ left: underline.left, width: underline.width }}
        />
      )}
    </div>
  );
}
