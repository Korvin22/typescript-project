"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toDoItem_1 = require("./toDoItem");
const toDoList_1 = require("./toDoList");
let todos = [
    new toDoItem_1.TodoItem(1, "Learn TypeScript"),
    new toDoItem_1.TodoItem(2, "Play Run Goblin Run"),
    new toDoItem_1.TodoItem(3, "Create Pixel Art for Game"),
    new toDoItem_1.TodoItem(4, "Finish Loki", true),
];
let list = new toDoList_1.TodoList("Dmitrii", todos);
console.clear();
console.log(`${list.userName}'s Todo List`);
let newId = list.addTodo("Go to store");
let todoItem = list.getTodoById(newId);
todoItem.printDetails();
//list.addTodo(todoItem);
