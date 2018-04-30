const { join } = require('path');
const gulp = require('gulp');
const del = require('del');
const { dest } = require('../../config/paths');
const { clean } = require('../../config/options');
const cache = require('gulp-cached');

clean.forEach((path, index) => {
  clean[index] = join(dest, path);
});

gulp.task('clean', () => del(clean, { force: true }));

gulp.task('clean:view:cache', done => {
  delete cache.caches['viewing'];

  done();
});
