(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports"],{

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _reports = __webpack_require__(896);

var _reports2 = _interopRequireDefault(_reports);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _reports2.default;

/***/ }),

/***/ 824:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fadeWrapper = __webpack_require__(825);

Object.keys(_fadeWrapper).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fadeWrapper[key];
    }
  });
});

/***/ }),

/***/ 825:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FadeWrapper = undefined;

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactPose = __webpack_require__(163);

var _reactPose2 = _interopRequireDefault(_reactPose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FadeInFromTopDiv = _reactPose2.default.div({
    enter: {
        y: 0,
        opacity: 1,
        delay: 300,
        transition: {
            default: { duration: 250 }
        }
    },
    exit: {
        y: -50,
        opacity: 0,
        transition: { duration: 250 }
    }
});

var FadeInFromBottomDiv = _reactPose2.default.div({
    enter: {
        y: 0,
        opacity: 1,
        delay: 300,
        transition: {
            default: { duration: 250 }
        }
    },
    exit: {
        y: 50,
        opacity: 0,
        transition: { duration: 250 }
    }
});

var FadeInOnlyDiv = _reactPose2.default.div({
    enter: {

        opacity: 1,
        transition: { duration: 300 }
    },
    exit: {
        opacity: 0,
        transition: { duration: 300 }
    }
});

var FadeWrapper = function FadeWrapper(_ref) {
    var children = _ref.children,
        className = _ref.className,
        keyname = _ref.keyname,
        is_visible = _ref.is_visible,
        type = _ref.type;

    if (type === 'top') {
        return _react2.default.createElement(
            _reactPose.PoseGroup,
            null,
            is_visible && _react2.default.createElement(
                FadeInFromTopDiv,
                { className: className, key: keyname },
                children
            )
        );
    }
    if (type === 'bottom') {
        return _react2.default.createElement(
            _reactPose.PoseGroup,
            null,
            is_visible && _react2.default.createElement(
                FadeInFromBottomDiv,
                { className: className, key: keyname },
                children
            )
        );
    }
    return _react2.default.createElement(
        _reactPose.PoseGroup,
        null,
        is_visible && _react2.default.createElement(
            FadeInOnlyDiv,
            { className: className, key: keyname },
            children
        )
    );
};

FadeWrapper.propTypes = {
    children: _propTypes2.default.node,
    is_visible: _propTypes2.default.bool,
    keyname: _propTypes2.default.string,
    type: _propTypes2.default.string
};

exports.FadeWrapper = FadeWrapper;

/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(50);

var _connect = __webpack_require__(7);

var _Animations = __webpack_require__(824);

var _verticalTab = __webpack_require__(246);

var _verticalTab2 = _interopRequireDefault(_verticalTab);

var _routes = __webpack_require__(58);

var _routes2 = _interopRequireDefault(_routes);

var _localize = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reports = function (_React$Component) {
    _inherits(Reports, _React$Component);

    function Reports() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Reports);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Reports.__proto__ || Object.getPrototypeOf(Reports)).call.apply(_ref, [this].concat(args))), _this), _this.setWrapperRef = function (node) {
            _this.wrapper_ref = node;
        }, _this.handleClickOutside = function (event) {
            if (_this.wrapper_ref && !_this.wrapper_ref.contains(event.target)) {
                _this.props.history.push(_routes2.default.trade);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Reports, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // SmartCharts keeps saving layout for ContractPlay even if layouts prop is set to null
            // As a result, we have to remove it manually for each SmartChart instance in ContractReplay
            // TODO: Remove this once SmartCharts finds a way to stop ChartIQ from saving layouts to localStorage
            localStorage.removeItem('layout-contract-replay');
            this.props.showBlur();
            document.addEventListener('mousedown', this.handleClickOutside);
            this.props.toggleReports(true);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.toggleReports(false);
            this.props.hideBlur();
            document.removeEventListener('mousedown', this.handleClickOutside);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var menu_options = function menu_options() {
                var options = [];

                _this2.props.routes.forEach(function (route) {
                    options.push({
                        default: route.default,
                        icon: route.icon_component,
                        label: route.title,
                        value: route.component,
                        path: route.path
                    });
                });

                return options;
            };

            var action_bar_items = [{
                onClick: function onClick() {
                    _this2.props.history.push(_routes2.default.trade);
                    _this2.props.toggleReports(false);
                },
                icon: 'SettingsIconClose',
                title: (0, _localize.localize)('Close')
            }];
            return _react2.default.createElement(
                _Animations.FadeWrapper,
                {
                    is_visible: this.props.is_visible,
                    className: 'reports-page-wrapper',
                    keyname: 'reports-page-wrapper'
                },
                _react2.default.createElement(
                    'div',
                    { className: 'reports', ref: this.setWrapperRef },
                    _react2.default.createElement(_verticalTab2.default, {
                        header_title: (0, _localize.localize)('Reports'),
                        action_bar: action_bar_items,
                        alignment: 'center',
                        classNameHeader: 'reports__tab-header',
                        current_path: this.props.location.pathname,
                        is_routed: true,
                        is_full_width: true,
                        list: menu_options()
                    })
                )
            );
        }
    }]);

    return Reports;
}(_react2.default.Component);

Reports.propTypes = {
    hideBlur: _propTypes2.default.func,
    history: _propTypes2.default.object,
    is_visible: _propTypes2.default.bool,
    location: _propTypes2.default.object,
    routes: _propTypes2.default.arrayOf(_propTypes2.default.object),
    showBlur: _propTypes2.default.func,
    toggleReports: _propTypes2.default.func
};

exports.default = (0, _connect.connect)(function (_ref2) {
    var ui = _ref2.ui;
    return {
        hideBlur: ui.hideRouteBlur,
        is_visible: ui.is_reports_visible,
        showBlur: ui.showRouteBlur,
        toggleReports: ui.toggleReports
    };
})((0, _reactRouterDom.withRouter)(Reports));

/***/ })

}]);