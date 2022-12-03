const {
  addNotesHanlder,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require('/handler');

// http://notesapp-v1.dicodingacademy.com
const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNotesHanlder,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/noted/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/noted/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
