'use strict';

// グローバルスコープ：スクリプト全体から参照できる(関数の外で宣言した変数)
var scope = 'グローバル';

function getValue() {
    // ローカルスコープ：定義された関数内の中でのみ参照できる(関数の中で宣言した変数)
    var scope = 'ローカル';
    return scope;
    // ローカルスコープ：定義された関数内の中でのみ参照できる(関数の中で宣言した変数)
}

console.log(getValue()); // ローカル
console.log(scope); // グローバル
// グローバルスコープ：スクリプト全体から参照できる(関数の外で宣言した変数)

// =============================================================================
/*【varの説明】
    var命令を使わずに宣言された変数 → すべてグローバル変数と見なす 
    ＊var命令で定義された変数は、定義する場所によって変数のスコープが決まる
    【推奨】
    ・原則：変数はvar命令で宣言する
    【非推奨】
    ・ローカル変数を定義するには、必ずvar命令を使用する
    ・グローバル変数にはvar命令をつけず、ローカル変数にはvar命令をつける。
*/

scope2 = 'Global Variable';

function getValue() {
    scope2 = 'Local Variable';
    return scope2;
}
console.log(getValue()); // Local Variable
console.log(scope2); // Local Variable

// =============================================================================
/*【ローカル変数の有効範囲】
 * 原則：ローカル変数は関数の先頭で宣言する
 */
var scope3 = 'Global Variable';

function getValue() {
    // 結果：undefined(ローカル変数が有効になっているが未定義)
    // 変数の巻き上げ(hoisting)
    console.log(scope3);

    var scope3 = 'Local Variable';
    return scope3;
}

console.log(getValue()); // 結果：Local Variable
console.log(scope3); // 結果：Global Variable

// =============================================================================
// 【ブロックレベルのスコープ】
/* 1.ES2015以前：ブロックスコープがないため、即時関数を利用
 * 2.ES2015〜：let命令
 */

// 1.ES2015以前：ブロックスコープがないため、即時関数を利用
(function () {
    var x = 5;
    console.log(x);
}).call(undefined);
// console.log(x); エラー

// 2.ES2015〜：let命令
{
    var i = 5;
    console.log(i); // 結果：5
}
// console.log(i);     // 変数iはスコープ外なのでエラー

// =============================================================================
// 関数リテラル/FUnctionコンストラクターでのスコープの違い

var scope = 'Global Variable';

function checkScope() {
    var scope = 'Local Variable';

    // 関数リテラル
    var f_lit = function f_lit() {
        return scope;
    };
    console.log(f_lit()); // 結果：Local Variable

    // Functionコンストラクタ
    // Functionコンストラクターの配下の変数は、その宣言場所にかかわらず、常にグローバルスコープ
    var f_con = new Function('return scope;');
    console.log(f_con()); // 結果：Global Variable
}

checkScope();