import { createFileRoute } from "@tanstack/react-router";
import { EventsSection } from "@/components/sections/Happenings";
import { PageHeader } from "@/components/site/PageHeader";
import { images } from "@/config/images";

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
  return (
    <>
      <PageHeader
        kicker={{ en: "Calendar", ja: "カレンダー" }}
        title={{ en: "What's happening in August", ja: "8月のイベント" }}
        lead={{
          en: "Summer is festival season across Nishi Tama.",
          ja: "夏は、西多摩の祭りの季節。",
        }}
        image={images.okutama}
      />
      <EventsSection />
    </>
  );
}
