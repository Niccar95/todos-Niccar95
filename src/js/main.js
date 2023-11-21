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
const title = document.createElement("h1");

mainContainer.appendChild(title);

title.innerHTML = "To do list"


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

  undoButton.setAttribute("id", "notHidden");
  
  doneButton.innerHTML = "Click to mark as done";
  undoButton.innerHTML = "Click to undo changes";
  undoButton.style.color = "crimson";
  
  list.innerHTML = myList.task +" - " + myList.day + " " + myList.time;

  if (myList.done) {
    list.innerHTML = "Done! &#10003;";
    doneButton.hidden = true;
    undoButton.hidden = false;
  }

  else(
    doneButton.hidden = false, undoButton.hidden = true
  )

  doneButton.addEventListener("click", () => {
    undoButton.hidden = false;
    doneButton.hidden = true;
    myList.done = true;
    localStorage.setItem("listInfo", JSON.stringify(myTodoList));
    list.innerHTML = "Done! &#10003;";
  })

  undoButton.addEventListener("click", () => {
    undoButton.hidden = true;
    doneButton.hidden = false;
    myList.done = false;
    localStorage.setItem("listInfo", JSON.stringify(myTodoList));
    list.innerHTML = myList.task +" - " + myList.day + " " + myList.time;
    
  })
  

});
}
loadHtml();


const inputTitle = document.createElement("h1");
inputTitle.innerHTML = "Create your own To do list";

const taskInput = document.createElement("input");
const timeInput = document.createElement("input");
const inputForm = document.createElement("form");
const taskLabel = document.createElement("label");
const timeLabel = document.createElement("label");


mainContainer.appendChild(inputForm);
inputForm.appendChild(inputTitle);

inputForm.appendChild(taskLabel);
taskLabel.textContent = "Task:";
taskLabel.setAttribute('for', "Task");

inputForm.appendChild(taskInput);

inputForm.appendChild(timeLabel);
timeLabel.textContent = "Time:";
timeLabel.setAttribute('for', "Time");

inputForm.appendChild(timeInput);

taskInput.setAttribute("type", "text");
timeInput.setAttribute("type", "time");

taskInput.setAttribute("id", "Task");
timeInput.setAttribute("id", "Time");

taskInput.setAttribute('required', '');
timeInput.setAttribute('required', '');


const unorderedList2  =  document.createElement("ul");
  const list2 = document.createElement("li");

  taskInput.addEventListener("keyup", writeList);
  timeInput.addEventListener("keyup", writeList);

  function writeList() {
    inputForm.appendChild(unorderedList2);
    unorderedList2.appendChild(list2);

    list2.innerHTML = taskInput.value + " - " +  timeInput.value;

  }
  

  /*clickMe.addEventListener("click", () => {

    let myOtherInput = document.getElementById("myOtherInput").value;
    let myInput = document.getElementById("myInput").value;
    let newText = document.getElementById("newText");

    newText.innerHTML = parseInt(myInput) + parseInt(myOtherInput);
  
  });

  */





