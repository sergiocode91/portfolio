/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["Work Sans Variable", "system-ui", "sans-serif"],
        secondary: ["Newsreader Variable", "system-ui", "sans-serif"],
      },
      textColor: {
        primary: "#F2F1EC",
        secondary: "#B4B4B4",
        tertiary: "#171717",
      },
      backgroundColor: {
        primary: "#171717",
        secondary: "#FFFFFF",
      },
      borderColor: {
        primary: "#F2F1EC",
        tertiary: "#171717",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              fontWeight: "normal",
              textDecoration: "underline",
              textDecorationStyle: "dashed",
              textDecorationThickness: "1px",
              textUnderlineOffset: "2px",
              "&:hover": {
                textDecorationStyle: "solid",
              },
            },
            "h1,h2,h3,h4,h5,h6": {
              fontFamily: theme("fontFamily.serif"),
              fontWeight: 500,
            },
            code: {
              "background-color": "rgb(var(--color-code-bg))",
              color: "rgb(var(--color-code-text))",
              padding: "0.25rem 0.5rem",
              "border-radius": "0.25rem",
              "line-height": "1.5",
              "font-family":
                "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
            },
            "ol > li::before": {
              color: "rgb(var(--color-text-bold))",
            },
            li: {
              "margin-bottom": "0.5rem",
              color: "rgb(var(--color-code-text))",
              "font-size": "1rem",
              "line-height": "1.5",
              "font-family":
                "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            blockquote: {
              borderLeft: "2px solid #B4B4B4",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "1rem",
              color: theme("textColor.secondary"),
              lineHeight: 1.4,
              paddingLeft: "1rem",
              '@media (min-width: theme("screens.sm"))': {
                lineHeight: 1.3,
              },
            },
          },
        },
        lg: {
          css: {
            blockquote: {
              paddingLeft: "1rem",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
