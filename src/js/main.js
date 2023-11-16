import { TodoList } from "../models/todolist";
import "../scss/style.scss";


const listProperties = new TodoList("Leg day at the gym", "Monday", "18:00");
const listProperties2 = new TodoList("Buy groceries", "Tuesday", "17:00");
const listProperties3 = new TodoList("Clean the kitchen", "Wednesday", "19:00");
const listProperties4 = new TodoList("Study Javascript", "Thursday", "18:00");
const listProperties5 = new TodoList("Chill", "Friday", "20:00");


let myTodoList = [listProperties, listProperties2, listProperties3, listProperties4, listProperties5];

localStorage.setItem("listInfo", JSON.stringify(myTodoList));
myTodoList = JSON.parse(localStorage.getItem("listInfo"));

const mainContainer = document.getElementById("app");

myTodoList.forEach((value, i) => {

  const orderedList  =  document.createElement("ul");
  const list = document.createElement("li");
  const removeButton = document.createElement("button");

  mainContainer.appendChild(orderedList);
  orderedList.appendChild(list);

  app.appendChild(removeButton);
  removeButton.innerHTML = "Click to mark as done";

  list.innerHTML = value.task +": " + value.day + " " + value.time;

  removeButton.addEventListener("click", () => {
    myTodoList.splice(i, 1);
    list.innerHTML = "Done! &#10003;";
  })

});



