// =============================================================================
// Config file
// Description: Contain all the options, globs and routes of the packages
// =============================================================================
// - del
// - browsersync
// - pug
// - html
// - sass
// - images
// - copy
// - scripts
// - views
// - watch

module.exports = {

// ------------------------------------------------------------------------- del
  del: {
    glob: {
      build: ['build/**', '!build', '.js-cache', '.scss-cache'],
      public: ['public/**', '!public', '.js-cache', '.scss-cache'],
      all: ['build/**', 'public/**', '!build', '!public', '.js-cache', '.scss-cache']
    }
  },
// ----------------------------------------------------------------- browsersync
  browsersync: {
    opts: {
      dev: {
        browser: 'chrome',
        // if you will work with HTML files only
        // server: {
        //   baseDir: 'build/'
        // },
        // if you will work with PHP files
        proxy: 'localhost:8010',
        baseDir: './build/',
        open: true,
        notify: false,
        files: [
          'build/css/**/*.css',
          'build/js/**/*.js'
        ],
        watchOptions: {
          awaitWriteFinish : true
        }
      },
      prod: {
        browser: 'chrome',
        // if you will work with HTML files only
        // server: {
        //   baseDir: 'public/'
        // }
        // if you will work with PHP files
        proxy: 'localhost:8010',
        baseDir: './public/',
        open: true,
        notify: false
      }
    }
  },
// ------------------------------------------------------------------------- php
  php: {
    opts: {
      dev: {
        base: './build/',
        bin:'C:/Program Files/php/php.exe',
		    ini: 'C:/Program Files/php/php.ini',
        port: 8010,
        keepalive: true
      },
      prod: {
        base: './public/',
        bin:'C:/Program Files/php/php.exe',
		    ini: 'C:/Program Files/php/php.ini',
        port: 8010,
        keepalive: true
      }
    }
  },
// ------------------------------------------------------------------------- pug
  pug: {
    dir: {
      build: 'build/',
      public: 'public/'
    },
    glob: {
      src: 'src/pug/**/*.pug',
      transpile: ['src/pug/**/*.pug', '!src/pug/partials/**', '!src/pug/templates/**']
    },
    opts: {
      transpile: {
        doctype: 'html'
      }
    }
  },
// ------------------------------------------------------------------------ html
  html: {
    opts: {
      beautify: {
        // printWidth: 90,
        parser: 'html',
        htmlWhitespaceSensitivity: 'ignore'
      }
    }
  },
// ------------------------------------------------------------------------ sass
  sass: {
    dir: {
      build: 'build/css/',
      public:'public/css/'
    },
    glob: {
      src: 'src/sass/**/*.scss'
    },
    opts: {
      dev: {
        outputStyle: 'expanded'
      },
      prod: {
        outputStyle: 'compressed'
      }
    }
  },
// ---------------------------------------------------------------------- images
  images: {
    dir: {
      build: 'build/assets/images/',
      public: 'public/assets/images/'
    },
    glob: {
      src: [
        'src/assets/images/**',
        '!src/assets/images/**/*.+(orig|copy).+(webp|png|jpg|jpeg|gif|svg|ico)',
        '!src/assets/images/**/+(favicon|img)*.+(webp|png|jpg|jpeg|gif|svg|ico)'
      ],
      build: 'build/assets/images/**'
    }
  },
// ------------------------------------------------------------------------ copy
  copy: {
    dir: {
      build: 'build/',
      public: 'public/'
    },
    glob: {
      src: [
        'src/assets/fonts/**',
        'src/assets/images/**/+(favicon|img)*.+(webp|png|jpg|jpeg|gif|svg|ico)',
        'src/js/lib/**',
        'src/inc/**',
      ],
      build: [
        'build/assets/fonts/**',
        'build/assets/images/**',
        'build/js/lib/**',
        'build/inc/**'
      ]
    }
  },
// --------------------------------------------------------------------- scripts
  scripts: {
    dir: {
      src: 'src/js/',
      build: 'build/js/',
      public:'public/js/'
    },
    glob: {
      src: [
        'src/js/**/*.js',
        '!src/js/lib/**'
      ]
    }
  },
// ----------------------------------------------------------------------- views
  views: {
    dir: {
      public: 'public/'
    },
    glob: {
      build: 'build/**/*.html'
    }
  },
// ----------------------------------------------------------------------- watch
  watch: {
    glob: {
      src: [
        'src/js/**/*.js',
        'src/assets/fonts/**',
        'src/assets/images/**',
        '!src/assets/images/**/*.+(orig|copy).+(webp|png|jpg|jpeg|gif|svg|ico)',
        '!src/assets/images/**/+(favicon|img)*.+(webp|png|jpg|jpeg|gif|svg|ico)'
      ]
    }
  }
}