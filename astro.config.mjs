import { defineConfig } from 'astro/config';

// Static site. `astro build` emits plain HTML/CSS/JS to ./dist.
export default defineConfig({
  site: 'https://veduta.app',
  devToolbar: { enabled: false },
});
