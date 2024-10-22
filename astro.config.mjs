// @ts-check
import { defineConfig } from 'astro/config';



// https://astro.build/config
export default defineConfig({
    site: 'https://YOURNAME.site',
    markdown: {
        shikiConfig: {
            themes: {
                light: 'snazzy-light',
            },
        },
    },
  
});
