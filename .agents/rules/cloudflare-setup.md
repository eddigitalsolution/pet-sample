---
description: Global setup guidelines for Cloudflare Pages / Workers static deployments to prevent CSP, SPA routing 404s, and header errors.
globs: "**/*"
alwaysApply: true
---

# Global Cloudflare Setup & Deployment Guidelines

This rule provides setup guidelines for deploying web applications (Vite, React, HTML/JS SPAs) to Cloudflare Pages and Cloudflare Workers to prevent Content Security Policy (CSP) errors, SPA routing 404s, and form/browser warnings across projects.

---

## 1. Cloudflare Security Headers (`public/_headers`)

Always include a `public/_headers` file in your project to instruct Cloudflare Pages/Workers to serve essential security headers.

### Location: `public/_headers`

```http
/*
  Content-Security-Policy: default-src 'self' https: data: blob: 'unsafe-inline'; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https: blob:; font-src 'self' https: data:; connect-src 'self' https: wss:;
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
```

> **Note on `unsafe-eval`**: Avoid `unsafe-eval` in production CSP headers unless strictly required by external legacy dependencies. Modern libraries like Framer Motion 12/13+ work without `unsafe-eval`.

---

## 2. Sync CSP Meta Tag in `index.html`

Ensure `index.html` has a matching `<meta>` tag so local dev tools and browser previews enforce identical CSP constraints as production Cloudflare edge:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self' https: data: blob: 'unsafe-inline'; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https: blob:; font-src 'self' https: data:; connect-src 'self' https: wss:;" />
```

---

## 3. Single Page Application (SPA) Routing (`public/_redirects`)

To prevent Cloudflare Pages from returning `404 Not Found` when users directly visit or refresh sub-routes (e.g. `/services`, `/booking`), include a `public/_redirects` file:

### Location: `public/_redirects`

```text
/* /index.html 200
```

---

## 4. Form Inputs & Autocomplete Standard

To prevent browser console warnings and accessibility issues on forms:
- Always supply explicit `autoComplete` attributes for inputs (e.g. `autoComplete="name"`, `autoComplete="tel"`, `autoComplete="email"`, `autoComplete="off"` for custom search/date pickers).

---

## 5. Cloudflare Pages Build Settings

When configuring Cloudflare Pages dashboard or CLI:
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Environment variable**: Set `NODE_VERSION` to `20` (or latest LTS) to ensure node version compatibility with modern Vite / React.

---

## 6. Pre-Deployment Verification Checklist

Before pushing changes or deploying:
1. Verify `public/_headers` and `public/_redirects` exist in the project repository.
2. Run `npm run build` to confirm `dist/` builds without TypeScript or bundling errors.
3. Check browser DevTools console in preview build to ensure zero CSP violations or missing resource warnings.
