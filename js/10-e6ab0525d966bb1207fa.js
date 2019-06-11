(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ 758:
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

var IconClock = function IconClock(_ref) {
    var className = _ref.className,
        onClick = _ref.onClick,
        _ref$height = _ref.height,
        height = _ref$height === undefined ? '16' : _ref$height,
        _ref$width = _ref.width,
        width = _ref$width === undefined ? '16' : _ref$width;
    return _react2.default.createElement(
        'svg',
        {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 16 16',
            width: width,
            height: height,
            className: className,
            onClick: onClick
        },
        _react2.default.createElement(
            'g',
            { fill: 'none', fillRule: 'nonzero', stroke: '#5C5C5C' },
            _react2.default.createElement('circle', { cx: '8', cy: '8', r: '7.5' }),
            _react2.default.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M8 3.5v5h3.5' })
        )
    );
};

IconClock.propTypes = {
    className: _propTypes2.default.string,
    height: _propTypes2.default.string,
    onClick: _propTypes2.default.func,
    width: _propTypes2.default.string
};

exports.default = IconClock;

/***/ })

}]);