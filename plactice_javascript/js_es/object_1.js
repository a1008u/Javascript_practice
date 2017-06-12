'use strict';

/* JavaScriptにおけるオブジェクト指向*/
/* ====== クラスではなく、プロトタイプ ====== */
// プロトタイプ：アウロブジェkつおの元となるオブジェクト
// JS = プロトタイプベースのオブゼクト指向
// JavaScriptでは関数（Functionオブジェクト）にクラスとしての役割を与えている

var Member = function Member(firstName, lastName) {
    // thisはコンストラクタによって生成されるインスタンス(自分自身(mem)を表す
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = function () {
        return this.lastName + ' ' + this.firstName;
    };
};

var mem = new Member('祥寛', '山田');
console.log(mem.getName()); // 結果：山田 祥寛
/* ====== クラスではなく、プロトタイプ ====== */

/* ====== 動的にメソッドを追加 ====== */
// 生成されたインスタンスに対してメソッドが追加
// 【プロトタイプベースのオブジェクト指向の特徴】
// 同一のクラスを元に生成されたインスタンスであっても、
// それぞれが持つメンバーは同一であるとは限らない 
var Member = function Member(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

var mem = new Member('祥寛', '山田');
mem.getName = function () {
    return this.lastName + ' ' + this.firstName;
};
console.log(mem.getName()); // 結果：山田 祥寛

var mem2 = new Member('祥寛', '山田');
// console.log(mem2.getName()); //エラー
/* ====== 動的にメソッドを追加 ====== */

/* ====== thisキーワード ====== */
/*
* 場所：トップレベル(関数の外) -- thisの参照先：グローバルオブジェクト
* 場所：関数                   -- thisの参照先：グローバルオブジェクト
* call/applyメソッド           -- thisの参照先：引数で指定されたオブジェクト
* (Functionオブジェクトの関数)
* イベントリスナー             -- thisの参照先：イベントの発生元
* コンストラクター             -- thisの参照先：生成したインスタンス
* メソッド                     -- thisの参照先：呼び出し元のオブジェクト(=レシーバーオブジェクト)
*/

// call-----------------------------------------
var data = 'Global data';
var obj1 = { data: 'obj1 data' };
var obj2 = { data: 'obj2 data' };

function hoge() {
    console.log(this.data);
}

hoge.call(null); // 結果：Global data
hoge.call(obj1); // 結果：obj1 data
hoge.call(obj2); // 結果：obj2 data
// call-----------------------------------------

// 配列ライクなオブジェクトを配列に変換する------
function hoge() {
    var args = Array.prototype.slice.call(arguments);
    console.log(args.join('／'));
}
hoge('Angular', 'React', 'Backbone'); // 結果：Angular／React／Backbone

// 配列ライクなオブジェクトを配列に変換する------ 
/* ====== thisキーワード ====== */

/* ====== コンストラクターの強制的な呼び出し ====== */
var Member = function Member(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

// Memberオブジェクトは生成されずに、グローバル変数として生成
// thisがグローバルオブジェクトを示す
var m = Member('権兵衛', '佐藤');
console.log(m); // 結果：undefined
console.log(firstName); // 結果：権兵衛
// console.log(m.firstName);   // 結果：エラー（Cannot read property 'firstName' of undefined）

// 上記の対策------------------------------
var Member = function Member(firstName, lastName) {

    // Memberオブジェクトが生成されてない場合は、グローバルオブジェクトを利用
    if (!(this instanceof Member)) {
        return new Member(firstName, lastName);
    }

    this.firstName = firstName;
    this.lastName = lastName;
};
var m = Member('権兵衛', '佐藤');
console.log(m); // 結果：undefined
console.log(firstName); // 結果：権兵衛
console.log(m.firstName); // 結果：エラー（Cannot read property 'firstName' of undefined）


/* ====== コンストラクターの強制的な呼び出し ====== */