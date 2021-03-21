// =============================================================================
// Gulp task: scripts
// Description: Transpile, compress and minify all our ES6+ code to ES5
// =============================================================================
// Packages
//   gulp / gulp-terser / gulp-load-plugins / browser-sync
// =============================================================================

module.exports = function(gulp, plugins, config) {
  return function scripts() {
// ------------------------------------------------------------------ Start Task
    if (process.env.NODE_ENV === 'production') {
      var stream =
        gulp.src(config.scripts.glob.src) 
        .pipe(plugins.terser())
        .pipe(gulp.dest(config.scripts.dir.build))
    } else {
      var stream = 
        // gulp.src(config.scripts.glob.src, { sourcemaps: true })
        gulp.src(config.scripts.glob.src, { since: gulp.lastRun(scripts), sourcemaps: true })
        .pipe(plugins.terser())
        .pipe(gulp.dest(config.scripts.dir.build, { sourcemaps: '.'}))
    }
// -------------------------------------------------------------------- End Task
    return stream
  }
}