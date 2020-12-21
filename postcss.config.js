module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-font-magician': {
      variants: {
          'Inter': {
              '300': [],
              '400': [],
              '700': []
          }
      },
      foundries: ['google']
    }
  }
}
