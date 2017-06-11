'use strict';

/*
JSの関数の種類
    1,標準の関数
    2,ユーザー定義関数
        2-1,function命令で定義する
        2-2,Functionコンストラクター経由で定義する
        2-3,関数リテラル表現で定義する
        2-4,アロー関数で定義する ES2015
*/

// 2-1,function命令で定義する============================================
/* 構文
 * function 関数名(引数, ...) {
 *    ...任意の処理...
 *    return 戻り値;
 * }
 * functon命令はコードを解析／コンパイルするタイミングで、関数を登録している。
 * 実行時にはすでにコード内の構造の一部としているため、関数をどこからでも呼び出すことができる。
 */
function getTriangle(base, height) {
    return base * height / 2;
}

console.log('三角形の面積：' + getTriangle(5, 2)); // 結果：5


// 2-2,Functionコンストラクター経由で定義する=============================
// 原則
// JavaScriptの関数はfunction命令、または後述する関数リテラル／アロー関数で定義する
/* JavaScriptでは組み込みオブジェクトとしてFunctionオブジェクトを用意しています
 * 関数リテラル／Functionコンストラクターは実行時（代入時）に評価される(実行より前に関数を記載)
 * 構文
 * var 変数名 = new Function(引数,... ,関数の本体);
 */

var getTriangle2 = Function('base', 'height', 'return base * height / 2;');
var getTriangle3 = new Function('base', 'height', 'return base * height / 2;');
console.log('三角形の面積：' + getTriangle2(5, 2)); // 結果：5
console.log('三角形の面積：' + getTriangle3(5, 2)); // 結果：5

// Functionコンストラクターの特徴
// Functionコンストラクターでは、引数や関数本体を文字列として定義できる  
var param = 'height, width';
var formula = 'return height * width / 2;';
var diamond = new Function(param, formula);
console.log('菱形の面積：' + diamond(5, 2)); // 結果：5 


// 2-3,関数リテラル表現で定義する=========================================
/* JavaScriptにおいて関数はデータ型の一種です。
   つまり、文字列や数値と同じく、リテラルとして表現できるし、関数リテラルを変数に代入したり、
   ある関数の引数として渡したり、はたまた、戻り値として関数を返すことすら可能である
   関数リテラル／Functionコンストラクターは実行時（代入時）に評価される(実行より前に関数を記載)
*/
/* 関数リテラルの記法は、function命令によく似ていますが、以下の違いがあります。
    ・function命令 → 関数getTriangleを直接定義している
    ・関数リテラル → 「function(base,height) {...}」と名前のない関数を定義したうえで、変数getTriangleに格納している
    ＊関数リテラルは宣言した時点では、名前を持たないことから匿名関数、または無名関数と呼ばれることもあります。
*/

var getTriangle = function getTriangle(base, height) {
    return base * height / 2;
};
console.log('三角形の面積：' + getTriangle(5, 2)); // 結果：5


// 2-4,アロー関数で定義する ES2015========================================
/* アロー関数（Arrow Function）を利用することで、関数リテラルをよりシンプルに記述できます */
// 構文
// (引数,...) => { ...関数の本体... }
// 関数リテラル／Functionコンストラクターは実行時（代入時）に評価される(実行より前に関数を記載)

/*
    引数が1つの場合
    let getCircle = radius => radius * radius * Math.PI;
    引数がない場合
    let show = () => console.log('こんにちは、世界！'); 
    
    オブジェクトリテラルを返す場合は、必ず()で囲むこと
    let func = () => ({ hoge: 'ほげ' });
*/

var getTriangle5 = function getTriangle5(base, height) {
    return base * height / 2;
};

console.log('三角形の面積：' + getTriangle5(5, 2)); // 結果：5