// =============================================================== Gulp Commands

// $ gulp start  | Building files for development
// $ gulp build  | Building files for production
// $ gulp clean  | Delete all files and subfolders in build and public folders

// To declares and initializes the environment variable NODE_ENV
if (typeof process.env.NODE_ENV === 'undefined' || process.env.NODE_ENV === null) {
  process.env.NODE_ENV = 'development'
}
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

// To declare the config file and the rest of development tools
const CONFIG = require('./gulp/config')
const PATH = require('path')
const GULP = require('gulp')
const PLUGINS = require('gulp-load-plugins')({
  pattern: ['*','!cross-env','!dotenv'],
  scope: ['devDependencies'],
  rename: {'gulp-connect-php': 'phpSync', 'gulp-postcss': 'postCSS'}
})

// To get the tasks from gulp/tasks
function getTask(task) {
  return require('./gulp/tasks/' + task)(GULP, PLUGINS, CONFIG, PATH)
}

// ================================================================== Gulp Tasks
module.exports.clean   = getTask('clean')
module.exports.pug     = getTask('pug')
module.exports.sass    = getTask('sass')
module.exports.server  = getTask('server')
module.exports.watch   = getTask('watch')
module.exports.scripts = getTask('scripts')
module.exports.images  = getTask('images')
module.exports.fonts   = getTask('fonts')
module.exports.views   = getTask('views')
module.exports.start   = getTask('start')
module.exports.build   = getTask('build')

// ====================================================== Gulp Tasks Description
module.exports.clean.description   = 'Delete all files and subfolders in build and public folders'
module.exports.pug.description     = 'Transpile all our Pug files to HTML'
module.exports.sass.description    = 'Transpile all our SASS files to CSS'
module.exports.server.description  = 'Start server'
module.exports.watch.description   = 'Monitor file changes'
module.exports.scripts.description = 'Transpile, compress and minify all our ES6+ code to ES5'
module.exports.images.description  = 'Opti­mizes all the images in the project'
module.exports.fonts.description   = 'Copy all the fonts files to build or public folder'
module.exports.views.description   = 'Move all our html files to the public folder'
module.exports.start.description   = 'Building files for development'
module.exports.build.description   = 'Building files for production'