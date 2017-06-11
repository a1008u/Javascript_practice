'use strict';

/*==============【引数の設定】==============*/

function showMessage(value) {

    // 引数の数をチェックする(argumentsオブジェクトを利用する)
    if (arguments.length !== 1) {
        throw new Error('引数の数が間違っています：' + arguments.length);
    }

    console.log(value);
}

try {
    showMessage('山田', '鈴木');
} catch (e) {
    console.log(e.message);
}

// =============================================================================
function getTraiangle(base, height) {
    if (base === undefined) {
        base = 1;
    }
    if (height === undefined) {
        height = 1;
    }
    return base * height / 2;
}

console.log(getTraiangle(5));

// =============================================================================
function printf(format) {
    // 引数の2番目以降を順番に処理
    for (var i = 0, len = arguments.length; i < len; i++) {
        var pattern = new RegExp('\\{' + (i - 1) + '\\}', 'g');
        format = format.replace(pattern, arguments[i]);
    }
    console.log(format);
}

// 結果：こんにちは、掛谷さん。私は山田です。
printf('こんにちは、{0}さん。私は{1}です。', '掛谷', '山田');

// =============================================================================
/* 名前付き引数
・引数が多くなっても、コードの意味がわかりやすい
・省略可能な引数をスマートに表現できる
・引数の順番を自由に変更できる
*/

function getTriangle(args) {
    if (args.base === undefined) {
        args.base = 1;
    }
    if (args.height === undefined) {
        args.height = 1;
    }
    return args.base * args.height / 2;
}

console.log(getTriangle({ base: 5, height: 4 }));