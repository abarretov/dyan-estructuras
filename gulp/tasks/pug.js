// =============================================================================
// Gulp task: pug
// Description: Transpile all our Pug files to HTML
// =============================================================================
// Packages
//   gulp / gulp-prettier / gulp-load-plugins / browser-sync / pug
// =============================================================================

module.exports = function(gulp, plugins, config) {
  return function() {
    let stream =
// ---------------------------------------------- Start Task
      gulp.src(config.pug.glob.transpile)
      .pipe(plugins.pug(config.pug.opts))
      .pipe(plugins.prettier(config.prettier.opts))
      .pipe(gulp.dest(config.pug.dir.build))
      .pipe(plugins.browserSync.stream())
// ------------------------------------------------ End Task
    return stream
  }
}