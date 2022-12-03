const { nanoid } = require('nanoid');
const notes = require('./notes');

const addNotesHanlder = (req, h) => {
  // receive request
  const { title, tags, body } = req.payload;
  
  // create id and date
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;
  
  // add new note to notes.js
  const newNote = {
    id, title, tags, body, createdAt, updatedAt,
  };
  notes.push(newNote);
  
  //
  const isSuccess = notes.filter((note) => note.id === id).length > 0;
  if(isSuccess) {
    const response = h.response({
      status: 'Success',
      message: 'Successfully add new note',
    });
    response.code(200);
    return response;
  };
  
  const response = h.response({
    status: 'fail',
    message: 'Failed to add new note',
  });
  response.code(500);
  return response;
};

const getAllNotesHandler = () => ({
  status: 'Success',
  data: {
    notes,
  },
});

const getNoteByIdHandler = (req, h) => {
  // receive the ID note
  const { id } = req.params;
  
  //
  const note = notes.filter((note) => note.id === id)[0];
  
  //
  if(note !== undefined) {
    return {
      status: 'Success',
      data: {
        note,
      },
    };
  }
  
  const response = h.response({
    status: 'Fail',
    message: 'Note is not found',
  });
  
  response.code(404);
  return response;
};

const editNoteByIdHandler = (req, h) => {
  const { id } = req.params;
  const { title, tags, body } = req.payload;
  const updatedAt = new Date().toISOString();
  
  //
  const index = notes.findIndex((note) => note.id === id);
  
  if(index !== -1) {
    notes[index] = {
      ...notes[index], // spread syntax (...)
      id,
      title,
      tags,
      body,
      update,
    };
    
    const response = h.response({
      status: 'Success',
      message: 'Successfully edit note',
    });
    
    response.code(200);
    return response;
  }
  
  const response = h.response({
    status: 'Fail',
    message: 'Failed to edit note'
  });
  
  response.code(404);
  return response;
  
};

const deleteNoteByIdHandler = (req, h) => {
  const { id } = req.params;
  
  const index = notes.findIndex((note) => note.id === id);
  
  if(index !== -1) {
    // 
    notes.splice(index,1);
    const response = h.response({
      status: 'Success',
      message: 'Successfully delete note',
    });
    response.code(200);
    return response;
  }
  
  const response = h.response({
    status: 'Fail',
    message: 'Failed to delete note',
  });
  response.code(404);
  return response;
};

module.exports = {
  addNotesHanlder,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
};
