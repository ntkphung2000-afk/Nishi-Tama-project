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
en: "Welcome to Nishi Tama — a quieter side of Tokyo, where mountains, rivers, forests and fields stretch beyond the city streets. Here, you can slow down, breathe deeply, and discover a different rhythm of Tokyo.",
ja: "西多摩へようこそ。ここは、東京のもう一つの表情に出会える場所です。山や川、森や田畑が広がるこの地域では、都会の喧騒から少し離れて、ゆっくりと深呼吸しながら、いつもとは違う東京の時間を楽しむことができます。",
vi: "Chào mừng bạn đến với Nishi Tama – một Tokyo yên tĩnh hơn, nơi núi non, sông suối, rừng xanh và những cánh đồng trải rộng ngoài những con phố đông đúc. Tại đây, bạn có thể chậm lại, hít thở thật sâu và cảm nhận một nhịp sống rất khác của Tokyo.",
zh: "欢迎来到西多摩——这里是东京宁静的一面。远离城市街道的喧嚣，山川、森林与田野在这里延展开来。在这里，您可以放慢脚步，深深呼吸，感受东京另一种悠然的节奏。",
ko: "니시타마에 오신 것을 환영합니다. 이곳은 도쿄의 또 다른 모습을 만날 수 있는 조용한 곳입니다. 도시의 거리에서 벗어나 산과 강, 숲과 들판이 펼쳐진 이곳에서 잠시 걸음을 늦추고 깊이 숨을 쉬며 도쿄의 새로운 리듬을 느껴보세요.",
de: "Willkommen in Nishi Tama – einer ruhigeren Seite Tokios, wo sich Berge, Flüsse, Wälder und Felder jenseits der belebten Straßen erstrecken. Hier können Sie einen Gang zurückschalten, tief durchatmen und einen ganz anderen Rhythmus Tokios entdecken.",
ru: "Добро пожаловать в Ниси-Таму — тихую и спокойную сторону Токио, где за пределами городских улиц раскинулись горы, реки, леса и поля. Здесь можно замедлить шаг, глубоко вдохнуть и почувствовать совсем другой ритм Токио.",
},

{
en: "Across its eight municipalities, Nishi Tama offers countless ways to experience the beauty of everyday life — walking along a quiet river, exploring mountain trails, tasting local food, visiting traditional towns, or simply watching the seasons change.",
ja: "西多摩の8つの市町村には、日常の中にある美しさを感じられるさまざまな楽しみがあります。静かな川辺を歩いたり、山道を散策したり、地元の食を味わったり、昔ながらの街並みを訪れたり。季節の移ろいを眺めるだけでも、心が少し軽くなる場所です。",
vi: "Với 8 thành phố, thị trấn và làng, Nishi Tama mang đến vô vàn cách để cảm nhận vẻ đẹp của cuộc sống thường ngày – đi dạo bên dòng sông yên ả, khám phá những con đường núi, thưởng thức đặc sản địa phương, ghé thăm những khu phố truyền thống hay đơn giản là ngắm nhìn từng mùa thay đổi.",
zh: "西多摩的8个市町村，各自拥有独特的风景与魅力，也为您提供许多感受日常之美的方式。沿着宁静的河畔散步，探索山间小径，品尝当地美食，走访保留传统风情的街道，或只是静静看着四季流转。",
ko: "니시타마의 8개 시·정·촌에서는 일상의 아름다움을 만나는 다양한 방법이 있습니다. 조용한 강변을 걷고, 산길을 따라 자연을 탐험하고, 지역의 맛을 즐기고, 전통적인 거리 풍경을 만나보세요. 아무것도 서두르지 않고 계절의 변화를 바라보는 것만으로도 마음이 한결 편안해집니다.",
de: "In den acht Gemeinden von Nishi Tama gibt es unzählige Möglichkeiten, die Schönheit des Alltags zu erleben – bei einem Spaziergang am ruhigen Fluss, auf Bergwegen, beim Probieren regionaler Spezialitäten, beim Besuch traditioneller Orte oder einfach beim Beobachten des Wechsels der Jahreszeiten.",
ru: "В восьми муниципалитетах Ниси-Тамы вас ждут бесчисленные способы почувствовать красоту повседневной жизни: прогулки вдоль тихих рек, горные тропы, местные блюда, традиционные улочки или просто наблюдение за тем, как меняются времена года.",
},

{
en: "Whether you are visiting Tokyo for the first time or looking for a moment of peace away from the city, Nishi Tama welcomes you. Come as you are, take your time, and find your own way to enjoy this gentle side of Tokyo. Perhaps, among the quiet landscapes and warm local encounters, you will discover a side of Tokyo you never knew existed.",
ja: "初めて東京を訪れる方にも、都会の喧騒から少し離れて穏やかな時間を過ごしたい方にも、西多摩は開かれています。ありのままの自分で、焦らず、自分らしい旅を楽しんでください。静かな風景や人とのあたたかな出会いの中で、これまで知らなかった東京の一面に出会えるかもしれません。",
vi: "Dù bạn lần đầu đến Tokyo hay đang tìm kiếm một khoảng lặng giữa nhịp sống thành phố, Nishi Tama luôn chào đón bạn. Hãy đến với chính mình, thong thả tận hưởng hành trình và tìm cách riêng để cảm nhận Tokyo dịu dàng này. Biết đâu, giữa những khung cảnh yên bình và những cuộc gặp gỡ ấm áp, bạn sẽ khám phá một Tokyo mà trước đây chưa từng biết đến.",
zh: "无论您是第一次来到东京，还是想暂时远离城市的喧嚣，西多摩都欢迎您的到来。带着最真实的自己，放慢脚步，以自己的方式感受这座城市温柔的一面。也许，在宁静的风景与温暖的人情之间，您会发现一个从未了解过的东京。",
ko: "처음 도쿄를 찾는 분도, 도시의 소음에서 벗어나 잠시 평온한 시간을 보내고 싶은 분도 니시타마는 모두를 환영합니다. 있는 그대로의 모습으로 천천히 여행하며, 자신만의 방식으로 도쿄의 부드러운 모습을 느껴보세요. 고요한 풍경과 따뜻한 만남 속에서 지금까지 알지 못했던 새로운 도쿄를 발견하게 될지도 모릅니다.",
de: "Ganz gleich, ob Sie Tokio zum ersten Mal besuchen oder eine ruhige Auszeit vom Stadtleben suchen – Nishi Tama heißt Sie willkommen. Kommen Sie, wie Sie sind, lassen Sie sich Zeit und entdecken Sie auf Ihre eigene Weise die sanfte Seite Tokios. Vielleicht finden Sie zwischen stillen Landschaften und herzlichen Begegnungen ein Tokio, das Sie bisher noch nicht kannten.",
ru: "Неважно, впервые ли вы приехали в Токио или просто ищете немного тишины вдали от городской суеты — Ниси-Тама всегда рада вам. Будьте собой, никуда не спешите и откройте для себя эту мягкую, спокойную сторону Токио. Возможно, среди тихих пейзажей и тёплых встреч вы увидите Токио таким, каким никогда прежде его не знали.",
},

];


function AboutPage() {
  const { t } = useLang();

  return (
    <>
      <PageHeader
        kicker={{
          en: "About",
          ja: "このサイトについて",
          vi: "Giới thiệu",
          zh: "关于我们",
          ko: "소개",
          ru: "О проекте",
          de: "Über uns",
        }}
        title={{
          en: "A quieter side of Tokyo",
          ja: "静かなほうの、東京",
          vi: "Một Tokyo tĩnh lặng hơn",
          zh: "东京，安静的一面",
          ko: "도쿄, 조용한 이면",
          ru: "Токио с тихой стороны",
          de: "Tokio von seiner ruhigen Seite",
        }}
        lead={{
          en: "About this project and how it presents Nishi Tama.",
          ja: "本プロジェクトと、西多摩の伝え方について。",
          vi: "Đôi điều về dự án này và cách chúng tôi kể câu chuyện Nishi Tama.",
          zh: "关于这个项目，以及我们如何讲述西多摩的故事。",
          ko: "이 프로젝트와 니시타마를 소개하는 방식에 대한 이야기.",
          ru: "О проекте и о том, как мы рассказываем историю Ниси Тама.",
          de: "Ein Einblick in dieses Projekt und wie es Nishi Tama erzählt.",
        }}
        image={images.hinohara}
      />
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeader
            eyebrow={t({
              en: "The Project",
              ja: "プロジェクト",
              vi: "Dự án",
              zh: "项目故事",
              ko: "프로젝트",
              ru: "Проект",
              de: "Das Projekt",
            })}
            title={t({
              en: "Why Nishi Tama",
              ja: "なぜ西多摩か",
              vi: "Vì sao là Nishi Tama",
              zh: "为什么是西多摩",
              ko: "왜 니시타마일까",
              ru: "Почему именно Ниси Тама",
              de: "Warum Nishi Tama",
            })}
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