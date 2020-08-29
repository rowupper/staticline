const { join } = require('path');
const paths = require('./paths');
const pkg = require('./package');
const options = require('./options');

module.exports = {
  copy: {
    shared: join(paths.shared.public, '**', '*'),
    public: join(paths.public, '**', '*'),
    dest: paths.dest
  },
  style: {
    all: join(paths.src, 'styles', '{,*/}*.scss'),
    src: join(paths.src, 'styles', 'app.scss'),
    dest: join(paths.dest, 'assets', 'styles')
  },
  script: {
    all: join(paths.src, 'scripts', '{,*/}*.js'),
    src: join(paths.src, 'scripts', 'app.js'),
    dest: join(paths.dest, 'assets', 'scripts')
  },
  view: {
    data: {
      package: pkg,
      options,
      require
    },
    all: join(paths.src, 'views', '**', '*.pug'),
    layouts: join(paths.src, 'views', 'layouts', '*.pug'),
    mixins: join(paths.src, 'views', 'mixins', '*.pug'),
    pages: join(paths.src, 'views', 'pages', '**', '*.pug'),
    partials: join(paths.src, 'views', 'partials', '{,*/}*.pug'),
    dest: paths.dest
  }
};
