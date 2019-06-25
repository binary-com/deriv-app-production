(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconInfoBlue = function IconInfoBlue(_ref) {
    var className = _ref.className;
    return _react2.default.createElement(
        'svg',
        { className: className, width: '16', height: '16', viewBox: '0 0 16 16' },
        _react2.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            _react2.default.createElement('circle', { cx: '8', cy: '8', r: '8', fill: '#2196F3' }),
            _react2.default.createElement(
                'g',
                { fill: '#FFF', transform: 'translate(6.5 4)' },
                _react2.default.createElement('circle', { cx: '1.5', cy: '1', r: '1' }),
                _react2.default.createElement('rect', { width: '2', height: '5', x: '.5', y: '3', rx: '1' })
            )
        )
    );
};

IconInfoBlue.propTypes = {
    className: _propTypes2.default.string
};

exports.default = IconInfoBlue;

/***/ })

}]);