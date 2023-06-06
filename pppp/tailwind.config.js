/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./dist/script/**/*.js"],
  theme: {
    extend: {
      colors: {
        accent: "#213555",
        primary: "#0c1117",
        secondary: "#213555",
      },
      screens: {
        sm: "375px",
        "2xl": "1439px",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        md: "3rem",
        xl: "6rem",
      },
    },
  },
  plugins: [],
};
