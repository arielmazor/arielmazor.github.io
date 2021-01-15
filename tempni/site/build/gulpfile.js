//------------------------------------
// sass
//------------------------------------

const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const { } = require('gulp');

function clean(cb) {
  del(['../prod'], {
    force: true
  });
  cb();
}

function style(cb) {
  gulp.src('../client/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('../prod/site'))
    .on('error', cb)
    .on('end', () => {
      cb();
    });
}

function copyFiles(cb) {
  setTimeout(() => {
    gulp.src(['../client/**/*.*', '!../client/**/*.scss'])
      .pipe(gulp.dest('../prod'))
      .on('end', () => {
        cb();
      })
  }, 500);
}

function watch(cb) {
  gulp.watch('../client/**/**.scss', Style);
  gulp.watch('../client/**/**.html', gulp.series(clean, copyFiles, style));
  gulp.watch('../client/**/**.js', gulp.series(clean, copyFiles, style));
  gulp.watch('../client/assets/**.**', gulp.series(clean, copyFiles, style));
}

exports.default = gulp.task('default', gulp.series(clean, copyFiles, style));

exports.watch = watch;