import { images } from "@/config/images"; 
import type { Localized } from "../lib/i18n";

/* ------------------------------------------------------------------
 * STATIC CONTENT
 * All copy is bilingual: { en, ja }. Add more locales by adding keys.
 * ------------------------------------------------------------------ */

export type Area = {
  id: string;
  ja: string;
  en: string;
  vi?: string;
  zh?: string;
  ko?: string;
  ru?: string;
  de?: string;
  image: string;
  intro: Localized;
  highlights: Localized<string[]>;
};

export const areas: Area[] = [
  {
    id: "ome",
    ja: "青梅市",
    en: "Ome City",
    vi: "Thành phố Ome",
    zh: "青梅市",
    ko: "오메시",
    ru: "Город Оме",
    de: "Stadt Ome",
    image: images.ome,
    intro: {
      en: "A former post town on the Tama River where old streets, temples and plum groves meet the entrance to the mountains.",
      ja: "多摩川沿いに開けた歴史ある町。古い街並みや寺社、梅の里が、山への入口とつながります。",
      vi:"Nằm ở phía Tây Tokyo, Ome nổi bật với thiên nhiên phong phú, lịch sử và những khu phố mang nét hoài niệm. Từ núi Mitake, thung lũng Mitake đến Yoshino Baigo, du khách có thể khám phá vẻ đẹp bốn mùa và văn hóa địa phương.",
      zh:"青梅市位于东京西部，以丰富的自然、悠久的历史和怀旧街景而闻名。从御岳山、御岳溪谷到吉野梅乡，游客可以感受四季之美与当地文化。",
      ko:"도쿄 서부에 위치한 오메시는 풍부한 자연과 역사, 향수를 불러일으키는 거리 풍경이 매력적인 곳입니다. 미타케산과 미타케 계곡, 요시노 바이코에서 사계절의 아름다움과 지역 문화를 만날 수 있습니다.",
      ru:"Оме находится на западе Токио и славится богатой природой, историей и атмосферой старой Японии. Здесь можно насладиться красотой горы Митакэ, ущелья Митакэ и района Ёсино Байго в любое время года.",
      de:"Ome liegt im Westen Tokios und ist für seine reiche Natur, Geschichte und nostalgische Atmosphäre bekannt. Am Berg Mitake, in der Mitake-Schlucht und in Yoshino Baigo können Besucher die Schönheit der Jahreszeiten und die lokale Kultur erleben.",
      },
    highlights: {
      en: ["Ome old town", "Yoshino Baigo plum area", "Tama River riverside", "Gateway to Mount Mitake"],
      ja: ["青梅旧市街", "吉野梅郷", "多摩川沿いの散策", "御岳山への玄関口"],
      vi:["Phố cổ Ome","Khu vực hoa mơ Yoshino Baigo","Bờ sông Tama","Cửa ngõ lên núi Mitake"],
      zh:["青梅老街","吉野梅乡","多摩川河畔","御岳山门户"],
      ko:["오메 구시가지","요시노 바이코 매화 명소","다마강 강변","미타케산의 관문"],
      ru:["Старый город Оме","Район Ёсино Байго","Берег реки Тама","Ворота к горе Митакэ"],
      de:["Altstadt von Ome","Pflaumenblütengebiet Yoshino Baigo","Ufer des Tama-Flusses","Tor zum Berg Mitake"],
    },
  },
  {
  id: "fussa",
  ja: "福生市",
  en: "Fussa City",
  image: images.fussa,
  intro: {
    ja: "多摩川沿いのコンパクトな街。日米の文化が混ざりあう街並みと酒造り、そして夏の七夕まつりで知られます。",
    en: "A compact riverside city known for its mix of Japanese and American influences, sake brewing tradition and a lively summer festival.",
    vi: "Một thành phố nhỏ ven sông Tama, nổi tiếng với sự giao thoa văn hóa Nhật Bản và Mỹ, truyền thống sản xuất sake và lễ hội Tanabata sôi động vào mùa hè.",
    zh: "一座位于多摩川沿岸的小巧城市，以日美文化交融的街景、传统清酒酿造文化以及热闹的夏季七夕祭而闻名。",
    ko: "다마강을 따라 자리한 아담한 도시로, 일본과 미국의 문화가 어우러진 거리 풍경과 사케 양조 전통, 활기찬 여름 다나바타 축제로 유명합니다.",
    de: "Eine kompakte Stadt am Tama-Fluss, bekannt für die Mischung japanischer und amerikanischer Einflüsse, ihre Sake-Brauereikultur und ein lebhaftes Sommerfest.",
    ru: "Небольшой город на берегу реки Тама, известный сочетанием японской и американской культур, традицией производства сакэ и ярким летним фестивалем."
  },
  highlights: {
    ja: ["福生七夕まつり", "酒蔵の文化", "多摩川さんぽ", "個性的な店とカフェ"],
    en: ["Tanabata Festival", "Sake brewing culture", "Riverside walks", "Local cafes and shops"],
    vi: ["Lễ hội Tanabata Fussa", "Văn hóa sản xuất sake", "Tản bộ ven sông Tama", "Quán cà phê và cửa hàng địa phương"],
    zh: ["福生七夕祭", "清酒酿造文化", "多摩川河畔散步", "当地特色商店与咖啡馆"],
    ko: ["후사 다나바타 축제", "사케 양조 문화", "다마강 산책", "개성 있는 상점과 카페"],
    de: ["Tanabata-Fest", "Sake-Brauereikultur", "Spaziergänge am Fluss", "Lokale Cafés und Geschäfte"],
    ru: ["Фестиваль Танабата", "Культура производства сакэ", "Прогулки вдоль реки", "Местные кафе и магазины"]
  }
},

{
  id: "hamura",
  ja: "羽村市",
  en: "Hamura City",
  image: images.hamura,
  intro: {
    ja: "西多摩でもっとも小さな市。多摩川の羽村取水堰は、江戸へ水を送った玉川上水の起点です。",
    en: "The smallest city in the region, where a historic water intake on the Tama River still marks the start of an Edo-period waterway.",
    vi: "Thành phố nhỏ nhất trong khu vực, nơi đập lấy nước Hamura trên sông Tama đánh dấu điểm khởi đầu của hệ thống dẫn nước được xây dựng từ thời Edo.",
    zh: "西多摩地区最小的城市。多摩川上的羽村取水堰是江户时代玉川上水的起点，曾负责将水输送至江户。",
    ko: "지역에서 가장 작은 도시로, 다마강에 있는 하무라 취수장은 에도 시대에 건설된 다마가와 조스이 수로의 시작점입니다.",
    de: "Die kleinste Stadt der Region. Am Tama-Fluss befindet sich das historische Hamura-Wehr, der Ausgangspunkt des in der Edo-Zeit angelegten Tamagawa-Wasserwegs.",
    ru: "Самый маленький город региона. Историческая водозаборная плотина Хамура на реке Тама является началом водного канала, построенного в эпоху Эдо."
  },
  highlights: {
    ja: ["羽村取水堰", "玉川上水", "川沿いの桜", "静かな町歩き"],
    en: ["Hamura Weir", "Tamagawa Josui waterway", "Cherry blossom riverside", "Quiet town walks"],
    vi: ["Đập lấy nước Hamura", "Kênh Tamagawa Josui", "Hoa anh đào ven sông", "Dạo quanh thị trấn yên bình"],
    zh: ["羽村取水堰", "玉川上水", "河畔樱花", "宁静的城市漫步"],
    ko: ["하무라 취수장", "다마가와 조스이", "강변 벚꽃", "조용한 마을 산책"],
    de: ["Hamura-Wehr", "Tamagawa-Josui-Wasserweg", "Kirschblüten am Fluss", "Ruhige Spaziergänge durch die Stadt"],
    ru: ["Водозаборная плотина Хамура", "Канал Тамагава-Дзосуи", "Цветущая сакура у реки", "Прогулки по тихому городу"]
  }
},

{
  id: "akiruno",
  ja: "あきる野市",
  en: "Akiruno City",
  image: images.akiruno,
  intro: {
    ja: "秋川渓谷を擁するまち。澄んだ流れと川辺の森が、夏の避暑地として親しまれています。",
    en: "Home to the Akigawa Valley, where clear water, riverside forest and easy access make it a favourite summer escape.",
    vi: "Nơi có thung lũng Akigawa với dòng nước trong xanh và những khu rừng ven sông, là điểm nghỉ mát mùa hè được yêu thích.",
    zh: "拥有秋川溪谷的城市，以清澈的溪流、河畔森林和便利的交通而成为深受欢迎的夏季避暑地。",
    ko: "아키가와 계곡이 있는 도시로, 맑은 물과 강변 숲, 편리한 접근성 덕분에 여름 휴양지로 사랑받고 있습니다.",
    de: "Die Stadt am Akigawa-Tal mit klarem Wasser und Wäldern am Flussufer ist dank ihrer guten Erreichbarkeit ein beliebtes Sommerziel.",
    ru: "Город, где находится долина Акигава с чистой водой и лесами вдоль реки, популярное место для летнего отдыха благодаря удобной доступности."
  },
  highlights: {
    ja: ["秋川渓谷", "川遊び・バーベキュー", "温泉施設", "ヨルイチ"],
    en: ["Akigawa Valley", "River swimming and BBQ", "Hot spring facilities", "Yoruichi night market"],
    vi: ["Thung lũng Akigawa", "Tắm sông và BBQ", "Suối nước nóng", "Chợ đêm Yoruichi"],
    zh: ["秋川溪谷", "河边戏水与烧烤", "温泉设施", "Yoruichi 夜市"],
    ko: ["아키가와 계곡", "강에서 물놀이와 BBQ", "온천 시설", "요루이치 야시장"],
    de: ["Akigawa-Tal", "Baden im Fluss und BBQ", "Thermalbäder", "Yoruichi-Nachtmarkt"],
    ru: ["Долина Акигава", "Купание в реке и барбекю", "Онсэн", "Ночной рынок Ёруити"]
  }
},

{
  id: "mizuho",
  ja: "瑞穂町",
  en: "Mizuho Town",
  image: images.mizuho,
  intro: {
    ja: "狭山丘陵のふもとに広がる農のまち。畑と丘の風景、地元の農産物が魅力です。",
    en: "A town of farmland and low hills at the edge of the Sayama area, known for agriculture and local produce.",
    vi: "Một thị trấn nông nghiệp nằm dưới chân đồi Sayama, nổi bật với những cánh đồng, cảnh quan đồi núi và nông sản địa phương.",
    zh: "位于狭山丘陵脚下的农业小镇，以农田、丘陵景观和当地农产品而闻名。",
    ko: "사야마 구릉지 기슭에 펼쳐진 농업 마을로, 넓은 밭과 언덕 풍경, 지역 농산물로 유명합니다.",
    de: "Eine landwirtschaftlich geprägte Stadt am Rand der Sayama-Hügel, bekannt für ihre Felder, Hügellandschaften und lokalen Erzeugnisse.",
    ru: "Сельскохозяйственный городок у подножия холмов Саяма, известный своими полями, холмистыми пейзажами и местными продуктами."
  },
  highlights: {
    ja: ["農産物直売", "狭山丘陵の風景", "季節の花", "エキニシサマーフェス"],
    en: ["Farm produce direct sales", "Sayama hills scenery", "Seasonal flowers", "Ekinishi Summer Fest"],
    vi: ["Bán nông sản trực tiếp", "Phong cảnh đồi Sayama", "Hoa theo mùa", "Lễ hội Ekinishi Summer Fest"],
    zh: ["农产品直销", "狭山丘陵风景", "四季花卉", "Ekinishi 夏日祭"],
    ko: ["농산물 직거래", "사야마 구릉지 풍경", "계절의 꽃", "에키니시 서머 페스트"],
    de: ["Direktverkauf von landwirtschaftlichen Produkten", "Landschaft der Sayama-Hügel", "Saisonale Blumen", "Ekinishi Summer Fest"],
    ru: ["Прямые продажи фермерских продуктов", "Пейзажи холмов Саяма", "Сезонные цветы", "Летний фестиваль Ekinishi"]
  }
},

{
  id: "hinode",
  ja: "日の出町",
  en: "Hinode Town",
  image: images.hinode,
  intro: {
    ja: "平地と山あいの間に位置する小さな町。神社や民俗芸能、森の小径が残ります。",
    en: "A small hillside town between the plains and the mountains, with local shrines, folk performing arts and forest trails.",
    vi: "Một thị trấn nhỏ nằm giữa vùng đồng bằng và núi, nơi vẫn còn những đền thờ địa phương, nghệ thuật dân gian và những con đường mòn trong rừng.",
    zh: "一座坐落在平原与山区之间的小山城镇，保留着当地神社、民俗表演艺术和森林小径。",
    ko: "평야와 산 사이에 자리한 작은 산간 마을로, 지역 신사와 민속 예능, 숲길이 남아 있습니다.",
    de: "Eine kleine Stadt in den Hügeln zwischen Ebene und Bergen mit lokalen Schreinen, traditionellen Volkskünsten und Waldwegen.",
    ru: "Небольшой городок на холмах между равниной и горами, где сохранились местные святилища, народные искусства и лесные тропы."
  },
  highlights: {
    ja: ["獅子舞などの民俗芸能", "山あいの寺社", "森のハイキング", "地元の農産物"],
    en: ["Traditional shishimai lion dance", "Hillside temples", "Forest trails", "Local produce"],
    vi: ["Múa sư tử Shishimai truyền thống", "Đền chùa trên sườn núi", "Đường mòn trong rừng", "Nông sản địa phương"],
    zh: ["传统狮子舞", "山间寺庙与神社", "森林徒步路线", "当地农产品"],
    ko: ["전통 사자춤 시시마이", "산간의 사찰과 신사", "숲길 하이킹", "지역 농산물"],
    de: ["Traditioneller Shishimai-Löwentanz", "Tempel und Schreine in den Hügeln", "Wanderwege im Wald", "Lokale Produkte"],
    ru: ["Традиционный танец льва сисимай", "Храмы и святилища в горах", "Лесные тропы", "Местные продукты"]
  }
},

{
  id: "hinohara",
  ja: "檜原村",
  en: "Hinohara Village",
  image: images.hinohara,
  intro: {
    ja: "島しょ部を除き東京都で唯一の村。面積の大半を森が占め、深い谷と滝、山あいの集落が息づきます。",
    en: "The only village in Tokyo outside the islands — almost entirely forest, with steep valleys, waterfalls and mountain hamlets.",
    vi: "Ngôi làng duy nhất của Tokyo nằm ngoài khu vực đảo, phần lớn diện tích được bao phủ bởi rừng với những thung lũng sâu, thác nước và các làng miền núi.",
    zh: "除岛屿地区外，檜原村是东京都唯一的村庄。大部分地区被森林覆盖，拥有深邃的山谷、瀑布和山间村落。",
    ko: "도쿄의 도서 지역을 제외하면 유일한 촌으로, 대부분이 숲으로 이루어져 있으며 깊은 계곡과 폭포, 산간 마을이 펼쳐집니다.",
    de: "Das einzige Dorf Tokios außerhalb der Inselgebiete. Fast das gesamte Gebiet ist bewaldet und bietet tiefe Täler, Wasserfälle und Bergdörfer.",
    ru: "Единственная деревня Токио за пределами островов. Почти вся её территория покрыта лесами, среди которых находятся глубокие ущелья, водопады и горные поселения."
  },
  highlights: {
    ja: ["払沢の滝", "山歩き", "山里の集落", "ふるさと夏まつり"],
    en: ["Hossawa Falls", "Mountain hiking", "Forest hamlets", "Summer festival by the falls"],
    vi: ["Thác Hossawa", "Đi bộ đường núi", "Làng miền núi", "Lễ hội mùa hè bên thác"],
    zh: ["払沢瀑布", "山地徒步", "山间村落", "瀑布旁的夏日祭"],
    ko: ["호사와 폭포", "산악 하이킹", "산간 마을", "폭포 옆 여름 축제"],
    de: ["Hossawa-Wasserfall", "Bergwandern", "Bergdörfer", "Sommerfest am Wasserfall"],
    ru: ["Водопад Хоссава", "Горные походы", "Лесные деревни", "Летний фестиваль у водопада"]
  }
},

{
  id: "okutama",
  ja: "奥多摩町",
  en: "Okutama Town",
  image: images.okutama,
  intro: {
    ja: "東京の最西端に広がる山のまち。奥多摩湖、鍾乳洞、稜線と渓谷が続きます。",
    en: "The mountainous far west of Tokyo: a large reservoir lake, limestone caves, high ridges and deep river gorges.",
    vi: "Thị trấn miền núi nằm ở cực Tây Tokyo, nổi bật với hồ chứa Okutama rộng lớn, hang động đá vôi, các dãy núi và hẻm núi ven sông.",
    zh: "位于东京最西端的山区城镇，拥有广阔的奥多摩湖、石灰岩洞穴、高山山脊和深邃的河谷。",
    ko: "도쿄 최서단에 위치한 산악 마을로, 넓은 오쿠타마호와 석회암 동굴, 높은 산능선과 깊은 계곡이 이어집니다.",
    de: "Eine Bergstadt im äußersten Westen Tokios mit dem großen Okutama-Stausee, Kalksteinhöhlen, hohen Bergkämmen und tiefen Flussschluchten.",
    ru: "Горный городок на крайнем западе Токио с большим водохранилищем Окутама, известняковыми пещерами, высокими хребтами и глубокими речными ущельями."
  },
  highlights: {
    ja: ["奥多摩湖", "日原鍾乳洞", "登山コース", "渓谷美"],
    en: ["Lake Okutama", "Nippara Limestone Cave", "Mountain hiking routes", "River gorges"],
    vi: ["Hồ Okutama", "Hang đá vôi Nippara", "Các tuyến đường leo núi", "Hẻm núi ven sông"],
    zh: ["奥多摩湖", "日原钟乳洞", "登山路线", "壮丽的河谷"],
    ko: ["오쿠타마호", "닙파라 석회암 동굴", "산악 하이킹 코스", "아름다운 계곡"],
    de: ["Okutama-See", "Nippara-Kalksteinhöhle", "Bergwanderwege", "Flussschluchten"],
    ru: ["Озеро Окутама", "Известняковая пещера Ниппара", "Горные маршруты", "Речные ущелья"]
  }
},
];

/* ------------------------------------------------------------------ */

export type Language = "ja" | "en" | "vi" | "zh" | "ko" | "ru" | "de";


export type Destination = {
  id: string;
  ja: string;
  en: string;
  vi?: string; // Dùng dấu ?
  zh?: string;
  ko?: string;
  ru?: string;
  de?: string;
  area: Localized;
  image: string;
  description: Localized;
  season: Localized;
  experience: Localized;
  activities: Localized<string[]>;
  mapQuery: string;
};

export const destinations: Destination[] = [
  {
    id: "mitake",
    ja: "御岳山",
    en: "Mount Mitake",
    vi: "Núi Mitake",
    zh: "御岳山",
    ko: "미타케산",
    ru: "Гора Митаке",
    de: "Berg Mitake",
    area: {
      ja: "青梅市",
      en: "Ome City",
      vi: "Thành phố Ome",
      zh: "青梅市",
      ko: "오메시",
      ru: "Город Оме",
      de: "Stadt Ome",
    },
    image: images.destinations.mitake,
    description: {
      ja: "豊かな自然と lịch sử ある武蔵御嶽神社で知られる人気の山。ケーブルカーで気軽に登ることができ、四季折々の絶景やハイキングを楽しめます。",
      en: "A popular mountain in Ome City, known for its rich nature and historic Musashi Mitake Shrine. Easily accessible via cable car, visitors can enjoy hiking and breathtaking seasonal views.",
      vi: "Ngọn núi nổi tiếng tại thành phố Ome, hấp dẫn du khách bởi thiên nhiên phong phú và ngôi đền cổ kính Musashi Mitake. Bạn có thể dễ dàng lên núi bằng cáp treo để trải nghiệm leo núi và thưởng ngoạn cảnh sắc tuyệt đẹp theo mùa.",
      zh: "以丰富自然与悠久历史的武藏御岳神社而闻名的热门名山。乘坐缆车即可轻松登顶，在此体验徒步健行，尽情领略四季交替的绝美风光。",
      ko: "풍부한 자연과 오랜 역사를 지닌 무사시 미타케 신사로 유명한 인기 명산. 케이블카를 이용해 부담 없이 오를 수 있으며, 사계절의 절경과 하이킹을 즐길 수 있습니다.",
      ru: "Популярная гора в городе Оме, известная богатой природой и историческим святилищем Мусаси Митаке. Сюда легко подняться на канатной дороге, чтобы погулять по тропам и полюбоваться захватывающими сезонными видами.",
      de: "Ein beliebter Berg in der Stadt Ome, bekannt für seine reiche Natur und den historischen Musashi-Mitake-Schrein. Er ist leicht mit der Standseilbahn erreichbar und bietet tolle Wanderwege sowie atemberaubende Aussichten zu jeder Jahreszeit.",
    },
    season: {
      ja: "春〜秋",
      en: "Spring to autumn",
      vi: "Xuân đến thu",
      zh: "春季至秋季",
      ko: "봄~가을",
      ru: "С весны по осень",
      de: "Frühling bis Herbst",
    },
    experience: {
      ja: "森歩き・参拝",
      en: "Forest walking & shrine visit",
      vi: "Đi bộ trong rừng & viếng đền",
      zh: "森林散步・参拜神社",
      ko: "숲 산책 & 신사 참배",
      ru: "Прогулка по лесу и посещение святилища",
      de: "Waldspaziergang & Schreinbesuch",
    },
    activities: {
      ja: ["ハイキング", "トレッキング", "参拝", "自然の撮影"],
      en: ["Hiking", "Trekking", "Shrine visits", "Nature photography"],
      vi: ["Đi bộ đường dài", "Leo núi", "Viếng đền thờ", "Chụp ảnh thiên nhiên"],
      zh: ["徒步", "登山健行", "神社参拜", "自然摄影"],
      ko: ["하이킹", "트레킹", "신사 참배", "자연 사진 촬영"],
      ru: ["Пешие прогулки", "Треккинг", "Посещение святилищ", "Фотография природы"],
      de: ["Wandern", "Trekking", "Schreinbesuche", "Naturfotografie"],
    },
    mapQuery: "御岳山 青梅市 東京都",
  },
  {
    id: "mitake-gorge",
    ja: "御岳渓谷",
    en: "Mitake Gorge",
    vi: "Hẻm núi Mitake",
    zh: "御岳溪谷",
    ko: "미타케 계곡",
    ru: "Ущелье Митаке",
    de: "Mitake-Schlucht",
    area: {
      ja: "青梅市",
      en: "Ome City",
      vi: "Thành phố Ome",
      zh: "青梅市",
      ko: "오메시",
      ru: "Город Оме",
      de: "Stadt Ome",
    },
    image: images.destinations.mitakeGorge,
    description: {
      ja: "多摩川の清流と豊かな自然が広がる美しい渓谷。四季折々の景色を楽しみながら渓流沿いを散策できるほか、ラフティングやカヌーなどのアクティビティも人気を集めています。",
      en: "A scenic gorge in Ome City known for the clear waters of the Tama River and rich surrounding nature. Visitors can enjoy walking along the stream while taking in seasonal views, as well as outdoor activities like rafting and kayaking.",
      vi: "Hẻm núi tuyệt đẹp tại thành phố Ome với dòng sông Tama trong xanh và thiên nhiên trù phú. Du khách có thể tản bộ dọc suối ngắm cảnh sắc 4 mùa, hoặc tham gia các hoạt động chèo thuyền vượt thác (rafting) và chèo thuyền kayak đầy hấp dẫn.",
      zh: "拥有一条清澈的多摩川与丰富自然的绝美溪谷。游客不仅可以沿着溪流散步欣赏四季风景，还可以体验漂流和皮划艇等热门户外活动。",
      ko: "다마강의 청정 맑은 물과 풍부한 자연이 펼쳐지는 아름다운 계곡. 사계절의 풍경을 즐기며 계곡을 따라 산책할 수 있으며, 래프팅과 카누 등 다양한 액티비티도 큰 인기를 끌고 있습니다.",
      ru: "Живописное ущелье с чистейшими водами реки Тама и богатой природой. Здесь можно прогуляться вдоль горного потока, любуясь сезонными пейзажами, а также заняться сплавом на рафтах и каяках.",
      de: "Eine malerische Schlucht mit dem klaren Wasser des Tama-Flusses und reicher Natur. Besucher können am Bachlauf entlang spazieren, die jahreszeitliche Kulisse genießen oder Outdoor-Aktivitäten wie Rafting und Kajakfahren erleben.",
    },
    season: {
      ja: "春〜秋",
      en: "Spring to autumn",
      vi: "Xuân đến thu",
      zh: "春季至秋季",
      ko: "봄~가을",
      ru: "С весны по осень",
      de: "Frühling bis Herbst",
    },
    experience: {
      ja: "渓谷さんぽ",
      en: "Riverside walking",
      vi: "Tản bộ hẻm núi ven sông",
      zh: "溪谷散步",
      ko: "계곡 산책",
      ru: "Прогулка по ущелью",
      de: "Spaziergang an der Schlucht",
    },
    activities: {
      ja: ["川沿いの散策", "ラフティング", "カヌー", "撮影"],
      en: ["Riverside walking", "Rafting", "Kayaking", "Photography"],
      vi: ["Đi dạo ven sông", "Chèo thuyền vượt thác", "Chèo thuyền Kayak", "Chụp ảnh"],
      zh: ["沿河散步", "漂流", "皮划艇", "摄影"],
      ko: ["강변 산책", "래프팅", "카누", "사진 촬영"],
      ru: ["Прогулки вдоль реки", "Рафтинг", "Каякинг", "Фотография"],
      de: ["Uferflanieren", "Rafting", "Kajakfahren", "Fotografie"],
    },
    mapQuery: "御岳渓谷 青梅市 東京都",
  },
  {
    id: "musashi-mitake",
    ja: "武蔵御嶽神社",
    en: "Musashi Mitake Shrine",
    vi: "Đền Musashi Mitake",
    zh: "武藏御嶽神社",
    ko: "무사시 미타케 신사",
    ru: "Святилище Мусаси Митаке",
    de: "Musashi-Mitake-Schrein",
    area: {
      ja: "青梅市",
      en: "Ome City",
      vi: "Thành phố Ome",
      zh: "青梅市",
      ko: "오메시",
      ru: "Город Оме",
      de: "Stadt Ome",
    },
    image: images.destinations.musashiMitake,
    description: {
      ja: "御岳山の山頂に鎮座する歴史ある神社で、古くから山岳信仰の聖地として親しまれています。愛犬の健康祈願ができる神社としても有名で、境内からは関東平野を一望する素晴らしい景色を楽しめます。",
      en: "A historic shrine located at the summit of Mount Mitake, long revered as a sacred site for mountain worship. It is also famous for offering blessings for pet dogs, and visitors can enjoy breathtaking views overlooking the Kanto Plain from the shrine grounds.",
      vi: "Ngôi đền cổ kính tọa lạc trên đỉnh núi Mitake, từ lâu đã được tôn kính là thánh địa linh thiêng của tín ngưỡng thờ núi. Nơi đây còn nổi tiếng với nghi lễ cầu an cho thú cưng (chó cún), và từ khuôn viên đền, du khách có thể phóng tầm mắt ngắm nhìn toàn cảnh đồng bằng Kanto tuyệt đẹp.",
      zh: "坐落于御岳山顶的历史悠久的神社，自古以来就作为山岳信仰的圣地而深受敬仰。该神社还以祈求爱犬健康平安而闻名，从神社境内可一览关东平原的壮丽美景。",
      ko: "미타케산 정상에 자리한 역사 깊은 신사로, 예로부터 산악 신앙의 성지로 사랑받아 왔습니다. 반려견의 건강을 기원하는 신사로도 유명하며, 경내에서는 간토 평야가 한눈에 들어오는 멋진 풍경을 감상할 수 있습니다.",
      ru: "Историческое святилище на вершине горы Митаке, с давних пор почитаемое как священное место горного поклонения. Оно также известно молебнами о здоровье домашних собак, а с его территории открывается захватывающий вид на равнину Канто.",
      de: "Ein historischer Schrein auf dem Gipfel des Berges Mitake, der seit langem als heilige Stätte der Bergverehrung gilt. Er ist auch dafür bekannt, Segen für Haushunde anzubieten, und bietet von seinem Gelände einen atemberaubenden Blick über die Kanto-Ebene.",
    },
    season: {
      ja: "通年",
      en: "All year",
      vi: "Quanh năm",
      zh: "全年",
      ko: "연중무휴",
      ru: "Круглый год",
      de: "Ganzjährig",
    },
    experience: {
      ja: "参拝・山頂の眺め",
      en: "Shrine visit & mountain views",
      vi: "Viếng đền & ngắm cảnh đỉnh núi",
      zh: "参拜・山顶景观",
      ko: "신사 참배 & 정상 전망",
      ru: "Посещение святилища и виды с вершины",
      de: "Schreinbesuch & Bergblick",
    },
    activities: {
      ja: ["参拝", "愛犬祈願", "関東平野の眺望", "歴史探訪"],
      en: ["Shrine visit", "Pet dog blessings", "Kanto Plain views", "History exploration"],
      vi: ["Viếng đền", "Cầu an cho thú cưng", "Ngắm cảnh đồng bằng Kanto", "Khám phá lịch sử"],
      zh: ["参拜神社", "爱犬祈福", "远眺关东平原", "历史探秘"],
      ko: ["신사 참배", "반려견 건강 기원", "간토 평야 조망", "역사 탐방"],
      ru: ["Посещение святилища", "Благословение питомцев", "Вид на равнину Канто", "Знакомство с историей"],
      de: ["Schreinbesuch", "Segnung für Hunde", "Aussicht auf die Kanto-Ebene", "Historische Erkundung"],
    },
    mapQuery: "武蔵御嶽神社 青梅市 東京都",
  },
  {
    id: "rock-garden",
    ja: "御岳岩石園",
    en: "Mitake Rock Garden",
    vi: "Vườn đá Mitake (Rock Garden)",
    zh: "御岳岩石园",
    ko: "미타케 록 가든",
    ru: "Скальный сад Митаке",
    de: "Mitake Rock Garden",
    area: {
      ja: "青梅市",
      en: "Ome City",
      vi: "Thành phố Ome",
      zh: "青梅市",
      ko: "오메시",
      ru: "Город Оме",
      de: "Stadt Ome",
    },
    image: images.destinations.rockGarden,
    description: {
      ja: "御岳岩石園（ロックガーデン）は、御岳山の豊かな森に包まれた苔むす岩と清流が美しいハイキングコースです。澄んだ空気と水のせせらぎに癒やされながら、四季折々の豊かな自然を堪能できます。",
      en: "Mitake Rock Garden is a scenic hiking trail surrounded by moss-covered rocks and clear streams deep within Mount Mitake's lush forest. Visitors can enjoy the rich seasonal nature while relaxing to the fresh mountain air and peaceful sounds of flowing water.",
      vi: "Vườn đá Mitake (Rock Garden) là tuyến đường đi bộ tuyệt đẹp uốn lượn qua những tảng đá phủ đầy rêu phong và dòng suối trong lành giữa khu rừng rậm núi Mitake. Tận hưởng không khí trong lành cùng tiếng nước chảy róc rách sẽ mang lại cảm giác thư thái và trọn vẹn vẻ đẹp thiên nhiên bốn mùa.",
      zh: "御岳岩石园（Rock Garden）是一条被御岳山茂密森林环抱、布满苔藓奇石与清澈溪流的绝美徒步路线。在清新的空气与潺潺流水声的治愈下，您可以尽情领略四季交替的丰富自然之美。",
      ko: "미타케 록 가든은 미타케산의 울창한 숲에 둘러싸인 이끼 낀 바위와 청정 계곡물이 아름다운 하이킹 코스입니다. 맑은 공기와 졸졸 흐르는 물소리에 힐링하며 사계절의 풍부한 자연을 만끽할 수 있습니다.",
      ru: "Скальный сад Митаке (Rock Garden) — живописный пешеходный маршрут среди поросших мохом валунов и чистых ручьев в густом лесу горы Митаке. Здесь можно насладиться чистым горным воздухом, журчанием воды и богатой природой в любое время года.",
      de: "Der Mitake Rock Garden ist ein malerischer Wanderweg, umgeben von moosbedeckten Felsen und klaren Bächen im dichten Wald des Berges Mitake. Besucher können die frische Bergluft und das beruhigende Plätschern des Wassers genießen, während sie die reiche Natur erkunden.",
    },
    season: {
      ja: "初夏・秋",
      en: "Early summer & autumn",
      vi: "Đầu hè & mùa thu",
      zh: "初夏・秋季",
      ko: "초여름・가을",
      ru: "Раннее лето и осень",
      de: "Frühsommer & Herbst",
    },
    experience: {
      ja: "沢沿いハイキング",
      en: "Stream-side hiking",
      vi: "Đi bộ đường dài ven suối",
      zh: "溪流徒步",
      ko: "계곡길 하이킹",
      ru: "Пеший поход вдоль ручья",
      de: "Wandern am Bachlauf",
    },
    activities: {
      ja: ["沢沿いのハイキング", "森のトレッキング", "自然観察", "撮影"],
      en: ["Stream-side hiking", "Forest trekking", "Nature observation", "Photography"],
      vi: ["Đi bộ dọc khe suối", "Trekking trong rừng", "Quan sát thiên nhiên", "Chụp ảnh"],
      zh: ["溪流徒步", "森林健行", "自然观察", "摄影"],
      ko: ["계곡 하이킹", "숲 트레킹", "자연 관찰", "사진 촬영"],
      ru: ["Поход вдоль ручья", "Лесной треккинг", "Наблюдение за природой", "Фотография"],
      de: ["Bachwanderung", "Waldtrekking", "Naturbeobachtung", "Fotografie"],
    },
    mapQuery: "御岳山 ロックガーデン 青梅市",
  },
  {
    id: "yoshino-baigo",
    ja: "吉野梅郷",
    en: "Yoshino Baigo",
    vi: "Làng mơ Yoshino Baigo",
    zh: "吉野梅乡",
    ko: "요시노 바이고",
    ru: "Йосино Байго",
    de: "Yoshino Baigo",
    area: {
      ja: "青梅市",
      en: "Ome City",
      vi: "Thành phố Ome",
      zh: "青梅市",
      ko: "오메시",
      ru: "Город Оме",
      de: "Stadt Ome",
    },
    image: images.destinations.yoshinoBaigo,
    description: {
      ja: "古くから梅の栽培で知られる丘陵地。花の季節以外は静かで、散策に適しています。",
      en: "A hillside area long associated with plum cultivation, quiet outside the blossom season and pleasant to walk.",
      vi: "Vùng đồi núi từ lâu đã nổi tiếng với nghề trồng hoa mơ, không gian yên bình ngoài mùa hoa nở, rất thích hợp để dạo bộ.",
      zh: "自古以来就以种植梅花而闻名的丘陵地带。在赏花季之外十分宁静，非常适合散步。",
      ko: "예로부터 매화 재배로 유명한 언덕 지대. 꽃이 피는 계절 외에는 조용하여 산책하기에 좋습니다.",
      ru: "Холмистая местность, издавна известная выращиванием слив; тихая вне сезона цветения и приятная для прогулок.",
      de: "Ein Hügelgebiet, das seit langem mit dem Pflaumenanbau verbunden ist, außerhalb der Blütezeit ruhig und angenehm zu begehen.",
    },
    season: {
      ja: "早春",
      en: "Early spring",
      vi: "Đầu xuân",
      zh: "早春",
      ko: "초봄",
      ru: "Ранняя весна",
      de: "Frühjahr",
    },
    experience: {
      ja: "梅の里さんぽ",
      en: "Plum grove walks",
      vi: "Tản bộ qua làng hoa mơ",
      zh: "梅花之乡散步",
      ko: "매화 마을 산책",
      ru: "Прогулки по сливовым рощам",
      de: "Spaziergang im Pflaumenhain",
    },
    activities: {
      ja: ["季節の風景を楽しむ", "梅にまつわる体験", "撮影"],
      en: ["Seasonal sightseeing", "Ume-related experiences", "Photography"],
      vi: ["Ngắm cảnh theo mùa", "Trải nghiệm liên quan đến hoa mơ", "Chụp ảnh"],
      zh: ["欣赏季节风景", "梅花相关体验", "摄影"],
      ko: ["계절 풍경 감상", "매화 관련 체험", "사진 촬영"],
      ru: ["Сезонные экскурсии", "Мероприятия, связанные с уме", "Фотография"],
      de: ["Saisonale Besichtigungen", "Erlebnisse rund um die Pflaume", "Fotografie"],
    },
    mapQuery: "吉野梅郷 青梅市 東京都",
  },
 {
    id: "yoshino-baigo",
    ja: "吉野梅郷",
    en: "Yoshino Baigo",
    vi: "Làng mơ Yoshino Baigo",
    zh: "吉野梅乡",
    ko: "요시노 바이고",
    ru: "Йосино Байго",
    de: "Yoshino Baigo",
    area: {
      ja: "青梅市",
      en: "Ome City",
      vi: "Thành phố Ome",
      zh: "青梅市",
      ko: "오메시",
      ru: "Город Оме",
      de: "Stadt Ome",
    },
    image: images.destinations.yoshinoBaigo,
    description: {
      ja: "東京都青梅市に位置する梅の名所として知られるのどかな地域です。春にはエリア全体に美しい梅の花が咲き誇り、甘い香りに包まれながらのんびりとした散策を楽しめます。",
      en: "A peaceful area in Ome City famous as a renowned spot for plum blossoms. In spring, beautiful plum flowers bloom across the entire area, allowing visitors to enjoy a relaxing stroll filled with a sweet fragrance.",
      vi: "Một khu vực thanh bình tại thành phố Ome, nổi tiếng là danh thắng thưởng ngoạn hoa mơ. Vào mùa xuân, hoa mơ nở rộ ngợp trời khắp vùng, mang đến không gian dạo bộ thư thái ngập tràn hương thơm dịu ngọt.",
      zh: "位于东京都青梅市的著名赏梅胜地。每当春季到来，整片地区梅花盛开，散发出阵阵香气，非常适合在此悠闲地散步赏花。",
      ko: "도쿄도 오메시에 위치한 매화 명소로 알려진 평화로운 지역입니다. 봄이 되면 지역 전체에 아름다운 매화가 만발하여 달콤한 향기에 싸여 여유로운 산책을 즐길 수 있습니다.",
      ru: "Тихий и живописный район в городе Оме, известный как знаменитое место любования сливой. Весной весь район покрывается прекрасным цветущим ковром, а воздух наполняется сладким ароматом.",
      de: "Eine friedliche Gegend in der Stadt Ome, die als renommierter Ort für Pflaumenblüten bekannt ist. Im Frühling blühen in der gesamten Region wunderschöne Pflaumenblüten und laden zu einem entspannten Spaziergang voller süßem Duft ein.",
    },
    season: {
      ja: "早春",
      en: "Early spring",
      vi: "Đầu xuân",
      zh: "早春",
      ko: "초봄",
      ru: "Ранняя весна",
      de: "Frühjahr",
    },
    experience: {
      ja: "梅の里さんぽ",
      en: "Plum grove walks",
      vi: "Tản bộ qua làng hoa mơ",
      zh: "梅花之乡散步",
      ko: "매화 마을 산책",
      ru: "Прогулки по сливовым рощам",
      de: "Spaziergang im Pflaumenhain",
    },
    activities: {
      ja: ["季節の花を見る", "梅の散策", "自然の撮影", "のんびり過ごす"],
      en: ["Seasonal flower viewing", "Plum grove walks", "Nature photography", "Relaxation"],
      vi: ["Ngắm hoa theo mùa", "Tản bộ ngắm hoa mơ", "Chụp ảnh thiên nhiên", "Nghỉ ngơi thư giãn"],
      zh: ["观赏季节花卉", "梅林散步", "自然摄影", "悠闲时光"],
      ko: ["계절 꽃 감상", "매화 산책", "자연 사진 촬영", "휴식"],
      ru: ["Любование цветами", "Прогулка по сливовому саду", "Фотография природы", "Отдых"],
      de: ["Blumenblüte genießen", "Spaziergang im Pflaumenhain", "Naturfotografie", "Entspannung"],
    },
    mapQuery: "吉野梅郷 青梅市 東京都",
  },
  {
    id: "ome-old-town",
    ja: "青梅旧市街",
    en: "Ome Old Town",
    vi: "Phố cổ Ome",
    zh: "青梅旧街区",
    ko: "오메 구시가지",
    ru: "Старый город Оме",
    de: "Altstadt von Ome",
    area: {
      ja: "青梅市",
      en: "Ome City",
      vi: "Thành phố Ome",
      zh: "青梅市",
      ko: "오메시",
      ru: "Город Оме",
      de: "Stadt Ome",
    },
    image: images.destinations.omeOldTown,
    description: {
      ja: "昭和レトロな街並みや昔ながらの映画看板が残る味わい深いエリアです。ノスタルジックな雰囲気を楽しみながら、カフェ巡りや歴史的な街歩きを満喫できます。",
      en: "A charming area known for its nostalgic Showa-era streetscapes and classic movie billboards. Visitors can enjoy a relaxing walk through history while exploring local cafes and traditional sights.",
      vi: "Khu phố cổ kính đầy nét hoài niệm với không gian mang đậm phong cách thời Showa và những bảng hiệu điện ảnh xưa cũ. Bạn có thể vừa thưởng thức không khí hoài cổ, vừa dạo quanh các quán cà phê độc đáo và khám phá lịch sử con phố.",
      zh: "保留着浓郁昭和复古风情与怀旧电影海报的特色街区。在这里，您可以一边感受怀旧氛围，一边游览特色咖啡馆，尽情体验漫步历史老街的乐趣。",
      ko: "쇼와 시대의 레트로한 거리 풍경과 옛 영화 간판이 남아있는 정겨운 지역입니다. 향수 어린 분위기를 즐기며 카페 탐방과 역사적인 거리 산책을 만끽할 수 있습니다.",
      ru: "Очаровательный район, известный своей ностальгической атмосферой эпохи Сёва и старинными киноплакатами. Здесь можно насладиться прогулкой по историческим улицам и посетить уютные местные кафе.",
      de: "Eine charmante Gegend, die für ihre nostalgischen Straßenbilder der Showa-Ära und klassischen Filmplakate bekannt ist. Besucher können einen entspannten Spaziergang durch die Geschichte genießen und dabei lokale Cafés erkunden.",
    },
    season: {
      ja: "通年",
      en: "All year",
      vi: "Quanh năm",
      zh: "全年",
      ko: "연중무휴",
      ru: "Круглый год",
      de: "Ganzjährig",
    },
    experience: {
      ja: "町歩き・カフェ",
      en: "Town walking & cafes",
      vi: "Dạo phố & cà phê",
      zh: "小镇漫步・咖啡馆",
      ko: "타운 산책 & 카페",
      ru: "Прогулка по городу и кафе",
      de: "Stadtspaziergang & Cafés",
    },
    activities: {
      ja: ["昭和レトロ散策", "カフェ巡り", "歴史探訪", "撮影"],
      en: ["Showa retro walking", "Cafe hopping", "History exploration", "Photography"],
      vi: ["Khám phá phong cách Showa", "Dạo quán cà phê", "Tìm hiểu lịch sử", "Chụp ảnh"],
      zh: ["昭和复古漫步", "打卡咖啡馆", "历史探秘", "摄影"],
      ko: ["쇼와 레트로 산책", "카페 탐방", "역사 탐방", "사진 촬영"],
      ru: ["Прогулка в стиле Сёва", "Посещение кафе", "Знакомство с историей", "Фотография"],
      de: ["Showa-Retro-Spaziergang", "Café-Hopping", "Historische Erkundung", "Fotografie"],
    },
    mapQuery: "青梅駅 旧青梅街道 青梅市",
  },
  {
    id: "kamanofuchi",
    ja: "釜の淵公園",
    en: "Kamanofuchi Park",
    vi: "Công viên Kamanofuchi",
    zh: "釜之渊公园",
    ko: "카마노후치 공원",
    ru: "Парк Каманофути",
    de: "Kamanofuchi-Park",
    area: {
      ja: "青梅市",
      en: "Ome City",
      vi: "Thành phố Ome",
      zh: "青梅市",
      ko: "오메시",
      ru: "Город О메",
      de: "Stadt Ome",
    },
    image: images.destinations.kamanofuchi,
    description: {
      ja: "多摩川のゆったりとした流れに沿って広がる緑豊かな公園です。広々とした芝生広場や水遊びができる河原があり、四季を通じて憩いの場として親しまれています。",
      en: "A lush green park situated along a gentle bend of the Tama River. Featuring open lawn areas and a riverbank popular for water activities, it is loved as a relaxing spot for visitors throughout the seasons.",
      vi: "Công viên xanh mát nằm trải dài dọc theo dòng chảy hiền hòa của sông Tama. Nơi đây sở hữu bãi cỏ rộng lớn và bờ sông thích hợp để lội nước, là điểm dừng chân nghỉ ngơi lý tưởng của người dân và du khách quanh năm.",
      zh: "一座沿着多摩川舒缓水流延伸的绿意盎然的公园。拥有广阔的草坪广场和适合戏水的河滩，四季皆是深受人们喜爱的休闲栖息之地。",
      ko: "다마강의 완만한 흐름을 따라 펼쳐진 녹음 짙은 공원입니다. 넓은 잔디 광장과 물놀이를 즐길 수 있는 강변이 있어, 사계절 내내 편안한 휴식처로 사랑받고 있습니다.",
      ru: "Утопающий в зелени парк, расположенный вдоль плавного течения реки Тама. Просторные лужайки и берег реки, подходящий для отдыха у воды, делают его محبوبным местoм для отдыха в любое время года.",
      de: "Ein grüner Park an einer sanften Schleife des Tama-Flusses. Mit seinen weiten Rasenflächen und dem Flussufer für Wasseraktivitäten ist er das ganze Jahr über als Ort der Entspannung beliebt.",
    },
    season: {
      ja: "春〜秋",
      en: "Spring to autumn",
      vi: "Xuân đến thu",
      zh: "春季至秋季",
      ko: "봄~가을",
      ru: "С весны по осень",
      de: "Frühling bis Herbst",
    },
    experience: {
      ja: "川辺で休む",
      en: "Riverside rest",
      vi: "Thư giãn bên dòng sông",
      zh: "河畔栖息",
      ko: "강변에서의 휴식",
      ru: "Отдых у реки",
      de: "Entspannung am Flussufer",
    },
    activities: {
      ja: ["川沿いの散策", "ピクニック", "水遊び", "撮影"],
      en: ["Riverside walking", "Picnic", "Water play", "Photography"],
      vi: ["Đi dạo ven sông", "Dã ngoại", "Vui chơi dưới nước", "Chụp ảnh"],
      zh: ["沿河散步", "野餐", "戏水", "摄影"],
      ko: ["강변 산책", "피크닉", "물놀이", "사진 촬영"],
      ru: ["Прогулка вдоль реки", "Пикник", "Игры у воды", "Фотография"],
      de: ["Spaziergang am Fluss", "Picknick", "Wasserspaß", "Fotografie"],
    },
    mapQuery: "釜の淵公園 青梅市 東京都",
  },
  {
    id: "shiofune",
    ja: "塩船観音寺",
    en: "Shiofune Kannon-ji",
    vi: "Chùa Shiofune Kannon-ji",
    zh: "盐船观音寺",
    ko: "시오후네 관음사",
    ru: "Храм Сиофунэ Каннон-дзи",
    de: "Shiofune Kannon-ji Tempel",
    area: {
      ja: "青梅市",
      en: "Ome City",
      vi: "Thành phố Ome",
      zh: "青梅市",
      ko: "오메시",
      ru: "Город Оме",
      de: "Stadt Ome",
    },
    image: images.destinations.shiofune,
    description: {
      ja: "周囲を小高い丘に囲まれたすり鉢状の境内に佇む歴史ある古刹です。春には斜面一面に鮮やかなツツジが咲き誇り、まるで絨毯のように美しい絶景を楽しめます。",
      en: "A historic ancient temple nestled within a unique bowl-shaped valley surrounded by gentle hills. In spring, vibrant azaleas bloom across the hillside slopes, offering a breathtaking landscape reminiscent of a colorful floral carpet.",
      vi: "Ngôi chùa cổ kính nằm gọn trong khu khuôn viên hình lòng chảo độc đáo được bao bọc bởi những ngọn đồi thấp. Vào mùa xuân, hoa đỗ quyên nở rộ rực rỡ khắp các sườn đồi, tạo nên khung cảnh tuyệt đẹp tựa như một tấm thảm hoa khổng lồ.",
      zh: "坐落于环山包围的碗状谷地中的一座历史悠久的古寺。每当春季，满山坡的杜鹃花竞相绽放，如同一块色彩斑斓的鲜花地毯，景致令人惊叹。",
      ko: "낮은 언덕으로 둘러싸인 분지 형태의 경내에 자리한 역사 깊은 사찰입니다. 봄이 되면 비탈면 가득 화려한 철쭉이 만발하여 마치 융단을 펼쳐 놓은 듯 아름다운 절경을 감상할 수 있습니다.",
      ru: "Исторический древний храм, расположенный в уникальной долине в форме чаши, окруженной невысокими холмами. Весной склоны холмов покрываются ярким ковром из цветущих азалий.",
      de: "Ein historischer alter Tempel in einem einzigartigen kesselförmigen Tal, umgeben von sanften Hügeln. Im Frühling blühen leuchtende Azaleen an den Hängen und bieten eine atemberaubende Landschaft wie ein bunter Blumentppich.",
    },
    season: {
      ja: "春の終わり",
      en: "Late spring",
      vi: "Cuối xuân",
      zh: "晚春",
      ko: "늦봄",
      ru: "Поздняя весна",
      de: "Spätfrühling",
    },
    experience: {
      ja: "参拝と花",
      en: "Temple & flowers",
      vi: "Viếng chùa & ngắm hoa",
      zh: "古寺参拜与赏花",
      ko: "사찰 참배와 꽃 감상",
      ru: "Храм и цветы",
      de: "Tempelbesuch & Blumen",
    },
    activities: {
      ja: ["参拝", "ツツジ鑑賞", "歴史探訪", "撮影"],
      en: ["Temple visit", "Azalea viewing", "History exploration", "Photography"],
      vi: ["Viếng chùa", "Ngắm hoa đỗ quyên", "Tìm hiểu lịch sử", "Chụp ảnh"],
      zh: ["参拜古寺", "观赏杜鹃花", "历史探秘", "摄影"],
      ko: ["사찰 참배", "철쭉 감상", "역사 탐방", "사진 촬영"],
      ru: ["Посещение храма", "Любование азалиями", "Знакомство с историей", "Фотография"],
      de: ["Tempelbesuch", "Azaleenblüte genießen", "Historische Erkundung", "Fotografie"],
    },
    mapQuery: "塩船観音寺 青梅市 東京都",
  },
  {
    id: "akigawa",
    ja: "秋川渓谷",
    en: "Akigawa Valley",
    vi: "Thung lũng Akigawa",
    zh: "秋川溪谷",
    ko: "아키가와 계곡",
    ru: "Долина Акигава",
    de: "Akigawa-Tal",
    area: {
      ja: "あきる野市",
      en: "Akiruno City",
      vi: "Thành phố Akiruno",
      zh: "秋留野市",
      ko: "아키루노시",
      ru: "Город Акируно",
      de: "Stadt Akiruno",
    },
    image: images.destinations.akigawa,
    description: {
      ja: "澄み切った清流と豊かな自然に囲まれた東京都あきる野市の美しい渓谷です。夏場のアクティビティやバーベキューをはじめ、四季折々の絶景を楽しめる癒やしのスポットとして人気を集めています。",
      en: "A beautiful gorge in Akiruno City, Tokyo, surrounded by crystal-clear streams and lush nature. It is a popular relaxing destination where visitors can enjoy seasonal scenery as well as summer river activities and barbecues.",
      vi: "Thung lũng tuyệt đẹp ở thành phố Akiruno, Tokyo, được bao quanh bởi những dòng suối trong vắt và thiên nhiên trù phú. Đây là điểm đến thư giãn nổi tiếng, nơi du khách có thể tận hưởng cảnh sắc bốn mùa cũng như các hoạt động vui chơi dưới nước và tiệc nướng BBQ vào mùa hè.",
      zh: "位于东京都秋留野市的绝美溪谷，被清澈的溪流与丰富的自然景观所环抱。作为一处治愈系胜地，这里不仅可以体验夏日的水上活动与烧烤，还能欣赏到四季交替的绝美风光，深受人们喜爱。",
      ko: "수정처럼 맑은 청류와 풍부한 자연에 둘러싸인 도쿄도 아키루노시의 아름다운 계곡입니다. 여름철 물놀이와 바비큐는 물론 사계절의 절경을 즐길 수 있는 힐링 명소로 큰 인기를 끌고 있습니다.",
      ru: "Живописное ущелье в городе Акируно (Токио), окруженное кристально чистыми ручьями и пышной природой. Это популярное место для отдыха, где посетители могут насладиться сезонными пейзажами, а также летними развлечениями на реке и барбекю.",
      de: "Eine malerische Schlucht in der Stadt Akiruno, Tokio, umgeben von kristallklaren Bächen und üppiger Natur. Es ist ein beliebtes Erholungsziel, an dem Besucher sowohl die saisonale Landschaft als auch sommerliche Flussaktivitäten und Grillfeste (BBQ) genießen können.",
    },
    season: {
      ja: "夏",
      en: "Summer",
      vi: "Mùa hè",
      zh: "夏季",
      ko: "여름",
      ru: "Лето",
      de: "Sommer",
    },
    experience: {
      ja: "川遊び・川辺の食事",
      en: "River play & riverside dining",
      vi: "Vui chơi & ăn uống bên sông",
      zh: "戏水・河畔用餐",
      ko: "물놀이 & 강변 식사",
      ru: "Игры у реки и обед на свежем воздухе",
      de: "Aktivitäten am Fluss & Essen am Ufer",
    },
    activities: {
      ja: ["川のアクティビティ", "バーベキュー", "四季の絶景を楽しむ", "撮影"],
      en: ["River activities", "Barbecue", "Seasonal sightseeing", "Photography"],
      vi: ["Hoạt động dưới nước", "Tiệc nướng BBQ", "Ngắm cảnh bốn mùa", "Chụp ảnh"],
      zh: ["水上活动", "户外烧烤", "观赏四季美景", "摄影"],
      ko: ["강 액티비티", "바비큐", "사계절 절경 감상", "사진 촬영"],
      ru: ["Активный отдых на реке", "Барбекю", "Сезонные пейзажи", "Фотография"],
      de: ["Flussaktivitäten", "Grillen (BBQ)", "Saisonale Landschaft genießen", "Fotografie"],
    },
    mapQuery: "秋川渓谷 あきる野市 東京都",
  },
  {
    id: "hossawa",
    ja: "払沢の滝",
    en: "Hossawa Falls",
    vi: "Thác Hossawa",
    zh: "拂泽瀑布",
    ko: "호사 와 폭포",
    ru: "Водопад Хоссава",
    de: "Hossawa-Wasserfall",
    area: {
      ja: "檜原村",
      en: "Hinohara Village",
      vi: "Làng Hinohara",
      zh: "桧原村",
      ko: "히노하라촌",
      ru: "Деревня Хинохара",
      de: "Dorf Hinohara",
    },
    image: images.destinations.hossawa,
    description: {
      ja: "払沢の滝は、「日本の滝百選」にも選ばれている東京都檜原村の美しい名瀑です。豊かな森の奥深くに位置し、夏でも涼しい風が吹き抜ける神秘的な癒やしのスポットとして親しまれています。",
      en: "Hossawa Falls is a beautiful waterfall in Hinohara Village, Tokyo, selected as one of Japan's Top 100 Waterfalls. Located deep within a lush forest, it is loved as a mystical and relaxing spot where cool breezes blow even in summer.",
      vi: "Thác Hossawa là ngọn thác danh tiếng tuyệt đẹp thuộc làng Hinohara, Tokyo, vinh dự nằm trong danh sách 「Top 100 thác nước đẹp nhất Nhật Bản」. Nằm sâu giữa khu rừng trù phú, nơi đây được yêu thích như một điểm dừng chân huyền bí mang lại cảm giác thư thái với làn gió mát rượi ngay cả vào mùa hè.",
      zh: "拂泽瀑布是位于东京都桧原村的著名瀑布，入选了“日本百大瀑布”之一。它坐落于茂密森林深处，即使在盛夏也有凉爽的微风吹拂，作为一处充满神秘色彩的治愈胜地而广受欢迎。",
      ko: "호사와 폭포는 '일본 100대 폭포'에도 선정된 도쿄도 히노하라촌의 아름다운 명폭입니다. 울창한 숲속 깊은 곳에 위치해 있어 한여름에도 시원한 바람이 불어오는 신비롭고 편안한 힐링 명소로 많은 사랑을 받고 있습니다.",
      ru: "Водопад Хоссава — живописный водопад в деревне Хинохара (Токио), входящий в список «100 лучших водопадов Японии». Расположенный в глубине густого леса, он известен как мистическое и успокаивающее место, где даже летом дует прохладный бриз.",
      de: "Der Hossawa-Wasserfall ist ein wunderschöner Wasserfall im Dorf Hinohara, Tokio, der zu den „100 schönsten Wasserfällen Japans“ zählt. Tief in einem üppigen Wald gelegen, ist er als mystischer und beruhigender Ort beliebt, an dem selbst im Sommer eine kühle Brise weht.",
    },
    season: {
      ja: "通年",
      en: "All year",
      vi: "Quanh năm",
      zh: "全年",
      ko: "연중무휴",
      ru: "Круглый год",
      de: "Ganzjährig",
    },
    experience: {
      ja: "気軽な滝さんぽ",
      en: "Easy walk to the falls",
      vi: "Tản bộ nhẹ nhàng đến thác",
      zh: "轻松的瀑布漫步",
      ko: "가벼운 폭포 산책",
      ru: "Легкая прогулка к водопаду",
      de: "Leichter Spaziergang zum Wasserfall",
    },
    activities: {
      ja: ["滝を眺める", "森歩き", "自然観察", "撮影"],
      en: ["Waterfall sightseeing", "Forest walking", "Nature observation", "Photography"],
      vi: ["Ngắm cảnh thác nước", "Đi bộ trong rừng", "Quan sát thiên nhiên", "Chụp ảnh"],
      zh: ["观赏瀑布", "森林散步", "观察自然", "摄影"],
      ko: ["폭포 감상", "숲길 산책", "자연 관찰", "사진 촬영"],
      ru: ["Любование водопадом", "Прогулка по лесу", "Наблюдение за природой", "Фотография"],
      de: ["Wasserfall besichtigen", "Waldspaziergang", "Naturbeobachtung", "Fotografie"],
    },
    mapQuery: "払沢の滝 檜原村 東京都",
  },
  {
    id: "okutama-lake",
    ja: "奥多摩湖",
    en: "Lake Okutama",
    vi: "Hồ Okutama",
    zh: "奥多摩湖",
    ko: "오쿠타마호",
    ru: "Озеро Окутама",
    de: "Okutama-See",
    area: {
      ja: "奥多摩町",
      en: "Okutama Town",
      vi: "Thị trấn Okutama",
      zh: "奥多摩町",
      ko: "오쿠타마정",
      ru: "Поселок Окутама",
      de: "Gemeinde Okutama",
    },
    image: images.destinations.okutamaLake,
    description: {
      ja: "森に囲まれた大きな貯水湖。湖畔の道や展望地、遊歩道が整備されています。",
      en: "A large reservoir surrounded by forested mountains, with lakeside roads, viewpoints and walking paths.",
      vi: "Hồ chứa nước lớn được bao bọc bởi những dãy núi phủ đầy rừng xanh, có tuyến đường ven hồ, điểm ngắm cảnh và đường tản bộ rộng rãi.",
      zh: "被群山与森林环抱的巨大人工湖。沿着湖畔设有完善的步道、观景台与散步径。",
      ko: "울창한 숲으로 둘러싸인 거대한 인공호수. 호수 주변으로 산책로와 전망대, 도로가 잘 조성되어 있습니다.",
      ru: "Большое водохранилище, окруженное лесистыми горами, с прибрежными дорогами, смотровыми площадками и тропами.",
      de: "Ein großer Stausee, umgeben von bewaldeten Bergen, mit Uferstraßen, Aussichtspunkten und Wanderwegen.",
    },
    season: {
      ja: "春・秋",
      en: "Spring & autumn",
      vi: "Mùa xuân & mùa thu",
      zh: "春季与秋季",
      ko: "봄・가을",
      ru: "Весна и осень",
      de: "Frühling & Herbst",
    },
    experience: {
      ja: "湖畔さんぽ・眺望",
      en: "Lakeside walks & views",
      vi: "Dạo hồ & thưởng ngoạn cảnh sắc",
      zh: "湖畔漫步与景观",
      ko: "호수변 산책 & 경치 감상",
      ru: "Прогулки у озера и панорамы",
      de: "Spaziergänge am See & Aussicht",
    },
    activities: {
      ja: ["湖畔の散策", "撮影", "季節の風景を楽しむ"],
      en: ["Lakeside walking", "Photography", "Seasonal sightseeing"],
      vi: ["Dạo quanh hồ", "Chụp ảnh", "Ngắm cảnh sắc theo mùa"],
      zh: ["湖畔散步", "摄影", "欣赏自然美景"],
      ko: ["호반 산책", "사진 촬영", "계절 풍경 감상"],
      ru: ["Прогулка у озера", "Фотография", "Сезонный туризм"],
      de: ["Uferwandern", "Fotografie", "Saisonales Sightseeing"],
    },
    mapQuery: "奥多摩湖 奥多摩町 東京都",
  },
  {
    id: "ogochi-dam",
    ja: "小河内ダム",
    en: "Ogochi Dam",
    vi: "Đập Ogochi",
    zh: "小河内水坝",
    ko: "오고치 댐",
    ru: "Дамба Оготи",
    de: "Ogochi-Talsperre",
    area: {
      ja: "奥多摩町",
      en: "Okutama Town",
      vi: "Thị trấn Okutama",
      zh: "奥多摩町",
      ko: "오쿠타마정",
      ru: "Поселок Окутама",
      de: "Gemeinde Okutama",
    },
    image: images.destinations.ogochiDam,
    description: {
      ja: "奥多摩湖をつくる巨大なダム。堤の上を歩くと、谷の奥まで見渡せます。",
      en: "The great dam that holds back Lake Okutama, with a walkway across the top and long views down the valley.",
      vi: "Công trình đập nước đồ sộ tạo nên hồ Okutama. Đi bộ trên đỉnh đập cho phép bạn phóng tầm mắt nhìn sâu vào tận thung lũng.",
      zh: "造就了奥多摩湖的壮观水坝。走在巨大的坝体上方，可以远眺整个山谷的深处。",
      ko: "오쿠타마호를 형성하는 거대한 댐. 댐 정상부를 걸어가면 계곡 깊은 곳까지 탁 트인 전망을 볼 수 있습니다.",
      ru: "Огромная плотина, образующая озеро Окутама, с пешеходной дорожкой по верху и видом на всю долину.",
      de: "Die gewaltige Talsperre, die den Okutama-See anstaut, mit einem Fußweg auf der Krone und weitem Blick ins Tal.",
    },
    season: {
      ja: "通年",
      en: "All year",
      vi: "Quanh năm",
      zh: "全年",
      ko: "연중무휴",
      ru: "Круглый год",
      de: "Ganzjährig",
    },
    experience: {
      ja: "ダムと渓谷の眺め",
      en: "Dam & valley views",
      vi: "Ngắm cảnh đập nước & thung lũng",
      zh: "水坝与山谷全景",
      ko: "댐과 계곡의 전망",
      ru: "Виды на дамбу и долину",
      de: "Aussicht auf Talsperre & Tal",
    },
    activities: {
      ja: ["ダム見学", "散策", "風景の撮影"],
      en: ["Dam sightseeing", "Walking", "Landscape photography"],
      vi: ["Tham quan đập nước", "Tản bộ", "Chụp ảnh phong cảnh"],
      zh: ["参观水坝", "散步", "风景摄影"],
      ko: ["댐 견학", "산책", "풍경 사진 촬영"],
      ru: ["Осмотр дамбы", "Прогулка", "Пейзажная съемка"],
      de: ["Talsperrenbesichtigung", "Spazieren", "Landschaftsfotografie"],
    },
    mapQuery: "小河内ダム 奥多摩町 東京都",
  },
  {
    id: "nippara",
    ja: "日原鍾乳洞",
    en: "Nippara Limestone Cave",
    vi: "Hang động đá vôi Nippara",
    zh: "日原钟乳洞",
    ko: "니파라 종유동",
    ru: "Карстовая пещера Ниппара",
    de: "Nippara-Tropfsteinhöhle",
    area: {
      ja: "奥多摩町",
      en: "Okutama Town",
      vi: "Thị trấn Okutama",
      zh: "奥多摩町",
      ko: "오쿠타마정",
      ru: "Поселок Оку타ма",
      de: "Gemeinde Okutama",
    },
    image: images.destinations.nippara,
    description: {
      ja: "関東でも有数の規模を誇る鍾乳洞。内部は一年を通してひんやりとしています。",
      en: "One of the largest limestone caves in the Kanto region, cool year-round and lit along its interior passages.",
      vi: "Một trong những hang động đá vôi lớn nhất vùng Kanto, không khí bên trong luôn mát lạnh quanh năm với hệ thống chiếu sáng huyền ảo.",
      zh: "关东地区规模数一数二的钟乳洞，洞内全年维持着清凉的温度，设有彩灯照明。",
      ko: "간토 지방에서도 손꼽히는 규모의 종유동. 동굴 안은 1년 내내 서늘한 기온을 유지합니다.",
      ru: "Одна из крупнейших известняковых пещер в регионе Канто, где круглый год прохладно и есть подсветка маршрутов.",
      de: "Eine der größten Tropfsteinhöhlen der Kanto-Region, das ganze Jahr über kühl und im Inneren beleuchtet.",
    },
    season: {
      ja: "通年（夏は特に涼しい）",
      en: "All year (cool in summer)",
      vi: "Quanh năm (mùa hè cực kỳ mát mẻ)",
      zh: "全年（夏季尤为凉爽）",
      ko: "연중무휴 (여름에 특히 시원함)",
      ru: "Круглый год (особенно прохладно летом)",
      de: "Ganzjährig (im Sommer besonders kühl)",
    },
    experience: {
      ja: "洞窟見学",
      en: "Cave exploration",
      vi: "Khám phá hang động",
      zh: "溶洞探险",
      ko: "동굴 탐험",
      ru: "Исследование пещеры",
      de: "Höhlenerkundung",
    },
    activities: {
      ja: ["洞窟の探検", "鍾乳石を見る", "自然の撮影"],
      en: ["Cave exploration", "Viewing limestone formations", "Nature photography"],
      vi: ["Khám phá lòng hang", "Ngắm thạch nhũ", "Chụp ảnh thiên nhiên"],
      zh: ["洞穴探险", "观赏钟乳石", "自然摄影"],
      ko: ["동굴 탐험", "종유석 감상", "자연 사진 촬영"],
      ru: ["Исследование пещеры", "Осмотр stalactites", "Фотография природы"],
      de: ["Höhlentour", "Tropfsteine betrachten", "Naturfotografie"],
    },
    mapQuery: "日原鍾乳洞 奥多摩町 東京都",
  },
  {
    id: "shiromaru",
    ja: "白丸湖",
    en: "Shiromaru Lake",
    vi: "Hồ Shiromaru",
    zh: "白丸湖",
    ko: "시로마루호",
    ru: "Озеро Сиромару",
    de: "Shiromaru-See",
    area: {
      ja: "奥多摩町",
      en: "Okutama Town",
      vi: "Thị trấn Okutama",
      zh: "奥多摩町",
      ko: "오쿠타마정",
      ru: "Поселок Окутама",
      de: "Gemeinde Okutama",
    },
    image: images.destinations.shiromaru,
    description: {
      ja: "切り立った森にはさまれた、翡翠色の静かな水面。水上をゆっくり進む時間が流れます。",
      en: "A narrow, jade-green stretch of still water between steep forested walls — a quiet place for paddling.",
      vi: "Mặt nước tĩnh lặng màu ngọc bích nằm giữa hai vách núi phủ rừng dốc đứng — không gian lý tưởng để chèo thuyền thư thái.",
      zh: "夹在陡峭森林之间的翡翠色静谧湖面。适合划船，享受一段水上的悠闲时光。",
      ko: "가파른 숲 사이에 자리한 에메랄드빛의 정적에 싸인 호수. 수면 위를 천천히 저어가는 여유를 즐길 수 있습니다.",
      ru: "Узкая изумрудно-зеленая гладь воды между крутыми лесистыми склонами — тихое место для катания на лодках.",
      de: "Ein schmaler, smaragdgrüner Wasserspiegel zwischen steilen bewaldeten Wänden – ein ruhiger Ort zum Paddeln.",
    },
    season: {
      ja: "春〜秋",
      en: "Spring to autumn",
      vi: "Xuân đến thu",
      zh: "春季至秋季",
      ko: "봄~가을",
      ru: "С весны по осень",
      de: "Frühling bis Herbst",
    },
    experience: {
      ja: "静かな水上の時間",
      en: "Paddling on still water",
      vi: "Chèo thuyền trên mặt nước êm đềm",
      zh: "静谧的水上时光",
      ko: "잔잔한 수면 위에서의 시간",
      ru: "Плавание по спокойной воде",
      de: "Paddeln auf ruhigem Wasser",
    },
    activities: {
      ja: ["SUP", "カヤック", "カヌー", "自然の撮影"],
      en: ["SUP", "Kayaking", "Canoeing", "Nature photography"],
      vi: ["Chèo SUP", "Chèo thuyền Kayak", "Chèo thuyền Canoe", "Chụp ảnh thiên nhiên"],
      zh: ["桨板SUP", "皮划艇", "独木舟", "自然摄影"],
      ko: ["패들보드(SUP)", "카약", "카누", "자연 사진 촬영"],
      ru: ["Сапбординг", "Каякинг", "Каноэ", "Фотография природы"],
      de: ["Stand-Up-Paddeln", "Kajakfahren", "Kanufahren", "Naturfotografie"],
    },
    mapQuery: "白丸湖 奥多摩町 東京都",
  },
  {
    id: "tama-river",
    ja: "多摩川",
    en: "Tama River",
    vi: "Sông Tama",
    zh: "多摩川",
    ko: "다마강",
    ru: "Река Тама",
    de: "Tama-Fluss",
    area: {
      ja: "奥多摩町",
      en: "Okutama Town",
      vi: "Thị trấn Okutama",
      zh: "奥多摩町",
      ko: "오쿠타마정",
      ru: "Поселок Окутама",
      de: "Gemeinde Okutama",
    },
    image: images.destinations.tamaRiver,
    description: {
      ja: "多摩川は、山梨県から東京都や神奈川県を経て東京湾へと注ぐ、首都圏を代表する一級河川です。上流の奥多摩エリアでは豊かな自然や美しい渓谷美を楽しめるほか、流域全体で散策やウォータースポーツなど多くの人々に親しまれています。",
      en: "The Tama River is a major river representing the Tokyo metropolitan area, flowing from Yamanashi Prefecture through Tokyo and Kanagawa into Tokyo Bay. Visitors can enjoy rich nature and scenic gorges in the upstream Okutama area, while the river is widely popular throughout its basin for leisure walks and water sports.",
      vi: "Sông Tama là dòng sông cấp một tiêu biểu cho vùng thủ đô, chảy từ tỉnh Yamanashi qua Tokyo và Kanagawa rồi đổ ra vịnh Tokyo. Ở khu vực thượng nguồn Okutama, du khách có thể đắm mình vào thiên nhiên trù phú cùng vẻ đẹp kỳ vĩ của hẻm núi, đồng thời toàn bộ lưu vực sông cũng là điểm đến quen thuộc để dạo bộ và trải nghiệm các thể thao dưới nước.",
      zh: "多摩川是一条代表首都圈的一级河流，源自山梨县，途经东京都与神奈川县，最终注入东京湾。在位于上游的奥多摩地区，不仅可以欣赏到丰富的自然风光与壮丽的溪谷美景，整条流域也是人们散步、体验水上运动的热门去处。",
      ko: "다마강은 야마나시현에서 출발해 도쿄도와 가나가와현을 거쳐 도쿄만으로 흘러드는 수도권의 대표적인 1급 하천입니다. 상류인 오쿠타마 지역에서는 풍부한 자연과 아름다운 계곡미를 즐길 수 있으며, 유역 전체가 산책과 수상 스포츠 등으로 많은 이들에게 사랑받고 있습니다.",
      ru: "Река Тама — главная река столичного региона, текущая из префектуры Яманаси через Токио и Канагаву в Токийский залив. В верховьях, в районе Окутама, гости могут насладиться пышной природой и живописными ущельями, а весь бассейн реки популярен для прогулок и водного спорта.",
      de: "Der Tama-Fluss ist ein bedeutender Fluss in der Metropolregion Tokio, der von der Präfektur Yamanashi über Tokio und Kanagawa in die Bucht von Tokio fließt. Im oberhalb gelegenen Okutama-Gebiet können Besucher die reiche Natur und malerische Schluchten genießen, während der gesamte Flusslauf für Spaziergänge und Wassersport beliebt ist.",
    },
    season: {
      ja: "夏",
      en: "Summer",
      vi: "Mùa hè",
      zh: "夏季",
      ko: "여름",
      ru: "Лето",
      de: "Sommer",
    },
    experience: {
      ja: "川のアドベンチャー",
      en: "River adventure",
      vi: "Trải nghiệm phiêu lưu trên sông",
      zh: "河流探险",
      ko: "리버 어드벤처",
      ru: "Приключения на реке",
      de: "Abenteuer am Fluss",
    },
    activities: {
      ja: ["ラフティング", "キャニオニング", "川沿いの散策", "ウォータースポーツ"],
      en: ["Rafting", "Canyoning", "Riverside walking", "Water sports"],
      vi: ["Chèo thuyền vượt thác (Rafting)", "Chèo thuyền mạo hiểm (Canyoning)", "Dạo bộ ven sông", "Thể thao dưới nước"],
      zh: ["漂流", "溯溪", "沿河散步", "水上运动"],
      ko: ["래프팅", "캐니오닝", "강변 산책", "수상 스포츠"],
      ru: ["Рафтинг", "Каньонинг", "Прогулка вдоль реки", "Водный спорт"],
      de: ["Rafting", "Canyoning", "Spaziergang am Fluss", "Wassersport"],
    },
    mapQuery: "多摩川 奥多摩町 東京都",
  },
  {
    id: "hatonosu",
    ja: "鳩ノ巣渓谷",
    en: "Hatonosu Valley",
    vi: "Hẻm núi Hatonosu",
    zh: "鸠之巢溪谷",
    ko: "하토노스 계곡",
    ru: "Ущелье Ха토носу",
    de: "Hatonosu-Schlucht",
    area: {
      ja: "奥多摩町",
      en: "Okutama Town",
      vi: "Thị trấn Okutama",
      zh: "奥多摩町",
      ko: "오쿠타마정",
      ru: "Поселок Окутама",
      de: "Gemeinde Okutama",
    },
    image: images.destinations.hatonosu,
    description: {
      ja: "鳩ノ巣渓谷は、多摩川沿いに巨大な奇岩や巨岩がそびえ立つ奥多摩を代表する景勝地です。渓谷に架かる吊り橋や遊歩道からは、四季折々の美しい自然と雄大な渓流美を楽しむことができます。",
      en: "Hatonosu Valley is a scenic spot representing Okutama, where massive and uniquely shaped rocks rise along the Tama River. Visitors can enjoy majestic stream views and beautiful seasonal nature from the suspension bridge and walking trails spanning the gorge.",
      vi: "Hẻm núi Hatonosu là danh thắng tiêu biểu cho vùng Okutama với những khối đá khổng lồ và kỳ vĩ sừng sững dọc theo sông Tama. Từ chiếc cầu treo bắc qua hẻm núi hay các con đường tản bộ, du khách có thể ngắm nhìn trọn vẹn vẻ đẹp ngoạn mục của dòng dòng suối cùng thiên nhiên bốn mùa.",
      zh: "鸠之巢溪谷是代表奥多摩的著名胜地，沿多摩川耸立着巨大而奇特的岩石。站在横跨溪谷的吊桥和步道上，可以尽情欣赏四季交替的美丽自然风光与雄伟的溪流景观。",
      ko: "하토노스 계곡은 다마강을 따라 거대한 기암괴석이 솟아있는 오쿠타마의 대표적인 명승지입니다. 계곡에 걸려 있는 현수교와 산책로에서는 사계절의 아름다운 자연과 웅장한 계곡미를 즐길 수 있습니다.",
      ru: "Ущелье Ха토носу — знаменитое живописное место в Окутаме, где вдоль реки Тама возвышаются гигантские скалы необычной формы. С подвесного моста и пешеходных троп открываются величественные виды на реку и сезонную природу.",
      de: "Die Hatonosu-Schlucht ist ein repräsentatives Ausflugsziel in Okutama, wo sich gewaltige und skurrile Felsen entlang des Tama-Flusses erheben. Von der Hängebrücke und den Wanderwegen aus kann man grandiose Flusslandschaften und die Schönheit der Jahreszeiten genießen.",
    },
    season: {
      ja: "春〜秋",
      en: "Spring to autumn",
      vi: "Xuân đến thu",
      zh: "春季至秋季",
      ko: "봄~가을",
      ru: "С весны по осень",
      de: "Frühling bis Herbst",
    },
    experience: {
      ja: "渓谷の道を歩く",
      en: "Gorge trail walking",
      vi: "Tản bộ qua đường hẻm núi",
      zh: "漫步溪谷步道",
      ko: "계곡길 거닐기",
      ru: "Прогулка по тропе ущелья",
      de: "Wandern auf dem Schluchtenpfad",
    },
    activities: {
      ja: ["ハイキング", "吊り橋散策", "自然観察", "撮影"],
      en: ["Hiking", "Suspension bridge walking", "Nature observation", "Photography"],
      vi: ["Đi bộ đường dài", "Dạo bước trên cầu treo", "Quan sát thiên nhiên", "Chụp ảnh"],
      zh: ["徒步", "漫步吊桥", "观察自然", "摄影"],
      ko: ["하이킹", "현지 구름다리 산책", "자연 관찰", "사진 촬영"],
      ru: ["Пешие прогулки", "Прогулка по подвесному мосту", "Наблюдение за природой", "Фотография"],
      de: ["Wandern", "Hängebrücken-Spaziergang", "Naturbeobachtung", "Fotografie"],
    },
    mapQuery: "鳩ノ巣渓谷 奥多摩町 東京都",
  },
  {
    id: "hyakuhiro",
    ja: "百尋ノ滝",
    en: "Hyakuhiro Falls",
    vi: "Thác Hyakuhiro",
    zh: "百寻瀑布",
    ko: "하쿠히로 폭포",
    ru: "Водопад Хякухиро",
    de: "Hyakuhiro-Wasserfall",
    area: {
      ja: "奥多摩町",
      en: "Okutama Town",
      vi: "Thị trấn Okutama",
      zh: "奥多摩町",
      ko: "오쿠타마정",
      ru: "Поселок Окутама",
      de: "Gemeinde Okutama",
    },
    image: images.destinations.hyakuhiro,
    description: {
      ja: "百尋の滝は、東京都奥多摩町の川苔山登山ルート沿いに位置する落差約40メートルの壮大な滝です。深緑の森と澄んだ渓流に囲まれ、ダイナミックに流れ落ちる水しぶきと清涼感あふれる絶景を楽しむことができます。",
      en: "Hyakuhiro Falls is a magnificent waterfall with a drop of approximately 40 meters, located along the Mount Kawanori hiking trail in Okutama Town, Tokyo. Surrounded by lush forests and clear mountain streams, visitors can enjoy refreshing and dynamic views of the cascading water.",
      vi: "Thác Hyakuhiro là ngọn thác tráng lệ có độ cao khoảng 40 mét, nằm trên tuyến đường leo núi Mount Kawanori thuộc thị trấn Okutama, Tokyo. Được bao bọc bởi những cánh rừng xanh thẫm và dòng suối trong lành, du khách sẽ được tận hưởng khung cảnh tuyệt mỹ tràn đầy sức sống cùng bọt nước tung trắng xóa mát rượi.",
      zh: "百寻瀑布坐落于东京都奥多摩町的川苔山登山路线旁，落差约40米，极其壮观。瀑布被深绿色的森林与清澈的溪流所环抱，奔腾而下的水花与令人神清气爽的绝景相得益彰。",
      ko: "하쿠히로 폭포는 도쿄도 오쿠타마정의 가와노리산 등산 코스에 위치한 낙차 약 40미터의 웅장한 폭포입니다. 짙은 녹음의 숲과 맑은 계곡에 둘러싸여 힘차게 떨어지는 물보라와 청량감 넘치는 절경을 감상할 수 있습니다.",
      ru: "Водопад Хякухиро — величественный водопад высотой около 40 метров, расположенный вдоль маршрута восхождения на гору Каванори в Окутаме (Токио). Окруженный темно-зеленым лесом и чистым горным ручьем, он дарит прохладу и впечатляющие виды на падающие брызги воды.",
      de: "Der Hyakuhiro-Wasserfall ist ein spektakulärer Wasserfall mit einer Fallhöhe von ca. 40 Metern entlang des Wanderwegs zum Berg Kawanori in Okutama, Tokio. Umgeben von tiefgrünem Wald und klaren Gebirgsbächen genießen Besucher erfrischende und dynamische Anblicke des kaskadierenden Wassers.",
    },
    season: {
      ja: "初夏〜秋",
      en: "Late spring to autumn",
      vi: "Cuối xuân đến thu",
      zh: "晚春至秋季",
      ko: "늦봄~가을",
      ru: "С поздней весны по осень",
      de: "Spätfrühling bis Herbst",
    },
    experience: {
      ja: "滝をめざす山歩き",
      en: "Mountain trail to a waterfall",
      vi: "Leo núi chinh phục thác nước",
      zh: "通往瀑布的登山之旅",
      ko: "폭포를 향한 산행",
      ru: "Горная тропа к водопаду",
      de: "Bergwanderung zum Wasserfall",
    },
    activities: {
      ja: ["川苔山ハイキング", "滝を眺める", "森のトレッキング", "撮影"],
      en: ["Mt. Kawanori hiking", "Waterfall sightseeing", "Forest trekking", "Photography"],
      vi: ["Leo núi Kawanori", "Ngắm cảnh thác", "Trekking trong rừng", "Chụp ảnh"],
      zh: ["川苔山徒步", "观赏瀑布", "森林健行", "摄影"],
      ko: ["가와노리산 하이킹", "폭포 감상", "숲 트레킹", "사진 촬영"],
      ru: ["Поход на гору Каванори", "Любование водопадом", "Лесной треккинг", "Фотография"],
      de: ["Wanderung auf den Mt. Kawanori", "Wasserfall besichtigen", "Waldtrekking", "Fotografie"],
    },
    mapQuery: "百尋ノ滝 奥多摩町 東京都",
  },
  {
    id: "hikawa",
    ja: "氷川エリア",
    en: "Hikawa Area",
    vi: "Khu vực Hikawa",
    zh: "冰川地区",
    ko: "히카와 에리어",
    ru: "Район Хикава",
    de: "Hikawa-Gebiet",
    area: {
      ja: "奥多摩町",
      en: "Okutama Town",
      vi: "Thị trấn Okutama",
      zh: "奥多摩町",
      ko: "오쿠타마정",
      ru: "Поселок Окутама",
      de: "Gemeinde Okutama",
    },
    image: images.destinations.hikawa,
    description: {
      ja: "氷川エリアは、JR奥多摩駅を中心に広がる奥多摩観光の拠点となる地域です。美しい氷川渓谷をはじめ、キャンプ場や散策路、温泉などが集まっており、豊かな自然を満喫できます。",
      en: "The Hikawa area serves as the central sightseeing hub of Okutama, centered around JR Okutama Station. Home to the scenic Hikawa Gorge as well as campsites, walking trails, and hot springs, it offers visitors a wonderful place to fully enjoy rich nature.",
      vi: "Khu vực Hikawa là điểm xuất phát trung tâm cho các chuyến du lịch Okutama, nằm xoay quanh nhà ga JR Okutama. Nơi đây quy tụ nhiều điểm đến hấp dẫn như hẻm núi Hikawa xinh đẹp, bãi cắm trại, đường dạo bộ và suối nước nóng onsen, giúp du khách tận hưởng trọn vẹn vẻ đẹp thiên nhiên phong phú.",
      zh: "冰川地区是以JR奥多摩站为中心展开的奥多摩观光核心区域。这里汇聚了美丽的冰川溪谷、露营地、步道以及温泉，是完美体验丰富自然的绝佳去处。",
      ko: "히카와 에리어는 JR 오쿠타마역을 중심으로 펼쳐지는 오쿠타마 관광의 거점 지역입니다. 아름다운 히카와 계곡을 비롯해 캠핑장, 산책로, 온천 등이 모여 있어 풍부한 자연을 마음껏 만끽할 수 있습니다.",
      ru: "Район Хикава служит главным туристическим центром Окутамы вокруг станции JR Okutama. В нем расположены живописное ущелье Хикава, кемпинги, пешеходные тропы и термальные источники, предлагающие гости отличный отдых на природе.",
      de: "Das Hikawa-Gebiet dient als zentraler Knotenpunkt für Sightseeing in Okutama rund um den JR-Bahnhof Okutama. Es beherbergt die malerische Hikawa-Schlucht sowie Campingplätze, Wanderwege und heiße Quellen und bietet Besuchern die perfekte Möglichkeit, die Natur voll zu genießen.",
    },
    season: {
      ja: "通年",
      en: "All year",
      vi: "Quanh năm",
      zh: "全年",
      ko: "연중무휴",
      ru: "Круглый год",
      de: "Ganzjährig",
    },
    experience: {
      ja: "休息・食・温泉",
      en: "Rest, food & hot springs",
      vi: "Nghỉ ngơi, ẩm thực & tắm onsen",
      zh: "休息・美食・温泉",
      ko: "휴식・음식・온천",
      ru: "Отдых, еда и горячие источники",
      de: "Erholung, Essen & heiße Quellen",
    },
    activities: {
      ja: ["温泉でくつろぐ", "キャンプ", "氷川渓谷散策", "地元の食"],
      en: ["Hot spring relaxation", "Camping", "Hikawa Gorge walk", "Local food"],
      vi: ["Thư giãn tắm Onsen", "Cắm trại", "Dạo bộ hẻm núi Hikawa", "Thưởng thức món ăn địa phương"],
      zh: ["泡温泉放松", "露营", "冰川溪谷散步", "品尝本地美食"],
      ko: ["온천에서 휴식", "캠핑", "히카와 계곡 산책", "현지 음식 맛보기"],
      ru: ["Отдых в онсэне", "Кемпинг", "Прогулка по ущелью Хикава", "Местная кухня"],
      de: ["Entspannen in heißen Quellen", "Camping", "Spaziergang durch die Hikawa-Schlucht", "Lokale Küche"],
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
export interface ShopLink {
  name: { [key: string]: string };
  url: string;
}

export interface TasteItem {
  id: string;
  image: string;
  title: { [key: string]: string };
  area: { [key: string]: string };
  description: { [key: string]: string };
  shops: ShopLink[];
}

export const tasteOfNishiTamaData: TasteItem[] = [
  // CARD 1
  {
    id: "ume-plum-products",
    image:"/images.taste.umeProducts.jpeg",
    title: {
      ja: "梅・プラム製品",
      en: "Ume & plum products",
      vi: "Các sản phẩm từ Mơ",
      zh: "青梅与李子制品",
      ko: "매실 및 자두 제품",
      ru: "Продукты из уме и сливы",
      de: "Ume- & Pflaumenprodukte",
    },
    area: {
      ja: "青梅市エリア",
      en: "OME CITY AREA",
      vi: "THÀNH PHỐ OME",
      zh: "青梅市地区",
      ko: "오메시 에리어",
      ru: "РАЙОН ГОРОДА ОМЕ",
      de: "STADT OME GEBIET",
    },
    description: {
      ja: "青梅の丘陵地では古くから梅の栽培が行われています。シロップやジャム、伝統の銘菓「青梅せんべい」など、世代を超えて愛される素朴で甘酸っぱい味わいをお楽しみください。",
      en: "Plums have long been cultivated in the hills of Ome. Enjoy traditional local specialties like syrups, jams, and crispy 'Aome Senbei' crackers with their sweet, nostalgic plum blossom flavor.",
      vi: "Mơ đã được trồng từ lâu đời trên các sườn đồi ở Ome. Hãy thưởng thức các đặc sản địa phương từ quả mơ như siro mơ, mứt mơ hoặc món bánh gạo kẹo mơ 'Aome Senbei' (青梅せんべい) giòn rụm với hình dạng hoa mơ độc đáo, mang hương vị mộc mạc ngọt ngào lưu truyền qua nhiều thế hệ.",
      zh: "青梅市的山丘地区自古以来就盛产青梅。这里提供梅子糖浆、果酱以及外形独特的传统糕点“青梅仙贝”（青梅せんべい），酥脆酸甜，深受各代人喜爱。",
      ko: "오메의 언덕 지대에서는 옛날부터 매실 재배가 이루어져 왔습니다. 매실 시럽, 잼, 전통 과자인 '아오메 센베' 등 세대를 넘어 사랑받는 소박하고 달콤새콤한 풍미를 즐겨보세요.",
      ru: "В холмах Оме издавна выращивают сливу уме. Попробуйте сиропы, джемы и хрустящие печенья «Аомэ сэмбэй» в форме цветка сливы с их мягким сладковатым вкусом.",
      de: "In den Hügeln von Ome wird seit langem Ume angebaut. Genießen Sie lokale Spezialitäten wie Sirup, Marmelade oder die knusprigen 'Aome Senbei'-Kräcker mit süß-säuerlicher Note.",
    },
    shops: [
      {
        name: {
          ja: "たまてばこ（柳丸「青梅せんべい」取扱店）",
          en: "Tamatebako Shop (Official distributor of Yanagimaru Aome Senbei)",
          vi: "Cửa hàng Tamatebako (Nơi phân phối chính thức Aome Senbei - Yanagimaru)",
          zh: "Tamatebako 商店（柳丸“青梅仙贝”官方指定零售店）",
          ko: "타마테바코 (야나기마루 '아오메 센베' 공식 판매점)",
          ru: "Магазин Tamatebako (Дистрибьютор печенья Aome Senbei от Yanagimaru)",
          de: "Tamatebako Store (Offizieller Händler für Yanagimaru Aome Senbei)",
        },
        url: "https://www.google.com/maps/search/?api=1&query=%E7%8E%89%E6%89%8B%E7%AE%B1+%E7%91%9E%E7%A9%82%E7%94%BA",
      },
    ],
  },

  // CARD 2
  {
    id: "farm-vegetables-fruit",
    image: "/images.taste.farmVegetables.jpeg",
    title: {
      ja: "農園野菜＆果物",
      en: "Farm vegetables & fruit",
      vi: "Rau củ & Trái cây nông trại",
      zh: "农场蔬菜与水果",
      ko: "농장 채소 및 과일",
      ru: "Фермерские овощи и фрукты",
      de: "Hoffrische Оbѕt & Gemüse",
    },
    area: {
      ja: "瑞穂町・羽村市",
      en: "MIZUHO TOWN, HAMURA CITY",
      vi: "THỊ TRẤN MIZUHO & THÀNH PHỐ HAMURA",
      zh: "瑞穗町、羽村市",
      ko: "미즈호정, 하무라시",
      ru: "ПОСЕЛОК МИДЗУХО, ГОРОД ХАМУРА",
      de: "GEMEINDE MIZUHO, STADT HAMURA",
    },
    description: {
      ja: "東部の平坦地に広がる小さな農園では、みずみずしく安全な旬の有機野菜や果物が育てられています。シャキシャキのキャベツや新鮮なダイコンなど、採れたての美味しさをお届けします。",
      en: "Small farms across the flatter eastern areas supply an abundance of fresh, organic seasonal vegetables and fruits. Highlights include crisp cabbage and freshly harvested radishes directly from local fields.",
      vi: "Các nông trại nhỏ tại vùng đất bằng phẳng phía Đông cung cấp nguồn rau củ quả hữu cơ dồi dào và tươi ngon theo mùa. Nổi bật là các loại bắp cải giòn ngọt hay củ cải tươi mới được thu hoạch trực tiếp tại nông trại địa phương hàng ngày.",
      zh: "平坦的东部地区分布着许多小农场，提供丰富而新鲜的四季有机蔬菜和水果。其中，口感爽脆的甘蓝和刚采摘的白萝卜格外受欢迎。",
      ko: "동부의 평탄한 지역에 위치한 작은 농장에서는 신선하고 안전한 유기농 계절 채소와 과일을 공급합니다. 바삭한 양배추와 밭에서 막 수확한 무 등이 대표적입니다.",
      ru: "Небольшие фермы в равнинной восточной части поставляют богатый урожай органических сезонных овощей и фруктов: хрустящую капусту и свежий дайкон прямо с грядок.",
      de: "Kleine Bauernhöfe im flacheren Osten liefern reichlich frisches, biologisches Saisongemüse und Obst, darunter knackigen Kohl und frisch geernteten Rettich.",
    },
    shops: [
      {
        name: {
          ja: "たまてばこ（直売野菜入荷）",
          en: "Tamatebako Shop (Fresh local farm produce arrivals)",
          vi: "Cửa hàng Tamatebako (Nguồn rau củ sạch giao trực tiếp từ nông gia)",
          zh: "Tamatebako 商店（当地农家直供新鲜蔬菜）",
          ko: "타마테바코 (현지 농가 직송 채소 입고)",
          ru: "Магазин Tamatebako (Прямые поставки свежих овощей от фермеров)",
          de: "Tamatebako Store (Lokal angebautes frisches Gemüse)",
        },
        url: "https://www.google.com/maps/search/?api=1&query=%E7%8E%89%E6%89%8B%E7%AE%B1+%E7%91%9E%E7%A9%82%E7%94%BA",
      },
      {
        name: {
          ja: "麺旨一歩（キャベツラーメン）",
          en: "Menbaippo (Ramen with stir-fried local cabbage)",
          vi: "Quán Menbaippo (Ramen bắp cải xào miso địa phương)",
          zh: "Menbaippo 拉面店（鲜炒包菜味噌拉面）",
          ko: "멘바이뽀 (현지 양배추 라멘)",
          ru: "Раменная Menbaippo (Рамен со свежей жареной капустой)",
          de: "Menbaippo Ramen (Ramen mit gebratenem Kohl)",
        },
        url: "https://www.google.com/maps/search/?api=1&query=%E2%80%8B%E9%81%B0%E6%97%A8%E4%B8%80%E6%AD%A9+%E7%91%9E%E7%A9%82%E7%94%BA",
      },
    ],
  },

  // CARD 3
  {
    id: "river-mountain-foods",
    image: "/images.taste.riverMountainFoods.jpeg",
    title: {
      ja: "川と山の恵み",
      en: "River & mountain foods",
      vi: "Ẩm thực sông suối & núi rừng",
      zh: "山川野趣美食",
      ko: "강과 산의 먹거리",
      ru: "Дары рек и гор",
      de: "Fluss- & Bergspezialitäten",
    },
    area: {
      ja: "あきる野市・奥多摩町",
      en: "AKIRUNO CITY, OKUTAMA TOWN",
      vi: "THÀNH PHỐ AKIRUNO & THỊ TRẤN OKUTAMA",
      zh: "秋留野市、奥多摩町",
      ko: "아키루노시, 오쿠타마정",
      ru: "ГОРОД АКИРУНО, ПОСЕЛОК ОКУТАМА",
      de: "STADT AKIRUNO, GEMEINDE OKUTAMA",
    },
    description: {
      ja: "清らかな山からの冷水が育む野趣あふれる郷土料理。塩焼きで味わう川魚、香ばしい手打ちそば、ジビエ料理や釜飯など、西多摩の豊かな自然の恵みを心ゆくまでご堪能ください。",
      en: "Pure, cold mountain water feeds the local palate — salt-grilled river fish, aromatic handmade soba, deer meat dishes, and fragrant kamameshi rice pots filled with mountain ingredients.",
      vi: "Dòng nước suối lạnh tinh khiết từ thung lũng núi Nishitama nuôi dưỡng những hương vị tinh túy của ẩm thực dã ngoại bản địa — từ cá hồi sông nướng muối giòn rụm, thịt nai rừng xào gừng siêu mềm, cho đến các loại mì soba mộc mạc và cơm niêu cá sông dẻo thơm.",
      zh: "来自于山谷的冰凉清泉孕育了纯正的山野美食——香酥的盐烤溪鱼、纯正的手打荞麦面、鲜嫩的野味鹿肉以及浓郁的野山菌釜饭。",
      ko: "맑은 맑은 산수에서 자란 서도쿄의 향토 요리. 소금구이 은어와 ヤマメ(산천어), 메밀국수, 사슴 고기 요리 및 가마메시(솥밥) 등 자연의 풍요로움을 맛보세요.",
      ru: "Чистая горная вода формирует вкусы местной кухни: речная рыба на углях с солью, домашняя лапша соба, блюда из оленины и ароматный рис камамеси.",
      de: "Kaltes Gebirgswasser prägt die regionale Küche – salzgegrillter Flussfisch, handgemachte Soba, Hirschfleisch und duftender Kamameshi-Reis.",
    },
    shops: [
      {
        name: {
          ja: "ちわき（鮎釜飯・山菜料理）",
          en: "Chiwaki Restaurant (Ayu fish Kamameshi & wild herbs)",
          vi: "Nhà hàng Chiwaki (Chuyên cơm niêu đất cá Ayu & rau rừng)",
          zh: "Chiwaki 餐厅（香鱼釜饭与山菜料理）",
          ko: "치와키 (은어 솥밥 및 산채 요리 전문점)",
          ru: "Ресторан Chiwaki (Камамеси с рыбой аю и горными травами)",
          de: "Chiwaki Restaurant (Ayu Kamameshi & Wildkräuter)",
        },
        url: "https://www.google.com/maps/search/?api=1&query=%E3%81%A1%E3%82%8F%E3%81%8D+%E奥多摩町",
      },
      {
        name: {
          ja: "炉ばた あかべこ（ヤマメ塩焼き）",
          en: "Robata Akabeko (Charcoal salt-grilled trout)",
          vi: "Robata Akabeko (Cá hồi vân nướng muối than hồng)",
          zh: "Robata Akabeko 炭火烧（炭火盐烤山女鱼）",
          ko: "로바타 아카베코 (산천어 숯불 소금구이)",
          ru: "Ресторан Robata Akabeko (Рыба на углях)",
          de: "Robata Akabeko (Holzkohle-gegrillte Forelle)",
        },
        url: "https://www.google.com/maps/search/?api=1&query=%E7%82%89%E3%81%B0%E3%81%9F+%E3%81%82%E3%81%8B%E3%81%B9%E3%81%93+%E3%81%82%E3%81%8D%E3%82%8B%E9%87%8E%E5%B8%82",
      },
    ],
  },

  // CARD 4
  {
    id: "regional-sweets",
    image: "/images.taste.regionalSweets.jpeg",
    title: {
      ja: "銘菓・和洋菓子",
      en: "Regional sweets",
      vi: "Bánh ngọt địa phương",
      zh: "特色糕点与甜品",
      ko: "지역 디저트 & 정과",
      ru: "Местные сладости",
      de: "Regionale Süßwaren",
    },
    area: {
      ja: "多摩地域および周辺",
      en: "TAMA REGION & SURROUNDINGS",
      vi: "KHU VỰC TAMA & LÂN CẬN",
      zh: "多摩地区及周边",
      ko: "다마 지역 및 주변",
      ru: "РЕГИОН ТАМА И ОКРЕСТНОСТИ",
      de: "REGION TAMA & UMGEBUNG",
    },
    description: {
      ja: "西多摩の自然や地域の文化から生まれた、素朴で味わい深い手作りのお菓子。奥多摩名物の「へそまんじゅう」や、瑞穂町で昔から親しまれている「ゆでまんじゅう」など、それぞれの土地ならではの味を楽しめます。",
      en: "Discover handmade sweets inspired by the nature and local culture of Nishi-Tama. From Okutama's famous Heso Manju to the traditional Yude Manju of Mizuho, each treat offers a taste of the region's unique character and traditions.",
      vi: "Khám phá những món bánh thủ công mang đậm nét thiên nhiên và văn hóa địa phương của Nishi-Tama. Từ Heso Manju nổi tiếng của Okutama đến Yude Manju truyền thống của Mizuho, mỗi món bánh đều mang đến một hương vị đặc trưng của vùng đất này.",
      zh: "探索源自西多摩自然与地方文化的手工甜点。从奥多摩著名的「肚脐馒头」到瑞穗町传统的「水煮馒头」，每一种甜点都展现着西多摩独特的风土与传统。",
      ko: "니시타마의 자연과 지역 문화에서 탄생한 소박하고 정겨운 수제 디저트를 만나보세요. 오쿠타마의 명물 ‘헤소만주’부터 미즈호마치의 전통 과자인 ‘유데만주’까지, 각각의 디저트에서 니시타마만의 맛과 문화를 느낄 수 있습니다.",
      ru: "Познакомьтесь с домашними сладостями Ниси-Тамы, вдохновлёнными природой и местной культурой. От знаменитого хэсо-мандзю из Окутамы до традиционного юдэ-мандзю из Мидзухо — каждое лакомство передаёт уникальный вкус и традиции этого региона.",
      de: "Entdecken Sie handgemachte Süßigkeiten, die von der Natur und der lokalen Kultur von Nishi-Tama inspiriert sind. Vom berühmten Heso Manju aus Okutama bis zum traditionellen Yude Manju aus Mizuho – jede Spezialität vermittelt den besonderen Geschmack und die Tradition der Region.",
          },

    shops: [
      {
        name: {
          ja: "たまてばこ（無添加コガネイチーズケーキ取扱店）",
          en: "Tamatebako Shop (Exclusive supplier of additive-free Koganei Cheesecake)",
          vi: "Cửa hàng Tamatebako (Độc quyền bánh phô mai Koganei Cheesecake)",
          zh: "Tamatebako 商店（无添加小金井芝士蛋糕指定专卖）",
          ko: "타마테바코 (무첨가 코가네이 치즈케이크 판매점)",
          ru: "Магазин Tamatebako (Эксклюзивный чизкейк Koganei)",
          de: "Tamatebako Store (Koganei Cheesecake ohne Zusatzstoffe)",
        },
        url: "https://www.google.com/maps/search/?api=1&query=%E7%8E%89%E6%89%8B%E7%AE%B1+%E7%91%9E%E7%A9%82%E7%94%BA",
      },
      {
        name: {
          ja: "山田屋菓子店（箱根ケ崎駅前・ゆで饅頭）",
          en: "Yamadaya Confectionery (Hakonegasaki station — Yude Manju)",
          vi: "Hiệu bánh thủ công Yamadaya (Cạnh ga Hakonegasaki - Yude Manju)",
          zh: "Yamadaya 和糕点店（箱根之崎站前·茹馒头）",
          ko: "야마다야 과자점 (하코네가사키역 앞 - 유데 만주)",
          ru: "Кондитерская Yamadaya (Около станции Хаконэгасаки — Юдэ мандзю)",
          de: "Konditorei Yamadaya (Bahnhof Hakonegasaki – Yude Manju)",
        },
        url: "https://www.google.com/maps/search/?api=1&query=%E5%B1%B1%E7%94%B0%E5%B1%8B%E8%8F%93%E5%AD%90%E5%BA%97+%E7%AE%B1%E根ケ崎",
      },
    ],
  },

  // CARD 5
  {
    id: "local-drinks",
    image: "/images.taste.localDrinks.jpeg",
    title: {
      ja: "地酒＆クラフトビール",
      en: "Local drinks",
      vi: "Thức uống bản địa",
      zh: "当地佳酿与精酿啤酒",
      ko: "전통주 & 크래프트 맥주",
      ru: "Местные напитки",
      de: "Lokale Getränke",
    },
    area: {
      ja: "酒蔵・ブルワリーエリア",
      en: "LOCAL BREWERY AREA",
      vi: "VÙNG SẢN XUẤT SAKE & BIA ĐỊA PHƯƠNG",
      zh: "酒造与精酿酿酒厂区",
      ko: "양조장 & 브루어리 에리어",
      ru: "РАЙОН ПИВОВАРЕН И САКЕВАРОН",
      de: "BRAUEREIEN GEBIET",
    },
    description: {
      ja: "多摩川の伏流水から生まれる至高の銘酒。1935年創業の歴史ある酒蔵の日本酒「多満自慢」や、本格派クラフトビール「TOKYO BLUES」など、澄んだ水が織りなす芳醇な味わいをお楽しみください。",
      en: "Nishi Tama boasts historic sake breweries operating since 1935 and craft beer makers. The pure underground water of the Tama River is the soul behind iconic brews like TOKYO BLUES and Tamajiman sake.",
      vi: "Nishitama tự hào sở hữu các nhà máy sản xuất sake cổ kính hoạt động từ năm 1935 và các xưởng bia thủ công trứ danh. Dòng nước ngầm trong vắt của sông Tama là linh hồn tạo nên hương vị đậm đà thanh mát của dòng bia thủ công TOKYO BLUES hay rượu sake Tamajiman (多満自慢) lừng danh.",
      zh: "西多摩地区拥有自1935年起便建厂的古老酒造和精酿啤酒厂。多摩川清澈的地下地下水是酿造名酒“多满自慢”（Tamajiman）和精酿啤酒“TOKYO BLUES”的灵魂所在。",
      ko: "1935년부터 이어져 온 역사 깊은 양조장과 크래프트 맥주 브루어리가 자리해 있습니다. 다마강의 깨끗한 지하수는 수제 맥주 'TOKYO BLUES'와 전통 명주 '다마지만(多満自慢)'의 풍미를 완성합니다.",
      ru: "Ниситама гордится пивоварнями и старинными заводами саке, работающими с 1935 года. Чистейшие подземные воды реки Тама дают жизни пиву TOKYO BLUES и саке Tamajiman.",
      de: "Nishi Tama beherbergt historische Sake-Brauereien seit 1935 und Craft-Beer-Brauer. Das reine Grundwasser des Tama-Flusses ist die Seele von TOKYO BLUES Bier und Tamajiman Sake.",
    },
    shops: [
      {
        name: {
          ja: "石川酒造（TOKYO BLUES・多満自慢）",
          en: "Ishikawa Brewery (TOKYO BLUES & Tamajiman Sake)",
          vi: "Nhà máy rượu Ishikawa Shuzo (Sake Tamajiman & Bia TOKYO BLUES)",
          zh: "石川酒造（TOKYO BLUES 精酿 & 多满自慢清酒）",
          ko: "이시카와 양조 (TOKYO BLUES & 다마지만 사케)",
          ru: "Пивоварня Ishikawa (Пиво TOKYO BLUES и Саке Tamajiman)",
          de: "Ishikawa Brauerei (TOKYO BLUES & Tamajiman Sake)",
        },
        url: "https://www.google.com/maps/search/?api=1&query=%E7%9F%B3%E5%B7%9D%E9%85%92%E9%80%A0+%E7%A6%8F%E7%94%9F%E5%B8%82",
      },
    ],
  },

  // CARD 6
  {
    id: "seasonal-specialties",
    image: "/images.taste.seasonalSpecialties.jpeg",
    title: {
      ja: "季節の味覚",
      en: "Seasonal specialties",
      vi: "Đặc sản theo mùa",
      zh: "时令风味",
      ko: "계절의 별미",
      ru: "Сезонные блюда",
      de: "Saisonale Spezialitäten",
    },
    area: {
      ja: "檜原村・山間部",
      en: "HINOHARA MOUNTAINS & VALLEYS",
      vi: "THUNG LŨNG & NÚI ĐỒI HINOHARA",
      zh: "桧原村与山区",
      ko: "히노하라촌 및 산간 지역",
      ru: "ГОРЫ И ДОЛИНЫ ХИНОХАРА",
      de: "BERGE & TÄLER VON HINOHARA",
    },
    description: {
      ja: "四季の移ろいがもたらす山里の旬。サクサクの舞茸天ぷら、日本の滝百選「払沢の滝」の澄んだ水で作る絶品豆腐、風味豊かな石臼挽き手打ちそばなど、心温まる味わいです。",
      en: "Each season in the valley brings unique delicacies — crispy wild Maitake mushroom tempura, silky tofu crafted from the pristine waters near Hossawa Falls, and chilled whole-grain soba noodles.",
      vi: "Mỗi mùa tại thung lũng Nishitama mang lại các tinh túy ẩm thực riêng — như món nấm Maitake rừng chiên bột Tempura giòn tan vàng óng, đậu phụ thanh mát làm từ dòng nước suối tinh khiết chảy ra từ thác nước Hossawa, hay mì soba lạnh nguyên cám mộc mạc thơm lừng hương vị núi rừng.",
      zh: "桧原村山谷的四季带来独特的珍馐美食——金黄酥脆的野舞菇天妇罗、汲取“拂泽瀑布”清泉制作的滑嫩豆腐，以及满载山野香气的冷打全麦荞麦面。",
      ko: "계절에 따라 변하는 히노하라 산골짜기의 특산품. 바삭하게 튀겨낸 잎새버섯(마이타케) 튀김, 홋사와 폭포의 맑은 물로 만든 두부, 향긋한 맷돌 메밀국수를 만나보세요.",
      ru: "Каждый сезон в долине привносит свои изыски: хрустящую темпуру из грибов майтаке, нежный тофу на воде из водопада Хоссава и холодную домашнюю собу.",
      de: "Jede Jahreszeit im Tal bringt köstliche Spezialitäten – knuspriges Maitake-Pilz-Tempura, seidigen Tofu aus dem Wasser des Hossawa-Wasserfalls und kühle Soba-Nudeln.",
    },
    shops: [
      {
        name: {
          ja: "四季の里（払沢の滝・手打ちうどん＆豆腐）",
          en: "Shiki-no-Sato (Handmade Udon & Hossawa Tofu)",
          vi: "Nhà hàng Shiki-no-sato (Udon dẻo dai & Đậu phụ thác Hossawa)",
          zh: "Shiki-no-sato 餐厅（手打乌冬面与拂泽豆腐）",
          ko: "시키노사토 (수제 우동 및 홋사와 두부)",
          ru: "Ресторан Shiki-no-Sato (Домашний удон и тофу Хоссава)",
          de: "Shiki-no-Sato (Handgemachte Udon & Hossawa Tofu)",
        },
        url: "https://www.google.com/maps/search/?api=1&query=%E5%9B%9B%E5%AD%A3%E3%81%AE%E9%87%8C+%E6%AA%90%E5%8E%9F%E6%9D%91",
      },
      {
        name: {
          ja: "玄庵 檜原（舞茸天ぷら・手打ちそば）",
          en: "Gen-an Hinohara (Handcrafted Soba & Maitake Tempura)",
          vi: "Mì soba Gen-an Hinohara (Soba thủ công & Tempura nấm Maitake)",
          zh: "Gen-an 荞麦面 桧原店（舞菇天妇罗与手工荞麦面）",
          ko: "겐안 히노하라 (잎새버섯 튀김 & 수제 메밀국수)",
          ru: "Ресторан Gen-an Hinohara (Соба и темпура из майтаке)",
          de: "Gen-an Hinohara (Handgemachte Soba & Maitake Tempura)",
        },
        url: "https://www.google.com/maps/search/?api=1&query=%E7%8E%84%E5%BA%B5+%E6%AA%90%E5%8E%9F%E6%9D%91",
      },
    ],
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
  title: {
    en: "Nature & Healing",
    ja: "自然と癒し",
    vi: "Thiên nhiên & Chữa lành",
    zh: "自然与疗愈",
    ko: "자연과 힐링",
    ru: "Природа и отдых",
    de: "Natur & Erholung",
  },
  image: images.experiences.nature,
  description: {
    en: "Walk through cedar forests, follow clear mountain streams, and slow down among the peaceful landscapes of Nishi Tama.",
    ja: "杉林を歩き、清らかな沢の流れに耳を傾けながら、西多摩の静かな自然の中でゆっくりと過ごします。",
    vi: "Tản bộ giữa những khu rừng tuyết tùng, lắng nghe tiếng suối trong và tận hưởng nhịp sống chậm giữa thiên nhiên yên bình của Nishi Tama.",
    zh: "漫步杉树林间，聆听清澈溪流，在西多摩宁静的自然环境中放慢脚步。",
    ko: "삼나무 숲을 걷고 맑은 계곡물 소리를 들으며 니시타마의 고요한 자연 속에서 천천히 쉬어보세요.",
    ru: "Прогуляйтесь по кедровым лесам, послушайте журчание горных ручьёв и отдохните среди спокойной природы Ниси-Тамы.",
    de: "Spaziere durch Zedernwälder, lausche klaren Bergbächen und genieße die ruhige Natur von Nishi Tama.",
  },
  items: {
    en: [
      "Mt. Mitake hiking",
      "Forest and stream walks",
      "Waterfall and rock garden trails",
      "Riverside relaxation",
    ],
    ja: [
      "御岳山ハイキング",
      "森と渓流の散策",
      "滝とロックガーデンめぐり",
      "川辺でのんびり過ごす",
    ],
    vi: [
      "Trekking núi Mitake",
      "Đi bộ giữa rừng và suối",
      "Khám phá thác nước và Rock Garden",
      "Thư giãn bên dòng sông",
    ],
    zh: [
      "御岳山徒步",
      "森林与溪流散步",
      "瀑布与岩石花园探访",
      "河畔休憩",
    ],
    ko: [
      "미타케산 하이킹",
      "숲과 계곡 산책",
      "폭포와 록가든 탐방",
      "강변에서 휴식",
    ],
    ru: [
      "Поход на гору Митакэ",
      "Прогулки по лесам и у ручьёв",
      "Тропы к водопадам и Рок-Гарден",
      "Отдых у реки",
    ],
    de: [
      "Wanderung am Berg Mitake",
      "Spaziergänge durch Wald und an Bächen",
      "Wasserfälle und Rock Garden",
      "Entspannen am Fluss",
    ],
  },
},
{
  id: "culture",
  title: {
    en: "Japanese Culture",
    ja: "日本の文化",
    vi: "Văn hóa Nhật Bản",
    zh: "日本文化",
    ko: "일본 문화",
    ru: "Японская культура",
    de: "Japanische Kultur",
  },
  image: images.experiences.culture,
  description: {
    en: "Discover mountain worship, historic shrines, traditional architecture and local culture shaped by centuries of life in the Tama region.",
    ja: "山岳信仰、歴史ある神社、伝統建築など、多摩地域で受け継がれてきた文化にふれてみましょう。",
    vi: "Khám phá tín ngưỡng núi rừng, đền thờ lịch sử, kiến trúc truyền thống và văn hóa được gìn giữ qua nhiều thế hệ ở vùng Tama.",
    zh: "探索山岳信仰、历史悠久的神社、传统建筑，以及多摩地区世代传承的地方文化。",
    ko: "산악 신앙과 역사 깊은 신사, 전통 건축 등 다마 지역에서 이어져 온 일본 문화를 만나보세요.",
    ru: "Познакомьтесь с горными верованиями, старинными святилищами, традиционной архитектурой и культурой региона Тама.",
    de: "Entdecke Bergreligion, historische Schreine, traditionelle Architektur und die über Jahrhunderte gewachsene Kultur der Tama-Region.",
  },
  items: {
    en: [
      "Musashi Mitake Shrine",
      "Mountain worship traditions",
      "Historic architecture",
      "Local museums and cultural sites",
    ],
    ja: [
      "武蔵御嶽神社",
      "山岳信仰の文化",
      "歴史ある建築",
      "地域の資料館・文化施設",
    ],
    vi: [
      "Đền Musashi Mitake",
      "Văn hóa tín ngưỡng núi",
      "Kiến trúc lịch sử",
      "Bảo tàng và điểm văn hóa địa phương",
    ],
    zh: [
      "武藏御岳神社",
      "山岳信仰文化",
      "历史建筑",
      "地方博物馆与文化设施",
    ],
    ko: [
      "무사시 미타케 신사",
      "산악 신앙 문화",
      "역사적인 건축물",
      "지역 박물관과 문화 시설",
    ],
    ru: [
      "Святилище Мусаси-Митакэ",
      "Традиции горного поклонения",
      "Историческая архитектура",
      "Местные музеи и культурные объекты",
    ],
    de: [
      "Musashi Mitake-Schrein",
      "Traditionen der Bergverehrung",
      "Historische Architektur",
      "Lokale Museen und Kulturstätten",
    ],
  },
},
{
  id: "food",
  title: {
    en: "Local Food",
    ja: "地元の食",
    vi: "Ẩm thực địa phương",
    zh: "当地美食",
    ko: "지역 음식",
    ru: "Местная кухня",
    de: "Lokale Küche",
  },
  image: images.experiences.food,
  description: {
    en: "Taste the flavors of the mountains and rivers through local soba, river fish, seasonal produce and sake made in the Nishi Tama area.",
    ja: "蕎麦、川魚、季節の食材、地酒など、西多摩の山と川が育んだ味を楽しみましょう。",
    vi: "Thưởng thức hương vị của núi rừng và sông suối qua soba, cá sông, nông sản theo mùa và rượu sake địa phương.",
    zh: "品尝荞麦面、河鱼、时令食材和当地清酒，感受西多摩山川孕育的味道。",
    ko: "소바, 민물고기, 제철 식재료와 지역 사케를 통해 니시타마의 산과 강이 만든 맛을 즐겨보세요.",
    ru: "Попробуйте собу, речную рыбу, сезонные продукты и местное сакэ — вкусы, созданные природой Ниси-Тамы.",
    de: "Probiere Soba, Flussfisch, saisonale Produkte und regionalen Sake – typische Aromen aus den Bergen und Flüssen von Nishi Tama.",
  },
  items: {
    en: [
      "Local soba",
      "River fish dishes",
      "Seasonal farm produce",
      "Local sake and plum products",
    ],
    ja: [
      "地元の蕎麦",
      "川魚料理",
      "季節の農産物",
      "地酒と梅の加工品",
    ],
    vi: [
      "Soba địa phương",
      "Các món cá sông",
      "Nông sản theo mùa",
      "Sake và sản phẩm từ ume",
    ],
    zh: [
      "当地荞麦面",
      "河鱼料理",
      "时令农产品",
      "当地清酒与梅制品",
    ],
    ko: [
      "지역 소바",
      "민물고기 요리",
      "제철 농산물",
      "지역 사케와 매실 제품",
    ],
    ru: [
      "Местная соба",
      "Блюда из речной рыбы",
      "Сезонные фермерские продукты",
      "Местное сакэ и продукты из сливы умэ",
    ],
    de: [
      "Lokale Soba",
      "Gerichte mit Flussfisch",
      "Saisonale Produkte",
      "Regionaler Sake und Ume-Produkte",
    ],
  },
},
{
  id: "outdoor",
  title: {
    en: "Outdoor Activities",
    ja: "アウトドア",
    vi: "Hoạt động ngoài trời",
    zh: "户外活动",
    ko: "야외 활동",
    ru: "Активный отдых",
    de: "Outdoor-Aktivitäten",
  },
  image: images.experiences.outdoor,
  description: {
    en: "Explore mountain trails, river valleys and forest landscapes through hiking, trekking, cycling and water activities.",
    ja: "山の道、渓谷、森林を舞台に、ハイキングや登山、サイクリング、川のアクティビティを楽しめます。",
    vi: "Khám phá đường núi, thung lũng và rừng xanh qua trekking, đạp xe và các hoạt động dưới nước.",
    zh: "在山间小径、河谷与森林中徒步、登山、骑行，并体验丰富的水上活动。",
    ko: "산길과 계곡, 숲을 따라 하이킹과 트레킹, 사이클링, 강에서의 액티비티를 즐겨보세요.",
    ru: "Исследуйте горные тропы, речные долины и леса во время пеших походов, велопрогулок и водных активностей.",
    de: "Erkunde Bergpfade, Flusstäler und Wälder beim Wandern, Trekking, Radfahren und bei Aktivitäten am Wasser.",
  },
  items: {
    en: [
      "Hiking and trekking",
      "River activities",
      "Cycling",
      "Camping and BBQ",
    ],
    ja: [
      "ハイキング・登山",
      "川のアクティビティ",
      "サイクリング",
      "キャンプ・BBQ",
    ],
    vi: [
      "Đi bộ đường dài và trekking",
      "Hoạt động trên sông",
      "Đạp xe",
      "Cắm trại và BBQ",
    ],
    zh: [
      "徒步与登山",
      "河流活动",
      "骑行",
      "露营与BBQ",
    ],
    ko: [
      "하이킹과 트레킹",
      "강에서 즐기는 액티비티",
      "사이클링",
      "캠핑과 BBQ",
    ],
    ru: [
      "Пешие походы и треккинг",
      "Активности на реке",
      "Велопрогулки",
      "Кемпинг и барбекю",
    ],
    de: [
      "Wandern und Trekking",
      "Aktivitäten am Fluss",
      "Radfahren",
      "Camping und BBQ",
    ],
  },
},
{
  id: "seasonal",
  title: {
    en: "Seasonal Experiences",
    ja: "季節の体験",
    vi: "Trải nghiệm theo mùa",
    zh: "四季体验",
    ko: "계절 체험",
    ru: "Сезонные впечатления",
    de: "Erlebnisse zu jeder Jahreszeit",
  },
  image: images.experiences.seasonal,
  description: {
    en: "Every season brings a different side of Nishi Tama, from plum blossoms and fresh greenery to autumn colors and crisp winter landscapes.",
    ja: "梅の花や新緑、紅葉、冬の澄んだ空気。季節ごとに違う西多摩の表情を楽しめます。",
    vi: "Mỗi mùa mang đến một vẻ đẹp khác nhau của Nishi Tama: hoa ume, cây xanh mùa xuân, lá đỏ mùa thu và không khí trong lành mùa đông.",
    zh: "梅花、新绿、红叶与清澈冬日空气，让西多摩在四季中展现不同的魅力。",
    ko: "매화와 신록, 단풍, 맑고 차가운 겨울 공기까지 계절마다 다른 니시타마의 매력을 만날 수 있습니다.",
    ru: "Цветущая умэ, свежая зелень, осенняя листва и прозрачный зимний воздух — Ниси-Тама каждый сезон выглядит по-новому.",
    de: "Ume-Blüten, frisches Grün, Herbstlaub und klare Winterluft zeigen Nishi Tama zu jeder Jahreszeit von einer anderen Seite.",
  },
  items: {
    en: [
      "Plum blossoms at Yoshino Baigo",
      "Fresh greenery",
      "Autumn foliage",
      "Clear winter landscapes",
    ],
    ja: [
      "吉野梅郷の梅",
      "新緑",
      "紅葉",
      "冬の澄んだ景色",
    ],
    vi: [
      "Hoa ume tại Yoshino Baigo",
      "Cây xanh mùa xuân",
      "Lá đỏ mùa thu",
      "Cảnh sắc mùa đông trong trẻo",
    ],
    zh: [
      "吉野梅乡赏梅",
      "春日新绿",
      "秋季红叶",
      "冬日清澈景色",
    ],
    ko: [
      "요시노 바이코의 매화",
      "봄의 신록",
      "가을 단풍",
      "맑은 겨울 풍경",
    ],
    ru: [
      "Цветение умэ в Ёсино-Байго",
      "Весенняя зелень",
      "Осенняя листва",
      "Прозрачные зимние пейзажи",
    ],
    de: [
      "Ume-Blüte in Yoshino Baigo",
      "Frisches Frühlingsgrün",
      "Herbstlaub",
      "Klare Winterlandschaften",
    ],
  },
},
{
  id: "showa-retro",
  title: {
    en: "Showa Retro Experience",
    ja: "昭和レトロ体験",
    vi: "Trải nghiệm Showa Retro",
    zh: "昭和复古体验",
    ko: "쇼와 레트로 체험",
    ru: "Атмосфера эпохи Сёва",
    de: "Showa-Retro-Erlebnis",
  },
  image: images.experiences.showa,
  description: {
    en: "Step into Ome's nostalgic streets, where hand-painted movie signs, old shops and retro townscapes bring the atmosphere of Showa-era Japan back to life.",
    ja: "手描きの映画看板、昔ながらの商店、懐かしい街並み。青梅の通りを歩きながら、昭和の空気を感じてみましょう。",
    vi: "Bước vào những con phố hoài niệm của Ome, nơi biển hiệu phim vẽ tay, cửa hàng xưa và phố cổ tái hiện không khí Nhật Bản thời Showa.",
    zh: "走进青梅怀旧街区，在手绘电影招牌、老店与复古街景中感受昭和时代的日本。",
    ko: "손으로 그린 영화 간판과 오래된 상점, 복고풍 거리 풍경이 남아 있는 오메에서 쇼와 시대의 분위기를 느껴보세요.",
    ru: "Прогуляйтесь по ностальгическим улицам Оме, где старые магазины, ретро-вывески и расписные киноплакаты напоминают о Японии эпохи Сёва.",
    de: "Spaziere durch die nostalgischen Straßen von Ome mit alten Geschäften, handgemalten Kinoplakaten und dem Flair des Showa-Zeitalters.",
  },
  items: {
    en: [
      "Retro streets of Ome",
      "Showa-era movie signs",
      "Traditional shops and cafes",
      "Retro photography",
      "Local everyday culture",
    ],
    ja: [
      "青梅のレトロな街並み",
      "昭和の映画看板",
      "昔ながらの商店とカフェ",
      "レトロな街歩き・撮影",
      "地域の日常文化",
    ],
    vi: [
      "Phố cổ mang nét retro của Ome",
      "Biển hiệu phim thời Showa",
      "Cửa hàng và quán cà phê lâu đời",
      "Chụp ảnh phong cách retro",
      "Văn hóa đời sống địa phương",
    ],
    zh: [
      "青梅复古街景",
      "昭和时代电影招牌",
      "传统商店与咖啡馆",
      "复古街拍",
      "当地日常文化",
    ],
    ko: [
      "오메의 복고풍 거리",
      "쇼와 시대 영화 간판",
      "전통 상점과 카페",
      "레트로 거리 사진",
      "지역의 일상 문화",
    ],
    ru: [
      "Ретро-улицы Оме",
      "Киноплакаты эпохи Сёва",
      "Старинные магазины и кафе",
      "Ретро-фотография",
      "Повседневная местная культура",
    ],
    de: [
      "Retro-Straßen von Ome",
      "Kinoplakate aus der Showa-Zeit",
      "Traditionelle Geschäfte und Cafés",
      "Retro-Fotografie",
      "Lokale Alltagskultur",
    ],
  },
},
{
  id: "samurai",
  title: {
    en: "Samurai Heritage & Traditional Culture",
    ja: "侍の歴史と伝統文化",
    vi: "Di sản Samurai & Văn hóa truyền thống",
    zh: "武士历史与传统文化",
    ko: "사무라이 역사와 전통문화",
    ru: "Наследие самураев и традиционная культура",
    de: "Samurai-Erbe & traditionelle Kultur",
  },
  image: images.experiences.samurai,
  description: {
    en: "Discover the samurai heritage and traditional culture preserved in Nishi Tama through historic shrines, traditional clothing, artifacts and stories from the Edo period.",
    ja: "歴史ある神社や伝統衣装、文化財などを通して、西多摩に残る侍の歴史と日本の伝統文化にふれてみましょう。",
    vi: "Khám phá dấu ấn Samurai và văn hóa truyền thống tại Nishi Tama qua các đền thờ lịch sử, trang phục truyền thống, hiện vật và câu chuyện từ thời Edo.",
    zh: "通过历史悠久的神社、传统服饰、文化遗产与江户时代的故事，了解西多摩保存至今的武士历史与传统文化。",
    ko: "역사 깊은 신사와 전통 의상, 문화재, 에도 시대의 이야기를 통해 니시타마에 남아 있는 사무라이의 역사와 일본 전통문화를 만나보세요.",
    ru: "Познакомьтесь с наследием самураев и традиционной культурой Ниси-Тамы через исторические святилища, традиционную одежду и артефакты эпохи Эдо.",
    de: "Entdecke das Samurai-Erbe und die traditionelle Kultur von Nishi Tama anhand historischer Schreine, traditioneller Kleidung und Relikten aus der Edo-Zeit.",
  },
  items: {
    en: [
      "Musashi Mitake Shrine",
      "Samurai-era artifacts",
      "Traditional Japanese clothing",
      "Edo-period history",
      "Local cultural heritage",
    ],
    ja: [
      "武蔵御嶽神社",
      "侍にゆかりのある文化財",
      "日本の伝統衣装",
      "江戸時代の歴史",
      "地域に受け継がれる文化遺産",
    ],
    vi: [
      "Đền Musashi Mitake",
      "Hiện vật gắn với Samurai",
      "Trang phục truyền thống Nhật Bản",
      "Lịch sử thời Edo",
      "Di sản văn hóa địa phương",
    ],
    zh: [
      "武藏御岳神社",
      "与武士相关的文化遗产",
      "日本传统服饰",
      "江户时代历史",
      "地方文化遗产",
    ],
    ko: [
      "무사시 미타케 신사",
      "사무라이 관련 문화재",
      "일본 전통 의상",
      "에도 시대의 역사",
      "지역 문화유산",
    ],
    ru: [
      "Святилище Мусаси-Митакэ",
      "Артефакты, связанные с самураями",
      "Традиционная японская одежда",
      "История периода Эдо",
      "Местное культурное наследие",
    ],
    de: [
      "Musashi Mitake-Schrein",
      "Kulturgüter mit Samurai-Bezug",
      "Traditionelle japanische Kleidung",
      "Geschichte der Edo-Zeit",
      "Lokales Kulturerbe",
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
  location: {
    en: "Ome City",
    ja: "青梅市",
    vi: "Thành phố Ome",
    zh: "青梅市",
    ko: "오메시",
    de: "Stadt Ome",
    ru: "город Оме",
  },
  image: images.events.featured,
  description: {
    en: "A summer-long journey through Ome in search of its many shades of blue, from the Tama River and mountain landscapes to the evening sky.",
    ja: "多摩川や山々、夕暮れの空など、青梅に広がるさまざまな「青」をめぐる夏の旅。",
    vi: "Một hành trình mùa hè khám phá những sắc xanh khác nhau của Ome, từ sông Tama, núi rừng cho đến bầu trời lúc hoàng hôn.",
    zh: "一场贯穿整个夏季的青梅之旅，寻找多摩川、山林以及夕阳天空中丰富多彩的蓝色。",
    ko: "다마강과 산의 풍경, 저녁 하늘까지 오메 곳곳에 펼쳐진 다양한 ‘푸름’을 찾아 떠나는 여름 여행입니다.",
    de: "Eine sommerliche Reise durch Ome auf der Suche nach seinen vielen Blautönen – vom Tama-Fluss und den Bergen bis zum Abendhimmel.",
    ru: "Летнее путешествие по Оме в поисках его многочисленных оттенков синего — от реки Тама и горных пейзажей до вечернего неба.",
  },
};

export const augustEvents: EventItem[] = [
  {
    id: "ome-fireworks",
    date: "8/1",
    ja: "青梅市納涼花火大会",
    en: "Ome Summer Fireworks Festival",
    location: {
      en: "Ome City",
      ja: "青梅市",
      vi: "Thành phố Ome",
      zh: "青梅市",
      ko: "오메시",
      de: "Stadt Ome",
      ru: "город Оме",
    },
    image: images.events.omeFireworks,
    description: {
      en: "A long-loved summer tradition in Ome, featuring spectacular fireworks launched from Nagayama Park Grounds, including special displays and a breathtaking finale.",
      ja: "永山公園グラウンドから打ち上げられる迫力ある花火が夜空を彩る、青梅の夏の風物詩。仕掛け花火や圧巻のフィナーレも見どころです。",
      vi: "Lễ hội pháo hoa mùa hè lâu đời ở Ome, với những màn pháo hoa ngoạn mục từ sân Nagayama Park và màn kết thúc đầy ấn tượng.",
      zh: "青梅深受喜爱的夏日传统活动。在永山公园运动场上空绽放的精彩烟花，包括特别烟火和震撼的压轴表演，令人难忘。",
      ko: "오메에서 오랫동안 사랑받아 온 여름 전통 행사입니다. 나가야마 공원 운동장에서 펼쳐지는 화려한 불꽃과 특별한 연출, 장엄한 피날레를 즐길 수 있습니다.",
      de: "Eine lang gepflegte Sommertradition in Ome mit spektakulären Feuerwerken vom Gelände des Nagayama-Parks, besonderen Effekten und einem beeindruckenden Finale.",
      ru: "Любимая летняя традиция Оме. Над площадкой парка Нагайама вспыхивают впечатляющие фейерверки, включая специальные пиротехнические шоу и грандиозный финал.",
    },
  },

  {
    id: "akiruno-summer",
    date: "8/1",
    ja: "あきる野夏まつり",
    en: "Akiruno Summer Festival",
    location: {
      en: "Akiruno City",
      ja: "あきる野市",
      vi: "Thành phố Akiruno",
      zh: "秋留野市",
      ko: "아키루노시",
      de: "Stadt Akiruno",
      ru: "город Акируно",
    },
    image: images.events.akirunoSummer,
    description: {
      en: "A lively summer festival around Akigawa Station, featuring energetic mikoshi processions, dance parades, food stalls and local performances.",
      ja: "秋川駅前通りを中心に開催される夏まつり。威勢の良い神輿や踊りのパレード、露店、地域のパフォーマンスで街が賑わいます。",
      vi: "Lễ hội mùa hè sôi động quanh ga Akigawa, với đoàn rước mikoshi, diễu hành múa, các gian hàng ẩm thực và những màn biểu diễn địa phương.",
      zh: "以秋川站前通为中心举办的热闹夏日祭典。神轿巡游、舞蹈游行、美食摊位和地方表演让整座城市充满活力。",
      ko: "아키가와역 앞을 중심으로 열리는 활기찬 여름 축제입니다. 미코시 행렬과 춤 퍼레이드, 포장마차와 지역 공연으로 거리가 활기를 띱니다.",
      de: "Ein lebhaftes Sommerfest rund um den Bahnhof Akigawa mit Mikoshi-Prozessionen, Tanzparaden, Essensständen und lokalen Darbietungen.",
      ru: "Яркий летний фестиваль в районе станции Акигава с шествиями микоси, танцевальными парадами, уличной едой и местными выступлениями.",
    },
  },

  {
    id: "fussa-tanabata",
    date: "8/7 – 9",
    ja: "福生七夕まつり",
    en: "Fussa Tanabata Festival",
    location: {
      en: "Fussa City",
      ja: "福生市",
      vi: "Thành phố Fussa",
      zh: "福生市",
      ko: "후사시",
      de: "Stadt Fussa",
      ru: "город Фусса",
    },
    image: images.events.fussaTanabata,
    description: {
      en: "One of the Nishitama area's major summer events, with colorful Tanabata decorations, lively parades and numerous food stalls around Fussa Station.",
      ja: "福生駅周辺を中心に開催される西多摩を代表する夏のイベント。色鮮やかな七夕飾り、華やかなパレードや模擬店で街が賑わいます。",
      vi: "Một trong những sự kiện mùa hè lớn của khu vực Nishi Tama, với những trang trí Tanabata rực rỡ, diễu hành sôi động và nhiều gian hàng ẩm thực quanh ga Fussa.",
      zh: "西多摩地区具有代表性的夏季活动之一。福生站周边装饰着色彩缤纷的七夕装饰，并有热闹的游行和众多美食摊位。",
      ko: "니시타마 지역을 대표하는 여름 행사 중 하나입니다. 후사역 주변을 화려한 다나바타 장식과 퍼레이드, 다양한 먹거리 노점이 가득 채웁니다.",
      de: "Eines der großen Sommerereignisse in Nishitama mit farbenfrohen Tanabata-Dekorationen, festlichen Paraden und zahlreichen Essensständen rund um den Bahnhof Fussa.",
      ru: "Один из главных летних фестивалей района Ниситама. У станции Фусса улицы украшают красочные декорации Танабата, проходят парады и работают многочисленные киоски с едой.",
    },
  },

  {
    id: "hinode-shishimai",
    date: "8/8",
    ja: "玉の内風祭・獅子舞",
    en: "Tamanochi Kazematsuri Shishimai",
    location: {
      en: "Hinode Town",
      ja: "日の出町",
      vi: "Thị trấn Hinode",
      zh: "日之出町",
      ko: "히노데마치",
      de: "Stadt Hinode",
      ru: "город Хинодэ",
    },
    image: images.events.hinodeShishimai,
    description: {
      en: "A traditional festival and lion dance passed down through generations in Hinode, performed to pray for protection from storms and a good harvest.",
      ja: "日の出町に古くから伝わる伝統行事。風水害からの無事と五穀豊穣を願い、獅子舞が奉納されます。",
      vi: "Lễ hội và múa lân truyền thống được lưu truyền qua nhiều thế hệ ở Hinode, nhằm cầu mong tránh thiên tai và một mùa màng bội thu.",
      zh: "日之出町世代相传的传统祭典与狮子舞。人们通过舞狮祈求免受风雨灾害，并祈愿五谷丰登。",
      ko: "히노데에서 여러 세대에 걸쳐 전해 내려오는 전통 축제와 사자춤입니다. 풍수해로부터의 평안과 풍년을 기원하며 사자춤을 봉납합니다.",
      de: "Ein traditionelles Fest mit Löwentanz, das in Hinode seit Generationen überliefert wird. Es wird für Schutz vor Unwettern und eine reiche Ernte aufgeführt.",
      ru: "Традиционный фестиваль и танец льва, который передается из поколения в поколение в Хинодэ. Его исполняют с молитвами о защите от стихийных бедствий и хорошем урожае.",
    },
  },

  {
    id: "okutama-fireworks",
    date: "8/8",
    ja: "奥多摩納涼花火大会",
    en: "Okutama Summer Fireworks Festival",
    location: {
      en: "Okutama Town",
      ja: "奥多摩町",
      vi: "Thị trấn Okutama",
      zh: "奥多摩町",
      ko: "오쿠타마마치",
      de: "Stadt Okutama",
      ru: "город Окутама",
    },
    image: images.events.okutamaFireworks,
    description: {
      en: "A spectacular mountain fireworks festival launched from near Mount Atago, with the sound of fireworks echoing through the surrounding valleys.",
      ja: "愛宕山の山頂付近から打ち上げられる奥多摩の夏の花火。山々に囲まれた渓谷に音が響き、夜空と自然を彩ります。",
      vi: "Lễ hội pháo hoa mùa hè đặc sắc của Okutama, được bắn từ khu vực gần núi Atago, với âm thanh vang vọng giữa những thung lũng bao quanh.",
      zh: "奥多摩著名的夏日烟花大会，烟花从爱宕山山顶附近升空，巨响回荡在群山环绕的峡谷之间，点亮夜空与自然。",
      ko: "아타고산 정상 부근에서 펼쳐지는 오쿠타마의 여름 불꽃축제입니다. 산으로 둘러싸인 계곡에 불꽃 소리가 울려 퍼지며 밤하늘과 자연을 아름답게 수놓습니다.",
      de: "Ein spektakuläres Bergfeuerwerk in Okutama, das in der Nähe des Gipfels des Atago-Berges gestartet wird. Die Geräusche hallen durch die umliegenden Täler.",
      ru: "Зрелищный летний фестиваль фейерверков в Окутаме. Снаряды запускают недалеко от вершины горы Атаго, а грохот разносится по окружающим долинам.",
    },
  },

  {
    id: "ekinishi",
    date: "8/22",
    ja: "駅西夏まつり",
    en: "Ekinishi Summer Festival",
    location: {
      en: "Mizuho Town",
      ja: "瑞穂町",
      vi: "Thị trấn Mizuho",
      zh: "瑞穗町",
      ko: "미즈호마치",
      de: "Stadt Mizuho",
      ru: "город Мидзухо",
    },
    image: images.events.ekinishi,
    description: {
      en: "A community summer festival around the station's west exit, featuring Bon Odori, food stalls and lively stage performances.",
      ja: "駅西口周辺で地域住民が一体となって開催する夏まつり。盆踊りや露店、ステージパフォーマンスなどで賑わいます。",
      vi: "Lễ hội mùa hè do cộng đồng địa phương tổ chức quanh cửa Tây của nhà ga, với múa Bon Odori, các gian hàng ẩm thực và biểu diễn sân khấu.",
      zh: "以车站西口为中心的社区夏日祭典。现场有盆舞、美食摊位和舞台表演，充满热闹的节日气氛。",
      ko: "역 서쪽 출구 주변에서 지역 주민들이 함께 만드는 여름 축제입니다. 본오도리, 먹거리 노점과 무대 공연 등으로 활기가 넘칩니다.",
      de: "Ein gemeinsames Sommerfest der örtlichen Gemeinde rund um den Westausgang des Bahnhofs mit Bon Odori, Essensständen und Bühnenauftritten.",
      ru: "Летний фестиваль местного сообщества у западного выхода станции с танцами Бон-одори, киосками с едой и сценическими выступлениями.",
    },
  },

  {
    id: "hossawa-matsuri",
    date: "8/22 – 23",
    ja: "払沢の滝ふるさと夏まつり",
    en: "Hossawa Falls Furusato Summer Festival",
    location: {
      en: "Hinohara Village",
      ja: "檜原村",
      vi: "Làng Hinohara",
      zh: "桧原村",
      ko: "히노하라무라",
      de: "Dorf Hinohara",
      ru: "деревня Хинохара",
    },
    image: images.events.hossawaMatsuri,
    description: {
      en: "A traditional village summer festival near Hossawa Falls, featuring a beautifully illuminated waterfall, local performances and food stalls.",
      ja: "払沢の滝周辺で開催される檜原村の夏まつり。ライトアップされた滝や地域のステージ、露店などを楽しめます。",
      vi: "Lễ hội mùa hè truyền thống của làng Hinohara gần thác Hossawa, nổi bật với thác nước được thắp sáng, các màn biểu diễn địa phương và gian hàng ẩm thực.",
      zh: "桧原村在払泽瀑布附近举办的传统夏日祭典。游客可以欣赏灯光映照下的瀑布，以及地方表演和美食摊位。",
      ko: "호사와 폭포 주변에서 열리는 히노하라의 전통 여름 축제입니다. 조명이 켜진 폭포와 지역 공연, 먹거리 노점을 즐길 수 있습니다.",
      de: "Ein traditionelles Dorffest in Hinohara nahe den Hossawa-Wasserfällen mit einem stimmungsvoll beleuchteten Wasserfall, lokalen Darbietungen und Essensständen.",
      ru: "Традиционный летний фестиваль деревни Хинохара у водопада Хоссавы. Посетителей ждут подсвеченный водопад, местные выступления и киоски с едой.",
    },
  },

  {
    id: "yoruichi",
    date: "8/29",
    ja: "ヨルイチ",
    en: "Yoruichi",
    location: {
      en: "Akiruno City",
      ja: "あきる野市",
      vi: "Thành phố Akiruno",
      zh: "秋留野市",
      ko: "아키루노시",
      de: "Stadt Akiruno",
      ru: "город Акируно",
    },
    image: images.events.yoruichi,
    description: {
      en: "A nostalgic summer night market around Musashi-Itsukaichi Station, where Japanese paper lanterns create a traditional atmosphere filled with local food and entertainment.",
      ja: "武蔵五日市駅周辺で開催されるノスタルジックな夏の夜市。和紙提灯の灯りに包まれた街で、地元グルメや催しを楽しめます。",
      vi: "Chợ đêm mùa hè mang phong cách hoài niệm quanh ga Musashi-Itsukaichi, nơi ánh đèn lồng giấy Nhật Bản tạo nên không khí truyền thống cùng ẩm thực và các hoạt động địa phương.",
      zh: "在武藏五日市站周边举办的怀旧夏日夜市。和纸灯笼点亮街道，游客可以体验传统氛围、品尝当地美食并参加各种活动。",
      ko: "무사시이츠카이치역 주변에서 열리는 향수를 불러일으키는 여름 야시장입니다. 일본 전통 종이등이 거리를 밝히고 지역 음식과 다양한 행사를 즐길 수 있습니다.",
      de: "Ein nostalgischer Sommernachtmarkt rund um den Bahnhof Musashi-Itsukaichi, bei dem japanische Papierlaternen für eine traditionelle Atmosphäre mit regionalem Essen und Unterhaltung sorgen.",
      ru: "Ностальгическая летняя ярмарка у станции Мусаси-Ицукаити. Свет японских бумажных фонарей создает традиционную атмосферу, где можно попробовать местную еду и посетить различные мероприятия.",
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
  title: {
    en: "Train etiquette",
    ja: "電車でのマナー",
    vi: "Văn hóa đi tàu",
    zh: "乘车礼仪",
    ko: "전철 예절",
    de: "Verhalten im Zug",
    ru: "Правила поведения в поезде",
  },
  points: {
    en: [
      "Keep your voice low in carriages.",
      "Avoid phone calls on board.",
      "Keep luggage from blocking others.",
    ],
    ja: [
      "車内では静かに過ごしましょう。",
      "車内での通話は控えましょう。",
      "荷物は通路をふさがないように。",
    ],
    vi: [
      "Giữ giọng nói nhỏ khi ở trên tàu.",
      "Hạn chế gọi điện thoại trên tàu.",
      "Không để hành lý cản trở người khác.",
    ],
    zh: [
      "在车厢内请保持安静。",
      "乘车时请尽量避免打电话。",
      "请不要让行李妨碍他人通行。",
    ],
    ko: [
      "전철 안에서는 작은 목소리로 이야기해 주세요.",
      "전철 안에서는 통화를 삼가 주세요.",
      "짐이 다른 사람의 통행을 방해하지 않도록 해 주세요.",
    ],
    de: [
      "Sprechen Sie im Zug bitte leise.",
      "Vermeiden Sie Telefonate im Zug.",
      "Stellen Sie Ihr Gepäck so ab, dass es andere nicht behindert.",
    ],
    ru: [
      "В поезде говорите негромко.",
      "По возможности не разговаривайте по телефону в поезде.",
      "Не оставляйте багаж так, чтобы он мешал другим пассажирам.",
    ],
  },
},

{
  id: "garbage",
  title: {
    en: "Garbage",
    ja: "ごみ",
    vi: "Rác thải",
    zh: "垃圾",
    ko: "쓰레기",
    de: "Müll",
    ru: "Мусор",
  },
  points: {
    en: [
      "Please do not litter.",
      "Public bins are rare — carry your rubbish with you.",
      "Follow local separation rules.",
    ],
    ja: [
      "ポイ捨てはやめましょう。",
      "ごみ箱は少ないため、持ち帰りにご協力を。",
      "地域の分別ルールに従いましょう。",
    ],
    vi: [
      "Không xả rác bừa bãi.",
      "Thùng rác công cộng khá ít, vì vậy hãy mang rác theo bên mình.",
      "Tuân thủ quy định phân loại rác của địa phương.",
    ],
    zh: [
      "请勿乱扔垃圾。",
      "公共垃圾桶较少，请将垃圾随身带走。",
      "请遵守当地的垃圾分类规定。",
    ],
    ko: [
      "쓰레기를 함부로 버리지 말아 주세요.",
      "공공 쓰레기통이 많지 않으므로 쓰레기는 직접 가지고 가 주세요.",
      "지역의 쓰레기 분리배출 규칙을 지켜 주세요.",
    ],
    de: [
      "Bitte werfen Sie keinen Müll auf die Straße.",
      "Öffentliche Mülleimer sind selten – nehmen Sie Ihren Müll bitte mit.",
      "Beachten Sie die örtlichen Regeln zur Mülltrennung.",
    ],
    ru: [
      "Не бросайте мусор на улице.",
      "Общественных урн немного, поэтому забирайте мусор с собой.",
      "Соблюдайте местные правила сортировки мусора.",
    ],
  },
},

{
  id: "photography",
  title: {
    en: "Photography",
    ja: "写真撮影",
    vi: "Chụp ảnh",
    zh: "拍照礼仪",
    ko: "사진 촬영",
    de: "Fotografieren",
    ru: "Фотосъёмка",
  },
  points: {
    en: [
      "Ask before photographing people closely.",
      "Respect private property.",
      "Follow posted photography rules.",
    ],
    ja: [
      "人を近くから撮るときは、ひと声かけて。",
      "私有地への立ち入りはご遠慮ください。",
      "撮影ルールの掲示に従いましょう。",
    ],
    vi: [
      "Hãy xin phép trước khi chụp cận cảnh người khác.",
      "Tôn trọng tài sản tư nhân.",
      "Tuân thủ các quy định chụp ảnh được đăng tại địa điểm.",
    ],
    zh: [
      "近距离拍摄他人前请先征得同意。",
      "请尊重私人财产。",
      "请遵守现场张贴的拍摄规定。",
    ],
    ko: [
      "다른 사람을 가까이에서 촬영할 때는 먼저 양해를 구해 주세요.",
      "사유 재산을 존중해 주세요.",
      "현장에 안내된 촬영 규칙을 지켜 주세요.",
    ],
    de: [
      "Fragen Sie vorher, wenn Sie Personen aus nächster Nähe fotografieren möchten.",
      "Respektieren Sie Privateigentum.",
      "Beachten Sie die vor Ort geltenden Fotoregeln.",
    ],
    ru: [
      "Перед съёмкой людей крупным планом сначала спросите их разрешения.",
      "Уважайте частную собственность.",
      "Соблюдайте правила фотосъёмки, указанные на месте.",
    ],
  },
},

{
  id: "shrines",
  title: {
    en: "Temples & shrines",
    ja: "寺社",
    vi: "Đền chùa",
    zh: "寺庙与神社",
    ko: "사찰과 신사",
    de: "Tempel & Schreine",
    ru: "Храмы и святилища",
  },
  points: {
    en: [
      "These are quiet, sacred spaces.",
      "Follow the signs on site.",
      "Do not enter restricted areas.",
    ],
    ja: [
      "静かで神聖な場所です。",
      "現地の案内に従いましょう。",
      "立入禁止の区域には入らないでください。",
    ],
    vi: [
      "Đây là những không gian yên tĩnh và linh thiêng.",
      "Hãy tuân theo hướng dẫn tại địa điểm.",
      "Không vào những khu vực bị hạn chế.",
    ],
    zh: [
      "这里是安静而神圣的场所。",
      "请遵守现场的指示。",
      "请勿进入禁止入内的区域。",
    ],
    ko: [
      "이곳은 조용하고 신성한 공간입니다.",
      "현장의 안내에 따라 주세요.",
      "출입이 제한된 구역에는 들어가지 마세요.",
    ],
    de: [
      "Dies sind ruhige und heilige Orte.",
      "Befolgen Sie die Hinweise vor Ort.",
      "Betreten Sie keine gesperrten Bereiche.",
    ],
    ru: [
      "Это тихие и священные места.",
      "Следуйте указаниям на месте.",
      "Не заходите в зоны с ограниченным доступом.",
    ],
  },
},

{
  id: "nature",
  title: {
    en: "Nature",
    ja: "自然のなかで",
    vi: "Khi hòa mình vào thiên nhiên",
    zh: "亲近自然",
    ko: "자연 속에서",
    de: "In der Natur",
    ru: "На природе",
  },
  points: {
    en: [
      "Stay on designated trails.",
      "Do not damage plants.",
      "Leave natural objects where you found them.",
    ],
    ja: [
      "決められた道を歩きましょう。",
      "植物を傷つけないように。",
      "自然のものは持ち帰らないでください。",
    ],
    vi: [
      "Đi theo những lối mòn được chỉ định.",
      "Không làm hư hại cây cối và thực vật.",
      "Hãy để các vật thể tự nhiên ở lại nơi bạn tìm thấy chúng.",
    ],
    zh: [
      "请沿指定路线行走。",
      "请勿破坏植物。",
      "请将自然物留在原来的地方。",
    ],
    ko: [
      "지정된 탐방로를 이용해 주세요.",
      "식물을 훼손하지 말아 주세요.",
      "자연물은 발견한 곳에 그대로 두어 주세요.",
    ],
    de: [
      "Bleiben Sie auf den ausgewiesenen Wegen.",
      "Beschädigen Sie keine Pflanzen.",
      "Lassen Sie natürliche Gegenstände dort, wo Sie sie gefunden haben.",
    ],
    ru: [
      "Ходите только по обозначенным тропам.",
      "Не повреждайте растения.",
      "Оставляйте природные объекты там, где вы их нашли.",
    ],
  },
},

{
  id: "community",
  title: {
    en: "Local communities",
    ja: "地域の暮らし",
    vi: "Đời sống cộng đồng địa phương",
    zh: "尊重当地社区",
    ko: "지역 주민과의 공존",
    de: "Rücksicht auf die lokale Gemeinschaft",
    ru: "Уважение к местному сообществу",
  },
  points: {
    en: [
      "Do not block roads or driveways.",
      "Do not enter private property.",
      "Avoid noise, and follow parking rules.",
    ],
    ja: [
      "道や出入口をふさがないように。",
      "私有地には入らないでください。",
      "騒音を避け、駐車ルールを守りましょう。",
    ],
    vi: [
      "Không chắn đường hoặc lối ra vào.",
      "Không đi vào khu vực tài sản tư nhân.",
      "Hạn chế gây tiếng ồn và tuân thủ quy định đỗ xe.",
    ],
    zh: [
      "请勿堵塞道路或出入口。",
      "请勿进入私人土地。",
      "请避免制造噪音，并遵守停车规定。",
    ],
    ko: [
      "도로와 출입구를 막지 말아 주세요.",
      "사유지에 들어가지 말아 주세요.",
      "소음을 자제하고 주차 규칙을 지켜 주세요.",
    ],
    de: [
      "Blockieren Sie keine Straßen oder Einfahrten.",
      "Betreten Sie kein Privateigentum.",
      "Vermeiden Sie Lärm und beachten Sie die Parkregeln.",
    ],
    ru: [
      "Не перекрывайте дороги и въезды.",
      "Не заходите на частную территорию.",
      "Избегайте шума и соблюдайте правила парковки.",
    ],
  },
},

{
  id: "shops",
  title: {
    en: "Restaurants & shops",
    ja: "飲食店・お店",
    vi: "Nhà hàng & cửa hàng",
    zh: "餐厅与商店",
    ko: "음식점과 상점",
    de: "Restaurants & Geschäfte",
    ru: "Рестораны и магазины",
  },
  points: {
    en: [
      "Follow each shop's own rules.",
      "Ask before taking photos inside.",
      "Be considerate of staff and other customers.",
    ],
    ja: [
      "お店ごとのルールに従いましょう。",
      "店内撮影は事前にひと声を。",
      "スタッフや他のお客さまへの配慮を。",
    ],
    vi: [
      "Tuân thủ quy định riêng của từng cửa hàng.",
      "Hãy xin phép trước khi chụp ảnh bên trong.",
      "Tôn trọng nhân viên và những khách hàng khác.",
    ],
    zh: [
      "请遵守各店的规定。",
      "在店内拍照前请先征得同意。",
      "请体谅工作人员和其他顾客。",
    ],
    ko: [
      "각 매장의 규칙을 지켜 주세요.",
      "매장 안에서 사진을 찍기 전에 먼저 허락을 구해 주세요.",
      "직원과 다른 손님을 배려해 주세요.",
    ],
    de: [
      "Beachten Sie die Regeln des jeweiligen Geschäfts.",
      "Fragen Sie vorher, bevor Sie im Innenraum fotografieren.",
      "Nehmen Sie Rücksicht auf das Personal und andere Gäste.",
    ],
    ru: [
      "Соблюдайте правила каждого заведения.",
      "Перед съёмкой внутри сначала спросите разрешения.",
      "Уважайте сотрудников и других посетителей.",
    ],
  },
},

{
  id: "festivals",
  title: {
    en: "Festivals",
    ja: "祭り",
    vi: "Lễ hội",
    zh: "节庆活动",
    ko: "축제",
    de: "Feste",
    ru: "Фестивали",
  },
  points: {
    en: [
      "Follow organisers' instructions.",
      "Do not enter restricted areas.",
      "Respect performances and ceremonies.",
    ],
    ja: [
      "主催者の案内に従いましょう。",
      "立入禁止の区域には入らないでください。",
      "演目や神事を尊重しましょう。",
    ],
    vi: [
      "Tuân theo hướng dẫn của ban tổ chức.",
      "Không vào những khu vực bị hạn chế.",
      "Tôn trọng các tiết mục biểu diễn và nghi lễ.",
    ],
    zh: [
      "请遵循主办方的指引。",
      "请勿进入禁止入内的区域。",
      "请尊重表演和仪式。",
    ],
    ko: [
      "주최자의 안내에 따라 주세요.",
      "출입이 제한된 구역에는 들어가지 마세요.",
      "공연과 의식을 존중해 주세요.",
    ],
    de: [
      "Befolgen Sie die Anweisungen der Veranstalter.",
      "Betreten Sie keine gesperrten Bereiche.",
      "Respektieren Sie Aufführungen und Zeremonien.",
    ],
    ru: [
      "Следуйте указаниям организаторов.",
      "Не заходите в зоны с ограниченным доступом.",
      "Уважайте выступления и церемонии.",
    ],
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
  /**
   * True when the route works well on a weekday — it leans on nature,
   * rivers, walking and shrines rather than shops, cafés or small
   * museums that may keep limited weekday hours.
   */
  weekdayFriendly?: boolean;
};

export const durations = [
  {
    id: "half",
    label: {
      en: "Half Day",
      ja: "半日",
      vi: "Nửa ngày",
      zh: "半日",
      ko: "반나절",
      de: "Halber Tag",
      ru: "Полдня",
    } as Localized,
  },
  {
    id: "one",
    label: {
      en: "1 Day",
      ja: "1日",
      vi: "1 ngày",
      zh: "1天",
      ko: "1일",
      de: "1 Tag",
      ru: "1 день",
    } as Localized,
  },
] as const;

export const interests = [
  {
    id: "relaxation",
    label: {
      en: "Relax",
      ja: "リラックス",
      vi: "Thư giãn",
      zh: "放松",
      ko: "휴식",
      de: "Entspannen",
      ru: "Отдых",
    } as Localized,
  },
  {
    id: "adventure",
    label: {
      en: "Adventure",
      ja: "アドベンチャー",
      vi: "Phiêu lưu",
      zh: "冒险",
      ko: "모험",
      de: "Abenteuer",
      ru: "Приключение",
    } as Localized,
  },
  {
    id: "culture",
    label: {
      en: "Culture",
      ja: "文化",
      vi: "Văn hóa",
      zh: "文化",
      ko: "문화",
      de: "Kultur",
      ru: "Культура",
    } as Localized,
  },
  {
    id: "scenery",
    label: {
      en: "Scenery",
      ja: "景色",
      vi: "Cảnh đẹp",
      zh: "风景",
      ko: "풍경",
      de: "Landschaft",
      ru: "Пейзажи",
    } as Localized,
  },
  {
    id: "events",
    label: {
      en: "Seasonal",
      ja: "季節の体験",
      vi: "Theo mùa",
      zh: "季节体验",
      ko: "계절 체험",
      de: "Saisonal",
      ru: "Сезонное",
    } as Localized,
  },
  {
    id: "food",
    label: {
      en: "Local Food",
      ja: "食",
      vi: "Ẩm thực",
      zh: "美食",
      ko: "음식",
      de: "Lokale Küche",
      ru: "Местная еда",
    } as Localized,
  },
  {
    id: "nature",
    label: {
      en: "Nature",
      ja: "自然",
      vi: "Thiên nhiên",
      zh: "自然",
      ko: "자연",
      de: "Natur",
      ru: "Природа",
    } as Localized,
  },
  {
    id: "family",
    label: {
      en: "Family",
      ja: "家族向け",
      vi: "Gia đình",
      zh: "亲子",
      ko: "가족",
      de: "Familie",
      ru: "Для семьи",
    } as Localized,
  },
];

export const itineraries: Itinerary[] = [
  {
    id: "one-day-nature",
    title: {
      en: "One Day Nature Escape",
      ja: "1日・自然に浸る",
      vi: "Một ngày hòa mình vào thiên nhiên",
      zh: "一日自然之旅",
      ko: "하루 동안 자연 속으로",
      de: "Ein Tag in der Natur",
      ru: "Один день на природе",
    },
    duration: "one",
    interests: ["nature", "food", "culture", "scenery"],
    weekdayFriendly: true,
    summary: {
      en: "A full day of forest, local food and a mountain shrine, easily enjoyed as a round trip from central Tokyo.",
      ja: "森と地元の食、そして山の神社をめぐる、都心から日帰りで楽しめる王道コース。",
      vi: "Một ngày trọn vẹn giữa rừng xanh, ẩm thực địa phương và đền núi, dễ dàng thực hiện trong chuyến đi về trong ngày từ trung tâm Tokyo.",
      zh: "在森林、当地美食和山间神社之间度过充实的一天，从东京市中心即可轻松往返。",
      ko: "숲과 지역 음식, 산속 신사를 하루 동안 둘러보는 코스로 도쿄 도심에서 당일치기로 즐기기 좋습니다.",
      de: "Ein ganzer Tag zwischen Wald, regionaler Küche und einem Bergschrein – ideal für einen Tagesausflug ab dem Zentrum Tokios.",
      ru: "Целый день среди лесов, местной кухни и горного храма — удобный вариант однодневной поездки из центра Токио.",
    },
    steps: {
      en: ["Tokyo", "Ome", "Nature experience", "Local lunch", "Cultural destination", "Tokyo"],
      ja: ["東京", "青梅", "自然体験", "地元でランチ", "文化スポット", "東京"],
      vi: ["Tokyo", "Ome", "Trải nghiệm thiên nhiên", "Ăn trưa địa phương", "Điểm đến văn hóa", "Tokyo"],
      zh: ["东京", "青梅", "自然体验", "当地午餐", "文化景点", "东京"],
      ko: ["도쿄", "오메", "자연 체험", "현지 점심", "문화 명소", "도쿄"],
      de: ["Tokio", "Ome", "Naturerlebnis", "Lokales Mittagessen", "Kulturziel", "Tokio"],
      ru: ["Токио", "Оме", "Природный опыт", "Местный обед", "Культурная достопримечательность", "Токио"],
    },
  },

  {
    id: "half-day-river",
    title: {
      en: "Half Day by the River",
      ja: "半日・川辺で過ごす",
      vi: "Nửa ngày bên dòng sông",
      zh: "半日河畔时光",
      ko: "반나절 강변 여행",
      de: "Ein halber Tag am Fluss",
      ru: "Полдня у реки",
    },
    duration: "half",
    interests: ["nature", "relaxation", "scenery", "family"],
    weekdayFriendly: true,
    summary: {
      en: "An easy afternoon in the Akigawa Valley — cool water, shady riversides and a relaxed meal by the river.",
      ja: "秋川渓谷でのんびり過ごす午後。涼しい水辺、木陰の川沿い、そしてゆっくり楽しむ食事。",
      vi: "Một buổi chiều thư thái tại thung lũng Akigawa với dòng nước mát, bóng cây ven sông và một bữa ăn chậm rãi bên dòng nước.",
      zh: "在秋川溪谷度过悠闲的午后，享受清凉溪水、河畔树荫和轻松的河边用餐时光。",
      ko: "아키가와 계곡에서 시원한 물과 강변의 그늘을 즐기며 여유롭게 식사하는 편안한 오후 코스입니다.",
      de: "Ein entspannter Nachmittag im Akigawa-Tal mit kühlem Wasser, schattigen Flussufern und einer gemütlichen Mahlzeit am Wasser.",
      ru: "Спокойный день в долине Акигава: прохладная вода, тенистые берега и неспешный обед у реки.",
    },
    steps: {
      en: ["Tokyo", "Akiruno", "Akigawa Valley walk", "Riverside cafe", "Tokyo"],
      ja: ["東京", "あきる野", "秋川渓谷さんぽ", "川辺のカフェ", "東京"],
      vi: ["Tokyo", "Akiruno", "Đi bộ thung lũng Akigawa", "Café ven sông", "Tokyo"],
      zh: ["东京", "秋留野", "秋川溪谷漫步", "河畔咖啡馆", "东京"],
      ko: ["도쿄", "아키루노", "아키가와 계곡 산책", "강변 카페", "도쿄"],
      de: ["Tokio", "Akiruno", "Spaziergang im Akigawa-Tal", "Café am Fluss", "Tokio"],
      ru: ["Токио", "Акируно", "Прогулка по долине Акигава", "Кафе у реки", "Токио"],
    },
  },

  {
    id: "half-day-town",
    title: {
      en: "Half Day Town Walk",
      ja: "半日・町歩き",
      vi: "Nửa ngày khám phá phố cổ",
      zh: "半日小镇漫步",
      ko: "반나절 마을 산책",
      de: "Ein halber Tag auf Entdeckungstour",
      ru: "Полдня на прогулку по городу",
    },
    duration: "half",
    interests: ["culture", "food"],
    summary: {
      en: "Old streets, small museums and a coffee stop — a gentle introduction to the character of Nishi Tama.",
      ja: "古い通りと小さな展示、そして一杯のコーヒー。西多摩の魅力を気軽に知る入門コース。",
      vi: "Những con phố cổ, bảo tàng nhỏ và một điểm dừng uống cà phê – cách nhẹ nhàng để khám phá nét đặc trưng của Nishi Tama.",
      zh: "漫步老街、参观小型博物馆，再找一家咖啡馆休息，是了解西多摩魅力的轻松方式。",
      ko: "오래된 거리와 작은 박물관, 그리고 카페에서의 휴식까지. 니시타마의 매력을 가볍게 만나볼 수 있는 코스입니다.",
      de: "Alte Straßen, kleine Museen und eine Kaffeepause – ein entspannter Einstieg in den besonderen Charakter von Nishi Tama.",
      ru: "Старые улицы, небольшие музеи и остановка на кофе — спокойный способ познакомиться с характером Ниси-Тамы.",
    },
    steps: {
      en: ["Tokyo", "Ome old town", "Street walk & museums", "Cafe stop", "Tokyo"],
      ja: ["東京", "青梅旧市街", "町歩き・展示", "カフェ", "東京"],
      vi: ["Tokyo", "Phố cổ Ome", "Đi bộ & bảo tàng", "Dừng chân tại café", "Tokyo"],
      zh: ["东京", "青梅老街", "街区漫步与博物馆", "咖啡馆休息", "东京"],
      ko: ["도쿄", "오메 구시가지", "거리 산책 & 박물관", "카페 방문", "도쿄"],
      de: ["Tokio", "Altstadt von Ome", "Spaziergang & Museen", "Kaffeepause", "Tokio"],
      ru: ["Токио", "Старый город Оме", "Прогулка и музеи", "Кофейная остановка", "Токио"],
    },
  },

  {
    id: "one-day-mountain",
    title: {
      en: "One Day Mountain & Shrine",
      ja: "1日・山と信仰",
      vi: "Một ngày núi và tín ngưỡng",
      zh: "一日登山与神社",
      ko: "하루 산과 신사 여행",
      de: "Ein Tag in den Bergen und am Schrein",
      ru: "Один день в горах и у храма",
    },
    duration: "one",
    interests: ["nature", "culture", "adventure", "scenery"],
    weekdayFriendly: true,
    summary: {
      en: "Take the cable car up Mount Mitake, visit the shrine at the summit and walk through the mossy Rock Garden trail.",
      ja: "ケーブルカーで御岳山へ。山頂の神社を訪れ、苔むす岩石園の道を歩く山の一日。",
      vi: "Đi cáp treo lên núi Mitake, ghé thăm ngôi đền trên đỉnh núi và tản bộ qua con đường Rock Garden phủ đầy rêu.",
      zh: "乘坐缆车登上御岳山，参拜山顶神社，再漫步于青苔覆盖的岩石园步道。",
      ko: "케이블카를 타고 미타케산에 올라 정상의 신사를 방문하고 이끼로 덮인 록 가든 트레일을 걸어보는 하루 코스입니다.",
      de: "Mit der Seilbahn auf den Berg Mitake, zum Schrein auf dem Gipfel und anschließend durch den moosbewachsenen Rock Garden.",
      ru: "Поднимитесь на гору Митаке на канатной дороге, посетите храм на вершине и прогуляйтесь по покрытой мхом тропе Rock Garden.",
    },
    steps: {
      en: ["Tokyo", "Mitake Station", "Cable car", "Musashi Mitake Shrine", "Rock Garden trail", "Tokyo"],
      ja: ["東京", "御嶽駅", "ケーブルカー", "武蔵御嶽神社", "岩石園の道", "東京"],
      vi: ["Tokyo", "Ga Mitake", "Cáp treo", "Đền Musashi Mitake", "Đường mòn Rock Garden", "Tokyo"],
      zh: ["东京", "御岳站", "缆车", "武藏御岳神社", "岩石园步道", "东京"],
      ko: ["도쿄", "미타케역", "케이블카", "무사시 미타케 신사", "록 가든 트레일", "도쿄"],
      de: ["Tokio", "Bahnhof Mitake", "Seilbahn", "Musashi-Mitake-Schrein", "Rock-Garden-Weg", "Tokio"],
      ru: ["Токио", "Станция Митаке", "Канатная дорога", "Святилище Мусаси-Митаке", "Тропа Rock Garden", "Токио"],
    },
  },

  {
    id: "one-day-festival",
    title: {
      en: "One Day Summer Festival",
      ja: "1日・夏祭りへ",
      vi: "Một ngày khám phá lễ hội mùa hè",
      zh: "一日夏日祭典之旅",
      ko: "하루 여름 축제 여행",
      de: "Ein Tag beim Sommerfest",
      ru: "Один день на летнем фестивале",
    },
    duration: "one",
    interests: ["events", "food", "culture"],
    summary: {
      en: "Arrive in the afternoon, explore the town, enjoy festival food stalls and stay into the evening for fireworks or lantern-lit streets.",
      ja: "午後に到着して町を散策。屋台の料理を楽しみ、花火や灯りに彩られた夜まで過ごす夏祭りコース。",
      vi: "Đến vào buổi chiều, dạo quanh thị trấn, thưởng thức đồ ăn tại các gian hàng lễ hội và ở lại đến tối để xem pháo hoa hoặc ngắm những con phố lung linh ánh đèn.",
      zh: "下午抵达后漫步小镇，品尝祭典摊位美食，并留到夜晚欣赏烟花或灯笼映照的街道。",
      ko: "오후에 도착해 마을을 둘러보고 축제 포장마차 음식을 즐긴 뒤, 저녁에는 불꽃놀이나 등불로 물든 거리를 만끽하는 코스입니다.",
      de: "Am Nachmittag ankommen, den Ort erkunden, Festivalstände genießen und bis zum Abend bleiben – für Feuerwerk oder von Laternen erleuchtete Straßen.",
      ru: "Приехать днём, прогуляться по городу, попробовать еду на фестивальных ярмарках и остаться до вечера ради фейерверков или улиц в свете фонарей.",
    },
    steps: {
      en: ["Tokyo", "Festival town", "Afternoon walk", "Festival stalls", "Fireworks / night market", "Tokyo"],
      ja: ["東京", "祭りの町へ", "夕方の散策", "屋台", "花火・夜市", "東京"],
      vi: ["Tokyo", "Thị trấn lễ hội", "Dạo phố buổi chiều", "Gian hàng lễ hội", "Pháo hoa / chợ đêm", "Tokyo"],
      zh: ["东京", "祭典小镇", "下午漫步", "祭典摊位", "烟花 / 夜市", "东京"],
      ko: ["도쿄", "축제 마을", "오후 산책", "축제 포장마차", "불꽃놀이 / 야시장", "도쿄"],
      de: ["Tokio", "Festivalort", "Nachmittagsspaziergang", "Festivalstände", "Feuerwerk / Nachtmarkt", "Tokio"],
      ru: ["Токио", "Город фестиваля", "Прогулка днём", "Фестивальные лавки", "Фейерверк / ночной рынок", "Токио"],
    },
  },
];

/* ------------------------------------------------------------------ */

export type GuideSection = { id: string; title: Localized; body: Localized<string[]> };

export const guideSections: GuideSection[] = [
  {
  id: "getting-there",
  title: {
    en: "How to Get There",
    ja: "行き方",
    vi: "Cách đến đây",
    zh: "如何前往",
    ko: "찾아가는 방법",
    de: "Anreise",
    ru: "Как добраться",
  },
  body: {
    en: [
      "Nishi Tama is mainly reached by JR lines running west from central Tokyo. From Tachikawa, the Ome Line continues toward Ome and Okutama, while the Itsukaichi Line branches toward Akiruno and Musashi-Itsukaichi.",
      "Travel time varies depending on your destination. Towns such as Fussa and Hamura are relatively easy to reach, while mountain areas such as Okutama and Hinohara take longer. Check your route and train times before you leave, especially for the last connection home.",
    ],
    ja: [
      "西多摩へは、都心から西へ向かうJR線が便利です。立川からは青梅線が青梅・奥多摩方面へ、五日市線があきる野・武蔵五日市方面へ向かいます。",
      "所要時間は目的地によって大きく異なります。福生・羽村などの街は比較的アクセスしやすい一方、奥多摩や檜原村などの山間部へは時間がかかります。特に帰りの電車や最終接続は、出発前に確認しておくと安心です。",
    ],
    vi: [
      "Bạn có thể đến Nishi Tama chủ yếu bằng các tuyến JR đi về phía Tây từ trung tâm Tokyo. Từ Tachikawa, tuyến Ome Line đi về phía Ome và Okutama, trong khi tuyến Itsukaichi Line đi về phía Akiruno và Musashi-Itsukaichi.",
      "Thời gian di chuyển phụ thuộc vào điểm đến. Những khu vực như Fussa và Hamura tương đối dễ tiếp cận, trong khi các vùng núi như Okutama và Hinohara sẽ mất nhiều thời gian hơn. Đặc biệt, hãy kiểm tra trước chuyến tàu cuối và tuyến đường về để chuyến đi được thuận lợi.",
    ],
    zh: [
      "前往西多摩主要可以搭乘从东京市中心向西行驶的JR线路。从立川站出发，青梅线前往青梅、奥多摩方向，五日市线则前往秋留野市及武藏五日市方向。",
      "所需时间会因目的地而有所不同。福生、羽村等地区交通相对方便，而奥多摩、桧原村等山区需要更多时间。出发前建议确认路线和列车时刻，尤其要留意返程的末班车。",
    ],
    ko: [
      "니시타마는 도쿄 도심에서 서쪽으로 운행하는 JR 노선을 이용하면 편리하게 갈 수 있습니다. 다치카와역에서 오메선은 오메·오쿠타마 방면으로, 이츠카이치선은 아키루노·무사시이츠카이치 방면으로 이어집니다.",
      "이동 시간은 목적지에 따라 크게 달라집니다. 후사와 하무라 등은 비교적 접근하기 쉽지만, 오쿠타마와 히노하라 같은 산간 지역은 시간이 더 걸립니다. 특히 돌아오는 마지막 열차와 연결편은 출발 전에 미리 확인하는 것을 추천합니다.",
    ],
    de: [
      "Nishi Tama erreichen Sie am einfachsten mit den JR-Linien, die von Zentral-Tokio nach Westen fahren. Ab Tachikawa führt die Ome-Linie in Richtung Ome und Okutama, während die Itsukaichi-Linie nach Akiruno und Musashi-Itsukaichi fährt.",
      "Die Fahrzeit hängt stark vom jeweiligen Ziel ab. Orte wie Fussa und Hamura sind relativ leicht zu erreichen, während die Bergregionen Okutama und Hinohara mehr Zeit benötigen. Prüfen Sie Ihre Verbindung und insbesondere die letzte Rückfahrt, bevor Sie losfahren.",
    ],
    ru: [
      "До Ниси-Тамы удобнее всего добираться по линиям JR, которые идут на запад от центра Токио. От станции Татикава линия Оме направляется в сторону Оме и Окутамы, а линия Ицукаити — в сторону Акируно и Мусаси-Ицукаити.",
      "Время в пути сильно зависит от места назначения. До Фуссы и Хамуры добраться сравнительно легко, а поездка в горные районы, такие как Окутама и Хинохара, занимает больше времени. Перед поездкой рекомендуется заранее проверить маршрут и особенно последний поезд обратно.",
    ],
  },
},
{
  id: "transport",
  title: {
    en: "Transportation",
    ja: "現地の交通",
    vi: "Di chuyển trong khu vực",
    zh: "当地交通",
    ko: "현지 교통",
    de: "Unterwegs vor Ort",
    ru: "Транспорт на месте",
  },
  body: {
  en: [
    "Trains connect the main towns, but many natural attractions are far from stations. Local buses are often needed to reach trails, valleys and rivers, and services in mountain areas may be limited.",
    "Nishi Tama has fewer convenience stores and shops than central Tokyo. Some local shops and restaurants may close early or have irregular holidays.",
    "Online opening hours may not always be up to date. Check Google or call ahead when needed, and bring some snacks and water for remote areas.",
  ],
  ja: [
    "主要な町は鉄道で結ばれていますが、自然豊かな観光スポットには駅から離れた場所もあります。登山口や渓谷、川沿いへは路線バスが必要な場合があり、山間部では本数が少ないこともあります。",
    "西多摩は自然豊かな地域のため、都心ほどコンビニや店舗が多くありません。個人店や飲食店では、閉店が早かったり、不定休の場合があります。",
    "ネットの営業時間が最新でない場合もあります。必要に応じてGoogleで確認したり、事前に電話で確認しましょう。遠方へ行く際は軽食や飲み物も用意すると安心です。",
  ],
  vi: [
    "Các khu vực chính được kết nối bằng tàu, nhưng nhiều điểm thiên nhiên nằm xa nhà ga. Bạn có thể cần xe buýt địa phương để đến các tuyến đường núi, thung lũng và sông, đặc biệt ở vùng núi.",
    "Nishi Tama có ít cửa hàng tiện lợi và cửa hàng hơn trung tâm Tokyo. Một số cửa hàng và nhà hàng địa phương có thể đóng cửa sớm hoặc nghỉ không cố định.",
    "Giờ mở cửa trên Internet đôi khi chưa được cập nhật. Hãy kiểm tra Google hoặc gọi trước khi đến nếu cần, đồng thời mang theo nước và đồ ăn nhẹ khi đi đến khu vực xa.",
  ],
  zh: [
    "主要城镇之间有铁路连接，但许多自然景点距离车站较远。前往登山口、溪谷和河边时可能需要搭乘当地巴士，山区班次也可能较少。",
    "西多摩自然丰富，因此便利店和商店不像东京市中心那么多。一些当地商店和餐厅可能较早关门，或没有固定休息日。",
    "网上的营业时间有时不是最新信息。需要时可通过Google确认或提前打电话，前往偏远地区时也建议带上水和零食。",
  ],
  ko: [
    "주요 지역은 전철로 연결되어 있지만, 많은 자연 관광지는 역에서 멀리 떨어져 있습니다. 등산로와 계곡, 강 주변으로 갈 때는 지역 버스가 필요할 수 있으며, 산간 지역은 운행 횟수가 적을 수 있습니다.",
    "니시타마는 도쿄 도심보다 편의점과 상점이 적습니다. 일부 지역 상점과 음식점은 일찍 문을 닫거나 휴무일이 일정하지 않을 수 있습니다.",
    "인터넷에 표시된 영업시간이 최신 정보가 아닐 수도 있습니다. 필요하면 Google에서 확인하거나 미리 전화하고, 외진 곳을 방문할 때는 간식과 물을 준비하세요.",
  ],
  de: [
    "Die wichtigsten Orte sind mit dem Zug verbunden, viele Naturattraktionen liegen jedoch weit von den Bahnhöfen entfernt. Für Wanderwege, Täler und Flüsse werden oft lokale Busse benötigt, die in Bergregionen seltener fahren können.",
    "In Nishi Tama gibt es weniger Convenience Stores und Geschäfte als im Zentrum Tokios. Einige lokale Geschäfte und Restaurants schließen früh oder haben unregelmäßige Ruhetage.",
    "Online angegebene Öffnungszeiten sind nicht immer aktuell. Prüfen Sie bei Bedarf Google oder rufen Sie vorher an. Für abgelegene Gebiete sollten Sie Wasser und Snacks mitnehmen.",
  ],
  ru: [
    "Основные районы соединены железной дорогой, но многие природные достопримечательности находятся далеко от станций. До троп, ущелий и рек часто нужно добираться на местных автобусах, которые в горах ходят реже.",
    "В Ниси-Таме меньше магазинов и комбини, чем в центре Токио. Некоторые местные магазины и рестораны закрываются рано или имеют нерегулярные выходные.",
    "Информация о часах работы в интернете не всегда актуальна. При необходимости проверьте Google или позвоните заранее. В удалённые районы рекомендуется взять воду и перекус.",
  ],
},
},
{
  id: "seasons",
  title: {
    en: "Best Seasons",
    ja: "季節",
    vi: "Mùa đẹp nhất",
    zh: "最佳季节",
    ko: "추천 계절",
    de: "Die besten Jahreszeiten",
    ru: "Лучшее время года",
  },
  body: {
    en: [
      "Spring brings plum and cherry blossoms. Summer offers festivals, fresh greenery and cool rivers, while caves and forests provide relief from the heat.",
      "Autumn is ideal for hiking and colourful leaves, especially through November. Winter is quieter, with clear air and peaceful mountain views.",
    ],
    ja: [
      "春は梅や桜が咲き、夏は祭りや新緑、涼しい川を楽しめます。鍾乳洞や森も暑さを避けるのにおすすめです。",
      "秋は紅葉の中でのハイキングに最適で、11月頃まで美しい景色を楽しめます。冬は静かで空気が澄み、山々をきれいに眺められます。",
    ],
    vi: [
      "Mùa xuân có hoa mơ và hoa anh đào. Mùa hè có lễ hội, cây xanh và những dòng sông mát mẻ, trong khi hang động và rừng giúp tránh cái nóng.",
      "Mùa thu thích hợp để đi bộ đường dài và ngắm lá đỏ, đặc biệt đến khoảng tháng 11. Mùa đông yên tĩnh, không khí trong lành và cảnh núi rõ nét.",
    ],
    zh: [
      "春天可以欣赏梅花和樱花。夏天有祭典、新绿和清凉的河流，洞窟与森林也是避暑的好去处。",
      "秋天适合徒步和欣赏红叶，美景可持续到11月左右。冬天更加安静，空气清澄，山景也更加清晰。",
    ],
    ko: [
      "봄에는 매화와 벚꽃을 볼 수 있습니다. 여름에는 축제와 신록, 시원한 강을 즐길 수 있으며 동굴과 숲은 더위를 피하기 좋습니다.",
      "가을은 단풍 속에서 하이킹을 즐기기 좋은 계절이며 11월경까지 아름다운 풍경을 볼 수 있습니다. 겨울에는 맑은 공기와 조용한 산 풍경을 즐길 수 있습니다.",
    ],
    de: [
      "Im Frühling blühen Pflaumen und Kirschblüten. Der Sommer bietet Feste, frisches Grün und kühle Flüsse, während Höhlen und Wälder angenehme Abkühlung bieten.",
      "Der Herbst eignet sich besonders zum Wandern und für bunte Blätter bis etwa November. Im Winter ist es ruhiger, mit klarer Luft und friedlichen Bergblicken.",
    ],
    ru: [
      "Весной можно увидеть цветущие сливы и сакуру. Летом проходят фестивали, радует свежая зелень и прохладные реки, а пещеры и леса помогают укрыться от жары.",
      "Осень отлично подходит для прогулок и любования яркой листвой, особенно до ноября. Зимой здесь тихо, воздух чистый, а горные пейзажи особенно ясные.",
    ],
  },
},
{
  id: "manners",
  title: {
    en: "Japanese Manners",
    ja: "日本のマナー",
    vi: "Văn hóa và phép lịch sự",
    zh: "日本礼仪",
    ko: "일본의 여행 매너",
    de: "Japanische Umgangsformen",
    ru: "Правила поведения в Японии",
  },
  body: {
    en: [
      "Stay quiet on trains, do not litter, and respect private property. Many places are local neighbourhoods where people live and work.",
      "A little consideration helps protect Nishi Tama's nature and local community. See the Travel Kindly section for more.",
    ],
    ja: [
      "電車内では静かに過ごし、ごみを捨てず、私有地を尊重しましょう。多くの場所は観光施設ではなく、地域の方々が暮らす生活の場です。",
      "一人ひとりの心遣いが、西多摩の自然と地域の暮らしを守ります。詳しくは「やさしい旅を」のセクションをご覧ください。",
    ],
    vi: [
      "Hãy giữ yên lặng khi đi tàu, không xả rác và tôn trọng không gian riêng của người dân. Nhiều nơi ở đây là khu dân cư, không phải điểm du lịch.",
      "Sự quan tâm của mỗi du khách giúp bảo vệ thiên nhiên và cuộc sống địa phương tại Nishi Tama. Xem thêm phần “Travel Kindly”.",
    ],
    zh: [
      "乘坐电车时请保持安静，不乱扔垃圾，并尊重私人土地。许多地方是当地居民生活和工作的社区，而不是旅游设施。",
      "每个人的一点体谅，都能帮助保护西多摩的自然与社区生活。更多内容请参考“友善旅行”部分。",
    ],
    ko: [
      "전철에서는 조용히 하고 쓰레기를 버리지 않으며 사유지를 존중해 주세요. 많은 곳이 관광 시설이 아닌 지역 주민들의 생활 공간입니다.",
      "작은 배려가 니시타마의 자연과 지역 생활을 지키는 데 도움이 됩니다. 자세한 내용은 ‘Travel Kindly’ 섹션을 참고해 주세요.",
    ],
    de: [
      "Verhalten Sie sich in Zügen ruhig, hinterlassen Sie keinen Müll und respektieren Sie Privatgrundstücke. Viele Orte sind Wohn- und Arbeitsgebiete der Einheimischen.",
      "Rücksicht hilft, die Natur und das Leben in Nishi Tama zu bewahren. Weitere Hinweise finden Sie im Abschnitt „Travel Kindly“.",
    ],
    ru: [
      "Соблюдайте тишину в поездах, не оставляйте мусор и уважайте частную территорию. Многие места являются районами, где живут и работают местные жители.",
      "Небольшая забота помогает сохранить природу и жизнь местного сообщества Ниси-Тамы. Подробнее — в разделе «Travel Kindly».",
    ],
  },
},
{
  id: "safety",
  title: {
    en: "Safety",
    ja: "安全のために",
    vi: "An toàn",
    zh: "安全须知",
    ko: "안전을 위해",
    de: "Sicherheit",
    ru: "Безопасность",
  },
  body: {
    en: [
      "Mountain weather can change quickly, and mobile signal may be weak in remote areas. Check the weather, share your plans, start early, and turn back if conditions become unsafe.",
      "Rivers can rise quickly after heavy rain in summer. Follow local warnings and only swim or play in permitted areas.",
    ],
    ja: [
      "山の天気は変わりやすく、遠隔地では携帯電話の電波が弱いことがあります。天気を確認し、行程を伝えて早めに出発し、危険を感じたら引き返しましょう。",
      "夏は大雨のあとに川が急に増水することがあります。現地の警告に従い、水遊びは許可された場所でのみ楽しんでください。",
    ],
    vi: [
      "Thời tiết vùng núi thay đổi nhanh và điện thoại có thể mất sóng ở khu vực xa. Hãy kiểm tra thời tiết, thông báo lịch trình, đi sớm và quay lại nếu điều kiện không an toàn.",
      "Mùa hè, sông có thể dâng nhanh sau mưa lớn. Hãy tuân thủ cảnh báo địa phương và chỉ vui chơi dưới nước ở nơi được phép.",
    ],
    zh: [
      "山区天气变化较快，偏远地区手机信号可能较弱。出发前请确认天气、告知他人行程并尽早出发，遇到危险时及时返回。",
      "夏季大雨后河流水位可能迅速上涨。请遵循当地警告，并只在允许的区域进行水上活动。",
    ],
    ko: [
      "산에서는 날씨가 빠르게 변하고 외진 곳에서는 휴대전화 신호가 약할 수 있습니다. 날씨를 확인하고 일정을 알린 후 일찍 출발하며, 위험하면 돌아가세요.",
      "여름에는 폭우 후 강물이 빠르게 불어날 수 있습니다. 현지 안내를 따르고 물놀이는 허가된 장소에서만 즐겨 주세요.",
    ],
    de: [
      "Das Wetter in den Bergen kann sich schnell ändern, und in abgelegenen Gebieten kann der Empfang schwach sein. Prüfen Sie das Wetter, teilen Sie Ihre Route mit und kehren Sie bei Gefahr um.",
      "Im Sommer können Flüsse nach starkem Regen schnell ansteigen. Beachten Sie örtliche Warnungen und nutzen Sie nur freigegebene Bereiche zum Baden.",
    ],
    ru: [
      "Погода в горах быстро меняется, а в удалённых местах связь может быть слабой. Проверьте прогноз, сообщите кому-нибудь о маршруте, отправляйтесь пораньше и возвращайтесь при опасности.",
      "Летом после сильных дождей реки могут быстро разливаться. Следуйте местным предупреждениям и купайтесь только в разрешённых местах.",
    ],
  },
},
{
  id: "bring",
  title: {
    en: "What to Bring",
    ja: "持ち物",
    vi: "Nên mang theo gì",
    zh: "建议携带物品",
    ko: "준비하면 좋은 것",
    de: "Was Sie mitbringen sollten",
    ru: "Что взять с собой",
  },
  body: {
    en: [
      "Comfortable shoes, a light rain layer, water and some cash are useful. Small shops and local buses may not accept cards or electronic payments.",
      "Prepare snacks and enough water before heading into the mountains or countryside.",
      "In summer, bring sun protection and insect repellent. A light jacket is useful for caves and higher mountain areas, even in August.",
    ],
    ja: [
      "歩きやすい靴、軽い雨具、飲み物、現金があると安心です。小さな店舗や路線バスではカードや電子決済が使えない場合があります。",
      "山や郊外へ行く際は、軽食と十分な飲み物をあらかじめ用意しましょう。",
      "夏は日よけや虫よけを。鍾乳洞や標高の高い場所では8月でも涼しいことがあるため、薄手の上着があると便利です。",
    ],
    vi: [
      "Giày đi bộ thoải mái, áo mưa nhẹ, nước và tiền mặt sẽ rất hữu ích. Một số cửa hàng nhỏ và xe buýt địa phương có thể không nhận thẻ hoặc thanh toán điện tử.",
      "Trước khi đi vào vùng núi hoặc nông thôn, hãy chuẩn bị đồ ăn nhẹ và đủ nước.",
      "Mùa hè nên mang đồ chống nắng và chống côn trùng. Khi đến hang động hoặc vùng núi cao, nên mang áo khoác mỏng vì có thể khá mát ngay cả trong tháng 8.",
    ],
    zh: [
      "舒适的步行鞋、轻便雨具、饮用水和一些现金都很实用。部分小店和当地巴士可能不接受信用卡或电子支付。",
      "前往山区或乡村前，建议提前准备零食和足够的饮用水。",
      "夏天建议携带防晒和驱虫用品。前往洞窟或高海拔地区时，即使8月也可能较凉，建议带一件薄外套。",
    ],
    ko: [
      "편안한 신발, 가벼운 우비, 물과 현금을 준비하면 좋습니다. 일부 작은 상점과 지역 버스에서는 카드나 전자 결제가 어려울 수 있습니다.",
      "산이나 시골 지역으로 이동하기 전에는 간식과 충분한 물을 준비하세요.",
      "여름에는 자외선 차단제와 벌레 퇴치 용품을 준비하세요. 동굴이나 높은 산에서는 8월에도 서늘할 수 있으므로 얇은 겉옷이 유용합니다.",
    ],
    de: [
      "Bequeme Schuhe, eine leichte Regenjacke, Wasser und etwas Bargeld sind praktisch. Kleine Geschäfte und lokale Busse akzeptieren möglicherweise keine Karten oder elektronische Zahlungen.",
      "Für Ausflüge in die Berge oder aufs Land sollten Sie Snacks und ausreichend Wasser mitnehmen.",
      "Im Sommer sind Sonnenschutz und Insektenschutzmittel empfehlenswert. Für Höhlen und höher gelegene Gebiete ist auch im August eine leichte Jacke sinnvoll.",
    ],
    ru: [
      "Удобная обувь, лёгкая дождевка, вода и немного наличных будут полезны. Небольшие магазины и местные автобусы могут не принимать карты или электронные платежи.",
      "Перед поездкой в горы или сельскую местность рекомендуется взять перекус и достаточно воды.",
      "Летом возьмите защиту от солнца и средство от насекомых. Для пещер и высокогорных районов пригодится лёгкая куртка, даже в августе.",
    ],
  },
},
];

/* ------------------------------------------------------------------
 * WHY NISHI TAMA — four reasons to come even when you are not
 * primarily looking for restaurants or shopping.
 * ------------------------------------------------------------------ */

export type WhyReason = { id: string; title: Localized; body: Localized };

export const whyNishiTama: WhyReason[] = [
  {
    id: "escape",
    title: {
      en: "Escape the City",
      ja: "都会を離れる",
      vi: "Rời xa thành phố",
      zh: "远离都市",
      ko: "도시를 벗어나기",
      de: "Der Stadt entkommen",
      ru: "Уйти от города",
    },
    body: {
      en: "Leave the crowds behind and enjoy a quieter side of Tokyo.",
      ja: "人混みを離れて、東京の静かな一面を楽しむ。",
      vi: "Rời xa đám đông và tận hưởng một Tokyo yên tĩnh hơn.",
      zh: "远离人潮，感受东京安静的一面。",
      ko: "인파를 벗어나 도쿄의 조용한 모습을 만나보세요.",
      de: "Lass die Menschenmengen hinter dir und entdecke eine ruhigere Seite Tokios.",
      ru: "Оставьте толпу позади и откройте тихую сторону Токио.",
    },
  },
  {
    id: "river",
    title: {
      en: "Follow the River",
      ja: "川に沿って歩く",
      vi: "Đi dọc dòng sông",
      zh: "沿河而行",
      ko: "강을 따라 걷기",
      de: "Dem Fluss folgen",
      ru: "Идти вдоль реки",
    },
    body: {
      en: "Walk beside the Tama and Akigawa rivers and relax with the sound of water.",
      ja: "多摩川や秋川のほとりを歩き、水の音とともにゆっくり過ごす。",
      vi: "Tản bộ bên sông Tama và Akigawa, thư giãn cùng tiếng nước.",
      zh: "漫步多摩川与秋川河畔，听着流水声放慢脚步。",
      ko: "다마강과 아키가와 강변을 걸으며 물소리와 함께 여유를 느껴보세요.",
      de: "Spaziere am Tama- und Akigawa-Fluss entlang und entspanne beim Klang des Wassers.",
      ru: "Прогуляйтесь вдоль рек Тама и Акигава и расслабьтесь под шум воды.",
    },
  },
  {
    id: "culture",
    title: {
      en: "Discover Local Culture",
      ja: "地域の文化にふれる",
      vi: "Khám phá văn hóa địa phương",
      zh: "感受在地文化",
      ko: "지역 문화를 만나기",
      de: "Lokale Kultur entdecken",
      ru: "Открыть местную культуру",
    },
    body: {
      en: "Explore shrines, old streets and local traditions.",
      ja: "神社や古い街並みを訪れ、地域の伝統にふれる。",
      vi: "Khám phá đền thờ, phố cổ và những truyền thống địa phương.",
      zh: "探访神社、老街和当地传统。",
      ko: "신사와 오래된 거리, 지역의 전통을 만나보세요.",
      de: "Erkunde Schreine, alte Straßen und lokale Traditionen.",
      ru: "Посетите святилища, старые улицы и познакомьтесь с местными традициями.",
    },
  },
  {
    id: "reach",
    title: {
      en: "Easy to Reach",
      ja: "行きやすい",
      vi: "Dễ dàng đến nơi",
      zh: "轻松抵达",
      ko: "가기 쉬운 곳",
      de: "Leicht erreichbar",
      ru: "Легко добраться",
    },
    body: {
      en: "Travel west by train and discover a different side of Tokyo.",
      ja: "電車で西へ向かうだけで、いつもと違う東京に出会える。",
      vi: "Đi tàu về phía tây và khám phá một Tokyo khác biệt.",
      zh: "乘火车向西，探索一个不同的东京。",
      ko: "기차로 서쪽으로 가면 전혀 다른 도쿄를 만날 수 있습니다.",
      de: "Fahr mit dem Zug nach Westen und entdecke eine andere Seite Tokios.",
      ru: "Поезжайте на поезде на запад и откройте для себя другой Токио.",
    },
  
  },
];

/* ------------------------------------------------------------------
 * A DAY AWAY — an illustrative, unhurried day in the mountains.
 * Time-of-day labels only: no clock times or transport durations are
 * stored, because they are not verified. Every step refers to places
 * already described elsewhere in this file / in stations.ts.
 * ------------------------------------------------------------------ */

export type DayMoment = { id: string; label: Localized; text: Localized };

export const sampleDay: DayMoment[] = [
  {
    id: "leave",
    label: { en: "Early", ja: "朝はやく", vi: "Sáng sớm", zh: "清晨", ko: "이른 아침", de: "Früh", ru: "Рано утром" },
    text: {
      en: "Leave Shinjuku and take the train west.",
      ja: "新宿を出て、西へ向かう電車に乗る。",
      vi: "Rời Shinjuku và lên tàu về phía tây.",
      zh: "从新宿出发，搭乘向西的列车。",
      ko: "신주쿠를 떠나 서쪽으로 가는 기차를 탑니다.",
      de: "Verlasse Shinjuku und nimm den Zug nach Westen.",
      ru: "Выезжайте из Синдзюку на поезде на запад.",
    },
  },
  {
    id: "gorge",
    label: { en: "Morning", ja: "午前", vi: "Buổi sáng", zh: "上午", ko: "오전", de: "Vormittag", ru: "Утро" },
    text: {
      en: "Walk along Mitake Gorge beside the Tama River.",
      ja: "多摩川沿いの御岳渓谷を歩く。",
      vi: "Đi bộ dọc hẻm núi Mitake bên sông Tama.",
      zh: "沿多摩川漫步御岳溪谷。",
      ko: "다마강을 따라 미타케 계곡을 걷습니다.",
      de: "Spaziere entlang der Mitake-Schlucht am Tama-Fluss.",
      ru: "Пройдитесь по ущелью Митакэ вдоль реки Тама.",
    },
  },
  {
    id: "shrine",
    label: { en: "Late morning", ja: "昼前", vi: "Gần trưa", zh: "上午稍晚", ko: "늦은 오전", de: "Später Vormittag", ru: "Ближе к полудню" },
    text: {
      en: "Discover Musashi Mitake Shrine on Mount Mitake.",
      ja: "御岳山の武蔵御嶽神社をたずねる。",
      vi: "Khám phá đền Musashi Mitake trên núi Mitake.",
      zh: "探访御岳山上的武藏御岳神社。",
      ko: "미타케산의 무사시 미타케 신사를 둘러봅니다.",
      de: "Entdecke den Musashi-Mitake-Schrein auf dem Berg Mitake.",
      ru: "Загляните в святилище Мусаси Митакэ на горе Митакэ.",
    },
  },
  {
    id: "lunch",
    label: { en: "Midday", ja: "昼", vi: "Giữa trưa", zh: "中午", ko: "정오", de: "Mittag", ru: "Полдень" },
    text: {
      en: "Enjoy a local lunch, or a riverside picnic you brought with you.",
      ja: "地元でランチ、または持参したお弁当で川辺のピクニック。",
      vi: "Thưởng thức bữa trưa địa phương, hoặc dã ngoại bên sông với đồ ăn mang theo.",
      zh: "享用当地午餐，或用自带的便当在河边野餐。",
      ko: "현지에서 점심을 먹거나, 준비해 온 도시락으로 강가 소풍을 즐깁니다.",
      de: "Genieße ein lokales Mittagessen oder ein mitgebrachtes Picknick am Fluss.",
      ru: "Пообедайте в местном кафе или устройте пикник у реки с едой, взятой с собой.",
    },
  },
  {
    id: "forest",
    label: { en: "Afternoon", ja: "午後", vi: "Buổi chiều", zh: "下午", ko: "오후", de: "Nachmittag", ru: "День" },
    text: {
      en: "Walk through the forest and let the day slow down.",
      ja: "森の中を歩き、一日の速度をゆるめる。",
      vi: "Đi bộ xuyên rừng và để một ngày chậm lại.",
      zh: "穿行林间，让这一天慢下来。",
      ko: "숲길을 걸으며 하루의 속도를 늦춥니다.",
      de: "Geh durch den Wald und lass den Tag langsamer werden.",
      ru: "Пройдитесь по лесу и позвольте дню замедлиться.",
    },
  },
  {
    id: "cafe",
    label: { en: "Late afternoon", ja: "夕方", vi: "Cuối chiều", zh: "傍晚", ko: "늦은 오후", de: "Später Nachmittag", ru: "Ближе к вечеру" },
    text: {
      en: "Take a slow café break where you find one.",
      ja: "見つけたカフェで、ゆっくり一息。",
      vi: "Nghỉ chân thong thả tại một quán cà phê bạn tìm thấy.",
      zh: "在偶遇的咖啡馆里慢慢歇一会儿。",
      ko: "눈에 띄는 카페에서 느긋하게 쉬어 갑니다.",
      de: "Mach eine gemütliche Kaffeepause, wo sich eine findet.",
      ru: "Сделайте неспешную паузу в кафе, если оно попадётся.",
    },
  },
  {
    id: "return",
    label: { en: "Evening", ja: "夜", vi: "Buổi tối", zh: "夜晚", ko: "저녁", de: "Abend", ru: "Вечер" },
    text: {
      en: "Take the train back to central Tokyo.",
      ja: "電車で都心へ戻る。",
      vi: "Lên tàu trở về trung tâm Tokyo.",
      zh: "搭乘列车返回东京市中心。",
      ko: "기차를 타고 도쿄 도심으로 돌아갑니다.",
      de: "Nimm den Zug zurück ins Zentrum Tokios.",
      ru: "Вернитесь на поезде в центр Токио.",
    },
  },
];

/* ------------------------------------------------------------------
 * SLOW TRAVEL — weekday-proof things to do, whatever is open.
 * ------------------------------------------------------------------ */

export const slowTravelActivities: Localized<string[]> = {
  en: [
    "Forest walks",
    "Riverside walks",
    "Hiking",
    "Photography",
    "Shrine visits",
    "Seasonal scenery",
    "Picnic",
  ],
  ja: ["森の散策", "川辺の散歩", "ハイキング", "写真", "神社めぐり", "季節の風景", "ピクニック"],
  vi: [
    "Đi bộ trong rừng",
    "Tản bộ ven sông",
    "Leo núi",
    "Chụp ảnh",
    "Viếng đền",
    "Cảnh sắc theo mùa",
    "Dã ngoại",
  ],
  zh: ["森林散步", "河畔漫步", "健行", "摄影", "参拜神社", "四季风景", "野餐"],
  ko: ["숲 산책", "강변 산책", "하이킹", "사진", "신사 방문", "계절 풍경", "소풍"],
  de: [
    "Waldspaziergänge",
    "Spaziergänge am Fluss",
    "Wandern",
    "Fotografie",
    "Schreinbesuche",
    "Jahreszeitliche Landschaft",
    "Picknick",
  ],
  ru: [
    "Прогулки по лесу",
    "Прогулки вдоль реки",
    "Хайкинг",
    "Фотография",
    "Посещение святилищ",
    "Сезонные пейзажи",
    "Пикник",
  ],
};

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
  {
    q: {
      en: "How do I get around Nishi Tama?",
      ja: "西多摩内はどう移動しますか？",
      vi: "Di chuyển trong Nishi Tama bằng cách nào?",
      zh: "在西多摩如何出行？",
      ko: "니시타마 안에서는 어떻게 이동하나요?",
      de: "Wie komme ich in Nishi Tama voran?",
      ru: "Как передвигаться по Ниси Таме?",
    },
    a: {
      en: "Public transportation includes trains and local buses, but services become less frequent in mountainous areas. Check the latest train and bus schedules before travelling.",
      ja: "電車や路線バスで移動できますが、山間部では本数が少なくなる場合があります。出発前に最新の電車やバスの時刻を確認しましょう。",
      vi: "Phương tiện công cộng gồm tàu và xe buýt địa phương, nhưng tần suất giảm ở vùng núi. Hãy kiểm tra lịch tàu và xe buýt mới nhất trước khi đi.",
      zh: "公共交通包括火车和地方巴士，但山区班次较少。出行前请查询最新的火车和巴士时刻表。",
      ko: "기차와 지역 버스로 이동할 수 있지만 산간 지역에서는 운행 편수가 줄어듭니다. 출발 전에 최신 열차·버스 시간표를 확인하세요.",
      de: "Zum Nahverkehr gehören Züge und lokale Busse, doch in Bergregionen fahren sie seltener. Prüfe vor der Reise die aktuellen Zug- und Busfahrpläne.",
      ru: "Общественный транспорт — поезда и местные автобусы, но в горных районах они ходят реже. Перед поездкой сверьтесь с актуальным расписанием поездов и автобусов.",
    },
  },
  {
    q: {
      en: "Which station should I get off at?",
      ja: "どの駅で降りればいいですか？",
      vi: "Tôi nên xuống ga nào?",
      zh: "我应该在哪一站下车？",
      ko: "어느 역에서 내려야 하나요?",
      de: "An welchem Bahnhof soll ich aussteigen?",
      ru: "На какой станции выходить?",
    },
    a: {
      en: "The best station depends on what you want to see. Ome is convenient for the old town and Showa-retro atmosphere, Mitake for mountain and shrine visits, and Okutama for lakes, valleys and outdoor activities.",
      ja: "目的地によって最寄り駅が異なります。青梅は旧市街や昭和レトロ、御嶽は山や神社、奥多摩は湖や渓谷、アウトドアを楽しむのに便利です。",
      vi: "Ga phù hợp nhất tùy vào điều bạn muốn xem. Ome tiện cho phố cổ và không khí hoài niệm thời Showa, Mitake để lên núi và viếng đền, còn Okutama cho hồ, thung lũng và hoạt động ngoài trời.",
      zh: "最合适的车站取决于你想看什么。青梅便于游览老城区和昭和复古风情，御岳适合登山和参拜神社，奥多摩则适合湖泊、溪谷和户外活动。",
      ko: "무엇을 보고 싶은지에 따라 알맞은 역이 다릅니다. 오메는 구시가지와 쇼와 레트로 분위기에, 미타케는 산과 신사 방문에, 오쿠타마는 호수·계곡·야외 활동에 편리합니다.",
      de: "Der beste Bahnhof hängt davon ab, was du sehen möchtest. Ome eignet sich für die Altstadt und die Showa-Retro-Atmosphäre, Mitake für Berg- und Schreinbesuche und Okutama für Seen, Täler und Outdoor-Aktivitäten.",
      ru: "Подходящая станция зависит от ваших планов. Оме удобна для старого города и атмосферы ретро эпохи Сёва, Митакэ — для гор и святилищ, Окутама — для озёр, долин и активного отдыха.",
    },
  },
  {
    q: {
      en: "Are there restaurants and cafés near the stations?",
      ja: "駅の近くに飲食店やカフェはありますか？",
      vi: "Gần các ga có nhà hàng và quán cà phê không?",
      zh: "车站附近有餐厅和咖啡馆吗？",
      ko: "역 근처에 음식점과 카페가 있나요?",
      de: "Gibt es Restaurants und Cafés in Bahnhofsnähe?",
      ru: "Есть ли рядом со станциями рестораны и кафе?",
    },
    a: {
      en: "Many stations have restaurants, cafés or small local shops nearby, but choices are more limited in some mountain areas. Check the station guide before you travel.",
      ja: "駅の周辺には飲食店やカフェ、地元のお店がありますが、山間部では選択肢が少ない駅もあります。出発前に駅周辺の情報を確認しましょう。",
      vi: "Nhiều ga có nhà hàng, quán cà phê hoặc cửa hàng nhỏ gần đó, nhưng lựa chọn hạn chế hơn ở một số vùng núi. Hãy xem hướng dẫn về ga trước khi đi.",
      zh: "许多车站附近都有餐厅、咖啡馆或当地小店，但部分山区选择较少。出行前请查看车站指南。",
      ko: "많은 역 주변에 음식점, 카페, 작은 현지 상점이 있지만 일부 산간 지역은 선택지가 적습니다. 출발 전에 역 안내를 확인하세요.",
      de: "Viele Bahnhöfe haben Restaurants, Cafés oder kleine lokale Läden in der Nähe, doch in manchen Bergregionen ist die Auswahl geringer. Sieh dir vor der Reise den Bahnhofsführer an.",
      ru: "Возле многих станций есть рестораны, кафе или небольшие местные магазины, но в некоторых горных районах выбор скромнее. Перед поездкой посмотрите путеводитель по станциям.",
    },
  },
  {
    q: {
      en: "Do I need to book activities in advance?",
      ja: "アクティビティは事前予約が必要ですか？",
      vi: "Tôi có cần đặt trước các hoạt động không?",
      zh: "参加活动需要提前预约吗？",
      ko: "액티비티는 미리 예약해야 하나요?",
      de: "Muss ich Aktivitäten im Voraus buchen?",
      ru: "Нужно ли бронировать активности заранее?",
    },
    a: {
      en: "Some outdoor activities and guided experiences require advance reservations, especially during weekends and peak seasons. Check the provider's official website before visiting.",
      ja: "アウトドアアクティビティやガイド付き体験の中には、事前予約が必要なものがあります。特に週末や繁忙期は、訪問前に公式サイトを確認しましょう。",
      vi: "Một số hoạt động ngoài trời và trải nghiệm có hướng dẫn viên yêu cầu đặt trước, đặc biệt vào cuối tuần và mùa cao điểm. Hãy kiểm tra trang web chính thức của đơn vị tổ chức trước khi đến.",
      zh: "部分户外活动和有向导的体验需要提前预约，周末和旺季尤其如此。到访前请查看服务方的官方网站。",
      ko: "일부 야외 활동과 가이드 동반 체험은 사전 예약이 필요하며, 특히 주말과 성수기에 그렇습니다. 방문 전에 운영업체의 공식 웹사이트를 확인하세요.",
      de: "Manche Outdoor-Aktivitäten und geführten Erlebnisse erfordern eine Reservierung, vor allem an Wochenenden und in der Hochsaison. Prüfe vor dem Besuch die offizielle Website des Anbieters.",
      ru: "Некоторые виды активного отдыха и экскурсии с гидом требуют предварительной брони, особенно в выходные и в высокий сезон. Перед визитом проверьте официальный сайт организатора.",
    },
  },
  {
    q: {
      en: "Is Nishi Tama suitable for families?",
      ja: "西多摩は家族連れでも楽しめますか？",
      vi: "Nishi Tama có phù hợp với gia đình không?",
      zh: "西多摩适合家庭出游吗？",
      ko: "니시타마는 가족 여행에 적합한가요?",
      de: "Ist Nishi Tama für Familien geeignet?",
      ru: "Подходит ли Ниси Тама для семей?",
    },
    a: {
      en: "Yes. Nishi Tama offers family-friendly options such as parks, riverside walks, nature spots and cultural attractions. Choose activities according to the season and your family's pace.",
      ja: "はい。公園、川辺の散策、自然スポット、文化施設など、家族で楽しめる場所があります。季節や家族のペースに合わせて行き先を選びましょう。",
      vi: "Có. Nishi Tama có nhiều lựa chọn thân thiện với gia đình như công viên, đường đi dạo ven sông, điểm ngắm thiên nhiên và các điểm văn hóa. Hãy chọn hoạt động theo mùa và nhịp độ của gia đình.",
      zh: "适合。西多摩有公园、河畔步道、自然景点和文化设施等适合家庭的去处。请根据季节和家人的节奏来选择活动。",
      ko: "네. 니시타마에는 공원, 강변 산책로, 자연 명소, 문화 시설 등 가족이 즐길 수 있는 곳이 많습니다. 계절과 가족의 속도에 맞춰 활동을 고르세요.",
      de: "Ja. Nishi Tama bietet familienfreundliche Möglichkeiten wie Parks, Spaziergänge am Fluss, Naturplätze und kulturelle Sehenswürdigkeiten. Wähle Aktivitäten je nach Jahreszeit und dem Tempo deiner Familie.",
      ru: "Да. В Ниси Таме есть парки, прогулки вдоль реки, природные места и культурные достопримечательности, удобные для семей. Выбирайте занятия по сезону и темпу вашей семьи.",
    },
  },
  {
    q: {
      en: "Is it easy to visit Nishi Tama without a car?",
      ja: "車がなくても西多摩を訪れやすいですか？",
      vi: "Có dễ đến Nishi Tama mà không cần ô tô không?",
      zh: "没有汽车也方便游览西多摩吗？",
      ko: "차 없이도 니시타마를 여행하기 쉬운가요?",
      de: "Lässt sich Nishi Tama gut ohne Auto besuchen?",
      ru: "Легко ли посещать Ниси Тама без машины?",
    },
    a: {
      en: "Yes, many major destinations can be reached by train and bus, but some mountain attractions require additional bus travel or a longer walk. Check the route and timetable before you go.",
      ja: "はい。主要な観光地の多くは電車やバスでアクセスできますが、山間部の観光スポットではバスの利用や徒歩が必要な場合があります。事前に経路と時刻表を確認しましょう。",
      vi: "Có, nhiều điểm đến chính có thể tới bằng tàu và xe buýt, nhưng một số điểm tham quan trên núi cần thêm chặng xe buýt hoặc đi bộ xa hơn. Hãy kiểm tra lộ trình và lịch trình trước khi đi.",
      zh: "方便。许多主要景点可乘火车和巴士抵达，但部分山区景点需要再换乘巴士或步行较长距离。出行前请确认路线和时刻表。",
      ko: "네. 주요 목적지 상당수는 기차와 버스로 갈 수 있지만, 일부 산악 명소는 버스를 더 타거나 오래 걸어야 합니다. 출발 전에 경로와 시간표를 확인하세요.",
      de: "Ja, viele wichtige Ziele sind mit Zug und Bus erreichbar, doch für manche Bergattraktionen braucht es eine zusätzliche Busfahrt oder einen längeren Fußweg. Prüfe Route und Fahrplan vor der Abreise.",
      ru: "Да, до многих основных мест можно добраться поездом и автобусом, но к некоторым горным достопримечательностям нужен ещё автобус или долгая пешая прогулка. Проверьте маршрут и расписание заранее.",
    },
  },
  {
    q: {
      en: "Where can I find information about local events?",
      ja: "地域のイベント情報はどこで見られますか？",
      vi: "Tôi có thể tìm thông tin về các sự kiện địa phương ở đâu?",
      zh: "在哪里可以找到当地活动信息？",
      ko: "지역 행사 정보는 어디에서 볼 수 있나요?",
      de: "Wo finde ich Informationen zu lokalen Veranstaltungen?",
      ru: "Где найти информацию о местных событиях?",
    },
    a: {
      en: "Check our Events page for seasonal festivals, fireworks, traditional performances and other events across Nishi Tama. Event dates and details may change, so confirm them on the official website before visiting.",
      ja: "西多摩各地の季節の祭り、花火大会、伝統芸能などは「イベント」ページで紹介しています。開催日や内容が変更される場合もあるため、訪問前に公式サイトで確認してください。",
      vi: "Hãy xem trang Sự kiện của chúng tôi để biết các lễ hội theo mùa, pháo hoa, biểu diễn truyền thống và các sự kiện khác trên khắp Nishi Tama. Ngày và chi tiết sự kiện có thể thay đổi, hãy xác nhận trên trang web chính thức trước khi đến.",
      zh: "请查看我们的「活动」页面，了解西多摩各地的季节祭典、烟火大会、传统表演等活动。活动日期和内容可能有变，到访前请在官方网站确认。",
      ko: "니시타마 각지의 계절 축제, 불꽃놀이, 전통 공연 등은 저희 '이벤트' 페이지에서 소개합니다. 행사 날짜와 내용은 바뀔 수 있으니 방문 전에 공식 웹사이트에서 확인하세요.",
      de: "Auf unserer Veranstaltungsseite findest du jahreszeitliche Feste, Feuerwerke, traditionelle Aufführungen und weitere Events in ganz Nishi Tama. Termine und Details können sich ändern — bestätige sie vor dem Besuch auf der offiziellen Website.",
      ru: "Загляните на нашу страницу «События»: там сезонные фестивали, фейерверки, традиционные представления и другие мероприятия по всей Ниси Таме. Даты и детали могут меняться — уточняйте их на официальном сайте перед визитом.",
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
