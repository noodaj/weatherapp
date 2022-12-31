const getWeather = async (city) => {
  try {
    const res = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        apiKey +
        "&units=imperial"
    );
    const data = await res.json();
    
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

let city = 'Las Vegas'
//function getCity(){
//  let search = document.querySelector('#city').addEventListener('keydown', (e) => {
//    if (e.keyCode == 13) {
//      console.log(document.querySelector("#city").value);
//      city = document.querySelector("#city").value;
//    }
//  
//  })
//
//  getWeather(city)
//}

window.onload = getWeather(city);

getWeather('Las Vegas').then((data) => {
  const { name } = data;
  const { lon, lat } = data.coord;
  const { feels_like, humidity, temp, temp_max, temp_min } = data.main;
  const { id, main, description, icon } = data.weather[0];
  const { speed } = data.wind;
  const { country } = data.sys;
  const { all } = data.clouds;
  let today = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let date = weekday[today.getDay()];
  let month = months[today.getMonth()];
  let minute = today.getMinutes();
  if (minute < 10) {
    minute = `0${today.getMinutes()}`;
  }

  document.querySelector(".current-temp").innerHTML = `${feels_like}°`;
  document.querySelector(".city").innerHTML = name;
  document.querySelector(
    ".time"
  ).innerHTML = `${today.getHours()}:${minute}- ${date}, ${month} ${today.getDate()} ${today.getFullYear()}`;
  document.querySelector(
    ".icon"
  ).src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  document.querySelector(".weather-description").innerHTML = description;
  document.querySelector(".cloudy").innerHTML = `${all}%`;
  document.querySelector(".humidity").innerHTML = `${humidity}%`;
  document.querySelector(".wind").innerHTML = `${speed} mph`;
});
