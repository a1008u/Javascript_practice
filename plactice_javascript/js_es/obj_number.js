'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* 基本データ型を扱う */
// 数値を扱う(Numberオブジェクト)

//　-定数-
//　・POSITIVE_INFINITY／NEGATIVE_INFINITY（無限大）
//　ある演算の結果がJavaScriptで表現可能な数値の範囲を超えた場合の戻り値
// 
//　・NaN（Not a Number）
// 「0を0で除算した」など不正な演算が行われた場合などに、
//  数値として表現できない結果を表すために使用
//  自分自身を含むすべての数値と等しくないという性質がある

console.log(Number.MAX_SAFE_INTEGER); // 結果：9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1); // 結果：9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2); // 結果：9007199254740992（不正）

var num1 = 255;
console.log(num1.toString(16)); // 結果：ff”
console.log(num1.toString(8)); // 結果：377

var num2 = 123.45678;
console.log(num2.toExponential(2)); // 結果：1.23e+2
console.log(num2.toFixed(3)); // 結果：123.457
console.log(num2.toFixed(7)); // 結果：123.4567800
console.log(num2.toPrecision(10)); // 結果：123.4567800
console.log(num2.toPrecision(6)); // 結果：123.457”

var num3 = '123xxxx';
console.log(Number(num3)); // 結果：NaN
console.log(Number.parseFloat(num3)); // 結果：123
console.log(Number.parseInt(num3)); // 結果：123

var num4 = new Date();
console.log(Number(num4)); // 結果：1496469515956
console.log(Number.parseFloat(num4)); // 結果：NaN
console.log(Number.parseInt(num4)); // 結果：NaN

var num5 = '0x10';
console.log(Number(num5)); // 結果：16
console.log(Number.parseFloat(num5)); // 結果：0
console.log(Number.parseInt(num5)); // 結果：16

var num6 = '0b11';
console.log(Number(num6)); // 結果：3
console.log(Number.parseFloat(num6)); // 結果：0
console.log(Number.parseInt(num6)); // 結果：0

var num7 = '1.01e+2';
console.log(Number(num7)); // 結果：101
console.log(Number.parseFloat(num7)); // 結果：101
console.log(Number.parseInt(num7)); // 結果：1

var num8 = 123;
console.log(_typeof(num8 + '')); // 結果：string  ← ❶
console.log(_typeof(String.toString(num8) - 0)); // 結果：number  ← ❷
console.log(!!num8); // 結果：true”