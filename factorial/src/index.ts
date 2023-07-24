import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number ", (number) => {
  let numberToCalculate = parseFloat(number);
  return factorial(numberToCalculate);
});

function factorial(number: number) {
  if (number < 0) {
    console.log("Number must be greater than zero");
  } else if (number == 0) {
    console.log("Factor of 0 is 1");
  } else {
    let originalNum = number;
    let factor = number;

    while (number > 1) {
      number--;
      factor *= number;
    }

    console.log(`Factor of ${originalNum} is ${factor}`);
  }
}
