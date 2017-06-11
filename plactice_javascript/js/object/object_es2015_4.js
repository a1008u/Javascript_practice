export class MyIterator {
    constructor(data) {
        this.data = data;
    }
    
    [Symbol.iterator](){
        // チェック対象が配列の何番目かを記憶する
        let current = 0;
        
        // this：iteratorを示す([Symbol.iterator]をthatに保持する)
        let that = this;
        
        return {
            next() {return current < that.data.length ?
                           {value: that.data[current++], done: false} :
                           {done: true}; //変数が配列サイズに達している
            }
        };
    }
}

/*
class MyIterator {
    // 引数経由で渡された配列をdataプロパティに設定
    constructor(data) {
        this.data = data;
        this[Symbol.iterator] = function*() {
            let current = 0;
            let that = this;
            while(current < that.data.length) {
                yield that.data[current++];
            }
        };
    }
}
*/