// weather api code of code ninjas by Rapid api
const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cacbddbc27msh7c60909a577989ep1d1bb3jsnf91359c3b022",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

//function to get weather
const getWeather = (city) => {
  document.getElementById("cityname").innerHTML = city;  
  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city , options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    //   cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

//add event listener for submit button to search weather of any city
const Submit = document.getElementById("submit");
const City = document.getElementById("city");

Submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(City.value);
  getWeather(City.value);
});

getWeather("Delhi");
