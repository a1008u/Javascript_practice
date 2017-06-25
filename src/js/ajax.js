document.addEventListener('DOMContentLoaded', function() {

// XMLHttpRequest オブジェクトを生成する
var req = new XMLHttpRequest();		  

// XMLHttpRequest オブジェクトの状態が変化した際に呼び出されるイベントハンドラ
req.onreadystatechange = function() {		  
  // サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合
  if(req.readyState == 4 && req.status == 200){ 
    // 取得した JSON ファイルの中身を表示
    alert(req.responseText);		         
    // 返却されたテキストをjavascriptのオブジェクトに変換
    var jdata= JSON.parse(req.responseText);
    // 結果を表示するエリアを取得
    var disp;
    
    // 結果表示
    for(var i in jdata){
      // jsonデータ取得
      var category = jdata[i].category;
      var part = jdata[i].part;
      var text1 = jdata[i].text1;
      var p = document.createElement("p");
      
      // 処理選択+処理
      if (category === '1') {
        // タグの設定
        disp = document.getElementById("about");
        p.classList.add('about-text');
      }else if(category === '2'){
        p.classList.add('work-text');
        if(part === '1'){
          // タグの設定
          disp = document.getElementById("work-text1");
        }
        
        if(part === '2'){
          // タグの設定
          disp = document.getElementById("work-text2");
        }
        
        if(part === '3'){
          // タグの設定
          disp = document.getElementById("work-text3");
        }
        
        if(part === '4'){
          // タグの設定
          disp = document.getElementById("work-text4");
        }        
      }
      
      p.innerHTML = text1;
      disp.appendChild(p);
    }
  }
};

// 非同期通信を開始
//req.open('GET', './js/about.json', true);
req.open('GET', './js/about.json', true);
req.send(null);
  
}, false);