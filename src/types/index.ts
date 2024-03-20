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

export type TIPS_FOR_TODAY = 
1 | 
2 | 
3 | 
4 | 
5 | 
6 | 
7 | 
8 | 
9 | 
10 | 
11 | 
12 | 
13 | 
14 | 
15 | 
16 | 
17 | 
18 | 
19 | 
20 | 
21 | 
22 | 
23 | 
24 | 
25 | 
26 | 
27 | 
28 | 
29 | 
30 | 
31 ; 


// Record型というタイプ定義
// {key: value}というオブジェクトの定義に使われる
export type WEATHER_TYPE = Record<WEATHER_EN, WEATHER_JP>;

export type TIPS_FOR_TODAY_ODD = Record<number, string>;

export type TIPS_FOR_TODAY_EVEN = Record<number, string>;

// Mapped Typesを使った書き方
// export type WEATHER_TYPE = {
//   [key in WEATHER_EN]: WEATHER_JP
// }