import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/dictionary";

/**
 * Shared typeahead list for the trip search — the 7 example prompts from
 * `ui.searchSuggestions`. Used by both the header search box and the real
 * SmartTripPlanner input, so the prompt list lives in exactly one place.
 */
export function SearchSuggestions({
  onPick,
  className = "",
}: {
  onPick: (text: string) => void;
  className?: string;
}) {
  const { t } = useLang();

  return (
    <div className={className}>
      <p className="eyebrow px-2 pb-1 text-forest/70">{t(ui.headerSearch.tryLabel)}</p>
      <ul>
        {ui.searchSuggestions.map((s, i) => {
          const text = t(s);
          return (
            <li key={i}>
              <button
                type="button"
                // keep focus on the input so the dropdown doesn't close before the click lands
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => onPick(text)}
                className="w-full px-2 py-1.5 text-left text-sm text-charcoal/85 transition-colors hover:bg-forest/10 hover:text-forest-deep"
              >
                {text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
