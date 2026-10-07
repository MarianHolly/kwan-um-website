# Kwan Um Zen - Design System

## Overview
A calm, minimalistic design system for a Zen meditation community site. Tokens live in `src/styles/global.css` under `@theme` (Tailwind CSS 4) — this document explains how to use them.

---

## 🎨 Color System

### Primary Neutrals (Slate)
```css
--color-slate-50 to --color-slate-950
```
- **Slate-50**: Alternate section backgrounds
- **Slate-200/300**: Borders, dividers
- **Slate-500/600**: Secondary text, muted elements
- **Slate-700/800**: Dark surfaces (footer, connect section)
- **Slate-900/950**: Primary dark text, darkest surfaces

### Rose Accent
```css
--color-accent: var(--color-rose-950)        /* #4c0519 */
--color-accent-hover: var(--color-rose-900)  /* #881337 */
```

**Usage:** sparingly — links on hover, the skip-to-main link, form focus rings. This is not a primary-button color; `--color-primary` (slate-900) carries that role.

### Semantic Colors
```css
--color-primary          /* Dark buttons, CTAs — slate-900 */
--color-accent           /* Sparse highlight — rose-950 */
--color-text-primary     /* Main text — slate-900 */
--color-text-secondary   /* Body text — slate-600 */
--color-text-tertiary    /* Muted text — slate-500 */
```

`--color-stone-*` aliases exist for backward compatibility with older markup that references Tailwind's `stone-*` utility classes — they resolve to the slate scale, not an independent palette.

---

## ✍️ Typography System

### Font Families
- **Montserrat** — body text, UI, navigation (weights 100–800 loaded)
- **Cormorant Garamond** — display headings (`h1`, `h2`, hero/section titles)

### Hierarchy
| Element | Font | Weight | Size |
|---|---|---|---|
| H1 (hero) | Cormorant Garamond | 300 (light) | `clamp(2.5rem, 7vw, 5.5rem)` |
| H2 (section) | Cormorant Garamond | 400 (normal) | `2.25rem` base, scales via `clamp()` per section |
| H3 | Montserrat | 500 (medium) | `1.5rem` |
| H4 | Montserrat | 600 (semibold) | `1.25rem` |
| Body | Montserrat | 300 (light) | `1rem` |

### Creating Contrast
Pair a light-weight display heading with a bold inline highlight (see `.highlight` in `Hero.astro`) rather than making the whole heading bold — this is the system's primary way of drawing emphasis without reaching for color.

---

## 📏 Spacing System

4px base unit, exposed as `--spacing-0` through `--spacing-48`. Section padding uses dedicated tokens:

```
--spacing-section-mobile:  4rem  (64px)
--spacing-section-tablet:  5rem  (80px)
--spacing-section-desktop: 6rem  (96px)
--spacing-section-wide:    7rem  (112px)
```

Applied automatically via the `.section-container` utility (used by `Section.astro`).

---

## 🎯 Component Patterns

### Buttons
```css
.btn-primary   /* slate-900 background, white text */
.btn-accent    /* rose-950 background — use rarely */
.btn-outline   /* transparent, bordered */
```

### Cards
```css
background: white;
border: 1px solid var(--color-border);
border-radius: var(--radius-xl);
padding: var(--spacing-6);
/* hover: border darkens, shadow lifts, translateY(-4px) */
```

---

## 🎨 Design Principles

1. **Minimalism first** — generous whitespace, few simultaneous motion effects
2. **Typography carries hierarchy**, not color — weight and size contrast before reaching for the accent
3. **Accent used sparingly** — rose only on hover states and small highlights, never as a dominant fill
4. **Motion is restrained** — a single fade/reveal on scroll is enough; avoid stacking parallax, ripples, and 3D tilts on top of each other, which reads as busy rather than calm

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px – 1023px
- **Desktop**: 1024px – 1535px
- **Wide**: ≥ 1536px
