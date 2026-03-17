# Security & Robustness Report
**Project:** Kwan Um Zen Website
**Date:** 2026-03-17
**Audited by:** Claude Code

---

## Summary

| Severity | Count |
|----------|-------|
| Critical | 1 |
| High | 5 |
| Medium | 7 |
| Low | 4 |
| **Total** | **17** |

---

## Findings

### Critical / High

| # | Severity | Issue | Location |
|---|----------|-------|----------|
| 1 | **Critical** | 10 known CVEs in dependencies (Rollup path traversal, minimatch ReDoS, SVGO XXE, flatted DoS) | `package.json` |
| 2 | **High** | No security headers — CSP, X-Frame-Options, X-Content-Type-Options, HSTS, Referrer-Policy all missing | `astro.config.mjs` |
| 3 | **High** | No CSRF protection and no honeypot on contact form | `Connect.astro:39`, `actions/index.ts` |
| 4 | **High** | No rate limiting on form action — open to spam/flood attacks | `actions/index.ts` |
| 5 | **High** | Memory leaks: scroll, IntersectionObserver, setInterval listeners accumulate on every `astro:page-load` without cleanup | `BaseLayout.astro:98–260` |
| 6 | **High** | Header event listeners (scroll, menu, anchors) added without removal — accumulate on navigation | `Header.astro:97–162` |

### Medium

| # | Severity | Issue | Location |
|---|----------|-------|----------|
| 7 | **Medium** | Google Fonts loaded from external server — exposes user IPs to Google, GDPR concern | `BaseLayout.astro:59–62` |
| 8 | **Medium** | Missing `.trim()` on form inputs — whitespace-only submissions pass validation | `actions/index.ts:8–11` |
| 9 | **Medium** | Division by zero in scroll progress when `scrollHeight === innerHeight` | `BaseLayout.astro:173` |
| 10 | **Medium** | Counter animation `setInterval` never cancelled — leaks if element is removed from DOM | `BaseLayout.astro:138–152` |
| 11 | **Medium** | FAQ uses `DOMContentLoaded` instead of `astro:page-load` — accordion breaks after navigation | `FAQ.astro:212` |
| 12 | **Medium** | No `.env.example` file — email service configuration undocumented for contributors | project root |
| 13 | **Medium** | `console.log` outputs user PII (name, email, city) in production | `actions/index.ts:25` |

### Low / Info

| # | Severity | Issue | Location |
|---|----------|-------|----------|
| 14 | **Low** | Social links use `href="#"` — broken links, confusing for screen readers | `Connect.astro`, `Footer.astro` |
| 15 | **Low** | WhatsApp placeholder numbers (XXX) — links non-functional | `Connect.astro:45,54` |
| 16 | **Low** | Missing `theme-color`, `color-scheme`, `format-detection` meta tags | `BaseLayout.astro` |
| 17 | **Low** | Canonical URL may include query parameters — duplicate content risk | `BaseLayout.astro:65` |

---

## Implementation Plan

### Phase 1 — Security ✅ In Progress
> Patch CVEs, add security headers, protect the contact form.

- [ ] 1.1 Run `pnpm update` to patch known CVEs
- [ ] 1.2 Create `src/middleware.ts` with security headers (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS)
- [ ] 1.3 Add honeypot field to contact form
- [ ] 1.4 Validate honeypot in action handler
- [ ] 1.5 Add in-memory rate limiting to action (5 submissions per IP per hour)
- [ ] 1.6 Add `.trim()` to all string inputs in action schema

### Phase 2 — Robustness
> Fix memory leaks and lifecycle bugs.

- [ ] 2.1 Fix `BaseLayout.astro` — clean up all listeners/observers on `astro:before-preparation`
- [ ] 2.2 Fix `Header.astro` — remove scroll and menu listeners before re-adding
- [ ] 2.3 Fix counter `setInterval` — store and cancel timer on cleanup
- [ ] 2.4 Fix `FAQ.astro` — replace `DOMContentLoaded` with `astro:page-load`
- [ ] 2.5 Guard scroll progress against division by zero

### Phase 3 — Privacy & Polish
> Self-host fonts, clean up config, fix broken links.

- [ ] 3.1 Self-host Cormorant Garamond + Montserrat (replaces Step 5 of optimization plan)
- [ ] 3.2 Create `.env.example` with all required environment variables
- [ ] 3.3 Replace `console.log` of PII with structured non-PII logging
- [ ] 3.4 Fix social media links (replace `href="#"` with real URLs)
- [ ] 3.5 Replace WhatsApp placeholder numbers with real contact numbers
- [ ] 3.6 Strip query params from canonical URL
- [ ] 3.7 Add missing meta tags (`theme-color`, `color-scheme`, `format-detection`)
