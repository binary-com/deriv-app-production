(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ 767:
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

var IconExclamation = function IconExclamation(_ref) {
    var className = _ref.className;
    return _react2.default.createElement(
        'svg',
        { className: className, width: '16', height: '16', viewBox: '0 0 16 16' },
        _react2.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            _react2.default.createElement('circle', { cx: '8', cy: '8', r: '8', fill: '#FFC107' }),
            _react2.default.createElement(
                'g',
                { fill: '#FFF', transform: 'matrix(1 0 0 -1 6.5 12)' },
                _react2.default.createElement('circle', { cx: '1.5', cy: '1', r: '1' }),
                _react2.default.createElement('path', { d: 'M1.5 3c.6 0 1 .4 1 1v3a1 1 0 1 1-2 0V4c0-.6.4-1 1-1z' })
            )
        )
    );
};

IconExclamation.propTypes = {
    className: _propTypes2.default.string
};

exports.default = IconExclamation;

/***/ })

}]);