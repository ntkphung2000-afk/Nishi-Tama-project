import { useNavigate, useRouterState } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/dictionary";

function SearchIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-3.8-3.8" />
    </svg>
  );
}

/**
 * Header shortcut to the trip search. The seven-item nav leaves no room for
 * a text field at common desktop widths in the longer-label languages, so
 * this is an icon-only button: it jumps to the real SmartTripPlanner search
 * on /travel-guide (smooth-scrolling to it and focusing its input), where
 * the typeahead suggestions live. Already on /travel-guide, it just scrolls
 * and focuses without navigating.
 */
export function HeaderSearch({ solid }: { solid: boolean }) {
  const { t } = useLang();
  const navigate = useNavigate();
  const onGuide = useRouterState({ select: (s) => s.location.pathname === "/travel-guide" });

  function go() {
    if (onGuide) {
      const el = document.getElementById("smart-search");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => {
        el?.querySelector<HTMLInputElement>('input[type="text"]')?.focus({ preventScroll: true });
      }, 60);
      return;
    }
    navigate({ to: "/travel-guide", hash: "smart-search" });
  }

  return (
    <button
      type="button"
      onClick={go}
      aria-label={t(ui.headerSearch.label)}
      className={`flex h-9 w-9 items-center justify-center rounded-sm transition-colors ${
        solid ? "text-forest-deep hover:bg-forest/10" : "text-cream hover:bg-cream/15"
      }`}
    >
      <SearchIcon />
    </button>
  );
}
