import { randomUUID } from "crypto";
import Account from "./Account";

export default class SavingAccount extends Account {
  private savingAccountId: string = randomUUID();
  private savingBalance: number = 0;
  private withdrawDate: Date;

  constructor(id: string, name: string, document: number, withdrawDate: Date) {
    super(id, name, document);
    this.withdrawDate = withdrawDate;
  }

  Deposit(value: number) {
    if (value < 1) {
      console.log("Invalid amount, deposit must be greater than 0");
    }
    this.savingBalance += value;
    console.log(`The amount of $${value} was been successfully deposited`);
  }

  Withdraw(value: number) {
    const dateNow = new Date();
    if (dateNow < this.withdrawDate) {
      console.log(
        "The date you set the deadline for withdrawing the money has not yet arrived"
      );
    } else if (this.savingBalance < value) {
      console.log("Withdrawal amount must be greater than balance");
    } else {
      this.savingBalance -= value;
      console.log(`The amount of $${value} was withdrawn successfully`);
    }
  }

  CheckBalance() {
    console.log(this.savingBalance);
    return this.balance;
  }
}
