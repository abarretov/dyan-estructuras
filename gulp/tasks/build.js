// =============================================================================
// Gulp task: default
// Description: Building files for production
// =============================================================================
// Packages
//   gulp
// Tasks -----------------------------------------------------------------------
//   clean / images / fonts / sass / scripts / views
// =============================================================================

module.exports = function(gulp, plugins, config) {
  return function(cb) {
    let stream =
// ------------------------------------------------------------------ Start Task
      gulp.series('clean', 'images', 'fonts', 'sass', 'scripts', 'views')
      cb()
// -------------------------------------------------------------------- End Task
    return stream(process.env.FOLDERS_TO_CLEAN = 'public', process.env.NODE_ENV = 'production')
  }
}