const gulp = require('gulp');
const { serve } = require('../utils/browser-sync');

gulp.task('dev', gulp.series(
  'clean',
  'script',
  'style',
  'view',
  serve,
  'watch'
));
