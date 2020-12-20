  //------------------------------------
  // sass
  //------------------------------------


  const gulp = require('gulp');
  const sass = require('gulp-sass');
  const del = require('del');
  const {} = require('gulp');

  function clean(cb) {
    del(['../tempni/production'], {
      force: true
    });
    cb();
  }

  function style(cb) {
    gulp.src('../tempni/dev/site/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('../tempni/prod/site'))
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

  function watch() {
    gulp.watch('../tempni/dev');
  }

  exports.default = gulp.task('default', gulp.series(clean, copyFiles, style));
  //exports._default = gulp.task('_default', gulp.series(clean, copyFiles, style));

  //exports.watch = watch;