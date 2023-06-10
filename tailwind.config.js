/** @type {import('tailwindcss').Config} */


module.exports = {
content: [
  "./screen/**/*.{js,jsx,ts,tsx}",
  "./component/**/*.{js,jsx,ts,tsx}"],

  theme : {
    extend : {
      keyframes : {
         verticalMovement : {
          "0%" : {marginTop: "-10px" },
          "50%" : {marginTop : "10px"},
          "100%" : {marginTop : "0px"}
         }
      },
      animation: {
        'VerticalMovement': 'verticalMovement 2s linear ease-in-out',
      },
    }
  },
  plugins : [],
}
