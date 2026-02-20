# Kwan Um Zen — Community Website

A website for a local Kwan Um School of Zen meditation community. The site serves as a welcoming introduction for people curious about Zen practice — whether they have never meditated before or are already part of the tradition.

The design draws from Buddhist visual language: calm earth tones, generous whitespace, and a quiet, unhurried rhythm. Content is written in Slovak.

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
| [Astro 5](https://astro.build) | Site framework — fast by default, ships minimal JavaScript |
| [React 19](https://react.dev) | Interactive components where needed |
| [Tailwind CSS 4](https://tailwindcss.com) | Utility-first styling |
| [TypeScript](https://typescriptlang.org) | Type safety across the codebase |
| [MDX](https://mdxjs.com) | Rich content with embedded components |
| [Vite](https://vitejs.dev) | Build tooling (via Astro) |
| [pnpm](https://pnpm.io) | Fast, disk-efficient package manager |

The site generates static HTML at build time, meaning pages load instantly and there is no server to maintain.

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

The visual language is documented in [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md). Key decisions:

- **Typeface:** Montserrat across all weights (100–900)
- **Palette:** Stone neutrals with a Buddhist brick-red accent (`#7c2d12`)
- **Principle:** Minimalism — whitespace is intentional, the red accent is used sparingly

---

## License

Content and branding belong to the Kwan Um Zen community. Code is available for reference.
