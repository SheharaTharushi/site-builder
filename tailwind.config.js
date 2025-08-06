/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#3B82F6",
					dark: "#2563EB",
				},
				"primary-light": "#ff8652",
				"primary-dark": "#c43e00",
			},
			animation: {
				"spin-slow": "spin 20s linear infinite",
				"pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
				"blink-fast": "blink 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
			},
			keyframes: {
				blink: {
					"0%, 100%": { opacity: 1 },
					"50%": { opacity: 0.4 },
				},
			},
		},
	},
	plugins: [],
};
