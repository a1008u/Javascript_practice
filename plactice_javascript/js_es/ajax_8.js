'use strict';

// workerを起動する
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btn').addEventListener('click', function () {

    // workerオブジェクトを作成
    var worker = new Worker('./js_es/ajax_7.js');

    // ワーカーにメッセージを送信する
    worker.postMessage({
      'target': document.getElementById('target').value,
      'x': document.getElementById('x').value
    });

    document.getElementById('result').textContent = '計算中...';

    // ワーカーからの結果を処理する
    worker.addEventListener('message', function (e) {
      document.getElementById('result').textContent = e.data;
    }, false);

    // ワーカーのエラー処理
    worker.addEventListener('error', function (e) {
      document.getElementById('result').textContent = e.message;
    }, false);
  }, false);
}, false);