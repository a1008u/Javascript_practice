/**
 * オブジェクト：オブジェクト自体が1つのもであり、中に含まれる要素は、
 * 　　　　　　　このモノの特性・状態(プロパティ)や動作(メソッド)を表す。
 * 　　　　　　　プロパティ　+　メソッド
 * オブジェクト指向：プログラム上で扱う対象をオブジェクトに見立てて、
 * 　　　　　　　　　オブジェクトを中心としてコードを組み立てていく手法
 * インスタンス化：オブシェクトの複製物
 * インスタンス：インスタンス化によって出来上がった複製のこと
 * コンストラクタ：初期化メソッド(new演算子)
 * インスタンス変数：インスタンスが格納された変数
 * 静的プロパティ/メソッド ⇄ インスタンスプロパティ/メソッド
 * 
 * 組み込みオブジェクト：JavaScriptで標準で取り込まれたオブジェクト
 * ラッパーオブジェクト：基本型(文字列、数値、論理値)を扱うのオブジェクト
 *                       単なる値に過ぎない基本型のデータを包んで(ラップして)
 * 　　　　　　　　　　　オブジェクトとして機能を追加sルウためのオブジェクト
*/

/* 基本データ型を扱う */
// 文字列を扱う

var testString = 'これはテストです。本当にテスト？？いやいやテストです。'; 
var confirmString = 'テスト';

console.log('testStringを確認 ： ' + testString);
console.log('confirmStringを先頭から検索 ： ' + testString.indexOf(confirmString));
console.log('confirmStringを末尾から検索 ： ' + testString.lastIndexOf(confirmString));
console.log('confirmStringを4文字目から検索 ： ' + testString.indexOf(confirmString, 3));
console.log('confirmStringを8文字目から左方向検索 ： ' + testString.lastIndexOf('テスト', 8));
console.log('検索文字の不一致 ： ' + testString.indexOf('最高'));
console.log('結果はtrue ： ' + testString.startsWith('これは'));
console.log('結果はfalse ： ' + testString.endsWith('これは'));
console.log('結果はtrue ： ' + testString.includes('テスト'));

console.log('testStringの5文字目を抽出 ： ' + testString.charAt(4));

// オリジナルの文字列から部分的な文字列を抽出------------------------
// substring, sliceメソッド：開始位置〜終了いちの範囲で抽出箇所を指定
// substrメソッド　　　　　：開始位置からの文字列数指定で抽出箇所を指定

// substring：引数startと引数endとの関係を入れ替えてend＋1～start文字目までを抽出  
 var str = 'WINGSプロジェクト';
console.log('testStringの6~8文字目を抽出 ： ' + str.substring(5,8));
// slice：sliceメソッドは入れ替えはせず、そのまま空文字列を返す
console.log('testStringの6~8文字目を抽出 ： ' + str.slice(5,8));
 
 console.log(str.substring(8, 5));     // 結果：プロジ（6～8文字目を抽出）
 console.log(str.slice(8, 5));         // 結果：空文字列
 console.log(str.substring(5, -2));    // 結果：WINGS（1～5文字目を抽出）
 console.log(str.slice(5, -2));        // 結果：プロジェ（6～9文字目を抽出
 
// testString.substr(from, length);
console.log('testStringの6文字目から3文字抽出 ： ' + str.substr(5,3));
console.log('testStringの6文字目から3文字抽出 ： ' + str.substr(5,3));
// ------------------------------------------------------------------------

// testString.split()
console.log('testStringを3分割 ： ' + testString.split('テスト'));  
console.log('testStringを2分割 ： ' + testString.split('テスト', 2));  


// testString.charCodeAt(Numver)
console.log('testStringのindex[0]の文字コード ： ' + testString.charCodeAt(0));  

// testString.charCodeAt(Number)
console.log('testStringのindex[0]の文字コード ： ' + testString.codePointAt(0));  

// testString.concat(String)
var confirmString2 = 'js';
console.log('testStringの末尾にconfirmString4を追加 ： ' + testString.concat(confirmString2));

// testString.repeat(Number)
console.log('testStringを繰り返す ： ' + testString.repeat(2));

// testString.trim()
var confirmString3 = ' js js ';
console.log('confirmString4の前後の半角スペース削除 ： ' + confirmString3.trim());

// testString.length
console.log('testStringの文字数 ： ' + testString.length);
