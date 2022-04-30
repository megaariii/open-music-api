const SongsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  register: async (server, { service }) => {
    const songsHandler = new SongsHandler(service);
    server.route(routes(songsHandler));
  },
};
