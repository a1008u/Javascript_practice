/* ======================== スタイルシートの操作 ======================== */
/* DOMでスタイルシートを操作する方法
 * 1.インラインスタイルにアクセスする(styleプロパティ)
 * 2.外部のスタイルシートを適用する(classNameプロパティ)
 *
 */
// ---------------------- インラインスタイルにアクセス(styleプロパティ) ----------------------
document.addEventListener('DOMContentLoaded', function() {
    var elem = document.getElementById('elem');
    
    // マウスポインターが乗ったタイミングで背景色を変更
    elem.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'Yellow';
    }, false);
    
    // マウスポインターが外れたタイミングで背景色を戻す
    elem.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
    }, false);
}, false);
// ---------------------- インラインスタイルにアクセス(styleプロパティ) ----------------------

// ---------------------- 外部スタイルシートを適用(classNameプロパティ) ----------------------
document.addEventListener('DOMContentLoaded', function() {
    var elem = document.getElementById('elem2');

    // マウスポインターが乗ったタイミングで背景色を変更
    elem.addEventListener('mouseover', function() {
        this.className = 'highlight';
    }, false);
    
    // マウスポインターが外れたタイミングで背景色を戻す
    elem.addEventListener('mouseout', function() {
        this.className = '';
    }, false);
}, false);

// ---------------------- 外部スタイルシートを適用(classNameプロパティ) ----------------------

// ---------------------- スタイルクラスを着脱 ----------------------
document.addEventListener('DOMContentLoaded', function() {
    var elem = document.getElementById('elem3');

    // クリックしたタイミングで背景色を変更
    elem.addEventListener('click', function() {
        this.className = (this.className === 'highlight' ? '' : 'highlight');
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var elem = document.getElementById('elem4');
    
    elem.addEventListener('click', function() {
        // 空白区切りの文字列を分割
        var classes = this.className.split(' ');
        // highlightが存在する位置を検出
        var index = classes.indexOf('highlight');
        if(index === -1) {
            // 存在しなければ、新たに追加
            classes.push('highlight');
        } else {
            // 存在する場合には、highlightを除去
            classes.splice(index, 1);
        }
    // 配列を空白区切りの文字列に
    this.className = classes.join(' ');
    }, false);
}, false);

// ---------------------- スタイルクラスを着脱 ----------------------

// ---------------------- スタイルクラスをより簡単に操作する(classListプロパティ) ----------------------
/* classListプロパティを利用することで、
 * class属性の値（空白区切りの文字列）をDOMTokenListオブジェクトとして取得できます。
 */
 
document.addEventListener('DOMContentLoaded', function() {
    var elem = document.getElementById('elem6');
    // クリックしたタイミングで背景色を変更
    elem.addEventListener('click', function() {
        this.classList.toggle('highlight');
    }, false);
}, false);

// ---------------------- スタイルクラスをより簡単に操作する(classListプロパティ) ----------------------

/* ======================== スタイルシートの操作 ======================== */

/* ======================== 高度なイベント処理 ======================== */
// ---------------------- イベントリスナー/ハンドラーを削除 ----------------------
// イベントハンドラーの削除
// イベントハンドラーを削除するには、onxxxxxメソッドに対してnull値を設定する。  
window.onload = function() {
    var btn = document.getElementById('btn');
    
    // イベントハンドラーを登録
    btn.onclick = function() {
        window.alert('こんにちは、世界！');
    };
    
    // イベントハンドラーを破棄
    btn.onclick = null; 
};

// イベントリスナーの削除
// イベントリスナーを削除するには、removeEventListenerメソッドを利用します。
document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('btn2');
    var listener = function() {
        window.alert('こんにちは、世界！');
    };
    
    // イベントリスナーを登録
    btn.addEventListener('click', listener, false);
    
    // イベントリスナーを破棄
    btn.removeEventListener('click', listener, false);
}, false);
// ---------------------- イベントリスナー/ハンドラーを削除 ----------------------

// ---------------------- イベントに関わる情報を取得する(イベントオブジェクト) ----------------------
// イベントリスナー／イベントハンドラーは、
// 引数としてイベントオブジェクトと呼ばれるオブジェクトを受け取ります
// イベントオブジェクトを受け取るには、イベントリスナーに引数を指定するだけです
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn3').addEventListener('click', function(e) {
        var target = e.target;
        console.log('発生元：' + target.nodeName + '/' + target.id);
        console.log('種類：' + e.type);
    }, false);
}, false);
// ---------------------- イベントに関わる情報を取得する(イベントオブジェクト) ----------------------

// ---------------------- イベント発生時のマウス情報を取得 ----------------------
document.addEventListener('DOMContentLoaded', function() {
    var main = document.getElementById('main');
    main.addEventListener('mousemove', function(e) {
        main.innerHTML = 'screen' + e.screenX + '/' + e.screenY + '<br />'
                        + 'page' + e.pageX + '/' + e.pageY + '<br />'
                        + 'client' + e.clientX + '/' + e.clientY + '<br />'
                        + 'offset' + e.offsetX + '/' + e.offsetY + '<br />';
    }, false);
}, false);
// ---------------------- イベント発生時のマウス情報を取得 ----------------------

// ---------------------- イベント発生時のキーの情報を取得 ----------------------
// keyCodeプロパティで押されたキーコードを出力しているだけですが、
// 実際のアプリでは押されたキーに応じてなんらかのアクションを実行することになるでしょう
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('key').addEventListener('keydown', function(e) {
        console.log('キーコード：' + e.keyCode);
    }, false);
}, false);
// ---------------------- イベント発生時のキーの情報を取得 ----------------------

// ---------------------- イベント処理をキャンセル ----------------------
// イベントオブジェクトの
// stopPropagation／stopImmediatePropagation／preventDefaultメソッドを利用することで、
// イベント処理を中途でキャンセルできます。

// イベントの伝播
// 1.キャプチャーフェーズ　→　2.ターゲットフェーズ　→　3.パブリングフェーズ
// キャプチャフェーズ：最上位のwindowオブジェクトから文書ツリーをたどって、下位の要素にイベントが伝播していきます。
// ターゲットフェーズ：イベントの発生元（要素）を特定します。
// バブリングフェーズ：イベントの発生元からルート要素に向かって、イベントが伝播していくフェースです。

document.addEventListener('DOMContentLoaded', function() {
    
    /*
    1. ダイアログ表示（#innerリスナーが発生しました）
    2. ダイアログ表示（#innerリスナー2が発生しました）
    3. ダイアログ表示（#outerリスナーが発生しました）
    4. リンクによってページ移動
    */
    
    // <a id="inner">要素のclickイベントリスナー
    document.getElementById('inner').addEventListener('click', function(e) {
        window.alert('#innerリスナーが発生しました。');
    }, false);
    
    document.getElementById('inner').addEventListener('click', function(e) {
        window.alert('#innerリスナー2が発生しました。');
    }, false);
    
    // <div id="outer">要素のclickイベントリスナー
    document.getElementById('outer').addEventListener('click', function(e) {
        window.alert('#outerリスナーが発生しました。');
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    
    /* e.stopPropagation();の実行
    1. ダイアログ表示（#innerリスナーが発生しました）
    2. ダイアログ表示（#innerリスナー2が発生しました）
    3. リンクによってページ移動
    */
    
    /* e.stopImmediatePropagation();の実行
    1. ダイアログ表示（#innerリスナーが発生しました）
    2. リンクによってページ移動
    */
    
    /* e.preventDefault();の実行
    1. ダイアログ表示（#innerリスナーが発生しました）
    2. ダイアログ表示（#innerリスナー2が発生しました）
    3. ダイアログ表示（#outerリスナーが発生しました）
    */
    
    // <a id="inner">要素のclickイベントリスナー
    document.getElementById('inner2').addEventListener('click', function(e) {
        window.alert('#innerリスナーが発生しました。');
        e.stopPropagation();
        // e.stopImmediatePropagation();
        // e.preventDefault();
    }, false);
    
    document.getElementById('inner2').addEventListener('click', function(e) {
        window.alert('#innerリスナー2が発生しました。');
    }, false);
    
    // <div id="outer">要素のclickイベントリスナー
    document.getElementById('outer2').addEventListener('click', function(e) {
        window.alert('#outerリスナーが発生しました。');
    }, false);
}, false);
// ---------------------- イベント処理をキャンセル ----------------------

// ---------------------- イベントリスナー/ハンドラー配下のthis ----------------------
// イベントリスナー／イベントハンドラー配下のthisキーワードは、
// イベントの発生元（要素）を表すのでした

// イベントリスナー配下では、thisはイベントの発生元を指しているのです。
// bindメソッドを利用することで、関数func配下のthisが引数thatに付けされる。
document.addEventListener('DOMContentLoaded',function() {
    var data = {
        title: 'Java Java',
        price: 2680,
        show: function(){
            console.log(this.title + ' / ' + this.price + '円');
        }
    };
    
    document.getElementById('btn4').addEventListener(
        'click', data.show.bind(data), false
        /*'click', data.show, false thisはイベントの発生元を指す*/);
}, false);
// ---------------------- イベントリスナー/ハンドラー配下のthis ----------------------

// ---------------------- イベントリスナーにEventListenerオブジェクトを指定する ----------------------
// ---------------------- イベントリスナーにEventListenerオブジェクトを指定する ----------------------

/* ======================== 高度なイベント処理 ======================== */