import { useLang } from "@/lib/i18n";
import { x } from "@/lib/dictionary-extra";
import { placesForStation, type PlaceCategoryGroup } from "@/data/places";
import { stationById } from "@/data/stations";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { CategoryIcon } from "./CategoryIcon";
import { PlaceCard } from "./PlaceCard";
import { PlaceDataDisclaimer } from "./PlaceDataDisclaimer";

const CATEGORY_ORDER: PlaceCategoryGroup[] = [
  "food",
  "cafe",
  "onsen",
  "nature",
  "outdoor",
  "attraction",
  "omiyage",
];

/**
 * Station Explorer — a bottom drawer (vaul, already used elsewhere in the
 * design system) grouping every verified place for one station by category.
 */
export function StationExplorer({
  stationId,
  onClose,
}: {
  stationId: string | null;
  onClose: () => void;
}) {
  const { t } = useLang();
  const station = stationId ? stationById(stationId) : undefined;
  const places = stationId ? placesForStation(stationId) : [];
  const groupsPresent = CATEGORY_ORDER.filter((g) => places.some((p) => p.groups.includes(g)));

  return (
    <Drawer open={Boolean(station)} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent className="border-forest/20 bg-background text-charcoal">
        <DrawerHeader className="mx-auto w-full max-w-4xl border-b border-forest/15 pb-5 text-left">
          {station && (
            <>
              <p className="eyebrow">{t(x.explorer.title)}</p>
              <DrawerTitle className="mt-2 font-display text-2xl font-normal leading-tight text-forest-deep sm:text-3xl">
                {station.en}
                <span className="ml-3 font-jp text-lg text-charcoal/60">{station.ja}</span>
              </DrawerTitle>
              <p className="mt-1 text-[0.6875rem] tracking-[0.2em] uppercase text-forest/70">
                {station.code}
              </p>
            </>
          )}
          <DrawerClose className="absolute right-4 top-4 min-h-11 min-w-11 text-[0.6875rem] tracking-[0.14em] uppercase text-forest/70 hover:text-forest-deep">
            {t(x.explorer.close)}
          </DrawerClose>
        </DrawerHeader>

        <div className="mx-auto max-h-[76vh] w-full max-w-4xl overflow-y-auto px-5 py-6 sm:px-8">
          {groupsPresent.length === 0 ? (
            <p className="text-sm leading-relaxed text-muted-foreground">{t(x.explorer.empty)}</p>
          ) : (
            <div className="space-y-8">
              {groupsPresent.map((group) => {
                const groupPlaces = places.filter((p) => p.groups.includes(group));
                return (
                  <section key={group}>
                    <div className="flex items-center gap-2 text-forest">
                      <CategoryIcon group={group} className="h-4 w-4" />
                      <h3 className="eyebrow">{t(x.categories[group])}</h3>
                    </div>
                    <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                      {groupPlaces.map((place) => (
                        <li key={`${group}-${place.id}`}>
                          <PlaceCard place={place} />
                        </li>
                      ))}
                    </ul>
                  </section>
                );
              })}
            </div>
          )}
          {groupsPresent.length > 0 && (
            <PlaceDataDisclaimer className="mt-8 border-t border-forest/10 pt-5" />
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
