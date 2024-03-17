import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const fname = ref('')
  const lname = ref('')
  const weatherDetail = ref({
    weather: '',
    temp_max: '',
    temp_min: '',
    wind: '',
    humidity: ''
  })
  const city = ref('')

  return { fname, lname, weatherDetail, city }
})
