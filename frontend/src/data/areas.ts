import { images } from "@/config/images";
import type { Localized } from "@/lib/i18n";

/* ------------------------------------------------------------------
 * MUNICIPALITIES — the 8 Nishi Tama municipalities. Single source of
 * truth: extracted from src/data/content.ts during the data-architecture
 * cleanup (content unchanged, only moved).
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
