// =============================================================================
// Gulp task: images
// Description: Opti­mizes all the images in the project
// =============================================================================
// Packages
//   gulp / gulp-imagemin / gulp-newer / gulp-load-plugins / imagemin-gifsicle
//   imagemin-mozjpeg / imagemin-optipng / imagemin-svgo / imagemin-webp
//   browser-sync
// =============================================================================

module.exports = function(gulp, plugins, config) {
  return function() {
// ------------------------------------------------------------------ Start Task
    if (process.env.NODE_ENV === 'production') {
      var stream =
        gulp.src(config.images.glob.build)
        .pipe(plugins.imagemin([
          // plugins.imageminWebp({quality: 75, method: 6, metadata: 'all'}),
          plugins.imageminMozjpeg({quality: 75, progressive: true}),
          plugins.imageminOptipng({optimizationLevel: 5}),
          plugins.imageminGifsicle({interlaced: true}),
          plugins.imageminSvgo({
            plugins: [
              {removeViewBox: true},
              {cleanupIDs: false}
            ]
          })
        ],
          {verbose: true}
        ))
        .pipe(gulp.dest(config.images.dir.public))
    } else {
      var stream =
        gulp.src(config.images.glob.src)
        .pipe(plugins.newer(config.images.dir.build))
        .pipe(gulp.dest(config.images.dir.build))
    }
// -------------------------------------------------------------------- End Task
    return stream
  }
}