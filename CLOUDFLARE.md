# Cloudflare Pages & Workers Deployment Standard

This repository follows the global Cloudflare setup standard to avoid Content Security Policy (CSP) mismatches, missing security headers, and SPA 404 routing errors.

Detailed guidelines and rule configuration can be found in [.agents/rules/cloudflare-setup.md](file:///c:/Users/User/Desktop/Progamming/antigravity/pet%20grooming/.agents/rules/cloudflare-setup.md).

## Quick Summary

1. **Security Headers (`public/_headers`)**:
   - Manages CSP headers (`default-src 'self' https: data: blob: 'unsafe-inline'`), `X-Content-Type-Options`, `X-Frame-Options`, and `Referrer-Policy`.
2. **Meta Tag CSP (`index.html`)**:
   - Keeps local browser CSP aligned with Cloudflare edge headers.
3. **SPA Routing (`wrangler.jsonc` & `200.html`)**:
   - Configured with native `"not_found_handling": "single-page-application"` in `wrangler.jsonc` and automatic `200.html` generation via `postbuild` script.
   - Eliminates `_redirects` recursion and infinite loop validation errors (code: 100324).
4. **Form Input Autocomplete**:
   - Explicit `autoComplete` tags on all inputs to satisfy browser security and accessibility requirements.
5. **Build Settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Deploy Command: `npx wrangler deploy`

