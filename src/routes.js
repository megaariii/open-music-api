const {
  addAlbumHandler,
  getAlbumByIdHandler,
  editAlbumByIdHandler,
  deleleAlbumByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/albums',
    handler: addAlbumHandler,
  },
  {
    method: 'GET',
    path: '/albums/{id}',
    handler: getAlbumByIdHandler,
  },
  {
    method: 'PUT',
    path: '/albums/{id}',
    handler: editAlbumByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/albums/{id}',
    handler: deleleAlbumByIdHandler,
  },
];

module.exports = routes;
