const fs = require("fs");

// // create the json:
// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryna Holiday a",
// };

// // stringify:
// let bookJSONString = JSON.stringify(book);
// // write  to file:
// fs.writeFileSync("1-json.json", bookJSONString);

// // load:
// const dataBuffer = fs.readFileSync("1-json.json");
// console.log(dataBuffer.toString());

// const data = JSON.parse(dataBuffer);
// console.log(data.title);

const andrewJsonBuffer = fs.readFileSync("1-json.json").toString();
const andrewData = JSON.parse(andrewJsonBuffer);
console.log(andrewData);

andrewData.name = "Omer";
andrewData.age = 31;

// transition from a data object to a string:
const newData = JSON.stringify(andrewData);
console.log(newData);
// write to file:
fs.writeFileSync("1-json.json", newData);
