"""
Create backend/project_knowledge.json from the real Nishi-Tama repository.

Run from the backend folder:
    python build_knowledge.py ..

The index has two layers:
1. Structured station/place records from frontend/src/data/stationResearch.ts
2. Searchable chunks from visitor-facing project source/data files

Secrets, dependency folders and build outputs are ignored.
"""

import argparse
import json
import re
from pathlib import Path


ALLOWED_EXTENSIONS = {
    ".ts", ".tsx", ".js", ".jsx",
    ".json", ".md", ".txt", ".html",
    ".css", ".yml", ".yaml",
}

SKIP_DIRS = {
    ".git",
    "node_modules",
    ".next",
    "dist",
    "build",
    "coverage",
    "__pycache__",
    ".venv",
    "venv",
    ".idea",
    ".lovable",
    ".vscode",
}

SKIP_FILES = {
    "package-lock.json",
    "bun.lock",
    "yarn.lock",
    "pnpm-lock.yaml",
    "project_knowledge.json",
    "routeTree.gen.ts",
}

SECRET_WORDS = (
    ".env",
    "secret",
    "credential",
    "private_key",
    "token",
)

MAX_FILE_BYTES = 1_500_000
CHUNK_CHARS = 1600
OVERLAP_CHARS = 200

# Extra spellings/transliterations improve exact station recognition in all
# seven languages exposed by the real website.
EXTRA_STATION_ALIASES = {
    "Ome (青梅駅)": [
        "Ome Station", "青梅", "青梅駅", "青梅站",
        "오메", "오메역", "Ome Bahnhof", "Омэ", "станция Омэ",
    ],
    "Miyanohira (宮ノ平駅)": [
        "Miyanohira Station", "宮ノ平", "宮ノ平駅", "宫之平站",
        "미야노히라", "미야노히라역", "Миянохира",
    ],
    "Hinatawada (日向和田駅)": [
        "Hinatawada Station", "日向和田", "日向和田駅", "日向和田站",
        "히나타와다", "히나타와다역", "Хинатавада",
    ],
    "Ishigamimae (石神前駅)": [
        "Ishigamimae Station", "石神前", "石神前駅", "石神前站",
        "이시가미마에", "이시가미마에역", "Исигамимаэ",
    ],
    "Futamatao (二俣尾駅)": [
        "Futamatao Station", "二俣尾", "二俣尾駅", "二俣尾站",
        "후타마타오", "후타마타오역", "Футаматао",
    ],
    "Ikusabata (軍畑駅)": [
        "Ikusabata Station", "軍畑", "軍畑駅", "军畑站",
        "이쿠사바타", "이쿠사바타역", "Икусабата",
    ],
    "Sawai (沢井駅)": [
        "Sawai Station", "沢井", "沢井駅", "泽井站",
        "사와이", "사와이역", "Савай", "станция Савай",
    ],
    "Mitake (御嶽駅)": [
        "Mitake Station", "御嶽", "御嶽駅", "御岳", "御岳站",
        "미타케", "미타케역", "Митакэ", "станция Митакэ",
    ],
    "Kawai (川井駅)": [
        "Kawai Station", "川井", "川井駅", "川井站",
        "카와이", "카와이역", "Кавай",
    ],
    "Kori (古里駅)": [
        "Kori Station", "古里", "古里駅", "古里站",
        "고리", "고리역", "Кори",
    ],
    "Hatonosu (鳩ノ巣駅)": [
        "Hatonosu Station", "鳩ノ巣", "鳩ノ巣駅", "鸠之巢站",
        "하토노스", "하토노스역", "Хатоносу",
    ],
    "Shiromaru (白丸駅)": [
        "Shiromaru Station", "白丸", "白丸駅", "白丸站",
        "시로마루", "시로마루역", "Сиромару",
    ],
    "Okutama (奥多摩駅)": [
        "Okutama Station", "奥多摩", "奥多摩駅", "奥多摩站",
        "오쿠타마", "오쿠타마역", "Окутама", "станция Окутама",
    ],
}



def is_visitor_facing(path, root):
    """
    Index only factual visitor content, not chatbot/UI implementation code.
    This prevents prompt-like source code from contaminating retrieval.
    """
    try:
        rel = path.relative_to(root).as_posix()
    except ValueError:
        return False

    return rel in {
        "frontend/src/data/content.ts",
        "frontend/src/data/stationResearch.ts",
        "frontend/src/lib/dictionary.ts",
    }


def should_skip(path):
    if any(part in SKIP_DIRS for part in path.parts):
        return True

    name = path.name.lower()

    if name in SKIP_FILES:
        return True

    if any(word in name for word in SECRET_WORDS):
        return True

    return path.suffix.lower() not in ALLOWED_EXTENSIONS


def clean_text(text):
    text = text.replace("\x00", "")
    text = re.sub(r"\r\n?", "\n", text)
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{4,}", "\n\n\n", text)
    return text.strip()


def chunk_text(text):
    if len(text) <= CHUNK_CHARS:
        return [text]

    chunks = []
    start = 0

    while start < len(text):
        end = min(len(text), start + CHUNK_CHARS)

        if end < len(text):
            boundary = max(
                text.rfind("\n\n", start, end),
                text.rfind("\n", start, end),
            )
            if boundary >= start + 650:
                end = boundary

        chunk = text[start:end].strip()
        if chunk:
            chunks.append(chunk)

        if end >= len(text):
            break

        start = max(start + 1, end - OVERLAP_CHARS)

    return chunks


def extract_json_array_after_marker(text, marker):
    marker_index = text.find(marker)
    if marker_index < 0:
        return None

    equals_index = text.find("=", marker_index)
    if equals_index < 0:
        return None

    start = text.find("[", equals_index)
    if start < 0:
        return None

    depth = 0
    in_string = False
    escaped = False

    for index in range(start, len(text)):
        char = text[index]

        if in_string:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == '"':
                in_string = False
            continue

        if char == '"':
            in_string = True
        elif char == "[":
            depth += 1
        elif char == "]":
            depth -= 1
            if depth == 0:
                return json.loads(text[start:index + 1])

    return None


def base_station_aliases(station_name):
    aliases = {station_name}

    match = re.match(r"^\s*([^()]+?)\s*\(([^()]+)\)\s*$", station_name or "")
    if match:
        english_name = match.group(1).strip()
        japanese_name = match.group(2).strip()

        aliases.add(english_name)
        aliases.add(english_name + " Station")
        aliases.add(japanese_name)
        aliases.add(japanese_name.replace("駅", ""))

    aliases.update(EXTRA_STATION_ALIASES.get(station_name, []))

    return sorted(
        {alias for alias in aliases if alias},
        key=len,
        reverse=True,
    )


def parse_station_research(root):
    candidates = list(root.rglob("stationResearch.ts"))
    if not candidates:
        return [], []

    path = candidates[0]
    text = path.read_text(encoding="utf-8", errors="ignore")

    rows = extract_json_array_after_marker(
        text,
        "export const stationResearch",
    ) or []

    stations = []
    places = []

    for row in rows:
        station_name = row.get("station", "")

        stations.append({
            "station": station_name,
            "aliases": base_station_aliases(station_name),
            "description": row.get("description", ""),
            "stationGoogleMaps": row.get("stationGoogleMaps", ""),
            "officialWebsite": row.get("officialWebsite", ""),
        })

        for place in row.get("places", []):
            places.append({
                "station": station_name,
                "category": place.get("category", ""),
                "name": place.get("name", ""),
                "address": place.get("address", ""),
                "googleMaps": place.get("googleMaps", ""),
                "sourceUrl": place.get("source", ""),
                "note": place.get("note", ""),
            })

    return stations, places


def build(root):
    root = root.resolve()
    chunks = []

    for path in sorted(root.rglob("*")):
        if (
            not path.is_file()
            or should_skip(path)
            or not is_visitor_facing(path, root)
        ):
            continue

        try:
            if path.stat().st_size > MAX_FILE_BYTES:
                continue
            text = path.read_text(encoding="utf-8", errors="ignore")
        except Exception:
            continue

        text = clean_text(text)
        if len(text) < 20:
            continue

        relative = path.relative_to(root).as_posix()

        for index, chunk in enumerate(chunk_text(text), start=1):
            chunks.append({
                "source": relative,
                "section": f"{path.name} / chunk {index}",
                "text": chunk,
            })

    stations, places = parse_station_research(root)

    # One semantic passage per structured station.
    for station in stations:
        chunks.append({
            "source": "frontend/src/data/stationResearch.ts",
            "section": f"Station / {station['station']}",
            "text": (
                f"Station: {station['station']}\n"
                f"Aliases: {', '.join(station['aliases'])}\n"
                f"Description: {station['description']}\n"
                f"Google Maps: {station['stationGoogleMaps']}\n"
                f"Official website: {station['officialWebsite']}"
            ),
        })

    # One semantic passage per place.
    for place in places:
        chunks.append({
            "source": "frontend/src/data/stationResearch.ts",
            "section": (
                f"{place['station']} / {place['category']} / {place['name']}"
            ),
            "text": (
                f"Station: {place['station']}\n"
                f"Category: {place['category']}\n"
                f"Place: {place['name']}\n"
                f"Address / access: {place['address']}\n"
                f"Google Maps: {place['googleMaps']}\n"
                f"Note: {place['note']}\n"
                f"Source: {place['sourceUrl']}"
            ),
        })

    return {
        "project": "Nishi-Tama-project",
        "format_version": 3,
        "chunks": chunks,
        "stations": stations,
        "places": places,
    }


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "project_root",
        nargs="?",
        default="..",
        help="Path to the Nishi-Tama repository root",
    )
    parser.add_argument(
        "--output",
        default=str(Path(__file__).with_name("project_knowledge.json")),
    )
    args = parser.parse_args()

    root = Path(args.project_root)
    output = Path(args.output)

    data = build(root)
    output.write_text(
        json.dumps(data, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    print(f"Knowledge file: {output}")
    print(f"Search chunks: {len(data['chunks'])}")
    print(f"Stations: {len(data['stations'])}")
    print(f"Structured places: {len(data['places'])}")


if __name__ == "__main__":
    main()
