/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['ProximaNova', 'arial', 'Helvetica Neue', 'sans-serif'],
    },
    screens: {
      xsm: '300px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1770px',
      '4xl': '2091px',
      '5xl': '2352px',
      '6xl': '2832px',
      '7xl': '3374px',
    },
  },
  plugins: [],
}
