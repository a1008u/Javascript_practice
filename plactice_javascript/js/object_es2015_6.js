console.log('=======ジェネレーターの挙動確認========')

/* ジェネレーターの記載方法
 * 1.function* {...}で定義
 * 2.yield命令で値を返す
 *
 */

function* myGenerator() {
   yield 'あいうえお';
   yield 'かきくけこ';
   yield 'さしすせそ';
}

for(let t of myGenerator()) {
    console.log('myGeneratorの結果：'+t);　// 結果：あいうえお、かきくけこ、さしすせそ
}    

// -----------------------------------------------------------
// 素数を求めるためのジェネレーター
function* genPrimes() {
    let num = 2;     // 素数の開始値
    
    // 2から順に素数判定し、素数の場合にだけyield（無限ループ）
    while (true) {
        if (isPrime(num)) { yield num; }
        num++;
    }
}

// 引数valueが素数かどうかを判定
function isPrime(value) {
    let prime = true;     // 素数かどうかを表すフラグ
    
    // 2～Math.sqrt(value)で、valueを割り切れる値があるかを判定
    // Math.sqrt(number) ：引数として与えた数の平方根を返します。
    // Math.floor(number)：引数として与えた数以下の最大の整数を返します。
    for (let i = 2; i <= Math.floor(Math.sqrt(value)); i++) {
        if (value % i === 0) {
            prime = false;     // 割り切れたら素数でない
            break;
        }
    }
    
    return prime;
}

for(let value of genPrimes()) {
    // 素数が101以上になったら終了（これがないと無限ループになるので注意！）
    if (value > 100) { break; }
    
    // 結果：2、3、5、7、11、13、17、19、23、29、31、37、
    //       41、43、47、53、59、61、67、71、73、79、83、89、97
    console.log(value); 
}     

