import { WEEK_DAY } from '../consts';
// Review: ファイルとフォルダの名前を合わせる
import { useUserStore } from '../stores';

import { WEATHER } from '../../consts';
import { WEATHER_EN } from '../../types';

// Review: useUserStoreという名前に変更(../stores/index.tsのファイルではこの名前で定義されている)
const useStore = useUserStore();
const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

// Review: https://zenn.dev/sa2knight/books/storybook-7-with-vue-3/viewer/pinia
// Review: このサイトがわかりやすそう→getterとsetterしなくてもよい書き方だとSecurityてきに問題ありますか？
//これが使えそう？　→　https://pinia.vuejs.org/introduction.html

// この関数もmodules/に移動
async function fetchWeather(city): Promise<void> {

//   const response = await fetch(
//     // Review: cityという変数は、../stores/index.tsで定義されているから、ここからだとscope外
//     // Review: useData.<変数名>でpiniaのデータを引っ張ってこられる
    apiUrl + useUserStore.city.valueOf + '&appid=' + apiKey + '&units=metric'
//   );

//   // 天気の情報が返ってこなかった時(存在しない都市の名前の入力時)の処理を追加(エラーハンドリング)
//   // try catch文を使用する
  try {
//     const data = await response.json();

//     // Review: これもスコープ外なので適切な形でpiniaを利用する
//     useUserStore.weatherDetail.value.weather =
//       '天気: ' + useUserStore.WEATHER[data.weather[0].main as useUserStore.WEATHER_EN];
//       useUserStore.weatherDetail.value.temp_max = Math.round(data.main.temp_max) + '°C';
//       useUserStore.weatherDetail.value.temp_min = Math.round(data.main.temp_min) + '°C';
//       useUserStore.weatherDetail.value.wind = '風速: ' + data.wind.speed + 'km/h';
//       useUserStore.weatherDetail.value.humidity = '湿度: ' + data.main.humidity + '%';

// /* 
//       useWeatherData.weatherDetail.weather = useWeatherData.weatherDetail.weather;
//       useWeatherData.weatherDetail.temp_max = useWeatherData.weatherDetail.temp_max;
//       useWeatherData.weatherDetail.temp_min = useWeatherData.weatherDetail.weather;
//       useWeatherData.weatherDetail.wind = useWeatherData.weatherDetail.temp_min;
//       useWeatherData.weatherDetail.humidity = useWeatherData.weatherDetail.humidity;
//       isDataFetched.value = true; */

//     if (!data) return;
    } catch {
//     return;
   }
 }


async function fetchWeather(): Promise<void> {
  // .env ファイルから apiUrl と apiKey をロードする
  const apiUrl = process.env.VUE_APP_API_URL;
  const apiKey = process.env.VUE_APP_API_KEY;

  // useUserStore から city を取得する
  const city = useUserStore.city.value;

  // fetch を使って天気情報を取得する
  const response = await fetch(
    apiUrl + city + '&appid=' + apiKey + '&units=metric'
  );

  try {
    const data = await response.json();

    // useWeatherData を使って天気情報を更新する
    useWeatherData.weatherDetail.weather =
      '天気: ' + useWeatherData.WEATHER[data.weather[0].main as useWeatherData.WEATHER_EN];
    useWeatherData.weatherDetail.temp_max = Math.round(data.main.temp_max) + '°C';
    useWeatherData.weatherDetail.temp_min = Math.round(data.main.temp_min) + '°C';
    useWeatherData.weatherDetail.wind = '風速: ' + data.wind.speed + 'km/h';
    useWeatherData.weatherDetail.humidity = '湿度: ' + data.main.humidity + '%';

    // データ取得が完了したことを示すフラグを設定する
    useWeatherData.isDataFetched.value = true;
  } catch (error) {
    console.error('天気情報の取得中にエラーが発生しました:', error);
  }
}


export function getTodayDate(): string {
  // Tempoという日付管理ライブラリが便利そう、、
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekDayNum = date.getDay(); // 曜日を数値で取得する
  const weekDayName = WEEK_DAY[weekDayNum]; // 曜日を文字列に変換
  const dateString = `${month}月${day}日(${weekDayName})`; // テンプレート文字列を使って日付を作成
  return dateString;
}


