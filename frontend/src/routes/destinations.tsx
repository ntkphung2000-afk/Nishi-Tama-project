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
        kicker={{ en: "Where to Go", ja: "行き先" }}
        title={{ en: "Places to discover", ja: "訪ねたい場所" }}
        lead={{
          en: "Sacred mountains, river valleys, waterfalls and old streets.",
          ja: "霊山、渓谷、滝、そして古い街並み。",
        }}
        image={images.destinations.mitake}
      />
      <DestinationsSection />
      <SpecialtiesSection />
    </>
  );
}
