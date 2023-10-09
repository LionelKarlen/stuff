/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	daisyui: {
		dark: 'catppucinMocha',
		themes: [
			{
				catppucinLatte: {
					primary: '#7287fd', // Lavender
					secondary: '#dc8a78', // Rosewater
					accent: '#ea76cb', // Pink
					neutral: '#acb0be', // Surface 2
					'base-100': '#eff1f5', // Base
					'base-200': '#ccd0da', //Surface0
					'base-300': '#bcc0cc', //Surface1
					'base-content': '#4c4f69' // Text
				},
				catppucinMocha: {
					primary: '#b7bdf8',
					secondary: '#f4dbd6',
					accent: '#f5bde6',
					neutral: '#585b70',
					'base-100': '#24273a',
					'base-200': '#363a4f',
					'base-300': '#494d64',
					'base-content': '#cad3f5',
					info: '#8aadf4',
					success: '#a6da95',
					warning: '#f5a97f',
					error: '#ed8796'
				}
			}
		]
	},

	plugins: [require('daisyui')]
};

module.exports = config;
