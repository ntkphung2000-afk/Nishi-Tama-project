import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { EventsSection, eventsMonthTitle } from "@/components/sections/Happenings";
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

const kickerByLang = {
  en: "Calendar",
  ja: "カレンダー",
  vi: "Lịch",
  zh: "日历",
  ko: "캘린더",
  de: "Kalender",
  ru: "Календарь",
};

const leadByLang = {
  en: "Festivals, markets and seasonal happenings across Nishi Tama, month by month.",
  ja: "西多摩の祭りや市、季節のイベントを月ごとにご紹介します。",
  vi: "Lễ hội, phiên chợ và các sự kiện theo mùa trên khắp Nishi Tama, theo từng tháng.",
  zh: "西多摩各地的祭典、集市与四季活动，按月呈现。",
  ko: "니시타마 곳곳의 축제와 장터, 계절 행사를 달마다 소개합니다.",
  de: "Feste, Märkte und saisonale Veranstaltungen in ganz Nishi Tama, Monat für Monat.",
  ru: "Фестивали, ярмарки и сезонные события по всему Ниси Тама, месяц за месяцем.",
};

function EventsPage() {
  const { lang } = useLang();
  const [month, setMonth] = useState(8);

  const kicker = kickerByLang[lang] ?? kickerByLang.en;
  const lead = leadByLang[lang] ?? leadByLang.en;
  const title = eventsMonthTitle(lang, month);

  return (
    <>
      <PageHeader
        kicker={{ en: kicker, ja: kicker }}
        title={{ en: title, ja: title }}
        lead={{ en: lead, ja: lead }}
        image={images.okutama}
      />

      <EventsSection month={month} onMonthChange={setMonth} />
    </>
  );
}