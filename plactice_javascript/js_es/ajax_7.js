'use strict';

/* ======================== ajaxの操作 ======================== */
// ---------------------- Web Worker バックグラウンドJavaScriptのコードを実行 ----------------------
/*
Web Workerという機能を利用することで、
JavaScriptのコードをバックグラウンドで並列に実行できるようになります。
*/

/* workerを実装 
ワーカーとは、バックグラウンドで動作するJavaScriptのコードのことです。
ワーカーは、メインのJavaScriptコードとは別の.jsファイルとして準備します。

messageイベントは、メインスレッドからメッセージを受け取った（＝ワーカーを起動した）タイミングで発生します（❶）。
ワーカーの処理は、messageイベントハンドラーの配下で表すのが基本です。
（つまり、太字部分はワーカーの定型的な枠組みということです）
messageイベントリスナーの配下では、以下のように、イベントオブジェクトeのdataプロパティ経由で、
メインスレッドからのパラメーターを受けとれます。

*/

self.addEventListener('message', function (e) {

  /* 下記は、workerを呼び出す側で設定する。
  e.data.target
  e.data.x
  */
  var count = 0;
  for (var i = 1, len = e.data.target; i < len; i++) {
    if (i % e.data.x === 0) {
      count++;
    }
  }
  postMessage(count);
});
/* ======================== ajaxの操作 ======================== */