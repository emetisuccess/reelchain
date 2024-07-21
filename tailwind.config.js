/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{js,jsx,ts,tsx}"],
 theme: {
  container: {
   center: true,
   padding: "2rem",
  },
  listStyleType: {
   none: "none",
   disc: "disc",
   decimal: "decimal",
   square: "square",
   circle: "circle",
   roman: "upper-roman",
   hash: "#",
  },
  extend: {},
 },
 plugins: [
  require("@tailwindcss/forms")({
   strategy: "class", // only generate classes
  }),
 ],
};
