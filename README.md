<<<<<<< HEAD
# Kwan Um School of Zen Website

This website is a welcoming online home for the Kwan Um School of Zen. Its main goal is to share information about Zen meditation, our lineage, and how you can join our community. Whether you're new to Zen or looking to deepen your practice, you'll find helpful resources here.

## What You'll Find on This Website

The website is organized into several key sections to help you navigate and find what you're looking for:

*   **Welcome (Hero Section):** This is the first thing you'll see! It introduces the core message of finding peace through inner stillness and invites you to explore Zen practice. You'll find calls to action to start practicing or learn more about Zen.
*   **What is Zen?:** Dive into the essence of Zen. This section explains that Zen practice is about direct experience, not just theories. It describes meditation as a way to observe your mind and reality as it is, leading to clarity and peace.
*   **How to Start Practicing (Practice Info):** Ready to begin? This section provides practical details about our regular meditation sessions, including when and where we meet, who can join (everyone!), and that your first visit is free. It's designed to answer all your initial questions about joining.
*   **Our Lineage:** Learn about the history and tradition behind the Kwan Um School of Zen. This section explains its roots in East Asian Buddhism (China, Japan, Korea) and how it focuses on direct experience. It also introduces the Kwan Um School itself, founded by Great Master Seung Sahn, and its international presence, including our local groups.
*   **Frequently Asked Questions (FAQ):** Have questions before your first visit? This section provides clear answers to common queries, such as whether you need prior experience, the cost, what to wear, and if Zen is a religion. It aims to make your first experience as smooth as possible.
*   **Testimonials:** Hear directly from members of our community. This section shares personal stories about how Zen practice has positively impacted people's lives, offering insights into the benefits and the supportive nature of our community.
*   **Connect with Us:** Find out how to get in touch! This section provides contact information, including email, WhatsApp numbers for local groups (e.g., Košice, Bratislava), and links to our social media pages (Instagram, Facebook, YouTube) so you can stay updated and connect with us.

## How to Explore the Website

You can simply browse the website by clicking on the different sections in the navigation menu or by scrolling down the page. Each section is designed to be easy to understand and provides valuable information.

## For Developers and Contributors (Technical Information)

This section is for anyone interested in the technical aspects of the website, such as developers, designers, or contributors.

### Technologies Used

This website is built using modern web technologies to ensure it's fast, efficient, and easy to maintain:

*   **Astro:** A tool that helps build websites that load incredibly fast by sending only the necessary parts to your browser.
*   **React:** A popular library for building interactive parts of the website, making it dynamic and user-friendly.
*   **Tailwind CSS:** A system that helps designers and developers quickly style the website to look great and consistent.
*   **MDX:** Allows us to write content using a mix of Markdown (for easy writing) and interactive components (for richer content).

### Getting Started (Technical Setup)

If you want to run this website on your own computer or contribute to its development, here's how to get started:

#### Prerequisites

Make sure you have these installed on your computer:

*   **Node.js:** A software platform that allows you to run JavaScript code outside of a web browser (LTS version is recommended).
*   **pnpm:** A fast and efficient package manager used to install project dependencies.

#### Installation

1.  **Get the website code:** Open your terminal or command prompt and type:

    ```bash
    git clone https://github.com/your-username/kwan-um-website.git
    cd kwan-um-website
    ```
    This command downloads a copy of the website's code to your computer and navigates into its folder.

2.  **Install necessary tools:** Once you're in the website's folder, run:

    ```bash
    pnpm install
    ```
    This command tells `pnpm` to look at the project's requirements and install all the software libraries needed for the website to run.

#### Running the Development Version

To see the website in action on your local machine while you're working on it:

```bash
pnpm run dev
=======
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
>>>>>>> feature/05-mobile-version
```
This command starts a local server, and you can usually view the website in your web browser by going to `http://localhost:4321`. Any changes you make to the code will automatically update in your browser.

<<<<<<< HEAD
#### Preparing for Publication (Building for Production)

When the website is ready to be shared with the world, you need to prepare a final, optimized version:

```bash
pnpm run build
```
This command creates a highly optimized version of the website in a folder called `dist/`. This version is ready to be hosted online and will load as quickly as possible for visitors.

#### Testing the Published Version (Previewing the Production Build)

To see how the optimized version of the website will look and perform before it's live:

```bash
pnpm run preview
```
This command allows you to view the `dist/` folder's content in a local browser, simulating how it would appear once published.
=======
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
>>>>>>> feature/05-mobile-version
