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

// 必須の引数を宣言する-----------------------------------
function _require() {
    throw new Error('引数が不足しています');
}

function hoge() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _require();

    return value;
}

console.log(hoge(5)); // 5
console.log(hoge()); // Error: 引数が不足してい

// エラー　----------------------------------------------
function multi() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : b;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

    return a * b;
}

console.log(multi()); // 結果：ReferenceError: b is not defineds  

/* ====== 引数のデフォルト：ES2015 ====== */

/* ====== 可変引数の関数を定義：ES2015 ====== */
// ES2015では、仮引数の前に「...」（ピリオド3個）を付与することで、
// 可変長引数となります（英語ではRest Parameterと表記されています）。 
function sum() {
    var result = 0;

    for (var _len = arguments.length, nums = Array(_len), _key = 0; _key < _len; _key++) {
        nums[_key] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = nums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var num = _step.value;

            if (typeof num !== 'number') {
                throw new Error('指定値が数値ではありません：' + num);
            }
            result += num;
        }
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

    return result;
}

try {
    console.log(sum(1, 3, 5, 7, 9));
} catch (e) {
    console.log(e.message);
}

// 「...」演算子は、実引数で利用することで、
// 配列（正確にはfor...ofブロックで処理できるオブジェクト）を個々の値に展開できます。
console.log(Math.max(15, -3, 78, 1)); // 結果：78 
console.log(Math.max([15, -3, 78, 1])); // 結果：NaN 
console.log(Math.max.apply(null, [15, -3, 78, 1])); // 結果：78
console.log(Math.max.apply(Math, [15, -3, 78, 1])); // 結果：78
/* ====== 可変引数の関数を定義：ES2015 ====== */

/* ====== 名前付き引数でコードを読みやすくする：ES2015 ====== */
// 分割代入を利用するできるようになった
// {プロパティ名 = デフォルト値, ... }の形式で宣言することで、
// オブジェクトとして渡された引数を分解して、関数の配下では個別の引数としてアクセスできる 
function getTriangle(_ref) {
    var _ref$base = _ref.base,
        base = _ref$base === undefined ? 1 : _ref$base,
        _ref$height = _ref.height,
        height = _ref$height === undefined ? 1 : _ref$height;

    return base * height / 2;
}

console.log(getTriangle({ base: 5, height: 4 })); // 結果：10 


// オブジェクトから特定のプロパティを取得する
function show(_ref2) {
    var name = _ref2.name;

    console.log(name);
};

var member = {
    mid: 'Y0001',
    name: '山田太郎',
    address: 't_yamada@example.com'
};

show(member); // 結果：山田太郎

/* ====== 名前付き引数でコードを読みやすくする：ES2015 ====== */