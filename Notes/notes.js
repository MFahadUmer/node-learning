const fs = require('fs');

const loadNotes = () => {
  const dataBuffer = fs.readFileSync('./notes.json');
  const data = dataBuffer.toString();
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const saveNotes = (notes) =>
  fs.writeFileSync('notes.json', JSON.stringify(notes));

const addNote = (title, body) => {
  let notes = loadNotes();
  let duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length < 1) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log('Note Added Successfully');
  } else {
    console.log('Note title already taken');
  }
};

const listNotes = () => {
  let notes = loadNotes();
  notes.forEach((note) => console.log(note.title));
};

const removeNote = (title) => {
  let notes = loadNotes();
  let keepNotes = notes.filter((note) => note.title !== title);

  if (notes.length > keepNotes.length) {
    saveNotes(keepNotes);
    console.log('Note deleted successfully');
  } else {
    console.log('Note not found');
  }
};

const readNote = (title) => {
  let notes = loadNotes();
  let note = notes.filter((note) => note.title === title);
  if (note.length > 0) {
    console.log('Title: ' + note[0].title);
    console.log('Body: ' + note[0].body);
  } else {
    console.log('Note not found');
  }
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
};
