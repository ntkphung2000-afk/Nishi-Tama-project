import { createFileRoute } from "@tanstack/react-router";
import { ExperiencesSection } from "@/components/sections/Happenings";
import { MannersSection } from "@/components/sections/Manners";
import { PageHeader } from "@/components/site/PageHeader";
import { images } from "@/config/images";

const title = "Experiences in Nishi Tama — Nature, Culture, Food and Seasons";
const description =
  "Forest walks, mountain shrines, river days, local food and seasonal festivals: five ways to experience western Tokyo.";

export const Route = createFileRoute("/experiences")({
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
  component: ExperiencesPage,
});

function ExperiencesPage() {
  return (
    <>
      <PageHeader
        kicker={{ en: "Things to Do", ja: "過ごし方" }}
        title={{ en: "Experience Nishi Tama", ja: "西多摩を体験する" }}
        lead={{
          en: "From quiet forest walks to summer festivals.",
          ja: "静かな森歩きから、夏祭りまで。",
        }}
        image={images.experiences.outdoor}
      />
      <ExperiencesSection />
      <MannersSection />
    </>
  );
}
