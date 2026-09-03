---
description: Global rule defining owner and business contact details (WhatsApp, address, studio info) to standardize client communications across projects.
globs: "**/*"
alwaysApply: true
---

# Global Contact & Business Details Standard

This rule standardizes contact information, WhatsApp links, and studio address details across all project components, footers, booking modals, and documentation.

---

## 📞 Primary Contact Information

- **WhatsApp Number**: `+60 11-3071 9502`
- **WhatsApp Direct Link**: `https://wa.me/601130719502`
- **Sanitized Tel Number**: `+601130719502`

---

## 📍 Business & Studio Information

- **Studio Name**: THE GLOW-UP Pet Grooming Studio
- **Tagline**: Luxury Editorial Pet Grooming & Spa Atelier
- **Address**: 18 Jalan Bangsar Artisans, 59000 Kuala Lumpur, Malaysia

---

## 🛠️ Usage Guidelines

1. **WhatsApp Integration & Booking Links**:
   - All booking triggers, call-to-action buttons, and contact modals must link to `https://wa.me/601130719502`.
   - Pre-filled WhatsApp message format:
     `https://wa.me/601130719502?text=Hello%20THE%20GLOW-UP%20Studio%2C%20I%20would%20like%20to%20book%20a%20grooming%20session...`

2. **Footers & Contact Components**:
   - Display telephone / WhatsApp string as `+60 11-3071 9502`.
   - Always add `target="_blank" rel="noopener noreferrer"` and explicit `aria-label="Contact via WhatsApp"` on external links.

3. **SEO & Structured Data**:
   - Ensure `telephone` field in Schema.org `LocalBusiness` / `PetGrooming` JSON-LD uses `+601130719502`.
