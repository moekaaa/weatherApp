<script setup lang="ts">
import { ref } from "vue";
import WeatherDetail from './components/WeatherDisplay/WeatherDetail.vue'

const name =ref("moeka");

//ref, setInterval, functionの使い方理解

const now = new Date();
//現在の時刻の文字列を取得
const nowStr = now.toLocaleTimeString();
//同じく現在の時刻文字列をテンプレート変数としてrefで用意
const timeStrRef = ref(nowStr);


//新しい時刻に変更する関数
function changeTime(): void {
  //現在日時を取得
  const newTime = new Date();
  //現在の時刻の文字列を取得
  const newTimeStr = newTime.toLocaleTimeString();
  //現在の時刻文字列をテンプレート変数timeStrRefに格納
  //valueないとダメ（valueプロパティはref()によって生成された変数をリアクティブな状態を維持してくれる？）
  timeStrRef.value = newTimeStr;

}

//changeTime関数を1秒ごとに実行
setInterval(changeTime, 1000)


</script>

<template>
  <h1>こんにちは！{{name}} さん</h1>
  <p>現在時刻：{{ timeStrRef }}</p>
  <WeatherDetail />
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
</style>