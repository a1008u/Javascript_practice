'use strict';

console.log("============proxyの使い方============");

/* Proxyオブジェクト
 *　プロパティの設定/取得/削除、for...of/for...in命令による列挙といった、
 *　オブジェクトの基本的な動作を、アプリ独自の動作に差し替えるためのオブジェクト
 *　既存のオブジェクトに手を加えずに実装できる
 */

var data = { red: '赤色', yellow: '黄色' };

var proxy = new Proxy(data, {
    get: function get(target, prop) {
        return prop in target ? target[prop] : '?';
    }
});

console.log(proxy.red);
console.log(proxy.nothing);