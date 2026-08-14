import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { AreasSection, IntroSection } from "@/components/sections/Discover";
import { DestinationsSection, SpecialtiesSection } from "@/components/sections/Places";
import { EventsSection, ExperiencesSection } from "@/components/sections/Happenings";
import { MannersSection } from "@/components/sections/Manners";
import { FaqSection, GuideSection, PlanSection } from "@/components/sections/Planning";
import { ContactSection } from "@/components/sections/Contact";

const title = "Nishi Tama — Discover the Other Side of Tokyo";
const description =
  "Hidden nature near Tokyo: mountains, rivers, waterfalls, festivals and countryside food across the eight municipalities of Nishi Tama, western Tokyo.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <>
      <h1 className="sr-only">Nishi Tama — Hidden Nature Near Tokyo</h1>
      <Hero />
      <IntroSection />
      <AreasSection />
      <DestinationsSection />
      <SpecialtiesSection />
      <ExperiencesSection />
      <EventsSection />
      <MannersSection />
      <PlanSection />
      <GuideSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
