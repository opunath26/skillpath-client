/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // class ভিত্তিক dark mode
  theme: {
    extend: {
      colors: {
        primary: '#39b8ad', // তোমার theme color
      },
    },
  },
  plugins: [],
}
