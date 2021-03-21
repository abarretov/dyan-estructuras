// =============================================================================
// Gulp task: views
// Description: Move all our html files to the public folder
// =============================================================================
// Packages
//   gulp / gulp-useref / gulp-terser / gulp-if / gulp-cssnano / gulp-load-plugins
// =============================================================================

module.exports = function(gulp, plugins, config) {
  return function() {
    let stream =
// ------------------------------------------------------------------ Start Task
      gulp.src(config.views.glob.build)
      .pipe(plugins.useref())
      .pipe(plugins.if('*.js', plugins.terser()))
      .pipe(plugins.if('*.css', plugins.cssnano()))
      .pipe(gulp.dest(config.views.dir.public))
// -------------------------------------------------------------------- End Task
    return stream
  }
}