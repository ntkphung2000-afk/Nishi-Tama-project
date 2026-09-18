# Nishi-Tama AI Guide — Stable Final

This version removes the unreliable local Qwen generation path from the normal chatbot flow.
It answers from verified Nishi-Tama project data, which makes it much faster and prevents repetitive / unrelated responses.

Supported: all 7 site languages, 13 stations, 89 verified places, Google Maps, August events, FAQ, access, manners, seasons, food, and simple trip planning.

## Start backend
```powershell
cd C:\NishiTama\backend
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe build_knowledge.py ..
.\.venv\Scripts\python.exe app.py
```

## Start frontend
```powershell
cd C:\NishiTama\frontend
npm.cmd install
npm.cmd run dev
```

The backend should appear at http://127.0.0.1:7860 and the frontend at http://localhost:8080.
