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
| **Connect** | Contact form and social links |

---

## Built with

| Technology | Role |
|---|---|
| [Astro 6](https://astro.build) | Site framework — server-rendered with Node.js adapter |
| [Tailwind CSS 4](https://tailwindcss.com) | Utility-first styling |
| [TypeScript](https://typescriptlang.org) | Type safety across the codebase |
| [Zod](https://zod.dev) | Runtime validation for form actions |
| [MDX](https://mdxjs.com) | Rich content with embedded components |
| [pnpm](https://pnpm.io) | Fast, disk-efficient package manager |

---

## Getting started

**Requirements:** Node.js 18+ and pnpm installed.

```sh
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env

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
├── actions/        # Server actions (contact form)
├── components/
│   ├── layout/     # Header, Footer
│   ├── sections/   # Page sections (Hero, FAQ, etc.)
│   └── ui/         # Reusable primitives (Section, Divider)
├── layouts/        # Base HTML layout
├── middleware.ts   # Security headers
├── pages/          # Astro page routes
└── styles/         # Global CSS and design tokens
```

---

## Design system

The visual language is documented in [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md).

---

## Security & improvements

- Security audit and hardening documented in [`SECURITY.md`](./SECURITY.md)
- Performance and optimization plan in [`IMPROVEMENTS.md`](./IMPROVEMENTS.md)

---

## License

Content and branding belong to the Kwan Um Zen community. Code is available for reference.
