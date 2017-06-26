'use strict';

/* ======================== ajaxの操作 ======================== */
// ---------------------- クロスドキュメントメッセージングによるクロスオリジン通信 ----------------------
/*
  クロスドキュメントメッセージングとは、
  異なるウィンドウ／フレームにあるドキュメントでメッセージを交換するしくみです。
  異なるオリジンで提供されているガジェットをiframeでページに埋め込み、
  メインのアプリから操作したり、ガジェットでの処理結果を受け取ったりできる。
*/

document.addEventListener('DOMContentLoaded', function () {

  var target = 'https://javascript-test-a1008u.c9users.io';

  // メッセージ送信
  document.getElementById('btn').addEventListener('click', function () {

    /* オリジンに対してメッセージを送信する
      other.postMessage(message,target)
      other：送信先ウィンドウ     message：送信するメッセージ
      target：送信先ウィンドウの生成元オリジン
    */

    document.getElementById('frame').contentWindow.postMessage(document.getElementById('message').value, target);
  }, false);

  // メッセージ受信
  window.addEventListener('message', function (e) {
    if (e.origin !== target) {
      return;
    }
    console.log(e.data);
  }, false);
}, false);

/* メッセージを受信
document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('message', function(e) {
    var origin = 'https://localhost';
    if (e.origin !== origin) { return; }
    document.getElementById('result').textContent = e.data;

    var current = new Date();
    e.source.postMessage(current, origin);
  }, false);
}, false);
*/

/* ======================== ajaxの操作 ======================== */