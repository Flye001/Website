module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-black': '#171717',
        'primary': '#e4e6ea',
        'secondary': '#b1b3b7',
        'line': '#3a3b3c',
      },
      animation: {
        'fade-in': 'fadeup 2s linear 1'
      }
    },
  },
  plugins: [],
}
