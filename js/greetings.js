const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const link  = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"


function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.toggle(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY,username);
  paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `환영합니다 ${username}님! `;
    greeting.classList.remove(HIDDEN_CLASSNAME);
  
  }
  
const savedUsername = localStorage.getItem(USERNAME_KEY);
  
  if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} 
else {
  paintGreetings(savedUsername);
}

