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
        secondary: "#FFFFFF"
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
						p: {
							fontSize: "1rem",
						},
            "h1,h2,h3,h4,h5,h6": {
              fontFamily: theme("fontFamily.serif"),
              fontWeight: 500,
              color: theme("textColor.primary"),
            },
						code: {
              'background-color': 'rgb(var(--color-code-bg))',
              color: 'rgb(var(--color-code-text))',
              padding: '0.25rem 0.5rem',
              'border-radius': '0.25rem',
              'font-size': '1rem',
              'line-height': '1.5',
              'font-family': "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
            },
            'ol > li::before': {
              color: 'rgb(var(--color-text-bold))',
            },
            li: {
              'margin-bottom': '0.5rem',
              color: 'rgb(var(--color-code-text))',
              'font-size': '1rem',
              'line-height': '1.5',
              'font-family': "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            blockquote: {
              border: 0,
              fontFamily: theme("fontFamily.serif"),
              fontSize: "1rem",
              fontStyle: "italic",
              fontWeight: "normal",
              color: theme("textColor.secondary"),
              lineHeight: 1.4,
              paddingLeft: 0,
              '@media (min-width: theme("screens.sm"))': {
                fontSize: "1.66667em",
                lineHeight: 1.3,
              },
            },
          },
        },
        lg: {
          css: {
            blockquote: {
              paddingLeft: 0,
            },
          },
        },
      }),
    },
  },
  plugins: [],
  plugins: [require("@tailwindcss/typography")],
};
