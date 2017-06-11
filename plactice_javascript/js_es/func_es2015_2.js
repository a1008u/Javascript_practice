'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* ====== 関数呼び出しと戻り値：ES2015 ====== */

/* ====== 複数の戻り値を個別の変数に代入する：ES2015 ====== */
// 利用：関数から複数の値を返したい」というケースはよくあります。
function getMaxMin() {
    return [Math.max.apply(Math, arguments), Math.min.apply(Math, arguments)];
}

var result = getMaxMin(10, 35, -5, 78, 0);
console.log(result); // 結果：[78, -5]

var _getMaxMin = getMaxMin(10, 35, -5, 78, 0),
    _getMaxMin2 = _slicedToArray(_getMaxMin, 2),
    max = _getMaxMin2[0],
    min = _getMaxMin2[1];

var _getMaxMin3 = getMaxMin(10, 35, -5, 78, 0),
    _getMaxMin4 = _slicedToArray(_getMaxMin3, 2),
    min2 = _getMaxMin4[1];

console.log(max); // 結果：78
console.log(min); // 結果：-5
console.log(min2); // 結果：-5
/* ====== 複数の戻り値を個別の変数に代入する：ES2015 ====== */

/* ====== 関数自身を再帰的に呼び出す：ES2015 ====== */
function factorial(n) {
    if (n != 0) {
        return n * factorial(n - 1);
    }
    return 1;
}

console.log(factorial(5)); // 結果：120

// 【関数の引数も関数 - 高階関数 -】
// 関数そのものもまた、ほかの数値型や文字列型などと同様、関数の引数として引き渡したり、
// 戻り値として返したりすることができるということです。
// そして、そのように「関数を引数、戻り値として扱う関数」のことを高階関数と呼びます。 

// 高階関数arrayWalkを定義--------------------------------
function arrayWalk(data, f) {
    for (var key in data) {
        f(data[key], key);
    }
}

// 配列を処理するためのユーザー定義関数
/*コールバック関数*/
function showElement(value, key) {
    console.log(key + '：' + value);
}

var ary = [1, 2, 4, 8, 16];
console.log('----showElementの結果----');
arrayWalk(ary, showElement);

// sumElement2を指定するだけで、挙動を変更することができる
// 結果値を格納するためのグローバル変数
var result3 = 0;
function sumElement2(value, key) {
    // 与えられた配列要素で変数resultを加算
    result3 += value;
}

var ary2 = [1, 2, 4, 8, 16];
arrayWalk(ary2, sumElement2);
console.log('----showElement2の結果----');
console.log('合計値：' + result3); // 結果：31      

// 使い捨ての関数(匿名関数)を利用(sumElementメソッドを利用しない)
console.log('----showElement3の結果----');
var ary3 = [1, 2, 4, 8, 16];
arrayWalk(ary3, function (value, key) {
    console.log(key + '：' + value);
});

/* ====== 関数自身を再帰的に呼び出す：ES2015 ====== */