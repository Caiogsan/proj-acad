/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'principal': ['Rock Salt', 'serif']
      },
      backgroundImage: {
        'fundo1': "url('/src/img/banner.png')",
        'fundo2': "url('/src/img/capturar.PNG')",
        'fundo3': "url('/src/img/imagem3.PNG')",
        'fundo4': "url('/src/img/foto5.PNG')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

