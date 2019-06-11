(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ 809:
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

var _imgEvenOddDark = __webpack_require__(838);

var _imgEvenOddDark2 = _interopRequireDefault(_imgEvenOddDark);

var _imgEvenOddLight = __webpack_require__(839);

var _imgEvenOddLight2 = _interopRequireDefault(_imgEvenOddLight);

var _imgHigherLowerDark = __webpack_require__(840);

var _imgHigherLowerDark2 = _interopRequireDefault(_imgHigherLowerDark);

var _imgHigherLowerLight = __webpack_require__(841);

var _imgHigherLowerLight2 = _interopRequireDefault(_imgHigherLowerLight);

var _imgMatchesDiffersDark = __webpack_require__(842);

var _imgMatchesDiffersDark2 = _interopRequireDefault(_imgMatchesDiffersDark);

var _imgMatchesDiffersLight = __webpack_require__(843);

var _imgMatchesDiffersLight2 = _interopRequireDefault(_imgMatchesDiffersLight);

var _imgOverUnderDark = __webpack_require__(844);

var _imgOverUnderDark2 = _interopRequireDefault(_imgOverUnderDark);

var _imgOverUnderLight = __webpack_require__(845);

var _imgOverUnderLight2 = _interopRequireDefault(_imgOverUnderLight);

var _imgRiseFallDark = __webpack_require__(846);

var _imgRiseFallDark2 = _interopRequireDefault(_imgRiseFallDark);

var _imgRiseFallLight = __webpack_require__(847);

var _imgRiseFallLight2 = _interopRequireDefault(_imgRiseFallLight);

var _imgTouchNoTouchDark = __webpack_require__(848);

var _imgTouchNoTouchDark2 = _interopRequireDefault(_imgTouchNoTouchDark);

var _imgTouchNoTouchLight = __webpack_require__(849);

var _imgTouchNoTouchLight2 = _interopRequireDefault(_imgTouchNoTouchLight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// TODO: Replace static image svgs with themed GIFs or animated SVGs
var TradeCategoriesGIF = function TradeCategoriesGIF(_ref) {
    var _classNames;

    var category = _ref.category,
        className = _ref.className,
        is_dark = _ref.is_dark;

    var TradeTypeGIF = void 0;
    var themed_classes = (0, _classnames2.default)(className, (_classNames = {}, _defineProperty(_classNames, className + '--dark', is_dark), _defineProperty(_classNames, className + '--light', !is_dark), _classNames));
    if (category) {
        switch (category) {
            case 'rise_fall' || 'rise_fall_equal':
                TradeTypeGIF = is_dark ? _react2.default.createElement(_imgRiseFallDark2.default, { className: themed_classes }) : _react2.default.createElement(_imgRiseFallLight2.default, { className: themed_classes });
                break;
            case 'high_low':
                TradeTypeGIF = is_dark ? _react2.default.createElement(_imgHigherLowerDark2.default, { className: themed_classes }) : _react2.default.createElement(_imgHigherLowerLight2.default, { className: themed_classes });
                break;
            case 'match_diff':
                TradeTypeGIF = is_dark ? _react2.default.createElement(_imgMatchesDiffersDark2.default, { className: themed_classes }) : _react2.default.createElement(_imgMatchesDiffersLight2.default, { className: themed_classes });
                break;
            case 'even_odd':
                TradeTypeGIF = is_dark ? _react2.default.createElement(_imgEvenOddDark2.default, { className: themed_classes }) : _react2.default.createElement(_imgEvenOddLight2.default, { className: themed_classes });
                break;
            case 'over_under':
                TradeTypeGIF = is_dark ? _react2.default.createElement(_imgOverUnderDark2.default, { className: themed_classes }) : _react2.default.createElement(_imgOverUnderLight2.default, { className: themed_classes });
                break;
            case 'touch':
                TradeTypeGIF = is_dark ? _react2.default.createElement(_imgTouchNoTouchDark2.default, { className: themed_classes }) : _react2.default.createElement(_imgTouchNoTouchLight2.default, { className: themed_classes });
                break;
            default:
                TradeTypeGIF = null;
                break;
        }
    }
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        TradeTypeGIF
    );
};

TradeCategoriesGIF.propTypes = {
    category: _propTypes2.default.string,
    className: _propTypes2.default.string,
    is_dark: _propTypes2.default.bool
};

exports.default = TradeCategoriesGIF;

/***/ }),

/***/ 838:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends.apply(this, arguments);
}

exports.default = function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return _react2.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "270",
    height: "152"
  }, props), _react2.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(6 2)"
  }, _react2.default.createElement("rect", {
    width: "258",
    height: "140",
    fill: "#101320",
    fillRule: "nonzero",
    rx: "4"
  }), _react2.default.createElement("path", {
    fill: "#191C31",
    fillRule: "nonzero",
    d: "M149.03 85.33h31.09c3.05 0 5.52 2.3 5.52 5.11 0 2.83-2.47 5.12-5.52 5.12H38.5c-3.06 0-5.53-2.3-5.53-5.12 0-2.82 2.47-5.1 5.53-5.1H99.3c3.05 0 5.52-2.3 5.52-5.12s-2.47-5.1-5.52-5.1H52.32v-.05c-2.76-.32-4.83-2.5-4.83-5.07s2.07-4.75 4.83-5.07v-.04h19.34c3.06 0 5.53-2.29 5.53-5.11 0-2.83-2.47-5.11-5.53-5.11H46.11c-3.06 0-5.53-2.3-5.53-5.11 0-2.83 2.47-5.12 5.52-5.12h131.25c3.06 0 5.53 2.3 5.53 5.12 0 2.82-2.47 5.1-5.53 5.1h-51.11c-3.06 0-5.53 2.3-5.53 5.12s2.48 5.1 5.53 5.1h30.4c3.04 0 5.52 2.3 5.52 5.12 0 2.82-2.48 5.11-5.53 5.11h-16.58c-3.05 0-5.52 2.29-5.52 5.11s2.47 5.11 5.52 5.11h8.98zM29.53 44.44c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.52 5.1S24 52.39 24 49.57c0-2.83 2.47-5.12 5.53-5.12zM159.4 24h38.68c3.05 0 5.53 2.29 5.53 5.11s-2.48 5.11-5.53 5.11H159.4c-3.06 0-5.53-2.29-5.53-5.1 0-2.83 2.47-5.12 5.53-5.12zm-23.5 0c3.06 0 5.53 2.29 5.53 5.11s-2.47 5.11-5.52 5.11c-3.05 0-5.53-2.29-5.53-5.1 0-2.83 2.48-5.12 5.53-5.12zm67.01 20.44h9.68c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.52 5.1h-9.68c-3.05 0-5.52-2.28-5.52-5.1 0-2.83 2.47-5.12 5.52-5.12zM178.74 64.9h20.72c3.05 0 5.53 2.29 5.53 5.11s-2.48 5.11-5.53 5.11h-20.72c-3.06 0-5.53-2.29-5.53-5.1s2.47-5.12 5.53-5.12zm19.34 20.44h30.4c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.53 5.1h-30.4c-3.04 0-5.52-2.28-5.52-5.1 0-2.83 2.48-5.11 5.53-5.11zM66.14 105.78h62.17c3.05 0 5.53 2.29 5.53 5.1 0 2.83-2.48 5.12-5.53 5.12H66.14c-3.05 0-5.53-2.29-5.53-5.11s2.48-5.11 5.53-5.11zm82.9 0h9.66c3.06 0 5.53 2.29 5.53 5.1 0 2.83-2.47 5.12-5.53 5.12h-9.67c-3.05 0-5.52-2.29-5.52-5.11s2.47-5.11 5.52-5.11z"
  }), _react2.default.createElement("path", {
    d: "M137 38h63.66v63.66H137z"
  }), _react2.default.createElement("path", {
    fill: "#F93",
    d: "M183.26 69.14h-29.4l14.61-23.18 14.8 23.18zm-17.39-6.65h5.38l-2.69-4.25-2.69 4.25z"
  }), _react2.default.createElement("path", {
    fill: "#FFF",
    d: "M166.68 97.13h-29.41l14.61-23.19 14.8 23.18zm-17.49-6.65h5.38l-2.69-4.25-2.69 4.24zm50.75 6.64h-29.4l14.6-23.18 14.8 23.18zm-17.4-6.65h5.39l-2.7-4.24-2.68 4.24z"
  }), _react2.default.createElement("path", {
    fill: "#F93",
    d: "M57.54 63.82v-25.2h25.2v25.2h-25.2zm16.4-16.32h-7.53v7.54h7.54V47.5zm21.25 54.16v-25.2h25.2v25.2h-25.2zm16.32-16.41h-7.53v7.53h7.53v-7.53z"
  }), _react2.default.createElement("path", {
    fill: "#FFF",
    d: "M95.2 38.63h25.19v25.2h-25.2v-25.2zm8.78 16.4h7.53V47.5h-7.53v7.53zm-46.44 46.63v-25.2h25.2v25.2h-25.2zm16.4-16.41h-7.53v7.53h7.54v-7.53z"
  })));
};

/***/ }),

/***/ 839:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends.apply(this, arguments);
}

exports.default = function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return _react2.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "258",
    height: "140"
  }, props), _react2.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react2.default.createElement("rect", {
    width: "258",
    height: "140",
    fill: "#FFF",
    rx: "4"
  }), _react2.default.createElement("path", {
    fill: "#336",
    d: "M149.03 85.33h31.09c3.05 0 5.52 2.3 5.52 5.11 0 2.83-2.47 5.12-5.52 5.12H38.5c-3.06 0-5.53-2.3-5.53-5.12 0-2.82 2.47-5.1 5.53-5.1H99.3c3.05 0 5.52-2.3 5.52-5.12s-2.47-5.1-5.52-5.1H52.32v-.05c-2.76-.32-4.83-2.5-4.83-5.07s2.07-4.75 4.83-5.07v-.04h19.34c3.06 0 5.53-2.29 5.53-5.11 0-2.83-2.47-5.11-5.53-5.11H46.11c-3.06 0-5.53-2.3-5.53-5.11 0-2.83 2.47-5.12 5.52-5.12h131.25c3.06 0 5.53 2.3 5.53 5.12 0 2.82-2.47 5.1-5.53 5.1h-51.11c-3.06 0-5.53 2.3-5.53 5.12s2.48 5.1 5.53 5.1h30.4c3.04 0 5.52 2.3 5.52 5.12 0 2.82-2.48 5.11-5.53 5.11h-16.58c-3.05 0-5.52 2.29-5.52 5.11s2.47 5.11 5.52 5.11h8.98zM29.53 44.44c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.52 5.1S24 52.39 24 49.57c0-2.83 2.47-5.12 5.53-5.12zM159.4 24h38.68c3.05 0 5.53 2.29 5.53 5.11s-2.48 5.11-5.53 5.11H159.4c-3.06 0-5.53-2.29-5.53-5.1 0-2.83 2.47-5.12 5.53-5.12zm-23.5 0c3.06 0 5.53 2.29 5.53 5.11s-2.47 5.11-5.52 5.11c-3.05 0-5.53-2.29-5.53-5.1 0-2.83 2.48-5.12 5.53-5.12zm67.01 20.44h9.68c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.52 5.1h-9.68c-3.05 0-5.52-2.28-5.52-5.1 0-2.83 2.47-5.12 5.52-5.12zM178.74 64.9h20.72c3.05 0 5.53 2.29 5.53 5.11s-2.48 5.11-5.53 5.11h-20.72c-3.06 0-5.53-2.29-5.53-5.1s2.47-5.12 5.53-5.12zm19.34 20.44h30.4c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.53 5.1h-30.4c-3.04 0-5.52-2.28-5.52-5.1 0-2.83 2.48-5.11 5.53-5.11zM66.14 105.78h62.17c3.05 0 5.53 2.29 5.53 5.1 0 2.83-2.48 5.12-5.53 5.12H66.14c-3.05 0-5.53-2.29-5.53-5.11s2.48-5.11 5.53-5.11zm82.9 0h9.66c3.06 0 5.53 2.29 5.53 5.1 0 2.83-2.47 5.12-5.53 5.12h-9.67c-3.05 0-5.52-2.29-5.52-5.11s2.47-5.11 5.52-5.11z",
    opacity: ".08"
  }), _react2.default.createElement("path", {
    d: "M137 38h63.66v63.66H137z"
  }), _react2.default.createElement("path", {
    fill: "#F93",
    fillRule: "nonzero",
    d: "M183.26 69.14h-29.4l14.61-23.18 14.8 23.18zm-17.39-6.65h5.38l-2.69-4.25-2.69 4.25z"
  }), _react2.default.createElement("path", {
    fill: "#336",
    d: "M166.68 97.13h-29.41l14.61-23.19 14.8 23.18zm-17.49-6.65h5.38l-2.69-4.25-2.69 4.24zm50.75 6.64h-29.4l14.6-23.18 14.8 23.18zm-17.4-6.65h5.39l-2.7-4.24-2.68 4.24z"
  }), _react2.default.createElement("path", {
    fill: "#F93",
    fillRule: "nonzero",
    d: "M57.54 63.82v-25.2h25.2v25.2h-25.2zm16.4-16.32h-7.53v7.54h7.54V47.5zm21.25 54.16v-25.2h25.2v25.2h-25.2zm16.32-16.41h-7.53v7.53h7.53v-7.53z"
  }), _react2.default.createElement("path", {
    fill: "#336",
    d: "M95.2 38.63h25.19v25.2h-25.2v-25.2zm8.78 16.4h7.53V47.5h-7.53v7.53zm-46.44 46.63v-25.2h25.2v25.2h-25.2zm16.4-16.41h-7.53v7.53h7.54v-7.53z"
  })));
};

/***/ }),

/***/ 840:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends.apply(this, arguments);
}

exports.default = function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return _react2.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "270",
    height: "152"
  }, props), _react2.default.createElement("defs", null, _react2.default.createElement("path", {
    id: "a",
    d: "M0 0h63.66v63.66H0z"
  })), _react2.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(6 2)"
  }, _react2.default.createElement("rect", {
    width: "258",
    height: "140",
    fill: "#101320",
    fillRule: "nonzero",
    rx: "4"
  }), _react2.default.createElement("path", {
    fill: "#191C31",
    fillRule: "nonzero",
    d: "M149.03 85.33h31.09c3.05 0 5.52 2.3 5.52 5.11 0 2.83-2.47 5.12-5.52 5.12H38.5c-3.06 0-5.53-2.3-5.53-5.12 0-2.82 2.47-5.1 5.53-5.1H99.3c3.05 0 5.52-2.3 5.52-5.12s-2.47-5.1-5.52-5.1H52.32v-.05c-2.76-.32-4.83-2.5-4.83-5.07s2.07-4.75 4.83-5.07v-.04h19.34c3.06 0 5.53-2.29 5.53-5.11 0-2.83-2.47-5.11-5.53-5.11H46.11c-3.06 0-5.53-2.3-5.53-5.11 0-2.83 2.47-5.12 5.52-5.12h131.25c3.06 0 5.53 2.3 5.53 5.12 0 2.82-2.47 5.1-5.53 5.1h-51.11c-3.06 0-5.53 2.3-5.53 5.12s2.48 5.1 5.53 5.1h30.4c3.04 0 5.52 2.3 5.52 5.12 0 2.82-2.48 5.11-5.53 5.11h-16.58c-3.05 0-5.52 2.29-5.52 5.11s2.47 5.11 5.52 5.11h8.98zM29.53 44.44c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.52 5.1S24 52.39 24 49.57c0-2.83 2.47-5.12 5.53-5.12zM159.4 24h38.68c3.05 0 5.53 2.29 5.53 5.11s-2.48 5.11-5.53 5.11H159.4c-3.06 0-5.53-2.29-5.53-5.1 0-2.83 2.47-5.12 5.53-5.12zm-23.5 0c3.06 0 5.53 2.29 5.53 5.11s-2.47 5.11-5.52 5.11c-3.05 0-5.53-2.29-5.53-5.1 0-2.83 2.48-5.12 5.53-5.12zm67.01 20.44h9.68c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.52 5.1h-9.68c-3.05 0-5.52-2.28-5.52-5.1 0-2.83 2.47-5.12 5.52-5.12zM178.74 64.9h20.72c3.05 0 5.53 2.29 5.53 5.11s-2.48 5.11-5.53 5.11h-20.72c-3.06 0-5.53-2.29-5.53-5.1s2.47-5.12 5.53-5.12zm19.34 20.44h30.4c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.53 5.1h-30.4c-3.04 0-5.52-2.28-5.52-5.1 0-2.83 2.48-5.11 5.53-5.11zM66.14 105.78h62.17c3.05 0 5.53 2.29 5.53 5.1 0 2.83-2.48 5.12-5.53 5.12H66.14c-3.05 0-5.53-2.29-5.53-5.11s2.48-5.11 5.53-5.11zm82.9 0h9.66c3.06 0 5.53 2.29 5.53 5.1 0 2.83-2.47 5.12-5.53 5.12h-9.67c-3.05 0-5.52-2.29-5.52-5.11s2.47-5.11 5.52-5.11z"
  }), _react2.default.createElement("g", {
    transform: "translate(137 38)"
  }, _react2.default.createElement("mask", {
    id: "b",
    fill: "#fff"
  }, _react2.default.createElement("use", {
    xlinkHref: "#a"
  })), _react2.default.createElement("g", {
    mask: "url(#b)"
  }, _react2.default.createElement("path", {
    fill: "#FFF",
    d: "M40.35 34.64l15.06 15.1v-9.26h7.89V63.2H32.82c0-4.31 3.5-7.9 7.88-7.9h9.06L29.14 34.63H.54v-7.9H63.3v7.9H40.35z"
  }), _react2.default.createElement("path", {
    fill: "#F93",
    d: "M13.99 8.4H.54v13.48h8.25v-7.45l7.44 7.45h11.2z"
  }))), _react2.default.createElement("path", {
    d: "M57 38h63.66v63.66H57z"
  }), _react2.default.createElement("path", {
    fill: "#FFF",
    d: "M85.78 75.06L106.4 54.4h-9.05a7.9 7.9 0 0 1-7.9-7.9h30.5v22.73h-7.9v-9.26L97 75.07h22.95v7.9H57.18v-7.9h28.6z"
  }), _react2.default.createElement("path", {
    fill: "#F93",
    d: "M70.63 101.3H57.18V87.82h8.25v7.46l7.44-7.46h11.2z"
  })));
};

/***/ }),

/***/ 841:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends.apply(this, arguments);
}

exports.default = function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return _react2.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "258",
    height: "140"
  }, props), _react2.default.createElement("defs", null, _react2.default.createElement("path", {
    id: "a",
    d: "M0 0h63.66v63.66H0z"
  })), _react2.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react2.default.createElement("rect", {
    width: "258",
    height: "140",
    fill: "#FFF",
    rx: "4"
  }), _react2.default.createElement("path", {
    fill: "#336",
    d: "M149.03 85.33h31.09c3.05 0 5.52 2.3 5.52 5.11 0 2.83-2.47 5.12-5.52 5.12H38.5c-3.06 0-5.53-2.3-5.53-5.12 0-2.82 2.47-5.1 5.53-5.1H99.3c3.05 0 5.52-2.3 5.52-5.12s-2.47-5.1-5.52-5.1H52.32v-.05c-2.76-.32-4.83-2.5-4.83-5.07s2.07-4.75 4.83-5.07v-.04h19.34c3.06 0 5.53-2.29 5.53-5.11 0-2.83-2.47-5.11-5.53-5.11H46.11c-3.06 0-5.53-2.3-5.53-5.11 0-2.83 2.47-5.12 5.52-5.12h131.25c3.06 0 5.53 2.3 5.53 5.12 0 2.82-2.47 5.1-5.53 5.1h-51.11c-3.06 0-5.53 2.3-5.53 5.12s2.48 5.1 5.53 5.1h30.4c3.04 0 5.52 2.3 5.52 5.12 0 2.82-2.48 5.11-5.53 5.11h-16.58c-3.05 0-5.52 2.29-5.52 5.11s2.47 5.11 5.52 5.11h8.98zM29.53 44.44c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.52 5.1S24 52.39 24 49.57c0-2.83 2.47-5.12 5.53-5.12zM159.4 24h38.68c3.05 0 5.53 2.29 5.53 5.11s-2.48 5.11-5.53 5.11H159.4c-3.06 0-5.53-2.29-5.53-5.1 0-2.83 2.47-5.12 5.53-5.12zm-23.5 0c3.06 0 5.53 2.29 5.53 5.11s-2.47 5.11-5.52 5.11c-3.05 0-5.53-2.29-5.53-5.1 0-2.83 2.48-5.12 5.53-5.12zm67.01 20.44h9.68c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.52 5.1h-9.68c-3.05 0-5.52-2.28-5.52-5.1 0-2.83 2.47-5.12 5.52-5.12zM178.74 64.9h20.72c3.05 0 5.53 2.29 5.53 5.11s-2.48 5.11-5.53 5.11h-20.72c-3.06 0-5.53-2.29-5.53-5.1s2.47-5.12 5.53-5.12zm19.34 20.44h30.4c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.53 5.1h-30.4c-3.04 0-5.52-2.28-5.52-5.1 0-2.83 2.48-5.11 5.53-5.11zM66.14 105.78h62.17c3.05 0 5.53 2.29 5.53 5.1 0 2.83-2.48 5.12-5.53 5.12H66.14c-3.05 0-5.53-2.29-5.53-5.11s2.48-5.11 5.53-5.11zm82.9 0h9.66c3.06 0 5.53 2.29 5.53 5.1 0 2.83-2.47 5.12-5.53 5.12h-9.67c-3.05 0-5.52-2.29-5.52-5.11s2.47-5.11 5.52-5.11z",
    opacity: ".08"
  }), _react2.default.createElement("g", {
    transform: "translate(137 38)"
  }, _react2.default.createElement("mask", {
    id: "b",
    fill: "#fff"
  }, _react2.default.createElement("use", {
    xlinkHref: "#a"
  })), _react2.default.createElement("g", {
    mask: "url(#b)"
  }, _react2.default.createElement("path", {
    fill: "#336",
    d: "M40.35 34.64l15.06 15.1v-9.26h7.89V63.2H32.82c0-4.31 3.5-7.9 7.88-7.9h9.06L29.14 34.63H.54v-7.9H63.3v7.9H40.35z"
  }), _react2.default.createElement("path", {
    fill: "#F93",
    fillRule: "nonzero",
    d: "M13.99 8.4H.54v13.48h8.25v-7.45l7.44 7.45h11.2z"
  }))), _react2.default.createElement("path", {
    d: "M57 38h63.66v63.66H57z"
  }), _react2.default.createElement("path", {
    fill: "#336",
    d: "M85.78 75.06L106.4 54.4h-9.05a7.9 7.9 0 0 1-7.9-7.9h30.5v22.73h-7.9v-9.26L97 75.07h22.95v7.9H57.18v-7.9h28.6z"
  }), _react2.default.createElement("path", {
    fill: "#F93",
    fillRule: "nonzero",
    d: "M70.63 101.3H57.18V87.82h8.25v7.46l7.44-7.46h11.2z"
  })));
};

/***/ }),

/***/ 842:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends.apply(this, arguments);
}

exports.default = function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return _react2.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "270",
    height: "152"
  }, props), _react2.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(6 2)"
  }, _react2.default.createElement("rect", {
    width: "258",
    height: "140",
    fill: "#101320",
    fillRule: "nonzero",
    rx: "4"
  }), _react2.default.createElement("path", {
    fill: "#191C31",
    fillRule: "nonzero",
    d: "M149.03 85.33h31.09c3.05 0 5.52 2.3 5.52 5.11 0 2.83-2.47 5.12-5.52 5.12H38.5c-3.06 0-5.53-2.3-5.53-5.12 0-2.82 2.47-5.1 5.53-5.1H99.3c3.05 0 5.52-2.3 5.52-5.12s-2.47-5.1-5.52-5.1H52.32v-.05c-2.76-.32-4.83-2.5-4.83-5.07s2.07-4.75 4.83-5.07v-.04h19.34c3.06 0 5.53-2.29 5.53-5.11 0-2.83-2.47-5.11-5.53-5.11H46.11c-3.06 0-5.53-2.3-5.53-5.11 0-2.83 2.47-5.12 5.52-5.12h131.25c3.06 0 5.53 2.3 5.53 5.12 0 2.82-2.47 5.1-5.53 5.1h-51.11c-3.06 0-5.53 2.3-5.53 5.12s2.48 5.1 5.53 5.1h30.4c3.04 0 5.52 2.3 5.52 5.12 0 2.82-2.48 5.11-5.53 5.11h-16.58c-3.05 0-5.52 2.29-5.52 5.11s2.47 5.11 5.52 5.11h8.98zM29.53 44.44c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.52 5.1S24 52.39 24 49.57c0-2.83 2.47-5.12 5.53-5.12zM159.4 24h38.68c3.05 0 5.53 2.29 5.53 5.11s-2.48 5.11-5.53 5.11H159.4c-3.06 0-5.53-2.29-5.53-5.1 0-2.83 2.47-5.12 5.53-5.12zm-23.5 0c3.06 0 5.53 2.29 5.53 5.11s-2.47 5.11-5.52 5.11c-3.05 0-5.53-2.29-5.53-5.1 0-2.83 2.48-5.12 5.53-5.12zm67.01 20.44h9.68c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.52 5.1h-9.68c-3.05 0-5.52-2.28-5.52-5.1 0-2.83 2.47-5.12 5.52-5.12zM178.74 64.9h20.72c3.05 0 5.53 2.29 5.53 5.11s-2.48 5.11-5.53 5.11h-20.72c-3.06 0-5.53-2.29-5.53-5.1s2.47-5.12 5.53-5.12zm19.34 20.44h30.4c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.53 5.1h-30.4c-3.04 0-5.52-2.28-5.52-5.1 0-2.83 2.48-5.11 5.53-5.11zM66.14 105.78h62.17c3.05 0 5.53 2.29 5.53 5.1 0 2.83-2.48 5.12-5.53 5.12H66.14c-3.05 0-5.53-2.29-5.53-5.11s2.48-5.11 5.53-5.11zm82.9 0h9.66c3.06 0 5.53 2.29 5.53 5.1 0 2.83-2.47 5.12-5.53 5.12h-9.67c-3.05 0-5.52-2.29-5.52-5.11s2.47-5.11 5.52-5.11z"
  }), _react2.default.createElement("path", {
    fill: "#FFF",
    d: "M150.9 40.6l22.86 22.77-22.86 22.87a7.93 7.93 0 0 1 0-11.21l7.35-7.35h-21.07v-7.9h21.7l-7.98-7.97a7.85 7.85 0 0 1 0-11.21zm13.71 46.98h7.9v13.9h-7.9v-13.9zm0-48.86h7.9v7.53h-7.9v-7.53z"
  }), _react2.default.createElement("path", {
    fill: "#F93",
    d: "M199.94 72.07h-17.12l7.35-7.35a8.01 8.01 0 0 0 0-11.2l-13.18 13.17a3.36 3.36 0 0 1 0 4.66l-7.26 7.27 20.44 20.44c2.42-3.68 1.88-9.33-1.26-12.47l-6.72-6.72h17.66v-7.8h.1z"
  }), _react2.default.createElement("path", {
    fill: "#FFF",
    d: "M71.15 46.88l22.54 22.77-22.54 22.86a8 8 0 0 1 0-11.2l7.25-7.36H57.62v-7.89h21.4l-7.87-7.98a7.93 7.93 0 0 1 0-11.2zm13.44 40.7h7.78v13.8h-7.78v-13.8zm0-48.95h7.78v14.16h-7.78V38.63z"
  }), _react2.default.createElement("path", {
    fill: "#F93",
    d: "M105.36 47.33a8 8 0 0 1-.09 11.2l-5.83 5.92-5.48-5.56 11.4-11.57zm0 45.72L93.6 81.04l5.49-5.56 6.27 6.36c3 3.14 3 8.16 0 11.21zm-4.86-19l4.16-4.31-3.63-3.68h18.39v7.98H100.5z"
  })));
};

/***/ }),

/***/ 843:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends.apply(this, arguments);
}

exports.default = function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return _react2.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "258",
    height: "140"
  }, props), _react2.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react2.default.createElement("rect", {
    width: "258",
    height: "140",
    fill: "#FFF",
    rx: "4"
  }), _react2.default.createElement("path", {
    fill: "#336",
    d: "M149.03 85.33h31.09c3.05 0 5.52 2.3 5.52 5.11 0 2.83-2.47 5.12-5.52 5.12H38.5c-3.06 0-5.53-2.3-5.53-5.12 0-2.82 2.47-5.1 5.53-5.1H99.3c3.05 0 5.52-2.3 5.52-5.12s-2.47-5.1-5.52-5.1H52.32v-.05c-2.76-.32-4.83-2.5-4.83-5.07s2.07-4.75 4.83-5.07v-.04h19.34c3.06 0 5.53-2.29 5.53-5.11 0-2.83-2.47-5.11-5.53-5.11H46.11c-3.06 0-5.53-2.3-5.53-5.11 0-2.83 2.47-5.12 5.52-5.12h131.25c3.06 0 5.53 2.3 5.53 5.12 0 2.82-2.47 5.1-5.53 5.1h-51.11c-3.06 0-5.53 2.3-5.53 5.12s2.48 5.1 5.53 5.1h30.4c3.04 0 5.52 2.3 5.52 5.12 0 2.82-2.48 5.11-5.53 5.11h-16.58c-3.05 0-5.52 2.29-5.52 5.11s2.47 5.11 5.52 5.11h8.98zM29.53 44.44c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.52 5.1S24 52.39 24 49.57c0-2.83 2.47-5.12 5.53-5.12zM159.4 24h38.68c3.05 0 5.53 2.29 5.53 5.11s-2.48 5.11-5.53 5.11H159.4c-3.06 0-5.53-2.29-5.53-5.1 0-2.83 2.47-5.12 5.53-5.12zm-23.5 0c3.06 0 5.53 2.29 5.53 5.11s-2.47 5.11-5.52 5.11c-3.05 0-5.53-2.29-5.53-5.1 0-2.83 2.48-5.12 5.53-5.12zm67.01 20.44h9.68c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.52 5.1h-9.68c-3.05 0-5.52-2.28-5.52-5.1 0-2.83 2.47-5.12 5.52-5.12zM178.74 64.9h20.72c3.05 0 5.53 2.29 5.53 5.11s-2.48 5.11-5.53 5.11h-20.72c-3.06 0-5.53-2.29-5.53-5.1s2.47-5.12 5.53-5.12zm19.34 20.44h30.4c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.53 5.1h-30.4c-3.04 0-5.52-2.28-5.52-5.1 0-2.83 2.48-5.11 5.53-5.11zM66.14 105.78h62.17c3.05 0 5.53 2.29 5.53 5.1 0 2.83-2.48 5.12-5.53 5.12H66.14c-3.05 0-5.53-2.29-5.53-5.11s2.48-5.11 5.53-5.11zm82.9 0h9.66c3.06 0 5.53 2.29 5.53 5.1 0 2.83-2.47 5.12-5.53 5.12h-9.67c-3.05 0-5.52-2.29-5.52-5.11s2.47-5.11 5.52-5.11z",
    opacity: ".08"
  }), _react2.default.createElement("path", {
    fill: "#336",
    d: "M150.9 40.6l22.86 22.77-22.86 22.87a7.93 7.93 0 0 1 0-11.21l7.35-7.35h-21.07v-7.9h21.7l-7.98-7.97a7.85 7.85 0 0 1 0-11.21zm13.71 46.98h7.9v13.9h-7.9v-13.9zm0-48.86h7.9v7.53h-7.9v-7.53z"
  }), _react2.default.createElement("path", {
    fill: "#F93",
    fillRule: "nonzero",
    d: "M199.94 72.07h-17.12l7.35-7.35a8.01 8.01 0 0 0 0-11.2l-13.18 13.17a3.36 3.36 0 0 1 0 4.66l-7.26 7.27 20.44 20.44c2.42-3.68 1.88-9.33-1.26-12.47l-6.72-6.72h17.66v-7.8h.1z"
  }), _react2.default.createElement("path", {
    fill: "#336",
    d: "M71.15 46.88l22.54 22.77-22.54 22.86a8 8 0 0 1 0-11.2l7.25-7.36H57.62v-7.89h21.4l-7.87-7.98a7.93 7.93 0 0 1 0-11.2zm13.44 40.7h7.78v13.8h-7.78v-13.8zm0-48.95h7.78v14.16h-7.78V38.63z"
  }), _react2.default.createElement("path", {
    fill: "#F93",
    fillRule: "nonzero",
    d: "M105.36 47.33a8 8 0 0 1-.09 11.2l-5.83 5.92-5.48-5.56 11.4-11.57zm0 45.72L93.6 81.04l5.49-5.56 6.27 6.36c3 3.14 3 8.16 0 11.21zm-4.86-19l4.16-4.31-3.63-3.68h18.39v7.98H100.5z"
  })));
};

/***/ }),

/***/ 844:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends.apply(this, arguments);
}

exports.default = function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return _react2.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "270",
    height: "152"
  }, props), _react2.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(6 2)"
  }, _react2.default.createElement("rect", {
    width: "258",
    height: "140",
    fill: "#101320",
    fillRule: "nonzero",
    rx: "4"
  }), _react2.default.createElement("path", {
    fill: "#191C31",
    fillRule: "nonzero",
    d: "M149.03 85.33h31.09c3.05 0 5.52 2.3 5.52 5.11 0 2.83-2.47 5.12-5.52 5.12H38.5c-3.06 0-5.53-2.3-5.53-5.12 0-2.82 2.47-5.1 5.53-5.1H99.3c3.05 0 5.52-2.3 5.52-5.12s-2.47-5.1-5.52-5.1H52.32v-.05c-2.76-.32-4.83-2.5-4.83-5.07s2.07-4.75 4.83-5.07v-.04h19.34c3.06 0 5.53-2.29 5.53-5.11 0-2.83-2.47-5.11-5.53-5.11H46.11c-3.06 0-5.53-2.3-5.53-5.11 0-2.83 2.47-5.12 5.52-5.12h131.25c3.06 0 5.53 2.3 5.53 5.12 0 2.82-2.47 5.1-5.53 5.1h-51.11c-3.06 0-5.53 2.3-5.53 5.12s2.48 5.1 5.53 5.1h30.4c3.04 0 5.52 2.3 5.52 5.12 0 2.82-2.48 5.11-5.53 5.11h-16.58c-3.05 0-5.52 2.29-5.52 5.11s2.47 5.11 5.52 5.11h8.98zM29.53 44.44c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.52 5.1S24 52.39 24 49.57c0-2.83 2.47-5.12 5.53-5.12zM159.4 24h38.68c3.05 0 5.53 2.29 5.53 5.11s-2.48 5.11-5.53 5.11H159.4c-3.06 0-5.53-2.29-5.53-5.1 0-2.83 2.47-5.12 5.53-5.12zm-23.5 0c3.06 0 5.53 2.29 5.53 5.11s-2.47 5.11-5.52 5.11c-3.05 0-5.53-2.29-5.53-5.1 0-2.83 2.48-5.12 5.53-5.12zm67.01 20.44h9.68c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.52 5.1h-9.68c-3.05 0-5.52-2.28-5.52-5.1 0-2.83 2.47-5.12 5.52-5.12zM178.74 64.9h20.72c3.05 0 5.53 2.29 5.53 5.11s-2.48 5.11-5.53 5.11h-20.72c-3.06 0-5.53-2.29-5.53-5.1s2.47-5.12 5.53-5.12zm19.34 20.44h30.4c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.53 5.1h-30.4c-3.04 0-5.52-2.28-5.52-5.1 0-2.83 2.48-5.11 5.53-5.11zM66.14 105.78h62.17c3.05 0 5.53 2.29 5.53 5.1 0 2.83-2.48 5.12-5.53 5.12H66.14c-3.05 0-5.53-2.29-5.53-5.11s2.48-5.11 5.53-5.11zm82.9 0h9.66c3.06 0 5.53 2.29 5.53 5.1 0 2.83-2.47 5.12-5.53 5.12h-9.67c-3.05 0-5.52-2.29-5.52-5.11s2.47-5.11 5.52-5.11z"
  }), _react2.default.createElement("path", {
    d: "M137 38h63.66v63.66H137z"
  }), _react2.default.createElement("path", {
    fill: "#F93",
    d: "M163.27 59.8l-13.9-13.5h-11.2l19.54 18.98z"
  }), _react2.default.createElement("path", {
    fill: "#FFF",
    d: "M137.54 58.05h62.76v7.66h-62.76v-7.66zm54.87 19.5c0-4.26 3.59-7.66 7.89-7.75v31.34h-32.28c0-4.18 3.5-7.66 7.9-7.66h10.84l-17.4-16.89V65.71l23.05 22.37V77.55z"
  }), _react2.default.createElement("path", {
    d: "M57 38h63.66v63.66H57z"
  }), _react2.default.createElement("path", {
    fill: "#F93",
    d: "M82.91 87.9l-13.9 13.41h-11.2l19.45-18.89z"
  }), _react2.default.createElement("path", {
    fill: "#FFF",
    d: "M57.18 81.9h62.76v7.66H57.18V81.9zm54.87-11.84V59.53L89.01 81.9V71.02l17.4-16.88H95.54a7.79 7.79 0 0 1-7.89-7.66h32.28V77.8a7.8 7.8 0 0 1-7.89-7.75z"
  })));
};

/***/ }),

/***/ 845:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends.apply(this, arguments);
}

exports.default = function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return _react2.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "258",
    height: "140"
  }, props), _react2.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react2.default.createElement("rect", {
    width: "258",
    height: "140",
    fill: "#FFF",
    rx: "4"
  }), _react2.default.createElement("path", {
    fill: "#336",
    d: "M149.03 85.33h31.09c3.05 0 5.52 2.3 5.52 5.11 0 2.83-2.47 5.12-5.52 5.12H38.5c-3.06 0-5.53-2.3-5.53-5.12 0-2.82 2.47-5.1 5.53-5.1H99.3c3.05 0 5.52-2.3 5.52-5.12s-2.47-5.1-5.52-5.1H52.32v-.05c-2.76-.32-4.83-2.5-4.83-5.07s2.07-4.75 4.83-5.07v-.04h19.34c3.06 0 5.53-2.29 5.53-5.11 0-2.83-2.47-5.11-5.53-5.11H46.11c-3.06 0-5.53-2.3-5.53-5.11 0-2.83 2.47-5.12 5.52-5.12h131.25c3.06 0 5.53 2.3 5.53 5.12 0 2.82-2.47 5.1-5.53 5.1h-51.11c-3.06 0-5.53 2.3-5.53 5.12s2.48 5.1 5.53 5.1h30.4c3.04 0 5.52 2.3 5.52 5.12 0 2.82-2.48 5.11-5.53 5.11h-16.58c-3.05 0-5.52 2.29-5.52 5.11s2.47 5.11 5.52 5.11h8.98zM29.53 44.44c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.52 5.1S24 52.39 24 49.57c0-2.83 2.47-5.12 5.53-5.12zM159.4 24h38.68c3.05 0 5.53 2.29 5.53 5.11s-2.48 5.11-5.53 5.11H159.4c-3.06 0-5.53-2.29-5.53-5.1 0-2.83 2.47-5.12 5.53-5.12zm-23.5 0c3.06 0 5.53 2.29 5.53 5.11s-2.47 5.11-5.52 5.11c-3.05 0-5.53-2.29-5.53-5.1 0-2.83 2.48-5.12 5.53-5.12zm67.01 20.44h9.68c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.52 5.1h-9.68c-3.05 0-5.52-2.28-5.52-5.1 0-2.83 2.47-5.12 5.52-5.12zM178.74 64.9h20.72c3.05 0 5.53 2.29 5.53 5.11s-2.48 5.11-5.53 5.11h-20.72c-3.06 0-5.53-2.29-5.53-5.1s2.47-5.12 5.53-5.12zm19.34 20.44h30.4c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.53 5.1h-30.4c-3.04 0-5.52-2.28-5.52-5.1 0-2.83 2.48-5.11 5.53-5.11zM66.14 105.78h62.17c3.05 0 5.53 2.29 5.53 5.1 0 2.83-2.48 5.12-5.53 5.12H66.14c-3.05 0-5.53-2.29-5.53-5.11s2.48-5.11 5.53-5.11zm82.9 0h9.66c3.06 0 5.53 2.29 5.53 5.1 0 2.83-2.47 5.12-5.53 5.12h-9.67c-3.05 0-5.52-2.29-5.52-5.11s2.47-5.11 5.52-5.11z",
    opacity: ".08"
  }), _react2.default.createElement("path", {
    d: "M137 38h63.66v63.66H137z"
  }), _react2.default.createElement("path", {
    fill: "#F93",
    fillRule: "nonzero",
    d: "M163.27 59.8l-13.9-13.5h-11.2l19.54 18.98z"
  }), _react2.default.createElement("path", {
    fill: "#336",
    d: "M137.54 58.05h62.76v7.66h-62.76v-7.66zm54.87 19.5c0-4.26 3.59-7.66 7.89-7.75v31.34h-32.28c0-4.18 3.5-7.66 7.9-7.66h10.84l-17.4-16.89V65.71l23.05 22.37V77.55z"
  }), _react2.default.createElement("path", {
    d: "M57 38h63.66v63.66H57z"
  }), _react2.default.createElement("path", {
    fill: "#F93",
    fillRule: "nonzero",
    d: "M82.91 87.9l-13.9 13.41h-11.2l19.45-18.89z"
  }), _react2.default.createElement("path", {
    fill: "#336",
    d: "M57.18 81.9h62.76v7.66H57.18V81.9zm54.87-11.84V59.53L89.01 81.9V71.02l17.4-16.88H95.54a7.79 7.79 0 0 1-7.89-7.66h32.28V77.8a7.8 7.8 0 0 1-7.89-7.75z"
  })));
};

/***/ }),

/***/ 846:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends.apply(this, arguments);
}

exports.default = function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return _react2.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "270",
    height: "152"
  }, props), _react2.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(6 2)"
  }, _react2.default.createElement("rect", {
    width: "258",
    height: "140",
    fill: "#101320",
    fillRule: "nonzero",
    rx: "4"
  }), _react2.default.createElement("path", {
    fill: "#191C31",
    fillRule: "nonzero",
    d: "M149.03 85.33h31.09c3.05 0 5.52 2.3 5.52 5.11 0 2.83-2.47 5.12-5.52 5.12H38.5c-3.06 0-5.53-2.3-5.53-5.12 0-2.82 2.47-5.1 5.53-5.1H99.3c3.05 0 5.52-2.3 5.52-5.12s-2.47-5.1-5.52-5.1H52.32v-.05c-2.76-.32-4.83-2.5-4.83-5.07s2.07-4.75 4.83-5.07v-.04h19.34c3.06 0 5.53-2.29 5.53-5.11 0-2.83-2.47-5.11-5.53-5.11H46.11c-3.06 0-5.53-2.3-5.53-5.11 0-2.83 2.47-5.12 5.52-5.12h131.25c3.06 0 5.53 2.3 5.53 5.12 0 2.82-2.47 5.1-5.53 5.1h-51.11c-3.06 0-5.53 2.3-5.53 5.12s2.48 5.1 5.53 5.1h30.4c3.04 0 5.52 2.3 5.52 5.12 0 2.82-2.48 5.11-5.53 5.11h-16.58c-3.05 0-5.52 2.29-5.52 5.11s2.47 5.11 5.52 5.11h8.98zM29.53 44.44c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.52 5.1S24 52.39 24 49.57c0-2.83 2.47-5.12 5.53-5.12zM159.4 24h38.68c3.05 0 5.53 2.29 5.53 5.11s-2.48 5.11-5.53 5.11H159.4c-3.06 0-5.53-2.29-5.53-5.1 0-2.83 2.47-5.12 5.53-5.12zm-23.5 0c3.06 0 5.53 2.29 5.53 5.11s-2.47 5.11-5.52 5.11c-3.05 0-5.53-2.29-5.53-5.1 0-2.83 2.48-5.12 5.53-5.12zm67.01 20.44h9.68c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.52 5.1h-9.68c-3.05 0-5.52-2.28-5.52-5.1 0-2.83 2.47-5.12 5.52-5.12zM178.74 64.9h20.72c3.05 0 5.53 2.29 5.53 5.11s-2.48 5.11-5.53 5.11h-20.72c-3.06 0-5.53-2.29-5.53-5.1s2.47-5.12 5.53-5.12zm19.34 20.44h30.4c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.53 5.1h-30.4c-3.04 0-5.52-2.28-5.52-5.1 0-2.83 2.48-5.11 5.53-5.11zM66.14 105.78h62.17c3.05 0 5.53 2.29 5.53 5.1 0 2.83-2.48 5.12-5.53 5.12H66.14c-3.05 0-5.53-2.29-5.53-5.11s2.48-5.11 5.53-5.11zm82.9 0h9.66c3.06 0 5.53 2.29 5.53 5.1 0 2.83-2.47 5.12-5.53 5.12h-9.67c-3.05 0-5.52-2.29-5.52-5.11s2.47-5.11 5.52-5.11z"
  }), _react2.default.createElement("path", {
    d: "M137 38h63.66v63.66H137z"
  }), _react2.default.createElement("path", {
    fill: "#FFF",
    d: "M171.34 97.13a8 8 0 0 1 7.89-8.08h7.35l-30.03-30.76V46.81l35.68 36.55v-7.53a8 8 0 0 1 7.89-8.08v29.47h-28.78v-.1z"
  }), _react2.default.createElement("path", {
    fill: "#F93",
    d: "M137.18 46.81v-8.44h11.2l8.17 8.44z"
  }), _react2.default.createElement("path", {
    d: "M57 38h63.66v63.66H57z"
  }), _react2.default.createElement("path", {
    fill: "#FFF",
    d: "M91.7 38.64a8 8 0 0 0 7.89 8.08h7.35L76.9 77.48v11.48l35.69-36.54v7.52a8 8 0 0 0 7.89 8.08V38.55H91.7v.1z"
  }), _react2.default.createElement("path", {
    fill: "#F93",
    d: "M57.54 88.96v8.44h11.2l8.16-8.44z"
  })));
};

/***/ }),

/***/ 847:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends.apply(this, arguments);
}

exports.default = function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return _react2.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "258",
    height: "140"
  }, props), _react2.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react2.default.createElement("rect", {
    width: "258",
    height: "140",
    fill: "#FFF",
    rx: "4"
  }), _react2.default.createElement("path", {
    fill: "#336",
    d: "M149.03 85.33h31.09c3.05 0 5.52 2.3 5.52 5.11 0 2.83-2.47 5.12-5.52 5.12H38.5c-3.06 0-5.53-2.3-5.53-5.12 0-2.82 2.47-5.1 5.53-5.1H99.3c3.05 0 5.52-2.3 5.52-5.12s-2.47-5.1-5.52-5.1H52.32v-.05c-2.76-.32-4.83-2.5-4.83-5.07s2.07-4.75 4.83-5.07v-.04h19.34c3.06 0 5.53-2.29 5.53-5.11 0-2.83-2.47-5.11-5.53-5.11H46.11c-3.06 0-5.53-2.3-5.53-5.11 0-2.83 2.47-5.12 5.52-5.12h131.25c3.06 0 5.53 2.3 5.53 5.12 0 2.82-2.47 5.1-5.53 5.1h-51.11c-3.06 0-5.53 2.3-5.53 5.12s2.48 5.1 5.53 5.1h30.4c3.04 0 5.52 2.3 5.52 5.12 0 2.82-2.48 5.11-5.53 5.11h-16.58c-3.05 0-5.52 2.29-5.52 5.11s2.47 5.11 5.52 5.11h8.98zM29.53 44.44c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.52 5.1S24 52.39 24 49.57c0-2.83 2.47-5.12 5.53-5.12zM159.4 24h38.68c3.05 0 5.53 2.29 5.53 5.11s-2.48 5.11-5.53 5.11H159.4c-3.06 0-5.53-2.29-5.53-5.1 0-2.83 2.47-5.12 5.53-5.12zm-23.5 0c3.06 0 5.53 2.29 5.53 5.11s-2.47 5.11-5.52 5.11c-3.05 0-5.53-2.29-5.53-5.1 0-2.83 2.48-5.12 5.53-5.12zm67.01 20.44h9.68c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.52 5.1h-9.68c-3.05 0-5.52-2.28-5.52-5.1 0-2.83 2.47-5.12 5.52-5.12zM178.74 64.9h20.72c3.05 0 5.53 2.29 5.53 5.11s-2.48 5.11-5.53 5.11h-20.72c-3.06 0-5.53-2.29-5.53-5.1s2.47-5.12 5.53-5.12zm19.34 20.44h30.4c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.53 5.1h-30.4c-3.04 0-5.52-2.28-5.52-5.1 0-2.83 2.48-5.11 5.53-5.11zM66.14 105.78h62.17c3.05 0 5.53 2.29 5.53 5.1 0 2.83-2.48 5.12-5.53 5.12H66.14c-3.05 0-5.53-2.29-5.53-5.11s2.48-5.11 5.53-5.11zm82.9 0h9.66c3.06 0 5.53 2.29 5.53 5.1 0 2.83-2.47 5.12-5.53 5.12h-9.67c-3.05 0-5.52-2.29-5.52-5.11s2.47-5.11 5.52-5.11z",
    opacity: ".08"
  }), _react2.default.createElement("path", {
    d: "M137 38h63.66v63.66H137z"
  }), _react2.default.createElement("path", {
    fill: "#336",
    d: "M171.34 97.13a8 8 0 0 1 7.89-8.08h7.35l-30.03-30.76V46.81l35.68 36.55v-7.53a8 8 0 0 1 7.89-8.08v29.47h-28.78v-.1z"
  }), _react2.default.createElement("path", {
    fill: "#F93",
    fillRule: "nonzero",
    d: "M137.18 46.81v-8.44h11.2l8.17 8.44z"
  }), _react2.default.createElement("path", {
    d: "M57 38h63.66v63.66H57z"
  }), _react2.default.createElement("path", {
    fill: "#336",
    d: "M91.7 38.64a8 8 0 0 0 7.89 8.08h7.35L76.9 77.48v11.48l35.69-36.54v7.52a8 8 0 0 0 7.89 8.08V38.55H91.7v.1z"
  }), _react2.default.createElement("path", {
    fill: "#F93",
    fillRule: "nonzero",
    d: "M57.54 88.96v8.44h11.2l8.16-8.44z"
  })));
};

/***/ }),

/***/ 848:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends.apply(this, arguments);
}

exports.default = function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return _react2.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "270",
    height: "152"
  }, props), _react2.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(6 2)"
  }, _react2.default.createElement("rect", {
    width: "258",
    height: "140",
    fill: "#101320",
    fillRule: "nonzero",
    rx: "4"
  }), _react2.default.createElement("path", {
    fill: "#191C31",
    fillRule: "nonzero",
    d: "M149.03 85.33h31.09c3.05 0 5.52 2.3 5.52 5.11 0 2.83-2.47 5.12-5.52 5.12H38.5c-3.06 0-5.53-2.3-5.53-5.12 0-2.82 2.47-5.1 5.53-5.1H99.3c3.05 0 5.52-2.3 5.52-5.12s-2.47-5.1-5.52-5.1H52.32v-.05c-2.76-.32-4.83-2.5-4.83-5.07s2.07-4.75 4.83-5.07v-.04h19.34c3.06 0 5.53-2.29 5.53-5.11 0-2.83-2.47-5.11-5.53-5.11H46.11c-3.06 0-5.53-2.3-5.53-5.11 0-2.83 2.47-5.12 5.52-5.12h131.25c3.06 0 5.53 2.3 5.53 5.12 0 2.82-2.47 5.1-5.53 5.1h-51.11c-3.06 0-5.53 2.3-5.53 5.12s2.48 5.1 5.53 5.1h30.4c3.04 0 5.52 2.3 5.52 5.12 0 2.82-2.48 5.11-5.53 5.11h-16.58c-3.05 0-5.52 2.29-5.52 5.11s2.47 5.11 5.52 5.11h8.98zM29.53 44.44c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.52 5.1S24 52.39 24 49.57c0-2.83 2.47-5.12 5.53-5.12zM159.4 24h38.68c3.05 0 5.53 2.29 5.53 5.11s-2.48 5.11-5.53 5.11H159.4c-3.06 0-5.53-2.29-5.53-5.1 0-2.83 2.47-5.12 5.53-5.12zm-23.5 0c3.06 0 5.53 2.29 5.53 5.11s-2.47 5.11-5.52 5.11c-3.05 0-5.53-2.29-5.53-5.1 0-2.83 2.48-5.12 5.53-5.12zm67.01 20.44h9.68c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.52 5.1h-9.68c-3.05 0-5.52-2.28-5.52-5.1 0-2.83 2.47-5.12 5.52-5.12zM178.74 64.9h20.72c3.05 0 5.53 2.29 5.53 5.11s-2.48 5.11-5.53 5.11h-20.72c-3.06 0-5.53-2.29-5.53-5.1s2.47-5.12 5.53-5.12zm19.34 20.44h30.4c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.53 5.1h-30.4c-3.04 0-5.52-2.28-5.52-5.1 0-2.83 2.48-5.11 5.53-5.11zM66.14 105.78h62.17c3.05 0 5.53 2.29 5.53 5.1 0 2.83-2.48 5.12-5.53 5.12H66.14c-3.05 0-5.53-2.29-5.53-5.11s2.48-5.11 5.53-5.11zm82.9 0h9.66c3.06 0 5.53 2.29 5.53 5.1 0 2.83-2.47 5.12-5.53 5.12h-9.67c-3.05 0-5.52-2.29-5.52-5.11s2.47-5.11 5.52-5.11z"
  }), _react2.default.createElement("path", {
    d: "M137 38h63.66v63.66H137z"
  }), _react2.default.createElement("path", {
    fill: "#FFF",
    d: "M137.27 38.27h62.76v8.08h-62.76v-8.08zm54.78 31.86c0-4.5 3.5-8.08 7.9-8.17v26.45h-25.83a8 8 0 0 1 7.89-8.08h4.4l-13.37-13.68-21.34 21.94V77.11l21.34-21.94 19.01 19.46v-4.5z"
  }), _react2.default.createElement("path", {
    fill: "#F93",
    d: "M137.27 88.5v8.45h6.36l8.16-8.45z"
  }), _react2.default.createElement("path", {
    d: "M57 38h63.66v63.66H57z"
  }), _react2.default.createElement("path", {
    fill: "#FFF",
    d: "M104.7 46.35h7.89v-8.08h7.8v8.08h-7.71v29.48a8 8 0 0 1-7.9-8.08v-7.53L77.19 88.5V76.93l21.96-22.5h-7.35a8 8 0 0 1-7.9-8.07H57.64v-8.08h47.07v8.08z"
  }), _react2.default.createElement("path", {
    fill: "#F93",
    d: "M57.63 88.5v8.45H69l8.16-8.45z"
  })));
};

/***/ }),

/***/ 849:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends.apply(this, arguments);
}

exports.default = function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return _react2.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "258",
    height: "140"
  }, props), _react2.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react2.default.createElement("rect", {
    width: "258",
    height: "140",
    fill: "#FFF",
    rx: "4"
  }), _react2.default.createElement("path", {
    fill: "#336",
    d: "M149.03 85.33h31.09c3.05 0 5.52 2.3 5.52 5.11 0 2.83-2.47 5.12-5.52 5.12H38.5c-3.06 0-5.53-2.3-5.53-5.12 0-2.82 2.47-5.1 5.53-5.1H99.3c3.05 0 5.52-2.3 5.52-5.12s-2.47-5.1-5.52-5.1H52.32v-.05c-2.76-.32-4.83-2.5-4.83-5.07s2.07-4.75 4.83-5.07v-.04h19.34c3.06 0 5.53-2.29 5.53-5.11 0-2.83-2.47-5.11-5.53-5.11H46.11c-3.06 0-5.53-2.3-5.53-5.11 0-2.83 2.47-5.12 5.52-5.12h131.25c3.06 0 5.53 2.3 5.53 5.12 0 2.82-2.47 5.1-5.53 5.1h-51.11c-3.06 0-5.53 2.3-5.53 5.12s2.48 5.1 5.53 5.1h30.4c3.04 0 5.52 2.3 5.52 5.12 0 2.82-2.48 5.11-5.53 5.11h-16.58c-3.05 0-5.52 2.29-5.52 5.11s2.47 5.11 5.52 5.11h8.98zM29.53 44.44c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.52 5.1S24 52.39 24 49.57c0-2.83 2.47-5.12 5.53-5.12zM159.4 24h38.68c3.05 0 5.53 2.29 5.53 5.11s-2.48 5.11-5.53 5.11H159.4c-3.06 0-5.53-2.29-5.53-5.1 0-2.83 2.47-5.12 5.53-5.12zm-23.5 0c3.06 0 5.53 2.29 5.53 5.11s-2.47 5.11-5.52 5.11c-3.05 0-5.53-2.29-5.53-5.1 0-2.83 2.48-5.12 5.53-5.12zm67.01 20.44h9.68c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.52 5.1h-9.68c-3.05 0-5.52-2.28-5.52-5.1 0-2.83 2.47-5.12 5.52-5.12zM178.74 64.9h20.72c3.05 0 5.53 2.29 5.53 5.11s-2.48 5.11-5.53 5.11h-20.72c-3.06 0-5.53-2.29-5.53-5.1s2.47-5.12 5.53-5.12zm19.34 20.44h30.4c3.05 0 5.52 2.3 5.52 5.12 0 2.82-2.47 5.1-5.53 5.1h-30.4c-3.04 0-5.52-2.28-5.52-5.1 0-2.83 2.48-5.11 5.53-5.11zM66.14 105.78h62.17c3.05 0 5.53 2.29 5.53 5.1 0 2.83-2.48 5.12-5.53 5.12H66.14c-3.05 0-5.53-2.29-5.53-5.11s2.48-5.11 5.53-5.11zm82.9 0h9.66c3.06 0 5.53 2.29 5.53 5.1 0 2.83-2.47 5.12-5.53 5.12h-9.67c-3.05 0-5.52-2.29-5.52-5.11s2.47-5.11 5.52-5.11z",
    opacity: ".08"
  }), _react2.default.createElement("path", {
    d: "M137 38h63.66v63.66H137z"
  }), _react2.default.createElement("path", {
    fill: "#336",
    d: "M137.27 38.27h62.76v8.08h-62.76v-8.08zm54.78 31.86c0-4.5 3.5-8.08 7.9-8.17v26.45h-25.83a8 8 0 0 1 7.89-8.08h4.4l-13.37-13.68-21.34 21.94V77.11l21.34-21.94 19.01 19.46v-4.5z"
  }), _react2.default.createElement("path", {
    fill: "#F93",
    fillRule: "nonzero",
    d: "M137.27 88.5v8.45h6.36l8.16-8.45z"
  }), _react2.default.createElement("path", {
    d: "M57 38h63.66v63.66H57z"
  }), _react2.default.createElement("path", {
    fill: "#336",
    d: "M104.7 46.35h7.89v-8.08h7.8v8.08h-7.71v29.48a8 8 0 0 1-7.9-8.08v-7.53L77.19 88.5V76.93l21.96-22.5h-7.35a8 8 0 0 1-7.9-8.07H57.64v-8.08h47.07v8.08z"
  }), _react2.default.createElement("path", {
    fill: "#F93",
    fillRule: "nonzero",
    d: "M57.63 88.5v8.45H69l8.16-8.45z"
  })));
};

/***/ })

}]);