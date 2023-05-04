import { TodoItem } from "./toDoItem";
import { TodoList } from "./toDoList";

let todos: TodoItem[] = [
  new TodoItem(1, "Learn TypeScript"),
  new TodoItem(2, "Play Sun Haven"),
  new TodoItem(3, "Create Pixel Art for Game"),
  new TodoItem(4, "Finish Loki", true),
];
let collection: TodoList = new TodoList("Dmitrii", todos);
console.clear();
console.log(`${collection.userName}'s Todo List`);
console.log(
  `${collection.userName}'s Todo List ` +
    `(${collection.getItemCounts().incomplete} items to do)`
);
collection.getTodoItems(true).forEach((item) => item.printDetails());
