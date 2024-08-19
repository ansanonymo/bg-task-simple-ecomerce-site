/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{css,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#229af2",
        siteblack: "#252734",
        sitewhite: "#fafafa",
      },
      screens: {
        s360: "360px",
        s1040: "1040px",
      },
    },
  },
  plugins: [],
};
