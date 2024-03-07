<script setup lang="ts">
import { ref } from 'vue'
import {getTodayDate} from "../modules"
import {WEATHER} from "../consts"

// TODO_Moeka: APIキーを.envファイルに移動
const apiKey = "37639b3722b929b763122aeed5ee06eb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const city = ref("")

const weatherDetail = ref({
  weather: '',
  temp_max: '',
  temp_min: '',
  wind: '',
  humidity: '',
})

const isDataFetched = ref(false)

const today = ref(getTodayDate())


// TODO_Moeka: この関数もmodules/に移動
async function fetchWeather(): void {
    // TODO_Moeka: urlとapiKeyを.envファイルからロード(dotenvライブラリ)
  const response = await fetch(apiUrl + city.value + "&appid=" + apiKey + "&units=metric")

  // TODO_Moeka: 天気の情報が返ってこなかった時(存在しない都市の名前の入力時)の処理を追加(エラーハンドリング)
  // try catch文を使用する

  const data = await response.json()

  console.log(data)

  weatherDetail.value.weather = "天気: " + WEATHER[data.weather[0].main];
  weatherDetail.value.temp_max = Math.round(data.main.temp_max) + "°C";
  weatherDetail.value.temp_min = Math.round(data.main.temp_min) + "°C";
  weatherDetail.value.wind = "風速: " + data.wind.speed + "km/h";
  weatherDetail.value.humidity = "湿度: " + data.main.humidity + "%";

  isDataFetched.value = true
}
</script>

<template>
  <div class="showWeather">
      <div class="search">
        <input type="text" v-model="city" placeholder="city name"/>
        <button @click="fetchWeather">Get Weather</button>
      </div>

      <p class="today"></p>
      <p id="weekDayName"></p>

      <div v-if="isDataFetched" class="weatherDetail">
        <p class="today">今日の日付: {{ today }}</p>
        <p class="weather">{{ weatherDetail.weather }}</p>
        <div class="temp">
            <p class="temp_min">{{ weatherDetail.temp_min }}</p>
            <div class="temp_border"></div>
            <p class="temp_max">{{ weatherDetail.temp_max }}</p>
        </div>
        <p class="wind">{{ weatherDetail.wind }}</p>
        <p class="humidity">{{ weatherDetail.humidity }}</p>
      </div>
  </div>
</template>

<style>
.showWeather{
    height: 300px;
    width: 100%;
    background-color: gray;
}
.search {
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
.weatherDetail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}
.temp {
    display: flex;
}
.temp_min {
    color: blue;
}
.temp_border {
    width: 1px;
    height: 28px;
    background-color: white;
    margin: 0 10px;
}
.temp_max {
    color: red;
}
</style>
