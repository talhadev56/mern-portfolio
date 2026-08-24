# Talha Akram — MERN Stack Developer Portfolio

A personal portfolio built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Stack

- **React 19** + **Vite** — build tooling and dev server
- **Tailwind CSS v4** — via the `@tailwindcss/vite` plugin, config lives in `src/index.css` under `@theme`
- **Framer Motion** — scroll reveals, hover interactions, page transitions
- **Lucide React** — icons
- **Fontsource** (self-hosted) — Space Grotesk, IBM Plex Sans, IBM Plex Mono

## Getting started

```bash
npm install
npm run dev       # starts the dev server
npm run build     # production build to dist/
npm run preview   # serve the production build locally
```

## Project structure

```
src/
├── components/     # all UI components, one per file
├── data/           # projects.js, skills.js, experience.js, stack.js — edit these to update content
├── hooks/          # useActiveSection, useReducedMotion
├── index.css       # design tokens (colors, fonts) + global styles
├── App.jsx
└── main.jsx
```

## Editing content

Almost everything you'll want to change lives in `src/data/`:

- **`projects.js`** — add/edit/remove project cards. Set `featured: true` and `size: "large" | "medium"` for the top two rows; everything else renders in the smaller grid below.
- **`skills.js`** — categorized skill lists (Frontend / Backend / Database / Tools).
- **`experience.js`** — the journey timeline and the education card.
- **`stack.js`** — the five layers in "The Stack" section.

Contact form, social links (email/GitHub/LinkedIn placeholders), and footer copy live directly in `Contact.jsx` and `Footer.jsx` — search for `#` placeholder hrefs and `talha@example.com` and swap in your real links.

## Contact form

The form currently simulates a network request (see the comment in `Contact.jsx`). To make it functional, swap the simulated `setTimeout` for a real request — e.g. a Formspree endpoint, or a `fetch()` call to your own Node/Express API route.

## Deploying

`npm run build` outputs a static `dist/` folder — deploy it to Vercel, Netlify, GitHub Pages, or any static host.
