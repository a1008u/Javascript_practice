'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Member = exports.Member = function () {
    // コンストラクタ
    function Member(firstName, lastName) {
        _classCallCheck(this, Member);

        this.firstName = firstName;
        this.lastName = lastName;
    }

    _createClass(Member, [{
        key: 'getName',


        // getter
        value: function getName() {
            return 'Memberの結果：  lastName:' + this.lastName + '|| firstName:' + this.firstName;
        }
    }], [{
        key: 'getFirstname',
        value: function getFirstname(firstName) {
            return 'firstName: ' + firstName;
        }
    }]);

    return Member;
}();

var Member2 = function () {
    // コンストラクタ
    function Member2(firstName, lastName) {
        _classCallCheck(this, Member2);

        this.firstName = firstName;
        this.lastName = lastName;
    }

    // getter


    _createClass(Member2, [{
        key: 'getName',
        value: function getName() {
            return 'Member2の結果： lastName:' + this.lastName + '|| firstName:' + this.firstName;
        }
    }]);

    return Member2;
}();

// letでインスタンス化
var m = new Member('aaa', 'nnnnn');
console.log(m.getName());
// console.log(m.getFirstname()); エラー
console.log(Member.getFirstname('aaaaa'));

var m2 = new Member2('aaa', 'nnnnn');
console.log(m2.getName());