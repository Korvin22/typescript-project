"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
const toDoItem_1 = require("./toDoItem");
class TodoList {
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.todoItems = todoItems;
        this.nextId = 1;
    }
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.todoItems.push(new toDoItem_1.TodoItem(this.nextId, task));
        return this.nextId;
    }
    getTodoById(id) {
        return this.todoItems.find(item => item.id === id);
    }
    markComplete(id, complete) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
}
exports.TodoList = TodoList;
