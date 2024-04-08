const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const plzAddTodo = document.getElementById("plz-addTodo");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
 const li = event.target.parentElement;
 li.remove();
 toDos = toDos.filter((toDo)=> toDo.id !== parseInt(li.id));
 saveToDos();
}

function paintToDo(newTodo){

  checkTodo();
  const checkbox = document.createElement("input");
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("i");
  
  checkbox.type="checkbox";
  checkbox.checked = newTodo.ischecked;

  li.id=newTodo.id;
  span.innerText = newTodo.text;
  if(checkbox.checked){
    span.classList.toggle("midline");
  }
  

  button.classList.add("fa-solid","fa-trash-can");


  button.addEventListener("click",deleteToDo);
  button.addEventListener("click",checkTodo);
  checkbox.addEventListener("change",updateTodoState);

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);

  
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value="";
  const newTodoObj = {
    text:newTodo,
    id: Date.now(),
    ischecked : false,
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
  
}

function showPlzAddTodo (){
  plzAddTodo.classList.remove("hidden");
}

function removePlzAddTodo(){
  plzAddTodo.classList.add("hidden");
}

function checkTodo(){
  if(toDos.length===0){
    if(localStorage.getItem("username")===null){
      removePlzAddTodo();
    }else{
      showPlzAddTodo();
    }
  }else{
    removePlzAddTodo();
  }
}

function updateTodoState(event){
  let checkbox = event.target;
  let todoText = checkbox.nextSibling;
  let li = event.target.parentElement.id;
  
  if (checkbox.checked) {

    todoText.style.textDecoration = "line-through";
    todoText.style.color = "rgba(255, 255, 255,0.7)"
    todoText.style.textShadow = "none";
    
    for(let i = 0 ; i < toDos.length ; i++){

      if(toDos[i].id === Number(li)){
        toDos[i].ischecked = true;
        saveToDos();
      }

    }

  } else {

    todoText.style.textDecoration = "none";
    todoText.style.color = "aliceblue";
    todoText.style.textShadow = "var(--text-edge)";
    localStorage.setItem("isChecked",false);

    for(let i = 0 ; i < toDos.length ; i++){

      if(toDos[i].id === Number(li)){
        toDos[i].ischecked = false;
        saveToDos();
      }

    }

  }

}

toDoForm.addEventListener("submit" , handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){

  const parsedTodos = JSON.parse(savedToDos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintToDo);
  checkTodo();
  
  console.log(toDos);
}