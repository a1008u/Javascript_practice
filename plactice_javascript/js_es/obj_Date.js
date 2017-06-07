'use strict';

/* 基本データ型を扱う */
// 日付/時刻データを操作する

var d1 = new Date();
var d2 = new Date('2016/12/04 20:07:15');
var d3 = new Date(2016, 11, 4, 20, 7, 15, 500);
var d4 = new Date(1480849635500);

var dat3 = new Date(2016, 11, 25, 11, 37, 15, 999);
console.log(dat3); // 結果：Sun Dec 25 2016 11:37:15 GMT+0900
console.log(dat3.getFullYear()); // 結果：2016
console.log(dat3.getMonth()); // 結果：11
console.log(dat3.getDate()); // 結果：25
console.log(dat3.getDay()); // 結果：0
console.log(dat3.getHours()); // 結果：11
console.log(dat3.getMinutes()); // 結果：37
console.log(dat3.getSeconds()); // 結果：15
console.log(dat3.getMilliseconds()); // 結果：999
console.log(dat3.getTime()); // 結果：1482633435999
console.log(dat3.getTimezoneOffset()); // 結果：-540

console.log(dat3.getUTCFullYear()); // 結果：2016
console.log(dat3.getUTCMonth()); // 結果：11
console.log(dat3.getUTCDate()); // 結果：25
console.log(dat3.getUTCDay()); // 結果：0
console.log(dat3.getUTCHours()); // 結果：2
console.log(dat3.getUTCMinutes()); // 結果：37
console.log(dat3.getUTCSeconds()); // 結果：15
console.log(dat3.getUTCMilliseconds()); // 結果：999

var dat2 = new Date();
dat2.setFullYear(2017);
dat2.setMonth(7); // 表示させたい月-1を設定
dat2.setDate(5);
dat2.setHours(11);
dat2.setMinutes(37);
dat2.setSeconds(15);
dat2.setMilliseconds(513);

console.log(dat2.toLocaleString()); // 結果：2017/8/5 11:37:15
console.log(dat2.toUTCString()); // 結果：Sat, 05 Aug 2017 02:37:15 GMT
console.log(dat2.toDateString()); // 結果：Sat Aug 05 2017
console.log(dat2.toTimeString()); // 結果：11:37:15 GMT+0900
console.log(dat2.toLocaleDateString()); // 結果：2017/8/5
console.log(dat2.toLocaleTimeString()); // 結果：11:37:15
console.log(dat2.toJSON()); // 2017-08-05T02:37:15.513Z

console.log(Date.parse('2016/11/05')); // 結果：1478271600000
console.log(Date.UTC(2016, 11, 5)); // 結果：1480896000000
console.log(Date.now()); // 結果：1465971930329”

// 日付/時刻値を加算または減算する
var dat2 = new Date(2017, 4, 15, 11, 40);
console.log(dat2.toLocaleString()); // 結果：2017/5/15 11:40:00
dat2.setMonth(dat2.getMonth() + 3); // 3ヶ月を加算
console.log(dat2.toLocaleString()); // 結果：2017/8/15 11:40:00
dat2.setDate(dat2.getDate() - 20); // 20日を減算  ← ❶
console.log(dat2.toLocaleString()); // 結果：2017/7/2
dat2.setDate(dat2.getDate() - 20); // 20日を減算  ← ❶
console.log(dat2.toLocaleString()); // 結果：2017/7/26 11:40:00

var dat3 = new Date(2017, 4, 15, 11, 40);
console.log(dat3.toLocaleString()); // 結果：2017/5/15 11:40:00
dat3.setMonth(dat3.getMonth() + 1); // 来月の…
dat3.setDate(0); // 0日目をセット
console.log(dat3.toLocaleString()); // 結果：2017/5/31 11:40:00

// 日付/時刻の差分を求める
var dat4 = new Date(2017, 4, 15); // 2017/05/15
var dat5 = new Date(2017, 5, 20); // 2017/06/20
var diff = (dat5.getTime() - dat4.getTime()) / (1000 * 60 * 60 * 24);
console.log(diff + '日の差があります。'); // 結果：36