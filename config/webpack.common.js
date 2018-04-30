const config = require('./gulp');

module.exports = {
  entry: {
    app: config.script.src
  },
  output: {
    filename: '[name].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  }
};
