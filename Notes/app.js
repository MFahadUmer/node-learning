const yargs = require('yargs');
const note = require('./notes');

yargs.command({
  command: 'add',
  describe: 'Adds a New Note',
  builder: {
    title: {
      describe: 'Note Title',
      type: 'string',
      demandOption: true,
    },
    body: {
      describe: 'Note Body',
      type: 'string',
      demandOption: true,
    },
  },
  handler: (argv) => note.addNote(argv.title, argv.body),
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      type: 'string',
      demandOption: true,
    },
  },
  handler: (argv) => note.readNote(argv.title),
});

yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: () => note.listNotes(),
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note Title',
      type: 'string',
      demandOption: true,
    },
  },
  handler: (argv) => note.removeNote(argv.title),
});

yargs.parse();
