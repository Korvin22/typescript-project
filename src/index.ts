import { TodoItem } from "./toDoItem";
import { TodoList } from "./toDoList";
let todos = [
  new TodoItem(1, "Learn TypeScript"),
  new TodoItem(2, "Play Run Goblin Run"),
  new TodoItem(3, "Create Pixel Art for Game"),
  new TodoItem(4, "Finish Loki", true),
];
let list : TodoList = new TodoList("Dmitrii", todos);
console.clear();
console.log(`${list.userName}'s Todo List`);
let newId : number = list.addTodo("Go to store");
let todoItem : TodoItem = list.getTodoById(newId);
todoItem.printDetails();
//list.addTodo(todoItem);
