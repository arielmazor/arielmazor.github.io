  //------------------------------------
  // sass
  //------------------------------------


  const gulp = require('gulp');
  const sass = require('gulp-sass');
  const del = require('del');

  gulp.task('clean', function clean(cb) {
    return del('./tempni/prodution', {
      force: true
    })
  });

  gulp.task('style', function style() {
    return gulp.src('../tempni/dev/site/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('../tempni/production/site/css'))
  })
  gulp.task('copyFiles', function copyFiles(cb) {
    gulp
      .src(['../tempni/dev/**/*.*'])
      .pipe(gulp.dest('../tempni/prodution'))
      .on('error', cb)
      .on('end', cb)
  });

  function watch() {
    gulp.watch('../tempni/dev');
  }

  exports._default = gulp.task('_default', gulp.series('clean', 'style', 'copyFiles'));
  exports.watch = watch;