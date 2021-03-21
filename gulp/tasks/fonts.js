// =============================================================================
// Gulp task: fonts
// Description: Copy all the fonts files to build or public folder
// =============================================================================
// Packages
//   gulp / gulp-newer / browser-sync
// =============================================================================

module.exports = function(gulp, plugins, config) {
  return function() {
// ------------------------------------------------------------------ Start Task
    if (process.env.NODE_ENV === 'production') {
      var stream =
        gulp.src(config.fonts.glob.build)
        .pipe(gulp.dest(config.fonts.dir.public))
    } else {
      var stream =
        gulp.src(config.fonts.glob.src)
        .pipe(plugins.newer(config.fonts.dir.build))
        .pipe(gulp.dest(config.fonts.dir.build))
    }
// -------------------------------------------------------------------- End Task
    return stream
  }
}