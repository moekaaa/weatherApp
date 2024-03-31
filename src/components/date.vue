<script setup lang="ts">
import { ref } from "vue";
import { getTodayDate } from '../modules';

const TodayDate = getTodayDate();
const name =ref("moeka");
//ref, setInterval, functionの使い方理解

const now = new Date();


const date = ref(now.getDate());
const month = ref(now.getMonth() + 1);
const year = ref(now.getFullYear());
const today = ref(`${year.value}/${month.value}/${date.value}`);

const nowStr = now.toLocaleTimeString();
//同じく現在の時刻文字列をテンプレート変数としてrefで用意
const timeStrRef = ref(nowStr);


//新しい時刻に変更する関数
function changeTime(): void {

  const newTime = new Date();
  const newTimeStr = newTime.toLocaleTimeString();
  timeStrRef.value = newTimeStr;
  console.log(TodayDate);

}

//changeTime関数を1秒ごとに実行
setInterval(changeTime, 1000)


</script>

<template>
  <h1>こんにちは！{{name}} さん</h1>
  <h1>{{ today }} </h1>
  <p>{{ timeStrRef }}</p>
  <WeatherDetail />
</template>

<style>

</style>