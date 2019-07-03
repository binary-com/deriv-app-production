(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 759:
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

var IconCalendar = function IconCalendar(_ref) {
    var className = _ref.className,
        onClick = _ref.onClick;
    return _react2.default.createElement(
        'svg',
        {

            width: '16',
            height: '16',
            className: (0, _classnames2.default)('inline-icon', className),
            onClick: onClick
        },
        _react2.default.createElement('path', { className: 'color1-fill', fill: '#000', fillOpacity: '.8', fillRule: 'nonzero', d: 'M4 3H2v11h12V3h-2v.5a.5.5 0 1 1-1 0V3H5v.5a.5.5 0 0 1-1 0V3zm1-1h6v-.5a.5.5 0 1 1 1 0V2h2a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2v-.5a.5.5 0 0 1 1 0V2zM2 5h12v1H2V5z' })
    );
};

IconCalendar.propTypes = {
    className: _propTypes2.default.string,
    onClick: _propTypes2.default.func
};

exports.default = IconCalendar;

/***/ })

}]);