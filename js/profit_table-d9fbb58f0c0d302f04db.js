(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profit_table"],{

/***/ 842:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = __webpack_require__(12);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(39);

var _localize = __webpack_require__(5);

var _url = __webpack_require__(34);

var _appConfig = __webpack_require__(178);

var _DataTable = __webpack_require__(846);

var _DataTable2 = _interopRequireDefault(_DataTable);

var _localize2 = __webpack_require__(26);

var _localize3 = _interopRequireDefault(_localize2);

var _helpers = __webpack_require__(177);

var _Constants = __webpack_require__(100);

var _connect = __webpack_require__(7);

var _emptyTradeHistoryMessage = __webpack_require__(855);

var _emptyTradeHistoryMessage2 = _interopRequireDefault(_emptyTradeHistoryMessage);

var _placeholderComponent = __webpack_require__(859);

var _placeholderComponent2 = _interopRequireDefault(_placeholderComponent);

var _reportsMeta = __webpack_require__(856);

var _dataTableConstants = __webpack_require__(857);

var _marketUnderyling = __webpack_require__(858);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProfitTable = function (_React$Component) {
    _inherits(ProfitTable, _React$Component);

    function ProfitTable() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ProfitTable);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProfitTable.__proto__ || Object.getPrototypeOf(ProfitTable)).call.apply(_ref, [this].concat(args))), _this), _this.getRowAction = function (row_obj) {
            return (0, _Constants.getUnsupportedContracts)()[(0, _marketUnderyling.getMarketInformation)(row_obj).category.toUpperCase()] ? {
                component: _react2.default.createElement(_localize3.default, {
                    str: 'This trade type is currently not supported on [_1]. Please go to [_2]Binary.com[_3] for details.',
                    replacers: {
                        '1': _appConfig.website_name,
                        '2_3': _react2.default.createElement('a', { className: 'link link--orange', rel: 'noopener noreferrer', target: '_blank', href: (0, _url.urlFor)('user/profit_tablews', undefined, undefined, true) })
                    }
                })
            } : (0, _helpers.getContractPath)(row_obj.contract_id);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ProfitTable, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.onMount();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.onUnmount();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                component_icon = _props.component_icon,
                currency = _props.currency,
                data = _props.data,
                is_empty = _props.is_empty,
                is_loading = _props.is_loading,
                error = _props.error,
                handleScroll = _props.handleScroll,
                has_selected_date = _props.has_selected_date,
                totals = _props.totals;

            if (error) return _react2.default.createElement(
                'p',
                null,
                error
            );

            var columns = (0, _dataTableConstants.getProfitTableColumnsTemplate)(currency);

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(_reportsMeta.ReportsMeta, {
                    i18n_heading: (0, _localize.localize)('Profit table'),
                    i18n_message: (0, _localize.localize)('View all trades purchased on your account, and a summary of your total profit/loss.')
                }),
                is_loading && data.length === 0 || is_empty ? _react2.default.createElement(_placeholderComponent2.default, {
                    is_loading: is_loading,
                    has_selected_date: has_selected_date,
                    is_empty: is_empty,
                    empty_message_component: _emptyTradeHistoryMessage2.default,
                    component_icon: component_icon,
                    localized_message: (0, _localize.localize)('You have no trading activity yet.'),
                    localized_period_message: (0, _localize.localize)('You have no trading activity for this period.')
                }) : _react2.default.createElement(
                    _DataTable2.default,
                    {
                        className: 'profit-table',
                        data_source: data,
                        columns: columns,
                        onScroll: handleScroll,
                        footer: totals,
                        is_empty: is_empty,
                        getRowAction: this.getRowAction
                    },
                    _react2.default.createElement(_placeholderComponent2.default, {
                        is_loading: is_loading
                    })
                )
            );
        }
    }]);

    return ProfitTable;
}(_react2.default.Component);

ProfitTable.propTypes = {
    component_icon: _propTypes2.default.func,
    currency: _propTypes2.default.string,
    data: _mobxReact.PropTypes.arrayOrObservableArray,
    error: _propTypes2.default.string,
    handleScroll: _propTypes2.default.func,
    has_selected_date: _propTypes2.default.bool,
    history: _propTypes2.default.object,
    is_empty: _propTypes2.default.bool,
    is_loading: _propTypes2.default.bool,
    onMount: _propTypes2.default.func,
    onUnmount: _propTypes2.default.func,
    totals: _propTypes2.default.object
};

exports.default = (0, _connect.connect)(function (_ref2) {
    var modules = _ref2.modules,
        client = _ref2.client;
    return {
        currency: client.currency,
        data: modules.profit_table.data,
        error: modules.profit_table.error,
        handleScroll: modules.profit_table.handleScroll,
        has_selected_date: modules.profit_table.has_selected_date,
        is_empty: modules.profit_table.is_empty,
        is_loading: modules.profit_table.is_loading,
        onMount: modules.profit_table.onMount,
        onUnmount: modules.profit_table.onUnmount,
        totals: modules.profit_table.totals
    };
})((0, _reactRouter.withRouter)(ProfitTable));

/***/ })

}]);