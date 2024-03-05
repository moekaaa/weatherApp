<script lang="ts">
import { ref } from 'vue'

const apiKey = "37639b3722b929b763122aeed5ee06eb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

let date = new Date();
const month = (date.getMonth() + 1);
const day = date.getDate();

const today =  month + "/" + day;

const weekDay: {
  [key: number]: string;
} = {
  0: 'Sun',
  1: 'MOn',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat',
};

const n = date.getDay(); // 曜日を数値で取得する
const weekDayName = (weekDay[n]); // 曜日を文字列に変換

document.querySelector(".today").innerHTMl = today;
document.querySelector(".weekDay").innerHTMl = weekDayName;

//const searchBox = document.querySelector(".search input");


async function fetchWeather() {
  let inputDataCityName = ref(city.value)
    const response = await fetch(apiUrl + city.value + "&appid=" + apiKey + "&units=metric")
  const data = await response.json()
  

  console.log(city.value) 
  console.log(response);
  console.log(data);

 
  document.querySelector(".weather").innerHTMl = data.weather[0].main;
  document.querySelector(".temp_max").innerHTML = Math.round(data.main.temp_max) + "°C";
  document.querySelector(".temp_min").innerHTML = Math.round(data.main.temp_min) + "°C";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
}
const city = ref("")
</script>

<template>
  <div class="showWeather">
      <div class="search">
        <input type="text" v-model="city" placeholder="city name"/>
        <button @click="fetchWeather">Get Weather</button>
      </div>

      <p class="today"></p>
      <p id="weekDayName"></p>

      <div class="weatherDetail">
        <p id="weather"></p>
        <p class="temp_max"></p>
        <p class="temp_min"></p>
        <p class="wind"></p>
        <p class="humidity"></p>
      </div>

    
  </div>
</template>

<style>
*{
    margin: 0;
    padding: 0;
    font-family: ComicSansMS;
    box-sizing: border-box;
}
body{
  background: #555;
  color: white;
}
.showWeather{
  width: 90%;

}
</style>
