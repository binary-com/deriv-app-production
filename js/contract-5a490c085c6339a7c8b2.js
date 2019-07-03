(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contract"],{

/***/ 820:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _contract = __webpack_require__(854);

var _contract2 = _interopRequireDefault(_contract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _contract2.default;

/***/ }),

/***/ 840:
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

var ContractCard = function ContractCard(_ref) {
    var children = _ref.children,
        profit_loss = _ref.profit_loss,
        is_sold = _ref.is_sold;
    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('contract-card', {
                'contract-card--green': profit_loss > 0 && !is_sold,
                'contract-card--red': profit_loss < 0 && !is_sold
            })
        },
        children
    );
};

ContractCard.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    is_sold: _propTypes2.default.bool,
    profit_loss: _propTypes2.default.number
};

exports.default = ContractCard;

/***/ }),

/***/ 854:
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

var _reactRouter = __webpack_require__(39);

var _reactTransitionGroup = __webpack_require__(34);

var _localize = __webpack_require__(5);

var _routes = __webpack_require__(58);

var _routes2 = _interopRequireDefault(_routes);

var _Errors = __webpack_require__(166);

var _Errors2 = _interopRequireDefault(_Errors);

var _connect = __webpack_require__(7);

var _contractReplay = __webpack_require__(855);

var _contractReplay2 = _interopRequireDefault(_contractReplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contract = function (_React$Component) {
    _inherits(Contract, _React$Component);

    function Contract() {
        _classCallCheck(this, Contract);

        return _possibleConstructorReturn(this, (Contract.__proto__ || Object.getPrototypeOf(Contract)).apply(this, arguments));
    }

    _createClass(Contract, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.props.has_error) this.props.clearError();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.props.has_error ? _react2.default.createElement(_Errors2.default, {
                    message: this.props.error_message,
                    redirect_label: (0, _localize.localize)('Go back to trading'),
                    redirectOnClick: function redirectOnClick() {
                        return _this2.props.history.push(_routes2.default.trade);
                    },
                    should_show_refresh: false
                }) : _react2.default.createElement(
                    _reactTransitionGroup.CSSTransition,
                    {
                        'in': !this.props.has_error,
                        timeout: 400,
                        classNames: {
                            enter: 'contract--enter',
                            enterDone: 'contract--enter-done',
                            exit: 'contract--exit'
                        },
                        unmountOnExit: true
                    },
                    _react2.default.createElement(_contractReplay2.default, {
                        contract_id: +this.props.match.params.contract_id,
                        key: +this.props.match.params.contract_id
                    })
                )
            );
        }
    }]);

    return Contract;
}(_react2.default.Component);

Contract.propTypes = {
    clearError: _propTypes2.default.func,
    error_message: _propTypes2.default.string,
    has_error: _propTypes2.default.bool,
    history: _propTypes2.default.object,
    is_mobile: _propTypes2.default.bool,
    match: _propTypes2.default.object,
    symbol: _propTypes2.default.string
};

exports.default = (0, _reactRouter.withRouter)((0, _connect.connect)(function (_ref) {
    var modules = _ref.modules,
        ui = _ref.ui;
    return {
        clearError: modules.contract.clearError,
        error_message: modules.contract.error_message,
        has_error: modules.contract.has_error,
        is_mobile: ui.is_mobile,
        symbol: modules.contract.contract_info.underlying
    };
})(Contract));

/***/ }),

/***/ 855:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(39);

var _utility = __webpack_require__(10);

var _chartLoader = __webpack_require__(249);

var _chartLoader2 = _interopRequireDefault(_chartLoader);

var _ContractDrawer = __webpack_require__(856);

var _ContractDrawer2 = _interopRequireDefault(_ContractDrawer);

var _notificationMessages = __webpack_require__(256);

var _notificationMessages2 = _interopRequireDefault(_notificationMessages);

var _connect = __webpack_require__(7);

var _icon = __webpack_require__(8);

var _icon2 = _interopRequireDefault(_icon);

var _routes = __webpack_require__(58);

var _routes2 = _interopRequireDefault(_routes);

var _localize = __webpack_require__(5);

var _infoBox = __webpack_require__(258);

var _infoBox2 = _interopRequireDefault(_infoBox);

var _digits = __webpack_require__(257);

var _digits2 = _interopRequireDefault(_digits);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SmartChart = _react2.default.lazy(function () {
    return Promise.all(/* import() | smart_chart */[__webpack_require__.e("vendors~smart_chart"), __webpack_require__.e("smart_chart")]).then(__webpack_require__.t.bind(null, 754, 7));
});

var ContractReplay = function (_React$Component) {
    _inherits(ContractReplay, _React$Component);

    function ContractReplay() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ContractReplay);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ContractReplay.__proto__ || Object.getPrototypeOf(ContractReplay)).call.apply(_ref, [this].concat(args))), _this), _this.setWrapperRef = function (node) {
            _this.wrapper_ref = node;
        }, _this.handleClickOutside = function (event) {
            if (_this.wrapper_ref && !_this.wrapper_ref.contains(event.target)) {
                var classname_string = event.target.classList[0];
                if (/^.*(modal|btn|notification)/.test(classname_string)) {
                    return;
                }
                _this.props.history.push(_routes2.default.trade);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ContractReplay, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.hidePositions();
            this.props.setChartLoader(true);
            this.props.showBlur();
            var url_contract_id = +/[^/]*$/.exec(location.pathname)[0];
            this.props.onMount(this.props.contract_id || url_contract_id);
            document.addEventListener('mousedown', this.handleClickOutside);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.hideBlur();
            this.props.onUnmount();
            document.removeEventListener('mousedown', this.handleClickOutside);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var action_bar_items = [{
                onClick: function onClick() {
                    return _this2.props.history.push(_routes2.default.trade);
                },
                icon: 'SettingsIconClose',
                title: (0, _localize.localize)('Close')
            }];

            var _props = this.props,
                config = _props.config,
                contract_info = _props.contract_info,
                is_chart_loading = _props.is_chart_loading,
                is_dark_theme = _props.is_dark_theme,
                is_sell_requested = _props.is_sell_requested,
                is_static_chart = _props.is_static_chart,
                onClickSell = _props.onClickSell,
                status = _props.status;


            return _react2.default.createElement(
                'div',
                { className: 'trade-container__replay', ref: this.setWrapperRef },
                _react2.default.createElement(_ContractDrawer2.default, {
                    contract_info: contract_info,
                    heading: 'Reports',
                    is_dark_theme: is_dark_theme,
                    is_sell_requested: is_sell_requested,
                    onClickSell: onClickSell,
                    status: status
                }),
                _react2.default.createElement(
                    _react2.default.Suspense,
                    { fallback: _react2.default.createElement('div', null) },
                    _react2.default.createElement(
                        'div',
                        { className: 'replay-chart__container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'vertical-tab__action-bar' },
                            action_bar_items.map(function (_ref2) {
                                var icon = _ref2.icon,
                                    onClick = _ref2.onClick,
                                    title = _ref2.title;
                                return _react2.default.createElement(_icon2.default, {
                                    className: 'vertical-tab__action-bar--icon',
                                    key: title,
                                    icon: icon,
                                    onClick: onClick
                                });
                            })
                        ),
                        _react2.default.createElement(_notificationMessages2.default, null),
                        _react2.default.createElement(_chartLoader2.default, { is_visible: is_chart_loading }),
                        !!contract_info.underlying && !(0, _utility.isEmptyObject)(config) && _react2.default.createElement(SmartChart, _extends({
                            chartControlsWidgets: null,
                            Digits: _react2.default.createElement(_digits2.default, null),
                            InfoBox: _react2.default.createElement(_infoBox2.default, null),
                            is_contract_replay: true,
                            is_static_chart: is_static_chart,
                            should_show_last_digit_stats: false,
                            symbol: contract_info.underlying
                        }, config))
                    )
                )
            );
        }
    }]);

    return ContractReplay;
}(_react2.default.Component);

ContractReplay.propTypes = {
    config: _propTypes2.default.object,
    contract_id: _propTypes2.default.number,
    contract_info: _propTypes2.default.object,
    hideBlur: _propTypes2.default.func,
    hidePositions: _propTypes2.default.func,
    history: _propTypes2.default.object,
    is_chart_loading: _propTypes2.default.bool,
    is_dark_theme: _propTypes2.default.bool,
    is_static_chart: _propTypes2.default.bool,
    location: _propTypes2.default.object,
    onMount: _propTypes2.default.func,
    onUnmount: _propTypes2.default.func,
    routes: _propTypes2.default.arrayOf(_propTypes2.default.object),
    server_time: _propTypes2.default.object,
    setChartLoader: _propTypes2.default.func,
    showBlur: _propTypes2.default.func,
    status: _propTypes2.default.string
};

exports.default = (0, _reactRouter.withRouter)((0, _connect.connect)(function (_ref3) {
    var modules = _ref3.modules,
        ui = _ref3.ui;
    return {
        config: modules.contract.replay_config,
        is_sell_requested: modules.contract.is_sell_requested,
        is_static_chart: modules.contract.is_replay_static_chart,
        onClickSell: modules.contract.onClickSell,
        onMount: modules.contract.onMountReplay,
        onUnmount: modules.contract.onUnmountReplay,
        contract_info: modules.contract.replay_info,
        status: modules.contract.replay_indicative_status,
        is_chart_loading: modules.smart_chart.is_chart_loading,
        setChartLoader: modules.smart_chart.setIsChartLoading,
        hidePositions: ui.hidePositionsFooterToggle,
        hideBlur: ui.hideRouteBlur,
        is_dark_theme: ui.is_dark_mode_on,
        showBlur: ui.showRouteBlur

    };
})(ContractReplay));

/***/ }),

/***/ 856:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContractCard = exports.default = undefined;

var _contractDrawer = __webpack_require__(857);

var _contractDrawer2 = _interopRequireDefault(_contractDrawer);

var _contractCard = __webpack_require__(840);

var _contractCard2 = _interopRequireDefault(_contractCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _contractDrawer2.default;
exports.ContractCard = _contractCard2.default;

/***/ }),

/***/ 857:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(39);

var _reactTransitionGroup = __webpack_require__(34);

var _localize = __webpack_require__(5);

var _icon = __webpack_require__(8);

var _icon2 = _interopRequireDefault(_icon);

var _routes = __webpack_require__(58);

var _routes2 = _interopRequireDefault(_routes);

var _localize2 = __webpack_require__(27);

var _localize3 = _interopRequireDefault(_localize2);

var _underlyingIcon = __webpack_require__(246);

var _button = __webpack_require__(29);

var _button2 = _interopRequireDefault(_button);

var _ContractAudit = __webpack_require__(858);

var _ContractAudit2 = _interopRequireDefault(_ContractAudit);

var _ContentLoader = __webpack_require__(251);

var _contractTypeCell = __webpack_require__(252);

var _contractTypeCell2 = _interopRequireDefault(_contractTypeCell);

var _ProgressSlider = __webpack_require__(253);

var _ProgressSlider2 = _interopRequireDefault(_ProgressSlider);

var _profitLossCardContent = __webpack_require__(878);

var _profitLossCardContent2 = _interopRequireDefault(_profitLossCardContent);

var _shortcode = __webpack_require__(244);

var _shortcode2 = _interopRequireDefault(_shortcode);

var _contractCardBody = __webpack_require__(879);

var _contractCardBody2 = _interopRequireDefault(_contractCardBody);

var _contractCardFooter = __webpack_require__(880);

var _contractCardFooter2 = _interopRequireDefault(_contractCardFooter);

var _contractCardHeader = __webpack_require__(881);

var _contractCardHeader2 = _interopRequireDefault(_contractCardHeader);

var _contractCard = __webpack_require__(840);

var _contractCard2 = _interopRequireDefault(_contractCard);

var _details = __webpack_require__(247);

var _logic = __webpack_require__(82);

var _money = __webpack_require__(66);

var _money2 = _interopRequireDefault(_money);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContractDrawer = function (_Component) {
    _inherits(ContractDrawer, _Component);

    function ContractDrawer() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ContractDrawer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ContractDrawer.__proto__ || Object.getPrototypeOf(ContractDrawer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            is_shade_on: false
        }, _this.handleShade = function (shade) {
            _this.setState({ is_shade_on: shade });
        }, _this.redirectBackToReports = function () {
            // history.goBack() will go to the wrong location if user goes to contract by pasting it in the url.
            if (_this.props.history.location.state) {
                _this.props.history.goBack();
            } else {
                _this.props.history.push(_routes2.default.reports);
            }
        }, _this.redirectBackToReports = function () {
            // history.goBack() will go to the wrong location if user goes to contract by pasting it in the url.
            if (_this.props.history.location.state) {
                _this.props.history.goBack();
            } else {
                _this.props.history.push(_routes2.default.reports);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ContractDrawer, [{
        key: 'getBodyContent',
        value: function getBodyContent() {
            var _props$contract_info = this.props.contract_info,
                buy_price = _props$contract_info.buy_price,
                currency = _props$contract_info.currency,
                exit_tick = _props$contract_info.exit_tick,
                is_sold = _props$contract_info.is_sold,
                payout = _props$contract_info.payout,
                profit = _props$contract_info.profit;
            var _props = this.props,
                contract_info = _props.contract_info,
                is_dark_theme = _props.is_dark_theme,
                is_sell_requested = _props.is_sell_requested,
                onClickSell = _props.onClickSell;

            var exit_spot = (0, _logic.isUserSold)(contract_info) ? '-' : exit_tick;
            var getTick = function getTick() {
                if (!contract_info.tick_count) return null;
                var current_tick = (0, _details.getCurrentTick)(contract_info);
                current_tick = current_tick > (0, _details.getCurrentTick)(contract_info) ? current_tick : (0, _details.getCurrentTick)(contract_info);
                return current_tick;
            };

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    _contractCard2.default,
                    {
                        contract_info: contract_info,
                        profit_loss: +profit,
                        is_sold: !!is_sold
                    },
                    _react2.default.createElement(
                        _contractCardHeader2.default,
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: (0, _classnames2.default)('contract-card__grid', 'contract-card__grid-underlying-trade')
                            },
                            _react2.default.createElement(
                                'div',
                                { className: 'contract-card__underlying-name' },
                                _react2.default.createElement(_underlyingIcon.UnderlyingIcon, { market: contract_info.underlying }),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'contract-card__symbol' },
                                    contract_info.display_name
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'contract-card__type' },
                                _react2.default.createElement(_contractTypeCell2.default, {
                                    type: contract_info.contract_type,
                                    is_high_low: _shortcode2.default.isHighLow({ shortcode: contract_info.shortcode })
                                })
                            )
                        )
                    ),
                    is_sold ? _react2.default.createElement('div', { className: 'progress-slider--completed' }) : _react2.default.createElement(_ProgressSlider2.default, {
                        is_loading: false,
                        start_time: contract_info.purchase_time,
                        expiry_time: contract_info.date_expiry,
                        current_tick: getTick(),
                        ticks_count: contract_info.tick_count
                    }),
                    _react2.default.createElement(
                        _contractCardBody2.default,
                        null,
                        _react2.default.createElement(_profitLossCardContent2.default, {
                            pl_value: +profit,
                            payout: (0, _logic.getIndicativePrice)(contract_info),
                            currency: currency,
                            is_sold: !!is_sold,
                            status: this.props.status
                        })
                    ),
                    _react2.default.createElement(
                        _contractCardFooter2.default,
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'contract-card__footer-wrapper' },
                            _react2.default.createElement(
                                'div',
                                { className: 'purchase-price-container' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'purchase-price__label' },
                                    (0, _localize.localize)('Purchase price:')
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'purchase-price__value' },
                                    _react2.default.createElement(_money2.default, {
                                        currency: currency,
                                        amount: buy_price
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'potential-payout-container' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'potential-payout__label' },
                                    (0, _localize.localize)('Potential payout:')
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'potential-payout-price__value' },
                                    _react2.default.createElement(_money2.default, {
                                        currency: currency,
                                        amount: payout
                                    })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactTransitionGroup.CSSTransition,
                            {
                                'in': !!(0, _logic.isValidToSell)(contract_info),
                                timeout: 250,
                                classNames: {
                                    enter: 'contract-card__sell-button--enter',
                                    enterDone: 'contract-card__sell-button--enter-done',
                                    exit: 'contract-card__sell-button--exit'
                                },
                                unmountOnExit: true
                            },
                            _react2.default.createElement(
                                'div',
                                {
                                    className: 'contract-card__sell-button'
                                },
                                _react2.default.createElement(_button2.default, {
                                    className: (0, _classnames2.default)('btn--primary', 'btn--primary--green', 'btn--sell', {
                                        'btn--loading': is_sell_requested
                                    }),
                                    is_disabled: !(0, _logic.isValidToSell)(contract_info) || is_sell_requested,
                                    text: (0, _localize.localize)('Sell contract'),
                                    onClick: function onClick() {
                                        return onClickSell(contract_info.contract_id);
                                    }
                                })
                            )
                        )
                    )
                ),
                _react2.default.createElement(_ContractAudit2.default, {
                    contract_info: contract_info,
                    contract_end_time: (0, _logic.getEndTime)(contract_info),
                    is_dark_theme: is_dark_theme,
                    is_open: true,
                    is_shade_visible: this.handleShade,
                    duration: (0, _details.getDurationTime)(contract_info),
                    duration_unit: (0, _details.getDurationUnitText)((0, _details.getDurationPeriod)(contract_info)),
                    exit_spot: exit_spot,
                    has_result: !!is_sold
                })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            if (!this.props.contract_info) return null;
            var body_content = _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.props.contract_info.status ? this.getBodyContent() : _react2.default.createElement(
                    'div',
                    { className: 'contract-card' },
                    _react2.default.createElement(_ContentLoader.PositionsCardLoader, {
                        is_dark_theme: this.props.is_dark_theme,
                        speed: 2
                    })
                )
            );
            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('contract-drawer', {}) },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'contract-drawer__heading',
                        onClick: this.redirectBackToReports
                    },
                    _react2.default.createElement(_icon2.default, { icon: 'IconBack' }),
                    _react2.default.createElement(
                        'h2',
                        null,
                        _react2.default.createElement(_localize3.default, { str: this.props.heading || 'Contract' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'contract-drawer__body' },
                    body_content
                )
            );
        }
    }]);

    return ContractDrawer;
}(_react.Component);

ContractDrawer.propTypes = {
    contract_info: _propTypes2.default.object,
    heading: _propTypes2.default.string,
    is_dark_theme: _propTypes2.default.bool,
    is_sell_requested: _propTypes2.default.bool,
    onClickSell: _propTypes2.default.func,
    status: _propTypes2.default.string
};

exports.default = (0, _reactRouter.withRouter)(ContractDrawer);

/***/ }),

/***/ 858:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _contractAudit = __webpack_require__(859);

var _contractAudit2 = _interopRequireDefault(_contractAudit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _contractAudit2.default;

/***/ }),

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ttReactCustomScrollbars = __webpack_require__(100);

var _icExittimeWon = __webpack_require__(860);

var _icExittimeWon2 = _interopRequireDefault(_icExittimeWon);

var _icExittimeLoss = __webpack_require__(861);

var _icExittimeLoss2 = _interopRequireDefault(_icExittimeLoss);

var _localize = __webpack_require__(5);

var _Date = __webpack_require__(16);

var _helpers = __webpack_require__(255);

var _activeSymbols = __webpack_require__(122);

var _icons = __webpack_require__(862);

var _contractAuditItem = __webpack_require__(877);

var _contractAuditItem2 = _interopRequireDefault(_contractAuditItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContractAudit = function (_React$PureComponent) {
    _inherits(ContractAudit, _React$PureComponent);

    function ContractAudit() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, ContractAudit);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ContractAudit.__proto__ || Object.getPrototypeOf(ContractAudit)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            decimal_places: null
        }, _this.componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var decimal_places;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _activeSymbols.getUnderlyingPipSize)(_this.props.contract_info.underlying);

                        case 2:
                            decimal_places = _context.sent;

                            _this.setState({ decimal_places: decimal_places });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ContractAudit, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                contract_end_time = _props.contract_end_time,
                contract_info = _props.contract_info,
                duration = _props.duration,
                duration_unit = _props.duration_unit,
                exit_spot = _props.exit_spot,
                has_result = _props.has_result,
                is_dark_theme = _props.is_dark_theme;

            if (!has_result) return null;
            var is_profit = contract_info.profit >= 0;
            var IconExitTime = is_profit ? _react2.default.createElement(_icExittimeWon2.default, null) : _react2.default.createElement(_icExittimeLoss2.default, null);
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)('contract-audit__wrapper', {
                            'contract-audit__wrapper--is-open': !!contract_info.is_sold
                        })
                    },
                    _react2.default.createElement(
                        _ttReactCustomScrollbars.Scrollbars,
                        {
                            style: { width: '100%', height: '100%' },
                            autoHide: true
                        },
                        _react2.default.createElement(
                            'div',
                            { className: 'contract-audit__grid' },
                            _react2.default.createElement(_contractAuditItem2.default, {
                                icon: (0, _icons.getThemedIcon)('id', is_dark_theme),
                                label: (0, _localize.localize)('Reference ID'),
                                value: (0, _localize.localize)('[_1] (Buy)', contract_info.transaction_ids.buy),
                                value2: (0, _localize.localize)('[_1] (Sell)', contract_info.transaction_ids.sell)
                            })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'contract-audit__grid' },
                            _react2.default.createElement(_contractAuditItem2.default, {
                                icon: (0, _icons.getThemedIcon)('duration', is_dark_theme),
                                label: (0, _localize.localize)('Duration'),
                                value: contract_info.tick_count > 0 ? contract_info.tick_count + ' ' + (contract_info.tick_count < 2 ? (0, _localize.localize)('tick') : (0, _localize.localize)('ticks')) : duration + ' ' + duration_unit
                            })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'contract-audit__grid' },
                            _react2.default.createElement(_contractAuditItem2.default, {
                                icon: (0, _helpers.isDigitType)(contract_info.contract_type) ? (0, _icons.getThemedIcon)('target', is_dark_theme) : (0, _icons.getThemedIcon)('barrier', is_dark_theme),
                                label: (0, _helpers.getBarrierLabel)(contract_info),
                                value: (0, _helpers.getBarrierValue)(contract_info) || ' - '
                            })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'contract-audit__grid' },
                            _react2.default.createElement(_contractAuditItem2.default, {
                                icon: (0, _icons.getThemedIcon)('start_time', is_dark_theme),
                                label: (0, _localize.localize)('Start time'),
                                value: (0, _Date.toGMTFormat)((0, _Date.epochToMoment)(contract_info.purchase_time)) || ' - '
                            })
                        ),
                        !(0, _helpers.isDigitType)(contract_info.contract_type) && _react2.default.createElement(
                            'div',
                            { className: 'contract-audit__grid' },
                            _react2.default.createElement(_contractAuditItem2.default, {
                                icon: (0, _icons.getThemedIcon)('entry_spot', is_dark_theme),
                                label: (0, _localize.localize)('Entry spot'),
                                value: (0, _helpers.addCommaToNumber)(contract_info.entry_spot, this.state.decimal_places) || ' - ',
                                value2: (0, _Date.toGMTFormat)((0, _Date.epochToMoment)(contract_info.entry_tick_time)) || ' - '
                            })
                        ),
                        !isNaN(exit_spot) && _react2.default.createElement(
                            'div',
                            { className: 'contract-audit__grid' },
                            _react2.default.createElement(_contractAuditItem2.default, {
                                icon: (0, _icons.getThemedIcon)('exit_spot', is_dark_theme),
                                label: (0, _localize.localize)('Exit spot'),
                                value: (0, _helpers.addCommaToNumber)(exit_spot, this.state.decimal_places) || ' - ',
                                value2: (0, _Date.toGMTFormat)((0, _Date.epochToMoment)(contract_info.exit_tick_time)) || ' - '
                            })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'contract-audit__grid' },
                            _react2.default.createElement(_contractAuditItem2.default, {
                                icon: IconExitTime,
                                label: (0, _localize.localize)('Exit Time'),
                                value: (0, _Date.toGMTFormat)((0, _Date.epochToMoment)(contract_end_time)) || ' - '
                            })
                        )
                    )
                )
            );
        }
    }]);

    return ContractAudit;
}(_react2.default.PureComponent);

ContractAudit.propTypes = {
    contract_end_time: _propTypes2.default.PropTypes.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    contract_info: _propTypes2.default.object,
    duration: _propTypes2.default.number,
    duration_unit: _propTypes2.default.string,
    exit_spot: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    has_result: _propTypes2.default.bool,
    is_dark_theme: _propTypes2.default.bool,
    is_open: _propTypes2.default.bool
};

exports.default = ContractAudit;

/***/ }),

/***/ 860:
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
    width: "24",
    height: "24"
  }, props), _react2.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react2.default.createElement("rect", {
    width: "24",
    height: "24",
    fill: "#39B19D",
    fillRule: "nonzero",
    rx: "4"
  }), _react2.default.createElement("path", {
    fill: "#FFF",
    d: "M7 6h11a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7v2a1 1 0 0 1-2 0V6a1 1 0 1 1 2 0zm0 2v2h2V8H7zm0 4v2h2v-2H7zm8-4v2h2V8h-2zm-2 2v2h2v-2h-2zm2 2v2h2v-2h-2zm-4-4v2h2V8h-2zm-2 2v2h2v-2H9zm2 2v2h2v-2h-2z"
  })));
};

/***/ }),

/***/ 861:
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
    width: "24",
    height: "24"
  }, props), _react2.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react2.default.createElement("rect", {
    width: "24",
    height: "24",
    fill: "#E31C4B",
    fillRule: "nonzero",
    rx: "4"
  }), _react2.default.createElement("path", {
    fill: "#FFF",
    d: "M7 6h11a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7v2a1 1 0 0 1-2 0V6a1 1 0 1 1 2 0zm0 2v2h2V8H7zm0 4v2h2v-2H7zm8-4v2h2V8h-2zm-2 2v2h2v-2h-2zm2 2v2h2v-2h-2zm-4-4v2h2V8h-2zm-2 2v2h2v-2H9zm2 2v2h2v-2h-2z"
  })));
};

/***/ }),

/***/ 862:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getThemedIcon = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _icBarrier = __webpack_require__(863);

var _icBarrier2 = _interopRequireDefault(_icBarrier);

var _icDuration = __webpack_require__(864);

var _icDuration2 = _interopRequireDefault(_icDuration);

var _icEntryspot = __webpack_require__(865);

var _icEntryspot2 = _interopRequireDefault(_icEntryspot);

var _icExitspot = __webpack_require__(866);

var _icExitspot2 = _interopRequireDefault(_icExitspot);

var _icId = __webpack_require__(867);

var _icId2 = _interopRequireDefault(_icId);

var _icStarttime = __webpack_require__(868);

var _icStarttime2 = _interopRequireDefault(_icStarttime);

var _icTarget = __webpack_require__(869);

var _icTarget2 = _interopRequireDefault(_icTarget);

var _icBarrier3 = __webpack_require__(870);

var _icBarrier4 = _interopRequireDefault(_icBarrier3);

var _icDuration3 = __webpack_require__(871);

var _icDuration4 = _interopRequireDefault(_icDuration3);

var _icEntryspot3 = __webpack_require__(872);

var _icEntryspot4 = _interopRequireDefault(_icEntryspot3);

var _icExitspot3 = __webpack_require__(873);

var _icExitspot4 = _interopRequireDefault(_icExitspot3);

var _icId3 = __webpack_require__(874);

var _icId4 = _interopRequireDefault(_icId3);

var _icStarttime3 = __webpack_require__(875);

var _icStarttime4 = _interopRequireDefault(_icStarttime3);

var _icTarget3 = __webpack_require__(876);

var _icTarget4 = _interopRequireDefault(_icTarget3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getThemedIcon = exports.getThemedIcon = function getThemedIcon(type, is_dark_theme) {
    var IconType = void 0;
    if (type) {
        switch (type) {
            case 'id':
                IconType = is_dark_theme ? _react2.default.createElement(_icId2.default, null) : _react2.default.createElement(_icId4.default, null);
                break;
            case 'duration':
                IconType = is_dark_theme ? _react2.default.createElement(_icDuration2.default, null) : _react2.default.createElement(_icDuration4.default, null);
                break;
            case 'barrier':
                IconType = is_dark_theme ? _react2.default.createElement(_icBarrier2.default, null) : _react2.default.createElement(_icBarrier4.default, null);
                break;
            case 'target':
                IconType = is_dark_theme ? _react2.default.createElement(_icTarget2.default, null) : _react2.default.createElement(_icTarget4.default, null);
                break;
            case 'start_time':
                IconType = is_dark_theme ? _react2.default.createElement(_icStarttime2.default, null) : _react2.default.createElement(_icStarttime4.default, null);
                break;
            case 'entry_spot':
                IconType = is_dark_theme ? _react2.default.createElement(_icEntryspot2.default, null) : _react2.default.createElement(_icEntryspot4.default, null);
                break;
            case 'exit_spot':
                IconType = is_dark_theme ? _react2.default.createElement(_icExitspot2.default, null) : _react2.default.createElement(_icExitspot4.default, null);
                break;
            default:
                break;
        }
    }
    if (!IconType) return null;
    return IconType;
};

/***/ }),

/***/ 863:
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
    width: "24",
    height: "24"
  }, props), _react2.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react2.default.createElement("rect", {
    width: "24",
    height: "24",
    fill: "#191C31",
    fillRule: "nonzero",
    rx: "4"
  }), _react2.default.createElement("path", {
    fill: "#555975",
    d: "M6 13H0v-2h6V8h12v8H6v-3z"
  }), _react2.default.createElement("path", {
    fill: "#FFF",
    d: "M10 11h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2z"
  })));
};

/***/ }),

/***/ 864:
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
    width: "24",
    height: "24"
  }, props), _react2.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react2.default.createElement("rect", {
    width: "24",
    height: "24",
    fill: "#191C31",
    fillRule: "nonzero",
    rx: "4"
  }), _react2.default.createElement("path", {
    fill: "#FFF",
    d: "M12 19a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm1-6h1a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v2z"
  })));
};

/***/ }),

/***/ 865:
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
    width: "24",
    height: "24"
  }, props), _react2.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react2.default.createElement("rect", {
    width: "24",
    height: "24",
    fill: "#191C31",
    fillRule: "nonzero",
    rx: "4"
  }), _react2.default.createElement("path", {
    fill: "#F93",
    d: "M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
  }), _react2.default.createElement("path", {
    fill: "#191C31",
    fillRule: "nonzero",
    d: "M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
  })));
};

/***/ }),

/***/ 866:
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
    width: "24",
    height: "24"
  }, props), _react2.default.createElement("g", {
    fill: "none"
  }, _react2.default.createElement("rect", {
    width: "24",
    height: "24",
    fill: "#191C31",
    rx: "4"
  }), _react2.default.createElement("path", {
    fill: "#FFF",
    d: "M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"
  }), _react2.default.createElement("path", {
    fill: "#191C31",
    d: "M12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"
  })));
};

/***/ }),

/***/ 867:
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
    width: "24",
    height: "24"
  }, props), _react2.default.createElement("defs", null, _react2.default.createElement("rect", {
    id: "a",
    width: "24",
    height: "24",
    rx: "4"
  })), _react2.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react2.default.createElement("mask", {
    id: "b",
    fill: "#fff"
  }, _react2.default.createElement("use", {
    xlinkHref: "#a"
  })), _react2.default.createElement("use", {
    fill: "#191C31",
    fillRule: "nonzero",
    xlinkHref: "#a"
  }), _react2.default.createElement("path", {
    fill: "#FFF",
    d: "M11 7h3a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4h-3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm1 2v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2zM7 7a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1z",
    mask: "url(#b)"
  })));
};

/***/ }),

/***/ 868:
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
    width: "24",
    height: "24"
  }, props), _react2.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react2.default.createElement("rect", {
    width: "24",
    height: "24",
    fill: "#191C31",
    fillRule: "nonzero",
    rx: "4"
  }), _react2.default.createElement("path", {
    fill: "#FFF",
    d: "M12 19c3-4 5-6.24 5-9a5 5 0 0 0-10 0c0 2.76 2 5 5 9z"
  }), _react2.default.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3",
    fill: "#191C31",
    fillRule: "nonzero"
  })));
};

/***/ }),

/***/ 869:
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
    width: "24",
    height: "24"
  }, props), _react2.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react2.default.createElement("rect", {
    width: "24",
    height: "24",
    fill: "#191C31",
    fillRule: "nonzero",
    rx: "4"
  }), _react2.default.createElement("path", {
    fill: "#FFF",
    d: "M6.08 13H6a1 1 0 0 1 0-2h.08A6 6 0 0 1 11 6.08V6a1 1 0 0 1 2 0v.08A6 6 0 0 1 17.92 11H18a1 1 0 0 1 0 2h-.08A6 6 0 0 1 13 17.92V18a1 1 0 0 1-2 0v-.08A6 6 0 0 1 6.08 13zm2.05-2H9a1 1 0 0 1 0 2h-.87A4 4 0 0 0 11 15.87V15a1 1 0 0 1 2 0v.87A4 4 0 0 0 15.87 13H15a1 1 0 0 1 0-2h.87A4 4 0 0 0 13 8.13V9a1 1 0 0 1-2 0v-.87A4 4 0 0 0 8.13 11z"
  })));
};

/***/ }),

/***/ 870:
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
    width: "24",
    height: "24"
  }, props), _react2.default.createElement("g", {
    fill: "none"
  }, _react2.default.createElement("rect", {
    width: "24",
    height: "24",
    fill: "#F4F4F6",
    rx: "4"
  }), _react2.default.createElement("path", {
    fill: "#999CAC",
    d: "M6 13H0v-2h6V8h12v8H6v-3z"
  }), _react2.default.createElement("path", {
    fill: "#FFF",
    d: "M10 11h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2z"
  })));
};

/***/ }),

/***/ 871:
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
    width: "24",
    height: "24"
  }, props), _react2.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react2.default.createElement("rect", {
    width: "24",
    height: "24",
    fill: "#F4F4F6",
    fillRule: "nonzero",
    rx: "4"
  }), _react2.default.createElement("path", {
    fill: "#000",
    fillOpacity: ".8",
    d: "M12 19a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm1-8v2.59l1.7 1.7a1 1 0 0 1-1.4 1.42l-2-2A1 1 0 0 1 11 12V9a1 1 0 0 1 2 0z"
  })));
};

/***/ }),

/***/ 872:
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
    width: "24",
    height: "24"
  }, props), _react2.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react2.default.createElement("rect", {
    width: "24",
    height: "24",
    fill: "#F4F4F6",
    fillRule: "nonzero",
    rx: "4"
  }), _react2.default.createElement("path", {
    fill: "#F93",
    d: "M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"
  }), _react2.default.createElement("path", {
    fill: "#FFF",
    d: "M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
  })));
};

/***/ }),

/***/ 873:
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
    width: "24",
    height: "24"
  }, props), _react2.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react2.default.createElement("rect", {
    width: "24",
    height: "24",
    fill: "#F4F4F6",
    fillRule: "nonzero",
    rx: "4"
  }), _react2.default.createElement("path", {
    fill: "#999CAC",
    fillRule: "nonzero",
    d: "M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"
  }), _react2.default.createElement("path", {
    fill: "#FFF",
    d: "M12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"
  })));
};

/***/ }),

/***/ 874:
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
    width: "24",
    height: "24"
  }, props), _react2.default.createElement("defs", null, _react2.default.createElement("rect", {
    id: "a",
    width: "24",
    height: "24",
    rx: "4"
  })), _react2.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react2.default.createElement("mask", {
    id: "b",
    fill: "#fff"
  }, _react2.default.createElement("use", {
    xlinkHref: "#a"
  })), _react2.default.createElement("use", {
    fill: "#F4F4F6",
    fillRule: "nonzero",
    xlinkHref: "#a"
  }), _react2.default.createElement("path", {
    fill: "#000",
    fillOpacity: ".8",
    d: "M11 7h3a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4h-3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm1 2v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2zM7 7a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1z",
    mask: "url(#b)"
  })));
};

/***/ }),

/***/ 875:
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
    width: "24",
    height: "24"
  }, props), _react2.default.createElement("g", {
    fill: "none"
  }, _react2.default.createElement("rect", {
    width: "24",
    height: "24",
    fill: "#F4F4F6",
    rx: "4"
  }), _react2.default.createElement("path", {
    fill: "#999CAC",
    d: "M12 19c3-4 5-6.24 5-9a5 5 0 0 0-10 0c0 2.76 2 5 5 9z"
  }), _react2.default.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3",
    fill: "#FFF"
  })));
};

/***/ }),

/***/ 876:
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
    width: "24",
    height: "24"
  }, props), _react2.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react2.default.createElement("rect", {
    width: "24",
    height: "24",
    fill: "#F4F4F6",
    fillRule: "nonzero",
    rx: "4"
  }), _react2.default.createElement("path", {
    fill: "#000",
    fillOpacity: ".8",
    d: "M6.08 13H6a1 1 0 0 1 0-2h.08A6 6 0 0 1 11 6.08V6a1 1 0 0 1 2 0v.08A6 6 0 0 1 17.92 11H18a1 1 0 0 1 0 2h-.08A6 6 0 0 1 13 17.92V18a1 1 0 0 1-2 0v-.08A6 6 0 0 1 6.08 13zm2.05-2H9a1 1 0 0 1 0 2h-.87A4 4 0 0 0 11 15.87V15a1 1 0 0 1 2 0v.87A4 4 0 0 0 15.87 13H15a1 1 0 0 1 0-2h.87A4 4 0 0 0 13 8.13V9a1 1 0 0 1-2 0v-.87A4 4 0 0 0 8.13 11z"
  })));
};

/***/ }),

/***/ 877:
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

var ContractAuditItem = function ContractAuditItem(_ref) {
    var icon = _ref.icon,
        label = _ref.label,
        value = _ref.value,
        value2 = _ref.value2;
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        icon && _react2.default.createElement(
            'div',
            { className: 'contract-audit__icon' },
            icon
        ),
        _react2.default.createElement(
            'div',
            { className: 'contract-audit__item' },
            _react2.default.createElement(
                'span',
                { className: 'contract-audit__label' },
                label
            ),
            _react2.default.createElement(
                'div',
                { className: 'contract-audit__value-wrapper' },
                _react2.default.createElement(
                    'span',
                    { className: 'contract-audit__value' },
                    value
                ),
                value2 && _react2.default.createElement(
                    'span',
                    { className: 'contract-audit__value2' },
                    value2
                )
            )
        )
    );
};

ContractAuditItem.propTypes = {
    icon: _propTypes2.default.node,
    label: _propTypes2.default.string,
    value: _propTypes2.default.PropTypes.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    value2: _propTypes2.default.PropTypes.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};

exports.default = ContractAuditItem;

/***/ }),

/***/ 878:
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

var _currency_base = __webpack_require__(23);

var _localize = __webpack_require__(27);

var _localize2 = _interopRequireDefault(_localize);

var _money = __webpack_require__(66);

var _money2 = _interopRequireDefault(_money);

var _icon = __webpack_require__(8);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProfitLossCardContent = function ProfitLossCardContent(_ref) {
    var currency = _ref.currency,
        is_sold = _ref.is_sold,
        pl_value = _ref.pl_value,
        payout = _ref.payout,
        status = _ref.status;
    return _react2.default.createElement(
        'div',
        { className: 'pl-card' },
        _react2.default.createElement(
            'div',
            { className: 'pl-card__item' },
            _react2.default.createElement(
                'div',
                { className: 'pl-card__item__header' },
                _react2.default.createElement(_localize2.default, { str: is_sold ? 'Profit/Loss:' : 'Potential profit/loss:' })
            ),
            _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('pl-card__item__body', {
                        'pl-card__item__body--is-crypto': (0, _currency_base.isCryptocurrency)(currency),
                        'pl-card__item__body--loss': +pl_value < 0,
                        'pl-card__item__body--profit': +pl_value > 0
                    })
                },
                _react2.default.createElement(_money2.default, { currency: currency, has_sign: false, amount: pl_value }),
                _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)('pl-card__indicative--movement', {
                            'pl-card__indicative--movement-complete': is_sold
                        })
                    },
                    _react2.default.createElement(_icon2.default, {
                        icon: 'IconPriceMove',
                        type: !is_sold ? status : null
                    })
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'pl-card__item-payout' },
            _react2.default.createElement(
                'div',
                { className: 'pl-card__item__header' },
                _react2.default.createElement(_localize2.default, { str: is_sold ? 'Payout:' : 'Indicative price:' })
            ),
            _react2.default.createElement(
                'div',
                { className: 'pl-card__item__body' },
                _react2.default.createElement(_money2.default, { currency: currency, amount: payout }),
                _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)('pl-card__indicative--movement', {
                            'pl-card__indicative--movement-complete': is_sold
                        })
                    },
                    _react2.default.createElement(_icon2.default, {
                        icon: 'IconPriceMove',
                        type: !is_sold ? status : null
                    })
                )
            )
        )
    );
};

ProfitLossCardContent.propTypes = {
    currency: _propTypes2.default.string,
    is_sold: _propTypes2.default.bool,
    payout: _propTypes2.default.number,
    pl_value: _propTypes2.default.number,
    status: _propTypes2.default.string
};
exports.default = ProfitLossCardContent;

/***/ }),

/***/ 879:
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

var ContractCardBody = function ContractCardBody(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        'div',
        { className: 'contract-card__body' },
        children
    );
};

ContractCardBody.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node])
};

exports.default = ContractCardBody;

/***/ }),

/***/ 880:
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

var ContractCardFooter = function ContractCardFooter(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        'div',
        { className: 'contract-card__footer' },
        children
    );
};

ContractCardFooter.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array])
};

exports.default = ContractCardFooter;

/***/ }),

/***/ 881:
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

var ContractCardHeader = function ContractCardHeader(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        'div',
        { className: 'contract-card__header' },
        children
    );
};

ContractCardHeader.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node])
};

exports.default = ContractCardHeader;

/***/ })

}]);