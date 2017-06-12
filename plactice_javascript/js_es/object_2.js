'use strict';

/* コンストラクターの問題点とプロトタイプ */
/* ====== prototypeプロパティ ====== */
// ・デフォルトで空のオブジェクトを参照していますが、プロパティやメソッドを追加することができます。
// ・prototypeプロパティに格納されたメンバーは、インスタンス化された先のオブジェクトに引き継がれる
// ・prototypeプロパティに対して追加されたメンバーは、
// 　そのクラス（コンストラクター）を元に生成されたすべてのインスタンスから利用できるというわけです。
// ・やや難しげな言い方をするならば、オブジェクトをインスタンス化した場合、
//   インスタンスは元となるオブジェクトに属するprototypeオブジェクトに対して、
//   暗黙的な参照を持つことになる

var Member = function Member(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Member.prototype.getName = function () {
    return this.lastName + ' ' + this.firstName;
};

var mem = new Member('祥寛', '山田');
console.log(mem.getName()); // 結果：山田 祥寛

// 生成順の変更------------------------------------
var mem2 = new Member('祥寛', '山田');

// インスタンス化の後にメソッドを追加(暗黙参照のため)
Member.prototype.getName = function () {
    return this.lastName + ' ' + this.firstName;
};

console.log(mem2.getName()); // 結果：山田 祥寛 

/* ====== prototypeプロパティ ====== */

/* ====== プロパティの設定・削除 ====== */
// 前提：インスタンス側でのメンバーの追加や削除といった操作が、
//       プロトタイプオブジェクトにまで影響を及ぼすことはない
var Member = function Member() {};

Member.prototype.sex = '男';
var mem1 = new Member();
var mem2 = new Member();

console.log(mem1.sex + '|' + mem2.sex); // 結果：男｜男 
mem2.sex = '女';
console.log(mem1.sex + '|' + mem2.sex); // 結果：男｜女

delete mem1.sex;
delete mem2.sex;
console.log(mem1.sex + '|' + mem2.sex); // 結果：男｜男

// 無理やりundefinedに設定する
mem2.sex = undefined;
console.log(mem1.sex + '|' + mem2.sex); // 結果：男｜undefined
/* ====== プロパティの設定・削除 ====== */
/* ====== プロパティの設定 ====== */

/* ====== オブジェクトリテラルでプロトタイプを定義 ====== */

// ベースとなるオブジェクト
var Member = function Member(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

// プロトタイプを定義(直接)--------------------------
Member.prototype.getName = function () {
    return this.lastName + ' ' + this.firstName;
};

Member.prototype.toString = function () {
    return this.lastName + this.firstName;
};
// プロトタイプを定義(直接)--------------------------

// プロトタイプを定義(オブジェクトリテラル)----------
Member.prototype = {
    getName: function getName() {
        return this.lastName + ' ' + this.firstName;
    },
    toString: function toString() {
        return this.lastName + this.firstName;
    }
};
// プロトタイプを定義(オブジェクトリテラル)----------

/* ====== オブジェクトリテラルでプロトタイプを定義 ====== */

/* ====== 静的プロパティ/メソッドを定義 ====== */
// 静的プロパティ/メソッドはプロトタイプオブジェクトには登録できない
var Area = function Area() {}; // コンストラクター
Area.version = '1.0'; // 静的プロパティの定義

// 静的メソッドtriangleの定義
Area.triangle = function (base, height) {
    return base * height / 2;
};

// 静的メソッドdiamondの定義
Area.diamond = function (width, height) {
    return width * height / 2;
};

// Area経由で静的メソッドを実行
console.log('Areaクラスのバージョン：' + Area.version); // 結果：1.0
console.log('三角形の面積：' + Area.triangle(5, 3)); // 結果：7.5

// インスタンスには追加されない
var a = new Area();
console.log('菱形の面積：' + a.diamond(10, 2)); // 結果：エラー

/* ====== 静的プロパティ/メソッドを定義 ====== */