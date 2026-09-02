import type { Localized } from "@/lib/i18n";

/* ------------------------------------------------------------------
 * RAILWAY DATA
 * Station names and codes are editable plain text — no generated image.
 * No travel times are stored anywhere: they are not verified.
 * ------------------------------------------------------------------ */

export type RailStation = {
  /** JR station code, e.g. "JC 05". Empty string when not applicable. */
  code: string;
  en: string;
  ja: string;
  /** Visually emphasised on the map. */
  key?: boolean;
};

/** Central Tokyo → Tachikawa (JR Chuo Line, selected stations only). */
export const chuoLineStations: RailStation[] = [
  { code: "JC 01", en: "Tokyo", ja: "東京駅" },
  { code: "JC 02", en: "Kanda", ja: "神田駅" },
  { code: "JC 03", en: "Ochanomizu", ja: "御茶ノ水駅" },
  { code: "JC 04", en: "Yotsuya", ja: "四ツ谷駅" },
  { code: "JC 05", en: "Shinjuku", ja: "新宿駅", key: true },
  { code: "JC 09", en: "Kichijoji", ja: "吉祥寺駅" },
  { code: "JC 12", en: "Mitaka", ja: "三鷹駅" },
  { code: "JC 16", en: "Kokubunji", ja: "国分寺駅" },
  { code: "JC 19", en: "Tachikawa", ja: "立川駅", key: true },
];

/** Tachikawa → Ome (JR Ome Line). Selected trains run through from central Tokyo. */
export const omeLineStations: RailStation[] = [
  { code: "JC 19", en: "Tachikawa", ja: "立川駅", key: true },
  { code: "JC 55", en: "Haijima", ja: "拝島駅", key: true },
  { code: "JC 56", en: "Ushihama", ja: "牛浜駅" },
  { code: "JC 57", en: "Fussa", ja: "福生駅" },
  { code: "JC 58", en: "Hamura", ja: "羽村駅" },
  { code: "JC 59", en: "Ozaku", ja: "小作駅" },
  { code: "JC 60", en: "Kabe", ja: "河辺駅" },
  { code: "JC 61", en: "Higashi-Ome", ja: "東青梅駅" },
  { code: "JC 62", en: "Ome", ja: "青梅駅", key: true },
];

/** Ome → Okutama (JR Ome Line, branded "Tokyo Adventure Line"). */
export const adventureLineStations: RailStation[] = [
  { code: "JC 62", en: "Ome", ja: "青梅駅", key: true },
  { code: "JC 63", en: "Miyanohira", ja: "宮ノ平駅" },
  { code: "JC 64", en: "Hinatawada", ja: "日向和田駅" },
  { code: "JC 65", en: "Ishigamimae", ja: "石神前駅" },
  { code: "JC 66", en: "Futamatao", ja: "二俣尾駅" },
  { code: "JC 67", en: "Ikusabata", ja: "軍畑駅" },
  { code: "JC 68", en: "Sawai", ja: "沢井駅" },
  { code: "JC 69", en: "Mitake", ja: "御嶽駅", key: true },
  { code: "JC 70", en: "Kawai", ja: "川井駅" },
  { code: "JC 71", en: "Kori", ja: "古里駅" },
  { code: "JC 72", en: "Hatonosu", ja: "鳩ノ巣駅", key: true },
  { code: "JC 73", en: "Shiromaru", ja: "白丸駅" },
  { code: "JC 74", en: "Okutama", ja: "奥多摩駅", key: true },
];

/* ------------------------------------------------------------------ */

export type StationCard = {
  id: string;
  en: string;
  ja: string;
  code: string;
  line: Localized;
  /** Municipality label shown on the card. */
  municipality: Localized;
  /** Matching id in src/data/content.ts → areas. */
  areaId: string;
  description: Localized;
  /**
   * A short travel-character phrase (2–4 words) summarising what this
   * stop is about. Derived only from `description` — no new places.
   */
  character: Localized;
};

const omeLine: Localized = {
  en: "JR Ome Line",
  ja: "JR青梅線",
  vi: "Tuyến JR Ome",
  zh: "JR青梅线",
  ko: "JR 오메선",
  de: "JR-Ome-Linie",
  ru: "Линия JR Оме",
};

const adventureLine: Localized = {
  en: "JR Ome Line — Tokyo Adventure Line",
  ja: "JR青梅線（東京アドベンチャーライン）",
  vi: "Tuyến JR Ome — Tokyo Adventure Line",
  zh: "JR青梅线（东京冒险线）",
  ko: "JR 오메선 (도쿄 어드벤처 라인)",
  de: "JR-Ome-Linie — Tokyo Adventure Line",
  ru: "Линия JR Оме — Tokyo Adventure Line",
};

const itsukaichiHub: Localized = {
  en: "JR Ome Line / JR Itsukaichi Line / JR Hachiko Line",
  ja: "JR青梅線・五日市線・八高線",
  vi: "Tuyến JR Ome / Itsukaichi / Hachiko",
  zh: "JR青梅线／五日市线／八高线",
  ko: "JR 오메선 / 이쓰카이치선 / 하치코선",
  de: "JR-Ome-, Itsukaichi- und Hachiko-Linie",
  ru: "Линии JR Оме, Ицукаити и Хатико",
};

export const stationCards: StationCard[] = [
  {
    id: "haijima",
    en: "Haijima",
    ja: "拝島駅",
    code: "JC 55",
    character: {
      en: "Junction to the valley",
      ja: "渓谷への乗換駅",
      vi: "Ga trung chuyển tới thung lũng",
      zh: "通往溪谷的换乘站",
      ko: "계곡으로 가는 환승역",
      de: "Umstieg ins Tal",
      ru: "Пересадка к долине",
    },
    line: itsukaichiHub,
    municipality: {
      en: "Akishima / gateway to Akiruno",
      ja: "昭島市／あきる野方面への乗換駅",
      vi: "Akishima / cửa ngõ tới Akiruno",
      zh: "昭岛市／前往秋留野的换乘站",
      ko: "아키시마시 / 아키루노 방면 환승역",
      de: "Akishima / Umstieg Richtung Akiruno",
      ru: "Акисима / пересадка в сторону Акируно",
    },
    areaId: "akiruno",
    description: {
      en: "The junction where several lines meet — change here for the Itsukaichi Line toward the Akigawa Valley.",
      ja: "複数の路線が交わる乗換駅。秋川渓谷方面へは、ここで五日市線に乗り換えます。",
      vi: "Ga trung chuyển của nhiều tuyến — đổi sang tuyến Itsukaichi để tới thung lũng Akigawa.",
      zh: "多条线路交汇的换乘站，可在此换乘五日市线前往秋川溪谷。",
      ko: "여러 노선이 만나는 환승역. 아키가와 계곡으로는 이쓰카이치선으로 갈아탑니다.",
      de: "Knotenpunkt mehrerer Linien — hier in die Itsukaichi-Linie Richtung Akigawa-Tal umsteigen.",
      ru: "Узловая станция нескольких линий — здесь пересадка на линию Ицукаити к долине Акигава.",
    },
  },
  {
    id: "ushihama",
    en: "Ushihama",
    ja: "牛浜駅",
    code: "JC 56",
    character: {
      en: "America-town streets",
      ja: "アメリカンな街並み",
      vi: "Phố mang dáng dấp nước Mỹ",
      zh: "美式风情街区",
      ko: "아메리칸 타운 거리",
      de: "Straßen im Amerika-Stil",
      ru: "Улицы в американском стиле",
    },
    line: omeLine,
    municipality: { en: "Fussa City", ja: "福生市", vi: "Thành phố Fussa", zh: "福生市", ko: "훗사시", de: "Stadt Fussa", ru: "Город Фусса" },
    areaId: "fussa",
    description: {
      en: "The closest station to Fussa's \"America town\" — the 1950s American House and the shops of Base Side Street are a short walk east.",
      ja: "福生の“アメリカンな街”に最も近い駅。1950年代のアメリカンハウスやベースサイドストリートの店々へは、東へ歩いてすぐです。",
      vi: "Ga gần nhất với \"khu phố Mỹ\" của Fussa — American House thập niên 1950 và các cửa hàng trên Base Side Street chỉ cách một quãng đi bộ về phía đông.",
      zh: "距福生「美式街区」最近的车站——1950年代的美国之家与Base Side Street的商店，向东步行即达。",
      ko: "훗사의 '아메리칸 타운'과 가장 가까운 역. 1950년대 아메리칸 하우스와 베이스 사이드 스트리트 상점들이 동쪽으로 도보 거리에 있습니다.",
      de: "Der nächste Bahnhof zu Fussas „Amerika-Viertel“ — das American House aus den 1950ern und die Läden der Base Side Street liegen wenige Gehminuten östlich.",
      ru: "Ближайшая станция к «американскому кварталу» Фуссы: American House 1950-х и магазины Base Side Street — в нескольких минутах ходьбы на восток.",
    },
  },
  {
    id: "fussa",
    en: "Fussa",
    ja: "福生駅",
    code: "JC 57",
    character: {
      en: "Sake town by the river",
      ja: "川沿いの酒蔵の街",
      vi: "Thị trấn sake bên sông",
      zh: "河畔清酒之城",
      ko: "강가의 사케 양조 도시",
      de: "Sake-Stadt am Fluss",
      ru: "Саке-городок у реки",
    },
    line: omeLine,
    municipality: { en: "Fussa City", ja: "福生市", vi: "Thành phố Fussa", zh: "福生市", ko: "훗사시", de: "Stadt Fussa", ru: "Город Фусса" },
    areaId: "fussa",
    description: {
      en: "A riverside town of sake breweries and a street culture shaped by decades of Japanese and American life side by side.",
      ja: "酒蔵が残る多摩川沿いの街。日米の暮らしが隣り合ってきた独特の街並みが広がります。",
      vi: "Thị trấn ven sông với các nhà nấu rượu sake và văn hoá đường phố Nhật – Mỹ đan xen.",
      zh: "多摩川畔的酒藏之城，日美文化交融形成独特街景。",
      ko: "사케 양조장이 남은 강변 도시로, 일본과 미국 문화가 어우러진 거리 풍경이 특징입니다.",
      de: "Flussstadt mit Sake-Brauereien und einer Straßenkultur zwischen Japan und Amerika.",
      ru: "Городок у реки с саке-варнями и уличной культурой на стыке японского и американского.",
    },
  },
  {
    id: "hamura",
    en: "Hamura",
    ja: "羽村駅",
    code: "JC 58",
    character: {
      en: "Historic weir + waterway",
      ja: "取水堰と玉川上水",
      vi: "Đập cổ + kênh dẫn nước",
      zh: "古取水堰与水道",
      ko: "역사적인 취수언과 수로",
      de: "Historisches Wehr + Wasserweg",
      ru: "Старая плотина и канал",
    },
    line: omeLine,
    municipality: { en: "Hamura City", ja: "羽村市", vi: "Thành phố Hamura", zh: "羽村市", ko: "하무라시", de: "Stadt Hamura", ru: "Город Хамура" },
    areaId: "hamura",
    description: {
      en: "Walk from the station to the historic Hamura Weir, where the Edo-period Tamagawa Josui waterway begins.",
      ja: "駅から歩いて羽村取水堰へ。江戸へ水を運んだ玉川上水の起点です。",
      vi: "Đi bộ từ ga tới đập Hamura, nơi khởi đầu kênh Tamagawa Josui thời Edo.",
      zh: "从车站步行可达羽村取水堰，江户时代玉川上水的起点。",
      ko: "역에서 걸어서 하무라 취수언까지. 에도 시대 다마가와 조스이의 기점입니다.",
      de: "Vom Bahnhof zum Hamura-Wehr, dem Beginn des Tamagawa-Josui-Kanals aus der Edo-Zeit.",
      ru: "От станции пешком к плотине Хамура — началу канала Тамагава-Дзёсуй эпохи Эдо.",
    },
  },
  {
    id: "ozaku",
    en: "Ozaku",
    ja: "小作駅",
    code: "JC 59",
    character: {
      en: "Quiet gateway to farmland",
      ja: "農の里への静かな入口",
      vi: "Cửa ngõ yên tĩnh tới vùng đồng ruộng",
      zh: "通往田园的宁静门户",
      ko: "농촌으로 향하는 조용한 관문",
      de: "Ruhiges Tor zum Ackerland",
      ru: "Тихие ворота к полям",
    },
    line: omeLine,
    municipality: {
      en: "Hamura City / access to Mizuho & Hinode",
      ja: "羽村市／瑞穂・日の出方面へ",
      vi: "Thành phố Hamura / hướng Mizuho & Hinode",
      zh: "羽村市／前往瑞穗・日之出方向",
      ko: "하무라시 / 미즈호·히노데 방면",
      de: "Stadt Hamura / Richtung Mizuho und Hinode",
      ru: "Город Хамура / в сторону Мидзухо и Хиноде",
    },
    areaId: "mizuho",
    description: {
      en: "A quiet local stop used as a bus gateway toward the farmland of Mizuho and the hills of Hinode.",
      ja: "静かな地元の駅。瑞穂の農の風景や日の出の山あいへはバスが出ています。",
      vi: "Ga địa phương yên tĩnh, có xe buýt đi vùng nông nghiệp Mizuho và đồi núi Hinode.",
      zh: "宁静的地方车站，可搭巴士前往瑞穗的田园与日之出的山丘。",
      ko: "조용한 지역 역으로, 미즈호의 농촌과 히노데 산자락으로 가는 버스가 있습니다.",
      de: "Ruhiger Bahnhof; von hier Busse zu Mizuhos Feldern und Hinodes Hügeln.",
      ru: "Тихая местная станция; отсюда автобусы к полям Мидзухо и холмам Хиноде.",
    },
  },
  {
    id: "kabe",
    en: "Kabe",
    ja: "河辺駅",
    code: "JC 60",
    character: {
      en: "Onsen stop + hillside temple",
      ja: "駅直結の温泉と観音寺",
      vi: "Ga có onsen + chùa trên sườn đồi",
      zh: "温泉车站与山坡观音寺",
      ko: "온천이 있는 역 + 산비탈 사찰",
      de: "Onsen am Bahnhof + Hangtempel",
      ru: "Онсэн у станции + храм на склоне",
    },
    line: omeLine,
    municipality: { en: "Ome City", ja: "青梅市", vi: "Thành phố Ome", zh: "青梅市", ko: "오메시", de: "Stadt Ome", ru: "Город Оме" },
    areaId: "ome",
    description: {
      en: "A modern station with a day-spa hot spring built right onto the concourse, and the bus gateway to the hillside temple of Shiofune Kannon-ji.",
      ja: "改札コンコースに日帰り温泉が直結する新しい駅。斜面に広がる塩船観音寺へのバスもここから出ています。",
      vi: "Ga hiện đại với một suối nước nóng ngay trong sảnh ga, và là điểm đón xe buýt đến chùa Shiofune Kannon-ji trên sườn đồi.",
      zh: "站厅直连日归温泉的现代车站，也是前往山坡上塩船观音寺的巴士起点。",
      ko: "개찰 콘코스에 당일 온천이 바로 이어지는 현대적인 역이며, 비탈에 자리한 시오후네 관음사로 가는 버스가 출발합니다.",
      de: "Ein moderner Bahnhof mit einem Onsen direkt an der Bahnhofshalle und Bus-Ausgangspunkt zum Hangtempel Shiofune Kannon-ji.",
      ru: "Современная станция с онсэном прямо в вестибюле и отправная точка автобусов к храму Сиофунэ Каннон-дзи на склоне холма.",
    },
  },
  {
    id: "higashi-ome",
    en: "Higashi-Ome",
    ja: "東青梅駅",
    code: "JC 61",
    character: {
      en: "Quiet edge of Ome",
      ja: "青梅の街はずれ、静かに",
      vi: "Rìa yên tĩnh của Ome",
      zh: "青梅安静的城郊",
      ko: "조용한 오메 외곽",
      de: "Ruhiger Rand von Ome",
      ru: "Тихая окраина Оме",
    },
    line: omeLine,
    municipality: { en: "Ome City", ja: "青梅市", vi: "Thành phố Ome", zh: "青梅市", ko: "오메시", de: "Stadt Ome", ru: "Город Оме" },
    areaId: "ome",
    description: {
      en: "A quiet local station on the edge of Ome, within walking reach of Shiofune Kannon-ji and a handful of small, well-loved eateries.",
      ja: "青梅の街はずれにある静かな駅。塩船観音寺や、地元で親しまれる小さな飲食店へ歩いて向かえます。",
      vi: "Một ga địa phương yên tĩnh ở rìa Ome, trong tầm đi bộ tới chùa Shiofune Kannon-ji và vài quán ăn nhỏ được yêu thích.",
      zh: "位于青梅城郊的宁静车站，步行可达塩船观音寺以及几家深受当地人喜爱的小餐馆。",
      ko: "오메 외곽의 조용한 지역 역. 시오후네 관음사와 현지에서 사랑받는 작은 식당들이 걸어갈 거리에 있습니다.",
      de: "Ein ruhiger Bahnhof am Rand von Ome, zu Fuß erreichbar sind Shiofune Kannon-ji und einige kleine, beliebte Lokale.",
      ru: "Тихая местная станция на окраине Оме; пешком можно дойти до храма Сиофунэ Каннон-дзи и нескольких небольших любимых горожанами кафе.",
    },
  },
  {
    id: "ome",
    en: "Ome",
    ja: "青梅駅",
    code: "JC 62",
    character: {
      en: "Retro town + local culture",
      ja: "レトロな街と地域の文化",
      vi: "Phố hoài cổ + văn hóa địa phương",
      zh: "复古老街与在地文化",
      ko: "복고풍 거리 + 지역 문화",
      de: "Retro-Stadt + lokale Kultur",
      ru: "Ретро-город + местная культура",
    },
    line: omeLine,
    municipality: { en: "Ome City", ja: "青梅市", vi: "Thành phố Ome", zh: "青梅市", ko: "오메시", de: "Stadt Ome", ru: "Город Оме" },
    areaId: "ome",
    description: {
      en: "The heart of the old post town: retro streets, temples and the start of the Tokyo Adventure Line into the mountains.",
      ja: "宿場町の中心。レトロな街並みと寺社が残り、ここから山へ向かう東京アドベンチャーラインが始まります。",
      vi: "Trung tâm thị trấn trạm dịch cổ: phố hoài cổ, đền chùa và điểm khởi đầu Tokyo Adventure Line.",
      zh: "旧宿场町的中心，复古街道与寺庙林立，也是东京冒险线的起点。",
      ko: "옛 역참 마을의 중심. 복고풍 거리와 사찰이 있고, 도쿄 어드벤처 라인이 시작됩니다.",
      de: "Herz der alten Poststadt: Retro-Straßen, Tempel und Start der Tokyo Adventure Line.",
      ru: "Сердце старого почтового города: ретро-улицы, храмы и начало Tokyo Adventure Line.",
    },
  },
  {
    id: "mitake",
    en: "Mitake",
    ja: "御嶽駅",
    code: "JC 69",
    character: {
      en: "Mountain, shrine, gorge",
      ja: "山と神社と渓谷",
      vi: "Núi, đền và hẻm núi",
      zh: "山、神社与溪谷",
      ko: "산, 신사, 계곡",
      de: "Berg, Schrein, Schlucht",
      ru: "Гора, святилище, ущелье",
    },
    line: adventureLine,
    municipality: { en: "Ome City", ja: "青梅市", vi: "Thành phố Ome", zh: "青梅市", ko: "오메시", de: "Stadt Ome", ru: "Город Оме" },
    areaId: "ome",
    description: {
      en: "The stop for Mitake Gorge and, by bus and cable car, the shrine village on Mount Mitake.",
      ja: "御岳渓谷の最寄り駅。バスとケーブルカーを乗り継げば、御岳山の集落へ。",
      vi: "Ga cho hẻm núi Mitake; đi buýt và cáp treo lên làng đền trên núi Mitake.",
      zh: "御岳溪谷的最近车站，转乘巴士与缆车可上御岳山。",
      ko: "미타케 계곡의 가까운 역이며, 버스와 케이블카로 미타케산 마을에 갈 수 있습니다.",
      de: "Bahnhof für die Mitake-Schlucht; mit Bus und Seilbahn hinauf zum Bergdorf.",
      ru: "Станция у ущелья Митакэ; автобусом и фуникулёром — к деревне на горе Митакэ.",
    },
  },
  {
    id: "hatonosu",
    en: "Hatonosu",
    ja: "鳩ノ巣駅",
    code: "JC 72",
    character: {
      en: "Valley + quiet walks",
      ja: "渓谷と静かな散歩",
      vi: "Hẻm núi + lối đi yên tĩnh",
      zh: "溪谷与静谧步道",
      ko: "계곡 + 조용한 산책",
      de: "Schlucht + stille Wege",
      ru: "Ущелье + тихие прогулки",
    },
    line: adventureLine,
    municipality: { en: "Okutama Town", ja: "奥多摩町", vi: "Thị trấn Okutama", zh: "奥多摩町", ko: "오쿠타마초", de: "Okutama", ru: "Посёлок Окутама" },
    areaId: "okutama",
    description: {
      en: "A tiny mountain station a short walk above Hatonosu Valley and its rock-lined stretch of the Tama River.",
      ja: "山あいの小さな駅。少し歩けば、岩が連なる鳩ノ巣渓谷の流れが見えてきます。",
      vi: "Ga nhỏ trên núi, đi bộ một đoạn là tới hẻm núi Hatonosu bên sông Tama.",
      zh: "山间小站，步行不远即可俯瞰鸠之巢溪谷的多摩川岩景。",
      ko: "산속 작은 역. 조금만 걸으면 바위가 이어지는 하토노스 계곡이 나옵니다.",
      de: "Kleiner Bergbahnhof, wenige Minuten über der Hatonosu-Schlucht.",
      ru: "Крошечная горная станция чуть выше ущелья Хатоносу на реке Тама.",
    },
  },
  {
    id: "shiromaru",
    en: "Shiromaru",
    ja: "白丸駅",
    code: "JC 73",
    character: {
      en: "Lake + still water",
      ja: "湖と穏やかな水面",
      vi: "Hồ nước + mặt nước tĩnh lặng",
      zh: "湖泊与静水",
      ko: "호수 + 잔잔한 물",
      de: "See + stilles Wasser",
      ru: "Озеро + тихая вода",
    },
    line: adventureLine,
    municipality: { en: "Okutama Town", ja: "奥多摩町", vi: "Thị trấn Okutama", zh: "奥多摩町", ko: "오쿠타마초", de: "Okutama", ru: "Посёлок Окутама" },
    areaId: "okutama",
    description: {
      en: "An unstaffed halt beside Shiromaru Lake, the calm green water known for paddling and quiet walks.",
      ja: "白丸湖のそばにある無人駅。穏やかな水面はカヌーや散策で知られます。",
      vi: "Ga không nhân viên bên hồ Shiromaru, mặt nước xanh lặng hợp chèo thuyền và đi dạo.",
      zh: "白丸湖畔的无人车站，湖水平静，适合划船与漫步。",
      ko: "시로마루호 옆의 무인역. 잔잔한 물빛으로 카누와 산책으로 알려져 있습니다.",
      de: "Unbesetzter Haltepunkt am Shiromaru-See, bekannt für Paddeln und ruhige Wege.",
      ru: "Станция без персонала у озера Сиромару — тихая вода для каякинга и прогулок.",
    },
  },
  {
    id: "okutama",
    en: "Okutama",
    ja: "奥多摩駅",
    code: "JC 74",
    character: {
      en: "Mountains + outdoor adventure",
      ja: "山とアウトドア",
      vi: "Núi non + phiêu lưu ngoài trời",
      zh: "群山与户外探险",
      ko: "산 + 야외 모험",
      de: "Berge + Outdoor-Abenteuer",
      ru: "Горы + активный отдых",
    },
    line: adventureLine,
    municipality: { en: "Okutama Town", ja: "奥多摩町", vi: "Thị trấn Okutama", zh: "奥多摩町", ko: "오쿠타마초", de: "Okutama", ru: "Посёлок Окутама" },
    areaId: "okutama",
    description: {
      en: "The western terminus of the line and the base for Lake Okutama, the limestone cave and mountain trails.",
      ja: "青梅線の終着駅。奥多摩湖や日原鍾乳洞、登山道への拠点です。",
      vi: "Ga cuối phía tây, điểm xuất phát tới hồ Okutama, hang đá vôi và các cung leo núi.",
      zh: "线路西端终点站，前往奥多摩湖、钟乳洞与登山道的据点。",
      ko: "노선의 서쪽 종착역으로, 오쿠타마호·석회동굴·등산로의 거점입니다.",
      de: "Westliche Endstation und Ausgangspunkt für See, Tropfsteinhöhle und Bergpfade.",
      ru: "Западная конечная станция — отправная точка к озеру, пещере и горным тропам.",
    },
  },
  {
    id: "musashi-itsukaichi",
    en: "Musashi-Itsukaichi",
    ja: "武蔵五日市駅",
    code: "JC 86",
    character: {
      en: "Valley gateway to the forest",
      ja: "渓谷と森への玄関口",
      vi: "Cửa ngõ thung lũng vào rừng",
      zh: "通往森林的溪谷门户",
      ko: "숲으로 이어지는 계곡 관문",
      de: "Tal-Tor zum Wald",
      ru: "Ворота долины к лесу",
    },
    line: {
      en: "JR Itsukaichi Line",
      ja: "JR五日市線",
      vi: "Tuyến JR Itsukaichi",
      zh: "JR五日市线",
      ko: "JR 이쓰카이치선",
      de: "JR-Itsukaichi-Linie",
      ru: "Линия JR Ицукаити",
    },
    municipality: {
      en: "Akiruno City / gateway to Hinohara",
      ja: "あきる野市／檜原村への玄関口",
      vi: "Thành phố Akiruno / cửa ngõ tới Hinohara",
      zh: "秋留野市／前往桧原村的门户",
      ko: "아키루노시 / 히노하라무라 관문",
      de: "Stadt Akiruno / Tor nach Hinohara",
      ru: "Город Акируно / ворота в Хинохару",
    },
    areaId: "akiruno",
    description: {
      en: "Terminus for the Akigawa Valley; buses continue from here into the forests of Hinohara Village.",
      ja: "秋川渓谷の玄関口。ここからバスで檜原村の森へと入っていきます。",
      vi: "Ga cuối tới thung lũng Akigawa; từ đây có xe buýt vào rừng làng Hinohara.",
      zh: "秋川溪谷的终点站，可由此搭巴士深入桧原村森林。",
      ko: "아키가와 계곡의 종착역. 여기서 버스로 히노하라 마을 숲으로 들어갑니다.",
      de: "Endstation für das Akigawa-Tal; Busse fahren weiter nach Hinohara.",
      ru: "Конечная у долины Акигава; отсюда автобусы в леса деревни Хинохара.",
    },
  },
];

/** Look up a station card by its route id (e.g. "ome"). */
export function stationById(id: string): StationCard | undefined {
  return stationCards.find((s) => s.id === id);
}
