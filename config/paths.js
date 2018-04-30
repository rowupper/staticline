const { join } = require('path');
const { cluster, paths } = require('./options');
const { isProduction } = require('./env');
const { name } = require('./package');

const PATH_ROOT = process.cwd();
const PATH_BUILD = join(PATH_ROOT, paths.build);
const PATH_PUBLIC = join(PATH_ROOT, paths.public);
const PATH_TMP = join(PATH_ROOT, paths.tmp);
const PATH_DEST = isProduction ? PATH_BUILD : PATH_TMP;

const PATH_SHARED_ROOT = join(PATH_ROOT, paths.shared.root);

module.exports = {
  root: PATH_ROOT,
  build: PATH_BUILD,
  public: PATH_PUBLIC,
  src: join(PATH_ROOT, paths.src),
  tmp: join(PATH_ROOT, paths.tmp),
  dest: join(PATH_DEST, cluster ? name : ''),
  shared: {
    public: join(PATH_SHARED_ROOT, paths.shared.public)
  }
};
