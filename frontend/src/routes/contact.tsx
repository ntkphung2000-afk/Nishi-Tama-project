import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/sections/Contact";
import { PageHeader } from "@/components/site/PageHeader";
import { images } from "@/config/images";

const title = "Contact — Nishi Tama Tourism Project";
const description =
  "Questions about visiting Nishi Tama or about this tourism promotion project? Send us a message.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        kicker={{ en: "Get in Touch", ja: "お問い合わせ" }}
        title={{ en: "Contact", ja: "お問い合わせ" }}
        lead={{
          en: "We would be glad to hear from you.",
          ja: "お気軽にご連絡ください。",
        }}
        image={images.akiruno}
      />
      <ContactSection />
    </>
  );
}
