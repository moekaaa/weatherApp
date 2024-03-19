<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useUserStore } from '../../stores';
import { getTodayDate } from '../../modules';
import { WEATHER } from '../../consts';
import { WEATHER_EN } from '../../types';

//storeの使い方がなかなか理解できない
// Review: https://zenn.dev/sa2knight/books/storybook-7-with-vue-3/viewer/pinia
// Review: このサイトがわかりやすそう
const useWeatherData = useUserStore();
const weatherDetail = ref({
  weather: '',
  temp_max: '',
  temp_min: '',
  wind: '',
  humidity: '',
});

//cityの名前が入力された後に関数を動かせるようにする
// Review: getTodayDate()の返り値は、3月19日(火)のような文字列なので、
// Review: const todayDate = getTodayDate()にするのが適切
const fetchWeatherDetail = getTodayDate();
const submitCity = () => {
  useWeatherData.weatherDetail.weather = weatherDetail.value.weather;
  useWeatherData.weatherDetail.temp_max = weatherDetail.value.temp_max;
  useWeatherData.weatherDetail.temp_min = weatherDetail.value.weather;
  useWeatherData.weatherDetail.wind = weatherDetail.value.temp_min;
  useWeatherData.weatherDetail.humidity = weatherDetail.value.humidity;

  // Review: ごめん！ここの処理がよくわからなかった、、
  fetchWeatherDetail.fetchWeather();
};

const city = ref('');

const isDataFetched = ref(false);

const today = ref(getTodayDate());

// この関数もmodules/に移動
async function fetchWeather(): Promise<void> {
  //  天気の情報が返ってこなかった時(存在しない都市の名前の入力時)の処理を追加(エラーハンドリング)
  // try catch文を使用する

  // Review: dataには何が入る感じかな？
  const data = await fetchWeatherDetail.response.json();

  try {
    weatherDetail.value.weather =
      '天気: ' + WEATHER[data.weather[0].main as WEATHER_EN];
    weatherDetail.value.temp_max = Math.round(data.main.temp_max) + '°C';
    weatherDetail.value.temp_min = Math.round(data.main.temp_min) + '°C';
    weatherDetail.value.wind = '風速: ' + data.wind.speed + 'km/h';
    weatherDetail.value.humidity = '湿度: ' + data.main.humidity + '%';

    isDataFetched.value = true;
  } catch (e) {
    if (!data) return;
  }
}
</script>

<template>
  <div class="showWeather">
    <div class="search">
      <input type="text" v-model="city" placeholder="city name" />
      <button @click="submitCity">Get Weather</button>
    </div>

    <p class="today"></p>
    <p id="weekDayName"></p>

    <div v-if="isDataFetched" class="weatherDetail">
      <p class="today">今日の日付: {{ today }}</p>
      <!-- TODO: 天気によってアイコンを表示 -->
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
.showWeather {
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
../../modules../../consts../../types
