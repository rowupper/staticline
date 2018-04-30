const gulp = require('gulp');

gulp.task('build', gulp.series(
  'clean',
  'copy',
  'script',
  'style',
  'view'
));
