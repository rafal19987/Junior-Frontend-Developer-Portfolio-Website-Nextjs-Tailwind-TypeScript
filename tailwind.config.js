const withMT = require('@material-tailwind/react/utils/withMT');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '350px',
        ...defaultTheme.screens,
      },
      colors: {
        green: {
          light: '#64ffda',
          dark: '#64ffda47',
        },
        blue: {
          light: '#112240',
          dark: '#0a192f',
        },
        primary: '#CCD6F6',
        secondary: '#94A3B8',
      },
      fontFamily: {
        langar: ['var(--font-langar)'],
        lato: ['var(--font-lato)'],
        permanentMarker: ['var(--font-permanent-marker)'],
      },
      keyframes: {
        animation: {
          fadeIn: 'fadeIn 1s ease-in-out 1',
        },
        fadeIn: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
});
