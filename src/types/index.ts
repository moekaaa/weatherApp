// ユニオン型というタイプ定義
export type WEEK_DAY_TYPE = 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat';

// TODO: ここの値は間違ってるかも？
type WEATHER_EN = "Sunny" | "Clouds" | "Rain" | "Snowy";

type WEATHER_JP = "晴れ" | "曇り" | "雨" | "雪";

// Record型というタイプ定義
// {key: value}というオブジェクトの定義に使われる
export type WEATHER_TYPE = Record<WEATHER_EN, WEATHER_JP>;

