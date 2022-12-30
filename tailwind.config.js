/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "second-1": "#32679E",
      },
      fontFamily: {
        montserrat: "Montserrat",
      },
      height: {
        "90vh": "95vh",
        "200vh": "100vh",
      },
      width: {
        '15vh': '15vw',
        '85vh':'85vw'
      },
      padding: {
          'gh':'25vh'
      },
      minHeight:{
          "200vh": "100vh"
      }
    },
    margin: {
      'percent':'100%'
    }
  },
  plugins: [],
};