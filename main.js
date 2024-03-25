#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt([
    {
        name: "number_1",
        type: "number",
        message: "Enter your first number"
    },
    {
        name: "operator",
        type: "list",
        message: "Select one opertor in calculate",
        choices: ["+", "-", "x", "/", "^", "%",]
    },
    {
        name: "number_2",
        type: "number",
        message: " Enter your  second number"
    }
]);
// logic in calculator
if (answer.operator === "+") {
    console.log(chalk.green(answer.number_1 + answer.number_2));
}
else if (answer.operator === "-") {
    console.log(chalk.blue(answer.number_1 - answer.number_2));
}
else if (answer.operator === "x") {
    console.log(chalk.red(answer.number_1 * answer.number_2));
}
else if (answer.operator === "/") {
    console.log(chalk.cyan(answer.number_1 / answer.number_2));
}
else if (answer.operator === "^") {
    console.log(chalk.white(answer.number_1 ** answer.number_2));
}
else if (answer.operator === "%") {
    console.log(answer.number_1 % answer.number_2);
}
else {
    console.log(" please enter a valid operator");
}
