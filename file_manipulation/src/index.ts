import { readFile } from "fs";

readFile("src/text.txt", (err, data) => {
  if (err) throw err;
  let text = data.toString().trim();
  let sizeOfText = text.split(" ");
  console.log(text);
  console.log("Number of word on file: " + sizeOfText.length);
});
