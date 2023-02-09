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

const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
};

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

module.exports = addNote;
