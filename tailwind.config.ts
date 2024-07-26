import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
      'serif': ['var(--font-ebg)'],
      ebg: ['EB Garamond', 'serif'],
      cormorant: ['Cormorant Garamond', 'serif'],
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};
export default config;

// const ebg = EB_Garamond({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-ebg',
// });

// const cormorant = Cormorant_Garamond({
//   weight: ['300', '400', '500', '600', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-cormorant',
// });

// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-inter',
// });