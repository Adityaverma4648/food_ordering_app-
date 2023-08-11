/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./screen/**/*.{js,jsx,ts,tsx}",
    "./component/**/*.{js,jsx,ts,tsx}",
    "./App.js.{js,jsx,tx,tsx}"
  ],
  // darkMode : media,
  theme: {
    extend: {
      gradientColorStops: (theme) => ({
        primary: "#FF8C00",
        secondary: "#FFA500",
        danger: "#FFD700",
      }),
    },
  },
  variants : {
    extend : {},
  },
  plugins: [],
};
