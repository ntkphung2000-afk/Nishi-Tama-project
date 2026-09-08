import { useLang } from "@/lib/i18n";
import { x } from "@/lib/dictionary-extra";
import { placesForStation, type PlaceCategoryGroup } from "@/data/places";
import type { StationCard as StationCardData } from "@/data/stations";
import { CategoryIcon } from "./CategoryIcon";

const CATEGORY_ORDER: PlaceCategoryGroup[] = [
  "food",
  "cafe",
  "omiyage",
  "nature",
  "attraction",
  "onsen",
  "outdoor",
];

/** One reusable station card. Used for all 20 stations — never duplicated per station. */
export function StationCard({
  station,
  onOpen,
}: {
  station: StationCardData;
  onOpen: (stationId: string) => void;
}) {
  const { t } = useLang();
  const places = placesForStation(station.id);
  const groupsPresent = CATEGORY_ORDER.filter((g) => places.some((p) => p.groups.includes(g)));

  return (
    <div className="flex w-full flex-col border border-forest/20 bg-background p-6">
      <span className="inline-block self-start border border-forest/35 px-2 py-0.5 text-[0.625rem] tracking-[0.14em] text-forest/80">
        {station.code}
      </span>
      <h3 className="mt-3 font-display text-2xl leading-tight text-forest-deep">{station.en}</h3>
      <p className="font-jp text-sm text-charcoal/70">{station.ja}</p>
      <p className="eyebrow mt-2">{t(station.character)}</p>

      {groupsPresent.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {groupsPresent.map((g) => (
            <li
              key={g}
              title={t(x.categories[g])}
              className="flex h-7 w-7 items-center justify-center border border-forest/25 text-forest/80"
            >
              <CategoryIcon group={g} />
              <span className="sr-only">{t(x.categories[g])}</span>
            </li>
          ))}
        </ul>
      )}

      <dl className="mt-4 space-y-1 text-xs text-muted-foreground">
        <div className="flex gap-2">
          <dt className="shrink-0 uppercase tracking-[0.16em]">{t(x.rail.line)}</dt>
          <dd>{t(station.line)}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="shrink-0 uppercase tracking-[0.16em]">{t(x.rail.area)}</dt>
          <dd>{t(station.municipality)}</dd>
        </div>
      </dl>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal/85">
        {t(station.description)}
      </p>

      <button
        type="button"
        onClick={() => onOpen(station.id)}
        className="mt-6 inline-flex min-h-11 items-center justify-center gap-3 border border-forest-deep px-5 text-[0.7rem] tracking-[0.2em] uppercase text-forest-deep transition-colors hover:bg-forest-deep hover:text-cream"
      >
        {t(x.rail.exploreArea)}
        <span aria-hidden="true" className="h-px w-5 bg-current" />
      </button>
    </div>
  );
}
