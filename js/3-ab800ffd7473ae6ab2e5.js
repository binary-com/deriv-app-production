(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 755:
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

var IconCalendarToday = function IconCalendarToday(_ref) {
    var className = _ref.className,
        classNamePath = _ref.classNamePath,
        onClick = _ref.onClick;
    return _react2.default.createElement(
        'svg',
        {

            width: '16',
            height: '16',
            className: className,
            onClick: onClick
        },
        _react2.default.createElement('path', { className: classNamePath || 'color1-fill', fill: '#000', fillOpacity: '.8', fillRule: 'evenodd', d: 'M5 3v.5a.5.5 0 0 1-1 0V3H2v2h12V3h-2v.5a.5.5 0 1 1-1 0V3H5zm0-1h6v-.5a.5.5 0 1 1 1 0V2h2a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2v-.5a.5.5 0 0 1 1 0V2zM2 6v8h12V6H2zm8.354 5.146a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 0 1 .708.708L9.207 10l1.147 1.146zm-3 0a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 1 1 .708.708L6.207 10l1.147 1.146z' })
    );
};

IconCalendarToday.propTypes = {
    className: _propTypes2.default.string,
    classNamePath: _propTypes2.default.string,
    onClick: _propTypes2.default.func
};

exports.default = IconCalendarToday;

/***/ })

}]);