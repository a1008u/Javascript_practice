'use strict';

/* 基本データ型を扱う */
// Objectオブジェクト

/*　【Objectオブジェクト】
    オブジェクトの共通的な性質／機能を提供するという役割を担っています。
    Objectオブジェクトは、すべてのオブジェクトの基本オブジェクトである。
    つまり、組み込みオブジェクトやユーザー定義のオブジェクトも、
    「オブジェクト」と名前の付くものはすべて、
    Objectオブジェクトで定義されたプロパティやメソッドを共通して利用する。
*/

var obj = new Object();
console.log(obj.toString()); // 結果：[object Object]
console.log(obj.valueOf()); // 結果：{}

var dat = new Date();
console.log(dat.toString());
// 結果：Wed Jun 15 2016 16:08:03 GMT+0900 (東京 (標準時))
console.log(dat.valueOf()); // 結果：1465974483876

var ary = ['prototype.js', 'jQuery', 'Yahoo! UI'];
console.log(ary.toString()); // 結果：prototype.js,jQuery,Yahoo! UI
console.log(ary.valueOf()); // 結果：["prototype.js", "jQuery", "Yahoo! UI"]

var num = 10;
console.log(num.toString()); // 結果：10
console.log(num.valueOf()); // 結果：10

var reg = /[0-9]{3}-[0-9]{4}/g;
console.log(reg.toString()); // 結果：/[0-9]{3}-[0-9]{4}/g
console.log(reg.valueOf()); // 結果：/[0-9]{3}-[0-9]{4}/g

// Object.assign(target, source, ...) target：ターゲット　source：コピー元
var pet = { type: 'スノーホワイトハムスター',
  name: 'キラ',
  description: {
    birth: '2014-02-15'
  }
};

var pet2 = {
  name: '山田きら',
  color: '白',
  description: {
    food: 'ひまわりのタネ'
  }
};

var pet3 = { weight: 42,
  photo: 'http://www.wings.msn.to/img/ham.jpg'
};

/* 結果
{ type: 'スノーホワイトハムスター',
  name: '山田きら',
  description: { food: 'ひまわりのタネ' },
  color: '白',
  weight: 42,
  photo: 'http://www.wings.msn.to/img/ham.jpg' }
{ type: 'スノーホワイトハムスター',
  name: 'キラ',
  description: { birth: '2014-02-15' } }
*/
var merged = Object.assign({}, pet, pet2, pet3);
console.log(merged);
console.log(pet);

/* 結果
{ type: 'スノーホワイトハムスター',
  name: '山田きら',
  description: { food: 'ひまわりのタネ' },
  color: '白',
  weight: 42,
  photo: 'http://www.wings.msn.to/img/ham.jpg' }
*/
Object.assign(pet, pet2, pet3);
console.log(pet);

/* createメソッド
Object.create(proto [,props])
    proto：生成するオブジェクトの元となるオブジェクト
    props：プロパティ情報
*/

var obj4 = { x: 1, y: 2, z: 3 };
var obj5 = new Object();
obj5.x = 1;
obj5.y = 2;
obj5.z = 3;

var obj6 = Object.create(Object.prototype, {
  x: { value: 1, writable: true, configurable: true, enumerable: true },
  y: { value: 2, writable: true, configurable: true, enumerable: true },
  z: { value: 3, writable: true, configurable: true, enumerable: true }
});