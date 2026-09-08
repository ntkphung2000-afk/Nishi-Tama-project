import { createFileRoute } from "@tanstack/react-router";
import { FaqSection, PlanSection } from "@/components/sections/Planning";
import { RailwaySection } from "@/components/sections/Railway";
import { SmartTripPlanner } from "@/components/sections/SmartTripPlanner";
import { PageHeader } from "@/components/site/PageHeader";
import { images } from "@/config/images";

const title = "Nishi Tama Travel Guide — Access from Shinjuku by Train";
const description =
  "How to reach western Tokyo from Shinjuku and Tachikawa by train, getting around, best seasons, what to bring, day-trip itineraries and frequently asked questions.";

export const Route = createFileRoute("/travel-guide")({
  validateSearch: (search: Record<string, unknown>): { q?: string } => {
    const raw = search["q"];
    return typeof raw === "string" && raw.length > 0 ? { q: raw } : {};
  },
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
        kicker={{
          en: "Practical Information",
          ja: "実用情報",
          vi: "Thông tin thực tế",
          zh: "实用信息",
          ko: "실용 정보",
          de: "Praktische Informationen",
          ru: "Практическая информация",
        }}
        title={{
          en: "Plan your Nishi Tama trip",
          ja: "西多摩の旅を計画する",
          vi: "Lên kế hoạch cho chuyến đi Nishi Tama",
          zh: "规划你的西多摩之旅",
          ko: "니시타마 여행 계획하기",
          de: "Planen Sie Ihre Reise nach Nishi Tama",
          ru: "Спланируйте поездку в Ниси-Тама",
        }}
        lead={{
          en: "Easy to reach from Shinjuku by train — perfect as a day trip from central Tokyo.",
          ja: "新宿から電車で。都心からの日帰り旅にぴったりです。",
          vi: "Dễ dàng di chuyển bằng tàu từ Shinjuku — hoàn hảo cho chuyến đi trong ngày từ trung tâm Tokyo.",
          zh: "从新宿乘电车轻松抵达——非常适合作为东京市中心的一日游。",
          ko: "신주쿠에서 기차로 쉽게 갈 수 있어 도쿄 도심에서 떠나는 당일치기 여행으로 안성맞춤입니다.",
          de: "Leicht erreichbar mit dem Zug ab Shinjuku — perfekt für einen Tagesausflug aus der Innenstadt von Tokio.",
          ru: "Легко добраться на поезде от станции Синдзюку — идеально подходит для однодневной поездки из центра Токио.",
        }}
        image={images.guide}
      />
      <RailwaySection />
      <SmartTripPlanner />
      <PlanSection />
      <FaqSection />
    </>
  );
}