/* 本格的な開発に備える */
/* ====== 名前空間／パッケージを作成する ====== */

// Wingsが未定義の場合にだけ新たな名前空間を作成する
var Wings = Wings || {};

// Memberクラスを作成(コンストラクタ)
Wings.Member = function(firstName, lastName) {
    this.firstNmae = firstName;
    this.lastName = lastName;
};

// Memberクラスを作成(getter)
Wings.Member.prototype = {
    getName:function(){
        return this.lastName + ' ' + this.firstNmae; 
    }
};

// 実行
var mem = new Wings.Member('T', 'MMM');
console.log(mem);


// 階層を持った名前空間を定義する--------------------
function namespace(ns) {
    var names = ns.split('.');
    var parent = window;

    for (var i=0, len = names.length; i<len; i++){
        parent[names[i]] = parent[names[i]] || {};
        parent = parent[names[i]];
    } 
    
    return parent;
}

var my = namespace('Wings.gihyo.js.mmmm');
my.Person = function() {};
var p = new my.Person();
console.log(p instanceof Wings.gihyo.js.mmmm.Person);
// 階層を持った名前空間を定義する--------------------
/* ====== 名前空間／パッケージを作成する ====== */