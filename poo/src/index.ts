import readline from "readline-sync";
import Account from "./entities/Account";
import SavingAccount from "./entities/SavingAccount";
import { randomUUID } from "crypto";
import CheckingAccount from "./entities/CheckingAccount";

function program() {
  console.log("Create your bank account:");

  let id = randomUUID();
  let name = readline.question("Name: ");
  let document = parseInt(readline.question("Document number: "));

  let newAccount = new Account(id, name, document);

  console.log("This is your account:");
  console.log(newAccount);

  let createSubAccount = readline.question(
    "Do you want to create a saving Account or a checking Account? Saving/Checking/No "
  );

  let savingAccount, checkingAccount;

  if (createSubAccount == "Saving") {
    let date = readline.question(
      "Enter the date you want to place the withdrawal: (YYYY/MM/dd) "
    );

    date.split("/");

    let newDate = new Date(date);

    savingAccount = new SavingAccount(id, name, document, newDate);

    console.log(savingAccount);
  } else if (createSubAccount == "Checking") {
    checkingAccount = new CheckingAccount(id, name, document);

    console.log(checkingAccount);
  }

  for (let index = 0; index != 10; ) {
    index = parseInt(
      readline.question(
        "What do you want to do on your account today? (1: Check Balance, 2 : Withdraw, 3: Deposit, 4: Check Saving Account Balance, 5: Deposit on Saving Account Balance, 6: Withdraw on Saving Account Balance, 7: Check Checking Account Balance, 8: Deposit on Checking Account Balance, 9: Withdraw on Checking Account Balance, 10: Loan, 11: Ask for more loan Limit, 15: Exit) "
      )
    );
    let value: number = 0;

    switch (index) {
      case 1:
        newAccount.CheckBalance();
        break;
      case 2:
        value = parseInt(
          readline.question("What amount do you want to withdraw? ")
        );
        newAccount.Withdraw(value);
        break;
      case 3:
        value = parseInt(
          readline.question("What amount do you want to deposit? ")
        );
        newAccount.Deposit(value);
        break;
      case 4:
        if (savingAccount == undefined) {
          console.log("You don't have a saving account");
        } else {
          (savingAccount as SavingAccount).CheckBalance();
        }

        break;
      case 5:
        if (savingAccount == undefined) {
          console.log("You don't have a saving account");
        } else {
          value = parseInt(
            readline.question(
              "What amount do you want to deposit on your saving account? "
            )
          );

          savingAccount?.Deposit(value);
        }

        break;
      case 6:
        if (savingAccount == undefined) {
          console.log("You don't have a saving account");
        } else {
          value = parseInt(
            readline.question(
              "What amount do you want to withdraw on your saving account? "
            )
          );
          savingAccount?.Withdraw(value);
        }
        break;
      case 7:
        if (checkingAccount == undefined) {
          console.log("You don't have a checking account");
        } else {
          checkingAccount?.CheckBalance();
        }

        break;
      case 8:
        if (checkingAccount == undefined) {
          console.log("You don't have a checking account");
        } else {
          value = parseInt(
            readline.question(
              "What amount do you want to deposit on your checking account? "
            )
          );

          checkingAccount?.Deposit(value);
        }

        break;
      case 9:
        if (checkingAccount == undefined) {
          console.log("You don't have a checking account");
        } else {
          value = parseInt(
            readline.question(
              "What amount do you want to withdraw on your checking account? "
            )
          );
          checkingAccount?.Withdraw(value);
        }
        break;
      case 10:
        if (checkingAccount == undefined) {
          console.log("You don't have a checking account");
        } else {
          checkingAccount.Loan();
        }

        break;
      case 11:
        if (checkingAccount == undefined) {
          console.log("You don't have a checking account");
        } else {
          value = parseInt(
            readline.question("How much loan limit do you want? ")
          );
          checkingAccount?.askForMoreLoan(value);
        }

        break;

      case 15:
        process.exit();
    }
  }
}

program();
