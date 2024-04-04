// ユニオン型というタイプ定義
export type WEEK_DAY_TYPE = '日' | '月' | '火' | '水' | '木' | '金' | '土';

export type WEATHER_EN =
  | 'Sunny'
  | 'Clouds'
  | 'Rain'
  | 'Mist'
  | 'Snowy'
  | 'undefined';

type WEATHER_JP = '晴れ' | '曇り' | '雨' | '霧雨' | '雪' | '不明';

// Record型というタイプ定義
// {key: value}というオブジェクトの定義に使われる
export type WEATHER_TYPE = Record<WEATHER_EN, WEATHER_JP>;

// Mapped Typesを使った書き方
// export type WEATHER_TYPE = {
//   [key in WEATHER_EN]: WEATHER_JP
// }

export type TIPS_FOR_TODAY = Record<number, string>;

export type TODO = {
  id: string;
  todoText: string;
  isDone: boolean;
  createdAt: Date;
};

export type MEMBER = {
  id: number;
  name: string;
  age: number;
};
