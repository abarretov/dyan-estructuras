// =============================================================================
// Gulp task: clean
// Description: Delete all files and subfolders in build and public folders
// =============================================================================
// Packages
//   gulp / del / gulp-load-plugins
// =============================================================================

module.exports = function(gulp, plugins, config) {
  return async function() {
// ------------------------------------------------------------------ Start Task
    switch (process.env.FOLDERS_TO_CLEAN) {
      case 'build':
        var promise = await plugins.del(config.del.glob.build)
        break
      case 'public':
        var promise = await plugins.del(config.del.glob.public)
        break
      default:
        var promise = await plugins.del(config.del.glob.all)
    }
// -------------------------------------------------------------------- End Task
    return promise
  }
}