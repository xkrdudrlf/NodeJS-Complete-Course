//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// Section 3
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// // 1. Import a core node module with "require" keyword.
// const fs = require("fs");
// fs.writeFileSync("notes.txt", "My name is Andrew\n");

// /*
//   Challenge : Append a message to notes.txt
//   1. Use appendFileSync to append to the file
//   2. Run the script
//   3. Check your work by opening the file and viewing the appended text
// */
// fs.appendFileSync("notes.txt", "Hello, My name s Tom");

// // 2. Import your own file
// const add = require("./utils.js");
// console.log(add(2, 3));

// /*
//   Challenge : Define and use a function in a new file
// */
// const getNotes = require("./notes");
// console.log(getNotes());

// 3. Importing npm Modules
// const validator = require("validator");
// console.log(validator.isEmail("andrew@example.com"));
// console.log(validator.isEmail("andrewexample.com"));
// console.log(validator.isURL("https://mead.io"));
// console.log(validator.isURL("hts://mead.io"));
// /*
//   Challenge: use the chalk library in your project
// */
// const chalk = require("chalk");
// console.log(chalk.green("Success!"));
// console.log(chalk.bgGreen("Success!"));
// console.log(chalk.bgGreen.inverse("Success!"));
// console.log(chalk.green.bold("Success!"));

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// Section 4
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// console.log(process.argv);

const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note contents",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List existing notes",
  handler() {
    notes.listNotes();
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Read a note",
      demandOption: true,
      type: "String",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
// console.log(yargs.argv);
