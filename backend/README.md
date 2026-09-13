# Nishi-Tama AI Guide Backend

This backend is integrated for the real Nishi-Tama tourism project.

## Languages

It follows the exact languages currently configured in `frontend/src/lib/i18n.tsx`:

- English (`en`)
- 日本語 (`ja`)
- Tiếng Việt (`vi`)
- 中文 (`zh`)
- 한국어 (`ko`)
- Deutsch (`de`)
- Русский (`ru`)

The frontend sends the currently selected locale with every chat request.

## Knowledge sources

The chatbot searches the project itself, including:

- `frontend/src/data/content.ts`
- `frontend/src/data/stationResearch.ts`
- page/section content
- travel guide and access content
- destinations, experiences, events and area information
- other visitor-facing text/data files

`stationResearch.ts` is parsed into structured station/place records so questions
such as "restaurants near Ome Station" do not rely only on free-form AI guessing.

## Build the knowledge file

From this `backend` folder:

```bash
python build_knowledge.py ..
```

A ready-built `project_knowledge.json` is already included in this package, but
run the command again whenever the website's important content changes.

## Local run

```bash
pip install -r requirements.txt
python app.py
```

Backend URL:

```text
http://127.0.0.1:7860
```

In another terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend defaults to `http://127.0.0.1:7860` for the chatbot API.

## Production frontend setting

Set:

```text
VITE_CHATBOT_API_URL=https://YOUR-BACKEND-URL
```

For example, if deploying the backend to a Hugging Face Docker Space, use its
`.hf.space` URL.

## Important

Live facts such as today's train delays, weather, temporary closures, current
fares, or changing opening hours require a live data source. This bot is
instructed not to invent those details.
