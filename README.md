# Adeel Ahmed — Developer Portfolio

Single-page portfolio for a 7-year full-stack developer specializing in Django + React. Built as a client-facing proof of design and engineering quality.

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router, static export) |
| Language | TypeScript 5.6 |
| Styling | Tailwind CSS 3.4 (custom design tokens) |
| Icons | Lucide React |
| Fonts | Space Grotesk + Inter + JetBrains Mono via next/font |

## Design System

- **Colors**: Near-black dark theme (#0B0B0C) + warm white light (#FDFCFA), single lime accent (#C6F24E)
- **Typography**: Space Grotesk (headings), Inter (body), JetBrains Mono (labels/tags)
- **Theme**: Dark by default, light-mode toggle via `.light` class
- **Radius**: 6px "card" — minimal, clean
- **Layout**: Max-width shell 68rem, border-separated sections

## Features

- Dark/light mode toggle (persisted to localStorage, respects system preference)
- Smooth scroll navigation with section anchors
- Animated skill bars (triggered by IntersectionObserver on scroll)
- Project list with click-to-modal detail view (Escape to close, backdrop click)
- Downloadable resume — a designed, print-ready PDF at
  [`public/adeel-ahmed-resume.pdf`](public/adeel-ahmed-resume.pdf)
- Contact form with validation + simulated submit
- Scroll-reveal animations (reduced-motion safe)
- Fully responsive (375px, 768px, 1280px)
- Accessible: semantic HTML, ARIA labels, keyboard nav, focus rings, skip link

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (port 3003)
npm run dev

# Production build (static export → out/)
npm run build

# Serve the static export locally
npx serve out
```

## Deploy (static — Netlify / Vercel)

`next.config.mjs` sets `output: 'export'`, so the site is a pure static `out/`
folder. `netlify.toml` + `vercel.json` are included — three commands to live:

```bash
# Netlify
npm install && npm run build
npx netlify deploy --prod --dir=out

# Vercel
npm install && npm run build
npx vercel deploy --prod
```

## Screenshots

Responsive QA captures (375 / 768 / 1280 px, production build) live in
[`_screenshots/03-portfolio/`](../_screenshots/03-portfolio).

## Portfolio Notes

- Fictional persona "Adeel Ahmed" — swap names, emails, and content to personalize.
- All project descriptions are written as believable case studies with specific metrics.
- The resume PDF is generated from `_tools/resume/resume.html` (run
  `node _tools/make-resume.mjs` after editing content).
