#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

let randomNo = () => Math.floor(Math.random() * 11);

let instruction = chalk.cyan;
let roundclr = chalk.yellow;
let scoreclr = chalk.italic.cyan;
let wrongguess = chalk.red;
let rightguess = chalk.green;

let heading = chalkAnimation.rainbow("֍֍֍֍  Welcome to the World of Number_Guessing Game  ֍֍֍֍");

setTimeout(() => {
    heading.stop(); 
    console.log(instruction(`You have ${roundclr("5")} rounds to guess the Number between ${roundclr("0 and 10")}`));
    playGame(); 
}, 3000); 

async function playGame() {
    let continuePlay: boolean = true;
    while (continuePlay) {
        let round: number = 5;
        let score: number = 0;
        let generatedNo: number = randomNo();
        while (round > 0) {
            let guesstheNo = await inquirer.prompt({
                type: "input",
                name: "guessedNo",
                message: "\nGuess the Number: ",
                validate: (input) => {
                    const parsedInput = parseInt(input);
                    if (isNaN(parsedInput)) {
                        return "Error / Invalid Input / Please Enter a valid Number to Proceed";
                    }
                    return true;
                }
            });

            let guessedNo = parseInt(guesstheNo.guessedNo);

            if (generatedNo !== guessedNo) {
                console.log(wrongguess("Oooops: Try Again :("));
                round--;
                console.log(roundclr(`Rounds left: `,round));
                console.log(scoreclr(`Score: `, score));
            } else {
                console.log(rightguess("WoooooooW! You got the Number :)"));
                round--;
                console.log(roundclr(`Rounds left: `,round));
                score++;
                console.log(scoreclr(`Score: `, score));
                generatedNo = randomNo();
            }
            if (round === 0) console.log(roundclr(`\nGame Over ! Your Score is ${rightguess(score)}`));
        }

        let playAgain = await inquirer.prompt({
            type: "confirm",
            name: "confirmation",
            message: "Do you want to Play Again or Exit: ",
        });
        continuePlay = playAgain.confirmation;
        if (!continuePlay) {
            console.log(chalk.cyanBright`\nThanks for Playing ____ This Game is `);
            console.log(chalk.magenta(`
 __ \\                  |                      |  __ )          ___|         _|                   
 |   |  _ \\\\ \\   / _ \\ |  _ \\  __ \\   _ \\  _\` |  __ \\  |   | \\___ \\  |   | |   |   |  _\` | __ \\  
 |   |  __/ \\ \\ /  __/ | (   | |   |  __/ (   |  |   | |   |       | |   | __| |   | (   | |   | 
____/ \\___|  \\_/ \\___|_|\\___/  .__/ \\___|\\__,_| ____/ \\__, | _____/ \\__,_|_|  \\__, |\\__,_|_|  _| 
                              _|                      ____/                   ____/
            `));
            let endingAnimation = chalkAnimation.rainbow("Good BYE :)");
            setTimeout(() => { endingAnimation.stop(); }, 3000);
        }
        
            
            
    }
}







