# Nishi-Tama AI Guide — Integration Notes

The project now contains:

```text
frontend/
  src/
    components/site/ChatWidget.tsx
    lib/chatApi.ts
    data/stationResearch.ts

backend/
  app.py
  knowledge_retrieval.py
  build_knowledge.py
  project_knowledge.json
  requirements.txt
  Dockerfile
```

## Supported chat languages

The chatbot follows the existing website selector:

- English
- 日本語
- Tiếng Việt
- 中文
- 한국어
- Deutsch
- Русский

Changing the website language automatically changes the chatbot greeting,
buttons, placeholder and suggested questions. Every backend request also sends
that selected locale, so the AI answers in the same language.

## Run locally

### Terminal 1 — backend

```bash
cd backend
pip install -r requirements.txt
python app.py
```

### Terminal 2 — frontend

```bash
cd frontend
npm install
npm run dev
```

The floating **AI Guide** button appears at the bottom-right of every page.

## Update project knowledge later

Whenever destinations, events, station data or other important website content
changes:

```bash
cd backend
python build_knowledge.py ..
```

Then redeploy/restart the backend.

## Production deployment

The frontend and AI backend can be hosted separately.

Set the frontend environment variable:

```text
VITE_CHATBOT_API_URL=https://YOUR-AI-BACKEND
```

The included Dockerfile is suitable for a Docker-based host such as Hugging
Face Spaces.

## Notes about accuracy

The backend uses two retrieval layers:

1. Structured station/place records for station-specific restaurant/café/
   attraction/nature/shopping questions.
2. Multilingual semantic retrieval across the broader Nishi-Tama project.

The AI is instructed not to invent project-specific facts. Live information
such as weather, train delays, temporary closures and today's opening hours is
not included unless a live data source is added later.
