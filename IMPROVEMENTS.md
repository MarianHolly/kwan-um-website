# Performance & Optimization Plan
**Project:** Kwan Um Zen Website
**Date:** 2026-03-18
**Audited by:** Claude Code

---

## Summary

| Phase | Area | Items | Status |
|-------|------|-------|--------|
| 1 | Quick Wins | 5 | Pending |
| 2 | JavaScript | 3 | Pending |
| 3 | Rendering & Images | 3 | Pending |
| 4 | CSS & Structure | 2 | Pending |
| 5 | Monitoring & Launch | 2 | Pending |
| **Total** | | **15** | |

---

## Phase 1 — Quick Wins
> Small changes, high impact. Each item under 30 minutes.

- [ ] 1.1 Compress `logo.png` — currently 792KB, used as OG image on every social share; replace with an optimized JPEG social card (1200×630, target ≤ 50KB)
- [ ] 1.2 Optimize `logo.svg` and `logo-white.svg` with SVGO — currently 24KB each, should reduce to ~8KB without visual loss
- [ ] 1.3 Add `font-display: swap` to all `@fontsource` imports in `global.css` — prevents invisible text during font load
- [ ] 1.4 Add `public/sitemap.xml` and `public/robots.txt` — required for search engine crawlability
- [ ] 1.5 Add JSON-LD structured data to `BaseLayout.astro` — Organization, LocalBusiness, and FAQPage schemas for rich snippets

---

## Phase 2 — JavaScript Optimization
> Reduce listener count, eliminate layout thrashing, drop JS where CSS suffices.

- [ ] 2.1 Replace individual event listeners with event delegation — ripple effect, input focus animation, and anchor smooth-scroll all re-attach listeners on every `astro:page-load`; a single delegated handler on `document` is sufficient
- [ ] 2.2 Replace JavaScript parallax (`BaseLayout.astro:114–125`) with a CSS-only implementation using `transform` and `animation-timeline: scroll()` — eliminates `getBoundingClientRect()` calls on every scroll frame
- [ ] 2.3 Replace `setInterval` counter animation with `requestAnimationFrame` — more accurate, pauses when tab is hidden, no interval drift

---

## Phase 3 — Rendering & Images
> Leverage Astro's hybrid rendering and image pipeline.

- [ ] 3.1 Switch `astro.config.mjs` from `output: 'server'` to `output: 'hybrid'` and mark all purely static pages/components with `export const prerender = true` — reduces server CPU and enables CDN caching for the majority of content; keep the contact form action server-side
- [ ] 3.2 Enable `astro:assets` and replace `<img>` tags with the Astro `<Image>` component — automatically generates AVIF/WebP variants, correct `width`/`height` to prevent CLS, and responsive `srcset`
- [ ] 3.3 Add `<link rel="preload">` hints for the two display fonts (Cormorant Garamond 400, Montserrat 300) — these are render-blocking on first paint

---

## Phase 4 — CSS & Structure
> Reduce global CSS surface area and improve maintainability.

- [ ] 4.1 Move component-specific styles from `global.css` (currently 865 lines) into scoped `<style>` blocks within each `.astro` component — keep only true globals (custom properties, resets, typography scale) in `global.css`; target ≤ 300 lines
- [ ] 4.2 Audit and remove unused animation keyframes and utility classes from `global.css` — at least `@keyframes breathe` and several stagger/reveal classes appear unreferenced

---

## Phase 5 — Monitoring & Launch Readiness
> Measure, then maintain.

- [ ] 5.1 Wire up the contact form email service — complete the `TODO` in `actions/index.ts:53–61`; recommended provider: Resend (already stubbed); requires `RESEND_API_KEY` and `EMAIL_TO` in `.env`
- [ ] 5.2 Add Lighthouse CI to the build pipeline — set a performance budget (LCP < 2.5s, CLS < 0.1, TBT < 200ms) so regressions are caught before merge

---

## Reference: Specific Locations

| Issue | File | Lines |
|-------|------|-------|
| 792KB OG image | `public/logo.png` | — |
| Unoptimized SVGs | `public/logo.svg`, `public/logo-white.svg` | — |
| Missing font-display | `src/styles/global.css` | 4–16 |
| JS parallax on scroll | `src/layouts/BaseLayout.astro` | 114–125 |
| Individual event listeners | `src/layouts/BaseLayout.astro` | 200–246 |
| setInterval counter | `src/layouts/BaseLayout.astro` | 142–158 |
| Server-only output mode | `astro.config.mjs` | 9 |
| Email service TODO | `src/actions/index.ts` | 53–61 |
| OG image reference | `src/layouts/BaseLayout.astro` | 44 |
| Global CSS bloat | `src/styles/global.css` | all |
