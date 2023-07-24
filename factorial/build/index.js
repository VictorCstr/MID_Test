"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Enter a number ", (number) => {
    let numberToCalculate = parseFloat(number);
    return factorial(numberToCalculate);
});
function factorial(number) {
    if (number < 0) {
        console.log("Number must be greater than zero");
    }
    else if (number == 0) {
        console.log("Factor of 0 is 1");
    }
    else {
        let originalNum = number;
        let factor = number;
        while (number > 1) {
            number--;
            factor *= number;
        }
        console.log(`Factor of ${originalNum} is ${factor}`);
    }
}
