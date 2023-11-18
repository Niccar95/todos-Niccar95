import { TodoList } from "../models/todolist";
import "../scss/style.scss";


const listProperties = new TodoList("Leg day at the gym", "Monday", "18:00");
const listProperties2 = new TodoList("Buy groceries", "Tuesday", "17:00");
const listProperties3 = new TodoList("Clean the kitchen", "Wednesday", "19:00");
const listProperties4 = new TodoList("Study Javascript", "Thursday", "18:00");
const listProperties5 = new TodoList("Chill", "Friday", "20:00");




 const initialList = [listProperties, listProperties2, listProperties3, listProperties4, listProperties5];
 
 let myTodoList = JSON.parse(localStorage.getItem("listInfo")) || initialList;
 
 localStorage.setItem("listInfo", JSON.stringify(myTodoList));

const mainContainer = document.getElementById("app");


function loadHtml() {

myTodoList.forEach((myList) => {
  

  const unorderedList  =  document.createElement("ul");
  const list = document.createElement("li");
  const doneButton = document.createElement("button");
  const undoButton = document.createElement("button");

  mainContainer.appendChild(unorderedList);
  unorderedList.appendChild(list);
  unorderedList.appendChild(doneButton);
  unorderedList.appendChild(undoButton);

  doneButton.innerHTML = "Click to mark as done";
  undoButton.innerHTML = "Click to undo changes";

  list.innerHTML = myList.task +": " + myList.day + " " + myList.time;

  if (myList.done) {
    list.innerHTML = "Done! &#10003;";
  }


  doneButton.addEventListener("click", () => {

    myList.done = true;
    localStorage.setItem("listInfo", JSON.stringify(myTodoList));
    list.innerHTML = "Done! &#10003;";

    
  })

  undoButton.addEventListener("click", () => {

    myList.done = false;
    localStorage.setItem("listInfo", JSON.stringify(myTodoList));
    list.innerHTML = myList.task +": " + myList.day + " " + myList.time;
    
  })

});

}

loadHtml();

