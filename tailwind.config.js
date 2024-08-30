/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/app/layout.jsx",
    "./src/app/cart/page.jsx",
    "./src/app/contact/page.jsx",
    "./src/app/products/page.jsx",
    "./src/app/login/page.jsx",
    "./src/components/About.jsx",
    "./src/components/Hero.jsx",
    "./src/components/LoginNav.jsx",
    "./src/components/ui/Heading.jsx",
    "./src/components/ui/TextMotion.jsx",
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
        primary: 'var(--primary)',
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