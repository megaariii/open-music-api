/* eslint-disable object-curly-newline */
const { nanoid } = require('nanoid');
const albums = require('./albums');
const songs = require('./songs');

// Add a Album
const addAlbumHandler = (request, h) => {
  const { name, year } = request.payload;

  const id = `album-${nanoid(16)}`;

  const newAlbum = {
    id,
    name,
    year,
  };

  albums.push(newAlbum);

  const isSuccess = albums.filter((album) => album.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      data: {
        albumId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'error',
    message: 'Album gagal ditambahkan',
  });
  response.code(500);
  return response;
};

// Getting Specificied Album By Id
const getAlbumByIdHandler = (request, h) => {
  const { id } = request.params;

  const album = albums.filter((el) => el.id === id)[0];

  if (album !== undefined) {
    return {
      status: 'success',
      data: {
        album,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Album tidak ditemukan',
  });
  response.code(404);
  return response;
};

// Edit ALbum By Id
const editAlbumByIdHandler = (request, h) => {
  const { id } = request.params;

  const { name, year } = request.payload;

  const index = albums.findIndex((album) => album.id === id);

  if (index !== -1) {
    albums[index] = {
      ...albums[index],
      name,
      year,
    };

    const response = h.response({
      status: 'success',
      message: 'Album berhasil diperbarui',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui album. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

// Delete Album By Id
const deleleAlbumByIdHandler = (request, h) => {
  const { id } = request.params;

  const index = albums.findIndex((album) => album.id === id);

  if (index !== -1) {
    albums.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Album berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Album gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

/* ------------------- SONG Handler -------------------- */
// Add a song
const addSongHandler = (request, h) => {
  const { title, year, genre, performer, duration, albumId } = request.payload;

  const id = `song-${nanoid(16)}`;

  const newSong = {
    id,
    title,
    year,
    genre,
    performer,
    duration,
    albumId,
  };

  songs.push(newSong);

  const isSuccess = songs.filter((song) => song.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      data: {
        songId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'error',
    message: 'Lagu gagal ditambahkan',
  });
  response.code(500);
  return response;
};

// Get All Songs
const getAllSongsHandler = () => ({
  status: 'success',
  data: {
    songs: songs.map((song) => ({
      id: song.id,
      title: song.title,
      performer: song.performer,
    })),
  },
});

// Get Spesified Song By Id
const getSongByIdHandler = (request, h) => {
  const { id } = request.params;

  const song = songs.filter((el) => el.id === id)[0];

  if (song !== undefined) {
    return {
      status: 'success',
      data: {
        song,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Lagu tidak ditemukan',
  });
  response.code(404);
  return response;
};

// Edit Some Song By ID
const editSongByIdHandler = (request, h) => {
  const { id } = request.params;

  const { title, year, genre, performer, duration, albumId } = request.payload;

  const index = songs.findIndex((song) => song.id === id);

  if (index !== -1) {
    songs[index] = {
      ...songs[index],
      title,
      year,
      genre,
      performer,
      duration,
      albumId,
    };

    const response = h.response({
      status: 'success',
      message: 'Lagu berhasil diperbarui',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui lagu. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

// Delete Some Song By ID
const deleleSongByIdHandler = (request, h) => {
  const { id } = request.params;

  const index = songs.findIndex((song) => song.id === id);

  if (index !== -1) {
    songs.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Lagu berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Lagu gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {
  addAlbumHandler,
  getAlbumByIdHandler,
  editAlbumByIdHandler,
  deleleAlbumByIdHandler,
  addSongHandler,
  getAllSongsHandler,
  getSongByIdHandler,
  editSongByIdHandler,
  deleleSongByIdHandler,
};
