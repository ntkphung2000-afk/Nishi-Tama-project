import { createFileRoute } from "@tanstack/react-router";
import { ExperiencesSection } from "@/components/sections/Happenings";
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
        kicker={{
          en: "Things to Do",
          ja: "過ごし方",
          vi: "Hoạt động",
          zh: "活动体验",
          ko: "즐길 거리",
          de: "Aktivitäten",
          ru: "Чем заняться",
        }}
        title={{
          en: "Experience Nishi Tama",
          ja: "西多摩を体験する",
          vi: "Trải nghiệm Nishi Tama",
          zh: "体验西多摩",
          ko: "니시타마를 체험하다",
          de: "Nishi Tama erleben",
          ru: "Познакомьтесь с Ниси-Тама",
        }}
        lead={{
          en: "From quiet forest walks to summer festivals.",
          ja: "静かな森歩きから、夏祭りまで。",
          vi: "Từ những buổi đi bộ yên tĩnh trong rừng đến các lễ hội mùa hè.",
          zh: "从静谧的森林漫步到热闹的夏日祭典。",
          ko: "고요한 숲길 산책부터 여름 축제까지.",
          de: "Von ruhigen Waldspaziergängen bis zu Sommerfesten.",
          ru: "От тихих прогулок по лесу до летних фестивалей.",
        }}
        image={images.experiences.outdoor}
      />
      <ExperiencesSection />
    </>
  );
}