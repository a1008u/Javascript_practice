/* 本格的な開発に備える */
/* ====== Object.definePropertyメソッドによるアクセサーメソッドの実装 ====== */
function Traiangle() {
   var _base;
   var _height;
   
   // プリビレッジドメソッド（特権メソッド）
   // 必ずコンストラクタ関数の中で定義する(クロージャー)
   // アクセスメソッド（getterとsetter）
   
   Object.defineProperty(
       this,
       '_base',
       {
           get:function() {
               return _base;
           },
           set:function(base) {
               if(typeof tmp === 'number' && base > 0) {
                   _base = base;
               }
           }
       }
    );
   
   
   Object.defineProperty(
       this,
       '_height',
       {
           get:function() {
               return _height;
           },
           set:function(height) {
               if(typeof tmp === 'number' && height > 0) {
                   _height = height;
               }
           }
       }
    );
};

Traiangle.prototype.getArea = function () {
    return this.base * this.height / 2;
};

var t = new Traiangle();

t.base = 10;
t.height = 2;
console.log('三角形の底辺：' + t.base);
console.log('三角形の高さ：' + t.height);
console.log('三角形の面積：' + t.getArea());
/* ====== Object.definePropertyメソッドによるアクセサーメソッドの実装 ====== */