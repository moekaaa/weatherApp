import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

//基本的に変数はここで管理するようにする
//イベント発生ごとにstoreで状態管理するようにしてvueファイルでも
//tsファイルでもstoreをimportして変数を使えるようにする


export const useUserStore = defineStore('user', () => {
  const fname = ref('')
  const lname = ref('')
  const today = ref('');
  const weatherDetail = ref({
    weather: '',
    temp_max: '',
    temp_min: '',
    wind: '',
    humidity: ''
  })
  const city = ref('')

  return { 
    fname, 
    lname, 
    today,
    weatherDetail, 
    city 
  }
})
