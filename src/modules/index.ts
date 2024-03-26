import {
  CHEERUP_FOR_EVEN_NUMBER_MONTH,
  CHEERUP_FOR_ODD_NUMBER_MONTH,
  WEEK_DAY,
} from '../consts';
// Review: ファイルとフォルダの名前を合わせる
import { useWeatherDataStore } from '../stores';

import { WEATHER } from '../consts';
import { WEATHER_EN } from '../types';

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

export const getWeatherData = async () => {
  // useWeatherData を使って天気情報を更新する
  //useWeatherData.today = new Date().toLocaleDateString();
  // useWeatherData.city = useWeatherData.CITY[useWeatherData.cityIndex];
  const weatherDataStore = useWeatherDataStore();

  const url =
    apiUrl + weatherDataStore.city + '&appid=' + apiKey + '&units=metric';

  // fetch を使って天気情報を取得する
  const response = await fetch(url);
  try {
    const data = await response.json();

    // useWeatherData を使って天気情報を更新する
    weatherDataStore.weatherDetail.weather =
      '天気: ' + WEATHER[data.weather[0].main as WEATHER_EN];
    weatherDataStore.weatherDetail.tempMax =
      Math.round(data.main.temp_max) + '°C';
    weatherDataStore.weatherDetail.tempMin =
      Math.round(data.main.temp_min) + '°C';
    weatherDataStore.weatherDetail.wind = '風速: ' + data.wind.speed + 'km/h';
    weatherDataStore.weatherDetail.humidity =
      '湿度: ' + data.main.humidity + '%';

    //     useWeatherData.isDataFetched.value = true;
  } catch (error: unknown) {
    // errorをanyかunknown型にする違いを調べてみてください
    // if(something instanceof type)という書き方は、タイプガードと言って、errorはError型の時のみ実行する
    if (error instanceof Error) throw new Error('Error: ' + error.message);
  }
};

export function getTodayDate(): string {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekDayNum = date.getDay(); // 曜日を数値で取得する
  const weekDayName = WEEK_DAY[weekDayNum]; // 曜日を文字列に変換
  const dateString = `${month}月${day}日(${weekDayName})`; // テンプレート文字列を使って日付を作成
  return dateString;
}

export const getCheerUpMessage = () => {
  const newDate = new Date();
  const month = newDate.getMonth() + 1;
  const date = newDate.getDate();
  if (month % 2 === 0) {
    return CHEERUP_FOR_EVEN_NUMBER_MONTH[date];
  } else {
    return CHEERUP_FOR_ODD_NUMBER_MONTH[date];
  }
};
