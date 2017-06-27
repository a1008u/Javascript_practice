/* 
new Masonry(要素のセレクタ,オプション)
1.要素セレクタ：可変グリッドとなるボックスを囲む親要素
2.{}：処理

*/
document.addEventListener('DOMContentLoaded', function() {
    new Masonry('body',{
        // ボックス要素のセレクタ
        itemSelector: '.item',
        // グリッドの横幅
        columnWidth: 180,
        // 左右のボックスとの区間
        gutter: 4
    })
});
