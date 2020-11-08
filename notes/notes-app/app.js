const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

yargs.version("1.1.1");

// create read:
yargs.command({
  command: "read",
  describe: "Reading notes",
  builder: {
    title: {
      describe: "title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

// create a list command:
yargs.command({
  command: "list",
  describe: "listing the notes",
  handler() {
    notes.listNotes();
  },
});

// create add:
yargs.command({
  command: "add",
  describe: "add a note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "text body",
      // demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// remove:
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    console.log("remove called");
    notes.removeNote(argv.title);
  },
});

// // read:
// yargs.command({
//   command: "read",
//   describe: "read a note",
//   handler() {
//     console.log("reading a note");
//   },
// });

// // list:
// yargs.command({
//   command: "list",
//   describe: "list a note",
//   handler() {
//     console.log("listing a note");
//   },
// });

yargs.parse();
