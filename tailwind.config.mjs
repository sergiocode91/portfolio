/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				primary: ['Work Sans Variable', 'system-ui', 'sans-serif'],
				secondary: ['Newsreader Variable', 'system-ui', 'sans-serif'],
			},
			textColor: {
				primary: '#F2F1EC',
				secondary: '#B4B4B4',
			},
			borderColor: {
				primary: '#F2F1EC',
			},
		},
	},
	plugins: [],
}
