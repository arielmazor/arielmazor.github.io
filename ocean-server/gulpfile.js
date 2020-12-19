//------------------------------------
// sass
//------------------------------------


const browserSync = require('browser-sync').create();
const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');


function style() {
  return gulp.src('../tempni/dev/site/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('../tempni/production/site/css'))
    .pipe(browserSync.stream());
}

function watch() {
  gulp.watch('../tempni/dev/site/**/*.scss', style);
}
exports.style = style;
exports.watch = watch;