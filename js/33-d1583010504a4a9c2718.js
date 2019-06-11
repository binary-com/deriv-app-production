(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IconTick = undefined;

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconTick = exports.IconTick = function IconTick() {
    return _react2.default.createElement(
        'svg',
        { width: '16', height: '16', viewBox: '0 0 16 16' },
        _react2.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            _react2.default.createElement('circle', { cx: '8', cy: '8', r: '8', fill: '#4caf50' }),
            _react2.default.createElement('path', { fill: '#fff', fillRule: 'nonzero', d: 'M6.5 10.793l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L6.5 10.793z' })
        )
    );
};

IconTick.propTypes = {
    circle_color: _propTypes2.default.string,
    tick_color: _propTypes2.default.string
};

exports.default = IconTick;

/***/ })

}]);