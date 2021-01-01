module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%, 100%': { opacity: 0 },
          '90%': { opacity: 1 }
        }
      },
      animation: {
        fade: 'fade 3s infinite'
      }
    },
  },
  variants: {
    extend: {
      textDecoration: ['active']
    },
  },
  plugins: [],
}
