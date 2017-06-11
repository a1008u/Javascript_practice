'use strict';

/* ====== 引数のデフォルト：ES2015 ====== */
// 【------- ES2015以前 -------】
function getTriangle() {
    var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return base * height / 2;
}
console.log(getTriangle(5)); // 結果：2.5

// 【-------ES2015 -------】
// ほかの引数をデフォルト値とする場合、
// 参照できるのは、自身より前に定義されたものだけである点 
function multi(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : a;

    return a * b;
}
console.log(multi(10, 5)); // 結果：50
console.log(multi(3)); // 結果：9（引数bの値はaと同じ3）

// デフォルト値が適用される場合、されない場合
console.log(getTriangle(5, null)); // 結果：0
console.log(getTriangle(5, undefined)); // 結果：2.5 

function _require() {
    throw new Error('引数が不足しています');
}

function hoge() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _require();

    return value;
}

console.log(hoge(5));
console.log(hoge());

// エラー
function multi() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : b;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

    return a * b;
}

console.log(multi()); // 結果：ReferenceError: b is not defineds  

/* ====== 引数のデフォルト：ES2015 ====== */