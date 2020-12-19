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

function html() {
  return gulp.src('../tempni/dev/site/**/*.html')
    .pipe(sass())
    .pipe(gulp.dest('../tempni/production/site'))
    .pipe(browserSync.stream());
}

function js() {
  return gulp.src('../tempni/dev/site/**/*.js')
    .pipe(sass())
    .pipe(gulp.dest('../tempni/production/site/js'))
    .pipe(browserSync.stream());
}

function watch() {
  gulp.watch('../tempni/dev/site/**/*.scss', style);
}
exports.all = style, html, js;
exports.watch = watch;