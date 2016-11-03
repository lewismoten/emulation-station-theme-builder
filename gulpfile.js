let gulp = require('gulp'),
  browserSync = require('browser-sync')
  .create();

gulp.task('browser-sync', () => {

  'use strict';

  browserSync.init(
  {
    server:
    {
      baseDir: './'
    }
  });


});
