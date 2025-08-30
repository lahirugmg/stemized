STEMized — Focused STEM Learning

Overview

- Learn one STEM area at a time using tiny lessons.
- Clean, minimal UI with Next.js App Router.
- No backend or DB — all content is local for now.

Getting Started

1) Install dependencies

   npm install

2) Run the dev server

   npm run dev

   Then open http://localhost:3000

Project Structure

- app/page.js: Home with focus area list.
- app/focus/[slug]/page.js: Focus area index.
- app/focus/[slug]/[index]/page.js: Single lesson view with prev/next.
- data/topics.js: In-memory content for areas and lessons.
- components/FocusCard.jsx: Small card to start a focus area.
- app/globals.css: Minimal styling.

Customization

- Add or edit focus areas in data/topics.js.
- Change the look and feel in app/globals.css.
- Add persistence (e.g., last lesson) with localStorage in a client component if desired.

Notes

- This is a minimal starting point; no auth, no tracking, no DB.
- Ready to deploy to any Next.js host once dependencies are installed.

