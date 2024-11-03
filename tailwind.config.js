/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        purpleCustom: "#2B124C",
        blackCustom: "#190019",
        purpleLight: "#522B5B",
      },
      fontFamily: {
        lexend: "Lexend Zetta",
        nunito: "Nunito",
      },
    },
  },
  plugins: [],
};
