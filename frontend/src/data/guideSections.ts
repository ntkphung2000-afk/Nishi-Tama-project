import type { Localized } from "@/lib/i18n";

/* ------------------------------------------------------------------
 * GUIDE SECTIONS — single source of truth for "how to visit"
 * practical-info blocks. Extracted from src/data/content.ts during
 * the data-architecture cleanup (content unchanged, only moved).
 * ------------------------------------------------------------------ */

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
