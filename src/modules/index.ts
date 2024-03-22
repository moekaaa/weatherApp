import { WEEK_DAY } from '../consts';
// Review: ファイルとフォルダの名前を合わせる
import { useUserStore } from '../stores';

 import { WEATHER } from '../consts';
 import { WEATHER_EN } from '../types';



// Review: useUserStoreという名前に変更(../stores/index.tsのファイルではこの名前で定義されている)
const useWeatherData = useUserStore();

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

// Review: https://zenn.dev/sa2knight/books/storybook-7-with-vue-3/viewer/pinia
// Review: このサイトがわかりやすそう→getterとsetterしなくてもよい書き方だとSecurityてきに問題ありますか？
//これが使えそう？　→　https://pinia.vuejs.org/introduction.html

export const getWeatherData = async () => {
// useWeatherData を使って天気情報を更新する
  //useWeatherData.today = new Date().toLocaleDateString();
 // useWeatherData.city = useWeatherData.CITY[useWeatherData.cityIndex]; 

   // fetch を使って天気情報を取得する
   const response = await fetch(
    apiUrl + useWeatherData.city + '&appid=' + apiKey + '&units=metric'
     
    );
    try {
      const data = await response.json();
 
      // useWeatherData を使って天気情報を更新する
      useWeatherData.weatherDetail.weather =
        '天気: ' + WEATHER[data.weather[0].main as WEATHER_EN];
      useWeatherData.weatherDetail.temp_max = Math.round(data.main.temp_max) + '°C';
      useWeatherData.weatherDetail.temp_min = Math.round(data.main.temp_min) + '°C';
      useWeatherData.weatherDetail.wind = '風速: ' + data.wind.speed + 'km/h';
      useWeatherData.weatherDetail.humidity = '湿度: ' + data.main.humidity + '%';
 
 //     // データ取得が完了したことを示すフラグを設定する
 //     useWeatherData.isDataFetched.value = true;
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


