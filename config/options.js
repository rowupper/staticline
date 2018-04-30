const rc = require('rc');

module.exports = rc('staticline', {
  cluster: false,
  paths: {
    build: './build',
    public: './public',
    src: './src',
    tmp: './tmp',
    shared: {
      root: './shared',
      public: './public'
    }
  },
  clean: ['./*']
});
