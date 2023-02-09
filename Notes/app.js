const yargs = require('yargs');
const addNote = require('./notes');

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
  handler: function (argv) {
    addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: () => {
    console.log('Reading a note');
  },
});

yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: () => {
    console.log('Listing put all notes');
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note Title',
    },
  },
  handler: (argv) => {
    console.log('Removing note', argv);
  },
});

yargs.parse();
