'use strict';

/* ======================== ajaxの操作 ======================== */
/* ajaxの手順
 *　1.XMLHttpRequestオブジェクトを作成
 *  2.サーバー通信時の処理を定義
 *  3.非同期通信を開始
*/

/*1.XMLHttpRequestオブジェクトを作成(説明)
      プロパティ名	説明
onreadystatechange	readyStateの値が変わるたびに、自動的に呼ばれる関数（または関数名）を格納します.
        readyState	XMLHttpRequest の状態を持ちます.
                    0: リクエストは初期化されていません.
                    1: サーバとの接続が確立されました.
                    2: リクエストを受け付けました.
                    3. リクエストを処理しています.
                    4: リクエストが終了し、レスポンスの準備が完了しました.
      responseText	文字列としてレスポンスデータを返します.
   responseXML XML としてレスポンスデータを返します.
            status	ステータス番号を返します. (例えば "Not Found" を示す "404" か "OK" を示す "200" です.)
        statusText	ステータステキストを返します. (例えば "Not Found" または "OK")
          response	ArrayBuffer、Blob、Document、JavaScript オブジェクト、DOMStringといったXMLHttpRequest.responseTypeに従ったレスポンスの実体ボディ。
                    リクエストが完了していない、または成功しなかった場合、この値はnullとなります。
      responseType	レスポンス型を定義する、列挙型の値です。
           timeout	リクエストを自動的に終了できるようになるまでの時間をミリ秒単位で表す、unsigned long 型の値です。
                    値 0 (デフォルト値) は、タイムアウトしないことを示します。
            upload	アップロードプロセスを表す XMLHttpRequestUpload。
                    これは不透過オブジェクトですが、XMLHttpRequestEventTargetイベントリスナを加えることにより、アップロードプロセスを追跡することができます。
   withCredentials	クロスサイトAccess-Controlリクエストにcookieや認証ヘッダといった認証情報を使用させるかを示すBoolean型の値です。
                    またこのフラグは、リクエストで cookie を無視することを示すためにも使用します。デフォルト値はfalseです。

                       メソッド名	説明
                          abort()	現在のリクエストをキャンセルする.
          getAllResponseHeaders()	リクエストヘッダ情報を返す.
              getResponseHeader()	固有のレスポンスヘッダ情報を返す.
open(method,url,async,uname,pswd)	リクエストします. リクエストが非同期の場合はURLやその他のオプションである性質を指定します. 
                                   method: リクエストタイプで GET か POST.
                                   url: サーバ上のファイルの場所.
                                   async: true (非同期) or false (同期)
                     send(string)	サーバへリクエストを送信します. 引数は POST リクエストの場合に使用します.
               setRequestHeader()	送信される前にラベル/名前のペアをヘッダに追加します.
*/

/* 2.サーバー通信時の処理を定義
  XMLHttpRequestオブジェクトからonreadystatechangeプロパティで通信開始から終了までに実行すべき処理を定義します。
   onreadystatechangeは、通信の状態が変化したタイミングで呼び出されるイベントハンドラーです。
   onreadystatechangeイベントハンドラーを利用することで、以下のような処理を実装できます。
    ・サーバーから正常な応答を受け取ったタイミングで、ページの更新処理を行う
    ・サーバーからエラーが返された場合に、エラーメッセージを表示する
    ・サーバーへの通信を開始したタイミングで、「通信中...」メッセージを表示する

【onreadystatechanges時にreadeyState/statusを利用してサーバとの通信を制御する方法】
・サーバから応答が返されていない（readyStateプロパティが4以外である）場合　 → 　「通信中 ...」という進捗メッセージ
・応答は取得したものの、サーバー側でなんらかのエラーが発生している（statusプロパティが200以外である）場合　 → 　エラーメッセージ

【XMLHttpRequestオブジェクトのイベントリスナーとして通信を制御する】
  ・loadestate：リクエストを送信したとき
  ・progress  ：データを送受信している途中
  ・timeout   ：リクエストがタイムアウトした時
  ・abort     ：リクエストがキャンセルされた時
  ・load      ：リクエストが成功した時
  ・error     ：リクエストが失敗したとkリクエストが失敗した時
  ・loadend   ：正常または異常に関わらず、リクエストが完了した時

【例】
xhr.addEventListener('loadstart', function() {
  result.textContent = '通信中...';
}, false);

 xhr.addEventListener('load', function() {
   result.textContent = xhr.responseText;
 }, false);

 xhr.addEventListener('error', function() {
   result.textContent = 'サーバーエラーが発生しました。';
 }, false);
 */

/* 3.非同期通信を開始
・openメソッドの設定
xhr.open(method, url [,async [,user [,passwd]]])
  xhr：XMLHttpRequestオブジェクト
  method：HTTPメソッド（GET／POST／PUT／DELETEなど）
  url：アクセス先のURL     async：非同期通信か（デフォルトはtrue）
  user：認証時のユーザー名     passwd：認証時のパスワード  

 */

// ---------------------- JSONP(クライアントサイドでクロスオリジン通信を可能にする) ----------------------
/* JSONPとは
    <script>要素であれば、外部サーバーからもスクリプトを読み込めることを利用した非同期通信
    
*/

document.getElementById('btn').addEventListener('click', function () {

  // callbackパラメタを利用して、show関数を呼び出す（jsonデータを引き渡す）
  var url = 'https://b.hatena.ne.jp/entry/jsonlite/?callback=show&url=' + encodeURIComponent(document.getElementById('url').value);
  var scr = document.createElement('script');
  scr.src = url;
  document.getElementsByTagName('body').item(0).appendChild(scr);
}, false);

function show(data) {

  var result = document.getElementById('result');

  if (data === null) {
    result.textContent = 'ブックマークは存在しませんでした。';
  } else {

    // 関数として切り出すこともできる
    var bms = data.bookmarks;
    var ul = document.createElement('ul');
    for (var i = 0; i < bms.length; i++) {
      var li = document.createElement('li');
      var anchor = document.createElement('a');
      anchor.href = 'https://b.hatena.ne.jp/' + bms[i].user;
      var text = document.createTextNode(bms[i].user + ' ' + bms[i].comment);
      anchor.appendChild(text);
      li.appendChild(anchor);
      ul.appendChild(li);
    }

    result.appendChild(ul);
  }
}
// ---------------------- JSONP(クライアントサイドでクロスオリジン通信を可能にする) ----------------------