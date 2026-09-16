import type { Localized } from "@/lib/i18n";

/* ------------------------------------------------------------------
 * ITINERARIES — single source of truth for sample day-plans, plus
 * their duration/interest filter options. Extracted from
 * src/data/content.ts during the data-architecture cleanup (content
 * unchanged, only moved).
 * ------------------------------------------------------------------ */

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
