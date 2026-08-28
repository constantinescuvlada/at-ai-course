# Building an AI Assistant with RAG — Course Presentation

A college-course-style slide deck that teaches how to build the **AT AI Assistant**
(this project) **from scratch** — a student can follow every step, from installing
the tools to writing each file, and end up with the same working product.

## How to open

Just double-click **`index.html`** — it opens in any web browser. It's laid out
like **documentation**: a left **sidebar** lists every module and step, so you can
click straight to any slide. The current step is highlighted. You can also press
`→` / `←` to move in order. No install, no internet needed.

## Files in this folder

- **`index.html`** — slide 1 (title); start here
- **`slide-02.html` … `slide-52.html`** — one HTML file per slide
- **`styles.css`** — shared (dark-theme) styling for every slide
- **`nav.js`** — keyboard / button navigation shared by every slide

Each slide page links to the previous and next slide, so the whole set works as
a click-through presentation.

## How to present

| Key | Action |
|-----|--------|
| `→` / `Space` | Next slide |
| `←` | Previous slide |
| `Home` / `End` | Jump to first / last slide |
| `F` | Toggle full screen |

There are also `‹` `›` buttons in the bottom-right corner.

## Structure (8 modules · 31 numbered build steps · 52 slides)

It reads as a **tutorial**: a lean intro, then straight into building. Every
hands-on step shows a **"Step N of 31"** tracker, a one-line description of
what it does and why, and the exact command or code. Theory (RAG, embeddings,
cosine distance) appears as short **"why it works"** asides placed exactly
where each idea is first used.

1. **Introduction** — the big idea (RAG in 30s) and the plan (3 slides, no theory dump)
2. **Environment setup** — install Git (Git Bash) & clone the repo from GitHub · a "GitHub & Bitbucket" aside · install Python · Docker · Ollama+models · venv · install deps · `.gitignore` (steps 1–7)
3. **Database** — "what is PostgreSQL" & "what is pgvector" asides · run pgvector in Docker · enable the extension · `CREATE TABLE` + a "why cosine distance" aside · pgAdmin (connect + Query Tool) & DBeaver tool slides (steps 8–10)
4. **Data layer** — "what's an embedding" aside · the `files/` knowledge base · `embedding.py` · `localdb.py` · backfill · load & verify (steps 11–15)
5. **Backend API** — skeleton · Pydantic · read · create · update/delete · search · a "why this is RAG" aside · answer · history · run & test (steps 16–24)
6. **Frontend** — write `gradio_app.py` · strip `<think>` & launch · run the UI (steps 25–27)
7. **Testing & running** — write `attest.py` · run pytest · full start-up order · troubleshooting (steps 28–31)
8. **Wrap-up** — recap, exercises, next steps

Every step shows the **real code** from the project files it comes from
(`atassistantapi.py`, `embedding.py`, `localdb.py`, `gradio_app.py`,
`attest.py`, `dockerhelp.txt`), so following the deck reproduces the product.

## Export to PDF / PowerPoint

Each slide is its own page, so **Print → Save as PDF** on any slide gives you
that one slide. To get a single PDF of the whole deck (one slide per page), ask
me — I can generate a combined print file for you.
