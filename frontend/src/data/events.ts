import { images } from "@/config/images";
import type { Localized } from "@/lib/i18n";

/* ------------------------------------------------------------------
 * EVENTS — single source of truth for featured/seasonal events.
 * Extracted from src/data/content.ts during the data-architecture
 * cleanup (content unchanged, only moved).
 * ------------------------------------------------------------------ */

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
