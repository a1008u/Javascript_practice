/* ======================== ajaxの操作 ======================== */
// ---------------------- Promiseオブジェクト：非同期処理を簡単に表現する ----------------------
/*
Ajaxの利用方法
・コールバック関数の利用
・Promiseオブジェクト
　Promiseオブジェクトを利用することで、コードをあたかも同期処理のように1本道のコードで記述できるようになる
　ES2015でPromiseオブジェクトとして標準化されたことで、外部ライブラリに頼る必要がなくなります。
　Promiseオブジェクトは、正しくは（ブラウザーオブジェクトではなく）JavaScript標準の組み込みオブジェクトです。
*/

/*
利用方法
・非同期処理を関数としてまとめておきます（この例であれば❶のasyncProcess）。
　asyncProcess関数が戻り値として返すのが、Promiseオブジェクトです。
・Promiseは非同期処理の状態を監視するためのオブジェクトで、
　コンストラクターには実行すべき非同期処理を関数リテラル、またはアロー関数として記述します（❷）。
　new Promise((resolve, reject) => { statements })
      resolve：処理の成功を通知するための関数
      reject：処理の失敗を通知するための関数
      statements：処理本体 


*/

// ①asyncProcessメソッドに非同期処理をまとめる
function asyncProcess(value) {
　// ②Promiseオブジェクトを作成
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (value) {
        resolve('入力値（成功）：' + value);
      } else {
        reject('エラー：入力は空です');
      }
    }, 500);
  });
}

/* Promiseオブジェクトの戻り値をthenメソッドで受け取る
Promise.all(promises)
      promises：監視するPromiseオブジェクト群（配列）
＊Promiseオブジェクトがresolve（成功）した場合にだけ、thenメソッドの成功コールバックを実行します
*/ 
Promise.all([asyncProcess('トクジロウ')
              ,asyncProcess('ニンザブロウ')
              ,asyncProcess('リンリン')]).then(function (response) {
  console.log(response);
}, function (error) {
  console.log('エラー： ' + error);
});

/*
Promise.race(promises)
並行して実行した非同期処理のいずれか1つが最初に完了したところで、
成功コールバックを呼び出すPromise.raceメソッドもあります  
*/
Promise.race([asyncProcess('トクジロウ')
              ,asyncProcess('ニンザブロウ') 
              ,asyncProcess('リンリン') ]).then(function (response) {
  console.log(response);
}, function (error) {
  console.log('エラー： ' + error);
});



/* ======================== ajaxの操作 ======================== */