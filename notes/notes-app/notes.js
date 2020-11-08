const fs = require("fs");
// const { require } = require("yargs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes...";
};

const removeNote = (title) => {
  // load notes:
  const notes = loadNotes();
  // filter matching notes if any:
  const notesToKeep = notes.filter((note) => note.title !== title);
  // style output conditionaly:
  if (notes.length === notesToKeep.length) {
    console.log(chalk.green.inverse("nothing to delete!"));
  } else {
    console.log(chalk.red.inverse("deleted"));
  }

  // Save newly created array:
  console.log("leftovers:", notesToKeep);
  saveNotes(notesToKeep);
};

const addNote = (title, body) => {
  const notes = loadNotes();
  // this one does through the entire array:
  // const dupTitles = notes.filter((note) => note.title === title);
  // this one stops when there's a match:
  const dupTitle = notes.find((note) => note.title === title);

  if (!dupTitle) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.inverse.red("no dup so added a new note"));
  } else {
    console.log(chalk.inverse.red("dupe"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

// list notes:
const listNotes = () => {
  const notes = loadNotes();
  notes.forEach((note) => console.log(note.title));
  return notes;
};

// read notes:
const readNote = (title) => {
  const notes = loadNotes();
  const notesByTitle = notes.find((note) => note.title == title);
  try {
    console.log(notesByTitle.title);
    console.log(notesByTitle.body);
  } catch (error) {
    console.log(chalk.inverse.red("error no such note"));
  }
  return notes;
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
