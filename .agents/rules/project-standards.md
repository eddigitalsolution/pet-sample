---
description: Comprehensive global project standards covering UI/UX aesthetics, React/TypeScript architecture, security (CSP), forms, SEO, and deployment workflows.
globs: "**/*"
alwaysApply: true
---

# Global Project Standards & Development Workflow

This document outlines mandatory global guidelines for building, maintaining, and deploying web applications within this ecosystem.

---

## 1. UI & Design System Standards
- **Rich Aesthetics**: Avoid generic or unstyled components. Use tailored HSL/Hex color palettes (e.g. Warm Editorial Cream `#FDFBF7`, Charcoal `#1A1918`, Pet Amber `#D97736`).
- **Typography**: Preconnect and load Google Fonts (`Syne` display serif, `Plus Jakarta Sans`) with `font-display: swap`.
- **Interactive Micro-Animations**: Use Framer Motion for smooth UI transitions, state reveals, and modal animations.
- **Responsive Layouts**: Design mobile-first with clean breakpoint scaling (`sm:`, `md:`, `lg:`).

---

## 2. Code Quality & React/TypeScript Architecture
- **Strict TypeScript**: Maintain strict typing for component props, event handlers, and data structures.
- **Component Decomposition**: Keep components modular (e.g. `Header`, `Hero`, `Services`, `BeforeAfter`, `BookingModal`, `Footer`).
- **Linting & Code Formatting**: Code must pass `oxlint` / `eslint` without unhandled errors.

---

## 3. Form Accessibility & Security Standards
- **Explicit Autocomplete**: All form input elements MUST specify explicit `autoComplete` attributes (e.g. `autoComplete="name"`, `autoComplete="tel"`, `autoComplete="email"`, or `autoComplete="off"` for custom pickers).
- **Interactive Feedback**: Form submit actions must provide instant user feedback (visual loading states, validation error alerts, modal confirmation).

---

## 4. Security & Content Security Policy (CSP)
- **Edge Security Headers (`public/_headers`)**:
  Include `public/_headers` specifying strict CSP, anti-sniffing, referrer policy, and framing boundaries:
  ```http
  /*
    Content-Security-Policy: default-src 'self' https: data: blob: 'unsafe-inline'; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https: blob:; font-src 'self' https: data:; connect-src 'self' https: wss:;
    X-Content-Type-Options: nosniff
    X-Frame-Options: SAMEORIGIN
    Referrer-Policy: strict-origin-when-cross-origin
  ```
- **Meta CSP Tag**: Keep `<meta http-equiv="Content-Security-Policy">` in `index.html` synchronized with `public/_headers`.

---

## 5. Routing & SPA Static Hosting (`public/_redirects`)
- **SPA Rewrite Rule**: For Single Page Applications, include `public/_redirects` containing:
  ```text
  /* /index.html 200
  ```
  This ensures direct navigation and page refreshes on Cloudflare Pages / Vercel / Netlify do not trigger 404 errors.

---

## 6. SEO & Social Sharing
- **Structured Data**: Embed Schema.org JSON-LD structured data (e.g. `PetGrooming`, `LocalBusiness`, `Organization`).
- **Social Metadata**: Provide complete Open Graph (`og:title`, `og:description`, `og:image`) and Twitter Card meta tags in `index.html`.

---

## 7. Build & Deployment Verification Workflow
1. **Local Build Check**: Always execute `npm run build` (`tsc -b && vite build`) to verify zero compiler or bundler errors.
2. **Conventional Commits**: Use clean conventional commit messages (e.g., `feat:`, `fix:`, `docs:`, `style:`, `refactor:`).
3. **Deployment Environment**: Target Node.js LTS (v20+) in deployment platform settings.
