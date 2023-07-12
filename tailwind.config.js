/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['ProximaNova','arial','Helvetica Neue','sans-serif'],
    },
    screens: {

      'xsm': '300px',

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',


    },

  },
  plugins: [],
}

