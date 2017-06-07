'use strict';

/* 基本データ型を扱う */
// 正規表現で文字列を自在に操作する
// 【正規表現の例】
// http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?

// RegExpオブジェクト
// JavaScriptで正規表現を解析し、文字列検索するための機能を提供する

/* RegExpオブジェクトを生成する方法
    ・RegExpオブジェクトのコンストラクターを経由する
    var 変数名 = new RegExp('正規表現', 'オプション');  ← コンストラクター
    ・正規表現リテラルを利用する
    var 変数名 = /正規表現/オプション;  ← リテラル表現
*/

var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str = 'サポートサイトはhttp://www.wings.msn.to/です。';

str += 'サンプル紹介サイトHTTP://www.web-deli.com/もよろしく！';

// str.match(pattern)
// str：検索対象の文字列     
// pattern：正規表現
var result = str.match(p);

// 結果：http://www.wings.msn.to/ HTTP://www.web-deli.com/
for (var i = 0, len = result.length; i < len; i++) {
    console.log(result[i]);
}

// マルチラインモード - mオプション -
var str = '101匹ワンちゃん。\n7人の小人';

// 結果(マルチラインモードなし)： 101
var p = /^[0-9]{1,}/g;
var result = str.match(p);
for (var i = 0, len = result.length; i < len; i++) {
    console.log(result[i]);
}

// 結果(マルチラインモードなし)： 101 7
// マルチラインモードでは、^は行頭を表す（改行後も）
// もし、$なら末尾
var pm = /^[0-9]{1,}/gm;
var result2 = str.match(pm);
for (var i = 0, len = result2.length; i < len; i++) {
    console.log(result2[i]);
}
// -----------------------------------

// Unicodeに対応する - uフラグ - ES2015
var str3 = 'ります';
console.log(str3.match(/^(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])\u308A\u307E\u3059$/g)); // 結果：["ります"]


// -----------------------------------


var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str4 = 'サポートサイトはhttp://www.wings.msn.to/です。';
str4 += 'サンプル紹介サイトHTTP://www.web-deli.com/もよろしく！';

// 結果：http://www.wings.msn.to/　undefined　msn.　/
var result4 = p.exec(str4);
for (var i = 0, len = result4.length; i < len; i++) {
    console.log(result4[i]);
}