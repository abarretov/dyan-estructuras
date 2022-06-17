const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    autoprefixer({ cascade: false }),
    purgecss({
      content: ['./src/**/*.pug', './src/js/**/*.js']
      // fontFace: true,
      // keyframes: true,
    })
  ]
}
