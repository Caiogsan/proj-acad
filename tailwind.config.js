/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'principal': ['Rock Salt', 'serif'],
        'info': ['Dosis', 'sans-serif'],
        'most': ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'fundo1': "url('/src/img/new/homepage.jpg')",
        'fundo2': "url('/src/img/new/last-generation.jpg')",
        'fundo3': "url('/src/img/new/contact.jpg')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

