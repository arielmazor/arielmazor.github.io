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
    console.log("1111111")
    cb();
  }

  function style(cb) {


    gulp.src('../tempni/dev/site/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('../tempni/prod/site'))
      .on('error', cb)
      .on('end', () => {
        // console.log("3333333333")
        cb();
      });
  }

  function copyFiles(cb) {
    setTimeout(() => {
      gulp.src(['../tempni/dev/**/*.*', '!../tempni/dev/**/*.scss'])
        .pipe(gulp.dest('../tempni/prod'))
        .on('end', () => {
          cb();
        })
    }, 500);
  };

  function watch(cb) {
    gulp.watch('../tempni/dev/site/**/*.scss', style);
    gulp.watch('../tempni/dev/**/*.html', gulp.series(clean, copyFiles, style));
    gulp.watch('../tempni/dev/**/*.js', gulp.series(clean, copyFiles, style));
  }

  exports.default = gulp.task('default', gulp.series(clean, copyFiles, style));

  exports.watch = watch;