/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Montserrat"],
      },
      colors: {
        dark: "#181818",
        primary: "#d29e0e",
        secondary: "#e5001c",
      },
    },
  },
  plugins: [],
};
