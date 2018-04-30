const gutil = require('gulp-util');

module.exports = error => {
  gutil.log([
    (error.name + ' in ' + error.plugin).bold.red,
    '',
    error.message,
    ''
  ].join('\n'));

  if (gutil.env.beep) {
    gutil.beep();
  }

  this.emit('end');
};
