import { ref } from 'vue';
import { defineStore } from 'pinia';
import { TODO, MEMBER } from '../types';

export const useTodoDataStore = defineStore('todo', () => {
  const todoList = ref<TODO[]>([
    {
      id: '',
      todoText: 'Todo1',
      isDone: false,
      createdAt: new Date(),
    },
  ]);

  return {
    todoList,
  };
});

export const useMemberDataStore = defineStore('member', () => {
  const memberList = ref<MEMBER[]>([
    {
      id: 1,
      name: 'Moeka',
      age: 26,
    },
  ]);

  return {
    memberList,
  };
});

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
  const weatherIcon = ref('');
  return {
    todayDate,
    weatherDetail,
    city,
    isDataFetched,
    weatherIcon,
  };
});

export const useUserDataStore = defineStore('user', () => {
  const firstName = ref('');
  const lastName = ref('');

  return {
    firstName,
    lastName,
  };
});

export const useAppSettings = defineStore('appSettings', () => {
  const isDarkMode = ref(true);

  return {
    isDarkMode,
  };
});
