/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'mono':['Space', 'monospace']

      }
    },
  },
  plugins: [],
}