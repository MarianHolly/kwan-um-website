// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Sharp is used automatically — converts to WebP, resizes, lazy-loads
    // Default output formats for <Image /> and <Picture />
    formats: ['webp', 'avif'],
  },
});