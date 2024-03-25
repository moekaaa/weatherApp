<script setup lang="ts">
import { ref } from 'vue';
import { useWeatherDataStore } from '../../stores';
import { getTodayDate, getWeatherData } from '../../modules';

const weatherDataStore = useWeatherDataStore();

//ToDo_Moeka: DBとつないでcreate table/ insert dataする

const cityInput = ref('');

const submitCity = async (e: Event) => {
  e.preventDefault()
  // Review: ごめん！ここの処理がよくわからなかった、、
  //city nameを引数として、moduleのfetchWeather()を実行して値を獲得する  
  const todayDate = getTodayDate()
  weatherDataStore.todayDate = todayDate
  weatherDataStore.city = cityInput.value
  
  await getWeatherData()
  weatherDataStore.isDataFetched = true
};
</script>

<template>
  <div class="showWeather">
    <form class="search" @submit.prevent="submitCity">
      <!-- TODO_Moeka: 入力欄とボタンをデザインしても面白いかも？ :)-->
      <input type="text" v-model="cityInput" placeholder="地名を入力" />
      <button type="submit">天気の情報を取得</button>
    </form>

    <p class="today"></p>
    <p id="weekDayName"></p>

    <div v-if="weatherDataStore.isDataFetched" class="weatherDetail">
      <p class="today">今日の日付: {{ weatherDataStore.todayDate }}</p>
      <!-- TODO: 天気によってアイコンを表示 -->
      <!-- const weather = weatherDetail()とかで呼び出せるのでは？ :)-->
      <p class="weather">{{ weatherDataStore.weatherDetail.weather }}</p>
      <div class="temp">
        <p class="temp_min">{{ weatherDataStore.weatherDetail.tempMin }}</p>
        <div class="temp_border"></div>
        <p class="temp_max">{{ weatherDataStore.weatherDetail.tempMax }}</p>
      </div>
      <p class="wind">{{ weatherDataStore.weatherDetail.wind }}</p>
      <p class="humidity">{{ weatherDataStore.weatherDetail.humidity }}</p>
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