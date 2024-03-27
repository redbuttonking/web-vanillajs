const clock = document.querySelector("#clock span:first-child");
const clockSeconds = document.querySelector("#clock span:last-child");
function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours} : ${minutes}`;
  clockSeconds.innerText = ` : ${seconds}`

}
getClock();
setInterval(getClock,1000);