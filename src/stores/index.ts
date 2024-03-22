import { ref } from 'vue';
import { defineStore } from 'pinia';

//基本的に変数はここで管理するようにする
//イベント発生ごとにstoreで状態管理するようにしてvueファイルでも
//tsファイルでもstoreをimportして変数を使えるようにする

export const useWeatherDataStore = defineStore('weather', () => {
  const todayDate = ref('');
  const weatherDetail = ref({
    weather: '',
    tempMax: '',
    tempMin: '',
    wind: '',
    humidity: '',
  });
  const city = ref('');
  const isDataFetched = ref(false);

  return {
    todayDate,
    weatherDetail,
    city,
    isDataFetched
  }
})

export const useUserDataStore = defineStore('user', () => {
  const firstName = ref('');
  const lastName = ref('');

  return {
    firstName,
    lastName,
  };
});
