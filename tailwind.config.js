/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				PTSans: ["PT+Sans", "Poppins", "sans-serif"],
				poppins: ["Poppins"],
			},
		},
	},
	plugins: [],
};
