import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a word: ", (word) => {
  return palindrome(word);
});

function palindrome(word: string) {
  let originalWord = word.replace(" ", "").toLowerCase();

  let palidromeWord = word
    .split("")
    .reverse()
    .join("")
    .toLowerCase()
    .replace(" ", "");

  palidromeWord == originalWord
    ? console.log("Word is palindrome")
    : console.log("Word is not palindrome");
}
