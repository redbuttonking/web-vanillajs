const API_KEY = "a3ccc7ba662fd034220dee01cd6cd538";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then((response) => response.json())
  .then((data) =>{
    const weatherIcon = document.querySelector("#weatherIcon");
    const weather = document.querySelector("#weather-main");
    const city = document.querySelector("#city");
    let dataIcon = data.weather[0].icon;
    city.innerText = data.name;
    weatherIcon.src = `http://openweathermap.org/img/wn/${dataIcon}.png`;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp} °`;
  });

}

function onGeoError(){
  alert("Can't Find You. No Weather For You")
}



                                        // 참일때 , 거짓일때 조건에 맞게 실행
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);