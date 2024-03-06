/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      screens: {
        // sm: { min: "0px", max: "570px" },
        // md: { min: "571px", max: "900px" },
        // lg: { min: "901px", max: "1024px" },
        // xl: { min: "1025px" },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
