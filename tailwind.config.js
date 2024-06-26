/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}" 
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "white-1": "#cbd5e1",
        white: "#f1f5f9",
        //"white-1": "#d03724",
        //"white": "#e7d29e",
        dark: "#1e2124",
        //dark: "#36333a",
        "dark-1": "#282b30",
      },
      fontFamily: {
        signika: ["Signika", "sans-serif"],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [
    require("@headlessui/vue"),
    require("daisyui"),
    require("@tailwindcss/aspect-ratio") 
  ],
  daisyui: {
    themes: [],
    daisyui: {
      themes: true, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
      darkTheme: "dark", // name of one of the included themes for dark mode
      base: true, // applies background color and foreground color for root element by default
      styled: true, // include daisyUI colors and design decisions for all components
      utils: true, // adds responsive and modifier utility classes
      prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
      logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
      themeRoot: ":root", // The element that receives theme color CSS variables
    },
  },
};
