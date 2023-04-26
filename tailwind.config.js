/** @type {import('tailwindcss').Config} */
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

		opacity: {
			'0': '0',
			'10': '0.1',
			'20': '0.2',
			'25': '0.25',
			'30': '0.3',
			'40': '0.4',
			'50': '0.5',
			'60': '0.6',
			'70': '0.7',
			'75': '0.75',
			'80': '0.8',
			'90': '0.9',
			'100': '1',
		},

		maxHeight: {
			'0': '0',
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
			full: '100%',
		},

		minHeight: {
			'0': '0',
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
			full: '100%',
		},

		inset: {
			'0': '0',
			auto: 'auto',
			'4': '1rem',
			'8': '2rem',
			'16': '4rem',
			'-4': '-1rem',
			'-8': '-2rem',
			'-16': '-4rem',
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
				'34': '8.5rem',
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
				'100': '25rem',
				'106': '26.5rem',
				'108': '27rem',
				'110': '27.5rem',
				'120': '30rem',
				'128': '32rem',
				'130': '32.5rem',
				'132': '33rem',
				'140': '35rem',
				'144': '36rem',
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
			borderRadius: {
				larger: '1rem',
			},

			backgroundColor: {
				nightgray: '#2f3136',
				nightgraylighter: '#36393f',
				nightergray: '#292b2f',
				mostnightgray: '#202225',
				grayinput: '#40444b',
			},

			textColor: {
				graydiscord: '#8e9297',
				chattext: '#dcddde',
			},

			minWidth: {
				'2px': '0.125rem',
				'13': '3.25rem',
				'14': '3.5rem',
				'18': '4.5rem',
				'22': '5.5rem',
				'26': '6.5rem',
				'28': '7rem',
				'30': '7.5rem',
				'34': '8.5rem',
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
			},
		},
	},

	variants: {
		maxHeight: ['responsive', 'hover', 'focus'],
	},

	plugins: [],

	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
}
