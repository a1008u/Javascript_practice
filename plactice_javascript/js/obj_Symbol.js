/* 基本データ型を扱う */
// Symbolオブジェクト(ES2015)

// Symbolとは、名前のとおり、シンボル（モノの名前）を作成するための型
// 文字列/数値への暗黙的な型変換はできない
// boolean方への変更のみ可能
// 主に列挙型として扱う

let sym1 = Symbol('sym');
let sym2 = Symbol('sym');

console.log(typeof sym1);   // 結果：symbol
console.log(sym1.toString); // 結果：[Function: toString]
console.log(sym1 === sym2); // 結果：false

// console.log(sym1 + '');     // 結果：Cannot convert a Symbol value to a string
// console.log(sym1 - 0);      // 結果：Cannot convert a Symbol value to a number
console.log(typeof !!sym1); // 結果：boolean

const MONDAY = Symbol();
const TUESDAY = Symbol();
const WENDESDAY = Symbol();
const THURESDAY = Symbol();
const FRIDAY = Symbol();
const SATURDAY = Symbol();
const SUNDAY = Symbol();

var week = "MONDAY";
if (week === MONDAY) {
    console.log(true);
}
var week2 = MONDAY;
if (week2 === MONDAY) {
    console.log(true);
}