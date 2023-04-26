import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
	css: ['@/assets/css/tailwind.css'],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
})
