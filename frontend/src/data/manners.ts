import type { Localized } from "@/lib/i18n";

/* ------------------------------------------------------------------
 * MANNERS / ETIQUETTE — single source of truth for visitor etiquette
 * tips. Extracted from src/data/content.ts during the data-architecture
 * cleanup (content unchanged, only moved).
 * ------------------------------------------------------------------ */

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
