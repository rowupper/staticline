const gulp = require('gulp');
const swPrecache = require('sw-precache');
const { join } = require('path');
const { dest } = require('../../config/paths');

gulp.task('service-worker', callback =>
  swPrecache.write(join(dest, 'sw.js'), {
    staticFileGlobs: [join(dest, '**', '*')],
    stripPrefix: dest
  }, callback)
);
