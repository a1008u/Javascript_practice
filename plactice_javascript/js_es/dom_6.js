'use strict';

/* ======================== Consoleオブジェクト ======================== */

console.log('ログ');
console.info('情報');
console.warn('警告');
console.error('エラー');

console.log('初めまして、私は %sです。%d 歳です。', '山田太郎', 30);
// 結果：初めまして、私は 山田太郎です。30 歳です。
console.log('今日の気温は、 %.2f 度です。', 22.5);
// 結果：今日の気温は、 22.50 度です。（Firefoxの場合）

// ---------------------- ログをグループ化する ----------------------
// 親グループを開始（入れ子にする）
console.group('上位グループ');
for (var i = 0; i < 3; i++) {
    // 子グループを開始
    console.group('下位グループ' + i);
    for (var j = 0; j < 3; j++) {
        console.log(i, j);
    }
    // 子グループを終了
    console.groupEnd();
}
// 親グループを終了
console.groupEnd();
// ---------------------- ログをグループ化する ----------------------

// ---------------------- 特定のコードが何度実行されたかをカウントする ----------------------
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        console.count('LOOP');
    }
}
console.count('LOOP');

// ---------------------- 特定のコードが何度実行されたかをカウントする ----------------------    

// ---------------------- 実行時のスタックトレースを出力する ----------------------
// スタックトレース：あるメソッドの呼び出し階層を表す情報
function call1() {
    call2();
}

function call2() {
    call3();
}

function call3() {
    console.trace();
}

call1();
// ---------------------- 実行時のスタックトレースを出力する ----------------------

// ---------------------- スクリプトの実行時間を測定する ----------------------
console.time('MyTimer');
window.alert('確認してください。');
console.timeEnd('MyTimer');
// ---------------------- スクリプトの実行時間を測定する ----------------------

// ---------------------- 条件式がfalseの場合にだけログを出力する ----------------------
function circle(radius) {
    console.assert(typeof radius === 'number' && radius > 0, '引数radiusは正数でなければいけません。');
    return radius * radius * Math.PI;
}

console.log(circle(-5));

// ---------------------- 条件式がfalseの場合にだけログを出力する ----------------------

// ---------------------- オブジェクトを見やすい形式にする ----------------------
document.addEventListener('DOMContentLoaded', function () {
    var d = document.getElementById('main');
    console.log(d); // ElementオブジェクトをHTML形式で出力する
    console.dir(d); // オブジェクトツリーとして出力する
}, false);
// ---------------------- オブジェクトを見やすい形式にする ----------------------

/* ======================== Consoleオブジェクト ======================== */

/* ======================== Strageオブジェクト(ユーザデータを保持する) ======================== */
/* Web Storage（ストレージ）：ブラウザー内蔵のデータストア（保管庫）です。
    データを特定するキーと値の組み合わせでデータを保管することから、
    Key－Value型データストアと呼ばれることもあります。
*/
// ストレージの種類
/*
・ローカルストレージ 　　→ 　オリジン単位でデータを管理。
　　　　　　　　　　　　　　　ウィンドウ／タブをまたいでデータの共有が可能で、ブラウザーを閉じてもデータは維持される
・セッションストレージ 　→ 　現在のセッション（＝ブラウザーが開いている間）でだけ維持されるデータを管理。
　　　　　　　　　　　　　　　ブラウザーを閉じたタイミングでデータは破棄され、ウィンドウ／タブ間でデータを共有することもできない
*/

var storage = localStorage;
storage.setItem('frult1', 'apple');
storage.frult2 = 'orange';
storage['frult3'] = 'greep';
console.log(storage.getItem('frult1'));
console.log(storage.frult2);
console.log(storage['frult3']);

// ---------------------- 既存のデータを削除 ----------------------
storage.removeItem('fruit1');
delete storage.fruit1;
delete storage['fruit1'];

// storage.clear(); 全件削除
// ---------------------- 既存のデータを削除 ----------------------

// ---------------------- 既存のデータを全件抽出 ----------------------
for (var i = 0, len = storage.length; i < len; i++) {
    var k = storage.key(i);
    var v = storage[k];
    console.log(k + '：' + v);
}
// ---------------------- 既存のデータを全件抽出 ----------------------

// ---------------------- ストレージにオブジェクトを保存/取得する ----------------------
// オブジェクトを復元可能な文字列に変換するのは、JSON.stringifyメソッド（3.7.3項）の役割です
var storage = localStorage;
var apple = { name: 'りんご', price: 150, made: '青森' };
storage.setItem('apple', JSON.stringify(apple));
var data = JSON.parse(storage.getItem('apple'));
console.log(data.name); // 結果：りんご

// オススメの使い方---------------------------------------------
var MyStorage = function MyStorage(app) {
    // アプリ名
    this.app = app;
    // 利用するストレージの種類（ここではローカルストレージ）
    this.storage = localStorage;
    // ストレージから読み込んだオブジェクト
    // 該当するデータがない場合は、空のオブジェクトを生成
    this.data = JSON.parse(this.storage[this.app] || '{}');
};

MyStorage.prototype = {
    // 指定されたキーで値を取得
    getItem: function getItem(key) {
        return this.data[key];
    },
    // 指定されたキー／値でオブジェクトを書き換え
    setItem: function setItem(key, value) {
        this.data[key] = value;
    },
    // MyStorageオブジェクトの内容をストレージに保存
    save: function save() {
        this.storage[this.app] = JSON.stringify(this.data);
    }
};

var storage = new MyStorage('JSSample');
storage.setItem('hoge', 'ほげ');
console.log(storage.getItem('hoge')); // 結果：ほげ
storage.save();

// ---------------------- ストレージにオブジェクトを保存/取得する ----------------------

// ---------------------- ストレージの変更を監視する ----------------------
window.addEventListener('storage', function (e) {
    console.log('変更されたキー：' + e.key);
    console.log('変更前の値：' + e.oldValue);
    console.log('変更後の値：' + e.newValue);
    console.log('発生元ページ：' + e.url);
}, false);
// ---------------------- ストレージの変更を監視する ----------------------

/* ======================== Strageオブジェクト(ユーザデータを保持する) ======================== */