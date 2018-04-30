const gulp = require('gulp');
const config = require('../../config/gulp');
const { cluster } = require('../../config/options');
const vfs = require('vinyl-fs');

gulp.task('copy:shared', done => {
  if ( ! cluster) {
    vfs
      .src(config.copy.shared)
      .pipe(vfs.dest(config.copy.dest));
  }

  done();
});

gulp.task('copy:public', () =>
  vfs
    .src(config.copy.public)
    .pipe(vfs.dest(config.copy.dest))
);

gulp.task('copy', gulp.series('copy:shared', 'copy:public'));
