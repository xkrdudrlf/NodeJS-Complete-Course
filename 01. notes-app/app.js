// Section 3. Node.js Module System.
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// Import a node module with "require" keyword.
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
const fs = require("fs");
fs.writeFileSync("notes.txt", "My name is Andrew\n");

/*
  Challenge : Append a message to notes.txt
  1. Use appendFileSync to append to the file
  2. Run the script
  3. Check your work by opening the file and viewing the appended text
*/
fs.appendFileSync("notes.txt", "Hello, My name s Tom");
