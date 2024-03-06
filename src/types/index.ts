export type WEEK_DAY_TYPE = 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat';

// TODO: ここの値は間違ってるかも？
type WEATHER_EN = "sunny" | "Clouds" | "rain" | "snowy";

type WEATHER_JP = "晴れ" | "曇り" | "雨" | "雪";

export type WEATHER_TYPE = Record<WEATHER_EN, WEATHER_JP>;

