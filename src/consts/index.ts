import { WEATHER_TYPE, WEEK_DAY_TYPE } from "../types";

export const WEEK_DAY: Record<number, WEEK_DAY_TYPE> = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};

export const WEATHER: WEATHER_TYPE = {
  Sunny: "晴れ",
  Clouds: "曇り",
  Rain: "雨",
  Snowy: "雪",
  undefined: "不明",
};
