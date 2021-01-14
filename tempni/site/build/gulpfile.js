//------------------------------------
// sass
//------------------------------------

const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const { } = require('gulp');
function appTask() {
  function clean(cb) {
    del(['../../prod'], {
      force: true
    });
    cb();
  }
  function style(cb) {
    gulp.src('../client/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('../tempni/prod/app'))
      .on('error', cb)
      .on('end', () => {
        cb();
      });
  }

  function copyFiles(cb) {
    setTimeout(() => {
      gulp.src(['../client/**/*.*', '!../client/**/*.scss'])
        .pipe(gulp.dest('../../prod/app'))
        .on('end', () => {
          cb();
        })
    }, 500);
  }
}
function temTask() {
  function clean(cb) {
    del(['../../prod'], {
      force: true
    });
    cb();
  }
  function temStyle(cb) {
    gulp.src('../tamplates/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('../../prod/tamplates'))
      .on('error', cb)
      .on('end', () => {
        cb();
      });
  }

  function copyFiles(cb) {
    setTimeout(() => {
      gulp.src(['../templates/**/*.*', '!../client/**/*.scss'])
        .pipe(gulp.dest('../../prod/templates'))
        .on('end', () => {
          cb();
        })
    }, 500);
  }
}
function allTask() {

  function clean(cb) {
    del(['../../prod'], {
      force: true
    });
    cb();
  }
  function appStyle(cb) {
    gulp.src('../client/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('../tempni/prod/app'))
      .on('error', cb)
      .on('end', () => {
        // console.log("3333333333")
        cb();
      });
  }

  function appCopyFiles(cb) {
    setTimeout(() => {
      gulp.src(['../client/**/*.*', '!../client/**/*.scss'])
        .pipe(gulp.dest('../../prod/app'))
        .on('end', () => {
          cb();
        })
    }, 500);
  }
  function temClean(cb) {
    del(['../../prod'], {
      force: true
    });
    cb();
  }
  function temStyle(cb) {
    gulp.src('../tamplates/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('../../prod/tamplates'))
      .on('error', cb)
      .on('end', () => {
        cb();
      });
  }

  function temCopyFiles(cb) {
    setTimeout(() => {
      gulp.src(['../templates/**/*.*', '!../client/**/*.scss'])
        .pipe(gulp.dest('../../prod/templates'))
        .on('end', () => {
          cb();
        })
    }, 500);
  }
}

function temWatch(cb) {
  gulp.watch('../client/**/**.scss', appStyle);
  gulp.watch('../client/**/**.html', gulp.series(clean, copyFiles, style));
  gulp.watch('../client/**/**.js', gulp.series(clean, copyFiles, style));
  gulp.watch('../client/assets/**.**', gulp.series(clean, copyFiles, style));
}

exports.default = gulp.task('default', gulp.series(allTask()));

exports.watch = watch;