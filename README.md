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
- **Cloudflare Pages Production Build**: SPA routing configuration (`_redirects`) and security headers (`_headers`).
- **Lighthouse 90+ SEO**: Complete Open Graph, Twitter metadata, Schema.org `PetGrooming` JSON-LD structured data, vector SVG brand logos, and favicon.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
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

### 3. Production Build

```bash
npm run build
```

The production-ready output will be compiled into the `dist/` directory.

---

## 📋 Global Setup & Markdown Rules (.md)

This project uses workspace and global agent rules to enforce deployment standards and security guidelines across projects:

- **[`.agents/rules/cloudflare-setup.md`](.agents/rules/cloudflare-setup.md)**: Global agent rule for Cloudflare Pages & Workers static deployments. Prevents Content Security Policy (CSP) header mismatches, missing security headers, form `autoComplete` issues, and SPA routing 404 errors.
- **[`CLOUDFLARE.md`](CLOUDFLARE.md)**: Cloudflare deployment reference guide detailing `public/_headers` (CSP & security policy) and `public/_redirects` (SPA route fallback).

---

## 📱 Contact

- **Studio**: THE GLOW-UP Pet Grooming Studio
- **Address**: 18 Jalan Bangsar Artisans, 59000 Kuala Lumpur, Malaysia
- **WhatsApp**: [+60 11-3071 9502](https://wa.me/601130719502)