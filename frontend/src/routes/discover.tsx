import { createFileRoute } from "@tanstack/react-router";
import { AreasSection, IntroSection } from "@/components/sections/Discover";
import { CoreValuesSection } from "@/components/sections/CoreValues";
import { PageHeader } from "@/components/site/PageHeader";
import { images } from "@/config/images";

const title = "Discover Nishi Tama — Eight Municipalities of Western Tokyo";
const description =
  "What is Nishi Tama? An introduction to the eight municipalities of western Tokyo: Ome, Fussa, Hamura, Akiruno, Mizuho, Hinode, Hinohara and Okutama.";

export const Route = createFileRoute("/discover")({
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
  component: DiscoverPage,
});

function DiscoverPage() {
  return (
    <>
      <PageHeader
        kicker={{
          en: "The Region",
          ja: "エリア",
          vi: "Khu vực",
          zh: "地区",
          ko: "지역",
          de: "Die Region",
          ru: "Регион",
        }}
        title={{
          en: "Discover Nishi Tama",
          ja: "西多摩を知る",
          vi: "Khám phá Nishi Tama",
          zh: "探索西多摩",
          ko: "니시타마를 알아가다",
          de: "Nishi Tama entdecken",
          ru: "Откройте для себя Ниси-Тама",
        }}
        lead={{
          en: "Eight municipalities, one quieter side of Tokyo.",
          ja: "8つの市町村がつくる、もうひとつの東京。",
          vi: "Tám khu vực hành chính, một Tokyo yên tĩnh hơn.",
          zh: "八个市町村，构成东京更宁静的一面。",
          ko: "여덟 개의 지자체가 만드는, 더 조용한 도쿄.",
          de: "Acht Gemeinden, eine ruhigere Seite Tokios.",
          ru: "Восемь муниципалитетов — более тихая сторона Токио.",
        }}
        image={images.nishitama}
      />
      <CoreValuesSection />
      <IntroSection />
      <AreasSection />
    </>
  );
}