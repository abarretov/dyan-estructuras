// =============================================================================
// Gulp task: start
// Description: Building files for development
// =============================================================================
// Packages
//   gulp
// Tasks -----------------------------------------------------------------------
//   clean / fonts / images / pug / sass / scripts / server / watch
// =============================================================================

module.exports = function(gulp) {
  return function() {
    let stream =
// ------------------------------------------------------------------ Start Task
      gulp.series(
        'clean',
        'fonts',
        'images',
        'pug',
        gulp.parallel('sass', 'scripts'),
        gulp.parallel('server', 'watch')
      )
// -------------------------------------------------------------------- End Task
    return stream(process.env.FOLDERS_TO_CLEAN = 'build')
  }
}