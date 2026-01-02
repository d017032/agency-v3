import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://username.github.io',
  base: '/agency-v3',
  integrations: [
    tailwind({ applyBaseStyles: false }), 
    react()
  ],
  output: 'static',
});