'use strict';

var gulp = require('gulp'),
    fileinclude = require('gulp-file-include');

gulp.task('include', function() {

  gulp.src(['index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./result'));

  gulp.src(['pages/page.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./result/pages'));

});
