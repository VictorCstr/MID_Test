import { randomUUID } from "crypto";

export default class Account {
  protected id: string;
  protected name: string;
  protected document: number;
  protected balance: number = 0;

  constructor(id: string, name: string, document: number) {
    this.id = id;
    this.name = name;
    this.document = document;
  }

  Deposit(value: number) {
    if (value < 1) {
      console.log("Invalid amount, deposit must be greater than 0");
    }
    this.balance += value;
    console.log(`The amount of $${value} was been successfully deposited`);
  }

  Withdraw(value: number) {
    if (this.balance < 1) {
      console.log("Invalid withdrawal, there is no balance in the account");
    } else if (this.balance < value) {
      console.log("Withdrawal amount must be greater than balance");
    } else {
      this.balance -= value;
      console.log(`The amount of $${value} was withdrawn successfully`);
    }
  }

  CheckBalance() {
    console.log(this.balance);
    return this.balance;
  }
}
