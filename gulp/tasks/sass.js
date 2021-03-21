// =============================================================================
// Gulp task: sass
// Description: Transpile all our SASS files to CSS
// =============================================================================
// Packages
//   gulp / node-sass / gulp-sass / browser-sync / gulp-postcss / postcss
//   gulp-load-plugins / autoprefixer
// =============================================================================

module.exports = function(gulp, plugins, config) {
  return function sass() {
    // setting the sass.compiler property
    plugins.sass.compiler = require('node-sass')
// ------------------------------------------------------------------ Start Task
      if (process.env.NODE_ENV === 'production') {
        var stream =
          gulp.src(config.sass.glob.src)
          .pipe(plugins.sass(config.sass.opts.production).on('error', plugins.sass.logError))
          .pipe(plugins.postCSS())
          .pipe(gulp.dest(config.sass.dir.build))
      } else {
        var stream =
          gulp.src(config.sass.glob.src, { sourcemaps: true })
          .pipe(plugins.sass(config.sass.opts.development).on('error', plugins.sass.logError))
          .pipe(plugins.postCSS())
          .pipe(gulp.dest(config.sass.dir.build, { sourcemaps: '.' }))
          .pipe(plugins.browserSync.stream())
      }
// -------------------------------------------------------------------- End Task
    return stream
  }
}