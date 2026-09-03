# Project Instructions & Global Standards (GEMINI.md)

This project strictly adheres to global code quality, security, design, and deployment standards defined in `.agents/rules/`.

## 📜 Active Agent Rules

- **[Global Project Standards](file:///.agents/rules/project-standards.md)** (`.agents/rules/project-standards.md`)
  - Design Aesthetics (Editorial Theme, Custom Typography, Framer Motion animations)
  - React 19 + TypeScript + Vite architecture & linting standards
  - Form inputs & accessibility (`autoComplete` attributes mandatory)
  - Content Security Policy (CSP) & security headers standard (`public/_headers`)
  - Single Page Application routing (`public/_redirects`)
  - SEO & Schema.org JSON-LD structured data standards

- **[Cloudflare Deployment Rule](file:///.agents/rules/cloudflare-setup.md)** (`.agents/rules/cloudflare-setup.md`)
  - Cloudflare Pages static hosting setup
  - Header policy (`public/_headers`) and rewrite redirects (`public/_redirects`)
  - Build environment (`NODE_VERSION=20`, `dist` output)

- **[Contact & WhatsApp Standard](file:///.agents/rules/contact-details.md)** (`.agents/rules/contact-details.md`)
  - Owner & Studio contact information (`+60 11-3071 9502`)
  - WhatsApp direct link routing (`https://wa.me/601130719502`)
  - Address and structured business details


## 🛠️ Commands

- `npm run dev`: Start local development server
- `npm run build`: Build production assets (`tsc -b && vite build`)
- `npm run lint`: Run code linter (`oxlint`)
- `git status` / `git push`: Commit & deploy changes
