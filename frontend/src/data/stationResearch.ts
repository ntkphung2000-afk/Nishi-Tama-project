// Nishi-Tama / Ome Line station research
// Updated: 2026-09-02
// Real places researched for each station. Each place includes a Google Maps link.

export type StationPlaceCategory =
  | "attraction"
  | "restaurant"
  | "cafe"
  | "shopping"
  | "nature";

export interface StationPlace {
  category: StationPlaceCategory;
  name: string;
  address: string;
  googleMaps: string;
  source?: string;
  note?: string;
}

export interface StationResearch {
  station: string;
  description: string;
  stationGoogleMaps: string;
  officialWebsite?: string;
  places: StationPlace[];
}

export const stationResearch: StationResearch[] = [
  {
    "station": "Ome (青梅駅)",
    "description": "青梅線・東京アドベンチャーラインの主要駅。昭和レトロな青梅宿、鉄道公園、釜の淵公園への散策拠点。",
    "stationGoogleMaps": "https://www.google.com/maps/search/?api=1&query=Ome+%E9%9D%92%E6%A2%85%E9%A7%85",
    "officialWebsite": "https://www.omekanko.gr.jp/",
    "places": [
      {
        "category": "attraction",
        "name": "昭和レトロ商品博物館",
        "address": "東京都青梅市住江町65 / 青梅駅から徒歩約4分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E6%98%AD%E5%92%8C%E3%83%AC%E3%83%88%E3%83%AD%E5%95%86%E5%93%81%E5%8D%9A%E7%89%A9%E9%A4%A8+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E4%BD%8F%E6%B1%9F%E7%94%BA65",
        "source": "https://www.omekanko.gr.jp/spot/01901/",
        "note": "昭和レトロの生活雑貨・商品パッケージ等を展示"
      },
      {
        "category": "attraction",
        "name": "青梅鉄道公園",
        "address": "東京都青梅市勝沼2-155 / 青梅駅から徒歩約15分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E9%9D%92%E6%A2%85%E9%89%84%E9%81%93%E5%85%AC%E5%9C%92+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E5%8B%9D%E6%B2%BC2-155",
        "source": "https://www.omekanko.gr.jp/spot/24301/",
        "note": "2026年3月21日リニューアルオープン"
      },
      {
        "category": "attraction",
        "name": "住吉神社",
        "address": "東京都青梅市住江町12 / 青梅駅から徒歩約3分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E4%BD%8F%E5%90%89%E7%A5%9E%E7%A4%BE+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E4%BD%8F%E6%B1%9F%E7%94%BA12",
        "source": "https://www.omekanko.gr.jp/spot/01801/",
        "note": "青梅宿の寺社散策スポット"
      },
      {
        "category": "restaurant",
        "name": "青梅食堂",
        "address": "東京都青梅市仲町300-1 / 青梅駅から徒歩約3分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E9%9D%92%E6%A2%85%E9%A3%9F%E5%A0%82+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E4%BB%B2%E7%94%BA300-1",
        "source": "https://www.omekanko.gr.jp/spot/416/",
        "note": "駅近の食事処"
      },
      {
        "category": "restaurant",
        "name": "青梅麦酒",
        "address": "東京都青梅市本町145",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E9%9D%92%E6%A2%85%E9%BA%A6%E9%85%92+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%9C%AC%E7%94%BA145",
        "source": "https://www.omekanko.gr.jp/gourmet/",
        "note": "クラフトビールと食事"
      },
      {
        "category": "restaurant",
        "name": "手打ち蕎麦 玉川屋",
        "address": "東京都青梅市住江町55 / 青梅駅から徒歩約3分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E6%89%8B%E6%89%93%E3%81%A1%E8%95%8E%E9%BA%A6+%E7%8E%89%E5%B7%9D%E5%B1%8B+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E4%BD%8F%E6%B1%9F%E7%94%BA55",
        "source": "https://www.omekanko.gr.jp/spot/36201/",
        "note": "手打ちそば"
      },
      {
        "category": "cafe",
        "name": "夏への扉",
        "address": "東京都青梅市住江町16",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E5%A4%8F%E3%81%B8%E3%81%AE%E6%89%89+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E4%BD%8F%E6%B1%9F%E7%94%BA16",
        "source": "https://www.omekanko.gr.jp/gourmet/",
        "note": "青梅宿エリアのカフェ"
      },
      {
        "category": "shopping",
        "name": "まちの駅青梅",
        "address": "東京都青梅市本町163-2-2 / 青梅駅すぐ",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E3%81%BE%E3%81%A1%E3%81%AE%E9%A7%85%E9%9D%92%E6%A2%85+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%9C%AC%E7%94%BA163-2-2",
        "source": "https://www.omekanko.gr.jp/spot/22901/",
        "note": "青梅の土産・地元商品。カフェも併設"
      },
      {
        "category": "nature",
        "name": "釜の淵公園",
        "address": "東京都青梅市大柳町1392 / 青梅駅から徒歩約15分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E9%87%9C%E3%81%AE%E6%B7%B5%E5%85%AC%E5%9C%92+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E5%A4%A7%E6%9F%B3%E7%94%BA1392",
        "source": "https://www.omekanko.gr.jp/spot/80201/",
        "note": "多摩川沿いの公園・河原散策"
      }
    ]
  },
  {
    "station": "Miyanohira (宮ノ平駅)",
    "description": "青梅駅の次の静かな駅。臨川庭園・明白院や多摩川沿いの散策に便利。",
    "stationGoogleMaps": "https://www.google.com/maps/search/?api=1&query=Miyanohira+%E5%AE%AE%E3%83%8E%E5%B9%B3%E9%A7%85",
    "officialWebsite": "https://www.omekanko.gr.jp/",
    "places": [
      {
        "category": "attraction",
        "name": "臨川庭園",
        "address": "東京都青梅市日向和田2-271 / 宮ノ平駅から徒歩約5分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E8%87%A8%E5%B7%9D%E5%BA%AD%E5%9C%92+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%97%A5%E5%90%91%E5%92%8C%E7%94%B02-271",
        "source": "https://www.omekanko.gr.jp/spot/81701/",
        "note": "多摩川を望む庭園"
      },
      {
        "category": "attraction",
        "name": "明白院",
        "address": "東京都青梅市日向和田2-395 / 宮ノ平駅から徒歩約5分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E6%98%8E%E7%99%BD%E9%99%A2+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%97%A5%E5%90%91%E5%92%8C%E7%94%B02-395",
        "source": "https://www.omekanko.gr.jp/spot/20307/",
        "note": "青梅七福神の寺院"
      },
      {
        "category": "restaurant",
        "name": "山城屋",
        "address": "東京都青梅市日向和田2-306-4 / 宮ノ平駅から徒歩約3分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E5%B1%B1%E5%9F%8E%E5%B1%8B+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%97%A5%E5%90%91%E5%92%8C%E7%94%B02-306-4",
        "source": "https://www.omekanko.gr.jp/spot/34601/",
        "note": "駅近の食事処"
      }
    ]
  },
  {
    "station": "Hinatawada (日向和田駅)",
    "description": "吉野梅郷の玄関口。青梅市梅の公園・梅菓子店・カフェへ徒歩でアクセスしやすい。",
    "stationGoogleMaps": "https://www.google.com/maps/search/?api=1&query=Hinatawada+%E6%97%A5%E5%90%91%E5%92%8C%E7%94%B0%E9%A7%85",
    "officialWebsite": "https://www.omekanko.gr.jp/",
    "places": [
      {
        "category": "attraction",
        "name": "青梅きもの博物館",
        "address": "東京都青梅市梅郷4-629-9 / 日向和田駅から徒歩約15分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E9%9D%92%E6%A2%85%E3%81%8D%E3%82%82%E3%81%AE%E5%8D%9A%E7%89%A9%E9%A4%A8+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%A2%85%E9%83%B74-629-9",
        "source": "https://www.omekanko.gr.jp/spot/07201/",
        "note": "開館時期・曜日は事前確認推奨"
      },
      {
        "category": "restaurant",
        "name": "紅梅苑",
        "address": "東京都青梅市梅郷3-905-1 / 日向和田駅から徒歩約6分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E7%B4%85%E6%A2%85%E8%8B%91+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%A2%85%E9%83%B73-905-1",
        "source": "https://www.omekanko.gr.jp/spot/06601/",
        "note": "食事・甘味・梅菓子"
      },
      {
        "category": "restaurant",
        "name": "みらい屋",
        "address": "東京都青梅市梅郷3-775-1",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E3%81%BF%E3%82%89%E3%81%84%E5%B1%8B+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%A2%85%E9%83%B73-775-1",
        "source": "https://www.google.com/maps/search/?api=1&query=%E3%81%BF%E3%82%89%E3%81%84%E5%B1%8B+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%A2%85%E9%83%B73-775-1",
        "note": "Google Maps掲載を確認した飲食店"
      },
      {
        "category": "cafe",
        "name": "ローズタウンティーガーデン",
        "address": "東京都青梅市二俣尾1-3-1 / 日向和田駅から徒歩約5分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E3%83%AD%E3%83%BC%E3%82%BA%E3%82%BF%E3%82%A6%E3%83%B3%E3%83%86%E3%82%A3%E3%83%BC%E3%82%AC%E3%83%BC%E3%83%87%E3%83%B3+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E4%BA%8C%E4%BF%A3%E5%B0%BE1-3-1",
        "source": "https://www.omekanko.gr.jp/spot/36701/",
        "note": "紅茶・英国風ティー"
      },
      {
        "category": "cafe",
        "name": "GOOD SHED",
        "address": "東京都青梅市梅郷5-923-4 / 日向和田駅から徒歩約10分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=GOOD+SHED+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%A2%85%E9%83%B75-923-4",
        "source": "https://www.omekanko.gr.jp/spot/good-shed/",
        "note": "ドーナツ・コーヒー"
      },
      {
        "category": "shopping",
        "name": "へそまんじゅう総本舗",
        "address": "東京都青梅市日向和田3-863 / 日向和田駅から徒歩約3分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E3%81%B8%E3%81%9D%E3%81%BE%E3%82%93%E3%81%98%E3%82%85%E3%81%86%E7%B7%8F%E6%9C%AC%E8%88%97+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%97%A5%E5%90%91%E5%92%8C%E7%94%B03-863",
        "source": "https://www.omekanko.gr.jp/spot/07801/",
        "note": "名物まんじゅう"
      },
      {
        "category": "nature",
        "name": "青梅市梅の公園",
        "address": "東京都青梅市梅郷4-527 / 日向和田駅から徒歩約15分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E9%9D%92%E6%A2%85%E5%B8%82%E6%A2%85%E3%81%AE%E5%85%AC%E5%9C%92+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%A2%85%E9%83%B74-527",
        "source": "https://www.omekanko.gr.jp/spot/81501/",
        "note": "吉野梅郷の代表的な梅林"
      }
    ]
  },
  {
    "station": "Ishigamimae (石神前駅)",
    "description": "駅名の由来となった石神社と大イチョウが至近。温泉宿「おくたま路」も徒歩圏。",
    "stationGoogleMaps": "https://www.google.com/maps/search/?api=1&query=Ishigamimae+%E7%9F%B3%E7%A5%9E%E5%89%8D%E9%A7%85",
    "officialWebsite": "https://www.omekanko.gr.jp/",
    "places": [
      {
        "category": "attraction",
        "name": "石神社（石神の大イチョウ）",
        "address": "東京都青梅市二俣尾1-199 / 石神前駅至近",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E7%9F%B3%E7%A5%9E%E7%A4%BE%EF%BC%88%E7%9F%B3%E7%A5%9E%E3%81%AE%E5%A4%A7%E3%82%A4%E3%83%81%E3%83%A7%E3%82%A6%EF%BC%89+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E4%BA%8C%E4%BF%A3%E5%B0%BE1-199",
        "source": "https://www.enjoytokyo.jp/spot/l_20041541/",
        "note": "駅名の由来となった神社・大イチョウ"
      },
      {
        "category": "attraction",
        "name": "東京 奥多摩温泉 おくたま路",
        "address": "東京都青梅市二俣尾2-371 / 石神前駅から徒歩約10分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC+%E5%A5%A5%E5%A4%9A%E6%91%A9%E6%B8%A9%E6%B3%89+%E3%81%8A%E3%81%8F%E3%81%9F%E3%81%BE%E8%B7%AF+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E4%BA%8C%E4%BF%A3%E5%B0%BE2-371",
        "source": "https://www.omekanko.gr.jp/spot/23501/",
        "note": "温泉宿・日帰り利用あり"
      },
      {
        "category": "restaurant",
        "name": "しゅう家",
        "address": "東京都青梅市二俣尾2-373-1",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E3%81%97%E3%82%85%E3%81%86%E5%AE%B6+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E4%BA%8C%E4%BF%A3%E5%B0%BE2-373-1",
        "source": "https://www.google.com/maps/search/?api=1&query=%E3%81%97%E3%82%85%E3%81%86%E5%AE%B6+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E4%BA%8C%E4%BF%A3%E5%B0%BE2-373-1",
        "note": "Google Maps掲載を確認した和食店"
      },
      {
        "category": "cafe",
        "name": "気ままにCafe",
        "address": "東京都青梅市二俣尾2-373-1",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E6%B0%97%E3%81%BE%E3%81%BE%E3%81%ABCafe+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E4%BA%8C%E4%BF%A3%E5%B0%BE2-373-1",
        "source": "https://www.google.com/maps/search/?api=1&query=%E6%B0%97%E3%81%BE%E3%81%BE%E3%81%ABCafe+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E4%BA%8C%E4%BF%A3%E5%B0%BE2-373-1",
        "note": "Google Maps掲載を確認したカフェ"
      }
    ]
  },
  {
    "station": "Futamatao (二俣尾駅)",
    "description": "二俣尾・柚木町エリアの駅。吉川英治記念館や個人カフェ・ベーカリーへの拠点。",
    "stationGoogleMaps": "https://www.google.com/maps/search/?api=1&query=Futamatao+%E4%BA%8C%E4%BF%A3%E5%B0%BE%E9%A7%85",
    "officialWebsite": "https://www.omekanko.gr.jp/",
    "places": [
      {
        "category": "attraction",
        "name": "青梅市吉川英治記念館",
        "address": "東京都青梅市柚木町1-101-1 / 二俣尾駅から徒歩約15分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E9%9D%92%E6%A2%85%E5%B8%82%E5%90%89%E5%B7%9D%E8%8B%B1%E6%B2%BB%E8%A8%98%E5%BF%B5%E9%A4%A8+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%9F%9A%E6%9C%A8%E7%94%BA1-101-1",
        "source": "https://www.omekanko.gr.jp/spot/37901/",
        "note": "吉川英治の旧宅・記念館"
      },
      {
        "category": "cafe",
        "name": "ウォールナット",
        "address": "東京都青梅市二俣尾4-965-5 / 二俣尾駅から徒歩約1分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E3%82%A6%E3%82%A9%E3%83%BC%E3%83%AB%E3%83%8A%E3%83%83%E3%83%88+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E4%BA%8C%E4%BF%A3%E5%B0%BE4-965-5",
        "source": "https://www.omekanko.gr.jp/spot/09801/",
        "note": "ランチ・カフェ"
      },
      {
        "category": "cafe",
        "name": "noco BAKERY & CAFE",
        "address": "東京都青梅市柚木町2-332-2 / 二俣尾駅から徒歩約14分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=noco+BAKERY+%26+CAFE+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%9F%9A%E6%9C%A8%E7%94%BA2-332-2",
        "source": "https://nocobakery.com/sample-page/",
        "note": "パン・焼菓子。営業形態は公式サイトで要確認"
      }
    ]
  },
  {
    "station": "Ikusabata (軍畑駅)",
    "description": "高水三山ハイキングの代表的な起点。御岳渓谷遊歩道の軍畑側入口にも近い。",
    "stationGoogleMaps": "https://www.google.com/maps/search/?api=1&query=Ikusabata+%E8%BB%8D%E7%95%91%E9%A7%85",
    "officialWebsite": "https://www.omekanko.gr.jp/",
    "places": [
      {
        "category": "attraction",
        "name": "煉瓦堂朱とんぼ",
        "address": "東京都青梅市沢井1-403 / 軍畑駅から徒歩約10分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E7%85%89%E7%93%A6%E5%A0%82%E6%9C%B1%E3%81%A8%E3%82%93%E3%81%BC+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%B2%A2%E4%BA%951-403",
        "source": "https://www.omekanko.gr.jp/spot/10601/",
        "note": "屋根付きBBQ・アウトドア施設"
      },
      {
        "category": "nature",
        "name": "高水三山ハイキングコース",
        "address": "軍畑駅を起点とする登山コース",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E9%AB%98%E6%B0%B4%E4%B8%89%E5%B1%B1%E3%83%8F%E3%82%A4%E3%82%AD%E3%83%B3%E3%82%B0%E3%82%B3%E3%83%BC%E3%82%B9+%E8%BB%8D%E7%95%91%E9%A7%85%E3%82%92%E8%B5%B7%E7%82%B9%E3%81%A8%E3%81%99%E3%82%8B%E7%99%BB%E5%B1%B1%E3%82%B3%E3%83%BC%E3%82%B9",
        "source": "https://www.omekanko.gr.jp/course/takamizu-mountain-hiking/",
        "note": "高水山・岩茸石山・惣岳山を巡る代表的コース"
      },
      {
        "category": "nature",
        "name": "御岳渓谷遊歩道（軍畑側入口）",
        "address": "軍畑駅から遊歩道入口へ徒歩約10分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E5%B2%B3%E6%B8%93%E8%B0%B7%E9%81%8A%E6%AD%A9%E9%81%93%EF%BC%88%E8%BB%8D%E7%95%91%E5%81%B4%E5%85%A5%E5%8F%A3%EF%BC%89+%E8%BB%8D%E7%95%91%E9%A7%85%E3%81%8B%E3%82%89%E9%81%8A%E6%AD%A9%E9%81%93%E5%85%A5%E5%8F%A3%E3%81%B8%E5%BE%92%E6%AD%A9%E7%B4%8410%E5%88%86",
        "source": "https://www.omekanko.gr.jp/course/mitake-valley-hiking/",
        "note": "多摩川沿いの渓谷散策"
      }
    ]
  },
  {
    "station": "Sawai (沢井駅)",
    "description": "澤乃井・小澤酒造と御岳渓谷の最寄り駅。酒蔵、豆腐料理、カフェ、寒山寺が徒歩圏。",
    "stationGoogleMaps": "https://www.google.com/maps/search/?api=1&query=Sawai+%E6%B2%A2%E4%BA%95%E9%A7%85",
    "officialWebsite": "https://www.omekanko.gr.jp/",
    "places": [
      {
        "category": "attraction",
        "name": "澤乃井 小澤酒造",
        "address": "東京都青梅市沢井2-770 / 沢井駅徒歩圏",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E6%BE%A4%E4%B9%83%E4%BA%95+%E5%B0%8F%E6%BE%A4%E9%85%92%E9%80%A0+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%B2%A2%E4%BA%952-770",
        "source": "https://www.omekanko.gr.jp/spot/10401/",
        "note": "酒蔵見学・日本酒"
      },
      {
        "category": "attraction",
        "name": "寒山寺",
        "address": "東京都青梅市沢井2-748 / 沢井駅から徒歩約10分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E5%AF%92%E5%B1%B1%E5%AF%BA+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%B2%A2%E4%BA%952-748",
        "source": "https://www.omekanko.gr.jp/spot/50501/",
        "note": "御岳渓谷沿いの寺院"
      },
      {
        "category": "restaurant",
        "name": "ままごと屋",
        "address": "東京都青梅市沢井2-748",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E3%81%BE%E3%81%BE%E3%81%94%E3%81%A8%E5%B1%8B+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%B2%A2%E4%BA%952-748",
        "source": "https://www.sawanoi-sake.com/service/mamagotoya/",
        "note": "豆腐・ゆば料理"
      },
      {
        "category": "restaurant",
        "name": "豆らく",
        "address": "東京都青梅市沢井2-748",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E8%B1%86%E3%82%89%E3%81%8F+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%B2%A2%E4%BA%952-748",
        "source": "https://www.sawanoi-sake.com/service/mameraku/",
        "note": "豆腐料理"
      },
      {
        "category": "restaurant",
        "name": "沢井マウンテンカフェ",
        "address": "東京都青梅市沢井3-780-1",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E6%B2%A2%E4%BA%95%E3%83%9E%E3%82%A6%E3%83%B3%E3%83%86%E3%83%B3%E3%82%AB%E3%83%95%E3%82%A7+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%B2%A2%E4%BA%953-780-1",
        "source": "https://www.google.com/maps/search/?api=1&query=%E6%B2%A2%E4%BA%95%E3%83%9E%E3%82%A6%E3%83%B3%E3%83%86%E3%83%B3%E3%82%AB%E3%83%95%E3%82%A7+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%B2%A2%E4%BA%953-780-1",
        "note": "Google Maps掲載を確認"
      },
      {
        "category": "cafe",
        "name": "CAFE 雫",
        "address": "東京都青梅市沢井2-748",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=CAFE+%E9%9B%AB+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%B2%A2%E4%BA%952-748",
        "source": "https://www.google.com/maps/search/?api=1&query=CAFE+%E9%9B%AB+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%B2%A2%E4%BA%952-748",
        "note": "澤乃井園エリアのカフェ"
      },
      {
        "category": "cafe",
        "name": "阿吽Labo",
        "address": "東京都青梅市沢井2-922",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E9%98%BF%E5%90%BDLabo+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%B2%A2%E4%BA%952-922",
        "source": "https://www.google.com/maps/search/?api=1&query=%E9%98%BF%E5%90%BDLabo+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%B2%A2%E4%BA%952-922",
        "note": "Google Maps掲載を確認"
      },
      {
        "category": "shopping",
        "name": "高野商店",
        "address": "東京都青梅市沢井2-914 / 沢井駅から徒歩約6分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E9%AB%98%E9%87%8E%E5%95%86%E5%BA%97+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%B2%A2%E4%BA%952-914",
        "source": "https://www.omekanko.gr.jp/spot/10501/",
        "note": "酒類など"
      },
      {
        "category": "shopping",
        "name": "福島屋酒店",
        "address": "東京都青梅市沢井2-724 / 沢井駅から徒歩約5分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E7%A6%8F%E5%B3%B6%E5%B1%8B%E9%85%92%E5%BA%97+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%B2%A2%E4%BA%952-724",
        "source": "https://www.omekanko.gr.jp/spot/10301/",
        "note": "酒類など"
      },
      {
        "category": "nature",
        "name": "御岳渓谷遊歩道",
        "address": "沢井駅から渓谷へ徒歩圏",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E5%B2%B3%E6%B8%93%E8%B0%B7%E9%81%8A%E6%AD%A9%E9%81%93+%E6%B2%A2%E4%BA%95%E9%A7%85%E3%81%8B%E3%82%89%E6%B8%93%E8%B0%B7%E3%81%B8%E5%BE%92%E6%AD%A9%E5%9C%8F",
        "source": "https://www.omekanko.gr.jp/spot/80401/",
        "note": "多摩川沿いの遊歩道"
      }
    ]
  },
  {
    "station": "Mitake (御嶽駅)",
    "description": "御岳渓谷の中心駅。御岳山へは駅前からバス＋ケーブルカーでアクセス。",
    "stationGoogleMaps": "https://www.google.com/maps/search/?api=1&query=Mitake+%E5%BE%A1%E5%B6%BD%E9%A7%85",
    "officialWebsite": "https://www.omekanko.gr.jp/",
    "places": [
      {
        "category": "attraction",
        "name": "玉堂美術館",
        "address": "東京都青梅市御岳1-75 / 御嶽駅から徒歩約3分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E7%8E%89%E5%A0%82%E7%BE%8E%E8%A1%93%E9%A4%A8+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E5%BE%A1%E5%B2%B31-75",
        "source": "https://www.omekanko.gr.jp/spot/10801/",
        "note": "日本画家・川合玉堂の美術館"
      },
      {
        "category": "restaurant",
        "name": "手打蕎麦 ごろう",
        "address": "東京都青梅市御岳本町266 / 御嶽駅から徒歩約2分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E6%89%8B%E6%89%93%E8%95%8E%E9%BA%A6+%E3%81%94%E3%82%8D%E3%81%86+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E5%BE%A1%E5%B2%B3%E6%9C%AC%E7%94%BA266",
        "source": "https://www.omekanko.gr.jp/spot/37401/",
        "note": "手打ちそば"
      },
      {
        "category": "restaurant",
        "name": "元祖手打ちそば 玉川屋 総本店",
        "address": "東京都青梅市御岳本町360 / 御嶽駅から徒歩約3分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E5%85%83%E7%A5%96%E6%89%8B%E6%89%93%E3%81%A1%E3%81%9D%E3%81%B0+%E7%8E%89%E5%B7%9D%E5%B1%8B+%E7%B7%8F%E6%9C%AC%E5%BA%97+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E5%BE%A1%E5%B2%B3%E6%9C%AC%E7%94%BA360",
        "source": "https://www.omekanko.gr.jp/spot/11001/",
        "note": "老舗そば店"
      },
      {
        "category": "restaurant",
        "name": "手打ちそば 笑",
        "address": "東京都青梅市沢井3-404 / 御嶽駅から徒歩約7分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E6%89%8B%E6%89%93%E3%81%A1%E3%81%9D%E3%81%B0+%E7%AC%91+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E6%B2%A2%E4%BA%953-404",
        "source": "https://www.omekanko.gr.jp/spot/20701/",
        "note": "手打ちそば"
      },
      {
        "category": "restaurant",
        "name": "東峯園",
        "address": "東京都青梅市御岳本町334-17",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E5%B3%AF%E5%9C%92+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E5%BE%A1%E5%B2%B3%E6%9C%AC%E7%94%BA334-17",
        "source": "https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E5%B3%AF%E5%9C%92+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E5%BE%A1%E5%B2%B3%E6%9C%AC%E7%94%BA334-17",
        "note": "Google Maps掲載を確認した中華料理店"
      },
      {
        "category": "cafe",
        "name": "氷右衛門",
        "address": "東京都青梅市御岳本町359 / 御嶽駅から徒歩約1分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E6%B0%B7%E5%8F%B3%E8%A1%9B%E9%96%80+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E5%BE%A1%E5%B2%B3%E6%9C%AC%E7%94%BA359",
        "source": "https://www.omekanko.gr.jp/spot/396/",
        "note": "かき氷・甘味"
      },
      {
        "category": "cafe",
        "name": "cafe monaca",
        "address": "東京都青梅市御岳本町359 1F",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=cafe+monaca+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E5%BE%A1%E5%B2%B3%E6%9C%AC%E7%94%BA359+1F",
        "source": "https://www.google.com/maps/search/?api=1&query=cafe+monaca+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E5%BE%A1%E5%B2%B3%E6%9C%AC%E7%94%BA359",
        "note": "Google Maps掲載を確認"
      },
      {
        "category": "cafe",
        "name": "Deck Cafe Bitte",
        "address": "東京都青梅市御岳本町126-1",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=Deck+Cafe+Bitte+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E5%BE%A1%E5%B2%B3%E6%9C%AC%E7%94%BA126-1",
        "source": "https://www.omekanko.gr.jp/spot/414/",
        "note": "渓谷エリアのデッキカフェ"
      },
      {
        "category": "shopping",
        "name": "御岳インフォメーションセンター",
        "address": "東京都青梅市御岳本町332 / 御嶽駅前",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E5%B2%B3%E3%82%A4%E3%83%B3%E3%83%95%E3%82%A9%E3%83%A1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC+%E6%9D%B1%E4%BA%AC%E9%83%BD%E9%9D%92%E6%A2%85%E5%B8%82%E5%BE%A1%E5%B2%B3%E6%9C%AC%E7%94%BA332",
        "source": "https://www.omekanko.gr.jp/association/facility/",
        "note": "観光案内・地域商品"
      },
      {
        "category": "nature",
        "name": "御岳渓谷遊歩道",
        "address": "御嶽駅から徒歩約5分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E5%B2%B3%E6%B8%93%E8%B0%B7%E9%81%8A%E6%AD%A9%E9%81%93+%E5%BE%A1%E5%B6%BD%E9%A7%85%E3%81%8B%E3%82%89%E5%BE%92%E6%AD%A9%E7%B4%845%E5%88%86",
        "source": "https://www.omekanko.gr.jp/spot/80401/",
        "note": "渓谷・遊歩道"
      },
      {
        "category": "nature",
        "name": "御岳山",
        "address": "御嶽駅からバス＋ケーブルカーでアクセス",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E5%B2%B3%E5%B1%B1+%E5%BE%A1%E5%B6%BD%E9%A7%85%E3%81%8B%E3%82%89%E3%83%90%E3%82%B9%EF%BC%8B%E3%82%B1%E3%83%BC%E3%83%96%E3%83%AB%E3%82%AB%E3%83%BC%E3%81%A7%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9",
        "source": "https://www.omekanko.gr.jp/area/mitakesan/",
        "note": "山岳観光・武蔵御嶽神社方面"
      }
    ]
  },
  {
    "station": "Kawai (川井駅)",
    "description": "奥多摩町東部の駅。多摩川沿いのキャンプ、リバーアクティビティ、美術館に便利。",
    "stationGoogleMaps": "https://www.google.com/maps/search/?api=1&query=Kawai+%E5%B7%9D%E4%BA%95%E9%A7%85",
    "officialWebsite": "https://www.okutama.gr.jp/",
    "places": [
      {
        "category": "attraction",
        "name": "せせらぎの里美術館",
        "address": "東京都西多摩郡奥多摩町川井53",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E3%81%9B%E3%81%9B%E3%82%89%E3%81%8E%E3%81%AE%E9%87%8C%E7%BE%8E%E8%A1%93%E9%A4%A8+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E5%B7%9D%E4%BA%9553",
        "source": "https://www.town.okutama.tokyo.jp/gyosei/6/bunka_sports/shisetsuannai/1566.html",
        "note": "多摩川沿いの美術館"
      },
      {
        "category": "restaurant",
        "name": "かわい寿司",
        "address": "東京都西多摩郡奥多摩町川井663-3 / 川井駅から徒歩約9分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E3%81%8B%E3%82%8F%E3%81%84%E5%AF%BF%E5%8F%B8+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E5%B7%9D%E4%BA%95663-3",
        "source": "https://www.okutama.gr.jp/site/gourmet/",
        "note": "寿司・和食"
      },
      {
        "category": "cafe",
        "name": "奥多摩リバーサイドカフェAWA",
        "address": "東京都西多摩郡奥多摩町川井54-1",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E5%A5%A5%E5%A4%9A%E6%91%A9%E3%83%AA%E3%83%90%E3%83%BC%E3%82%B5%E3%82%A4%E3%83%89%E3%82%AB%E3%83%95%E3%82%A7AWA+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E5%B7%9D%E4%BA%9554-1",
        "source": "https://www.omekanko.gr.jp/spot/31701/",
        "note": "多摩川を望むカフェ"
      },
      {
        "category": "nature",
        "name": "川井キャンプ場",
        "address": "東京都西多摩郡奥多摩町梅沢187",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E5%B7%9D%E4%BA%95%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97%E5%A0%B4+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E6%A2%85%E6%B2%A2187",
        "source": "https://www.okutama.gr.jp/site/accommodation/",
        "note": "多摩川沿いのキャンプ場"
      }
    ]
  },
  {
    "station": "Kori (古里駅)",
    "description": "丹三郎集落・大塚山方面の玄関口。駅周辺にそば、だし巻き玉子、カレーなどの飲食店がある。",
    "stationGoogleMaps": "https://www.google.com/maps/search/?api=1&query=Kori+%E5%8F%A4%E9%87%8C%E9%A7%85",
    "officialWebsite": "https://www.okutama.gr.jp/",
    "places": [
      {
        "category": "attraction",
        "name": "丹三郎集落",
        "address": "東京都西多摩郡奥多摩町丹三郎",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E4%B8%B9%E4%B8%89%E9%83%8E%E9%9B%86%E8%90%BD+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E4%B8%B9%E4%B8%89%E9%83%8E",
        "source": "https://www.okutama.gr.jp/site/map/pdf/kawai.pdf",
        "note": "古い集落景観・寺社散策"
      },
      {
        "category": "attraction",
        "name": "長福寺",
        "address": "東京都西多摩郡奥多摩町丹三郎",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E7%A6%8F%E5%AF%BA+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E4%B8%B9%E4%B8%89%E9%83%8E",
        "source": "https://www.okutama.gr.jp/site/map/pdf/kawai.pdf",
        "note": "丹三郎集落の寺院"
      },
      {
        "category": "attraction",
        "name": "丹生神社",
        "address": "東京都西多摩郡奥多摩町丹三郎",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E4%B8%B9%E7%94%9F%E7%A5%9E%E7%A4%BE+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E4%B8%B9%E4%B8%89%E9%83%8E",
        "source": "https://www.okutama.gr.jp/site/map/pdf/kawai.pdf",
        "note": "丹三郎集落の神社"
      },
      {
        "category": "restaurant",
        "name": "だしまき玉子専門店 卵道",
        "address": "東京都西多摩郡奥多摩町小丹波549 / 古里駅から徒歩約1分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E3%81%A0%E3%81%97%E3%81%BE%E3%81%8D%E7%8E%89%E5%AD%90%E5%B0%82%E9%96%80%E5%BA%97+%E5%8D%B5%E9%81%93+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E5%B0%8F%E4%B8%B9%E6%B3%A2549",
        "source": "https://www.okutama.gr.jp/site/gourmet/",
        "note": "だし巻き玉子専門店"
      },
      {
        "category": "restaurant",
        "name": "ネパールカレーチャックマティ 古里店",
        "address": "東京都西多摩郡奥多摩町小丹波256-1 / 古里駅から徒歩約5分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E3%83%8D%E3%83%91%E3%83%BC%E3%83%AB%E3%82%AB%E3%83%AC%E3%83%BC%E3%83%81%E3%83%A3%E3%83%83%E3%82%AF%E3%83%9E%E3%83%86%E3%82%A3+%E5%8F%A4%E9%87%8C%E5%BA%97+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E5%B0%8F%E4%B8%B9%E6%B3%A2256-1",
        "source": "https://www.okutama.gr.jp/site/gourmet/",
        "note": "ネパールカレー"
      },
      {
        "category": "restaurant",
        "name": "一心亭",
        "address": "東京都西多摩郡奥多摩町丹三郎41-1 / 古里駅から徒歩約10分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E4%B8%80%E5%BF%83%E4%BA%AD+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E4%B8%B9%E4%B8%89%E9%83%8E41-1",
        "source": "https://www.okutama.gr.jp/site/gourmet/",
        "note": "食事処"
      },
      {
        "category": "restaurant",
        "name": "そば・うどん 丹三郎",
        "address": "東京都西多摩郡奥多摩町丹三郎260 / 古里駅から徒歩約10分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E3%81%9D%E3%81%B0%E3%83%BB%E3%81%86%E3%81%A9%E3%82%93+%E4%B8%B9%E4%B8%89%E9%83%8E+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E4%B8%B9%E4%B8%89%E9%83%8E260",
        "source": "https://www.okutama.gr.jp/site/gourmet/",
        "note": "そば・うどん"
      },
      {
        "category": "restaurant",
        "name": "食事処しみず",
        "address": "東京都西多摩郡奥多摩町丹三郎262-2 / 古里駅から徒歩約7分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E9%A3%9F%E4%BA%8B%E5%87%A6%E3%81%97%E3%81%BF%E3%81%9A+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E4%B8%B9%E4%B8%89%E9%83%8E262-2",
        "source": "https://www.okutama.gr.jp/site/gourmet/",
        "note": "食事処"
      },
      {
        "category": "nature",
        "name": "古里附のイヌグス",
        "address": "東京都西多摩郡奥多摩町小丹波 / 古里駅から徒歩約15分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E5%8F%A4%E9%87%8C%E9%99%84%E3%81%AE%E3%82%A4%E3%83%8C%E3%82%B0%E3%82%B9+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E5%B0%8F%E4%B8%B9%E6%B3%A2",
        "source": "https://www.okutama.gr.jp/site/sightseeing/",
        "note": "町指定の自然・巨木スポット"
      }
    ]
  },
  {
    "station": "Hatonosu (鳩ノ巣駅)",
    "description": "鳩ノ巣渓谷の最寄り駅。吊り橋・滝・渓谷散策と駅前の飲食店・カフェを組み合わせやすい。",
    "stationGoogleMaps": "https://www.google.com/maps/search/?api=1&query=Hatonosu+%E9%B3%A9%E3%83%8E%E5%B7%A3%E9%A7%85",
    "officialWebsite": "https://www.okutama.gr.jp/",
    "places": [
      {
        "category": "attraction",
        "name": "鳩ノ巣小橋",
        "address": "東京都西多摩郡奥多摩町棚澤 / 鳩ノ巣駅から徒歩約10分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E9%B3%A9%E3%83%8E%E5%B7%A3%E5%B0%8F%E6%A9%8B+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E6%A3%9A%E6%BE%A4",
        "source": "https://www.okutama.gr.jp/site/sightseeing/",
        "note": "鳩ノ巣渓谷の吊り橋"
      },
      {
        "category": "attraction",
        "name": "双竜の滝",
        "address": "東京都西多摩郡奥多摩町棚澤405付近",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E5%8F%8C%E7%AB%9C%E3%81%AE%E6%BB%9D+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E6%A3%9A%E6%BE%A4405%E4%BB%98%E8%BF%91",
        "source": "https://www.okutama.gr.jp/site/walking/pdf/ohtama.pdf",
        "note": "鳩ノ巣エリアの滝"
      },
      {
        "category": "restaurant",
        "name": "鳩ノ巣釜めし",
        "address": "東京都西多摩郡奥多摩町棚沢375 / 鳩ノ巣駅から徒歩約5分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E9%B3%A9%E3%83%8E%E5%B7%A3%E9%87%9C%E3%82%81%E3%81%97+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E6%A3%9A%E6%B2%A2375",
        "source": "https://www.okutama.gr.jp/site/gourmet/",
        "note": "釜めし"
      },
      {
        "category": "restaurant",
        "name": "鳩美",
        "address": "東京都西多摩郡奥多摩町棚沢408 / 鳩ノ巣駅から徒歩約5分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E9%B3%A9%E7%BE%8E+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E6%A3%9A%E6%B2%A2408",
        "source": "https://www.okutama.gr.jp/site/gourmet/",
        "note": "そば"
      },
      {
        "category": "restaurant",
        "name": "大橋屋",
        "address": "東京都西多摩郡奥多摩町棚沢402-1",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E6%A9%8B%E5%B1%8B+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E6%A3%9A%E6%B2%A2402-1",
        "source": "https://www.okutama.gr.jp/site/gourmet/",
        "note": "ラーメン等"
      },
      {
        "category": "cafe",
        "name": "山鳩",
        "address": "東京都西多摩郡奥多摩町棚沢380 / 鳩ノ巣駅から徒歩約3分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E5%B1%B1%E9%B3%A9+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E6%A3%9A%E6%B2%A2380",
        "source": "https://www.okutama.gr.jp/site/gourmet/",
        "note": "喫茶・食事"
      },
      {
        "category": "cafe",
        "name": "KIKORI CAFE TOKYO",
        "address": "東京都西多摩郡奥多摩町棚澤403",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=KIKORI+CAFE+TOKYO+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E6%A3%9A%E6%BE%A4403",
        "source": "https://www.google.com/maps/search/?api=1&query=KIKORI+CAFE+TOKYO+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E6%A3%9A%E6%BE%A4403",
        "note": "Google Maps掲載を確認"
      },
      {
        "category": "cafe",
        "name": "カフェ＆ギャラリーぽっぽ",
        "address": "東京都西多摩郡奥多摩町棚沢662",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E3%82%AB%E3%83%95%E3%82%A7%EF%BC%86%E3%82%AE%E3%83%A3%E3%83%A9%E3%83%AA%E3%83%BC%E3%81%BD%E3%81%A3%E3%81%BD+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E6%A3%9A%E6%B2%A2662",
        "source": "https://www.okutama.gr.jp/site/gourmet/",
        "note": "カフェ・ギャラリー"
      },
      {
        "category": "nature",
        "name": "鳩ノ巣渓谷",
        "address": "東京都西多摩郡奥多摩町棚澤 / 鳩ノ巣駅から徒歩約10分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E9%B3%A9%E3%83%8E%E5%B7%A3%E6%B8%93%E8%B0%B7+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E6%A3%9A%E6%BE%A4",
        "source": "https://www.okutama.gr.jp/site/sightseeing/",
        "note": "渓谷散策"
      }
    ]
  },
  {
    "station": "Shiromaru (白丸駅)",
    "description": "白丸湖・白丸ダム魚道の最寄り駅。湖畔散策とレストラン・小規模カフェが楽しめる。",
    "stationGoogleMaps": "https://www.google.com/maps/search/?api=1&query=Shiromaru+%E7%99%BD%E4%B8%B8%E9%A7%85",
    "officialWebsite": "https://www.okutama.gr.jp/",
    "places": [
      {
        "category": "attraction",
        "name": "白丸ダム魚道",
        "address": "東京都西多摩郡奥多摩町白丸 / 白丸駅徒歩圏",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E7%99%BD%E4%B8%B8%E3%83%80%E3%83%A0%E9%AD%9A%E9%81%93+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E7%99%BD%E4%B8%B8",
        "source": "https://www.okutama.gr.jp/site/walking/pdf/ohtama.pdf",
        "note": "白丸ダムの魚道見学"
      },
      {
        "category": "restaurant",
        "name": "森の中のお肉レストラン アースガーデン",
        "address": "東京都西多摩郡奥多摩町白丸361-1 / 白丸駅徒歩圏",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E6%A3%AE%E3%81%AE%E4%B8%AD%E3%81%AE%E3%81%8A%E8%82%89%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3+%E3%82%A2%E3%83%BC%E3%82%B9%E3%82%AC%E3%83%BC%E3%83%87%E3%83%B3+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E7%99%BD%E4%B8%B8361-1",
        "source": "https://www.okutama.gr.jp/site/gourmet/",
        "note": "肉料理・森の中のレストラン"
      },
      {
        "category": "cafe",
        "name": "しろまる卵カフェ",
        "address": "東京都西多摩郡奥多摩町白丸297",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E3%81%97%E3%82%8D%E3%81%BE%E3%82%8B%E5%8D%B5%E3%82%AB%E3%83%95%E3%82%A7+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E7%99%BD%E4%B8%B8297",
        "source": "https://www.google.com/maps/search/?api=1&query=%E3%81%97%E3%82%8D%E3%81%BE%E3%82%8B%E5%8D%B5%E3%82%AB%E3%83%95%E3%82%A7+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E7%99%BD%E4%B8%B8297",
        "note": "営業日が限られる場合があるため要確認"
      },
      {
        "category": "cafe",
        "name": "奥多摩しろまるカフェ",
        "address": "東京都西多摩郡奥多摩町白丸48-2",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E5%A5%A5%E5%A4%9A%E6%91%A9%E3%81%97%E3%82%8D%E3%81%BE%E3%82%8B%E3%82%AB%E3%83%95%E3%82%A7+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E7%99%BD%E4%B8%B848-2",
        "source": "https://www.google.com/maps/search/?api=1&query=%E5%A5%A5%E5%A4%9A%E6%91%A9%E3%81%97%E3%82%8D%E3%81%BE%E3%82%8B%E3%82%AB%E3%83%95%E3%82%A7+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E7%99%BD%E4%B8%B848-2",
        "note": "Google Maps掲載を確認"
      },
      {
        "category": "nature",
        "name": "白丸湖",
        "address": "東京都西多摩郡奥多摩町白丸300付近",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E7%99%BD%E4%B8%B8%E6%B9%96+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E7%99%BD%E4%B8%B8300%E4%BB%98%E8%BF%91",
        "source": "https://www.okutama.gr.jp/site/walking/pdf/ohtama.pdf",
        "note": "白丸調整池・湖畔散策"
      },
      {
        "category": "nature",
        "name": "数馬峡谷",
        "address": "東京都西多摩郡奥多摩町白丸周辺",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E6%95%B0%E9%A6%AC%E5%B3%A1%E8%B0%B7+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E7%99%BD%E4%B8%B8%E5%91%A8%E8%BE%BA",
        "source": "https://www.okutama.gr.jp/site/walking/pdf/ohtama.pdf",
        "note": "白丸〜奥多摩方面の渓谷景観"
      }
    ]
  },
  {
    "station": "Okutama (奥多摩駅)",
    "description": "青梅線の終点。奥多摩町の交通・観光拠点で、氷川渓谷、むかし道、温泉、キャンプ場へ徒歩アクセス可能。",
    "stationGoogleMaps": "https://www.google.com/maps/search/?api=1&query=Okutama+%E5%A5%A5%E5%A4%9A%E6%91%A9%E9%A7%85",
    "officialWebsite": "https://www.okutama.gr.jp/",
    "places": [
      {
        "category": "attraction",
        "name": "奥多摩ビジターセンター",
        "address": "東京都西多摩郡奥多摩町氷川171-1 / 奥多摩駅徒歩圏",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E5%A5%A5%E5%A4%9A%E6%91%A9%E3%83%93%E3%82%B8%E3%82%BF%E3%83%BC%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E6%B0%B7%E5%B7%9D171-1",
        "source": "https://www.ces-net.jp/okutamavc/",
        "note": "自然・登山情報の案内施設"
      },
      {
        "category": "attraction",
        "name": "奥氷川神社",
        "address": "東京都西多摩郡奥多摩町氷川",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E5%A5%A5%E6%B0%B7%E5%B7%9D%E7%A5%9E%E7%A4%BE+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E6%B0%B7%E5%B7%9D",
        "source": "https://www.okutama.gr.jp/site/map/pdf/mukashi.pdf",
        "note": "駅周辺の神社"
      },
      {
        "category": "attraction",
        "name": "奥多摩温泉 もえぎの湯",
        "address": "東京都西多摩郡奥多摩町氷川119-1 / 奥多摩駅から徒歩約10分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E5%A5%A5%E5%A4%9A%E6%91%A9%E6%B8%A9%E6%B3%89+%E3%82%82%E3%81%88%E3%81%8E%E3%81%AE%E6%B9%AF+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E6%B0%B7%E5%B7%9D119-1",
        "source": "https://www.jreast.co.jp/hachioji/ome-okutama/",
        "note": "日帰り温泉"
      },
      {
        "category": "restaurant",
        "name": "天益",
        "address": "東京都西多摩郡奥多摩町氷川213-1",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E5%A4%A9%E7%9B%8A+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E6%B0%B7%E5%B7%9D213-1",
        "source": "https://www.google.com/maps/search/?api=1&query=%E5%A4%A9%E7%9B%8A+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E6%B0%B7%E5%B7%9D213-1",
        "note": "駅前エリアの飲食店"
      },
      {
        "category": "restaurant",
        "name": "土蔵食亭（三河屋旅館）",
        "address": "東京都西多摩郡奥多摩町氷川1414 / 奥多摩駅から徒歩約5〜7分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E5%9C%9F%E8%94%B5%E9%A3%9F%E4%BA%AD%EF%BC%88%E4%B8%89%E6%B2%B3%E5%B1%8B%E6%97%85%E9%A4%A8%EF%BC%89+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E6%B0%B7%E5%B7%9D1414",
        "source": "https://www.okutama.gr.jp/site/gourmet/",
        "note": "旅館併設の食事処"
      },
      {
        "category": "cafe",
        "name": "GottaCoffee",
        "address": "東京都西多摩郡奥多摩町氷川210 JR奥多摩駅2F",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=GottaCoffee+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E6%B0%B7%E5%B7%9D210+JR%E5%A5%A5%E5%A4%9A%E6%91%A9%E9%A7%852F",
        "source": "https://www.okutama.gr.jp/site/gourmet/",
        "note": "駅舎内・駅直結のコーヒー"
      },
      {
        "category": "cafe",
        "name": "カフェ クアラ",
        "address": "東京都西多摩郡奥多摩町氷川702 / 奥多摩駅から徒歩約5分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E3%82%AB%E3%83%95%E3%82%A7+%E3%82%AF%E3%82%A2%E3%83%A9+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E6%B0%B7%E5%B7%9D702",
        "source": "https://www.okutama.gr.jp/site/gourmet/",
        "note": "季節営業あり。営業日は要確認"
      },
      {
        "category": "shopping",
        "name": "みすず堂",
        "address": "東京都西多摩郡奥多摩町氷川207",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E3%81%BF%E3%81%99%E3%81%9A%E5%A0%82+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E6%B0%B7%E5%B7%9D207",
        "source": "https://www.google.com/maps/search/?api=1&query=%E3%81%BF%E3%81%99%E3%81%9A%E5%A0%82+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E6%B0%B7%E5%B7%9D207",
        "note": "駅前の土産・物販"
      },
      {
        "category": "nature",
        "name": "氷川渓谷",
        "address": "東京都西多摩郡奥多摩町氷川 / 奥多摩駅徒歩圏",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E6%B0%B7%E5%B7%9D%E6%B8%93%E8%B0%B7+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E6%B0%B7%E5%B7%9D",
        "source": "https://www.okutama.gr.jp/site/sightseeing/",
        "note": "多摩川・日原川周辺の渓谷"
      },
      {
        "category": "nature",
        "name": "氷川キャンプ場",
        "address": "東京都西多摩郡奥多摩町氷川702 / 奥多摩駅から徒歩約5分",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E6%B0%B7%E5%B7%9D%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%97%E5%A0%B4+%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%A5%BF%E5%A4%9A%E6%91%A9%E9%83%A1%E5%A5%A5%E5%A4%9A%E6%91%A9%E7%94%BA%E6%B0%B7%E5%B7%9D702",
        "source": "https://www.okutama.gr.jp/site/accommodation/",
        "note": "駅近の河原キャンプ場"
      },
      {
        "category": "nature",
        "name": "奥多摩むかし道",
        "address": "奥多摩駅から奥多摩湖方面へ続く歴史散策路",
        "googleMaps": "https://www.google.com/maps/search/?api=1&query=%E5%A5%A5%E5%A4%9A%E6%91%A9%E3%82%80%E3%81%8B%E3%81%97%E9%81%93+%E5%A5%A5%E5%A4%9A%E6%91%A9%E9%A7%85%E3%81%8B%E3%82%89%E5%A5%A5%E5%A4%9A%E6%91%A9%E6%B9%96%E6%96%B9%E9%9D%A2%E3%81%B8%E7%B6%9A%E3%81%8F%E6%AD%B4%E5%8F%B2%E6%95%A3%E7%AD%96%E8%B7%AF",
        "source": "https://www.okutama.gr.jp/site/map/pdf/mukashi.pdf",
        "note": "旧青梅街道の歴史散策コース"
      }
    ]
  }
];

export const stationResearchByName = Object.fromEntries(
  stationResearch.map((station) => [station.station, station])
);

export const getPlacesByCategory = (
  stationName: string,
  category: StationPlaceCategory
): StationPlace[] =>
  stationResearchByName[stationName]?.places.filter(
    (place) => place.category === category
  ) ?? [];
