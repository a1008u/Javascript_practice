'use strict';

var _marked = [myGenerator, genPrimes].map(regeneratorRuntime.mark);

console.log('=======ジェネレーターの挙動確認========'

/* ジェネレーターの記載方法
 * 1.function* {...}で定義
 * 2.yield命令で値を返す
 *
 */

);function myGenerator() {
    return regeneratorRuntime.wrap(function myGenerator$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return 'あいうえお';

                case 2:
                    _context.next = 4;
                    return 'かきくけこ';

                case 4:
                    _context.next = 6;
                    return 'さしすせそ';

                case 6:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = myGenerator()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var t = _step.value;

        console.log('myGeneratorの結果：' + t); // 結果：あいうえお、かきくけこ、さしすせそ
    }

    // -----------------------------------------------------------
    // 素数を求めるためのジェネレーター
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

function genPrimes() {
    var num;
    return regeneratorRuntime.wrap(function genPrimes$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    num = 2; // 素数の開始値

                    // 2から順に素数判定し、素数の場合にだけyield（無限ループ）

                case 1:
                    if (!true) {
                        _context2.next = 8;
                        break;
                    }

                    if (!isPrime(num)) {
                        _context2.next = 5;
                        break;
                    }

                    _context2.next = 5;
                    return num;

                case 5:
                    num++;
                    _context2.next = 1;
                    break;

                case 8:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked[1], this);
}

// 引数valueが素数かどうかを判定
function isPrime(value) {
    var prime = true; // 素数かどうかを表すフラグ

    // 2～Math.sqrt(value)で、valueを割り切れる値があるかを判定
    // Math.sqrt(number) ：引数として与えた数の平方根を返します。
    // Math.floor(number)：引数として与えた数以下の最大の整数を返します。
    for (var i = 2; i <= Math.floor(Math.sqrt(value)); i++) {
        if (value % i === 0) {
            prime = false; // 割り切れたら素数でない
            break;
        }
    }

    return prime;
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = genPrimes()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var value = _step2.value;

        // 素数が101以上になったら終了（これがないと無限ループになるので注意！）
        if (value > 100) {
            break;
        }

        // 結果：2、3、5、7、11、13、17、19、23、29、31、37、
        //       41、43、47、53、59、61、67、71、73、79、83、89、97
        console.log(value);
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}