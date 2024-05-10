import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel/serverless';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({ 
  server: {
    port: 3000
  },
  integrations: [tailwind(), mdx()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: 'vitesse-dark',
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      langs: [
        'astro',
        'javascript',
        'typescript',
        'css',
        'html',
        'json',
        'markdown',
        'shell',
      ],
      wrap: true,
      transformers: [],
    },
  },
});
