// ---------------------- アップロードされたファイルの情報を取得 ----------------------
window.addEventListener('DOMContentLoad', function(){
    document.getElementById("file").addEventListener('change', function(e){
        var inputs = document.getElementById("file").files;
        for (var i=0; i < inputs.length; i++){
            var input = inputs[i];
            console.log('ファイル名：' + input.name);
            console.log('種類：' + input.type);
            console.log('サイズ：' + input.size/1024 + 'KB');
            console.log('最終更新日：' + input.lastModifiedDate);
        }
    }, true);
});
// ---------------------- アップロードされたファイルの情報を取得 ----------------------
 
// ---------------------- テキストファイルの内容を取得 ----------------------
window.addEventListener('DOMContentLoad', function(){
    document.getElementById("file2").addEventListener('change', function(e){
        var input = document.getElementById("file2").files[0];
        var reader = new FileReader();
        reader.addEventListner('load',function(){
            document.getElementById("result11").textContent = reader.result;
        },true);
        reader.readAsText(input, 'UTF-8');
    }, true);
});
// ---------------------- テキストファイルの内容を取得 ----------------------
