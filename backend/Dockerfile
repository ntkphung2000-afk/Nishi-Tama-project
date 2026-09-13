FROM python:3.11-slim

ENV PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    PORT=7860 \
    MODEL_NAME=Qwen/Qwen2.5-1.5B-Instruct \
    EMBED_MODEL=intfloat/multilingual-e5-small

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Download models while building so the first visitor does not trigger a
# multi-hundred-MB cold download.
RUN python -c "from transformers import AutoTokenizer, AutoModelForCausalLM; import os; m=os.environ['MODEL_NAME']; AutoTokenizer.from_pretrained(m); AutoModelForCausalLM.from_pretrained(m)"
RUN python -c "from sentence_transformers import SentenceTransformer; import os; SentenceTransformer(os.environ['EMBED_MODEL'])"

COPY app.py knowledge_retrieval.py project_knowledge.json ./

EXPOSE 7860

CMD ["python", "app.py"]
