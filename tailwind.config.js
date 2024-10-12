/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  theme: {
    extend: {      fontFamily: {
      italianno: ['Italianno', 'cursive'], // Adaugă fontul Italianno
    },},
    dropShadow: {
      '3xl': '0 0 15px rgba(0, 0, 0, 0.5)',
    },
    screens: {
      'custom': '920px',
      sm: '640px',  // sm = dispozitive de minim 640px lățime
      md: '768px',  // md = dispozitive de minim 768px lățime
      lg: '1024px', // lg = dispozitive de minim 1024px lățime
      xl: '1280px', // xl = dispozitive de minim 1280px lățime
    },

  },
  plugins: [],
}