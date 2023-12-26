/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#fb923c',
        dark: '#0f172a'
      },
      screens: {
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}