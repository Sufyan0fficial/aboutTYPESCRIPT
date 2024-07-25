#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let animatedText = chalkAnimation.rainbow("---Let's Start Calculation---");
setTimeout(() => {
    animatedText.stop();
    console.log(chalk.magenta `
 _____________________ 
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|

`);
}, 2000);
async function calculate() {
    let promptclr = chalk.blue;
    let errorclr = chalk.red;
    let outputclr = chalk.black.bold.bgWhite;
    let confirmationclr = chalk.yellow;
    let operationclr = chalk.bold;
    let continueCalculate = true;
    while (continueCalculate) {
        let getValues = await inquirer.prompt([
            {
                type: "number",
                name: "number1",
                message: promptclr("Enter the first Number: "),
                validate: (input) => !isNaN(input) ||
                    errorclr("Error/Invalid Input \nPlease Enter a Number to Proceed"),
            },
            {
                type: "number",
                name: "number2",
                message: promptclr("Enter the second Number: "),
                validate: (input) => !isNaN(input) ||
                    errorclr("Error/Invalid Input \nPlease Enter a Number to Proceed"),
            },
            {
                type: "rawlist",
                name: "Operations",
                message: chalk.blue.italic("What Operation do you want to perform?"),
                choices: ["Addition", "Subtraction", "Multiplication", "Division"],
            },
        ]);
        const { Operations, number1, number2 } = getValues;
        if (Operations === "Addition") {
            console.log(outputclr("Result: "), number1 + number2);
        }
        else if (Operations === "Subtraction") {
            console.log(outputclr("Result: "), number1 - number2);
        }
        else if (Operations === "Multiplication") {
            console.log(outputclr("Result: "), number1 * number2);
        }
        else if (Operations === "Division") {
            if (number2 !== 0) {
                console.log(outputclr("Result: "), number1 / number2);
            }
            else {
                console.log(errorclr("Math Error: Division by zero is not allowed"));
            }
        }
        let confirm = await inquirer.prompt({
            type: "confirm",
            name: "confirmation",
            message: confirmationclr("\nDo you want to perform another calculation?"),
        });
        continueCalculate = confirm.confirmation;
        if (!continueCalculate) {
            console.log(chalk.cyanBright `\nThanks for Using ____ This Project is `);
            console.log(chalk.magenta(`
 __ \\                  |                      |  __ )          ___|         _|                   
 |   |  _ \\\\ \\   / _ \\ |  _ \\  __ \\   _ \\  _\` |  __ \\  |   | \\___ \\  |   | |   |   |  _\` | __ \\  
 |   |  __/ \\ \\ /  __/ | (   | |   |  __/ (   |  |   | |   |       | |   | __| |   | (   | |   | 
____/ \\___|  \\_/ \\___|_|\\___/  .__/ \\___|\\__,_| ____/ \\__, | _____/ \\__,_|_|  \\__, |\\__,_|_|  _| 
                              _|                      ____/                   ____/
            `));
            let endingAnimation = chalkAnimation.rainbow("Good BYE :)");
            setTimeout(() => {
                endingAnimation.stop();
            }, 3000);
        }
    }
}
calculate();
