/* 基本データ型を扱う */
// 集合を管理/操作を扱う(Array/Map/Setオブジェクト)

// 配列を生成--------------------------------------
// 指定要素で配列
var ary = new Array('佐藤', '高江', '長田');    
// 空の配列を生成
var aryary2 = new Array(); 
// 指定サイズ（インデックスは0～9）で空の配列を生成
var aryary3 = new Array(10); 
// 空の配列を生成
var aryary4 = [];

var ary1 = ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh', 'Sato'];
var ary2 = ['Yabuki', 'Aoki', 'Moriyama', 'Yamada'];

console.log(ary1.length);     　　　// 結果：6
console.log(Array.isArray(ary1));   // 結果：true
console.log(ary1.toString());       // 結果：Sato,Takae,Osada,Hio,Saitoh,Sato
// indexOf(文字列(またはindex)) 指定した引数に該当する最初の要素のキーを取得する
console.log(ary1.indexOf('Sato'));  // 結果：0
// lastIndexOf(文字列(またはindex)) 指定した引数に該当する最後の要素のキーを取得する
console.log(ary1.lastIndexOf('Sato')); // 結果：5

/* 結果：["Sato", "Takae", "Osada", "Hio", "Saitoh", "Sato"
           , "Yabuki", "Aoki", "Moriyama", "Yamada"] */
console.log(ary1.concat(ary2));

// 結果：Sato／Takae／Osada／Hio／Saitoh／Sato
console.log(ary1.join('／'));

// slice(start [,end]) start+1〜end番目の要素の抜き出し--
// 結果：["Takae", "Osada", "Hio", "Saitoh", "Sato"]
console.log(ary1.slice(1));
// 結果：["Takae"]
console.log(ary1.slice(1, 2));

// 結果：["Takae", "Osada"]（置き換え対象の要素を取得）     
console.log(ary1.splice(1, 2, 'Kakeya', 'Yamaguchi'));
// 結果：["Sato", "Kakeya", "Yamaguchi", "Hio", "Saitoh", "Sato"]
//      （置き換え後の配列）      
console.log(ary1);
// ------------------------------------------------------

// of(o1,o2,o3......) 可変引数を配列に変換(静的メソッド)
// 結果：[20, 40, 60]
console.log(Array.of(20,40,60));    

// Array.prototype.copyWithin( target, start, end? )------
// startからendの直前までの要素をtargetの位置から貼り付ける。
/* 結果：["Sato", "Hio", "Saitoh", "Hio", "Saitoh", "Sato"]
        （4～5番目の要素を2～3番目の位置へコピー） */
console.log(ary1.copyWithin(1, 3, 5));
// 結果：["Sato", "Hio", "Saitoh", "Hio", "Saitoh", "Sato"]（コピー後の配列）
console.log(ary1);
// ------------------------------------------------------

// Array.prototype.fill( value, start=0, end=this.length )------
// 配列のstartからendの直前までの要素をvalueにする。
// startやendには負数を指定して後ろからの位置を示すことも出来る。
/* 結果：["Yabuki", "Suzuki", "Suzuki", "Yamada"]
        （2～3番目の要素を"Suzuki"で置換） */
console.log(ary2.fill('Suzuki', 1, 3));
// 結果：["Yabuki", "Suzuki", "Suzuki", "Yamada"]（置換後の配列）
console.log(ary2);
// ------------------------------------------------------

// 結果：Sato（削除した要素）----------------------------  
console.log(ary1.pop());     
// 結果：["Sato", "Hio", "Saitoh", "Hio", "Saitoh"]（削除後の配列）
console.log(ary1);
// ------------------------------------------------------

// 結果：6（追加後の要素数）-----------------------------
console.log(ary1.push('Kondo'));     
// 結果：["Sato", "Hio", "Saitoh", "Hio", "Saitoh", "Kondo"]（追加後の配列）
console.log(ary1);
// ------------------------------------------------------

// shift() 配列先頭の要素を取得し削除する----------------
// 結果：Sato（削除した要素）
console.log(ary1.shift());     
// 結果：["Hio", "Saitoh", "Hio", "Saitoh", "Kondo"]（削除後の配列）
console.log(ary1);
// ------------------------------------------------------

// unshift() 配列先頭に指定要素を追加
// 結果：7（追加後の要素数）
console.log(ary1.unshift('Ozawa', 'Kuge'));   
// 結果：["Ozawa", "Kuge[...]
console.log(ary1);
     
// sortの例
// 結果：["Kondo", "Saitoh", "Hio", "Saitoh", "Hio", "Kuge", "Ozawa"]（反転後の配列）
// 結果：["Hio", "Hio", "Kondo", "Kuge", "Ozawa", "Saitoh", "Saitoh"]（ソート後の配列）
// 結果：["Hio", "Hio", "Kondo", "Kuge", "Ozawa", "Saitoh", "Saitoh"]（ソート後の配列）
var ary3 = ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh', 'Sato'];
console.log(ary3);
console.log(ary3.sort());
console.log(ary3);

// queue(FIFO)
var data2 = [];
data2.push(1);
data2.push(2);
data2.push(3);
console.log(data2.pop());     // 結果：3
console.log(data2.pop());     // 結果：2
console.log(data2.pop());     // 結果：1

/*
array.splice(index, many [,elem1 [,elem2,...]])
array：配列オブジェクト     
index：要素の抽出開始位置
many ：取り出す要素数     elem1、elem2...：削除箇所に挿入する要素
*/
var data = ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh'];
// 結果：["Hio", "Saitoh"]
console.log(data.splice(3, 2, 'Yamada', 'Suzuki'));
// 結果：["Sato", "Takae", "Osada", "Yamada", "Suzuki"]
console.log(data);

// 結果：["Yamada", "Suzuki"] 
console.log(data.splice(3, 2));
// 結果：["Sato", "Takae", "Osada"]
console.log(data);

// 結果：[]
// 0：引数indexで指定された位置に要素を挿入する
console.log(data.splice(1, 0, 'Tanaka'));
// 結果：["Sato", "Tanaka", "Takae", "Osada"]
console.log(data);


/* 【コールバック関数】
 * コールバック系のメソッドでは、
 * 大本のメソッドが基本となる操作を提供し、
 * その範囲の中でどのような加工／演算を行うかは、
 * ユーザー定義関数が決める、という役割分担が基本です。
 */
/*
array.forEach(callback [,that])
    array：配列オブジェクト
    callback：個々の要素を処理するための関数
    that：関数callbackの中でthisが示すオブジェクト
*/

var data4 = [2, 3, 4, 5];
// 結果：4、9、16、25
// 説明：valueは要素の値,indexはインデックス番号,arrayは元の配列
data4.forEach(function(value, index, array) {
  console.log(value * value);     
});

/*
array.map(callback [,that])
    array：配列オブジェクト
    callback：個々の要素を加工するための関数
    that：関数callbackの中でthis（5.1.5項）が示すオブジェクト
＊“戻り値として加工した結果を返す
*/

var data6 = [2, 3, 4, 5];
var result6 = data6.map(function(value, index, array) {
    return value * value;
});
console.log(result6);     // 結果：[4, 9, 16, 25]

/*
array.some(callback [,that])
      array：配列オブジェクト
      callback：個々の要素を判定するための関数
      that：関数callbackの中でthis（5.1.5項）が示すオブジェクト
＊戻り値として、要素が条件に合致したかどうかをtrue／falseで返す
someメソッド ： 1つでも条件に合致しているか
everyメソッド： すべての要素が条件に合致するか
*/
var data7 = [4, 9, 16, 25];
var result7 = data7.some(function(value, index, array) {
    return value % 3 === 0;
});

if (result7) {
    console.log('3の倍数が見つかりました。');
} else {
    console.log('3の倍数は見つかりませんでした。');
}

/*
array.filter(callback [,that])
  array：配列オブジェクト
  callback：個々の要素を判定するための関数
  that：関数callbackの中でthis（5.1.5項）が示すオブジェクト
＊関数callbackがtrueを返した場合にだけ、その時の要素を結果配列に書き戻す
*/
var data8 = [4, 9, 16, 25];
var result8 = data8.filter(function(value, index, array) {
    return value % 2 === 1;
});

// 結果：[9, 25]
console.log(result8);  


/* sortの独自設定のルール
・引数は2つ（比較する配列要素）
・第1引数が第2引数より小さい場合は負数、大きい場合は正数を返す
*/
var ary9 = [5, 25, 10];
// 結果：[10, 25, 5]（文字列としてソート）
console.log(ary9.sort());     
// 結果：[5, 10, 25]（数値としてソート）
console.log(ary9.sort(function(x, y) {
    return x - y;
}));     


var classes = ['部長', '課長', '主任', '担当'];
var members = [
    { name: '鈴木清子', clazz: '主任' },
    { name: '山口久雄', clazz: '部長' },
    { name: '井上太郎', clazz: '担当' },
    { name: '和田知美', clazz: '課長' },
    { name: '小森雄太', clazz: '担当' },
];

console.log(members.sort(function(x, y) {
    return classes.indexOf(x.clazz) - classes.indexOf(y.clazz);
}));
/* 変更後の結果
[
    { clazz: "部長" , name: "山口久雄"},
    { clazz: "課長" , name: "和田知美"},
    { clazz: "主任" , name: "鈴木清子"},
    { clazz: "担当" , name: "井上太郎"},
    { clazz: "担当" , name: "小森雄太"}
]
*/
