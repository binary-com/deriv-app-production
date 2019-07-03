(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ 819:
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

var IconPriceMove = function IconPriceMove(_ref) {
    var type = _ref.type,
        className = _ref.className,
        classNamePath = _ref.classNamePath;

    var IconType = void 0;
    if (type) {
        switch (type) {
            case 'profit':
                IconType = _react2.default.createElement(
                    'g',
                    { fill: 'none', fillRule: 'evenodd' },
                    _react2.default.createElement('path', { className: classNamePath || undefined, fill: '#2BC8A5', fillRule: 'nonzero', d: 'M8 4l6 8H2z' })
                );
                break;
            case 'loss':
                IconType = _react2.default.createElement(
                    'g',
                    { fill: 'none', fillRule: 'evenodd' },
                    _react2.default.createElement('path', { className: classNamePath || undefined, fill: '#E31C4B', fillRule: 'nonzero', d: 'M8 12l6-8H2z' })
                );
                break;
            default:
                IconType = _react2.default.createElement('path', { className: classNamePath || undefined, fill: '#B0B3BF', fillRule: 'evenodd', d: 'M7 10.4L7.4 9 8 7.9l1-1c.4-.5.6-1 .6-1.5 0-.6-.1-1-.4-1.3-.2-.3-.6-.4-1.2-.4-.5 0-.9.1-1.2.4-.3.3-.4.6-.4 1H5c0-.7.3-1.4.9-1.9.5-.5 1.2-.7 2.1-.7 1 0 1.7.3 2.2.8.5.5.8 1.1.8 2 0 .9-.4 1.7-1.2 2.6l-.8.8c-.4.4-.5 1-.5 1.7H7zm0 2.3c0-.2 0-.4.2-.5l.6-.3c.3 0 .5.1.6.3.2.1.2.3.2.5 0 .3 0 .4-.2.6l-.6.2c-.2 0-.4 0-.6-.2a.8.8 0 0 1-.2-.6z' });
                break;
        }
    }
    return type ? _react2.default.createElement(
        'svg',
        { className: (0, _classnames2.default)('inline-icon', className), width: '16', height: '16', viewBox: '0 0 16 16', xmlns: 'http://www.w3.org/2000/svg' },
        IconType
    ) : null;
};

IconPriceMove.propTypes = {
    className: _propTypes2.default.string,
    type: _propTypes2.default.string
};

exports.default = IconPriceMove;

/***/ })

}]);