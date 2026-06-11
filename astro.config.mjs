import { defineConfig } from 'astro/config';

// Static site. `astro build` emits plain HTML/CSS/JS to ./dist.
// English is served at /, Chinese at /zh/.
export default defineConfig({
  site: 'https://veduta.app',
  devToolbar: { enabled: false },
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },
});
