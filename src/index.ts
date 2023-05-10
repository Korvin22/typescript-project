import { TodoItem } from "./toDoItem";
import { TodoList } from "./toDoList";
import * as inquirer from "inquirer";

let todos: TodoItem[] = [
  new TodoItem(1, "Learn TypeScript"),
  new TodoItem(2, "Play Sun Haven"),
  new TodoItem(3, "Create Pixel Art for Game"),
  new TodoItem(4, "Finish Loki", true),
];
let collection: TodoList = new TodoList("Dmitrii", todos);
let showCompleted = true;
console.clear();
function displayTodoList(): void {
  console.log(
    `${collection.userName}'s Todo List ` +
      `(${collection.getItemCounts().incomplete} items to do)`
  );
  collection.getTodoItems(true).forEach((item) => item.printDetails());
}

enum Commands {
    Toggle = "Show/Hide Completed",
    Quit = "Quit"
  }
  function promptUser(): void {
    console.clear();
    displayTodoList();
    inquirer.prompt({
      type: "list",
      name: "command",
      message: "Choose option",
      choices: Object.values(Command),
   }).then(answers => {
      switch(answers["command"]) {
        case Commands.Toggle:
           showCompleted = !showCompleted;
           promptUser();
           break;
      }
   })
 }
 promptUser();
