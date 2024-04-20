import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    shikiConfig: {
      // Escoge entre los temas integrados de Shiki (o agrega los tuyos propios)
      // https://shiki.style/themes
      theme: 'vitesse-dark',
      // Alternativamente, proporciona múltiples temas.
      // https://shiki.style/guide/dual-themes
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      // Agrega lenguajes de programación personalizados
      // Nota: Shiki tiene innumerables lenguajes de programación incorporados, ¡incluido .astro!
      // https://shiki.style/languages
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
      // Habilita word wrap para evitar el desplazamiento horizontal
      wrap: true,
      // Agrega transformadores personalizados: https://shiki.style/guide/transformers
      // Encuentra transformadores comunes: https://shiki.style/packages/transformers
      transformers: [],
    },
  },
});
