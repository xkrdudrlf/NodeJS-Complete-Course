const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (duplicateNote) {
    printErrorMsg(`Error: note with title '${title}' already exists.`);
    return;
  }

  debugger;

  notes.push({
    title: title,
    body: body,
  });

  saveNotes(notes);

  printSuccessMsg("New note is successfully added.");
};

const removeNote = (title) => {
  let notes = loadNotes();
  let isRemoved = false;

  notes = notes.filter((note) => {
    if (note.title !== title) return true;
    isRemoved = true;
    return false;
  });

  saveNotes(notes);

  if (isRemoved) printSuccessMsg("Note is successfully removed");
  else printErrorMsg(`Error: no note with title '${title}' exists`);
};

const listNotes = () => {
  let notes = loadNotes();
  console.log(chalk.yellow("Your notes:"));
  notes.forEach((note, i) => console.log(`  ${i + 1}: ${note.title}`));
};

const readNote = (title) => {
  let notes = loadNotes();
  let noteToRead = notes.find((note) => note.title === title);
  if (!noteToRead) {
    printErrorMsg(`Error: no note with title '${title}' exists`);
    return;
  }
  console.log(`${noteToRead.title}:`);
  console.log(`   ${noteToRead.body}`);
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

const printSuccessMsg = (msg) => console.log(chalk.green.inverse(msg));
const printErrorMsg = (msg) => console.log(chalk.bgRed(msg));

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
};
