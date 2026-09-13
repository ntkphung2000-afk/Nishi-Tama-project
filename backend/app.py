import os
import re
import threading
import time
import uuid
from pathlib import Path

from flask import Flask, Response, jsonify, request, stream_with_context
from flask_cors import CORS
from langdetect import DetectorFactory, LangDetectException, detect

from knowledge_retrieval import ProjectKnowledge

DetectorFactory.seed = 0
app = Flask(__name__)

ALLOWED_ORIGINS = [x.strip() for x in os.getenv("ALLOWED_ORIGINS", "*").split(",") if x.strip()]
CORS(app, resources={r"/*": {"origins": ALLOWED_ORIGINS or ["*"]}}, expose_headers=["X-Session-Id", "X-Response-Locale", "X-Answer-Mode"])

KNOWLEDGE_FILE = os.getenv("KNOWLEDGE_FILE", str(Path(__file__).with_name("project_knowledge.json")))
SESSION_TTL_SECONDS = int(os.getenv("SESSION_TTL_SECONDS", "7200"))
TOP_K_CONTEXT = int(os.getenv("TOP_K_CONTEXT", "5"))

PROJECT_LANGUAGES = {
    "en": "English", "ja": "Japanese", "vi": "Vietnamese", "zh": "Chinese",
    "ko": "Korean", "de": "German", "ru": "Russian",
}

knowledge = ProjectKnowledge(KNOWLEDGE_FILE)
conversation_states = {}
session_last_seen = {}
session_lock = threading.Lock()


def normalize_locale(value):
    return str(value).strip().lower().replace("_", "-") if value else None


def resolve_response_language(message, payload):
    explicit = normalize_locale(payload.get("locale") or payload.get("language") or request.headers.get("X-Locale"))
    if explicit:
        base = explicit.split("-")[0]
        if base in PROJECT_LANGUAGES:
            return base
    try:
        if len(message.strip()) >= 3:
            base = normalize_locale(detect(message)).split("-")[0]
            if base in PROJECT_LANGUAGES:
                return base
    except (LangDetectException, AttributeError):
        pass
    return "en"


def cleanup_sessions():
    now = time.time()
    with session_lock:
        expired = [sid for sid, ts in session_last_seen.items() if now - ts > SESSION_TTL_SECONDS]
        for sid in expired:
            conversation_states.pop(sid, None)
            session_last_seen.pop(sid, None)


def get_session(payload):
    cleanup_sessions()
    sid = payload.get("session_id") or request.headers.get("X-Session-Id") or str(uuid.uuid4())
    with session_lock:
        conversation_states.setdefault(sid, {"last_station": None})
        session_last_seen[sid] = time.time()
    return sid, conversation_states[sid]


COPY = {
    "en": {"hello":"Hello! I’m the Nishi-Tama AI Guide. Ask me about stations, restaurants, cafés, sightseeing, nature, events, access, manners or trip ideas.","thanks":"You’re welcome!","bye":"Have a great trip in Nishi-Tama!","station":"{station} is a JR Ome Line station covered by this Nishi-Tama guide.","places":"Here are the matching verified places near {station}:","around":"Here are verified places currently listed around {station}:","none":"The current project data does not list a matching place near {station}.","address":"Address / access","map":"Google Maps"},
    "ja": {"hello":"こんにちは！Nishi-Tama AI Guideです。駅、レストラン、カフェ、観光、自然、イベント、アクセス、マナー、旅行プランについて質問できます。","thanks":"どういたしまして！","bye":"西多摩の旅を楽しんでください！","station":"{station}は、このNishi-Tamaガイドで紹介しているJR青梅線の駅です。","places":"{station}周辺の確認済みスポットはこちらです：","around":"{station}周辺で現在登録されている確認済みスポットはこちらです：","none":"現在のプロジェクトデータでは、{station}周辺に該当する場所は登録されていません。","address":"住所・アクセス","map":"Google Maps"},
    "vi": {"hello":"Xin chào! Tôi là Nishi-Tama AI Guide. Bạn có thể hỏi về ga, nhà hàng, quán cà phê, tham quan, thiên nhiên, sự kiện, cách đi lại, quy tắc hoặc gợi ý chuyến đi.","thanks":"Không có gì!","bye":"Chúc bạn có chuyến đi tuyệt vời ở Nishi-Tama!","station":"{station} là một ga trên tuyến JR Ome được giới thiệu trong hướng dẫn Nishi-Tama này.","places":"Các địa điểm đã xác minh phù hợp gần {station}:","around":"Các địa điểm đã xác minh hiện được liệt kê quanh {station}:","none":"Dữ liệu dự án hiện tại không liệt kê địa điểm phù hợp gần {station}.","address":"Địa chỉ / cách đi","map":"Google Maps"},
    "zh": {"hello":"你好！我是 Nishi-Tama AI Guide。你可以询问车站、餐厅、咖啡馆、景点、自然、活动、交通、礼仪或旅行建议。","thanks":"不客气！","bye":"祝你在西多摩旅行愉快！","station":"{station} 是本 Nishi-Tama 指南介绍的 JR 青梅线车站。","places":"{station} 附近已核实的相关地点：","around":"{station} 周边目前登记的已核实地点：","none":"当前项目数据中没有列出 {station} 附近符合条件的地点。","address":"地址 / 交通","map":"Google Maps"},
    "ko": {"hello":"안녕하세요! Nishi-Tama AI Guide입니다. 역, 음식점, 카페, 관광, 자연, 행사, 교통, 예절 또는 여행 아이디어를 물어보세요.","thanks":"천만에요!","bye":"즐거운 니시타마 여행 되세요!","station":"{station}은(는) 이 Nishi-Tama 가이드에 포함된 JR 오메선 역입니다.","places":"{station} 주변의 확인된 관련 장소입니다:","around":"{station} 주변에 현재 등록된 확인된 장소입니다:","none":"현재 프로젝트 데이터에는 {station} 주변의 관련 장소가 등록되어 있지 않습니다.","address":"주소 / 접근","map":"Google Maps"},
    "de": {"hello":"Hallo! Ich bin der Nishi-Tama AI Guide. Frag mich nach Bahnhöfen, Restaurants, Cafés, Sehenswürdigkeiten, Natur, Events, Anreise, Verhalten oder Ausflugsideen.","thanks":"Gern!","bye":"Viel Spaß in Nishi-Tama!","station":"{station} ist ein JR-Ome-Line-Bahnhof in diesem Nishi-Tama-Guide.","places":"Diese verifizierten Orte passen in der Nähe von {station}:","around":"Diese verifizierten Orte sind rund um {station} aufgeführt:","none":"In den aktuellen Projektdaten ist kein passender Ort bei {station} aufgeführt.","address":"Adresse / Anreise","map":"Google Maps"},
    "ru": {"hello":"Здравствуйте! Я Nishi-Tama AI Guide. Спросите о станциях, ресторанах, кафе, достопримечательностях, природе, событиях, транспорте, правилах поведения или идеях для поездки.","thanks":"Пожалуйста!","bye":"Приятной поездки по Ниси-Тама!","station":"{station} — станция линии JR Ome, представленная в этом путеводителе Nishi-Tama.","places":"Проверенные подходящие места рядом с {station}:","around":"Проверенные места, указанные рядом с {station}:","none":"В текущих данных проекта нет подходящего места рядом с {station}.","address":"Адрес / как добраться","map":"Google Maps"},
}

CATEGORY_LABELS = {
    "en":{"attraction":"Sightseeing","restaurant":"Restaurants","cafe":"Cafés","shopping":"Shopping / souvenirs","nature":"Nature"},
    "ja":{"attraction":"観光","restaurant":"レストラン","cafe":"カフェ","shopping":"買い物・お土産","nature":"自然"},
    "vi":{"attraction":"Tham quan","restaurant":"Nhà hàng","cafe":"Quán cà phê","shopping":"Mua sắm / quà lưu niệm","nature":"Thiên nhiên"},
    "zh":{"attraction":"景点","restaurant":"餐厅","cafe":"咖啡馆","shopping":"购物 / 纪念品","nature":"自然"},
    "ko":{"attraction":"관광","restaurant":"음식점","cafe":"카페","shopping":"쇼핑 / 기념품","nature":"자연"},
    "de":{"attraction":"Sehenswürdigkeiten","restaurant":"Restaurants","cafe":"Cafés","shopping":"Einkaufen / Souvenirs","nature":"Natur"},
    "ru":{"attraction":"Достопримечательности","restaurant":"Рестораны","cafe":"Кафе","shopping":"Покупки / сувениры","nature":"Природа"},
}

GREETING = re.compile(r"^(hi|hello|hey|こんにちは|こんばんは|おはよう|xin chào|chào|你好|您好|안녕|hallo|guten tag|привет|здравствуйте)[!.?\s]*$", re.I)
THANKS = re.compile(r"^(thanks|thank you|ありがとう|ありがとうございます|cảm ơn|谢谢|감사|danke|спасибо)[!.?\s]*$", re.I)
BYE = re.compile(r"^(bye|goodbye|see you|さようなら|またね|tạm biệt|再见|안녕히|tschüss|auf wiedersehen|пока|до свидания)[!.?\s]*$", re.I)

LOCATION_WORDS = ["where","located","location","map","maps","どこ","場所","地図","マップ","ở đâu","vị trí","bản đồ","哪里","在哪","地图","어디","위치","지도","wo","standort","karte","где","карта"]
AROUND_WORDS = ["what is around","what's around","around","nearby","places near","周辺","近くには","何があります","quanh","gần ga","có gì","周边","附近有什么","주변","근처","rund um","in der nähe","рядом","вокруг"]
PLAN_WORDS = ["recommend","plan","itinerary","day trip","suggest","おすすめ","プラン","日帰り","gợi ý","lịch trình","推荐","行程","추천","일정","empfiehl","tagesausflug","рекоменду","маршрут","план"]

AUGUST_EVENTS = [
    ("8/1","Ome Summer Fireworks Festival","青梅市納涼花火大会","Ome City"),
    ("8/1","Akiruno Summer Festival","あきる野夏まつり","Akiruno City"),
    ("8/7–9","Fussa Tanabata Festival","福生七夕まつり","Fussa City"),
    ("8/8","Tamanochi Kazematsuri Shishimai","玉の内風祭獅子舞","Hinode Town"),
    ("8/8","Okutama Summer Fireworks Festival","奥多摩納涼花火大会","Okutama Town"),
    ("8/22","Ekinishi Summer Fest","エキニシサマーフェス","Mizuho Town"),
    ("8/22–23","Hossawa Falls Furusato Summer Festival","払沢の滝ふるさと夏まつり","Hinohara Village"),
    ("8/29","Yoruichi","ヨルイチ","Akiruno City"),
]

FAQ = {
    "what": {
        "patterns":["what is nishi tama","what is nishi-tama","西多摩とは","nishi-tama là gì","nishi tama là gì","什么是西多摩","니시타마는 무엇","was ist nishi-tama","что такое ниси-тама"],
        "answers":{
            "en":"Nishi-Tama is the western region of Tokyo Metropolis, made up of eight municipalities. It is largely mountainous and rural compared with central Tokyo.",
            "ja":"西多摩は東京都の西部に位置する地域で、8つの市町村から構成されています。都心とは対照的に、山地や里山の風景が広がります。",
            "vi":"Nishi-Tama là khu vực phía tây của Tokyo Metropolis, gồm 8 đơn vị hành chính và có nhiều núi, cảnh quan nông thôn hơn trung tâm Tokyo.",
            "zh":"西多摩位于东京都西部，由 8 个市町村组成，与东京市中心相比以山地和乡村景观为主。",
            "ko":"니시타마는 도쿄도 서부 지역으로 8개 시정촌으로 이루어져 있으며 도심보다 산지와 전원 풍경이 많습니다.",
            "de":"Nishi-Tama ist die westliche Region der Präfektur Tokio. Sie besteht aus acht Gemeinden und ist deutlich bergiger und ländlicher als das Zentrum Tokios.",
            "ru":"Ниси-Тама — западная часть префектуры Токио, состоящая из восьми муниципалитетов; она заметно более гористая и сельская, чем центр Токио.",
        }},
    "where": {"patterns":["where is nishi tama","where is nishi-tama","西多摩はどこ","nishi-tama ở đâu","西多摩在哪里","니시타마는 어디","wo liegt nishi-tama","где находится ниси-тама"],"answers":{
        "en":"Nishi-Tama lies at the western edge of Tokyo, beyond Tachikawa and extending into the mountains toward the prefectural border. The places covered by this site are still within Tokyo.",
        "ja":"西多摩は立川より西、山あいの都県境まで広がるエリアです。このサイトで紹介している場所はすべて東京都内です。",
        "vi":"Nishi-Tama nằm ở rìa phía tây Tokyo, phía sau Tachikawa và kéo dài vào vùng núi gần ranh giới tỉnh. Các địa điểm trên trang vẫn thuộc Tokyo.",
        "zh":"西多摩位于东京最西部，从立川以西延伸到山区的都县边界。本网站介绍的地点仍都属于东京都。",
        "ko":"니시타마는 다치카와보다 서쪽, 도쿄 서쪽 끝의 산악 지역까지 이어지며 이 사이트의 장소는 모두 도쿄도 안에 있습니다.",
        "de":"Nishi-Tama liegt am westlichen Rand Tokios, westlich von Tachikawa bis in die Berge an der Präfekturgrenze. Alle auf dieser Website vorgestellten Orte liegen in Tokio.",
        "ru":"Ниси-Тама находится на западной окраине Токио, за Татикава и далее в горы к границе префектуры. Все места на сайте находятся в пределах Токио.",
    }},
    "shinjuku": {"patterns":["from shinjuku","shinjuku to nishi","新宿から","từ shinjuku","从新宿","신주쿠에서","von shinjuku","из синдзюку"],"answers":{
        "en":"From Shinjuku, take a JR line west toward Tachikawa, then transfer to the Ome Line for Ome/Okutama or the Itsukaichi Line for Akiruno. Travel time varies by destination, so check a route planner.",
        "ja":"新宿からはJRで立川方面へ向かい、青梅・奥多摩方面なら青梅線、あきる野方面なら五日市線に乗り換えます。所要時間は目的地により異なるため、経路検索をご確認ください。",
        "vi":"Từ Shinjuku, đi JR về phía Tachikawa, rồi đổi sang tuyến Ome để đi Ome/Okutama hoặc tuyến Itsukaichi để đi Akiruno. Thời gian tùy điểm đến nên hãy kiểm tra ứng dụng tìm đường.",
        "zh":"从新宿乘 JR 向立川方向前往，去青梅/奥多摩换乘青梅线，去秋留野换乘五日市线。所需时间因目的地而异，请查看路线规划。",
        "ko":"신주쿠에서 JR을 타고 다치카와 방면으로 간 뒤 오메·오쿠타마는 오메선, 아키루노는 이쓰카이치선으로 환승하세요. 목적지에 따라 시간이 달라 경로 확인이 필요합니다.",
        "de":"Von Shinjuku fährt man mit JR Richtung Tachikawa und steigt für Ome/Okutama in die Ome Line oder für Akiruno in die Itsukaichi Line um. Die Fahrzeit hängt vom Ziel ab.",
        "ru":"Из Синдзюку езжайте на JR в сторону Татикава, затем пересядьте на линию Ome для Омэ/Окутама или Itsukaichi для Акируно. Время зависит от цели, проверьте маршрут заранее.",
    }},
    "one_day": {"patterns":["one day","day trip","日帰り","1日","một ngày","一日游","하루","tagesausflug","одноднев"],"answers":{
        "en":"Yes. Ome, Akiruno or Fussa work well as day trips. Okutama and Hinohara are farther west, so start early and check return train and bus times.",
        "ja":"はい。青梅、あきる野、福生などは日帰りに適しています。奥多摩や檜原村は少し遠いので、早めの出発と帰りの時刻確認がおすすめです。",
        "vi":"Có. Ome, Akiruno hoặc Fussa phù hợp cho chuyến đi trong ngày. Okutama và Hinohara xa hơn nên hãy đi sớm và kiểm tra giờ về.",
        "zh":"可以。青梅、秋留野或福生适合一日游。奥多摩和桧原村更远，建议早点出发并确认返程时间。",
        "ko":"가능합니다. 오메, 아키루노, 훗사는 당일치기에 좋고 오쿠타마와 히노하라는 더 멀기 때문에 일찍 출발하고 귀가 시간을 확인하세요.",
        "de":"Ja. Ome, Akiruno oder Fussa eignen sich gut als Tagesausflug. Okutama und Hinohara liegen weiter westlich; starten Sie früh und prüfen Sie Rückfahrzeiten.",
        "ru":"Да. Омэ, Акируно или Фусса подходят для однодневной поездки. Окутама и Хинохара дальше на западе, поэтому выезжайте рано и проверьте обратный транспорт.",
    }},
    "season": {"patterns":["best season","season to visit","おすすめの季節","季節","mùa nào","最佳季节","什么时候去","계절","jahreszeit","сезон","когда лучше"],"answers":{
        "en":"Autumn is best for hiking and colour, summer for rivers and festivals, early spring for blossoms. Winter is the quietest, with the clearest air.",
        "ja":"紅葉と登山なら秋、川と祭りなら夏、花なら早春。冬は最も静かで、空気が澄んでいます。",
        "vi":"Mùa thu phù hợp cho đi bộ và ngắm lá, mùa hè cho sông và lễ hội, đầu xuân cho hoa. Mùa đông yên tĩnh nhất và không khí trong nhất.",
        "zh":"秋季适合徒步和红叶，夏季适合河川和节庆，早春适合赏花。冬季最安静，空气最清澈。",
        "ko":"단풍과 하이킹은 가을, 강과 축제는 여름, 꽃은 초봄이 좋습니다. 겨울은 가장 조용하고 공기가 맑습니다.",
        "de":"Herbst ist ideal für Wandern und Laubfärbung, Sommer für Flüsse und Feste, früher Frühling für Blüten. Im Winter ist es am ruhigsten.",
        "ru":"Осень лучше для походов и осенних красок, лето — для рек и фестивалей, ранняя весна — для цветения. Зимой тише всего.",
    }},
    "food": {"patterns":["local food","what food","foods should","食べて","地元の食","món ăn","当地美食","먹거리","lokales essen","местная еда"],"answers":{
        "en":"Try seasonal vegetables from local farms, soba and river fish, plum products from the Ome area, and regional sweets and drinks.",
        "ja":"地場野菜、蕎麦や川魚、青梅周辺の梅の加工品、地域の菓子や飲み物がおすすめです。",
        "vi":"Hãy thử rau theo mùa, soba và cá sông, sản phẩm từ mơ ở Ome cùng bánh kẹo và đồ uống địa phương.",
        "zh":"可以尝试当地时令蔬菜、荞麦面和河鱼、青梅地区的梅子制品，以及地方甜点和饮品。",
        "ko":"지역 제철 채소, 소바와 민물고기, 오메 지역의 매실 제품, 지역 과자와 음료를 추천합니다.",
        "de":"Probieren Sie saisonales Gemüse, Soba und Flussfisch, Pflaumenprodukte aus Ome sowie regionale Süßigkeiten und Getränke.",
        "ru":"Попробуйте сезонные овощи, собу и речную рыбу, продукты из слив умэ из района Омэ, а также местные сладости и напитки.",
    }},
    "manners": {"patterns":["manners","etiquette","マナー","礼儀","quy tắc","礼仪","예절","manieren","этикет"],"answers":{
        "en":"Keep noise down on trains and in residential areas, carry your rubbish with you, ask before photographing people, and stay on marked trails in nature.",
        "ja":"電車や住宅地では静かに、ごみは持ち帰り、人を撮るときは声をかけ、自然では決められた道を歩きましょう。",
        "vi":"Hãy giữ yên lặng trên tàu và khu dân cư, mang rác về, xin phép trước khi chụp người khác và đi đúng lối mòn được đánh dấu.",
        "zh":"在电车和住宅区请保持安静，垃圾自行带走，拍摄他人前先征得同意，在自然区域请走规定路线。",
        "ko":"전철과 주거 지역에서는 조용히 하고, 쓰레기는 가져가며, 사람을 촬영하기 전에 허락을 구하고, 자연에서는 지정된 길을 이용하세요.",
        "de":"Seien Sie in Zügen und Wohngebieten leise, nehmen Sie Müll mit, fragen Sie vor Fotos von Personen um Erlaubnis und bleiben Sie auf markierten Wegen.",
        "ru":"Соблюдайте тишину в поездах и жилых районах, уносите мусор, спрашивайте разрешение перед фотографированием людей и не сходите с размеченных троп.",
    }},
    "foreign": {"patterns":["foreign tourist","foreign visitors","外国","du khách nước ngoài","外国游客","외국인","ausländ","иностран"],"answers":{
        "en":"Yes. Nishi-Tama is suitable for foreign visitors, though multilingual support is less extensive than in central Tokyo. Translation apps and offline maps are useful.",
        "ja":"はい。外国人旅行者でも訪れやすいですが、都心ほど多言語対応は多くありません。翻訳アプリやオフライン地図があると安心です。",
        "vi":"Có. Du khách nước ngoài có thể tham quan Nishi-Tama, nhưng hỗ trợ đa ngôn ngữ ít hơn trung tâm Tokyo. Ứng dụng dịch và bản đồ ngoại tuyến sẽ hữu ích.",
        "zh":"可以。外国游客可以游览西多摩，但多语言支持不如东京市中心完善。翻译应用和离线地图会有帮助。",
        "ko":"네. 외국인 여행자도 방문하기 좋지만 도쿄 도심만큼 다국어 안내가 많지는 않습니다. 번역 앱과 오프라인 지도가 도움이 됩니다.",
        "de":"Ja. Nishi-Tama ist für internationale Besucher geeignet, aber die Mehrsprachigkeit ist geringer als im Zentrum Tokios. Übersetzungs-Apps und Offline-Karten helfen.",
        "ru":"Да. Ниси-Тама подходит иностранным туристам, хотя многоязычная поддержка слабее, чем в центре Токио. Полезны переводчик и офлайн-карты.",
    }},
}

AUGUST_PATTERNS = ["what's happening in august","what is happening in august","august events","events in august","8月","tháng 8","八月","8월","im august","август"]


def has_any(text, phrases):
    low = text.lower().replace("’", "'")
    return any(p.lower() in low for p in phrases)


def event_answer(locale):
    intro = {"en":"These August events are listed in the Nishi-Tama project:","ja":"Nishi-Tamaプロジェクトに掲載されている8月のイベントはこちらです：","vi":"Các sự kiện tháng 8 trong dự án Nishi-Tama:","zh":"Nishi-Tama 项目中列出的 8 月活动：","ko":"Nishi-Tama 프로젝트의 8월 행사:","de":"Diese August-Veranstaltungen sind im Nishi-Tama-Projekt aufgeführt:","ru":"В проекте Nishi-Tama указаны следующие события августа:"}[locale]
    note = {"en":"Dates can change, so check the organiser’s latest information before travelling.","ja":"日程は変更となる場合があるため、出発前に主催者の最新情報をご確認ください。","vi":"Ngày có thể thay đổi, hãy kiểm tra thông tin mới nhất của ban tổ chức trước khi đi.","zh":"日期可能变更，出发前请确认主办方最新信息。","ko":"일정은 변경될 수 있으므로 방문 전 최신 정보를 확인하세요.","de":"Termine können sich ändern; bitte vor der Anreise aktuelle Veranstalterangaben prüfen.","ru":"Даты могут измениться; перед поездкой проверьте актуальную информацию организаторов."}[locale]
    lines = [intro, ""]
    for date,en_name,ja_name,place in AUGUST_EVENTS:
        name = ja_name if locale == "ja" else f"{en_name} ({ja_name})"
        lines.append(f"• {date} — {name} — {place}")
    lines += ["", note]
    return "\n".join(lines)


def direct_faq(message, locale):
    if has_any(message, AUGUST_PATTERNS):
        return event_answer(locale)
    for item in FAQ.values():
        if has_any(message, item["patterns"]):
            return item["answers"][locale]
    return None


def place_lines(places, locale):
    c = COPY[locale]
    lines = []
    for p in places:
        lines.append(f"• {p.get('name','')}")
        if p.get("address"):
            lines.append(f"  {c['address']}: {p['address']}")
        if p.get("googleMaps"):
            lines.append(f"  {c['map']}: {p['googleMaps']}")
    return "\n".join(lines)


def grouped_lines(places, locale):
    groups = {}
    for p in places:
        groups.setdefault(p.get("category","other"), []).append(p)
    blocks=[]
    for cat in ["attraction","restaurant","cafe","shopping","nature"]:
        vals=groups.get(cat,[])
        if not vals: continue
        blocks.append(f"{CATEGORY_LABELS[locale].get(cat,cat)}:")
        for p in vals:
            blocks.append(f"• {p.get('name','')}")
            if p.get("googleMaps"):
                blocks.append(f"  Google Maps: {p['googleMaps']}")
    return "\n".join(blocks)


def simple_plan(result, locale):
    station = result.get("station_info")
    places = result.get("exact_places",[])
    if not station or not places:
        return None
    attractions=[p for p in places if p.get("category") in {"attraction","nature"}]
    food=[p for p in places if p.get("category") in {"restaurant","cafe"}]
    if not attractions: return None
    labels={
        "en":["A simple plan using verified places:","Morning","Lunch / break","Afternoon","Check current hours and transport before travelling."],
        "ja":["確認済みスポットを使った簡単なプランです：","午前","昼食・休憩","午後","出発前に最新の営業時間と交通情報をご確認ください。"],
        "vi":["Gợi ý đơn giản bằng các địa điểm đã xác minh:","Buổi sáng","Ăn trưa / nghỉ","Buổi chiều","Hãy kiểm tra giờ mở cửa và giao thông mới nhất trước khi đi."],
        "zh":["使用已核实地点的简单行程：","上午","午餐 / 休息","下午","出发前请确认最新营业时间和交通信息。"],
        "ko":["확인된 장소를 이용한 간단한 일정입니다:","오전","점심 / 휴식","오후","출발 전 최신 영업시간과 교통 정보를 확인하세요."],
        "de":["Ein einfacher Plan mit verifizierten Orten:","Vormittag","Mittag / Pause","Nachmittag","Bitte aktuelle Öffnungszeiten und Verkehrsinformationen prüfen."],
        "ru":["Простой маршрут по проверенным местам:","Утро","Обед / перерыв","После обеда","Перед поездкой проверьте актуальные часы работы и транспорт."],
    }[locale]
    lines=[labels[0],"",f"{labels[1]}: {attractions[0].get('name','')}"]
    if attractions[0].get("googleMaps"): lines.append(f"Google Maps: {attractions[0]['googleMaps']}")
    if food:
        lines += ["",f"{labels[2]}: {food[0].get('name','')}"]
        if food[0].get("googleMaps"): lines.append(f"Google Maps: {food[0]['googleMaps']}")
    if len(attractions)>1:
        lines += ["",f"{labels[3]}: {attractions[1].get('name','')}"]
        if attractions[1].get("googleMaps"): lines.append(f"Google Maps: {attractions[1]['googleMaps']}")
    lines += ["",labels[4]]
    return "\n".join(lines)


def generic_trip_options(locale):
    texts={
        "en":"The project already includes several trip styles: One Day Nature Escape, Half Day River Trip, Half Day Town Walk, One Day Mountain & Shrine, and One Day Summer Festival. Tell me which station or interest you prefer and I can narrow it down using verified places.",
        "ja":"このプロジェクトには「1日・自然に浸る」「半日・川沿い」「半日・街歩き」「1日・山と信仰」「1日・夏祭り」などのプランがあります。希望する駅や興味を教えていただければ、確認済みスポットから絞り込みます。",
        "vi":"Dự án có các kiểu hành trình như One Day Nature Escape, Half Day River Trip, Half Day Town Walk, One Day Mountain & Shrine và One Day Summer Festival. Hãy cho tôi biết ga hoặc sở thích của bạn để tôi thu hẹp bằng các địa điểm đã xác minh.",
        "zh":"项目已有多种行程类型：一日自然、半日河畔、半日街区漫步、一日山岳与神社、一日夏祭。告诉我你想去的车站或兴趣，我可以用已核实地点进一步筛选。",
        "ko":"프로젝트에는 하루 자연 여행, 반일 강변 여행, 반일 마을 산책, 하루 산·신사 여행, 하루 여름 축제 등의 코스가 있습니다. 원하는 역이나 관심사를 알려주면 확인된 장소로 좁혀 드립니다.",
        "de":"Das Projekt enthält bereits mehrere Reisetypen: One Day Nature Escape, Half Day River Trip, Half Day Town Walk, One Day Mountain & Shrine und One Day Summer Festival. Nenne mir einen Bahnhof oder ein Interesse, dann grenze ich die Route mit verifizierten Orten ein.",
        "ru":"В проекте уже есть варианты: One Day Nature Escape, Half Day River Trip, Half Day Town Walk, One Day Mountain & Shrine и One Day Summer Festival. Назовите станцию или интерес, и я уточню маршрут по проверенным местам.",
    }
    return texts[locale]


def safe_unknown(locale):
    return {
        "en":"I don’t have a verified project answer for that yet. Try asking about a station, restaurant, café, sightseeing spot, nature, August events, Shinjuku access, seasons, food, manners or a day trip.",
        "ja":"その質問について、現在のプロジェクトデータだけでは確認済みの回答を出せません。駅、レストラン、カフェ、観光、自然、8月のイベント、新宿からのアクセス、季節、食、マナー、日帰りプランなどを質問してください。",
        "vi":"Tôi chưa có câu trả lời đã xác minh cho câu hỏi đó. Hãy hỏi về ga, nhà hàng, quán cà phê, tham quan, thiên nhiên, sự kiện tháng 8, cách đi từ Shinjuku, mùa, đồ ăn, quy tắc hoặc chuyến đi trong ngày.",
        "zh":"当前项目数据中还没有足够的已核实信息来回答这个问题。你可以询问车站、餐厅、咖啡馆、景点、自然、8 月活动、从新宿的交通、季节、美食、礼仪或一日游。",
        "ko":"현재 프로젝트 데이터만으로는 그 질문에 대해 검증된 답변을 제공하기 어렵습니다. 역, 음식점, 카페, 관광, 자연, 8월 행사, 신주쿠 교통, 계절, 음식, 예절 또는 당일치기 여행을 물어보세요.",
        "de":"Dazu habe ich in den aktuellen Projektdaten noch keine verifizierte Antwort. Frage nach Bahnhöfen, Restaurants, Cafés, Sehenswürdigkeiten, Natur, August-Events, Anreise ab Shinjuku, Jahreszeiten, Essen, Verhalten oder Tagesausflügen.",
        "ru":"В текущих данных проекта пока нет проверенного ответа на этот вопрос. Спросите о станциях, ресторанах, кафе, достопримечательностях, природе, событиях августа, дороге из Синдзюку, сезонах, еде, правилах поведения или однодневной поездке.",
    }[locale]


def stream_text(text):
    for i in range(0,len(text),120):
        yield text[i:i+120]


def answer_message(message, locale, session):
    stripped=message.strip()
    c=COPY[locale]
    if GREETING.match(stripped): return c["hello"],"fast"
    if THANKS.match(stripped): return c["thanks"],"fast"
    if BYE.match(stripped): return c["bye"],"fast"

    faq=direct_faq(message,locale)
    if faq: return faq,"faq"

    result=knowledge.answer_context(message,top_k=TOP_K_CONTEXT)
    station=result.get("station_info")
    if station:
        session["last_station"]=station.get("station")
    elif session.get("last_station") and (result.get("detected_category") or has_any(message,AROUND_WORDS+PLAN_WORDS)):
        # Natural follow-up: "what about cafés?" after asking about Ome.
        result=knowledge.answer_context(f"{message} {session['last_station']}",top_k=TOP_K_CONTEXT)
        station=result.get("station_info")

    places=result.get("exact_places",[])
    category=result.get("detected_category")

    # Specific named place.
    if places and not station and not category:
        return place_lines(places,locale),"place"

    if station:
        station_name=station.get("station","")
        if has_any(message,LOCATION_WORDS):
            text=c["station"].format(station=station_name)
            if station.get("stationGoogleMaps"):
                text += f"\n{c['map']}: {station['stationGoogleMaps']}"
            return text,"station"
        if category:
            if places:
                return c["places"].format(station=station_name)+"\n\n"+place_lines(places,locale),"structured"
            return c["none"].format(station=station_name),"structured"
        if has_any(message,PLAN_WORDS):
            plan=simple_plan(result,locale)
            if plan: return plan,"planner"
        if has_any(message,AROUND_WORDS):
            if places:
                return c["around"].format(station=station_name)+"\n\n"+grouped_lines(places,locale),"structured"
            return c["none"].format(station=station_name),"structured"
        # General station question: show a compact useful overview.
        all_result=knowledge.answer_context(f"around {station_name}",top_k=TOP_K_CONTEXT)
        all_places=all_result.get("exact_places",[])
        if all_places:
            return c["around"].format(station=station_name)+"\n\n"+grouped_lines(all_places[:12],locale),"structured"

    if has_any(message,PLAN_WORDS):
        return generic_trip_options(locale),"planner"

    return safe_unknown(locale),"safe"


@app.route("/chat/stream",methods=["POST"])
def chat_stream():
    payload=request.get_json(silent=True) or {}
    message=(payload.get("message") or "").strip()
    sid,session=get_session(payload)
    locale=resolve_response_language(message,payload)
    if not message:
        return Response("Please type a question first.",status=400,mimetype="text/plain; charset=utf-8",headers={"X-Session-Id":sid,"X-Response-Locale":locale})
    answer,mode=answer_message(message,locale,session)
    return Response(stream_with_context(stream_text(answer)),mimetype="text/plain; charset=utf-8",headers={"X-Session-Id":sid,"X-Response-Locale":locale,"X-Answer-Mode":mode,"Cache-Control":"no-cache","X-Accel-Buffering":"no"})


@app.route("/chat",methods=["POST"])
def chat():
    payload=request.get_json(silent=True) or {}
    message=(payload.get("message") or "").strip()
    sid,session=get_session(payload)
    locale=resolve_response_language(message,payload)
    if not message:
        return jsonify({"response":"Please type a question first.","session_id":sid,"locale":locale}),400
    answer,mode=answer_message(message,locale,session)
    return jsonify({"response":answer,"session_id":sid,"locale":locale,"mode":mode})


@app.route("/search",methods=["POST"])
def search():
    payload=request.get_json(silent=True) or {}
    query=(payload.get("query") or payload.get("message") or "").strip()
    return jsonify(knowledge.answer_context(query,top_k=TOP_K_CONTEXT))


@app.route("/knowledge/status")
def status(): return jsonify(knowledge.status())


@app.route("/")
def health():
    return jsonify({"status":"ok","service":"Nishi-Tama AI Guide","languages":PROJECT_LANGUAGES,"knowledge":knowledge.status(),"engine":"stable verified-data guide (no free-form hallucinating model)"})


if __name__=="__main__":
    port=int(os.getenv("PORT","7860"))
    app.run(host="0.0.0.0",port=port,debug=False,threaded=True)
