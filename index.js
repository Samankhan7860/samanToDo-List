#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
console.log(chalk.magenta.bold("\n \t!! <-------=  WelCome to Saman - TODO-LIST APPLICATION  =-------> !!\n "));
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: 'input',
            message: (chalk.bold.hex("ff8000")("What task you want to add in your ToDo's List?"))
        },
    ]);
    todos.push(addTask.task);
    //condition = addTask.addMore
    console.log(chalk.bold.hex("#00FFFF")(todos), (chalk.green(">----> Task added in Todo-List successfully!\n")));
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: (chalk.bold.hex("ff8000")("Do you want to add more task ?")),
            default: "false"
        }
    ]);
    condition = addMoreTask.addmore;
}
console.log(chalk.green("\nYour updated ToDo List: >---->"), (chalk.bold.hex("#FF3985")(todos)));
