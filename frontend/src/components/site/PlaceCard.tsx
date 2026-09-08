import { useLang } from "@/lib/i18n";
import { x } from "@/lib/dictionary-extra";
import { categoryLabel } from "@/lib/placeCategoryLabels";
import { buildReportMailtoUrl } from "@/lib/reportIssue";
import { stationById } from "@/data/stations";
import type { Place } from "@/data/places";

/**
 * One place: name, category, walk time, description and links only.
 * Never renders Google Rating, Review Count or Rating Status — those
 * live in `Place._internal` and are not read here.
 */
export function PlaceCard({ place }: { place: Place }) {
  const { t, lang } = useLang();
  const name = place.nameEn ?? place.nameJa ?? "";
  const station = stationById(place.stationId);
  const reportUrl = buildReportMailtoUrl(place, station?.en ?? place.stationId, lang);

  return (
    <article className="flex flex-col border border-forest/15 bg-background p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <h4 className="text-lg leading-tight text-forest-deep">{place.nameEn ?? place.nameJa}</h4>
        {place.nameEn && place.nameJa && (
          <span className="font-jp text-xs text-charcoal/60">{place.nameJa}</span>
        )}
      </div>

      {place.verificationStatus === "needs_manual_check" && (
        <span className="mt-2 inline-flex w-fit items-center border border-destructive/40 px-2 py-0.5 text-[0.625rem] tracking-[0.1em] uppercase text-destructive">
          {t(x.verification.needsCheck)}
        </span>
      )}

      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.6875rem] tracking-[0.1em] uppercase text-forest/70">
        <span>{t(categoryLabel(place.categoryRaw))}</span>
        {place.walkLabel && (
          <>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-forest/40" />
            <span>{place.walkLabel}</span>
          </>
        )}
      </div>

      {place.description && (
        <p className="mt-3 text-sm leading-relaxed text-charcoal/80">{t(place.description)}</p>
      )}

      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-forest/10 pt-3">
        <a
          href={place.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[0.6875rem] tracking-[0.14em] uppercase text-forest transition-colors hover:text-forest-deep"
        >
          {t(x.guide.maps)}
          <span aria-hidden="true" className="h-px w-4 bg-current" />
          <span className="sr-only">{`— ${name}`}</span>
        </a>
        {place.website && (
          <a
            href={place.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.6875rem] tracking-[0.14em] uppercase text-forest transition-colors hover:text-forest-deep"
          >
            {t(x.guide.website)}
            <span aria-hidden="true" className="h-px w-4 bg-current" />
          </a>
        )}
        <a
          href={reportUrl}
          className="ml-auto inline-flex items-center gap-1.5 text-[0.625rem] tracking-[0.1em] uppercase text-muted-foreground transition-colors hover:text-forest"
        >
          {t(x.report.button)}
        </a>
      </div>
    </article>
  );
}
