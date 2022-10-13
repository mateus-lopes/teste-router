/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#000'
      }
    },
  },
  plugins: [],
}
