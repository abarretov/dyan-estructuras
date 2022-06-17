// =============================================================================
// Gulp task: watch
// Description: Monitor file changes
// =============================================================================
// Packages 
//   gulp / gulp-load-plugins / browser-sync / empty-dir / del
// Tasks -----------------------------------------------------------------------
//   sass / pug / images / copy / scripts
// Modules ---------------------------------------------------------------------
//   path
// =============================================================================

module.exports = (gulp, packages, config, path) => {

  // reload the browser
  function reload(cb) {
    packages.browserSync.reload()
    cb()
  }

  return () => {
// ------------------------------------------------------------------ Start Task
    // handle changes in the files
    gulp.watch(config.pug.glob.src, gulp.series('pug', 'sass', reload))
    gulp.watch(config.sass.glob.src, gulp.series('sass'))
    gulp.watch(config.images.glob.src, {events: ['add', 'change']}, gulp.series('images'))
    gulp.watch(config.scripts.glob.src, {events: ['add', 'change']}, gulp.series('scripts'))
    gulp.watch(config.copy.glob.src, {events: ['add', 'change']}, gulp.series('copy'))

    // handle the deleted files
    gulp.watch(config.watch.glob.src).on('unlink', filename => {
      let folderPath = path.relative(path.resolve('src'), path.dirname(filename))
          folderPath = path.join('build', folderPath)
      let absFolderPath = path.resolve(folderPath)
      let filePathFromSrc = path.relative(path.resolve('src'), filename)
      let destFilePath = path.resolve('build', filePathFromSrc)
      let destFileExt = path.parse(destFilePath).ext
      // deletes the sourcemap files (if they were created)
      if (destFileExt === '.js' || destFileExt === '.css') {
        let destFilePathMap = destFilePath + '.map'
        packages.del.sync([destFilePath, destFilePathMap])
      } else {
        packages.del.sync(destFilePath)
      }
      // deletes the directory if it is empty
      packages.emptyDir(folderPath, (err, result) => {
        if (err) {
          console.error(err)
        } else if (result === true) {
          packages.del.sync(absFolderPath)
        }
      })
    })
// -------------------------------------------------------------------- End Task
  }
}
