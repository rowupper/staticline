const Command = require('commander').Command;

exports = module.exports = new Command();
exports.Command = Command;

Command.prototype.addImplicitHelpCommand = function() {
  this.command('help <command>', 'display help for <command>');
};
