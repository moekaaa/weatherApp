// ユニオン型というタイプ定義
export type WEEK_DAY_TYPE =
  | "Sun"
  | "Mon"
  | "Tue"
  | "Wed"
  | "Thu"
  | "Fri"
  | "Sat";

export type WEATHER_EN = "Sunny" | "Clouds" | "Rain" | "Snowy" | "undefined";

type WEATHER_JP = "晴れ" | "曇り" | "雨" | "雪" | "不明";

// Record型というタイプ定義
// {key: value}というオブジェクトの定義に使われる
export type WEATHER_TYPE = Record<WEATHER_EN, WEATHER_JP>;

// Mapped Typesを使った書き方
// export type WEATHER_TYPE = {
//   [key in WEATHER_EN]: WEATHER_JP
// }