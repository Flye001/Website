module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-black': '#171717',
        'primary': '#e4e6ea',
        'secondary': '#b1b3b7',
        'line': '#3a3b3c',
        'card-bg': '#292929',
      },
      screens: {
        'md': '920px',
      },
      animation: {
        'fade-in': 'fadeup 2s'
      },
      keyframes: {
        fadeup: {
          'from': '{ position: relative; top: 50px; opacity: 0; }',
          'to': '{ position: relative; top: 0px; opacity: 1; }',
        },
      },
    },
  },
  plugins: [],
}
