const API_KEY = "4cf72d7f1713f055c9e640ef03d636d9";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then((response) => response.json())
  .then((data) =>{
    const weather = document.querySelector("#weather-temp");
    const city = document.querySelector("#city");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}°`;
    });

}

function onGeoError(){
  alert("Can't Find You. No Weather For You")
}



                                        // 참일때 , 거짓일때 조건에 맞게 실행
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);