import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { images } from "@/config/images";
import { useLang } from "@/lib/i18n";

const title = "About the Nishi Tama Tourism Project";
const description =
  "A student-led tourism promotion prototype introducing Nishi Tama, western Tokyo, to international visitors.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

const paragraphs = [
  {
    en: "This site is a tourism promotion prototype for Nishi Tama, the western region of Tokyo. It was created to show how the area's nature, culture, food and seasonal life could be presented to international visitors.",
    ja: "本サイトは、東京都西部・西多摩地域の観光プロモーションの試作サイトです。この地域の自然、文化、食、季節の暮らしを、海外からの旅行者にどう伝えられるかを提案しています。",
  },
  {
    en: "The eight municipalities of Nishi Tama each have their own landscape and character. Rather than presenting a single symbol of the region, this site aims to show its range — riverside towns, farmland, forests, and mountain villages.",
    ja: "西多摩の8つの市町村には、それぞれ異なる風景と個性があります。ひとつの象徴に絞るのではなく、川沿いの街、農地、森、山あいの集落という多様さを伝えることを目指しています。",
  },
  {
    en: "Content marked as placeholder will be replaced with verified local information and photography. Event dates and details should always be confirmed with the organisers before travelling.",
    ja: "サンプルとして掲載している内容は、確認済みの地域情報と写真に差し替えられる予定です。イベントの日程等は、お出かけ前に主催者情報をご確認ください。",
  },
];

function AboutPage() {
  const { t } = useLang();

  return (
    <>
      <PageHeader
        kicker={{ en: "About", ja: "このサイトについて" }}
        title={{ en: "A quieter side of Tokyo", ja: "静かなほうの、東京" }}
        lead={{
          en: "About this project and how it presents Nishi Tama.",
          ja: "本プロジェクトと、西多摩の伝え方について。",
        }}
        image={images.hinohara}
      />
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeader
            eyebrow={t({ en: "The Project", ja: "プロジェクト" })}
            title={t({ en: "Why Nishi Tama", ja: "なぜ西多摩か" })}
          />
          <div className="space-y-6">
            {paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="text-base leading-[1.9] text-charcoal/85">{t(p)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
