import { ref } from 'vue';
import { defineStore } from 'pinia';

//基本的に変数はここで管理するようにする
//イベント発生ごとにstoreで状態管理するようにしてvueファイルでも
//tsファイルでもstoreをimportして変数を使えるようにする

export const useUserStore = defineStore('user', () => {
  const firstName = ref('');
  const lastName = ref('');
  const todayDate = ref('');
  const weatherDetail = ref({
    weather: '',
    tempMax: '',
    tempMin: '',
    wind: '',
    humidity: '',
  });
  const city = ref('');

  return {
    firstName,
    lastName,
    todayDate,
    weatherDetail,
    city,
  };
});
