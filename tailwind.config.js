/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'white': '#f1f5f9',
        'white-1': '#cbd5e1',
        'dark': '#1e2124',
        'dark-1': '#282b30'
      },
    },
  },
  plugins: [],
}