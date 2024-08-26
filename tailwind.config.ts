import type { Config } from "tailwindcss";


const config: Config = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				bg: "#fafafa"
			},
			screens: {
				'sm': '640px', // => @media (min-width: 640px)
				'md': '768px',  // => @media (min-width: 768px)
				'lg': '1024px', // => @media (min-width: 1024px)
				'xl': '1280px', // => @media (min-width: 1280px)
				'2xl': '1536px', // => @media (min-width: 1536px)
			},
		},
		fontFamily: {
			'sans': ['var(--font-inter)'],
			'serif': ['var(--font-cormorant)'],
			ebg: ['var(--font-ebg)'],
			cormorant: ['var(--font-cormorant)'],
			inter: ['var(--font-inter)'],
			'playfair': ['var(--font-playfair)'],
		},
	},
	plugins: [],
};

export default config;

