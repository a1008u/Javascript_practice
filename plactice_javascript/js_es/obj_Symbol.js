'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* 基本データ型を扱う */
// Symbolオブジェクト(ES2015)

// Symbolとは、名前のとおり、シンボル（モノの名前）を作成するための型
// 文字列/数値への暗黙的な型変換はできない
// boolean方への変更のみ可能
// 主に列挙型として扱う

var sym1 = Symbol('sym');
var sym2 = Symbol('sym');

console.log(typeof sym1 === 'undefined' ? 'undefined' : _typeof(sym1)); // 結果：symbol
console.log(sym1.toString); // 結果：[Function: toString]
console.log(sym1 === sym2); // 結果：false

// console.log(sym1 + '');     // 結果：Cannot convert a Symbol value to a string
// console.log(sym1 - 0);      // 結果：Cannot convert a Symbol value to a number
console.log(_typeof(!!sym1)); // 結果：boolean

var MONDAY = Symbol();
var TUESDAY = Symbol();
var WENDESDAY = Symbol();
var THURESDAY = Symbol();
var FRIDAY = Symbol();
var SATURDAY = Symbol();
var SUNDAY = Symbol();

var week = "MONDAY";
if (week === MONDAY) {
    console.log(true);
}
var week2 = MONDAY;
if (week2 === MONDAY) {
    console.log(true);
}