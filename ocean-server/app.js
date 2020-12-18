'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//------------------------------------
// Client handling
//------------------------------------

app.use(express.static(path.join(__dirname, '../tempni')));

app.get('*', function(request, response) {
  response.sendFile(path.join(__dirname, '../tempni/production/index.html'));

});

app.post("/api/test", function(req, res) {
  res.send({
    hello: 'world'
  });
});

//------------------------------------
// upload image
//------------------------------------
app.post("/api/uploadProfileImg", function(req, res) {
  res.send({
    res: 1
  });
});

//------------------------------------
// 404 handling
//------------------------------------

app.use((req, res) => {
  res.status(404).send('Not Found');
});


//------------------------------------
// error handling
//------------------------------------

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('invalid token...');
  } else {
    console.error(err);
    res.status(500).send(err.response || 'Something broke!');
  }
});


//------------------------------------
// start server
//------------------------------------

if (module === require.main) {
  const server = app.listen(9393, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
}

module.exports = app;

//------------------------------------
// sass
//------------------------------------


var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function() {
  return gulp.src('../tempni/production/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../tempni/dev/site/css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);