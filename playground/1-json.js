const fs = require("fs");
const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
};

// // JSON -> String
// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// // String -> JSON
// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData);
// console.log(parsedData.author);

// Wrtie JSON Object to the file
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// // Read JSON Object from the file
// const dataBuffer = fs.readFileSync("1-json.json");
// console.log(dataBuffer); // Buffer since it's in binary form
// const dataJSON = dataBuffer.toString();
// console.log(dataJSON); // Still in string form
// const data = JSON.parse(dataJSON);
// console.log(data); // Finally in Object form

// Challenge 1:
const dataBuffer = fs.readFileSync("1-json.json");

const dataJSON = dataBuffer.toString();

const data = JSON.parse(dataJSON);
data.name = "Tom";
data.planet = "Jupiter";
data.age = 30;

fs.writeFileSync("1-json.json", JSON.stringify(data));
