/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        darkColor: "#121212",
        lightColor: "#fffffa",
        secondary: "#172026",
        accent1: "#00e9f9",
        accent2: "#ff5714",
      },
      backgroundImage: {
        gamesHero: "url('/assets/images/horizon4k.jpg')",
      },
      // fontFamily: {
      //   titleFont: ['"Lato"', "sans-serif"],
      //   bodyFont: ['"Monseratt"', "sans-serif"],
      //   serif: ['"Jacquarda Bastarda 9"', "serif"],
      // },
    },
  },
  plugins: [],
};
