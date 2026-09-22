// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { satteri } from '@astrojs/markdown-satteri';
import { softBreaks } from './src/plugins/soft-breaks.mjs';

export default defineConfig({
  site: 'https://ernestau.com',
  integrations: [mdx(), sitemap()],

  // The old slug was live before the rename. Static builds emit a small
  // redirect page, so any link already shared still lands in the right place.
  redirects: {
    '/til/japanese-log': '/til/my-japanese-learning-stack',
  },

  // Code blocks are highlighted at build time - no JS shipped to the browser.
  // Two themes are emitted at once; global.css picks which one is visible
  // based on the reader's light/dark preference.
  markdown: {
    // Sätteri is Astro's native markdown pipeline and stays the processor;
    // this only adds one plugin to it. See src/plugins/soft-breaks.mjs.
    processor: satteri({ mdastPlugins: [softBreaks] }),

    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
    },
  },

  // Fonts are downloaded and self-hosted at build time - no runtime request
  // to Google, and Astro emits preloads + fallback metrics to avoid layout shift.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Bricolage Grotesque',
      cssVariable: '--font-display',
      weights: [600, 700],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'Source Serif 4',
      cssVariable: '--font-body',
      weights: [400, 600],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: [400, 500],
      subsets: ['latin'],
    },
  ],
});
