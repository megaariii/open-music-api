const AlbumsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  register: async (server, { service }) => {
    const albumsHandler = new AlbumsHandler(service);
    server.route(routes(albumsHandler));
  },
};
