const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

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
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.id=newTodo.id;
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click",deleteToDo);
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
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
  
}

toDoForm.addEventListener("submit" , handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
  const parsedTodos = JSON.parse(savedToDos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintToDo);
  // todo리스트가 없을때 안내 문구를 만들어보자
  // console.log(toDos);?-
  
}