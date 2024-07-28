module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'estrelas': "url('/src/assets/Estrelas.png')",
      'footer-texture': "url('/img/footer-texture.png')",
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'jetBrains': ['JetBrains Mono', 'Arial', 'sans-serif'], 
    },
  },
  },
  plugins: [],
}