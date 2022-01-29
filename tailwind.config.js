module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-black': '#171717',
        'primary': '#e4e6ea',
        'secondary': '#b1b3b7',
        'line': '#3a3b3c',
      },
      animation: {
        'fade-in': '1s ease-in 1s 1 fadeup'
      },
      keyframes: {
        fadeup: {
          '0%': '{ position: relative; top: 50px; opacity: 0; }',
          '100%': '{ position: relative; top: 0px; opacity: 1; }',
        },
      },
    },
  },
  plugins: [],
}
