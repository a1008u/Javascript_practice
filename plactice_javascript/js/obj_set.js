/* 基本データ型を扱う */
// 重複しない値の集合を管理/操作を扱う(Set_es2015)

let s = new Set();
s.add(10);
s.add(5);
s.add(100);
s.add(50);

// 同値は無視される
s.add(5); 

// 結果：true
console.log(s.has(100));
// 結果：4
console.log(s.size);

// 結果：10 5 100 50
for(let val of s.values()){
    console.log(val);
}

// 結果：10 5 100 50
for(let val of s){
    console.log(val);
}

s.delete(100);
// 結果：3
console.log(s.size);

s.clear();
// 結果：0
console.log(s.size);


let s2 = new Set();
s2.add(NaN);
s2.add(NaN);
// 結果：1（同じ値は無視）
console.log(s2.size);     

s2.add({});
s2.add({});
// 結果：3（異なるオブジェクトとして追加） 
console.log(s2.size);    