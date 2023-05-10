"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toDoItem_1 = require("./toDoItem");
const toDoList_1 = require("./toDoList");
const inquirer = require("inquirer");
let todos = [
    new toDoItem_1.TodoItem(1, "Learn TypeScript"),
    new toDoItem_1.TodoItem(2, "Play Sun Haven"),
    new toDoItem_1.TodoItem(3, "Create Pixel Art for Game"),
    new toDoItem_1.TodoItem(4, "Finish Loki", true),
];
let collection = new toDoList_1.TodoList("Dmitrii", todos);
console.clear();
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List ` +
        `(${collection.getItemCounts().incomplete} items to do)`);
    collection.getTodoItems(true).forEach((item) => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptUser() {
    console.clear();
    displayTodoList();
    inquirer
        .prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        nonExistentProp: "hello",
        choices: Object.values(Commands),
    })
        .then((answers) => {
        if (answers["command"] !== Commands.Quit) {
            promptUser();
        }
    });
}
promptUser();
