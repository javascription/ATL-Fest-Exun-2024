/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/components/layout.jsx",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
       mo: {'max': '991px'},
       mx: {'max': '580px'},
       mi: {'max': '400px'}
      },
      colors: {
        primary: 'var(--text)',
        background: 'var(--background)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: 'class'
};