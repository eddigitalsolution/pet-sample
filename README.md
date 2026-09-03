# THE GLOW-UP 🐾 | Luxury Editorial Pet Grooming & Spa Atelier

> **Concept**: "The Glow-Up" — Playful Editorial / Premium Pet Atelier Landing Page built with React 19, TypeScript, Vite, Tailwind CSS, and Framer Motion.

---

## 🌟 Features & Art Direction

- **Playful Editorial Aesthetic**: Warm Editorial Cream (`#FDFBF7`), Charcoal (`#1A1918`), Warm Champagne (`#E8D8C8`), and Pet Amber (`#D97736`) curated color palette.
- **Custom Typography**: `Syne` Display Serif paired with clean `Plus Jakarta Sans`.
- **Signature Interactive Reveal**: Custom drag-based Before/After image reveal slider showcasing scruffy-to-groomed pet transformations.
- **Bespoke Services Menu**: Interactive service selector with dynamic feature previews and pricing.
- **Master Stylists & Artisans**: Dedicated groomer profiles with experience badges and specializations.
- **Hall of Fluff**: Lookbook transformation gallery.
- **Sensory Calming Studio Experience**: 4-pillar studio section emphasizing physical safety, noise reduction, and calming aromatherapy.
- **Direct WhatsApp Integration**: Interactive booking modal configured for direct WhatsApp appointment requests (`+60 11-3071 9502`).
- **Cloudflare Workers Assets Production Build**: Native SPA routing (`wrangler.jsonc` & `200.html` fallback), postbuild cleanup, and security headers (`_headers`).
- **Lighthouse 90+ SEO**: Complete Open Graph, Twitter metadata, Schema.org `PetGrooming` JSON-LD structured data, vector SVG brand logos, and favicon.

---

## 🎨 Original Design Prompt & Vision

```yaml
Concept: "THE GLOW-UP — Luxury Editorial Pet Grooming & Spa Atelier"
Design Aesthetic: Playful Editorial (Warm Editorial Cream #FDFBF7, Charcoal #1A1918, Warm Champagne #E8D8C8, Pet Amber #D97736).
Typography: Syne Display Serif paired with clean, ultra-readable Plus Jakarta Sans.
Hero Stage: Split editorial layout featuring real photography, micro-badge status indicators ([STATUS: ACCEPTING APPOINTMENTS]), and instant WhatsApp booking CTA.
Signature Interaction:
  - Custom drag-based Before/After image reveal slider showcasing scruffy-to-groomed pet transformations.
  - Interactive Bespoke Service Selector with dynamic tier previews & live rate badges.
Required Sections:
  - Hero Stage (Bespoke styling positioning & 100% stress-free guarantee)
  - Hall of Fluff & Before/After Reveal (Interactive transformation lookbook)
  - Bespoke Spa Services & Specifications (Detailed service packages with rate badges)
  - Master Artisans & Groomers (Expert team showcase with experience badges)
  - Sensory Calming Studio Experience (4-pillar physical safety & aromatherapy manifesto)
  - Interactive Appointment Booking Modal (Form input validation & direct WhatsApp dispatch)
  - Frequently Asked Questions (Accordion for grooming frequency, coat care & safety)
  - Call To Action & Footer (WhatsApp booking dispatch & Bangsar Kuala Lumpur studio locator)
```

---

## 🛠️ Global Skills Applied

This repository enforces global agent standards and architecture guidelines through active Antigravity skills:

1. **[`global-setup`](file:///.agents/rules/project-standards.md)**
   - Enforces Cloudflare edge security headers (`public/_headers`), synchronized CSP meta tags (`index.html`), native SPA route fallback (`wrangler.jsonc` + `200.html`), and form field accessibility (`autoComplete` + unique `id`s).
2. **[`cloudflare-setup`](file:///.agents/rules/cloudflare-setup.md)**
   - Configures Cloudflare static hosting deployment parameters (`dist/` build directory, zero `unsafe-eval` CSP, Wrangler CLI integration).
3. **[`compact-ui-design`](file:///.agents/rules/project-standards.md)**
   - Enforces clean, uncluttered, compact layout rhythm (4px/8px modular grid spacing), restrained font hierarchy, monospaced data tags (`[STATUS: ACCEPTING APPOINTMENTS]`), and single-line navbar text standards.
4. **[`ui-ux-pro-max`](file:///.agents/rules/project-standards.md)**
   - Curated Playful Editorial color palette, smooth Framer Motion spring interactions, micro-animations, and high-converting visual hierarchy.
5. **Anti-AI Slop Icon Policy**
   - Strictly prohibits glossy 3D AI slop icons, rainbow sparkle overloads, or clipart clutter. Enforces clean 1.5px/2.0px stroke vector line iconography (Lucide React) in subtle monochrome tones.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment & Hosting**: Cloudflare Workers (Wrangler)
- **Icons & Brand**: Custom Vector SVG Logo & Favicon

---

## 🚀 Quick Start

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/eddigitalsolution/pet-sample.git
cd pet-sample
npm install
```

### 2. Run Locally

```bash
npm run dev
```

Open `http://localhost:5173/` in your browser.

### 3. Production Build & Deployment

```bash
# Build production assets into dist/ and generate 200.html SPA fallback
npm run build

# Build and deploy to Cloudflare Workers via Wrangler
npm run deploy
```

---

## 📋 Global Setup & Markdown Rules (.md)

This project enforces global agent standards and architecture guidelines through structured Markdown rules across all project domains:

- **[`GEMINI.md`](GEMINI.md)**: Main project instruction manifest linking active workspace rules, commands, and architecture standards.
- **[`.agents/rules/project-standards.md`](.agents/rules/project-standards.md)**: Global project rules covering UI/UX editorial design, React 19 + TypeScript standards, form accessibility (`autoComplete`), CSP security headers, SPA routing, and build/deploy workflows.
- **[`.agents/rules/cloudflare-setup.md`](.agents/rules/cloudflare-setup.md)**: Global setup rule for Cloudflare Pages & Workers static hosting (CSP header configuration, native SPA routing, build environment).
- **[`.agents/rules/contact-details.md`](.agents/rules/contact-details.md)**: Global contact and WhatsApp business details standard (`+60 11-3071 9502`).
- **[`CLOUDFLARE.md`](CLOUDFLARE.md)**: Quick-reference deployment guide for Cloudflare static configuration (`wrangler.jsonc`, `public/_headers`, & `200.html`).


---

## 📱 Contact

- **Studio**: THE GLOW-UP Pet Grooming Studio
- **Address**: 18 Jalan Bangsar Artisans, 59000 Kuala Lumpur, Malaysia
- **WhatsApp**: [+60 11-3071 9502](https://wa.me/601130719502)