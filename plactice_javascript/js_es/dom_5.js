'use strict';

/* ======================== ブラウザーオブジェクト ======================== */
/* ブラウザーオブジェクトとは、
 * ブラウザオブジェクトの階層構造
 * 最上位に位置するのがWindowオブジェクト 
 * グローバル変数やグローバル関数にアクセスするための手順を提供します。
 * 利用方法について
 * window.location.reload(); 
 * 
 */

// ---------------------- confirmメソッド ----------------------
// ユーザーになにかしら確認の意思表示を求めるのが、confirmメソッドの役割です。
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('fm').addEventListener('submit', function (e) {
        if (!window.confirm('ページを送信しても良いですか？')) {
            e.preventDefault();
        }
    }, false);
}, false);

// ---------------------- confirmメソッド ----------------------

// ---------------------- setInterval／setTimeoutメソッド ----------------------
//・setInterval　→ 　決められた時間間隔でくり返し処理を実行する
//・setTimeout 　→ 　指定された時間が経過したところで1回だけ処理
// 注意点
// 1.引数funcに文字列を使わない（必ず関数リテラル）
// 2.指定した時間で実行されるわけではない（指定された時間にキューに処理を登録するだけ）
// 3.引数durがゼロの場合

document.addEventListener('DOMContentLoaded', function () {
    var timer = window.setInterval(function () {
        var dat = new Date();
        document.getElementById('result').textContent = dat.toLocaleTimeString();
    }, 5000);

    document.getElementById('btn').addEventListener('click', function () {
        window.clearInterval(timer);
    }, false);
}, false);

// 注意点3の例-----------------------------------------------
function hoge() {
    console.log('あいうえお');
    // 非同期処理となる
    setTimeout(function () {
        console.log('かきくけこ');
    }, 0);
    console.log('さしすせそ');
}

hoge(); // あいうえお　さしすせそ

// ---------------------- setInterval／setTimeoutメソッド ----------------------

// ---------------------- locationオブジェクト（表示ページのアドレス情報を取得/操作） ----------------------
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('isbn').addEventListener('change', function () {
        location.href = 'http://www.wings.msn.to/index.php/-/A-03/' + this.value;
    }, false);
}, false);
// ---------------------- locationオブジェクト（表示ページのアドレス情報を取得/操作） ----------------------

// ---------------------- locationオブジェクト（表示ページのアドレス情報を取得/操作） ----------------------

/* ======================== ブラウザーオブジェクト ======================== */