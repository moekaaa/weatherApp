<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../../stores';
import { getTodayDate } from '../../modules';

const useWeatherData = useUserStore();

//ToDo_Takuya: DBとつないでcreate table/ insert dataする
//cityの名前が入力された後に関数を動かせるようにする
// Review: getTodayDate()の返り値は、3月19日(火)のような文字列なので、
// Review: const todayDate = getTodayDate()にするのが適切

const todayDate = getTodayDate()
const city = ref('');


//ボタンを押したときに実行して情報を持ってくる
const submitCity = () => {
  // Review: ごめん！ここの処理がよくわからなかった、、
  //city nameを引数として、moduleのfetchWeather()を実行して値を獲得する  
  todayDate.getWeatherData()
};

const isDataFetched = ref(false);
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
      <p class="today">今日の日付: {{ useWeatherData.today }}</p>
      <!-- TODO: 天気によってアイコンを表示 -->
      <!-- const weather = weatherDetail()とかで呼び出せるのでは？ -->
      <p class="weather">{{ useWeatherData.weatherDetail.weather }}</p>
      <div class="temp">
        <p class="temp_min">{{ useWeatherData.weatherDetail.temp_min }}</p>
        <div class="temp_border"></div>
        <p class="temp_max">{{ useWeatherData.weatherDetail.temp_max }}</p>
      </div>
      <p class="wind">{{ useWeatherData.weatherDetail.wind }}</p>
      <p class="humidity">{{ useWeatherData.weatherDetail.humidity }}</p>
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