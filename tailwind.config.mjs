/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				'poppins':['Poppins', 'sans-serif'],
			},
			colors:{
				primary: '#264065',
				secondary: '#A9D6CB',
				tertiary: '#909090',
				quaternary: '#070D15'

			},
			gridTemplateColumns:{
				max:'min-content max-content min-content'
			}
		},
	},
	plugins: [],
}
