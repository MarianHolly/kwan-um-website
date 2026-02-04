# Kwan Um Zen - Design System

## Overview
A professional, minimalistic design system inspired by Buddhist tradition with modern typography and a refined color palette.

---

## 🎨 Color System

### Primary Neutrals (Stone Tones)
```css
--color-stone-50 to --color-stone-950
```
- **Stone-50/100**: Backgrounds, lightest surfaces
- **Stone-200/300**: Borders, dividers
- **Stone-500/600**: Secondary text, muted elements
- **Stone-700/800**: Primary dark text
- **Stone-900/950**: Headings, emphasis

### Buddhist Red Accent
```css
--color-zen-red-500: #7c2d12  /* Dark brick red - PRIMARY ACCENT */
--color-zen-red-600: #661f0a  /* Hover states */
--color-zen-red-700: #581c0f  /* Buddhist maroon */
```

**Usage:**
- Primary CTA buttons
- Important highlights
- Accent borders/decorations
- Active states

### Semantic Colors
```css
--color-accent          /* Main accent color (zen-red-500) */
--color-accent-hover    /* Hover state */
--color-text-primary    /* Main text (stone-900) */
--color-text-secondary  /* Body text (stone-600) */
--color-text-tertiary   /* Muted text (stone-500) */
```

---

## ✍️ Typography System

### Font Family
**Montserrat** - Professional, modern, with traditional feel

### Font Weights - Extended Range
- **100** - Thin (decorative only)
- **200** - Extralight (hero headings, elegant)
- **300** - Light (body text, subheadings)
- **400** - Normal (standard text)
- **500** - Medium (UI elements, links)
- **600** - Semibold (card titles, emphasis)
- **700** - Bold (important headings, CTAs)
- **800** - Extrabold (hero emphasis, major impact)
- **900** - Black (rare, maximum impact)

### Hierarchy Examples

#### Display Heading (H1)
```css
font-weight: 200 (extralight)
font-size: 3.75rem (60px)
```
Use for hero sections, main page titles

#### Section Heading (H2)
```css
font-weight: 300 (light) or 700 (bold)
font-size: 2.25rem (36px)
```
Use `300` for minimalist sections, `700` for emphasis

#### Subsection (H3)
```css
font-weight: 500 (medium) or 600 (semibold)
font-size: 1.5rem (24px)
```

#### Card Title (H4)
```css
font-weight: 600 (semibold)
font-size: 1.25rem (20px)
```

#### Labels/Captions
```css
font-weight: 600 (semibold)
font-size: 0.875rem (14px)
letter-spacing: 0.05em
text-transform: uppercase
```

### Creating Contrast
**Good contrast examples:**
- Hero: `weight-200` with `weight-800` highlight word
- Section: `weight-300` heading + `weight-700` subheading
- Card: `weight-600` title + `weight-300` body

---

## 📏 Spacing System

### Base Scale (4px unit)
```
--spacing-1: 4px
--spacing-2: 8px
--spacing-3: 12px
--spacing-4: 16px
--spacing-6: 24px
--spacing-8: 32px
--spacing-12: 48px
--spacing-16: 64px
--spacing-24: 96px
```

### Section Spacing
```
Mobile:  6rem (96px)
Tablet:  8rem (128px)
Desktop: 10rem (160px)
Wide:    12rem (192px)
```

---

## 🎯 Component Patterns

### Primary Button
```css
background: var(--color-primary)
color: white
font-weight: 600 (semibold)
padding: 12px 24px
border-radius: 12px
```

### Accent Button
```css
background: var(--color-accent)
color: white
font-weight: 600 (semibold)
hover: darker red with lift effect
```

### Card
```css
background: white
border: 1px solid stone-200
border-radius: 16px
padding: 24px
hover: lift + shadow
```

### Accent Highlight
```css
border-left: 4px solid var(--color-accent)
```

---

## 🎨 Design Principles

1. **Minimalism First**: Use whitespace generously
2. **Typography Contrast**: Mix light (200-300) with bold (600-800)
3. **Subtle Accent**: Red accent used sparingly for maximum impact
4. **Professional Polish**: Smooth transitions, subtle shadows
5. **Buddhist Aesthetic**: Earth tones, calm, centered, balanced

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px - 1535px
- **Wide**: ≥ 1536px

---

## 🔧 Utility Classes

### Text
```css
.text-primary    /* stone-900 */
.text-secondary  /* stone-600 */
.text-accent     /* zen-red-500 */
.font-extrabold  /* weight-800 */
```

### Buttons
```css
.btn             /* Base button */
.btn-primary     /* Dark button */
.btn-accent      /* Red button */
.btn-outline     /* Outlined button */
```

### Cards
```css
.card            /* Base card with hover */
.accent-border   /* Red left border */
.accent-dot      /* Red dot bullet */
```

---

## 💡 Usage Examples

### Hero with Strong Contrast
```html
<h1 style="font-weight: 200;">
  Objavte pokoj vo
  <span style="font-weight: 800; color: var(--color-accent);">
    vnútornej tichosti
  </span>
</h1>
```

### Section Heading with Accent
```html
<h2 class="accent-border" style="font-weight: 700; padding-left: 1.5rem;">
  Pravidelné cvičenia
</h2>
```

### Bold Label
```html
<h6 style="font-weight: 700; letter-spacing: 0.1em;">
  KONTAKT
</h6>
```

---

## 🚀 Next Steps

Phase 2 will include:
- Implementing this system across all components
- Adding scroll animations
- Refining responsive behavior
- Component-by-component polish
