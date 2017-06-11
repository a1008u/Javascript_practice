'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _object_es2015_ = require('./object/object_es2015_1');

var Mber = _interopRequireWildcard(_object_es2015_);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* 以下のようにimportもできる
import { Member } from './object/object_es2015_1';
import { Member as MMMM } from './object/object_es2015_1';
*/

var BusinessMember = function (_Mber$Member) {
    _inherits(BusinessMember, _Mber$Member);

    function BusinessMember(firstName, lastName, clazz) {
        _classCallCheck(this, BusinessMember);

        var _this = _possibleConstructorReturn(this, (BusinessMember.__proto__ || Object.getPrototypeOf(BusinessMember)).call(this, firstName, lastName));

        _this.clazz = clazz;
        return _this;
    }

    _createClass(BusinessMember, [{
        key: 'work',
        value: function work() {
            return this.getName() + 'は働いています。';
        }
    }, {
        key: 'getName',
        value: function getName() {
            return _get(BusinessMember.prototype.__proto__ || Object.getPrototypeOf(BusinessMember.prototype), 'getName', this).call(this) + '/役職:' + this.clazz;
        }
    }]);

    return BusinessMember;
}(Mber.Member);

console.log('');
console.log('=============object_es2015_2.jsの結果=============');
var bm = new BusinessMember('aaaaa', 'bbbbbb');
console.log('getName()の結果：：：' + bm.getName());
console.log('work()の結果：：：：' + bm.work());

console.log('');
console.log('=============object_es2015_2.jsの結果(superのオーバーライド)=============');
var bm2 = new BusinessMember('aaaaa', 'bbbbbb', 'ssssuper');
console.log('getName()の結果：：：' + bm2.getName());