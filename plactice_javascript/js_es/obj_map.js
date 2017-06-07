'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* 基本データ型を扱う */
// 集合を管理/操作を扱う(Map_es2015)

var m1 = new Map();
m1.set('dog', 'わんわん');
m1.set('cat', 'ニヤー');
m1.set('mouse', 'チュー');

/* 結果：3
 * 結果：わんわん
 * 結果：true
 */
console.log(m1.size);
console.log(m1.get('dog'));
console.log(m1.has('cat'));

/* 結果： dog cat mouse*/
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = m1.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;

        console.log(key);
    }

    /* 結果： わんわん ニヤー チュー*/
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = m1.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var value = _step2.value;

        console.log(value);
    }

    /* 結果： わんわん ニヤー チュー*/
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = m1[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _step3$value = _slicedToArray(_step3.value, 2),
            _key = _step3$value[0],
            _value = _step3$value[1];

        console.log(_value);
    }
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

m1.delete('dog');
console.log(m1.size); //結果：2

m1.clear();
console.log(m1.size); //結果：0


/* オブジェクトリテラルとの違い
（1）任意の型でキーを設定できる
オブジェクトリテラルでは、
あくまでプロパティ名をキーとして代替していたので、
キーとして利用できるのは文字列だけでした。
しかし、Mapオブジェクトでは任意の型をキーとして利用できます。
たとえば、オブジェクトやNaNすら、キーになりえます。

（2）マップのサイズを取得できる
Mapオブジェクトではsizeプロパティを使って、登録されたキー／値の個数を取得できます。
しかし、オブジェクトリテラルでは、そうしたしくみはありません。
for...inループなどでオブジェクトを走査し、手動でカウントする必要があります。

（3）クリーンなマップを作成できる
オブジェクトリテラルは、その実体はObjectオブジェクトです。
配下には、Objectオブジェクトが標準で用意しているプロパティ（キー）が最初から存在します。
空のオブジェクトリテラルを作成した時点で、すでに空ではないということです。
Mapオブジェクトはそれ専用のオブジェクトなので、完全に空の連想配列を生成できます。

Mapの特徴
1）キーは「===」演算子で比較される
2）特別なNaNは特別ではない(Mapの世界では、例外的にNaN === NaNと見なされます)
3）オブジェクトの比較には要注意(参照先が異なるため)

*/