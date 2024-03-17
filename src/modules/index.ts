import {WEEK_DAY} from "../consts"



export async function fetchWeather (): Promise<void> {
  // TODO_Moeka: urlとapiKeyを.envファイルからロード(dotenvライブラリ)
  const response = await fetch(
    import.meta.env.WEATHER_API_KEY + city.value + "&appid=" + import.meta.env.WEATHER_API_KEY + "&units=metric"
  );

  // TODO_Moeka: 天気の情報が返ってこなかった時(存在しない都市の名前の入力時)の処理を追加(エラーハンドリング)
  // try catch文を使用する

  const data = await response.json();

  if (!data) return;

  weatherDetail.value.weather =
    "天気: " + WEATHER[data.weather[0].main as WEATHER_EN];
  weatherDetail.value.temp_max = Math.round(data.main.temp_max) + "°C";
  weatherDetail.value.temp_min = Math.round(data.main.temp_min) + "°C";
  weatherDetail.value.wind = "風速: " + data.wind.speed + "km/h";
  weatherDetail.value.humidity = "湿度: " + data.main.humidity + "%";

  isDataFetched.value = true;
}

export function getTodayDate (): string {
    // TODO_Moeka: Tempoという日付管理ライブラリが便利そう、、
    const date = new Date();
    const month = (date.getMonth() + 1);
    const day = date.getDate();
    const weekDayNum = date.getDay(); // 曜日を数値で取得する
    const weekDayName = (WEEK_DAY[weekDayNum]); // 曜日を文字列に変換
    const dateString = `${month}月${day}日(${weekDayName})`; // テンプレート文字列を使って日付を作成
    return dateString
}