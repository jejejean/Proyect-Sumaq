/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      screens: {
        sm: { min: "0px", max: "570px" },
        md: { min: "571px", max: "900px" },
        lg: { min: "901px", max: "1100px" },
        custom: { min: "1101px", max: "1300px"},
        xl: { min: "1301px" },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
