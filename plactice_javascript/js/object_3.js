/* オブジェクトの継承-プロトタイプチェーン- */
/* ====== プロトタイプチェーンの基礎 ====== */

var Animal = function() {};
Animal.prototype = {
    walk : function() {
        console.log('トコトコ...');
    }
};

var Dog = function() {
    Animal.call(this);
};

Dog.prototype = new Animal();
Dog.prototype.bark = function() {
    console.log('ワンワン！');
}

var d = new Dog();
d.walk();     // 結果：トコトコ...
d.bark();     // 結果：ワンワン！
 
/* ====== プロトタイプチェーンの基礎 ====== */

/* ====== 継承関係は動的に変更可能 ====== */
var Animal = function() {};

Animal.prototype = {
    walk : function() {
        console.log('トコトコ...');
    }
};

var SuperAnimal = function() {};
    SuperAnimal.prototype = {
        walk : function() {
        console.log('ダダダダダ！ ');
    }
};

var Dog = function() {};
Dog.prototype = new Animal();     // Animalオブジェクトを継承
var d1 = new Dog();
d1.walk();     // 結果：トコトコ...

Dog.prototype = new SuperAnimal();     // SuperAnimalオブジェクトを継承
var d2 = new Dog();
d2.walk();     // 結果：ダダダダダ！
d1.walk();     // 結果：トコトコ...

// 「d1.walk();     // 結果：トコトコ...」表示の理由
// JavaScriptのプロトタイプチェーンは、
// インスタンスが生成された時点で固定され、
// その後の変更にかかわらず保存される

/* ====== 継承関係は動的に変更可能 ====== */

/* ====== オブジェクトの型を判定する ====== */
// 型判定の方法
var Animal = function(){};
var Hamster = function(){};
Hamster.prototype = new Animal();
var a = new Animal();
var h = new Hamster()

// 1.constructorプロパティ(元となるコンストラクターを取得)
console.log(a.constructor() === Animal);  // 結果：true
console.log(h.constructor() === Animal);  // 結果：true
console.log(h.constructor() === Hamster); // 結果：false

// 2.instanceof演算子(元となるコンストラクターを判定)
console.log(h instanceof Animal);     // 結果：true
console.log(h instanceof Hamster);    // 結果：true

// 3.isPrototypeOfメソッド(参照しているプロトタイプを確認)
console.log(Hamster.prototype.isPrototypeOf(h)); // 結果：true
console.log(Animal.prototype.isPrototypeOf(h));  // 結果：true

// 4.in演算子(絵mんバーの有無を判定)
var obj = { hoge: function(){}, foo: function(){} };

console.log('hoge' in obj);     // 結果：true
console.log('piyo' in obj);     // 結果：false

/* ====== オブジェクトの型を判定する ====== */