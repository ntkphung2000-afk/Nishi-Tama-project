import type { Localized } from "@/lib/i18n";

/* ------------------------------------------------------------------
 * FAQS — single source of truth for the frequently-asked-questions
 * list. Extracted from src/data/content.ts during the
 * data-architecture cleanup (content unchanged, only moved).
 * ------------------------------------------------------------------ */

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

