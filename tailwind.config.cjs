/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],

  theme: {
    screens: {
      // From Small to big
      xs: "320px",
      sm: "560px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
