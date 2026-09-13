# AI Integration Changes

Added:
- `backend/` Flask + Qwen multilingual chatbot service
- `backend/project_knowledge.json` prebuilt from the current project
- `frontend/src/components/site/ChatWidget.tsx`
- `frontend/src/lib/chatApi.ts`
- `frontend/src/data/stationResearch.ts`
- `frontend/.env.example`
- `AI_CHATBOT_SETUP.md`

Updated:
- `frontend/src/routes/__root.tsx` mounts the AI Guide on every page
- `frontend/src/lib/i18n.tsx` documentation now reflects the actual 7 languages

Current chatbot language alignment:
- English
- 日本語
- Tiếng Việt
- 中文
- 한국어
- Deutsch
- Русский

Knowledge index:
- 248 searchable visitor-facing chunks
- 13 Ome Line stations
- 89 structured real places
