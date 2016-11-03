let gulp = require('gulp'),
  browserSync = require('browser-sync')
  .create(),
  git = require('gulp-git'),
  argv = require('yargs')
  .argv;

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

gulp.task('theme', () => {

  'use strict';

  git.clone(argv.git,
  {
    cwd: './themes/'
  });

});
