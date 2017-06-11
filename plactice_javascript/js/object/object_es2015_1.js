export class Member {
    // コンストラクタ
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    static getFirstname(firstName){
        return 'firstName: ' + firstName;
    }
    
    // getter
    getName(){
        return 'Memberの結果：  lastName:' + this.lastName +'|| firstName:' + this.firstName;
    }
    
    
}

const Member2 = class {
    // コンストラクタ
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    // getter
    getName(){
        return 'Member2の結果： lastName:' + this.lastName +'|| firstName:' + this.firstName;
    }
}



// letでインスタンス化
let m = new Member('aaa','nnnnn');
console.log(m.getName());
// console.log(m.getFirstname()); エラー
console.log(Member.getFirstname('aaaaa'));

let m2 = new Member2('aaa','nnnnn');
console.log(m2.getName());