import { defineConfig } from 'astro/config';
import partyTown from '@astrojs/partytown';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const partyTownConfig = {
  config: {
    forward: ['dataLayer.push'],
  },
};

export default defineConfig({
  site: 'https://juansereina.com',
  integrations: [tailwind(), mdx(), sitemap(), partyTown(partyTownConfig)],
});
