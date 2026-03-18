# Working Diary

---

## 2026-03-17 / 2026-03-18

- Conducted a full security and robustness audit of the codebase, documenting 17 findings across critical, high, medium, and low severity in `SECURITY.md`.
- Completed Phase 1 (security): updated dependencies to patch known CVEs, added security headers middleware (CSP, HSTS, X-Frame-Options, etc.), wired up honeypot and in-memory rate limiting on the contact form, and added `.trim()` to all form inputs.
- Completed Phase 2 (robustness): fixed accumulating scroll and observer listeners in `BaseLayout.astro` and `Header.astro` using `astro:before-preparation` cleanup, tracked counter `setInterval` IDs for cancellation, replaced `DOMContentLoaded` with `astro:page-load` in `FAQ.astro` and `Header.astro`, and guarded scroll progress against division by zero.
- Completed Phase 3 (privacy & polish): self-hosted fonts via `@fontsource` eliminating Google Fonts requests and tightening the CSP, stripped query params from the canonical URL, added `theme-color` / `color-scheme` / `format-detection` meta tags, and created `.env.example`.
- Performed a performance and optimization analysis across the full codebase and documented 15 actionable items in `IMPROVEMENTS.md` across 5 phases.

- Continue with `IMPROVEMENTS.md` Phase 1 quick wins: compress `logo.png` (792KB OG image), optimize SVGs with SVGO, add `font-display: swap`, create `sitemap.xml` + `robots.txt`, and add JSON-LD structured data.
- After quick wins, proceed to Phase 2 (JavaScript optimization) and Phase 3 (hybrid rendering + Astro Image component).
