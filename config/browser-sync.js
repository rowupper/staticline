const { cluster } = require('./options');
const { name } = require('./package');
const paths = require('./paths');

let path = cluster ? name : '';

const ROUTES = {};
ROUTES['/' + path] = paths.public;

module.exports = {
  options: {
    startPath: path,
    server: {
      baseDir: [paths.shared.public, paths.tmp],
      routes: ROUTES
    },
    notify: false
  }
};
