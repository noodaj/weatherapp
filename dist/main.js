(()=>{const e=async e=>{try{const t=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+e+"&appid=d326ffd61e7fc21bcf5b6df4c7d1c37c&units=imperial"),n=await t.json();return console.log(n),n}catch(e){console.log(e)}};window.onload=e("Las Vegas"),e("Las Vegas").then((e=>{const{name:t}=e,{lon:n,lat:r}=e.coord,{feels_like:o,humidity:a,temp:c,temp_max:i,temp_min:u}=e.main,{id:d,main:m,description:s,icon:y}=e.weather[0],{speed:l}=e.wind,{country:p}=e.sys,{all:g}=e.clouds;let h=new Date,w=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][h.getDay()],M=["January","February","March","April","May","June","July","August","September","October","November","December"][h.getMonth()],$=h.getMinutes();$<10&&($=`0${h.getMinutes()}`),document.querySelector(".current-temp").innerHTML=`${o}°`,document.querySelector(".city").innerHTML=t,document.querySelector(".time").innerHTML=`${h.getHours()}:${$}- ${w}, ${M} ${h.getDate()} ${h.getFullYear()}`,document.querySelector(".icon").src=`http://openweathermap.org/img/wn/${y}@2x.png`,document.querySelector(".weather-description").innerHTML=s,document.querySelector(".cloudy").innerHTML=`${g}%`,document.querySelector(".humidity").innerHTML=`${a}%`,document.querySelector(".wind").innerHTML=`${l} mph`}))})();