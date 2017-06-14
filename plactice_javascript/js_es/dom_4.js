'use strict';

/* ======================== スタイルシートの操作 ======================== */
/* DOMでスタイルシートを操作する方法
 * 1.インラインスタイルにアクセスする(styleプロパティ)
 * 2.外部のスタイルシートを適用する(classNameプロパティ)
 *
 */
// ---------------------- インラインスタイルにアクセス(styleプロパティ) ----------------------
document.addEventListener('DOMContentLoaded', function () {
    var elem = document.getElementById('elem');

    // マウスポインターが乗ったタイミングで背景色を変更
    elem.addEventListener('mouseover', function () {
        this.style.backgroundColor = 'Yellow';
    }, false);

    // マウスポインターが外れたタイミングで背景色を戻す
    elem.addEventListener('mouseout', function () {
        this.style.backgroundColor = '';
    }, false);
}, false);
// ---------------------- インラインスタイルにアクセス(styleプロパティ) ----------------------

// ---------------------- 外部スタイルシートを適用(classNameプロパティ) ----------------------
document.addEventListener('DOMContentLoaded', function () {
    var elem = document.getElementById('elem2');

    // マウスポインターが乗ったタイミングで背景色を変更
    elem.addEventListener('mouseover', function () {
        this.className = 'highlight';
    }, false);

    // マウスポインターが外れたタイミングで背景色を戻す
    elem.addEventListener('mouseout', function () {
        this.className = '';
    }, false);
}, false);

// ---------------------- 外部スタイルシートを適用(classNameプロパティ) ----------------------

// ---------------------- スタイルクラスを着脱 ----------------------
document.addEventListener('DOMContentLoaded', function () {
    var elem = document.getElementById('elem3');

    // クリックしたタイミングで背景色を変更
    elem.addEventListener('click', function () {
        this.className = this.className === 'highlight' ? '' : 'highlight';
    }, false);
}, false);
// ---------------------- スタイルクラスを着脱 ----------------------

document.addEventListener('DOMContentLoaded', function () {
    var elem = document.getElementById('elem4');

    elem.addEventListener('click', function () {
        // 空白区切りの文字列を分割
        var classes = this.className.split(' ');
        // highlightが存在する位置を検出
        var index = classes.indexOf('highlight');
        if (index === -1) {
            // 存在しなければ、新たに追加
            classes.push('highlight');
        } else {
            // 存在する場合には、highlightを除去
            classes.splice(index, 1);
        }
        // 配列を空白区切りの文字列に
        this.className = classes.join(' ');
    }, false);
}, false);

/* ======================== スタイルシートの操作 ======================== */