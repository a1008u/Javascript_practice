import * as MyItr from './object/object_es2015_4';
let data_ary = ['one', 'two', 'three'];

console.log('=============iteratorの動きをチェック=============');

// for...of命令では、内部的に[Symbol.iterator]メソッド経由でイテレーターを取り出す
for(let d of data_ary) {
    console.log(d);     // 結果：one、two、three
}

/* iteratorで配列の中身を表示 */
let itr = data_ary[Symbol.iterator]();
let d;

while(d = itr.next()) {
    if (d.done){break;}
    console.log('done:' + d.done + ' value:' + d.value);
}

// ---------------------------------------------------------------
let data_str = 'あいうえお';

for(let d of data_str) {
    console.log(d);     // 結果：あ、い、う、え、お
}

// ---------------------------------------------------------------
let data_map = new Map([ ['MON', '月曜']
                       , ['TUE', '火曜']
                       , ['WED', '水曜'] ]);

for(let [key, value] of data_map) {
    console.log(`${key}：${value}`);     // 結果：MON：月曜、TUE：火曜、WED：水曜
}


let Itr = new MyItr.MyIterator(['one','two','three']);
for(let value of Itr){
    console.log(value);
}

