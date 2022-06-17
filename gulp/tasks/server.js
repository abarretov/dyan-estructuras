// =============================================================================
// Gulp task: server
// Description: Start browsers sync and server
// =============================================================================
// Packages
//   gulp / gulp-load-plugins / browser-sync / gulp-connect-php
// =============================================================================

module.exports = (gulp, packages, config) => {
  return (cb) => {
// ------------------------------------------------------------------ Start Task
    if (process.env.NODE_ENV !== 'production') {
      // var server = packages.browserSync.init(config.browsersync.opts.dev)
      var server = packages.php.server(config.php.opts.dev, () => {
        packages.browserSync.init(config.browsersync.opts.dev)
      })
    } else {
      // var server = packages.browserSync.init(config.browsersync.opts.prod)
      var server = packages.php.server(config.php.opts.prod, () => {
        packages.browserSync.init(config.browsersync.opts.prod)
      })
    }
    cb()
// -------------------------------------------------------------------- End Task
    return server
  }
}
