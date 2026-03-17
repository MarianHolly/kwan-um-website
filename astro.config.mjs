// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Use sharp for image processing (built into Astro)
    // Automatically converts to WebP, resizes, and lazy-loads
    experimentalLayout: 'responsive',
  },
});