const log = require('fancy-log');
const chalk = require('chalk');
const beeper = require('beeper');

module.exports = error => {
  log([
    chalk.black.bgRed.bold(error.name + ' in ' + error.plugin)
		+ ': ' +
		chalk.red(error.message)
  ].join('\n'));

  beeper();

  this.emit('end');
};
