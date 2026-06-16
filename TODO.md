# Remaining Tasks

> Tasks completed so far: memory leaks (BaseLayout, Header, FAQ), Resend email integration,
> site URL config, sitemap, robots.txt, JSON-LD structured data.

---

## Phase 1 — Stability

### 1.1 Replace placeholder contacts

**Files:** `src/components/sections/Connect.astro`, `src/components/layout/Footer.astro`

WhatsApp links use `XXX` placeholder numbers and all social links point to `href="#"`.

**What to do:**
- Replace every `XXX` in WhatsApp `wa.me` links with real phone numbers (international format, no spaces, e.g. `421900123456`)
- Replace every `href="#"` on social links (Facebook, Instagram, YouTube, etc.) with the real profile URLs
- If a social account does not exist yet, remove the link entirely rather than leaving a dead `#` link

**Search for placeholders:**
```bash
grep -n "XXX\|href=\"#\"" src/components/sections/Connect.astro src/components/layout/Footer.astro
```

---

## Phase 2 — Performance

### 2.1 Optimize logo.png

**File:** `public/logo.png` (currently **792 KB**)

Used as the Open Graph image (`og:image`) for every social share preview. 792 KB is sent on every link preview fetch by Facebook, Slack, iMessage, etc.

**What to do:**
- Create a dedicated OG image: **1200 × 630 px JPEG**, target size ≤ 50 KB
- Tools: Squoosh (`squoosh.app`), ImageMagick, or Figma export with quality 80
- Save as `public/og-image.jpg`
- Update `BaseLayout.astro` default image prop from `/logo.png` to `/og-image.jpg`:
  ```ts
  image = '/og-image.jpg',
  ```
- Keep `logo.png` for the `<link rel="apple-touch-icon">` (it can stay as-is or be reduced to 180×180 px)

---

### 2.2 Optimize SVG logos

**Files:** `public/logo.svg`, `public/logo-white.svg` (each ~24 KB)

Raw SVGs exported from design tools contain editor metadata, hidden layers, and redundant path data.

**What to do:**
- Run both files through [SVGO](https://github.com/svg/svgo):
  ```bash
  pnpm dlx svgo public/logo.svg -o public/logo.svg
  pnpm dlx svgo public/logo-white.svg -o public/logo-white.svg
  ```
- Target: ≤ 8 KB each with no visual difference
- Visually compare before/after in the browser before committing

---

## Phase 3 — Code Quality

### 3.1 Scope component CSS out of global.css

**File:** `src/styles/global.css` (865 lines)

Component-specific rules (`.card`, `.btn`, `.cta-*`, `.section-*`, etc.) are mixed in with true design tokens and resets. This makes the global stylesheet large and hard to maintain — any component's styles affect the entire page.

**What to do:**
- Identify class names in `global.css` that belong to a single component (e.g. `.faq-*` belongs to `FAQ.astro`)
- Move those rules into a `<style>` block inside the relevant `.astro` file
- Astro scopes `<style>` blocks automatically, so no class name collisions are possible
- After moving, delete the rules from `global.css`
- Keep only in `global.css`: Tailwind import, `@theme` tokens, CSS resets, animation keyframes, and utility classes used across 3+ components

**Priority order for migration** (largest blocks first):
1. FAQ styles → `FAQ.astro`
2. Connect / form styles → `Connect.astro`
3. Hero styles → `Hero.astro`
4. Footer styles → `Footer.astro`
5. Header styles (already mostly in `Header.astro`) → verify and complete

---

### 3.2 Replace JS parallax with CSS scroll-driven animations

**File:** `src/layouts/BaseLayout.astro` — `updateParallax()` function and its scroll handler

The current implementation calls `getBoundingClientRect()` on every scroll frame for every `[data-parallax]` element. This forces layout recalculation and can cause jank on mobile or low-end devices.

**What to do:**
- Replace the JS parallax with a CSS-only approach using the native Scroll-Driven Animations API:
  ```css
  [data-parallax] {
    animation: parallax-move linear both;
    animation-timeline: scroll();
    animation-range: entry 0% exit 100%;
  }

  @keyframes parallax-move {
    from { transform: translateY(-40px); }
    to   { transform: translateY(40px); }
  }
  ```
- Add a `@supports` guard so browsers without support fall back gracefully (no movement):
  ```css
  @supports not (animation-timeline: scroll()) {
    [data-parallax] { transform: none; }
  }
  ```
- Remove `updateParallax()`, the `ticking` variable, and the parallax branch from the scroll handler in `BaseLayout.astro`
- Test in Firefox (partial support) and Safari (requires flag in older versions)

---

### 3.3 Replace setInterval counter with requestAnimationFrame

**File:** `src/layouts/BaseLayout.astro` — `animateCounter()` function

`setInterval` at 16 ms is an approximation of 60 fps and does not sync with the browser's paint cycle. It can fire too early or too late, causing visible stuttering.

**What to do:**
- Rewrite using `requestAnimationFrame` and `performance.now()` for frame-accurate timing:
  ```ts
  function animateCounter(element: Element, target: number, duration = 2000) {
    const start = performance.now();
    let rafId: number;

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      element.textContent = Math.floor(eased * target) + '+';

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
        activeTimers.add(rafId as unknown as ReturnType<typeof setInterval>);
      } else {
        element.textContent = target + '+';
        activeTimers.delete(rafId as unknown as ReturnType<typeof setInterval>);
      }
    }

    rafId = requestAnimationFrame(step);
  }
  ```
- Update the `activeTimers` cleanup in `astro:before-preparation` to call `cancelAnimationFrame` instead of `clearInterval`:
  ```ts
  activeTimers.forEach(id => cancelAnimationFrame(id as unknown as number));
  ```
- The easing formula also improves UX — the count accelerates then decelerates, which looks more natural than linear

---

## Phase 4 — Testing

### 4.1 Write unit tests for the contact form action

**File:** `src/actions/index.ts` — Vitest is already installed and configured

The form action contains the most critical logic on the site (validation, honeypot, rate limiting, email dispatch). It has zero test coverage.

**What to do:**
- Create `src/actions/index.test.ts`
- Test cases to cover:

| Scenario | Expected result |
|---|---|
| Valid submission (all fields correct) | Returns `{ success: true, name }` |
| Name too short (< 2 chars) | Zod validation error |
| Invalid email format | Zod validation error |
| Message over 1000 chars | Zod validation error |
| Honeypot field filled | `FORBIDDEN` ActionError |
| 6th submission from same IP within 1 hour | `TOO_MANY_REQUESTS` ActionError |
| Resend returns an error | `INTERNAL_SERVER_ERROR` ActionError |
| Missing `RESEND_API_KEY` env var | Logs warning, returns success (graceful degradation) |

- Mock Resend using `vi.mock('resend')` to avoid real API calls in tests
- Run with:
  ```bash
  pnpm vitest run
  ```

---

### 4.2 Set up Lighthouse CI

Lighthouse CI automatically fails PRs if performance, accessibility, or SEO scores drop below a threshold.

**What to do:**
- Create `.lighthouserc.json` at the project root:
  ```json
  {
    "ci": {
      "collect": {
        "url": ["http://localhost:4321/"],
        "startServerCommand": "pnpm preview",
        "numberOfRuns": 3
      },
      "assert": {
        "assertions": {
          "categories:performance": ["warn", { "minScore": 0.85 }],
          "categories:accessibility": ["error", { "minScore": 0.95 }],
          "categories:seo": ["error", { "minScore": 0.95 }],
          "categories:best-practices": ["warn", { "minScore": 0.90 }]
        }
      },
      "upload": {
        "target": "temporary-public-storage"
      }
    }
  }
  ```
- Install the CLI:
  ```bash
  pnpm add -D @lhci/cli
  ```
- Add a script to `package.json`:
  ```json
  "lhci": "lhci autorun"
  ```
- Add to your CI pipeline (GitHub Actions example):
  ```yaml
  - name: Build
    run: pnpm build
  - name: Lighthouse CI
    run: pnpm lhci
  ```

---

## Quick reference — priority order

| Priority | Task | Effort |
|---|---|---|
| 🔴 High | 1.1 Replace placeholder contacts | 15 min |
| 🔴 High | 2.1 Optimize logo.png | 30 min |
| 🟡 Medium | 2.2 Optimize SVG logos | 15 min |
| 🟡 Medium | 3.3 Replace setInterval with rAF | 30 min |
| 🟡 Medium | 4.1 Write form action unit tests | 2 h |
| 🟢 Low | 3.1 Scope component CSS | 3 h |
| 🟢 Low | 3.2 CSS scroll-driven parallax | 1 h |
| 🟢 Low | 4.2 Lighthouse CI | 45 min |
