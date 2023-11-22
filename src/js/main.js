import { MyTodoList, TodoList } from "../models/todolist";
import "../scss/style.scss";

const listProperties = new TodoList("Leg day at the gym", "Monday", "18:00");
const listProperties2 = new TodoList("Buy groceries", "Tuesday", "17:00");
const listProperties3 = new TodoList("Clean the kitchen", "Wednesday", "19:00");
const listProperties4 = new TodoList("Study Javascript", "Thursday", "18:00");
const listProperties5 = new TodoList("Chill", "Friday", "20:00");


 let myTodoList = [listProperties, listProperties2, listProperties3, listProperties4, listProperties5];

 if (localStorage.getItem("listInfo")) {
  myTodoList = JSON.parse(localStorage.getItem("listInfo"));
}

 let myOwnList = JSON.parse(localStorage.getItem("myListInfo")) || [];

 localStorage.setItem("listInfo", JSON.stringify(myTodoList));

const mainContainer = document.getElementById("app");
const title = document.createElement("h1");

mainContainer.appendChild(title);

title.innerHTML = "To do list";

//Egna listan

function loadHtml() {

  const inputTitle = document.createElement("h3");
  inputTitle.innerHTML = "Create your own To do list";

  const taskInput = document.createElement("input");
  const inputForm = document.createElement("form");
  const taskLabel = document.createElement("label");

  mainContainer.appendChild(inputForm);
  inputForm.appendChild(inputTitle);
  inputForm.appendChild(taskLabel);
  taskLabel.textContent = "Task:";
  taskLabel.setAttribute('for', "Task");
  inputForm.appendChild(taskInput);
  taskInput.setAttribute("type", "text");
  taskInput.setAttribute("id", "Task");
  taskInput.setAttribute('required', '');

  const addListButton = document.createElement("button");
  addListButton.innerHTML = "Add new task to the list";
  inputForm.appendChild(addListButton);

  function addTaskToList(inputValue) {
    const myListProperties = new MyTodoList(inputValue);
    myOwnList.push(myListProperties);
    localStorage.setItem("myListInfo", JSON.stringify(myOwnList)); 
    console.log(myListProperties);
  }
  

  addListButton.addEventListener("click", () => {
    const inputValue = taskInput.value.trim();

    if (inputValue) { 

      const unorderedList2 = document.createElement("ul");
      const newListItem = document.createElement("li");

      newListItem.innerHTML = inputValue;

      inputForm.appendChild(unorderedList2);
      unorderedList2.appendChild(newListItem);
      taskInput.value = '';

      addTaskToList(inputValue);

      const newDoneButton = document.createElement("button");
      unorderedList2.appendChild(newDoneButton);
      newDoneButton.innerHTML = "Remove task";
      
      newDoneButton.addEventListener("click", () => {
        unorderedList2.remove();
      })

    } else {
      alert("Please enter a task before pressing the button!");
    }

  });

//Hårdkodad lista 

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




