#! /usr/bin/env node

import inquirer from "inquirer";
import { faker } from "@faker-js/faker";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

let errorclr = chalk.red;
let logoclr = chalk.bold.greenBright;
let promptclr = chalk.cyan;
let highlight = chalk.yellowBright;
let confirmDetails = chalk.magenta;
//Generate user Data

interface userData {
  ID: number;
  PIN: number;
  Name: string;
  account: number;
  balance: number;
}
let users: userData[] = [];
for (let i = 1; i < 6; i++) {
  let user: userData = {
    ID: i,
    PIN: 1000 + i,
    Name: faker.person.fullName(),
    account: 2341978654613 + i,
    balance: 100000,
  };
  users.push(user);
}

//GET USER ID and verify the user
console.log(`${logoclr("HBL \nHabib Bank Limited")}`);
let animation = chalkAnimation.karaoke(
  `\n\t\tWelcome to Initiate a transaction ....`
);
setTimeout(() => {
  animation.stop();
  atmMachine();
}, 4000);

async function atmMachine() {
  const getid = await inquirer.prompt({
    type: "password",
    message: promptclr(`\nPlease Enter your ${highlight("4")} Digit PIN : `),
    name: "pin",
    mask: chalk.whiteBright("*"),
  });

  const user = users.find((val) => val.PIN == getid.pin); // here user stores the object whose property
  // 'PIN' matches the user input pin .
  if (user) {
    console.log(`Hello, ${highlight(user.Name)}`);
    atmFunctions(user);
  } else console.log(errorclr("InValid Input / Please Re-enter your PIN "));

  //ATM Functionalities

  async function atmFunctions(user: userData) {
    const userAction = await inquirer.prompt({
      type: "list",
      message: promptclr("\nPlease Select from the Options below :  "),
      name: "select",
      choices: ["Check Balance", "Withdraw Money", "Exit"],
    });

    if (userAction.select === "Check Balance") {
      console.log(
        `Dear Customer your Available Balance is : ${highlight(user.balance)}`
      );
    }
    if (userAction.select === "Withdraw Money") {
      let Withdraw = await inquirer.prompt({
        type: "number",
        message: `Please Enter the amount in ${highlight(
          "multiples of 500"
        )} : `,
        name: "amount",
        validate:
          ((input: number) =>
            (input > 0 && input <= user.balance) ||
            errorclr("Insufficient Balance ")) &&
          ((input) =>
            input % 500 === 0 ||
            `Invalid amount entered...\n${errorclr(
              "Please enter an amount that is a multiple of 500"
            )}`),
      });
      if (true) {
        let confirm = await inquirer.prompt({
          type: "confirm",
          message: `${chalk.italic(
            `\nPlease confirm the details before proceeding`
          )} \n${confirmDetails(
            `Account Hodler : ${user.Name}\nAccount No. : ${user.account}\nAmout to Withdraw : ${Withdraw.amount}`
          )}
                \nEnter ${highlight("Y")} to Proceed : `,
          name: "details",
        });
        if (confirm.details)
          console.log(
            `${chalk.green(
              `Transaction Successful !`
            )}\nRemainig Balance : ${highlight(user.balance - Withdraw.amount)}`
          );
        else console.log(`${errorclr("Transaction Failed !")}`);
      }
    }
    if (userAction.select === "Exit") {
      let confirm = await inquirer.prompt({
        type: "confirm",
        message: highlight.italic("Are you sure you want to exit ? "),
        name: "exit",
      });
      if (confirm.exit) {
        {
          console.log(
            chalk.cyanBright`\nThanks for using our service ____ This project is  `
          );
          console.log(
            chalk.magenta(`
     __ \\                  |                      |  __ )          ___|         _|                   
     |   |  _ \\\\ \\   / _ \\ |  _ \\  __ \\   _ \\  _\` |  __ \\  |   | \\___ \\  |   | |   |   |  _\` | __ \\  
     |   |  __/ \\ \\ /  __/ | (   | |   |  __/ (   |  |   | |   |       | |   | __| |   | (   | |   | 
    ____/ \\___|  \\_/ \\___|_|\\___/  .__/ \\___|\\__,_| ____/ \\__, | _____/ \\__,_|_|  \\__, |\\__,_|_|  _| 
                                  _|                      ____/                   ____/
                `)
          );
          let endingAnimation = chalkAnimation.rainbow("Have a nice Day !");
          setTimeout(() => {
            endingAnimation.stop();
          }, 3000);
        }
      }
      if (!confirm.exit) atmFunctions(user);
    }
  }
}
