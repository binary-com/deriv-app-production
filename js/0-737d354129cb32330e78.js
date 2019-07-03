(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 755:
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

var IconArrowBold = function IconArrowBold(_ref) {
    var className = _ref.className,
        classNamePath = _ref.classNamePath;
    return _react2.default.createElement(
        'svg',
        { className: (0, _classnames2.default)('inline-icon', className), width: '16', height: '16' },
        _react2.default.createElement('path', {
            className: (0, _classnames2.default)(classNamePath, 'color1-fill'),
            fill: '#000',
            fillOpacity: '.8',
            fillRule: 'evenodd',
            d: 'M8 9.586l5.293-5.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 1.414-1.414L8 9.586z'
        })
    );
};

IconArrowBold.propTypes = {
    className: _propTypes2.default.string,
    classNamePath: _propTypes2.default.string
};

exports.default = IconArrowBold;

/***/ })

}]);