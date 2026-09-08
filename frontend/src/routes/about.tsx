import { createFileRoute } from "@tanstack/react-router";
import { GuideSection } from "@/components/sections/Planning";
import { MannersSection } from "@/components/sections/Manners";
import { WeekdayNoteSection } from "@/components/sections/SlowDown";
import { PageHeader } from "@/components/site/PageHeader";
import { images } from "@/config/images";

const title = "Good to Know — Travelling in Nishi Tama";
const description =
  "Travel manners, weekday opening hours and what to know before you go — how to enjoy western Tokyo with care and at Nishi Tama's own pace.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        kicker={{
          en: "Good to Know",
          ja: "旅の心得",
          vi: "Điều nên biết khi đi",
          zh: "旅行须知",
          ko: "여행자 마음가짐",
          de: "Reisehinweise",
          ru: "Полезно знать",
        }}
        title={{
          en: "Travel with care",
          ja: "心を込めて旅する",
          vi: "Đi với sự quan tâm",
          zh: "用心旅行",
          ko: "마음을 담아 여행하기",
          de: "Reisen mit Achtsamkeit",
          ru: "Путешествуйте с заботой",
        }}
        lead={{
          en: "Respect the place, know before you go, and travel at Nishi Tama's pace.",
          ja: "この土地を大切にし、出発前に知っておき、西多摩のペースで旅をしましょう。",
          vi: "Trân trọng nơi chốn, tìm hiểu trước khi đi, và du lịch theo nhịp sống của Nishi Tama.",
          zh: "尊重当地、出发前做好了解，以西多摩的节奏旅行。",
          ko: "이곳을 존중하고, 떠나기 전에 미리 알아보고, 니시타마의 속도로 여행하세요.",
          de: "Respektieren Sie den Ort, informieren Sie sich vorab und reisen Sie im Tempo von Nishi Tama.",
          ru: "Уважайте это место, узнайте всё заранее и путешествуйте в темпе Ниси-Тама.",
        }}
        image={images.hinohara}
      />
      <MannersSection />
      <WeekdayNoteSection />
      <GuideSection />
    </>
  );
}
