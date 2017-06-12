'use strict';

/* ====== クライアントサイドJS ====== */

/*【ポイント】
 * 要素ノードの取得
 * 文書ツリー間の行き来
 * イベントドリブンモデル
 */

/* ======================== 要素ノードの取得 ======================== */
// ---------------------- getElementByIdメソッド ----------------------
// id値をキーに、指定されたid値を持つ要素をElementオブジェクトとして返す。 
var current = new Date();
var result = document.getElementById('result');
result.textContent = current.toLocaleString();

// ---------------------- getElementsByTagNameメソッド  ----------------------
// タグ名をキーにHTMLCollectionオブジェクト(要素の集合)を取得する 
var list = document.getElementsByTagName('a');
for (var i = 0; i < list.length; i++) {
    console.log(list.item(i).href);
}

// ---------------------- getElementsByNameメソッド ----------------------
// name属性を元にNodeListオブジェクト(ノードの集合)を取得する 

var current = new Date();
// <input name="time">要素を取得
var nam = document.getElementsByName('time');
// そのvalue属性を設定
nam[0].value = current.toLocaleTimeString();

// --------------------- getElementsByClassNameメソッド ----------------------
// class属性をキーにHTMLCollectionオブジェクトを取得する 

// 「class="my"」である要素（アンカータグ）を取得
var list = document.getElementsByClassName('my');
// リストから順にアンカータグを取り出し、そのhref属性をログに出力
for (var i = 0, len = list.length; i < len; i++) {
    console.log(list.item(i).href);
}

// --------------------- querySelector／querySelectorAllメソッド ---------------
// セレクター式に合致した要素を取得する 
var list = document.querySelectorAll('#list .external');
for (var i = 0, len = list.length; i < len; i++) {
    console.log(list.item(i).href);
}

/* ======================== ノードウォーキング ======================== */
// あるノードを基点として、相対的な位置関係からノードを取得すること
/* nodeType一覧
    1	要素ノードです。
    2	属性ノードです。
    3	テキストノードです。
    4	CDATA ノードです。
    5	実体参照ノードです。
    6	実体ノードです。
    7	処理命令ノードです。
    8	注釈宣言ノードです。
    9	文書ノードです。
    10	文書型宣言ノードです。
    11	文書切片ノードです。
    12	表記法ノードです。
*/

var s = document.getElementById("food");
var options = s.childNodes;
for (var i = 0; i < options.length; i++) {
    var option = options.item(i);
    if (option.nodeType === 1) {
        console.log(option.value);
    }
}

// 子要素リストを取得する方法
// 1.firstChild／nextSiblingプロパティ
// <select>要素の最初の子ノードを取得
var s2 = document.getElementById("food");
var child = s2.firstChild;
// 子ノードが存在する間、ループをくり返す
while (child) {
    if (child.nodeType === 1) {
        console.log(child.value);
    }
    // 次の子ノード（弟ノード）を取得
    child = child.nextSibling;
}

// 2.firstElementChild／nextElementSiblingプロパティ
/* firstElementChildプロパティは配下の子要素を返し、
   nextElementSiblingプロパティは次の兄弟要素を返します。
   firstChild／nextSiblingプロパティと違って、
   戻り値がElement（要素）オブジェクトに限定されるので、
   nodeTypeプロパティによる判定は不要になります。*/
// <select>要素の最初の子要素を取得
var s3 = document.getElementById("food");
var child_v3 = s3.firstElementChild;
// 子要素が存在する間、ループをくり返し
while (child_v3) {
    console.log(child_v3.value);
    child_v3 = child_v3.nextElementSibling;
}

/* ======================== イベントドリブンモデル ======================== */
/* イベントハンドラー(イベントリスナー)
   イベントに対応してその処理内容を定義するコードのかたまり（関数）のこと
【イベントハンドラー】
1. タグ内の属性として宣言する
2. 要素オブジェクトのプロパティとして宣言する
【イベントリスナー】
3. addEventListenerメソッドを使って宣言する
*/

// 1. タグ内の属性として宣言する【イベントハンドラー】
function btn_click() {
    window.alert('ボタンがクリックされました。');
}

// 2. 要素オブジェクトのプロパティとして宣言する【イベントハンドラー】
// ページロード時に実行されるイベントハンドラーを登録
// onloadイベントハンドラー → コンテンツ本体とすべての画像がロードされたところで実行
window.onload = function () {
    // ボタン（btn）クリック時に実行されるイベントハンドラーを登録
    document.getElementById('btn_1').onclick = function () {
        window.alert('ボタンがクリックされました。');
    };
};

// 3. addEventListenerメソッドを使って宣言する【イベントリスナー】
/* イベントリスナー
   「同一要素の同一イベントに対しても複数ひも付けられるイベントハンドラー」
   ・DOMContentLoadedイベントリスナー → コンテンツ本体がロードされたところで実行
　　（＝画像のロードを待たない）
　 ・ページの初期化処理は、DOMContentLoadedイベントリスナーで表すのが基本*/
// ページロード時に実行されるイベントリスナーを登録
document.addEventListener('DOMContentLoaded', function () {
    // ボタン（btn）クリック時に実行されるイベントリスナーを登録
    document.getElementById('btn_2').addEventListener('click', function () {
        window.alert('ボタンがクリックされました。');
    }, false);
}, false);