<script setup lang="ts">
import { ref } from 'vue'
import {WEEK_DAY} from "../consts"

const apiKey = "37639b3722b929b763122aeed5ee06eb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const weatherDetail = ref({
  weather: '',
  temp_max: '',
  temp_min: '',
  wind: '',
  humidity: '',
})

const getDate = () => {
    const date = new Date();
    const month = (date.getMonth() + 1);
    const day = date.getDate();
    const weekDayNum = date.getDay(); // 曜日を数値で取得する
    const weekDayName = (WEEK_DAY[weekDayNum]); // 曜日を文字列に変換
}

async function fetchWeather() {
  let inputDataCityName = ref(city.value)
  const response = await fetch(apiUrl + city.value + "&appid=" + apiKey + "&units=metric")
  const data = await response.json()

  weatherDetail.value.weather = data.weather[0].main;
  weatherDetail.value.temp_max = Math.round(data.main.temp_max) + "°C";
  weatherDetail.value.temp_min = Math.round(data.main.temp_min) + "°C";
  weatherDetail.value.wind = data.wind.speed + "km/h";
  weatherDetail.value.humidity = data.main.humidity + "%";
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
        <p class="weather">{{ weatherDetail.weather }}</p>
        <p class="temp_max">{{ weatherDetail.temp_max }}</p>
        <p class="temp_min">{{ weatherDetail.temp_min }}</p>
        <p class="wind">{{ weatherDetail.wind }}</p>
        <p class="humidity">{{ weatherDetail.humidity }}</p>
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
