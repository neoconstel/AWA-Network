const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {},
    screens: {
      xs: "320px", // Custom breakpoint
      ...defaultTheme.screens, // Existing defaults (sm: 640px, md: 768px, etc.)
    },
  },
  darkMode: "class",
  plugins: [
    require("tw-elements/plugin.cjs"),
    function ({ addVariant }) {
      addVariant("initial", "html :where(&)");
    },
  ],
};
