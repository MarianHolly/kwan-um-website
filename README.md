# Kwan Um Zen — Community Website

A website for a local Kwan Um School of Zen meditation community. The site serves as a welcoming introduction for people curious about Zen practice — whether they have never meditated before or are already part of the tradition.

Content is written in Slovak.

---

## What's on the site

| Section | Purpose |
|---|---|
| **Hero** | First impression — invite visitors to explore |
| **What is Zen** | A plain-language explanation of Zen practice |
| **Practice Info** | When and where sessions take place |
| **Lineage** | The teaching tradition this community belongs to |
| **FAQ** | Answers to common questions from newcomers |
| **Connect** | How to get in touch or join a session |

---

## Built with

| Technology | Role |
|---|---|
| [Astro](https://astro.build) | Site framework, server-rendered via `@astrojs/node` |
| [Tailwind CSS 4](https://tailwindcss.com) | Utility-first styling |
| [TypeScript](https://typescriptlang.org) | Type safety across the codebase |
| [Zod](https://zod.dev) | Contact form validation (via Astro Actions) |
| [pnpm](https://pnpm.io) | Fast, disk-efficient package manager |

The site is server-rendered (`output: 'server'`) rather than fully static, so the contact form can validate and process submissions through an Astro Action.

---

## Getting started

**Requirements:** Node.js 18+ and pnpm installed.

```sh
# Install dependencies
pnpm install

# Start local dev server at http://localhost:4321
pnpm dev

# Build for production
pnpm build

# Preview the production build locally
pnpm preview
```

---

## Project structure

```
src/
├── actions/        # Astro Actions (e.g. contact form handler)
├── components/
│   ├── layout/     # Header, Footer
│   ├── sections/   # Page sections (Hero, FAQ, etc.)
│   └── ui/         # Reusable primitives (Section, Divider)
├── layouts/        # Base HTML layout
├── pages/          # Astro page routes
└── styles/         # Global CSS and design tokens
```

---

## Design system

The visual language is documented in [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md): a slate neutral palette with a sparing rose accent, Montserrat for body text, and Cormorant Garamond for display headings.

---

## License

Content and branding belong to the Kwan Um Zen community. Code is available for reference.
