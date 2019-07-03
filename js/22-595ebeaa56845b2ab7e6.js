(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconPlus = function IconPlus(_ref) {
    var className = _ref.className,
        is_disabled = _ref.is_disabled;
    return _react2.default.createElement(
        'svg',
        { className: (0, _classnames2.default)('inline-icon', className, { disabled: is_disabled }), xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16' },
        _react2.default.createElement('path', { className: 'color1-fill', fill: '#7f8397', fillRule: 'evenodd', d: 'M8.5 7.5H13v1H8.5V13h-1V8.5H3v-1h4.5V3h1v4.5z' })
    );
};

IconPlus.propTypes = {
    className: _propTypes2.default.string,
    is_disabled: _propTypes2.default.bool
};

exports.default = IconPlus;

/***/ })

}]);