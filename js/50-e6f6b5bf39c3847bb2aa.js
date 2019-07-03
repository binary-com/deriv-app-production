(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ 805:
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

var IconClose = function IconClose(_ref) {
    var className = _ref.className,
        onClick = _ref.onClick;
    return _react2.default.createElement(
        'svg',
        {
            className: (0, _classnames2.default)('inline-icon', className),
            xmlns: 'http://www.w3.org/2000/svg',
            width: '16',
            height: '16',
            onClick: onClick
        },
        _react2.default.createElement('path', {
            className: 'color1-fill',
            fillOpacity: '0.8',
            d: 'M8 6.587l4.293-4.294a1 1 0 0 1 1.414 1.414L9.414 8.002l4.293 4.294a1 1 0 0 1-1.414 1.414L8 9.416 3.707 13.71a1 1 0 1 1-1.414-1.414l4.293-4.294-4.293-4.295a1 1 0 1 1 1.414-1.414L8 6.587z'
        })
    );
};

IconClose.propTypes = {
    className: _propTypes2.default.string
};

exports.default = IconClose;

/***/ })

}]);