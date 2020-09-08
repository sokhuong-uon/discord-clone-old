/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
	theme: {
		extend: {
			spacing: {
				'14': '3.5rem',
				'18': '4.5rem',
				'72': '18rem',
				'80': '20rem',
				'84': '21rem',
				'96': '24rem',
			},
			borderRadius:{
				'larger':'1rem'
			}
		}
	},
	variants: {},
	plugins: [],
	purge: {
		// Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
		enabled: process.env.NODE_ENV === 'production',
		content: [
		'components/**/*.vue',
		'layouts/**/*.vue',
		'pages/**/*.vue',
		'plugins/**/*.js',
		'nuxt.config.js'
		]
	}
}
