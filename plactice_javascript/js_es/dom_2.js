'use strict';

/* ======================== 属性値やテキストを取得/設定 ======================== */
// ---------------------- 不特定の属性を取得 ----------------------
document.addEventListener('DOMContentLoaded', function () {
    var logo = document.getElementById('logo');

    // NamedNodeMapを返す(全属性を取得)
    var attrs = logo.attributes;

    for (var i = 0; i < attrs.length; i++) {
        var attr = attrs.item(i);
        console.log(attr.name + ':' + attr.value);
    }
}, false);
// ---------------------- 不特定の属性を取得 ----------------------

// ---------------------- テキストを取得/設定 ----------------------

document.addEventListener('DOMContentLoaded', function () {

    /*
     * 配下の子要素／テキストを完全に置き換える」という点です 
     * ・innerHTMLプロパティはHTMLとしてテキストを埋め込むので、たしかにリンクが有効になっています
     * ・textContentプロパティはプレーンテキストとして埋め込むので、タグ文字列がそのまま表示されていることが確認できます  
     *
     */
    document.getElementById('result_text').textContent = '<a href="http://www.wings.msn.to/">WINGSプロジェクト</a>';
    document.getElementById('result_html').innerHTML = '<a href="http://www.wings.msn.to/">WINGSプロジェクト</a>';
}, false);

document.addEventListener('DOMContentLoaded', function () {
    var list = document.getElementById('list4');
    console.log(list.innerHTML); //HTMLのタグも一緒に出力する
    console.log(list.textContent); //テキストだけ取り出す
}, false);

document.addEventListener('DOMContentLoaded', function () {
    // ボタンクリック時にあいさつメッセージを反映
    document.getElementById('btn4').addEventListener('click', function () {
        var name = document.getElementById('name4');
        var result = document.getElementById('result4');

        // ここの結果に対して、<div onclick="alert('ほげ')">ほげほげ</div>を設定すると、
        // htmlとして処理ができてしまい、クロスタイトスプリティングとなる
        result.innerHTML = 'こんにちは、' + name.value + 'さん！';
    }, false);
}, false);

// ---------------------- テキストを取得/設定 ----------------------
/* ======================== 属性値やテキストを取得/設定 ======================== */

/* ======================== フォーム要素にアクセス ======================== */
// ---------------------- 入力ボックス/選択ボックスの値を取得 ----------------------
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn5').addEventListener('click', function () {
        var name = document.getElementById('name5');
        console.log(name.value);
    }, false);
}, false);
// ---------------------- 入力ボックス/選択ボックスの値を取得 ----------------------

// ---------------------- checkbox ----------------------
// valueプロパティは選択の有無にかかわらず、value属性で指定された値を返します  
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn6').addEventListener('click', function () {
        var result = [];
        // NodeListオブジェクトを返す
        var foods = document.getElementsByName('food6');

        for (var i = 0; i < foods.length; i++) {
            var foods = foods.item(i);

            if (food.checked) {
                result.psuh(food.value);
            }
        }
        window.alert(result.toString());
    }, false);
}, false);
// ---------------------- checkbox ----------------------

// ---------------------- radio ----------------------
document.addEventListener('DOMContentLoaded', function () {
    // 指定されたラジオボタン（name）の値を取得
    var getRadioValue = function getRadioValue(name) {
        var result = '';
        var elems = document.getElementsByName(name);

        // ラジオボタンを走査し、チェック状態にあるかを確認
        for (var i = 0, len = elems.length; i < len; i++) {
            var elem = elems.item(i);
            // チェックされている項目の値を配列に追加
            if (elem.checked) {
                result = elem.value;
                break;
            }
        }
        return result;
    };

    // ボタンクリック時に選択項目の値をダイアログ表示
    document.getElementById('btn7').addEventListener('click', function () {
        window.alert(getRadioValue('food7'));
    }, false);
}, false);
// ---------------------- radio ----------------------

// ---------------------- radio/checkboxの値を設定 ----------------------
// 初期値を設定
document.addEventListener('DOMContentLoaded', function () {
    // 指定されたラジオボタン（name）の値を設定
    var setRadioValue = function setRadioValue(name, value) {
        var elems = document.getElementsByName(name);

        // ラジオボタンを走査し、値の等しいものを検出
        for (var i = 0, len = elems.length; i < len; i++) {
            var elem = elems.item(i);
            // 引数valueと等しい値を持つ項目を選択状態に
            if (elem.value === value) {
                elem.checked = true;
                break;
            }
        }
    };

    // ラジオボタンfoodの初期値を「餃子」に
    setRadioValue('food8', '餃子');
}, false);

// 初期値を設定
document.addEventListener('DOMContentLoaded', function () {
    // 指定されたラジオボタン（name）の値を設定
    var setCheckValue = function setCheckValue(name, value) {
        var elems = document.getElementsByName(name);

        // ラジオボタンを走査し、値の等しいものを検出
        for (var i = 0, len = elems.length; i < len; i++) {
            var elem = elems.item(i);
            // 引数valueと等しい値を持つ項目を選択状態に
            if (value.indexOf(elem.value) > -1) {
                elem.checked = true;
            }
        }
    };

    setCheckValue('food9', ['餃子', '焼き肉']);
}, false);
// ---------------------- radio/checkboxの値を設定 ----------------------

// ---------------------- リストボックスの設定 ----------------------
document.addEventListener('DOMContentLoaded', function () {
    // 指定されたリストボックス（配列name）の値を設定
    var setListValue = function setListValue(name, value) {
        var opts = document.getElementById(name);
        // <option>要素を走査し、値の等しいものを検出
        for (var i = 0, len = opts.length; i < len; i++) {
            var opt = opts.item(i);
            // 配列valueにvalue属性と等しい値が含まれる場合は選択状態に
            if (value.indexOf(opt.value) > -1) {
                opt.selected = true;
            }
        }
    };

    // リストボックスfoodの初期値を「餃子」「焼き肉」に
    setListValue('food10', ['餃子', '焼き肉']);
}, false);
// ---------------------- リストボックスの設定 ----------------------

// ---------------------- アップロードされたファイルの情報を取得 ----------------------
window.addEventListener('DOMContentLoad', function () {
    document.getElementById("file").addEventListener('change', function (e) {
        var inputs = document.getElementById("file").files;
        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i];
            console.log('ファイル名：' + input.name);
            console.log('種類：' + input.type);
            console.log('サイズ：' + input.size / 1024 + 'KB');
            console.log('最終更新日：' + input.lastModifiedDate);
        }
    }, true);
});
// ---------------------- アップロードされたファイルの情報を取得 ----------------------

// ---------------------- テキストファイルの内容を取得 ----------------------
window.addEventListener('DOMContentLoad', function () {
    document.getElementById("file2").addEventListener('change', function (e) {
        var input = document.getElementById("file2").files[0];
        var reader = new FileReader();
        reader.addEventListner('load', function () {
            document.getElementById("result11").textContent = reader.result;
        }, true);
        reader.readAsText(input, 'UTF-8');
    }, true);
});
// ---------------------- テキストファイルの内容を取得 ----------------------

/* ======================== フォーム要素にアクセス ======================== */