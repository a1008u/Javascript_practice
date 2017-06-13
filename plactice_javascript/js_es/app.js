(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyIterator = exports.MyIterator = function () {
    function MyIterator(data) {
        _classCallCheck(this, MyIterator);

        this.data = data;
    }

    _createClass(MyIterator, [{
        key: Symbol.iterator,
        value: function value() {
            // チェック対象が配列の何番目かを記憶する
            var current = 0;

            // this：iteratorを示す([Symbol.iterator]をthatに保持する)
            var that = this;

            return {
                next: function next() {
                    return current < that.data.length ? { value: that.data[current++], done: false } : { done: true }; //変数が配列サイズに達している
                }
            };
        }
    }]);

    return MyIterator;
}();

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

},{}],2:[function(require,module,exports){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _object_es2015_ = require('./object/object_es2015_4');

var MyItr = _interopRequireWildcard(_object_es2015_);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var data_ary = ['one', 'two', 'three'];

console.log('=============iteratorの動きをチェック=============');

// for...of命令では、内部的に[Symbol.iterator]メソッド経由でイテレーターを取り出す
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = data_ary[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _d = _step.value;

        console.log(_d); // 結果：one、two、three
    }

    /* iteratorで配列の中身を表示 */
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var itr = data_ary[Symbol.iterator]();
var d = void 0;

while (d = itr.next()) {
    if (d.done) {
        break;
    }
    console.log('done:' + d.done + ' value:' + d.value);
}

// ---------------------------------------------------------------
var data_str = 'あいうえお';

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = data_str[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _d2 = _step2.value;

        console.log(_d2); // 結果：あ、い、う、え、お
    }

    // ---------------------------------------------------------------
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var data_map = new Map([['MON', '月曜'], ['TUE', '火曜'], ['WED', '水曜']]);

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = data_map[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _step3$value = _slicedToArray(_step3.value, 2),
            key = _step3$value[0],
            value = _step3$value[1];

        console.log(key + '\uFF1A' + value); // 結果：MON：月曜、TUE：火曜、WED：水曜
    }
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

var Itr = new MyItr.MyIterator(['one', 'two', 'three']);
var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
    for (var _iterator4 = Itr[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var value = _step4.value;

        console.log(value);
    }
} catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
        }
    } finally {
        if (_didIteratorError4) {
            throw _iteratorError4;
        }
    }
}

},{"./object/object_es2015_4":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9vYmplY3Qvb2JqZWN0X2VzMjAxNV80LmpzIiwianMvb2JqZWN0X2VzMjAxNV8zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQ0FhLFUsV0FBQSxVO0FBQ1Qsd0JBQVksSUFBWixFQUFrQjtBQUFBOztBQUNkLGFBQUssSUFBTCxHQUFZLElBQVo7QUFDSDs7O2FBRUEsT0FBTyxRO2dDQUFXO0FBQ2Y7QUFDQSxnQkFBSSxVQUFVLENBQWQ7O0FBRUE7QUFDQSxnQkFBSSxPQUFPLElBQVg7O0FBRUEsbUJBQU87QUFDSCxvQkFERyxrQkFDSTtBQUFDLDJCQUFPLFVBQVUsS0FBSyxJQUFMLENBQVUsTUFBcEIsR0FDQSxFQUFDLE9BQU8sS0FBSyxJQUFMLENBQVUsU0FBVixDQUFSLEVBQThCLE1BQU0sS0FBcEMsRUFEQSxHQUVBLEVBQUMsTUFBTSxJQUFQLEVBRlAsQ0FBRCxDQUVzQjtBQUM1QjtBQUpFLGFBQVA7QUFNSDs7Ozs7O0FBR0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTs7SUFBWSxLOzs7O0FBQ1osSUFBSSxXQUFXLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxPQUFmLENBQWY7O0FBRUEsUUFBUSxHQUFSLENBQVksNENBQVo7O0FBRUE7Ozs7OztBQUNBLHlCQUFhLFFBQWIsOEhBQXVCO0FBQUEsWUFBZixFQUFlOztBQUNuQixnQkFBUSxHQUFSLENBQVksRUFBWixFQURtQixDQUNDO0FBQ3ZCOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSSxNQUFNLFNBQVMsT0FBTyxRQUFoQixHQUFWO0FBQ0EsSUFBSSxVQUFKOztBQUVBLE9BQU0sSUFBSSxJQUFJLElBQUosRUFBVixFQUFzQjtBQUNsQixRQUFJLEVBQUUsSUFBTixFQUFXO0FBQUM7QUFBTztBQUNuQixZQUFRLEdBQVIsQ0FBWSxVQUFVLEVBQUUsSUFBWixHQUFtQixTQUFuQixHQUErQixFQUFFLEtBQTdDO0FBQ0g7O0FBRUQ7QUFDQSxJQUFJLFdBQVcsT0FBZjs7Ozs7OztBQUVBLDBCQUFhLFFBQWIsbUlBQXVCO0FBQUEsWUFBZixHQUFlOztBQUNuQixnQkFBUSxHQUFSLENBQVksR0FBWixFQURtQixDQUNDO0FBQ3ZCOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSSxXQUFXLElBQUksR0FBSixDQUFRLENBQUUsQ0FBQyxLQUFELEVBQVEsSUFBUixDQUFGLEVBQ0UsQ0FBQyxLQUFELEVBQVEsSUFBUixDQURGLEVBRUUsQ0FBQyxLQUFELEVBQVEsSUFBUixDQUZGLENBQVIsQ0FBZjs7Ozs7OztBQUlBLDBCQUF3QixRQUF4QixtSUFBa0M7QUFBQTtBQUFBLFlBQXpCLEdBQXlCO0FBQUEsWUFBcEIsS0FBb0I7O0FBQzlCLGdCQUFRLEdBQVIsQ0FBZSxHQUFmLGNBQXNCLEtBQXRCLEVBRDhCLENBQ007QUFDdkM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRCxJQUFJLE1BQU0sSUFBSSxNQUFNLFVBQVYsQ0FBcUIsQ0FBQyxLQUFELEVBQU8sS0FBUCxFQUFhLE9BQWIsQ0FBckIsQ0FBVjs7Ozs7O0FBQ0EsMEJBQWlCLEdBQWpCLG1JQUFxQjtBQUFBLFlBQWIsS0FBYTs7QUFDakIsZ0JBQVEsR0FBUixDQUFZLEtBQVo7QUFDSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgY2xhc3MgTXlJdGVyYXRvciB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbiAgICBcbiAgICBbU3ltYm9sLml0ZXJhdG9yXSgpe1xuICAgICAgICAvLyDjg4Hjgqfjg4Pjgq/lr77osaHjgYzphY3liJfjga7kvZXnlarnm67jgYvjgpLoqJjmhrbjgZnjgotcbiAgICAgICAgbGV0IGN1cnJlbnQgPSAwO1xuICAgICAgICBcbiAgICAgICAgLy8gdGhpc++8mml0ZXJhdG9y44KS56S644GZKFtTeW1ib2wuaXRlcmF0b3Jd44KSdGhhdOOBq+S/neaMgeOBmeOCiylcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5leHQoKSB7cmV0dXJuIGN1cnJlbnQgPCB0aGF0LmRhdGEubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogdGhhdC5kYXRhW2N1cnJlbnQrK10sIGRvbmU6IGZhbHNlfSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB7ZG9uZTogdHJ1ZX07IC8v5aSJ5pWw44GM6YWN5YiX44K144Kk44K644Gr6YGU44GX44Gm44GE44KLXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuXG4vKlxuY2xhc3MgTXlJdGVyYXRvciB7XG4gICAgLy8g5byV5pWw57WM55Sx44Gn5rih44GV44KM44Gf6YWN5YiX44KSZGF0YeODl+ODreODkeODhuOCo+OBq+ioreWumlxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpc1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24qKCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSAwO1xuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgd2hpbGUoY3VycmVudCA8IHRoYXQuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGF0LmRhdGFbY3VycmVudCsrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG4qLyIsImltcG9ydCAqIGFzIE15SXRyIGZyb20gJy4vb2JqZWN0L29iamVjdF9lczIwMTVfNCc7XG5sZXQgZGF0YV9hcnkgPSBbJ29uZScsICd0d28nLCAndGhyZWUnXTtcblxuY29uc29sZS5sb2coJz09PT09PT09PT09PT1pdGVyYXRvcuOBruWLleOBjeOCkuODgeOCp+ODg+OCrz09PT09PT09PT09PT0nKTtcblxuLy8gZm9yLi4ub2blkb3ku6Tjgafjga/jgIHlhoXpg6jnmoTjgatbU3ltYm9sLml0ZXJhdG9yXeODoeOCveODg+ODiee1jOeUseOBp+OCpOODhuODrOODvOOCv+ODvOOCkuWPluOCiuWHuuOBmVxuZm9yKGxldCBkIG9mIGRhdGFfYXJ5KSB7XG4gICAgY29uc29sZS5sb2coZCk7ICAgICAvLyDntZDmnpzvvJpvbmXjgIF0d2/jgIF0aHJlZVxufVxuXG4vKiBpdGVyYXRvcuOBp+mFjeWIl+OBruS4rei6q+OCkuihqOekuiAqL1xubGV0IGl0ciA9IGRhdGFfYXJ5W1N5bWJvbC5pdGVyYXRvcl0oKTtcbmxldCBkO1xuXG53aGlsZShkID0gaXRyLm5leHQoKSkge1xuICAgIGlmIChkLmRvbmUpe2JyZWFrO31cbiAgICBjb25zb2xlLmxvZygnZG9uZTonICsgZC5kb25lICsgJyB2YWx1ZTonICsgZC52YWx1ZSk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxubGV0IGRhdGFfc3RyID0gJ+OBguOBhOOBhuOBiOOBiic7XG5cbmZvcihsZXQgZCBvZiBkYXRhX3N0cikge1xuICAgIGNvbnNvbGUubG9nKGQpOyAgICAgLy8g57WQ5p6c77ya44GC44CB44GE44CB44GG44CB44GI44CB44GKXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxubGV0IGRhdGFfbWFwID0gbmV3IE1hcChbIFsnTU9OJywgJ+aciOabnCddXG4gICAgICAgICAgICAgICAgICAgICAgICwgWydUVUUnLCAn54Gr5pucJ11cbiAgICAgICAgICAgICAgICAgICAgICAgLCBbJ1dFRCcsICfmsLTmm5wnXSBdKTtcblxuZm9yKGxldCBba2V5LCB2YWx1ZV0gb2YgZGF0YV9tYXApIHtcbiAgICBjb25zb2xlLmxvZyhgJHtrZXl977yaJHt2YWx1ZX1gKTsgICAgIC8vIOe1kOaenO+8mk1PTu+8muaciOabnOOAgVRVRe+8mueBq+abnOOAgVdFRO+8muawtOabnFxufVxuXG5cbmxldCBJdHIgPSBuZXcgTXlJdHIuTXlJdGVyYXRvcihbJ29uZScsJ3R3bycsJ3RocmVlJ10pO1xuZm9yKGxldCB2YWx1ZSBvZiBJdHIpe1xuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbn1cblxuIl19
