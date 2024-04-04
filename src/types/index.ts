// ユニオン型というタイプ定義
<<<<<<< HEAD
export type WEEK_DAY_TYPE =
  | "日"
  | "月"
  | "火"
  | "水"
  | "木"
  | "金"
  | "土";

export type WEATHER_EN = "Sunny" | "Clouds" | "Rain" | "Mist" |"Snowy" | "undefined";

type WEATHER_JP = "晴れ" | "曇り" | "雨" | "霧雨" | "雪" | "不明";
=======
export type WEEK_DAY_TYPE = '日' | '月' | '火' | '水' | '木' | '金' | '土';

export type WEATHER_EN =
  | 'Sunny'
  | 'Clouds'
  | 'Rain'
  | 'Mist'
  | 'Snowy'
  | 'undefined';

type WEATHER_JP = '晴れ' | '曇り' | '雨' | '霧雨' | '雪' | '不明';
>>>>>>> ea4bf7e982fb662775d8789ee0bdb29a6a4c572d

// Record型というタイプ定義
// {key: value}というオブジェクトの定義に使われる
export type WEATHER_TYPE = Record<WEATHER_EN, WEATHER_JP>;

// Mapped Typesを使った書き方
// export type WEATHER_TYPE = {
//   [key in WEATHER_EN]: WEATHER_JP
// }

export type TIPS_FOR_TODAY = Record<number, string>;

export type TODO = {
<<<<<<< HEAD
  id: number;
  todoText: string;
  isDone: boolean;
  createdAt: Date;
}
=======
  id: string;
  todoText: string;
  isDone: boolean;
  createdAt: Date;
};
>>>>>>> ea4bf7e982fb662775d8789ee0bdb29a6a4c572d

export type MEMBER = {
  id: number;
  name: string;
  age: number;
<<<<<<< HEAD
}
=======
};
>>>>>>> ea4bf7e982fb662775d8789ee0bdb29a6a4c572d
