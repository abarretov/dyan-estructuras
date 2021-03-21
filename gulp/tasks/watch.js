// =============================================================================
// Gulp task: watch
// Description: Monitor file changes
// =============================================================================
// Packages 
//   gulp / gulp-load-plugins / browser-sync / empty-dir / del
// Tasks -----------------------------------------------------------------------
//   sass / pug / scripts / images / fonts
// Modules ---------------------------------------------------------------------
//   path
// =============================================================================

module.exports = function(gulp, plugins, config, path) {

  // To reload the browser
  function reload(cb) {
    plugins.browserSync.reload()
    cb()
  }

  return function() {
// ------------------------------------------------------------------ Start Task

    // To handle changes in the files
    gulp.watch(config.sass.glob.src, gulp.series('sass'))
    gulp.watch(config.pug.glob.src, gulp.series('pug'))
    gulp.watch(config.scripts.glob.src, gulp.series('scripts'))
    gulp.watch(config.images.glob.src, gulp.series('images'))
    gulp.watch(config.fonts.glob.src, gulp.series('fonts'))

    // To handle the deleted files
    let watcher = gulp.watch(config.watch.glob.src, gulp.series(reload))
    watcher.on('unlink', function(__filename) {
      let folderPath = path.relative(path.resolve('src'), path.dirname(__filename))
          folderPath = path.join('build', folderPath)
      let absFolderPath = path.resolve(folderPath)
      let filePathFromSrc = path.relative(path.resolve('src'), __filename)
      let destFilePath = path.resolve('build', filePathFromSrc)
      let destFileExt = path.parse(destFilePath).ext
      // To deleted the sourcemap files (if they were created)
      if (destFileExt === '.js' || destFileExt === '.css') {
        let destFilePathMap = destFilePath + '.map'
        plugins.del.sync([destFilePath, destFilePathMap])
      } else {
        plugins.del.sync(destFilePath)
      }
      // Check if a directory is empty
      plugins.emptyDir(folderPath, function(err, result) {
        if (err) {
          console.error(err)
        } else if (result === true) {
          plugins.del.sync(absFolderPath)
        }
      })
    })
// -------------------------------------------------------------------- End Task
  }
}