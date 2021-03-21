// =============================================================================
// Gulp task: server
// Description: Start server
// =============================================================================
// Packages
//   gulp / gulp-connect-php / gulp-load-plugins / browser-sync
// =============================================================================

module.exports = function(gulp, plugins, config) {
  let stream
  function connect(config_php_connect, config_browsersync) {
    switch (process.env.FILES_TYPE) {
      case 'php':
        stream = plugins.phpSync.server(config_php_connect, function() {
          plugins.browserSync.init(config_browsersync)
        })
        break
      default:
        stream = plugins.browserSync.init(config_browsersync)
    }
  }
  return function() {
// ------------------------------------------------------------------ Start Task
    if (process.env.NODE_ENV === 'production') {
      connect(config.phpsync.opts.prod, config.browsersync.opts.prod)
    } else {
      connect(config.phpsync.opts.dev, config.browsersync.opts.dev)
    }
// -------------------------------------------------------------------- End Task
    return stream
  }
}