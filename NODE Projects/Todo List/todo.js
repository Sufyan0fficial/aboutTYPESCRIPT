#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
const orange = chalk.italic.hex('#FF8C00');
let heading = chalkAnimation.rainbow('\tWelcome to your personal to-do list manager\n');
setTimeout(() => {
    heading.stop();
    console.log(orange(`" Keep track of your tasks effortlessly and boost your productivity " \n`));
    todo();
}, 2000);
let tasksArray = [];
async function todo() {
    let exit = false;
    while (!exit) {
        let selectFunction = await inquirer.prompt({
            type: 'list',
            message: 'Select the options below ...',
            name: 'select',
            choices: ['Add Todo', 'View Todo List', 'Update Todo List ', 'Mark todo as Done', 'Delete Todo', 'Exit']
        });
        if (selectFunction.select === 'Add Todo') {
            let addTodo = await inquirer.prompt({
                type: 'input',
                message: 'Please Enter your Todo : ',
                name: 'todo'
            });
            tasksArray.push(addTodo.todo);
            console.log(`${chalk.green('A new todo has been successfully added')} \nTo checkout your todo list , Please select ${chalk.yellow('View Todo List')} option.`);
        }
        ;
        if (selectFunction.select === 'View Todo List') {
            if (tasksArray.length === 0) {
                console.log(`${chalk.red('Empty todo list')}\nNo task available for today.`);
                console.log(`\n${chalk.red('=> ')}Please select ${chalk.yellow('Add Todo')} to include task in your todo list\n`);
            }
            else {
                console.log(`Your todo list includes the following tasks : `);
                for (let todo of tasksArray) {
                    console.log(chalk.yellow(todo));
                }
            }
        }
        ;
        if (selectFunction.select === 'Update Todo List ') {
            let update = await inquirer.prompt({
                type: 'list',
                message: 'Please Select the Todo you want to update :',
                name: 'todo',
                choices: tasksArray.map(input => input)
            });
            let updated = await inquirer.prompt({
                type: 'input',
                message: 'What todo you want to add instead :  ',
                name: 'todo'
            });
            let filtered = tasksArray.filter(input => input !== update.todo);
            filtered.push(updated.todo);
            tasksArray = [...filtered];
            console.log(`${chalk.green('Your todo list has been successfully updated ')} \nTo checkout your todo list , Please select ${chalk.yellow('View Todo List')} option.`);
        }
        ;
        if (selectFunction.select === 'Mark todo as Done') {
            let mark = await inquirer.prompt({
                type: 'list',
                message: 'Select the todo to mark as Done : ',
                name: 'done',
                choices: tasksArray
            });
            let filter = tasksArray.filter(input => input !== mark.done);
            filter.push(chalk.strikethrough(mark.done));
            tasksArray = filter;
            console.log(`${chalk.green('Your todo has been successfully marked as done \n')}To checkout your todo list , Please select ${chalk.yellow('View Todo List')} option`);
        }
        if (selectFunction.select === 'Delete Todo') {
            let Delete = await inquirer.prompt({
                type: 'list',
                message: 'Please Select the Todo you want to delete :',
                name: 'todo',
                choices: tasksArray
            });
            let confirm = await inquirer.prompt({
                type: 'confirm',
                message: `${chalk.red('Are you sure to delete this todo ?')}`,
                name: 'delete'
            });
            let deleted = tasksArray.filter(input => input !== Delete.todo);
            tasksArray = [...deleted];
            console.log(`${chalk.green('Your todo has been successfully deleted ')}\nTo checkout your todo list , Please select ${chalk.yellow('View Todo List')} Option`);
        }
        ;
        if (selectFunction.select === 'Exit') {
            let confirm = await inquirer.prompt({
                type: 'confirm',
                message: `${chalk.red('Are you sure you want to exit ? :')} `,
                name: 'exit'
            });
            if (confirm.exit) {
                {
                    console.log(chalk.cyanBright `\nThanks for Using ____ This Project is `);
                    console.log(orange(`
         __ \\                  |                      |  __ )          ___|         _|                   
         |   |  _ \\\\ \\   / _ \\ |  _ \\  __ \\   _ \\  _\` |  __ \\  |   | \\___ \\  |   | |   |   |  _\` | __ \\  
         |   |  __/ \\ \\ /  __/ | (   | |   |  __/ (   |  |   | |   |       | |   | __| |   | (   | |   | 
        ____/ \\___|  \\_/ \\___|_|\\___/  .__/ \\___|\\__,_| ____/ \\__, | _____/ \\__,_|_|  \\__, |\\__,_|_|  _| 
                                      _|                      ____/                   ____/
                    `));
                    let endingAnimation = chalkAnimation.rainbow("Good BYE :)");
                    setTimeout(() => { endingAnimation.stop(); }, 3000);
                }
                exit = true;
            }
            ;
        }
    }
}
