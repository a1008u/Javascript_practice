"use strict";

/* 基本データ型を扱う */
// 計算を扱う(Mathオブジェクト)

console.log("絶対値 ： " + Math.abs(-100)); // 結果：100

// clz32(num) 32ビットバイナリにおいて前にある0ビットの個数
console.log(Math.clz32(1)); // 結果：31

console.log(Math.min(20, 40, 60)); // 結果：20
console.log(Math.max(20, 40, 60)); // 結果：60
console.log(Math.pow(5, 3)); // 結果：125
console.log(Math.random()); // 結果：0.13934720965325398

// sign(num) 指定した値が正数の場合は1、負数の場合は-1、0の場合は0
console.log(Math.sign(-100)); // 結果：-1

// ceil(num) 引数の小数点の切り上げ
console.log(Math.ceil(1234.56)); // 結果：1235
console.log(Math.ceil(-1234.56)); // 結果：-1234

// floor(num) 引数の小数点の切り捨て
console.log(Math.floor(1234.56)); // 結果：1234
console.log(Math.floor(-1234.56)); // 結果：-1235

// round(num) 四捨五入
console.log(Math.round(1234.56)); // 結果：1235
console.log(Math.round(-1234.56)); // 結果：-1235

// trunc(num) 少数部分を単純に切り捨てる
console.log(Math.trunc(1234.56)); // 結果：1234
console.log(Math.trunc(-1234.56)); // 結果：-1234

// sqrt(num)　平方根
console.log(Math.sqrt(81)); // 結果：9

// cbrt(num) 立方根
console.log(Math.cbrt(81)); // 結果：4.326748710922225”

// hyport(num1,num2...)引数の二乗和の平方根
console.log(Math.hypot(3, 4)); // 結果：5

// コサイン, サイン, タンジェント
console.log(Math.cos(1)); // 結果：0.5403023058681398
console.log(Math.sin(1)); // 結果：0.8414709848078965
console.log(Math.tan(1)); // 結果：1.5574077246549023

// 2変のアークタンジェント
console.log(Math.atan2(1, 3)); // 結果：0.3217505543966422

// log(num) 自然対数
console.log(Math.log(10)); // 結果：2.302585092994046

// exp(num) 指数関数
console.log(Math.exp(3)); // 結果：20.085536923187668
console.log(Math.expm1(1)); // 結果：1.718281828459045