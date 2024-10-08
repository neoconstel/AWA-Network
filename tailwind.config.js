/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    require("tw-elements/plugin.cjs"),
    function ({ addVariant }) {
      addVariant("initial", "html :where(&)");
    },
  ],
};
