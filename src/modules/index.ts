import {WEEK_DAY} from "../consts"

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