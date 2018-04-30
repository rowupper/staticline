const { create } = require('browser-sync');
const config = require('../../config/browser-sync');

const server = create();

module.exports = {
  serve(done) {
    server.init(config.options);

    done();
  },

  reload(done) {
    server.reload();

    done();
  }
};
