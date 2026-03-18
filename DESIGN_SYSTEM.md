# Design System
**Project:** Kwan Um Zen Website

A minimalistic design system inspired by Buddhist tradition — calm earth tones, generous whitespace, and deliberate typographic contrast.

---

## Color System

### Primary Neutrals — Slate

The main palette. Used for UI structure, text, backgrounds, and borders.

```css
--color-slate-50  … --color-slate-950
```

| Token | Role |
|---|---|
| `slate-50 / 100` | Page backgrounds, lightest surfaces |
| `slate-200 / 300` | Borders, dividers |
| `slate-400 / 500` | Muted text, secondary icons |
| `slate-600 / 700` | Body text on light backgrounds |
| `slate-800 / 900` | Dark section backgrounds (Connect, Footer) |

### Secondary Neutrals — Stone

Warm tones used in FAQ, footer details, and subtle UI accents.

```css
--color-stone-50  … --color-stone-950
```

### Accent — Buddhist Red

```css
--color-zen-red-500: #7c2d12   /* Primary accent */
--color-zen-red-600: #661f0a   /* Hover state */
--color-zen-red-700: #581c0f   /* Buddhist maroon */
```

Used sparingly: primary CTA buttons, decorative borders, active states.

### Semantic Aliases

```css
--color-primary          /* zen-red-500 */
--color-primary-light    /* zen-red-600 */
--color-accent           /* zen-red-500 */
--color-accent-hover     /* zen-red-600 */
--color-text-primary     /* slate-900 */
--color-text-secondary   /* slate-600 */
--color-text-tertiary    /* slate-500 */
--color-text-inverse     /* white (for dark sections) */
--color-border           /* slate-200 */
--color-border-hover     /* slate-300 */
```

---

## Typography

Two self-hosted typefaces (via `@fontsource`, no external requests).

### Display — Cormorant Garamond

Used for section headings and hero titles. Serif, elegant, carries the traditional feel.

```css
--font-family-display: 'Cormorant Garamond', Georgia, serif;
```

Available weights: 300, 400, 500, 600, 700

### Body — Montserrat

Used for all body text, UI elements, labels, and navigation. Modern, legible at all sizes.

```css
--font-family-sans: 'Montserrat', system-ui, sans-serif;
```

Available weights: 100, 200, 300, 400, 500, 600, 700, 800

### Font Scale

```css
--font-size-xs:   0.75rem    /* 12px */
--font-size-sm:   0.875rem   /* 14px */
--font-size-base: 1rem       /* 16px */
--font-size-lg:   1.125rem   /* 18px */
--font-size-xl:   1.25rem    /* 20px */
--font-size-2xl:  1.5rem     /* 24px */
--font-size-3xl:  1.875rem   /* 30px */
--font-size-4xl:  2.25rem    /* 36px */
--font-size-5xl:  3rem       /* 48px */
--font-size-6xl:  3.75rem    /* 60px */
--font-size-7xl:  4.5rem     /* 72px */
```

Fluid sizing via `clamp()` is preferred for headings — avoids breakpoint jumps.

### Typographic Hierarchy

| Level | Font | Weight | Size |
|---|---|---|---|
| Display H1 | Cormorant Garamond | 300–400 | `clamp(2.5rem, 6vw, 5rem)` |
| Section H2 | Cormorant Garamond | 400 | `clamp(2rem, 4vw, 3rem)` |
| Card H3 | Montserrat | 600 | `xl` (1.25rem) |
| Body | Montserrat | 300 | `base` (1rem) |
| Label / Caption | Montserrat | 600 | `xs` (0.75rem), uppercase |

**Contrast pairing:** light weight display heading + heavier weight subheading, e.g. `weight-300` heading with `weight-600` label beneath it.

---

## Spacing

4px base unit.

```css
--spacing-1:  0.25rem   /* 4px  */
--spacing-2:  0.5rem    /* 8px  */
--spacing-3:  0.75rem   /* 12px */
--spacing-4:  1rem      /* 16px */
--spacing-5:  1.25rem   /* 20px */
--spacing-6:  1.5rem    /* 24px */
--spacing-8:  2rem      /* 32px */
--spacing-10: 2.5rem    /* 40px */
--spacing-12: 3rem      /* 48px */
--spacing-16: 4rem      /* 64px */
--spacing-24: 6rem      /* 96px */
```

### Section Padding

```
Mobile:   6rem  (96px)
Tablet:   8rem  (128px)
Desktop:  10rem (160px)
Wide:     12rem (192px)
```

---

## Border Radius

```css
--radius-sm:  0.25rem   /* Inputs, tags */
--radius-md:  0.5rem    /* Buttons, form fields */
--radius-lg:  0.75rem   /* Cards */
--radius-xl:  1rem      /* Large cards, modals */
--radius-2xl: 1.5rem    /* Hero elements */
--radius-full: 9999px   /* Pills, avatars */
```

---

## Shadows

```css
--shadow-sm:  0 1px 2px 0 rgba(0,0,0,0.05)
--shadow-md:  0 4px 6px -1px rgba(0,0,0,0.07)
--shadow-lg:  0 10px 15px -3px rgba(0,0,0,0.07)
--shadow-xl:  0 20px 25px -5px rgba(0,0,0,0.1)
```

---

## Responsive Breakpoints

```
Mobile:   < 640px
Tablet:   640px – 1023px
Desktop:  1024px – 1535px
Wide:     ≥ 1536px
```

---

## Component Patterns

### Buttons

```css
/* Primary */
background: var(--color-slate-100)
color: var(--color-slate-900)
font-weight: 500
padding: spacing-3 spacing-5
border-radius: radius-md
hover: lift + lighten

/* Accent (CTA) */
background: var(--color-accent)
color: white
hover: var(--color-accent-hover) + lift
```

### Cards

```css
background: white  /* or slate-800 on dark sections */
border: 1px solid var(--color-border)
border-radius: var(--radius-xl)
padding: spacing-10
hover: translateY(-4px) + shadow-lg + border brightens
```

### Form Inputs

```css
background: var(--color-slate-900)
border: 1px solid var(--color-slate-700)
border-radius: var(--radius-md)
padding: spacing-3 spacing-4
focus: border slate-500 + ring rgba(148,163,184,0.15)
```

### Honeypot (anti-spam)

```css
position: absolute
left: -9999px
width: 1px; height: 1px
opacity: 0; pointer-events: none
```

---

## Animation

```css
--transition-base: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow: 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
```

Scroll-triggered animations use `IntersectionObserver` via `.animate-on-scroll` — class `.animated` is applied on entry. Observers and listeners are cleaned up on `astro:before-preparation` to avoid accumulation across navigations.

---

## Design Principles

1. **Minimalism first** — whitespace is intentional, never fill for the sake of it
2. **Typography contrast** — pair light weights (300) with heavier ones (600–700) in the same block
3. **Accent sparingly** — the red appears in CTAs and key decorations only; overuse kills the effect
4. **Dark sections as punctuation** — Connect and Footer use `slate-900` to visually break the page rhythm
5. **Buddhist calm** — no aggressive animations, no busy layouts; the page should feel unhurried
