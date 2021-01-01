  //------------------------------------
  // sass
  //------------------------------------

  const gulp = require('gulp');
  const sass = require('gulp-sass');
  const del = require('del');
  const {} = require('gulp');

  function clean(cb) {
    del(['../tempni/prod'], {
      force: true
    });
    cb();
  }

  function styleSite(cb) {
    gulp.src('../tempni/dev/site/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('../tempni/prod/site'))
      .on('error', cb)
      .on('end', cb)
  }

  function styleAbout(cb) {
    gulp.src('../tempni/dev/about/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('../tempni/prod/about/site'))
      .on('error', cb)
      .on('end', cb)
  }

  function styleTutorial(cb) {
    gulp.src('../tempni/totorial/dev/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('../tempni/prod/totorial/site'))
      .on('error', cb)
      .on('end', cb)
  }




  function copyFiles(cb) {
    gulp
      .src(['../tempni/dev/**/*.*', '!../tempni/dev/**/*.scss'])
      .pipe(gulp.dest('../tempni/prod'))
      .on('error', cb)
      .on('end', cb)
  };


  function watch(cb) {
    gulp.watch('../tempni/dev/site/**/*.scss', styleSite)
    gulp.watch('../tempni/site/dev/about/**/*.scss', styleAbout)
    gulp.watch('../tempni/dev/tutorial/**/*.scss', styleTutorial)
    //------------------------------------------------------------
    gulp.watch('../tempni/dev/site/**/*.html').on('change', () => {
      clean(cb);
      copyFiles(cb);
    });
    gulp.watch('../tempni/dev/site/**/*.js').on('change', () => {
      clean(cb);
      copyFiles(cb);
    });

    //------------------------------------------------------------

    gulp.watch('../tempni/site/dev/about/**/*.html').on('change', () => {
      clean(cb);
      copyFiles(cb);
    });
    gulp.watch('../tempni/site/dev/about/**/*.js').on('change', () => {
      clean(cb);
      copyFiles(cb);
    });
    //------------------------------------------------------------
    gulp.watch('../tempni/site/dev/totorial/**/*.html').on('change', () => {
      clean(cb);
      copyFiles(cb);
    });
    gulp.watch('../tempni/site/dev/totorial/**/*.js').on('change', () => {
      clean(cb);
      copyFiles(cb);
    });
  }

  exports.default = gulp.task('default', gulp.series(clean, copyFiles, styleSite, styleAbout, styleTutorial));
  exports.watch = watch;