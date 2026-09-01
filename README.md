# AT AI Assistant — Course Materials

Materials for the **AT AI Assistant** course: build a RAG (Retrieval-Augmented Generation) chatbot from zero using Python, FastAPI, PostgreSQL + pgvector, Ollama, and Gradio — then test it with pytest and a Selenium E2E test running on Selenoid.

## What's inside

| Folder | Contents |
|---|---|
| [`course-presentation/`](course-presentation/) | The full slide deck (58 slides, 31 hands-on steps) in three languages, plus course videos |
| [`files/`](files/) | The Markdown knowledge base the chatbot answers from (26 documents) |

## How to view the presentation

Open [`course-presentation/index.html`](course-presentation/index.html) in your browser — no server needed.

- **English**: `course-presentation/index.html`
- **Română**: `course-presentation/ro/index.html`
- **Русский**: `course-presentation/ru/index.html`

Navigate with the arrow keys, the on-screen arrows, or the sidebar. Press `F` for fullscreen. A language switcher (EN / RO / RU) is in the corner of every slide.

## Videos

- `course-presentation/1000037967.mp4` — course introduction
- `course-presentation/embeddings.mp4` — how embeddings work

## The hands-on project

The presentation walks you through writing all the code yourself, step by step. The project repository you clone in **Step 1** (with the knowledge base, `requirements.txt`, and a finished reference copy of the code) is:

```
git clone https://github.com/bbs-md/ai-bot-learn.git
```

Follow the slides from there — everything you need to install (Git, Python, Docker, Ollama) is covered in Module 2.

## Running the tests

The tests exercise the **real running system**, so before starting them you must launch the API and the UI (each in its own terminal, from the project folder):

```
# terminal 1 — the API
uvicorn atassistantapi:app --port 8080

# terminal 2 — the Gradio UI
python gradio_app.py
```

(The Postgres container and Ollama must also be running — see the "Start order" slide.)

Only then run the tests:

```
pytest attest.py -v          # API integration tests
pytest tests/seleniumtest.py -v   # Selenium E2E test (needs Selenoid, see the Selenium slide)
```

