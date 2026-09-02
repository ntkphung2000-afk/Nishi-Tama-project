import { createFileRoute } from "@tanstack/react-router";
import { EventsSection } from "@/components/sections/Happenings";
import { PageHeader } from "@/components/site/PageHeader";
import { images } from "@/config/images";
import { useLang } from "@/lib/i18n";

const title = "August Events in Nishi Tama — Summer Festivals and Fireworks";
const description =
  "Fireworks, Tanabata, lion dances and night markets: the August festival calendar across the eight municipalities of western Tokyo.";

export const Route = createFileRoute("/events")({
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
  component: EventsPage,
});

function EventsPage() {
  const { lang } = useLang();

  const translations = {
    en: {
      kicker: "Calendar",
      title: "What's happening in August",
      lead: "Summer is festival season across Nishi Tama.",
    },

    ja: {
      kicker: "カレンダー",
      title: "8月のイベント",
      lead: "夏は、西多摩の祭りの季節。",
    },

    vi: {
      kicker: "Lịch",
      title: "Điều gì diễn ra vào tháng 8",
      lead: "Mùa hè là mùa lễ hội trên khắp Nishi Tama.",
    },

    zh: {
      kicker: "日历",
      title: "八月发生了什么",
      lead: "夏季是西多摩各地的祭典季节。",
    },

    ko: {
      kicker: "캘린더",
      title: "8월에 어떤 일이 있나요",
      lead: "여름은 니시타마 곳곳에서 축제가 열리는 계절입니다.",
    },

    de: {
      kicker: "Kalender",
      title: "Was passiert im August",
      lead: "Der Sommer ist die Festivalsaison in Nishi Tama.",
    },

    ru: {
      kicker: "Календарь",
      title: "Что происходит в августе",
      lead: "Лето — сезон фестивалей по всему Ниси-Тама.",
    },
  };

  const t = translations[lang] ?? translations.en;

  return (
    <>
      <PageHeader
        kicker={{ en: t.kicker, ja: t.kicker }}
        title={{ en: t.title, ja: t.title }}
        lead={{ en: t.lead, ja: t.lead }}
        image={images.okutama}
      />

      <EventsSection />
    </>
  );
}