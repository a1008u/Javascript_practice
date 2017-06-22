/* ======================== ajaxの操作 ======================== */
// ---------------------- JSONP(クライアントサイドでクロスオリジン通信を可能にする) ----------------------
/* JSONPとは
    <script>要素であれば、外部サーバーからもスクリプトを読み込めることを利用した非同期通信
    
*/


document.getElementById('btn').addEventListener('click', function() {
    
  // callbackパラメタを利用して、show関数を呼び出す（jsonデータを引き渡す）
  var url = 'https://b.hatena.ne.jp/entry/jsonlite/?callback=show&url='
    + encodeURIComponent(document.getElementById('url').value);
  var scr = document.createElement('script');
  scr.src = url;
  document.getElementsByTagName('body').item(0).appendChild(scr);
}, false);

function show(data) {
  if (data === null) {
    result.textContent = 'ブックマークは存在しませんでした。';
  } else {
    
    // 関数として切り出すこともできる
    var bms = data.bookmarks;
    var ul = document.createElement('ul');
    for (var i = 0; i < bms.length; i++) { 
      var li = document.createElement('li');
      var anchor = document.createElement('a');
      anchor.href = 'https://b.hatena.ne.jp/' + bms[i].user
      var text = document.createTextNode(bms[i].user + ' ' + bms[i].comment);
      anchor.appendChild(text);
      li.appendChild(anchor);
      ul.appendChild(li);
    }
    
    result.appendChild(ul);
  }
} 
// ---------------------- JSONP(クライアントサイドでクロスオリジン通信を可能にする) ----------------------