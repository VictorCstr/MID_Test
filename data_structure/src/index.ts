import readline from "readline";

const structure = [
  "Ankle",
  "Arrival",
  "Architect",
  "Victor",
  "Car",
  "Door",
  "English",
  "Bone",
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("These are the words already added:");
console.log(structure);

rl.question("Enter a word to add on the structure: ", (word) => {
  push(word);
});

function push(word: string) {
  structure.unshift(word);
  console.log("This is the structure now");
  console.log(structure);
  continueProgram();
}

function pop() {
  structure.pop();
  console.log("This is the structure now");
  console.log(structure);
  continueProgram();
}

function continueProgram() {
  structure.length > 0
    ? rl.question("What do you want to do now? (push / pop) ", (word) => {
        if (word == "push") {
          rl.question("Enter a word to add on the structure: ", (newWord) => {
            push(newWord);
          });
        } else if (word == "pop") {
          pop();
        }
      })
    : rl.question(
        "There is no more data in the table, you can only add it now, insert new data:",
        (word) => {
          push(word);
        }
      );
}
