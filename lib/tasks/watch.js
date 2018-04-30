const gulp = require('gulp');
const config = require('../../config/gulp');
const { reload } = require('../utils/browser-sync');

gulp.task('watch', () => {
  gulp.watch(config.script.all, gulp.series('script', reload));
  gulp.watch(config.style.all, gulp.series('style', reload));

  gulp.watch(
    [config.view.layouts, config.view.mixins, config.view.partials],
    gulp.series('clean:view:cache', 'view', reload)
  );
  gulp.watch(config.view.pages, gulp.series('view', reload));
});
