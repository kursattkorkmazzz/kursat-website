/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff5d56",
      },
      height: {
        header: "50px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        mulish: ["Mulish", "Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
