// =============================================================================
// Gulp task: pug
// Description: Transpile all our Pug files to HTML
// =============================================================================
// Packages
//   gulp / gulp-prettier / gulp-load-plugins / gulp-pug
// =============================================================================

module.exports = (gulp, packages, config) => {
  return () => {
// ------------------------------------------------------------------ Start Task
    let stream =
      gulp.src(config.pug.glob.transpile)
        .pipe(packages.pug(config.pug.opts.transpile))
        .pipe(packages.prettier(config.html.opts.beautify))
        .pipe(gulp.dest(config.pug.dir.build))
        // .pipe(packages.browserSync.stream({ once: true }))
// -------------------------------------------------------------------- End Task
    return stream
  }
}
