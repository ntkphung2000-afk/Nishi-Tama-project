import { createFileRoute } from "@tanstack/react-router";
import { FaqSection, GuideSection, PlanSection } from "@/components/sections/Planning";
import { RailwaySection } from "@/components/sections/Railway";
import { PageHeader } from "@/components/site/PageHeader";
import { images } from "@/config/images";

const title = "Nishi Tama Travel Guide — Access from Shinjuku by Train";
const description =
  "How to reach western Tokyo from Shinjuku and Tachikawa by train, getting around, best seasons, what to bring, day-trip itineraries and frequently asked questions.";

export const Route = createFileRoute("/travel-guide")({
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
  component: GuidePage,
});

function GuidePage() {
  return (
    <>
      <PageHeader
        kicker={{ en: "Practical Information", ja: "実用情報" }}
        title={{ en: "Plan your Nishi Tama trip", ja: "西多摩の旅を計画する" }}
        lead={{
          en: "Easy to reach from Shinjuku by train — perfect as a day trip from central Tokyo.",
          ja: "新宿から電車で。都心からの日帰り旅にぴったりです。",
        }}
        image={images.guide}
      />
      <RailwaySection />
      <PlanSection />
      <GuideSection />
      <FaqSection />
    </>
  );
}
