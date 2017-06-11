'use strict';

var _templateObject = _taggedTemplateLiteral(['\u3053\u3093\u306B\u3061\u306F\u3001', '\u3055\u3093!'], ['\u3053\u3093\u306B\u3061\u306F\u3001', '\u3055\u3093!']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* ====== 高度な関数：ES2015 ====== */

/* ====== タグ付きテンプレート文字列：ES2015 ====== */
// 与えられた文字列をエスケープ処理
function escapeHtml(str) {
    if (!str) {
        return '';
    }
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/"/g, '&quot;');
    str = str.replace(/'/g, '&#39;');
    return str;
}

// 分解されたtemplatesとvaluesを順に連結(valuesはescapHtml関数でエスケープ)
function e(templates) {
    var result = '';

    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
    }

    for (var _i = 0, len = templates.length; _i < len; _i++) {
        result += templates[_i] + escapeHtml(values[_i]);
    }
    return result;
}

// テンプレート文字列をエスケープ処理
var name = '<"Mario" & \'Luigi\'>';
console.log(e(_templateObject, name));
/* ====== タグ付きテンプレート文字列：ES2015 ====== */

/* ====== スコープチェーン ====== */
/*
【Globalオブジェクト（グローバルオブジェクト）】
「グローバル変数やグローバル関数を管理するための＜便宜的な＞オブジェクト」です。
グローバル変数やグローバル関数は「グローバルオブジェクトのプロパティやメソッドである」

【Activation Object（通称、Callオブジェクトとも）】
ローカル変数はActivation Object（通称、Callオブジェクトとも）のプロパティなのです。
Callオブジェクトとは、「関数呼び出しの都度、内部的に自動生成されるオブジェクト」のこと。
グローバルオブジェクト同様、「関数内で定義されたローカル変数を管理するための＜便宜的な＞オブジェクト」
＊argumentsプロパティもCallオブジェクトのプロパティなのです。

【スコープチェーン】
グローバルオブジェクト、Callオブジェクトを生成の順に連結したリストのことをいいます。
*/

var y = 'Global';

function outerFunc() {
    var y = 'Local Outer';

    function innerFunc() {
        var z = 'Local Inner';
        console.log(z); // 結果：Local Inner
        console.log(y); // 結果：Local Outer
        // console.log(x);     // 結果：エラー（変数xは未定義）
    }

    innerFunc(); // innerFunc関数の呼び出し
}

outerFunc(); // outerFunc関数の呼び出し
console.log(y); // 結果：Global
/* ====== スコープチェーン ====== */

/* ====== クロージャ ====== */
// 1〜3はクロージャにおけるスコープを表す
// 2.closure関数のcallオブジェクト
function closure(init) {
    var counter = init;

    // 3.匿名クラス
    return function () {
        return ++counter;
    };
}

// 1.グローバルオブジェクト
var myClousure = closure(1);
var myClousure2 = closure(100);

for (var i = 1; i < 4; i++) {
    console.log('myClousure' + i + '回目 ：' + myClousure());
    console.log('myClousure' + i + '回目 ：' + myClousure2());
}

/* ====== クロージャー ====== */