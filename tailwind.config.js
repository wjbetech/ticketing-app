/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				navbar: "#200e2f",
				page: "#4a4e69",
				card: "#314256",
				text: "#cfcfcf",
				accent: "#6d597a",
				danger: "#53072d",
				success: "#588157",
			},
		},
	},
	plugins: [],
};
