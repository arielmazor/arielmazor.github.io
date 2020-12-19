//------------------------------------
// sass
//------------------------------------


const browserSync = require('browser-sync').create();
import {
  src,
  dest,
  watch as __watch
} from 'gulp';
import sass, {
  compiler
} from 'gulp-sass';

compiler = require('node-sass');


function _export() {

  function style() {
    return src('../tempni/dev/site/**/*.scss')
      .pipe(sass())
      .pipe(dest('../tempni/production/site/css'))
      .pipe(browserSync.stream());
  }

  function html() {
    return src('../tempni/dev/site/*.html')
      .pipe(sass())
      .pipe(dest('../tempni/production/site'))
      .pipe(browserSync.stream());
  }

  function js() {
    return src('../tempni/dev/site/**/*.js')
      .pipe(sass())
      .pipe(dest('../tempni/production/site/js'))
      .pipe(browserSync.stream());
  }

  function watch() {
    __watch('../tempni/dev/site/**/*.scss', style);
    __watch('../tempni/dev/site/**/*.js', js);
    __watch('../tempni/dev/site/*.html', html);
  }

}
exports.all = _export;
export const _all = _export;