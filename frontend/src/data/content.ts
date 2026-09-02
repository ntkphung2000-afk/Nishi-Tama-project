import { images } from "@/config/images";
import type { Localized } from "@/lib/i18n";

/* ------------------------------------------------------------------
 * STATIC CONTENT
 * All copy is bilingual: { en, ja }. Add more locales by adding keys.
 * ------------------------------------------------------------------ */

export type Area = {
  id: string;
  ja: string;
  en: string;
  image: string;
  intro: Localized;
  highlights: Localized<string[]>;
};

export const areas: Area[] = [
  {
    id: "ome",
    ja: "青梅市",
    en: "Ome City",
    image: images.ome,
    intro: {
      en: "A former post town on the Tama River where old streets, temples and plum groves meet the entrance to the mountains.",
      ja: "多摩川沿いに開けた歴史ある町。古い街並みや寺社、梅の里が、山への入口とつながります。",
    },
    highlights: {
      en: ["Ome old town", "Yoshino Baigo plum area", "Tama River riverside", "Gateway to Mount Mitake"],
      ja: ["青梅旧市街", "吉野梅郷", "多摩川沿いの散策", "御岳山への玄関口"],
    },
  },
  {
    id: "fussa",
    ja: "福生市",
    en: "Fussa City",
    image: images.fussa,
    intro: {
      en: "A compact riverside city known for its mix of Japanese and American influences, sake brewing tradition and a lively summer festival.",
      ja: "多摩川沿いのコンパクトな街。日米の文化が混ざりあう街並みと酒造り、そして夏の七夕まつりで知られます。",
    },
    highlights: {
      en: ["Tanabata Festival", "Sake brewing culture", "Riverside walks", "Local cafes and shops"],
      ja: ["福生七夕まつり", "酒蔵の文化", "多摩川さんぽ", "個性的な店とカフェ"],
    },
  },
  {
    id: "hamura",
    ja: "羽村市",
    en: "Hamura City",
    image: images.hamura,
    intro: {
      en: "The smallest city in the region, where a historic water intake on the Tama River still marks the start of an Edo-period waterway.",
      ja: "西多摩でもっとも小さな市。多摩川の羽村取水堰は、江戸へ水を送った玉川上水の起点です。",
    },
    highlights: {
      en: ["Hamura Weir", "Tamagawa Josui waterway", "Cherry blossom riverside", "Quiet town walks"],
      ja: ["羽村取水堰", "玉川上水", "川沿いの桜", "静かな町歩き"],
    },
  },
  {
    id: "akiruno",
    ja: "あきる野市",
    en: "Akiruno City",
    image: images.akiruno,
    intro: {
      en: "Home to the Akigawa Valley, where clear water, riverside forest and easy access make it a favourite summer escape.",
      ja: "秋川渓谷を擁するまち。澄んだ流れと川辺の森が、夏の避暑地として親しまれています。",
    },
    highlights: {
      en: ["Akigawa Valley", "River swimming and BBQ", "Hot spring facilities", "Yoruichi night market"],
      ja: ["秋川渓谷", "川遊び・バーベキュー", "温泉施設", "ヨルイチ"],
    },
  },
  {
    id: "mizuho",
    ja: "瑞穂町",
    en: "Mizuho Town",
    image: images.mizuho,
    intro: {
      en: "A town of farmland and low hills at the edge of the Sayama area, known for agriculture and local produce.",
      ja: "狭山丘陵のふもとに広がる農のまち。畑と丘の風景、地元の農産物が魅力です。",
    },
    highlights: {
      en: ["Farm produce direct sales", "Sayama hills scenery", "Seasonal flowers", "Ekinishi Summer Fest"],
      ja: ["農産物直売", "狭山丘陵の風景", "季節の花", "エキニシサマーフェス"],
    },
  },
  {
    id: "hinode",
    ja: "日の出町",
    en: "Hinode Town",
    image: images.hinode,
    intro: {
      en: "A small hillside town between the plains and the mountains, with local shrines, folk performing arts and forest trails.",
      ja: "平地と山あいの間に位置する小さな町。神社や民俗芸能、森の小径が残ります。",
    },
    highlights: {
      en: ["Traditional shishimai lion dance", "Hillside temples", "Forest trails", "Local produce"],
      ja: ["獅子舞などの民俗芸能", "山あいの寺社", "森のハイキング", "地元の農産物"],
    },
  },
  {
    id: "hinohara",
    ja: "檜原村",
    en: "Hinohara Village",
    image: images.hinohara,
    intro: {
      en: "The only village in Tokyo outside the islands — almost entirely forest, with steep valleys, waterfalls and mountain hamlets.",
      ja: "島しょ部を除き東京都で唯一の村。面積の大半を森が占め、深い谷と滝、山あいの集落が息づきます。",
    },
    highlights: {
      en: ["Hossawa Falls", "Mountain hiking", "Forest hamlets", "Summer festival by the falls"],
      ja: ["払沢の滝", "山歩き", "山里の集落", "ふるさと夏まつり"],
    },
  },
  {
    id: "okutama",
    ja: "奥多摩町",
    en: "Okutama Town",
    image: images.okutama,
    intro: {
      en: "The mountainous far west of Tokyo: a large reservoir lake, limestone caves, high ridges and deep river gorges.",
      ja: "東京の最西端に広がる山のまち。奥多摩湖、鍾乳洞、稜線と渓谷が続きます。",
    },
    highlights: {
      en: ["Lake Okutama", "Nippara Limestone Cave", "Mountain hiking routes", "River gorges"],
      ja: ["奥多摩湖", "日原鍾乳洞", "登山コース", "渓谷美"],
    },
  },
];

/* ------------------------------------------------------------------ */

export type Destination = {
  id: string;
  ja: string;
  en: string;
  area: Localized;
  image: string;
  description: Localized;
  season: Localized;
  experience: Localized;
  /** 3–5 things to do at this place. No prices, hours or operators. */
  activities: Localized<string[]>;
  /** Search text used for the "View on Google Maps" link. */
  mapQuery: string;
};

export const destinations: Destination[] = [
  {
    id: "mitake",
    ja: "御岳山",
    en: "Mount Mitake",
    area: { en: "Ome City", ja: "青梅市" },
    image: images.destinations.mitake,
    description: {
      en: "A sacred mountain reached by cable car, with a shrine village, cedar forest and wide views back toward the city.",
      ja: "ケーブルカーで登れる霊山。参道の集落と杉並木、そして市街地を見渡す眺望が広がります。",
    },
    season: { en: "Spring to autumn", ja: "春〜秋" },
    experience: { en: "Forest walking & shrine visit", ja: "森歩き・参拝" },
    activities: {
      en: ["Hiking", "Trekking", "Shrine visits", "Nature photography"],
      ja: ["ハイキング", "トレッキング", "参拝", "自然の撮影"],
    },
    mapQuery: "御岳山 青梅市 東京都",
  },
  {
    id: "mitake-gorge",
    ja: "御岳渓谷",
    en: "Mitake Gorge",
    area: { en: "Ome City", ja: "青梅市" },
    image: images.destinations.mitakeGorge,
    description: {
      en: "A clear stretch of the Tama River below Mount Mitake, with a riverside walking path between rocks and forest.",
      ja: "御岳山のふもとを流れる多摩川の渓谷。岩と森のあいだに遊歩道が続きます。",
    },
    season: { en: "Spring to autumn", ja: "春〜秋" },
    experience: { en: "Riverside walking", ja: "渓谷さんぽ" },
    activities: {
      en: ["Riverside walking", "River activities", "Photography"],
      ja: ["川沿いの散策", "川のアクティビティ", "撮影"],
    },
    mapQuery: "御岳渓谷 青梅市 東京都",
  },
  {
    id: "musashi-mitake",
    ja: "武蔵御嶽神社",
    en: "Musashi Mitake Shrine",
    area: { en: "Ome City", ja: "青梅市" },
    image: images.destinations.musashiMitake,
    description: {
      en: "A mountaintop shrine at the summit of Mount Mitake, long a site of worship and reached by a stone stairway.",
      ja: "御岳山の山頂に鎮座する古社。長い石段の先に、信仰の歴史が息づいています。",
    },
    season: { en: "All year", ja: "通年" },
    experience: { en: "Shrine visit & mountain views", ja: "参拝・山頂の眺め" },
    activities: {
      en: ["Shrine visit", "Mountain views", "Cultural exploration", "Photography"],
      ja: ["参拝", "山頂からの眺め", "文化にふれる", "撮影"],
    },
    mapQuery: "武蔵御嶽神社 青梅市 東京都",
  },
  {
    id: "rock-garden",
    ja: "御岳岩石園",
    en: "Mitake Rock Garden",
    area: { en: "Ome City", ja: "青梅市" },
    image: images.destinations.rockGarden,
    description: {
      en: "A mossy stream trail below Mount Mitake, following water over rocks through dense green forest.",
      ja: "御岳山の下に続く苔むした沢沿いの道。岩を流れる水音と深い緑に包まれます。",
    },
    season: { en: "Early summer & autumn", ja: "初夏・秋" },
    experience: { en: "Stream-side hiking", ja: "沢沿いハイキング" },
    activities: {
      en: ["Stream-side hiking", "Forest trekking", "Nature observation", "Photography"],
      ja: ["沢沿いのハイキング", "森のトレッキング", "自然観察", "撮影"],
    },
    mapQuery: "御岳山 ロックガーデン 青梅市",
  },
  {
    id: "yoshino-baigo",
    ja: "吉野梅郷",
    en: "Yoshino Baigo",
    area: { en: "Ome City", ja: "青梅市" },
    image: images.destinations.yoshinoBaigo,
    description: {
      en: "A hillside area long associated with plum cultivation, quiet outside the blossom season and pleasant to walk.",
      ja: "古くから梅の栽培で知られる丘陵地。花の季節以外は静かで、散策に適しています。",
    },
    season: { en: "Early spring", ja: "早春" },
    experience: { en: "Plum grove walks", ja: "梅の里さんぽ" },
    activities: {
      en: ["Seasonal sightseeing", "Ume-related experiences", "Photography"],
      ja: ["季節の風景を楽しむ", "梅にまつわる体験", "撮影"],
    },
    mapQuery: "吉野梅郷 青梅市 東京都",
  },
  {
    id: "ome-old-town",
    ja: "青梅旧市街",
    en: "Ome Old Town",
    area: { en: "Ome City", ja: "青梅市" },
    image: images.destinations.omeOldTown,
    description: {
      en: "A walkable old main street with retro shopfronts, small museums, cafes and a slow local atmosphere.",
      ja: "レトロな店構えが並ぶ旧街道沿いの通り。小さな資料館やカフェが点在し、ゆっくりと歩けます。",
    },
    season: { en: "All year", ja: "通年" },
    experience: { en: "Town walking & cafes", ja: "町歩き・カフェ" },
    activities: {
      en: ["Retro town walking", "Local shopping", "Cultural exploration", "Photography"],
      ja: ["レトロな町歩き", "地元での買い物", "文化にふれる", "撮影"],
    },
    mapQuery: "青梅駅 旧青梅街道 青梅市",
  },
  {
    id: "kamanofuchi",
    ja: "釜の淵公園",
    en: "Kamanofuchi Park",
    area: { en: "Ome City", ja: "青梅市" },
    image: images.destinations.kamanofuchi,
    description: {
      en: "A green riverside park where the Tama River loops around an open lawn — an easy stop close to Ome town centre.",
      ja: "多摩川が大きく蛇行する場所に広がる川沿いの公園。青梅の市街から歩いて行ける憩いの場です。",
    },
    season: { en: "Spring to autumn", ja: "春〜秋" },
    experience: { en: "Riverside rest", ja: "川辺で休む" },
    activities: {
      en: ["Riverside walking", "Picnic", "Relaxation", "Photography"],
      ja: ["川沿いの散策", "ピクニック", "のんびり過ごす", "撮影"],
    },
    mapQuery: "釜の淵公園 青梅市 東京都",
  },
  {
    id: "shiofune",
    ja: "塩船観音寺",
    en: "Shiofune Kannon-ji",
    area: { en: "Ome City", ja: "青梅市" },
    image: images.destinations.shiofune,
    description: {
      en: "An old temple in a natural bowl of hillside, known for the banks of flowers that surround its grounds in season.",
      ja: "すり鉢状の丘に抱かれた古刹。季節には境内を花が埋め尽くします。",
    },
    season: { en: "Late spring", ja: "春の終わり" },
    experience: { en: "Temple & flowers", ja: "参拝と花" },
    activities: {
      en: ["Temple visit", "Seasonal flower viewing", "Photography"],
      ja: ["参拝", "季節の花を見る", "撮影"],
    },
    mapQuery: "塩船観音寺 青梅市 東京都",
  },
  {
    id: "akigawa",
    ja: "秋川渓谷",
    en: "Akigawa Valley",
    area: { en: "Akiruno City", ja: "あきる野市" },
    image: images.destinations.akigawa,
    description: {
      en: "A clear river valley with rocky pools and riverside forest, popular for cooling off in summer.",
      ja: "澄んだ流れと岩の淵が続く渓谷。夏には涼を求めて多くの人が訪れます。",
    },
    season: { en: "Summer", ja: "夏" },
    experience: { en: "River play & riverside dining", ja: "川遊び・川辺の食事" },
    activities: {
      en: ["River activities", "Riverside walking", "Local food", "Photography"],
      ja: ["川のアクティビティ", "川沿いの散策", "地元の食", "撮影"],
    },
    mapQuery: "秋川渓谷 あきる野市 東京都",
  },
  {
    id: "hossawa",
    ja: "払沢の滝",
    en: "Hossawa Falls",
    area: { en: "Hinohara Village", ja: "檜原村" },
    image: images.destinations.hossawa,
    description: {
      en: "A tall waterfall at the end of a short forest path, framed by moss and rock. Cool even at the height of summer.",
      ja: "短い森の道の先に現れる落差のある滝。苔と岩に囲まれ、真夏でもひんやりとした空気に包まれます。",
    },
    season: { en: "All year", ja: "通年" },
    experience: { en: "Easy walk to the falls", ja: "気軽な滝さんぽ" },
    activities: {
      en: ["Waterfall sightseeing", "Forest walking", "Nature observation", "Photography"],
      ja: ["滝を眺める", "森歩き", "自然観察", "撮影"],
    },
    mapQuery: "払沢の滝 檜原村 東京都",
  },
  {
    id: "okutama-lake",
    ja: "奥多摩湖",
    en: "Lake Okutama",
    area: { en: "Okutama Town", ja: "奥多摩町" },
    image: images.destinations.okutamaLake,
    description: {
      en: "A large reservoir surrounded by forested mountains, with lakeside roads, viewpoints and walking paths.",
      ja: "森に囲まれた大きな貯水湖。湖畔の道や展望地、遊歩道が整備されています。",
    },
    season: { en: "Spring & autumn", ja: "春・秋" },
    experience: { en: "Lakeside walks & views", ja: "湖畔さんぽ・眺望" },
    activities: {
      en: ["Lakeside walking", "Photography", "Seasonal sightseeing"],
      ja: ["湖畔の散策", "撮影", "季節の風景を楽しむ"],
    },
    mapQuery: "奥多摩湖 奥多摩町 東京都",
  },
  {
    id: "ogochi-dam",
    ja: "小河内ダム",
    en: "Ogochi Dam",
    area: { en: "Okutama Town", ja: "奥多摩町" },
    image: images.destinations.ogochiDam,
    description: {
      en: "The great dam that holds back Lake Okutama, with a walkway across the top and long views down the valley.",
      ja: "奥多摩湖をつくる巨大なダム。堤の上を歩くと、谷の奥まで見渡せます。",
    },
    season: { en: "All year", ja: "通年" },
    experience: { en: "Dam & valley views", ja: "ダムと渓谷の眺め" },
    activities: {
      en: ["Dam sightseeing", "Walking", "Landscape photography"],
      ja: ["ダム見学", "散策", "風景の撮影"],
    },
    mapQuery: "小河内ダム 奥多摩町 東京都",
  },
  {
    id: "nippara",
    ja: "日原鍾乳洞",
    en: "Nippara Limestone Cave",
    area: { en: "Okutama Town", ja: "奥多摩町" },
    image: images.destinations.nippara,
    description: {
      en: "One of the largest limestone caves in the Kanto region, cool year-round and lit along its interior passages.",
      ja: "関東でも有数の規模を誇る鍾乳洞。内部は一年を通してひんやりとしています。",
    },
    season: { en: "All year (cool in summer)", ja: "通年（夏は特に涼しい）" },
    experience: { en: "Cave exploration", ja: "洞窟見学" },
    activities: {
      en: ["Cave exploration", "Viewing limestone formations", "Nature photography"],
      ja: ["洞窟の探検", "鍾乳石を見る", "自然の撮影"],
    },
    mapQuery: "日原鍾乳洞 奥多摩町 東京都",
  },
  {
    id: "shiromaru",
    ja: "白丸湖",
    en: "Shiromaru Lake",
    area: { en: "Okutama Town", ja: "奥多摩町" },
    image: images.destinations.shiromaru,
    description: {
      en: "A narrow, jade-green stretch of still water between steep forested walls — a quiet place for paddling.",
      ja: "切り立った森にはさまれた、翡翠色の静かな水面。水上をゆっくり進む時間が流れます。",
    },
    season: { en: "Spring to autumn", ja: "春〜秋" },
    experience: { en: "Paddling on still water", ja: "静かな水上の時間" },
    activities: {
      en: ["SUP", "Kayaking", "Canoeing", "Nature photography"],
      ja: ["SUP", "カヤック", "カヌー", "自然の撮影"],
    },
    mapQuery: "白丸湖 奥多摩町 東京都",
  },
  {
    id: "tama-river",
    ja: "多摩川",
    en: "Tama River",
    area: { en: "Okutama Town", ja: "奥多摩町" },
    image: images.destinations.tamaRiver,
    description: {
      en: "The river that shapes the whole region — fast and clear in the upper valleys, wide and calm downstream.",
      ja: "西多摩を形づくる川。上流では速く澄み、下流ではゆるやかに広がります。",
    },
    season: { en: "Summer", ja: "夏" },
    experience: { en: "River adventure", ja: "川のアドベンチャー" },
    activities: {
      en: ["Rafting", "Canyoning", "River activities"],
      ja: ["ラフティング", "キャニオニング", "川のアクティビティ"],
    },
    mapQuery: "多摩川 奥多摩町 東京都",
  },
  {
    id: "hatonosu",
    ja: "鳩ノ巣渓谷",
    en: "Hatonosu Valley",
    area: { en: "Okutama Town", ja: "奥多摩町" },
    image: images.destinations.hatonosu,
    description: {
      en: "A deep rock gorge with a small suspension bridge and a walking trail following the river between stations.",
      ja: "岩が刻む深い渓谷。小さな吊り橋と、川沿いの遊歩道が続きます。",
    },
    season: { en: "Spring to autumn", ja: "春〜秋" },
    experience: { en: "Gorge trail walking", ja: "渓谷の道を歩く" },
    activities: {
      en: ["Hiking", "Walking", "Photography", "Nature observation"],
      ja: ["ハイキング", "散策", "撮影", "自然観察"],
    },
    mapQuery: "鳩ノ巣渓谷 奥多摩町 東京都",
  },
  {
    id: "hyakuhiro",
    ja: "百尋ノ滝",
    en: "Hyakuhiro Falls",
    area: { en: "Okutama Town", ja: "奥多摩町" },
    image: images.destinations.hyakuhiro,
    description: {
      en: "A waterfall deep in the mountains above Nippara, reached on a forest trail — a proper half-day walk.",
      ja: "日原の奥、森の道の先に現れる滝。半日かけて歩く、静かな山の目的地です。",
    },
    season: { en: "Late spring to autumn", ja: "初夏〜秋" },
    experience: { en: "Mountain trail to a waterfall", ja: "滝をめざす山歩き" },
    activities: {
      en: ["Hiking", "Waterfall sightseeing", "Forest trekking"],
      ja: ["ハイキング", "滝を眺める", "森のトレッキング"],
    },
    mapQuery: "百尋ノ滝 奥多摩町 東京都",
  },
  {
    id: "hikawa",
    ja: "氷川エリア",
    en: "Hikawa Area",
    area: { en: "Okutama Town", ja: "奥多摩町" },
    image: images.destinations.hikawa,
    description: {
      en: "The small centre of Okutama around the station, where the valley opens out — a base for the mountains beyond.",
      ja: "奥多摩駅を中心とした町の中心部。谷が開けたこの場所が、山への拠点になります。",
    },
    season: { en: "All year", ja: "通年" },
    experience: { en: "Rest, food & hot springs", ja: "休息・食・温泉" },
    activities: {
      en: ["Hot spring relaxation", "Cycling", "Local food", "Relaxation"],
      ja: ["温泉でくつろぐ", "サイクリング", "地元の食", "のんびり過ごす"],
    },
    mapQuery: "奥多摩駅 氷川 奥多摩町 東京都",
  },
];

/* ------------------------------------------------------------------ */

export type Specialty = {
  id: string;
  name: Localized;
  area: Localized;
  image: string;
  description: Localized;
};

export const specialties: Specialty[] = [
  {
    id: "ume",
    name: { en: "Ume & plum products", ja: "梅と梅の加工品" },
    area: { en: "Ome City area", ja: "青梅市ほか" },
    image: images.specialties.ume,
    description: {
      en: "Plum has long been cultivated in the hills of Ome. Look for preserved plums, syrups and confections in local shops.",
      ja: "青梅の丘陵地で古くから育てられてきた梅。梅干しやシロップ、菓子など、加工品も多彩です。",
    },
  },
  {
    id: "vegetables",
    name: { en: "Farm vegetables & fruit", ja: "地場野菜と果物" },
    area: { en: "Mizuho Town, Hamura City", ja: "瑞穂町・羽村市ほか" },
    image: images.specialties.vegetables,
    description: {
      en: "Small farms across the flatter eastern areas supply seasonal vegetables and fruit, often sold at roadside stands.",
      ja: "東側の平地に広がる小さな農地から、季節の野菜や果物が届きます。直売所での買い物も楽しみのひとつ。",
    },
  },
  {
    id: "river",
    name: { en: "River & mountain foods", ja: "川と山の恵み" },
    area: { en: "Akiruno City, Okutama Town", ja: "あきる野市・奥多摩町ほか" },
    image: images.specialties.river,
    description: {
      en: "Cold mountain water shapes the local table — grilled river fish, soba and mountain vegetables appear on many menus.",
      ja: "冷たい山の水が育む味。川魚の塩焼きや蕎麦、山菜が食卓に並びます。",
    },
  },
  {
    id: "sweets",
    name: { en: "Regional sweets", ja: "地域の菓子" },
    area: { en: "Across Nishi Tama", ja: "西多摩全域" },
    image: images.specialties.sweets,
    description: {
      en: "Long-established confectioners and newer bakeries make sweets tied to local ingredients and seasons.",
      ja: "老舗の和菓子店から新しいベーカリーまで。地の素材と季節を映した菓子が揃います。",
    },
  },
  {
    id: "drinks",
    name: { en: "Local drinks", ja: "地酒・地元の飲み物" },
    area: { en: "Fussa City, Ome City", ja: "福生市・青梅市ほか" },
    image: images.specialties.drinks,
    description: {
      en: "Clean water supports a long brewing tradition. Sake breweries and craft producers welcome visitors in several towns.",
      ja: "良質な水に支えられた酒造りの伝統。酒蔵やクラフト系の生産者が各地にあります。",
    },
  },
  {
    id: "seasonal",
    name: { en: "Seasonal specialties", ja: "季節の味" },
    area: { en: "Across Nishi Tama", ja: "西多摩全域" },
    image: images.specialties.seasonal,
    description: {
      en: "What is on offer changes month by month — spring greens, summer river dishes, autumn chestnuts and mushrooms.",
      ja: "春の山菜、夏の川の料理、秋の栗やきのこ。月ごとに味わいが移ろいます。",
    },
  },
];

/* ------------------------------------------------------------------ */

export type Experience = {
  id: string;
  title: Localized;
  image: string;
  description: Localized;
  items: Localized<string[]>;
};

export const experiences: Experience[] = [
  {
    id: "nature",
    title: { en: "Nature & Healing", ja: "自然と癒し" },
    image: images.experiences.nature,
    description: {
      en: "Slow walks under cedar, the sound of water, and time that moves differently.",
      ja: "杉木立の下をゆっくりと歩く。水の音を聞く。時間の流れが変わります。",
    },
    items: {
      en: ["Forest walks", "Waterfall visits", "Riverside rest", "Hot spring facilities"],
      ja: ["森さんぽ", "滝めぐり", "川辺で休む", "温泉"],
    },
  },
  {
    id: "culture",
    title: { en: "Japanese Culture", ja: "日本の文化" },
    image: images.experiences.culture,
    description: {
      en: "Mountain shrines, old streets and folk performing arts kept alive by small communities.",
      ja: "山の神社、古い街並み、集落が受け継ぐ民俗芸能。",
    },
    items: {
      en: ["Shrines and temples", "Historic streets", "Folk performing arts", "Local museums"],
      ja: ["寺社めぐり", "歴史ある街並み", "民俗芸能", "地域の資料館"],
    },
  },
  {
    id: "food",
    title: { en: "Local Food", ja: "地元の食" },
    image: images.experiences.food,
    description: {
      en: "Eat close to where things are grown — farm stands, soba counters and riverside tables.",
      ja: "つくられた場所のすぐそばで味わう。直売所、蕎麦屋、川辺のテーブル。",
    },
    items: {
      en: ["Farm direct sales", "Soba and river fish", "Ume experiences", "Sake brewery visits"],
      ja: ["農産物直売所", "蕎麦と川魚", "梅の体験", "酒蔵訪問"],
    },
  },
  {
    id: "outdoor",
    title: { en: "Outdoor Activities", ja: "アウトドア" },
    image: images.experiences.outdoor,
    description: {
      en: "From gentle valley paths to full mountain days, with rivers for the summer months.",
      ja: "やさしい渓谷の道から本格的な登山まで。夏は川のアクティビティも。",
    },
    items: {
      en: ["Hiking and trekking", "River activities", "Cycling", "Camping and BBQ"],
      ja: ["ハイキング・登山", "川のアクティビティ", "サイクリング", "キャンプ・BBQ"],
    },
  },
  {
    id: "seasonal",
    title: { en: "Seasonal Experiences", ja: "季節の体験" },
    image: images.experiences.seasonal,
    description: {
      en: "Blossoms, summer festivals, autumn colour and clear winter air — four very different regions in one.",
      ja: "花、夏祭り、紅葉、澄んだ冬の空気。四つの季節が、四つの西多摩をつくります。",
    },
    items: {
      en: ["Plum and cherry blossom", "Summer festivals", "Autumn foliage", "Winter mountain air"],
      ja: ["梅と桜", "夏祭り", "紅葉", "冬の澄んだ空気"],
    },
  },
  {
    id: "showa-retro",
    title: { en: "Showa Retro Experience", ja: "昭和レトロ体験" },
    image: images.experiences.showa,
    description: {
      en: "Step into a nostalgic side of Japan and experience the atmosphere of the Showa era through retro streets, traditional shops, old signs and local everyday culture. Ome Old Town is the easiest place to feel it.",
      ja: "懐かしい日本へ。レトロな通り、昔ながらの商店、古い看板、そして日々の暮らしの文化のなかに、昭和の空気が残ります。青梅旧市街は、その雰囲気を最も感じやすい場所です。",
    },
    items: {
      en: [
        "Nostalgic streets and old townscapes",
        "Showa-era signs and architecture",
        "Traditional shops and cafes",
        "Retro street photography",
        "Everyday local culture",
      ],
      ja: [
        "懐かしい通りと古い街並み",
        "昭和の看板と建築",
        "昔ながらの商店とカフェ",
        "レトロな街の撮影",
        "地域の暮らしの文化",
      ],
    },
  },
  {
    id: "samurai",
    title: { en: "Samurai & Traditional Culture", ja: "侍・日本文化体験" },
    image: images.experiences.samurai,
    description: {
      en: "Discover the world of Samurai and traditional Japanese culture through history, craftsmanship, etiquette and stories from the past — an educational and cultural side of the wider Tokyo and Tama region.",
      ja: "歴史、手仕事、礼儀作法、そして語り継がれる物語を通して、侍と日本の伝統文化にふれる。東京・多摩地域に流れる文化の一面です。",
    },
    items: {
      en: [
        "Samurai history and warrior culture",
        "Traditional values and etiquette",
        "Clothing and craftsmanship",
        "Historical links with the Tama region",
        "Traditional culture where locally available",
      ],
      ja: [
        "侍の歴史と武士の文化",
        "伝統的な価値観と礼儀",
        "装いと手仕事",
        "多摩地域と歴史のつながり",
        "地域で体験できる伝統文化",
      ],
    },
  },
];

/* ------------------------------------------------------------------ */

export type EventItem = {
  id: string;
  date: string;
  ja: string;
  en: string;
  location: Localized;
  image: string;
  description: Localized;
};

export const featuredEvent: EventItem = {
  id: "gunjo-kiko",
  date: "7/1 – 9/30",
  ja: "青梅の青を巡る旅「群青紀行」",
  en: "Gunjo Kiko — A Journey Through Ome Blue",
  location: { en: "Ome City", ja: "青梅市" },
  image: images.events.featured,
  description: {
    en: "A summer-long programme inviting visitors to travel through Ome in search of its many shades of blue — river, mountain haze and evening sky.",
    ja: "夏のあいだ、青梅に広がるさまざまな「青」をめぐる企画。川の青、山の霞、夕暮れの空。",
  },
};

export const augustEvents: EventItem[] = [
  {
    id: "ome-fireworks",
    date: "8/1",
    ja: "青梅市納涼花火大会",
    en: "Ome Summer Fireworks Festival",
    location: { en: "Ome City", ja: "青梅市" },
    image: images.events.omeFireworks,
    description: {
      en: "A summer evening of fireworks over Ome, one of the region's best-loved seasonal gatherings.",
      ja: "夏の夜空を彩る青梅の花火大会。地域で親しまれる季節の風物詩です。",
    },
  },
  {
    id: "akiruno-summer",
    date: "8/1",
    ja: "あきる野夏まつり",
    en: "Akiruno Summer Festival",
    location: { en: "Akiruno City", ja: "あきる野市" },
    image: images.events.akirunoSummer,
    description: {
      en: "A community summer festival with stalls, music and local performances.",
      ja: "屋台や音楽、地域のパフォーマンスが並ぶ夏まつり。",
    },
  },
  {
    id: "fussa-tanabata",
    date: "8/7 – 9",
    ja: "福生七夕まつり",
    en: "Fussa Tanabata Festival",
    location: { en: "Fussa City", ja: "福生市" },
    image: images.events.fussaTanabata,
    description: {
      en: "Streets filled with handmade Tanabata decorations over three days of summer celebration.",
      ja: "手作りの七夕飾りが街を彩る、3日間の夏の祭り。",
    },
  },
  {
    id: "hinode-shishimai",
    date: "8/8",
    ja: "玉の内風祭獅子舞",
    en: "Tamanochi Kazematsuri Shishimai",
    location: { en: "Hinode Town", ja: "日の出町" },
    image: images.events.hinodeShishimai,
    description: {
      en: "A traditional lion dance performed as part of a local seasonal rite.",
      ja: "地域に伝わる季節の行事として奉納される獅子舞。",
    },
  },
  {
    id: "okutama-fireworks",
    date: "8/8",
    ja: "奥多摩納涼花火大会",
    en: "Okutama Summer Fireworks Festival",
    location: { en: "Okutama Town", ja: "奥多摩町" },
    image: images.events.okutamaFireworks,
    description: {
      en: "Fireworks in the mountains, with the sound echoing between the valley walls.",
      ja: "山あいに響きわたる花火。渓谷ならではの音と光。",
    },
  },
  {
    id: "ekinishi",
    date: "8/22",
    ja: "エキニシサマーフェス",
    en: "Ekinishi Summer Fest",
    location: { en: "Mizuho Town", ja: "瑞穂町" },
    image: images.events.ekinishi,
    description: {
      en: "A local summer festival near the station area, with food stalls and community programmes.",
      ja: "駅周辺で開かれる夏のフェス。屋台や地域の催しが並びます。",
    },
  },
  {
    id: "hossawa-matsuri",
    date: "8/22 – 23",
    ja: "払沢の滝ふるさと夏まつり",
    en: "Hossawa Falls Furusato Summer Festival",
    location: { en: "Hinohara Village", ja: "檜原村" },
    image: images.events.hossawaMatsuri,
    description: {
      en: "A village summer festival held near Hossawa Falls, celebrating local life and traditions.",
      ja: "払沢の滝のふもとで開かれる、村の夏まつり。",
    },
  },
  {
    id: "yoruichi",
    date: "8/29",
    ja: "ヨルイチ",
    en: "Yoruichi",
    location: { en: "Akiruno City", ja: "あきる野市" },
    image: images.events.yoruichi,
    description: {
      en: "An evening street market where lantern light transforms the old town centre.",
      ja: "灯りに照らされた夜の市。旧市街が特別な表情を見せます。",
    },
  },
];

/* ------------------------------------------------------------------ */

export type MannerGroup = {
  id: string;
  title: Localized;
  points: Localized<string[]>;
};

export const manners: MannerGroup[] = [
  {
    id: "trains",
    title: { en: "Train etiquette", ja: "電車でのマナー" },
    points: {
      en: ["Keep your voice low in carriages.", "Avoid phone calls on board.", "Keep luggage from blocking others."],
      ja: ["車内では静かに過ごしましょう。", "車内での通話は控えましょう。", "荷物は通路をふさがないように。"],
    },
  },
  {
    id: "garbage",
    title: { en: "Garbage", ja: "ごみ" },
    points: {
      en: ["Please do not litter.", "Public bins are rare — carry your rubbish with you.", "Follow local separation rules."],
      ja: ["ポイ捨てはやめましょう。", "ごみ箱は少ないため、持ち帰りにご協力を。", "地域の分別ルールに従いましょう。"],
    },
  },
  {
    id: "photography",
    title: { en: "Photography", ja: "写真撮影" },
    points: {
      en: ["Ask before photographing people closely.", "Respect private property.", "Follow posted photography rules."],
      ja: ["人を近くから撮るときは、ひと声かけて。", "私有地への立ち入りはご遠慮ください。", "撮影ルールの掲示に従いましょう。"],
    },
  },
  {
    id: "shrines",
    title: { en: "Temples & shrines", ja: "寺社" },
    points: {
      en: ["These are quiet, sacred spaces.", "Follow the signs on site.", "Do not enter restricted areas."],
      ja: ["静かで神聖な場所です。", "現地の案内に従いましょう。", "立入禁止の区域には入らないでください。"],
    },
  },
  {
    id: "nature",
    title: { en: "Nature", ja: "自然のなかで" },
    points: {
      en: ["Stay on designated trails.", "Do not damage plants.", "Leave natural objects where you found them."],
      ja: ["決められた道を歩きましょう。", "植物を傷つけないように。", "自然のものは持ち帰らないでください。"],
    },
  },
  {
    id: "community",
    title: { en: "Local communities", ja: "地域の暮らし" },
    points: {
      en: ["Do not block roads or driveways.", "Do not enter private property.", "Avoid noise, and follow parking rules."],
      ja: ["道や出入口をふさがないように。", "私有地には入らないでください。", "騒音を避け、駐車ルールを守りましょう。"],
    },
  },
  {
    id: "shops",
    title: { en: "Restaurants & shops", ja: "飲食店・お店" },
    points: {
      en: ["Follow each shop's own rules.", "Ask before taking photos inside.", "Be considerate of staff and other customers."],
      ja: ["お店ごとのルールに従いましょう。", "店内撮影は事前にひと声を。", "スタッフや他のお客さまへの配慮を。"],
    },
  },
  {
    id: "festivals",
    title: { en: "Festivals", ja: "祭り" },
    points: {
      en: ["Follow organisers' instructions.", "Do not enter restricted areas.", "Respect performances and ceremonies."],
      ja: ["主催者の案内に従いましょう。", "立入禁止の区域には入らないでください。", "演目や神事を尊重しましょう。"],
    },
  },
];

/* ------------------------------------------------------------------ */

export type Itinerary = {
  id: string;
  title: Localized;
  duration: "half" | "one";
  interests: string[];
  summary: Localized;
  steps: Localized<string[]>;
};

export const durations = [
  { id: "half", label: { en: "Half Day", ja: "半日" } as Localized },
  { id: "one", label: { en: "1 Day", ja: "1日" } as Localized },
] as const;

export const interests = [
  { id: "nature", label: { en: "Nature", ja: "自然" } as Localized },
  { id: "food", label: { en: "Food", ja: "食" } as Localized },
  { id: "culture", label: { en: "Culture", ja: "文化" } as Localized },
  { id: "adventure", label: { en: "Adventure", ja: "アドベンチャー" } as Localized },
  { id: "relaxation", label: { en: "Relaxation", ja: "リラックス" } as Localized },
  { id: "events", label: { en: "Seasonal Events", ja: "季節のイベント" } as Localized },
];

export const itineraries: Itinerary[] = [
  {
    id: "one-day-nature",
    title: { en: "One Day Nature Escape", ja: "1日・自然に浸る" },
    duration: "one",
    interests: ["nature", "food", "culture"],
    summary: {
      en: "A full day of forest, food and a mountain shrine, easily done as a round trip from central Tokyo.",
      ja: "森と食、そして山の神社。都心から日帰りで楽しめる王道コース。",
    },
    steps: {
      en: ["Tokyo", "Ome", "Nature experience", "Local lunch", "Cultural destination", "Tokyo"],
      ja: ["東京", "青梅", "自然体験", "地元でランチ", "文化スポット", "東京"],
    },
  },
  {
    id: "half-day-river",
    title: { en: "Half Day by the River", ja: "半日・川辺で過ごす" },
    duration: "half",
    interests: ["nature", "relaxation"],
    summary: {
      en: "An easy afternoon in the Akigawa Valley — water, shade and a slow riverside meal.",
      ja: "秋川渓谷でのんびり午後を。水辺の木陰と、ゆっくりの食事。",
    },
    steps: {
      en: ["Tokyo", "Akiruno", "Akigawa Valley walk", "Riverside cafe", "Tokyo"],
      ja: ["東京", "あきる野", "秋川渓谷さんぽ", "川辺のカフェ", "東京"],
    },
  },
  {
    id: "half-day-town",
    title: { en: "Half Day Town Walk", ja: "半日・町歩き" },
    duration: "half",
    interests: ["culture", "food"],
    summary: {
      en: "Old streets, small museums and a coffee stop — a gentle introduction to the region.",
      ja: "古い通りと小さな展示、そして一杯のコーヒー。西多摩の入門編。",
    },
    steps: {
      en: ["Tokyo", "Ome old town", "Street walk & museums", "Cafe stop", "Tokyo"],
      ja: ["東京", "青梅旧市街", "町歩き・展示", "カフェ", "東京"],
    },
  },
  {
    id: "one-day-mountain",
    title: { en: "One Day Mountain & Shrine", ja: "1日・山と信仰" },
    duration: "one",
    interests: ["nature", "culture", "adventure"],
    summary: {
      en: "Cable car up Mount Mitake, the shrine at the summit and a stream trail through mossy forest.",
      ja: "ケーブルカーで御岳山へ。山頂の神社と、苔むす沢沿いの道。",
    },
    steps: {
      en: ["Tokyo", "Mitake Station", "Cable car", "Musashi Mitake Shrine", "Rock Garden trail", "Tokyo"],
      ja: ["東京", "御嶽駅", "ケーブルカー", "武蔵御嶽神社", "岩石園の道", "東京"],
    },
  },
  {
    id: "one-day-festival",
    title: { en: "One Day Summer Festival", ja: "1日・夏祭りへ" },
    duration: "one",
    interests: ["events", "food", "culture"],
    summary: {
      en: "Arrive in the afternoon, eat at the stalls, and stay for fireworks or lantern light.",
      ja: "午後に到着し、屋台で食べて、花火や灯りの夜まで。",
    },
    steps: {
      en: ["Tokyo", "Festival town", "Afternoon walk", "Festival stalls", "Fireworks / night market", "Tokyo"],
      ja: ["東京", "祭りの町へ", "夕方の散策", "屋台", "花火・夜市", "東京"],
    },
  },
];

/* ------------------------------------------------------------------ */

export type GuideSection = { id: string; title: Localized; body: Localized<string[]> };

export const guideSections: GuideSection[] = [
  {
    id: "getting-there",
    title: { en: "How to Get There", ja: "行き方" },
    body: {
      en: [
        "Nishi Tama is reached mainly by JR lines running west from central Tokyo. The Ome Line continues from Tachikawa toward Ome and Okutama; the Itsukaichi Line branches toward Akiruno.",
        "Travel time depends heavily on your destination. Riverside towns such as Fussa and Hamura are considerably closer than mountain areas like Okutama or Hinohara — always check a route planner for your specific stop.",
      ],
      ja: [
        "西多摩へは、都心から西へ向かうJR線が便利です。立川からは青梅線が青梅・奥多摩方面へ、五日市線があきる野方面へ分かれます。",
        "所要時間は目的地によって大きく異なります。福生・羽村などの川沿いの街に比べ、奥多摩や檜原村の山あいは時間がかかります。乗換案内での確認をおすすめします。",
      ],
    },
  },
  {
    id: "transport",
    title: { en: "Transportation", ja: "現地の交通" },
    body: {
      en: [
        "Trains connect the main towns. From station to trailhead or valley, local buses are usually the next step, and services in mountain areas can be infrequent — check the return timetable when you arrive.",
        "A rental car adds flexibility in Okutama and Hinohara. Cycling suits the flatter eastern areas along the Tama River.",
      ],
      ja: [
        "主要な町は鉄道で結ばれています。駅から登山口や渓谷へはバスが基本ですが、山間部は本数が限られます。到着時に帰りの時刻表の確認を。",
        "奥多摩・檜原村ではレンタカーが便利です。多摩川沿いの平地はサイクリングにも向いています。",
      ],
    },
  },
  {
    id: "seasons",
    title: { en: "Best Seasons", ja: "季節" },
    body: {
      en: [
        "Spring brings plum and cherry blossom to the river valleys. Summer is festival season, and the rivers and caves offer relief from the heat.",
        "Autumn is the most popular time for hiking, with colour on the ridges through November. Winter is quiet and clear — cold in the mountains, but with the sharpest views.",
      ],
      ja: [
        "春は梅と桜が川沿いを彩ります。夏は祭りの季節。川や鍾乳洞は涼を求める人でにぎわいます。",
        "秋は登山に最適な季節。11月頃まで紅葉が続きます。冬は静かで空気が澄み、遠くまで見渡せます。",
      ],
    },
  },
  {
    id: "manners",
    title: { en: "Japanese Manners", ja: "日本のマナー" },
    body: {
      en: [
        "Quiet on trains, no littering, and care around private property go a long way. Many places you will visit are people's neighbourhoods, not tourist facilities.",
        "See the Travel Kindly section for a fuller guide.",
      ],
      ja: [
        "車内では静かに、ごみは持ち帰り、私有地への配慮を。訪れる場所の多くは、観光施設ではなく人々の生活の場です。",
        "詳しくは「やさしい旅を」のセクションをご覧ください。",
      ],
    },
  },
  {
    id: "safety",
    title: { en: "Safety", ja: "安全のために" },
    body: {
      en: [
        "Mountain weather changes quickly and mobile signal can be weak in valleys. Tell someone your plan, start early, and turn back if conditions change.",
        "In summer, rivers can rise rapidly after rain. Follow local warnings and swim only where it is permitted.",
      ],
      ja: [
        "山の天気は変わりやすく、谷では電波が届きにくい場所もあります。行程を誰かに伝え、早めの行動を。状況が変われば引き返す判断を。",
        "夏は雨のあと川が急に増水することがあります。現地の注意喚起に従い、遊泳可能な場所でのみ水遊びを。",
      ],
    },
  },
  {
    id: "bring",
    title: { en: "What to Bring", ja: "持ち物" },
    body: {
      en: [
        "Comfortable walking shoes, a light rain layer, water, and some cash — smaller shops and bus routes may not accept cards.",
        "In summer add sun protection and insect repellent; in the caves and mountains, a warm layer even in August.",
      ],
      ja: [
        "歩きやすい靴、軽い雨具、飲み物、そして現金。小さな店やバスではカードが使えないこともあります。",
        "夏は日よけと虫よけを。鍾乳洞や山では、8月でも羽織るものがあると安心です。",
      ],
    },
  },
];

/* ------------------------------------------------------------------ */

export const faqs: { q: Localized; a: Localized }[] = [
  {
    q: { en: "What is Nishi Tama?", ja: "西多摩とは何ですか？" },
    a: {
      en: "Nishi Tama is the western region of Tokyo Metropolis, made up of eight municipalities. It is largely mountainous and rural, in contrast with central Tokyo.",
      ja: "西多摩は東京都の西部に位置する地域で、8つの市町村から構成されています。都心とは対照的に、山地や里山の風景が広がります。",
    },
  },
  {
    q: { en: "Where is Nishi Tama?", ja: "西多摩はどこにありますか？" },
    a: {
      en: "It lies at the western edge of Tokyo, beyond Tachikawa, extending to the prefectural border in the mountains. Everything here is still within Tokyo.",
      ja: "立川より西、山あいの都県境まで広がるエリアです。すべて東京都内に含まれます。",
    },
  },
  {
    q: { en: "How can I get to Nishi Tama from Shinjuku?", ja: "新宿からどう行けますか？" },
    a: {
      en: "Take a JR line west toward Tachikawa, then transfer to the Ome Line (for Ome and Okutama) or the Itsukaichi Line (for Akiruno). Journey times vary widely by destination, so check a route planner.",
      ja: "JRで立川方面へ向かい、青梅線（青梅・奥多摩方面）または五日市線（あきる野方面）に乗り換えます。所要時間は目的地により大きく異なります。",
    },
  },
  {
    q: { en: "Can I visit Nishi Tama in one day?", ja: "日帰りでも楽しめますか？" },
    a: {
      en: "Yes. A single area — Ome, Akiruno or Fussa, for example — works well as a day trip. Okutama and Hinohara are further west, so start early and check return train and bus times.",
      ja: "はい。青梅、あきる野、福生などは日帰りに適しています。奥多摩や檜原村は少し遠いので、早めの出発と帰りの時刻の確認を。",
    },
  },
  {
    q: { en: "What is the best season to visit?", ja: "おすすめの季節は？" },
    a: {
      en: "Autumn for hiking and colour, summer for rivers and festivals, early spring for blossoms. Winter is the quietest, with the clearest air.",
      ja: "紅葉と登山なら秋、川と祭りなら夏、花なら早春。冬は最も静かで、空気が澄んでいます。",
    },
  },
  {
    q: { en: "What local foods should I try?", ja: "食べておきたいものは？" },
    a: {
      en: "Look for seasonal vegetables from local farms, soba and river fish, plum products from the Ome area, and regional sweets and drinks.",
      ja: "地場野菜、蕎麦や川魚、青梅周辺の梅の加工品、地域の菓子や地酒などをぜひ。",
    },
  },
  {
    q: { en: "Is Nishi Tama suitable for foreign tourists?", ja: "外国からの旅行者でも訪れやすいですか？" },
    a: {
      en: "Yes, though it is less internationally developed than central Tokyo. English signage exists at major sites but not everywhere — a translation app and offline maps are helpful.",
      ja: "はい。ただし都心ほど多言語対応は進んでいません。主要な場所には英語表記がありますが、翻訳アプリやオフライン地図があると安心です。",
    },
  },
  {
    q: { en: "What should I know about Japanese manners?", ja: "日本のマナーで気をつけることは？" },
    a: {
      en: "Keep noise down on trains and in residential areas, carry your rubbish with you, ask before photographing people, and stay on marked trails in nature.",
      ja: "電車や住宅地では静かに、ごみは持ち帰り、人を撮るときはひと声かけて、自然では決められた道を歩きましょう。",
    },
  },
];


/* ------------------------------------------------------------------
 * RAILWAY ORIENTATION DATA
 * Station names and codes are plain editable text — change them here.
 * ------------------------------------------------------------------ */

export type Station = {
  code: string;
  en: string;
  ja: string;
  /** Visually emphasised on the infographic. */
  key?: boolean;
};

/** A simplified westbound selection of Chuo Line stations (not all stations). */
export const chuoLineStations: Station[] = [
  { code: "JC 01", en: "Tokyo", ja: "東京駅" },
  { code: "JC 02", en: "Kanda", ja: "神田駅" },
  { code: "JC 03", en: "Ochanomizu", ja: "御茶ノ水駅" },
  { code: "JC 04", en: "Yotsuya", ja: "四ツ谷駅" },
  { code: "JC 05", en: "Shinjuku", ja: "新宿駅", key: true },
  { code: "JC 06", en: "Nakano", ja: "中野駅" },
  { code: "JC 11", en: "Kichijoji", ja: "吉祥寺駅" },
  { code: "JC 12", en: "Mitaka", ja: "三鷹駅" },
  { code: "JC 16", en: "Kokubunji", ja: "国分寺駅" },
  { code: "JC 19", en: "Tachikawa", ja: "立川駅", key: true },
  { code: "JC 20", en: "Hino", ja: "日野駅" },
  { code: "JC 22", en: "Hachioji", ja: "八王子駅" },
  { code: "JC 24", en: "Takao", ja: "高尾駅" },
];

export const nishiTamaAreas: { ja: string; en: string }[] = [
  { ja: "青梅市", en: "Ome City" },
  { ja: "福生市", en: "Fussa City" },
  { ja: "羽村市", en: "Hamura City" },
  { ja: "あきる野市", en: "Akiruno City" },
  { ja: "瑞穂町", en: "Mizuho Town" },
  { ja: "日の出町", en: "Hinode Town" },
  { ja: "檜原村", en: "Hinohara Village" },
  { ja: "奥多摩町", en: "Okutama Town" },
];
