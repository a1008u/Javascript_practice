import * as Mber from './object/object_es2015_1';
/* 以下のようにimportもできる
import { Member } from './object/object_es2015_1';
import { Member as MMMM } from './object/object_es2015_1';
*/

class BusinessMember extends Mber.Member {
    
    constructor(firstName,lastName,clazz){
        super(firstName,lastName);
        this.clazz = clazz;
    }
    
    work(){
        return this.getName() + 'は働いています。';
    }
    
    getName(){
        return super.getName() + '/役職:' + this.clazz;
    }
}

console.log('');
console.log('=============object_es2015_2.jsの結果=============');
let bm = new BusinessMember('aaaaa','bbbbbb');
console.log('getName()の結果：：：' + bm.getName());
console.log('work()の結果：：：：' + bm.work());

console.log('');
console.log('=============object_es2015_2.jsの結果(superのオーバーライド)=============');
let bm2 = new BusinessMember('aaaaa','bbbbbb','ssssuper');
console.log('getName()の結果：：：' + bm2.getName());