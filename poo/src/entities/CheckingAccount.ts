import { randomUUID } from "crypto";
import Account from "./Account";

interface loanHistory {
  date: Date;
  amount: number;
}

export default class CheckingAccount extends Account {
  private checkingAccountId: string = randomUUID();
  private checkingBalance: number = 0;
  private loanLimit: number = 500;
  private loanHistory: loanHistory[] = [];

  constructor(id: string, name: string, document: number) {
    super(id, name, document);
  }

  Deposit(value: number) {
    if (value < 1) {
      console.log("Invalid amount, deposit must be greater than 0");
    }
    this.checkingBalance += value;
    console.log(`The amount of $${value} was been successfully deposited`);
  }

  Withdraw(value: number) {
    if (this.checkingBalance < value) {
      console.log("Withdrawal amount must be greater than balance");
    } else {
      this.checkingBalance -= value;
      console.log(`The amount of $${value} was withdrawn successfully`);
    }
  }

  askForMoreLoan(loan: number) {
    let needToHaveOnAccount = loan / 2;
    if (this.checkingBalance < needToHaveOnAccount) {
      console.log(
        `You need to have at least $${needToHaveOnAccount} worth of account`
      );
    } else {
      this.loanLimit = loan;
      console.log(`You now have a loan limit of $${this.loanLimit}`);
    }
  }

  Loan() {
    this.checkingBalance += this.loanLimit;
    this.loanLimit -= this.loanLimit;
    this.loanHistory.push({ date: new Date(), amount: this.loanLimit });
    console.log(
      `The amount of $${this.loanLimit} was successfully deposited on your account`
    );
  }

  CheckBalance() {
    console.log(this.checkingBalance);
    return this.balance;
  }
}
