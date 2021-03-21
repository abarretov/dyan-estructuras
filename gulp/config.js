// =============================================================================
// Config file
// Description: Contain all the options, globs and routes of the plugins
// =============================================================================

module.exports = {
// ---------------------------------------------------------------- DEL
  del: {
    glob: {
      build: ['./build/**', '!./build'],
      public: ['./public/**', '!./public'],
      all: ['./build/**', './public/**', '!./build', '!./public']
    }
  },
// ---------------------------------------------------------------- BROWSERSYNC
  browsersync: {
    opts: {
      dev: {
        browser: 'chrome',
        // If you will work only with HTML files
        server: {
          baseDir: './build/'
        }
        // If you will work with PHP files
        // proxy: 'localhost:8010',
        // baseDir: './build/',
        // open: true,
        // notify: false
      },
      prod: {
        browser: 'chrome',
        // If you will work only with HTML files
        server: {
          baseDir: './public/'
        }
        // If you will work with PHP files
        // proxy: 'localhost:8010',
        // baseDir: './public/',
        // open: true,
        // notify: false
      }
    }
  },
// ---------------------------------------------------------------- PHPSYNC
  phpsync: {
    opts: {
      dev: {
        base: './build/',
        port: 8010,
        keepalive: true
      },
      prod: {
        base: './public/',
        port: 8010,
        keepalive: true
      }
    }
  },
// ---------------------------------------------------------------- PUG
  pug: {
    dir: {
      build: './build/',
      public: './public/'
    },
    glob: {
      src: './src/pug/**/*.pug',
      transpile: ['./src/pug/**/*.pug', '!./src/pug/includes/**']
    },
    opts: {
      doctype: 'html'
    }
  },
// ---------------------------------------------------------------- PRETTIER
  prettier: {
    opts: {
      printWidth: 90,
      parser: 'html',
      htmlWhitespaceSensitivity: 'ignore'
    }
  },
// ---------------------------------------------------------------- SASS
  sass: {
    dir: {
      build: './build/css/',
      public:'./public/css/'
    },
    glob: {
      src: './src/sass/**/*.scss'
    },
    opts: {
      development: {
        outputStyle: 'expanded'
      },
      production: {
        outputStyle: 'compressed'
      }
    }
  },
// ---------------------------------------------------------------- SCRIPTS
  scripts: {
    dir: {
      build: './build/js/',
      public:'./public/js/'
    },
    glob: {
      src: './src/js/**/*.js'
    }
  },
// ---------------------------------------------------------------- IMAGES
  images: {
    dir: {
      build: './build/assets/images/',
      public: './public/assets/images/'
    },
    glob: {
      src: [
        './src/assets/images/**',
        '!./src/assets/images/**/*.+(orig|copy).+(webp|png|jpg|jpeg|gif|svg|ico)'
      ],
      build: './build/assets/images/**'
    }
  },
// ---------------------------------------------------------------- VIEWS
  views: {
    dir: {
      public: './public/'
    },
    glob: {
      build: './build/**/*.+(php|html)'
    }
  },
// ---------------------------------------------------------------- FONTS
  fonts: {
    dir: {
      build: './build/assets/fonts/',
      public: './public/assets/fonts/'
    },
    glob: {
      src: './src/assets/fonts/**',
      build: './build/assets/fonts/**'
    }
  },
// ---------------------------------------------------------------- WATCH
  watch: {
    glob: {
      src: [
        './src/js/**/*.js',
        './src/assets/fonts/**',
        './src/assets/images/**',
        '!./src/assets/images/**/*.+(orig).+(webp|png|jpg|jpeg|gif|svg|ico)'
      ]
    }
  }
}