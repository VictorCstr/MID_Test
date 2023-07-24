import readline from "readline-sync";

let number = parseInt(readline.question("Term: "));

export default function fibonacci(number: number) {
  const fibSequence = [1];

  let current = 1;
  let previous = 0;

  if (number === 1) {
    return fibSequence;
  }

  let counter = number - 1;

  while (counter) {
    current += previous;
    previous = current - previous;

    fibSequence.push(current);

    counter -= 1;
  }

  console.log(fibSequence);
}

fibonacci(number);
