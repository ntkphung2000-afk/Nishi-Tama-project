import json
import re
from pathlib import Path

CATEGORY_KEYWORDS = {
    "restaurant": [
        "restaurant", "restaurants", "food", "eat", "dining",
        "レストラン", "飲食店", "食堂", "食べ", "ご飯",
        "nhà hàng", "ăn", "đồ ăn", "餐厅", "餐館", "美食",
        "식당", "음식점", "맛집", "essen", "gaststätte", "ресторан", "еда",
    ],
    "cafe": [
        "cafe", "café", "coffee", "カフェ", "喫茶", "コーヒー",
        "quán cà phê", "cà phê", "咖啡馆", "咖啡", "카페", "커피",
        "kaffee", "кафе", "кофе",
    ],
    "attraction": [
        "attraction", "sightseeing", "visit", "things to see", "museum", "temple", "shrine",
        "観光", "観光スポット", "見どころ", "博物館", "美術館", "寺", "神社",
        "tham quan", "điểm du lịch", "bảo tàng", "đền", "chùa",
        "景点", "旅游", "博物馆", "寺庙", "관광", "명소", "박물관",
        "sehenswürdigkeit", "museum", "tempel", "достопримечательность", "музей", "храм",
    ],
    "shopping": [
        "shopping", "souvenir", "gift", "shop", "買い物", "ショッピング", "お土産", "土産",
        "mua sắm", "quà lưu niệm", "购物", "纪念品", "쇼핑", "기념품",
        "einkaufen", "souvenir", "покупки", "сувенир",
    ],
    "nature": [
        "nature", "park", "mountain", "river", "valley", "lake", "waterfall", "hiking", "camping", "gorge",
        "自然", "公園", "山", "川", "渓谷", "湖", "滝", "ハイキング", "キャンプ",
        "thiên nhiên", "công viên", "núi", "sông", "thung lũng", "hồ", "thác",
        "自然", "公园", "峡谷", "瀑布", "徒步", "자연", "공원", "산", "강", "계곡", "호수", "폭포",
        "natur", "park", "berg", "fluss", "tal", "see", "wasserfall", "wandern",
        "природа", "парк", "гора", "река", "долина", "озеро", "водопад", "поход",
    ],
}

MAP_KEYWORDS = [
    "google maps", "maps", "map", "location", "googleマップ", "マップ", "地図", "場所",
    "bản đồ", "vị trí", "地图", "位置", "지도", "위치", "karte", "standort", "карта", "местоположение",
]


def normalize(value):
    return re.sub(r"\s+", " ", (value or "").strip().lower().replace("’", "'"))


def contains_any(text, values):
    text = normalize(text)
    return any(normalize(value) in text for value in values if value)


def _tokens(text):
    text = normalize(text)
    latin = re.findall(r"[a-z0-9][a-z0-9_\-']+", text)
    cjk_runs = re.findall(r"[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af]+", text)
    out = list(latin)
    for run in cjk_runs:
        if len(run) <= 2:
            out.append(run)
        else:
            out.extend(run[i:i+2] for i in range(len(run)-1))
    return out


class ProjectKnowledge:
    """Fast, deterministic project retrieval. No large model is loaded."""

    def __init__(self, path, embed_model=None):
        self.path = Path(path)
        self.chunks = []
        self.stations = []
        self.places = []
        self._load()

    def _load(self):
        if not self.path.exists():
            print(f"WARNING: knowledge file not found: {self.path}")
            return
        data = json.loads(self.path.read_text(encoding="utf-8"))
        self.chunks = data.get("chunks", [])
        self.stations = data.get("stations", [])
        self.places = data.get("places", [])

    def status(self):
        return {
            "knowledge_file": str(self.path),
            "chunks": len(self.chunks),
            "stations": len(self.stations),
            "structured_places": len(self.places),
            "retrieval": "fast multilingual structured/lexical",
        }

    def _detect_station(self, query):
        q = normalize(query)
        candidates = []
        for station in self.stations:
            for alias in station.get("aliases", []):
                a = normalize(alias)
                if a and a in q:
                    candidates.append((len(a), station))
                    break
        if not candidates:
            return None
        candidates.sort(key=lambda item: item[0], reverse=True)
        return candidates[0][1]

    def _detect_category(self, query):
        q = normalize(query)
        for category, keywords in CATEGORY_KEYWORDS.items():
            if any(normalize(keyword) in q for keyword in keywords):
                return category
        return None

    def _find_place_mentions(self, query):
        q = normalize(query)
        matches = []
        for place in self.places:
            name = normalize(place.get("name", ""))
            if name and name in q:
                matches.append(place)
        return matches

    def semantic_search(self, query, top_k=5):
        """Light lexical ranking over factual project chunks."""
        qnorm = normalize(query)
        qtokens = set(_tokens(query))
        if not qnorm:
            return []
        ranked = []
        for item in self.chunks:
            text = item.get("text", "")
            tnorm = normalize(text)
            ttokens = set(_tokens(text))
            score = 0.0
            if qnorm in tnorm:
                score += 10.0
            if qtokens:
                overlap = len(qtokens & ttokens) / max(1, len(qtokens))
                score += overlap * 5.0
            # Useful place/FAQ words get a little extra weight.
            for word in ("station", "駅", "restaurant", "cafe", "event", "faq", "access", "観光", "交通"):
                if word in qnorm and word in tnorm:
                    score += 1.0
            if score > 0.8:
                copy = dict(item)
                copy["score"] = score
                ranked.append(copy)
        ranked.sort(key=lambda x: x["score"], reverse=True)
        return ranked[:top_k]

    def answer_context(self, query, top_k=5):
        station = self._detect_station(query)
        category = self._detect_category(query)
        direct_places = self._find_place_mentions(query)

        if direct_places:
            exact = direct_places[:25]
        else:
            exact = self.places
            if station:
                exact = [p for p in exact if p.get("station") == station.get("station")]
            if category:
                exact = [p for p in exact if p.get("category") == category]
            exact = exact[:25] if (station or category) else []

        return {
            "station_info": station,
            "detected_category": category,
            "map_requested": contains_any(query, MAP_KEYWORDS),
            "exact_places": exact,
            "matches": self.semantic_search(query, top_k=top_k),
        }
