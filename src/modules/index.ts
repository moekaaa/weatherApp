import { WEEK_DAY } from '../consts';
// Review: ファイルとフォルダの名前を合わせる
import { useWeatherDataStore } from '../stores';

 import { WEATHER } from '../consts';
 import { WEATHER_EN } from '../types';



// Review: useUserStoreという名前に変更(../stores/index.tsのファイルではこの名前で定義されている)

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

// Review: https://zenn.dev/sa2knight/books/storybook-7-with-vue-3/viewer/pinia
// Review: このサイトがわかりやすそう→getterとsetterしなくてもよい書き方だとSecurityてきに問題ありますか？
//これが使えそう？　→　https://pinia.vuejs.org/introduction.html

export const getWeatherData = async () => {
// useWeatherData を使って天気情報を更新する
  //useWeatherData.today = new Date().toLocaleDateString();
 // useWeatherData.city = useWeatherData.CITY[useWeatherData.cityIndex]; 
    const weatherDataStore = useWeatherDataStore();

   // fetch を使って天気情報を取得する
    const response = await fetch(
      apiUrl + weatherDataStore.city + '&appid=' + apiKey + '&units=metric'  
    );
    try {
      const data = await response.json();
 
      // useWeatherData を使って天気情報を更新する
      weatherDataStore.weatherDetail.weather =
        '天気: ' + WEATHER[data.weather[0].main as WEATHER_EN];
      weatherDataStore.weatherDetail.tempMax = Math.round(data.main.temp_max) + '°C';
      weatherDataStore.weatherDetail.tempMin = Math.round(data.main.temp_min) + '°C';
      weatherDataStore.weatherDetail.wind = '風速: ' + data.wind.speed + 'km/h';
      weatherDataStore.weatherDetail.humidity = '湿度: ' + data.main.humidity + '%';
 
 //     // データ取得が完了したことを示すフラグを設定する
 //     useWeatherData.isDataFetched.value = true;
    } catch (error: unknown) {
      // errorをanyかunknown型にする違いを調べてみてください
      // if(something instanceof type)という書き方は、タイプガードと言って、errorはError型の時のみ実行する
      if (error instanceof Error) throw new Error("Error: " + error.message);
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


