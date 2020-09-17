/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
	theme: {
		scale: {
			'0': '0',
			'15': '.15',
	    	'25': '.25',
			'50': '.5',
			'75': '.75',
			'80': '.8',
			'90': '.9',
			'100': '1',
			'125': '1.25',
			'150': '1.5',
	    	'200': '2',
	    	'300': '3',
	    	'400': '4',
		},

		extend: {
			spacing: {
				'2px': '0.125rem',
				'13': '3.25rem',
				'14': '3.5rem',
				'18': '4.5rem',
				'22': '5.5rem',
				'26': '6.5rem',
				'28': '7rem',
				'30': '7.5rem',
				'40': '10rem',
				'41': '10.25rem',
				'50': '12.5rem',
				'52': '13rem',
				'58': '14.5rem',
				'60': '15rem',
				'72': '18rem',
				'80': '20rem',
				'84': '21rem',
				'90': '22.5rem',
				'96': '24rem',
				'120': '30rem',
				'160': '40rem',
				'168': '42rem',
				'170': '42.5rem',
				'174': '43.5rem',
				'178': '44.5rem',
				'180': '45rem',
				'182': '45.5rem',
				'184': '46rem',
				'186': '46.5rem',
				'188': '47rem',
			},
			borderRadius:{
				'larger':'1rem'
			},
			backgroundColor:{
				'nightgray':'#2f3136',
				'nightgraylighter':'#36393f',
				'nightergray':'#292b2f',
				'mostnightgray':'#202225',
				'grayinput':'#40444b',

			},
			textColor: {
				'graydiscord': '#8e9297',
				'chattext':'#dcddde',
			},
			minWidth:{
				'2px': '0.125rem',
				'13': '3.25rem',
				'14': '3.5rem',
				'18': '4.5rem',
				'22': '5.5rem',
				'26': '6.5rem',
				'28': '7rem',
				'30': '7.5rem',
				'40': '10rem',
				'41': '10.25rem',
				'50': '12.5rem',
				'52': '13rem',
				'58': '14.5rem',
				'60': '15rem',
				'72': '18rem',
				'80': '20rem',
				'84': '21rem',
				'90': '22.5rem',
				'94': '23.5rem',
				'96': '24rem',
				'120': '30rem',
			}
		},

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
