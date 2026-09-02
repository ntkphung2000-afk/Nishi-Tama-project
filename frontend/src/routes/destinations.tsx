import { createFileRoute } from "@tanstack/react-router";
import { DestinationsSection, SpecialtiesSection } from "@/components/sections/Places";
import { PageHeader } from "@/components/site/PageHeader";
import { images } from "@/config/images";

const title = "Destinations in Nishi Tama — Mountains, Valleys and Old Towns";
const description =
  "Mount Mitake, Akigawa Valley, Hossawa Falls, Lake Okutama, Nippara Cave and more places to discover in western Tokyo.";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <>
      <PageHeader
  kicker={{
    en: "Where to Go",
  ja: "行き先",
  vi: "Nơi nên đến",
  zh: "前往地点",
  ko: "가볼 곳",
  de: "Wohin gehen",
  ru: "Куда пойти",
  }}
  title={{
   en: "Places to discover",
  ja: "訪ねたい場所",
  vi: "Những nơi để khám phá",
  zh: "值得探索的地点",
  ko: "발견할 장소들",
  de: "Orte zum Entdecken",
  ru: "Места для открытия",
  }}
  lead={{
    en: "Sacred mountains, river valleys, waterfalls and old streets — a selection of the region's best-known places.",
      ja: "霊山、渓谷、滝、そして古い街並み。西多摩を代表する場所を集めました。",
      vi: "Núi thiêng, thung lũng sông, thác nước và phố cổ — tuyển chọn những địa điểm nổi tiếng nhất của vùng.",
      zh: "圣山、河谷、瀑布和古街——精选本地区最知名的地点。",
      ko: "신성한 산, 강골짜기, 폭포, 오래된 거리 — 이 지역에서 가장 잘 알려진 장소들입니다.",      de: "Heilige Berge, Flusstäler, Wasserfälle und alte Straßen — eine Auswahl der bekanntesten Orte der Region.",
      ru: "Священные горы, речные долины, водопады и старые улицы — подборка самых известных мест региона.",
  }}
  image={images.destinations.mitake}
/>
      <DestinationsSection />
      <SpecialtiesSection />
    </>
  );
}
