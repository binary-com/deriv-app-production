(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ 766:
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

var IconInfoOutline = function IconInfoOutline(_ref) {
    var className = _ref.className,
        onMouseEnter = _ref.onMouseEnter,
        onMouseLeave = _ref.onMouseLeave;
    return _react2.default.createElement(
        'svg',
        {
            className: (0, _classnames2.default)('inline-icon', className),
            height: '16',
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            viewBox: '0 0 16 16',
            width: '16'

        },
        _react2.default.createElement('path', { className: 'color1-fill', fill: 'rgba(0, 0, 0, 0.16)', fillRule: 'evenodd', d: 'M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM8 6a.75.75 0 1 0 0-1.5A.75.75 0 0 0 8 6zm0 1a.5.5 0 0 0-.5.5v4a.5.5 0 1 0 1 0v-4A.5.5 0 0 0 8 7z' })
    );
};

IconInfoOutline.propTypes = {
    className: _propTypes2.default.string
};

exports.default = IconInfoOutline;

/***/ })

}]);