/**
 * Basic gulp file for static site development.
 * 
 */
/* eslint-env node */

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var connect = require('gulp-connect');
var eyeglass = require("eyeglass");
var imagemin = require('gulp-imagemin');

var sassOptions = {
  outputStyle: 'expanded',
  eyeglass: {
    enableImportOnce: false
  }
};

//
// Path settings.
//

var basePath = './';

var paths = {
  sass: basePath + 'sass',
  css: basePath + 'css',
};

//
// Begin Gulp Tasks.
//

//
// SASS Task
//
gulp.task('styles', function () {
  'use strict';
  return gulp.src(paths.sass + '/**/*.scss')
    .pipe(sass(eyeglass(sassOptions)).on('error', sass.logError))
    .pipe(prefix(["last 2 versions"]))
    .pipe(gulp.dest(paths.css))
    .pipe(connect.reload());
});

//
// HTML task
//
gulp.task('html', function () {
  gulp.src(basePath + '/**/*.html')
    .pipe(connect.reload());
});

//
// Watch dev
//
gulp.task('watch', function () {
  gulp.watch(paths.sass + '/**/*.scss', ['styles']);
  gulp.watch(basePath + '/**/*.html', ['html']);
});

//
// Gulp Connect dev server
//
gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('images', function() {
  //del.sync('./img')
  return gulp.src('img/**/*.+(png|jpg|jpeg|gif|svg)')
  .pipe(imagemin())
  .pipe(gulp.dest('./img'))
});

//
// Task declarations.
//
gulp.task('dev', ['styles', 'connect', 'watch']);
gulp.task('prod', ['images'])