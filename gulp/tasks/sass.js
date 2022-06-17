// =============================================================================
// Gulp task: sass
// Description: Transpile all our SASS files to CSS
// =============================================================================
// Packages
//   gulp / gulp-sass / gulp-postcss / postcss / autoprefixer / sass
//   gulp-load-plugins / gulp-file-cache / @fullhuman/postcss-purgecss
// =============================================================================

module.exports = (gulp, packages, config) => {
  return () => {
// ------------------------------------------------------------------ Start Task
    const SASS = require('gulp-sass')(require('sass'))
    let fileCache = new packages.fileCache('.scss-cache')
    if (process.env.NODE_ENV !== 'production') {
      var stream =
        gulp.src(config.sass.glob.src, { sourcemaps: true })
          .pipe(fileCache.filter())
          // .pipe(packages.sass(config.sass.opts.dev).on('error', packages.sass.logError))
          .pipe(SASS(config.sass.opts.dev).on('error', SASS.logError))
          .pipe(packages.postCSS())
          .pipe(fileCache.cache())
          .pipe(gulp.dest(config.sass.dir.build, { sourcemaps: '.' }))
    } else {
      var stream =
        gulp.src(config.sass.glob.src)
          // .pipe(packages.sass(config.sass.opts.prod).on('error', packages.sass.logError))
          .pipe(SASS(config.sass.opts.prod).on('error', SASS.logError))
          .pipe(packages.postCSS())
          .pipe(gulp.dest(config.sass.dir.build))
    }
// -------------------------------------------------------------------- End Task
    return stream
  }
}
