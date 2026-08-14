import { createFileRoute } from "@tanstack/react-router";
import { AreasSection, IntroSection } from "@/components/sections/Discover";
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
        kicker={{ en: "The Region", ja: "エリア" }}
        title={{ en: "Discover Nishi Tama", ja: "西多摩を知る" }}
        lead={{
          en: "Eight municipalities, one quieter side of Tokyo.",
          ja: "8つの市町村がつくる、もうひとつの東京。",
        }}
        image={images.nishitama}
      />
      <IntroSection />
      <AreasSection />
    </>
  );
}
