import { createFileRoute } from "@tanstack/react-router";
import { ContactSection, UsefulLinksSection } from "@/components/sections/Contact";
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
        kicker={{
          en: "Get in Touch",
          ja: "お問い合わせ",
          vi: "Liên hệ",
          zh: "联系我们",
          ko: "문의하기",
          de: "Kontaktieren Sie uns",
          ru: "Свяжитесь с нами",
        }}
        title={{
          en: "Contact",
          ja: "お問い合わせ",
          vi: "Liên hệ",
          zh: "联系我们",
          ko: "문의",
          de: "Kontakt",
          ru: "Контакты",
        }}
        lead={{
          en: "We would be glad to hear from you.",
          ja: "お気軽にご連絡ください。",
          vi: "Chúng tôi rất mong nhận được phản hồi từ bạn.",
          zh: "我们很乐意收到您的来信。",
          ko: "언제든지 편하게 연락해 주세요.",
          de: "Wir freuen uns, von Ihnen zu hören.",
          ru: "Будем рады получить от вас сообщение.",
        }}
        image={images.akiruno}
      />
      <UsefulLinksSection />
      <ContactSection />
    </>
  );
}