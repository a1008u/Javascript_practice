"use strict";

/* 基本データ型を扱う */
// 重複しない値の集合を管理/操作を扱う(Set_es2015)

var s = new Set();
s.add(10);
s.add(5);
s.add(100);
s.add(50);

// 同値は無視される
s.add(5);

// 結果：true
console.log(s.has(100));
// 結果：4
console.log(s.size);

// 結果：10 5 100 50
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = s.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var val = _step.value;

        console.log(val);
    }

    // 結果：10 5 100 50
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
    for (var _iterator2 = s[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _val = _step2.value;

        console.log(_val);
    }
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

s.delete(100);
// 結果：3
console.log(s.size);

s.clear();
// 結果：0
console.log(s.size);

var s2 = new Set();
s2.add(NaN);
s2.add(NaN);
// 結果：1（同じ値は無視）
console.log(s2.size);

s2.add({});
s2.add({});
// 結果：3（異なるオブジェクトとして追加） 
console.log(s2.size);