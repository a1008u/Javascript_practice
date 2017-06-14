'use strict';

/* ======================== ノードを追加/置換/削除する ======================== */

/* 
 * シンプルなコンテンツの編集：　innerHTMLプロパティ
 * 複雑なコンテンツの編集　　：　新規にノード追加、
 *
 */
// 
// ----------------------  ----------------------

// ---------------------- 新規にノード追加 ----------------------
// createElement(name):新たな要素めいを作成
// createTextNode(text)：新たなテキストノードを作成

// appendChild(node)：指定された要素を現在の要素の子要素として追加する。
// → insertBefore(ノード,　子要素)

// 属性ノードを追加する(属性名と同名のプロパティを設定する)
/*
    var href = document.createAttribute('href');
    // 追加する属性ノードを指定
    href.value = url.value;
    // 属性ノードを追加する
    anchor.setAttributeNode(href);
*/
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn').addEventListener('click', function () {
        var name = document.getElementById('name');
        var url = document.getElementById('url');

        var anchor = document.createElement('a');
        anchor.href = url.value;
        var text = document.createTextNode(name.value);
        anchor.appendChild(text);

        var br = document.createElement('br');

        var list = document.getElementById('list');

        list.appendChild(anchor);
        list.appendChild(br);
    }, false);
}, false);
// ---------------------- 新規にノード追加 ----------------------

// ---------------------- 新規にノード追加(複雑なコンテンツの作成) ----------------------
var books = [{ title: '独習PHP 第3版', price: 3200 }, { title: 'Javaポケットリファレンス', price: 2680 }, { title: 'アプリを作ろう！Android入門', price: 2000 }];

document.addEventListener('DOMContentLoaded', function () {
    // ulタグのlist2(id)を取得
    var list = document.getElementById('list2');

    // 配列booksの内容を順番に<li>要素に整形
    for (var i = 0, len = books.length; i < len; i++) {
        var b = books[i];
        var li = document.createElement('li');
        var text = document.createTextNode(b.title + '：' + b.price + '円');
        li.appendChild(text);
        list.appendChild(li);
    }
}, false);

// 上記のソースの改善
document.addEventListener('DOMContentLoaded', function () {
    // コンテンツを貯めるためのDocumentFragmentオブジェクトを生成
    var frag = document.createDocumentFragment();

    // 配列booksの内容を順番に<li>要素に整形
    for (var i = 0, len = books.length; i < len; i++) {
        var b = books[i];
        var li = document.createElement('li');
        var text = document.createTextNode(b.title + '：' + b.price + '円');
        li.appendChild(text);
        frag.appendChild(li);
    }

    // <li>要素群をまとめて文書ツリーに追加
    document.getElementById('list3').appendChild(frag);
}, false);
// ---------------------- 新規にノード追加(複雑なコンテンツの作成) ----------------------

// ---------------------- HTMLCollection／NodeListをくり返し処理する場合の注意点1  ----------------------
// オブジェクトが文書ツリーを参照しており、
// 文書ツリーへの変更がHTMLCollection／NodeListオブジェクトにもリアルタイムに反映される
document.addEventListener('DOMContentLoaded', function () {
    var li = document.getElementsByTagName('li');
    console.log('変更前：' + li.length); // 結果：5

    var ul = document.getElementById('list4');
    ul.appendChild(document.createElement('li'));
    console.log('変更後：' + li.length); // 結果：6
}, false);

// ---------------------- HTMLCollection／NodeListをくり返し処理する場合の注意点1  ----------------------
// ---------------------- HTMLCollection／NodeListをくり返し処理する場合の注意点2  ----------------------
document.addEventListener('DOMContentLoaded', function () {
    var second = document.getElementById('second');
    var li = document.getElementsByTagName('li');

    for (var i = 0; i < li.length; i++) {
        var item = li.item(i);
        var new_li = document.createElement('li');
        var new_text = document.createTextNode(item.textContent);
        new_li.appendChild(new_text);
        second.appendChild(new_li);
    }
}, false);

// ---------------------- HTMLCollection／NodeListをくり返し処理する場合の注意点2  ----------------------


/* ======================== ノードを追加/置換/削除する ======================== */