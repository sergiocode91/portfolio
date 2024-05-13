import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://www.sergiocode.dev",
  integrations: [tailwind(), mdx({
    theme: 'vitesse-dark',
    wrap: true,
    drafts: true,
  })],
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
      wrap: true,
    },
    drafts: true,
  },
});
