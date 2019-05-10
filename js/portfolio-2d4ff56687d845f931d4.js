(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portfolio"],{

/***/ 837:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _portfolio = __webpack_require__(869);

var _portfolio2 = _interopRequireDefault(_portfolio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _portfolio2.default;

/***/ }),

/***/ 845:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dataTable = __webpack_require__(848);

var _dataTable2 = _interopRequireDefault(_dataTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _dataTable2.default;

/***/ }),

/***/ 848:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _mobxReact = __webpack_require__(12);

var _ttReactCustomScrollbars = __webpack_require__(101);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _tableRow = __webpack_require__(849);

var _tableRow2 = _interopRequireDefault(_tableRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* TODO:
      1. implement sorting by column (ASC/DESC)
      2. implement filtering per column
*/

var DataTable = function (_React$PureComponent) {
    _inherits(DataTable, _React$PureComponent);

    function DataTable(props) {
        _classCallCheck(this, DataTable);

        var _this = _possibleConstructorReturn(this, (DataTable.__proto__ || Object.getPrototypeOf(DataTable)).call(this, props));

        _this.state = {
            height: 200
        };
        return _this;
    }

    _createClass(DataTable, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({
                height: this.el_table_body.clientHeight
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.alignHeader();
        }
    }, {
        key: 'alignHeader',
        value: function alignHeader() {
            // scrollbar inside table-body can push content (depending on the browser and if mouse is plugged in)
            if (!this.props.data_source.length) return;
            var first_body_row = this.el_table_body.firstChild;
            var scrollbar_offset = this.el_table_head.offsetWidth - first_body_row.offsetWidth;
            this.el_table_head.style.paddingRight = scrollbar_offset + 'px';
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames,
                _this2 = this;

            var _props = this.props,
                children = _props.children,
                className = _props.className,
                columns = _props.columns,
                data_source = _props.data_source,
                footer = _props.footer,
                getRowAction = _props.getRowAction,
                is_empty = _props.is_empty,
                onScroll = _props.onScroll;


            var TableData = _react2.default.createElement(
                _react2.default.Fragment,
                null,
                data_source.map(function (row_obj, id) {
                    var action = getRowAction && getRowAction(row_obj);

                    return _react2.default.createElement(_tableRow2.default, {
                        className: className,
                        row_obj: row_obj,
                        columns: columns,
                        key: id,
                        to: typeof action === 'string' ? action : undefined,
                        replace: (typeof action === 'undefined' ? 'undefined' : _typeof(action)) === 'object' ? action : undefined
                    });
                }),
                children
            );

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('table', (_classNames = {}, _defineProperty(_classNames, '' + className, className), _defineProperty(_classNames, className + '__table', className), _defineProperty(_classNames, className + '__content', className), _classNames))
                },
                _react2.default.createElement(
                    'div',
                    { className: 'table__head', ref: function ref(el) {
                            _this2.el_table_head = el;
                        } },
                    _react2.default.createElement(_tableRow2.default, { className: className, columns: columns, is_header: true })
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'table__body',
                        onScroll: onScroll,
                        ref: function ref(el) {
                            _this2.el_table_body = el;
                        }
                    },
                    is_empty ? TableData : _react2.default.createElement(
                        _ttReactCustomScrollbars.Scrollbars,
                        {
                            autoHeight: true,
                            autoHeightMax: this.state.height,
                            autoHide: true
                        },
                        TableData
                    )
                ),
                footer && _react2.default.createElement(
                    'div',
                    { className: 'table__foot' },
                    _react2.default.createElement(_tableRow2.default, {
                        className: className,
                        row_obj: footer,
                        columns: columns,
                        is_footer: true
                    })
                )
            );
        }
    }]);

    return DataTable;
}(_react2.default.PureComponent);

DataTable.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.arrayOf(_propTypes2.default.node)]),
    className: _propTypes2.default.string,
    columns: _propTypes2.default.array,
    data_source: _mobxReact.PropTypes.arrayOrObservableArray,
    footer: _propTypes2.default.object,
    getRowAction: _propTypes2.default.func,
    onScroll: _propTypes2.default.func
};

exports.default = DataTable;

/***/ }),

/***/ 849:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(56);

var _tableCell = __webpack_require__(850);

var _tableCell2 = _interopRequireDefault(_tableCell);

var _tableRowInfo = __webpack_require__(851);

var _tableRowInfo2 = _interopRequireDefault(_tableRowInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TableRow = function TableRow(_ref) {
    var className = _ref.className,
        columns = _ref.columns,
        is_footer = _ref.is_footer,
        is_header = _ref.is_header,
        replace = _ref.replace,
        _ref$row_obj = _ref.row_obj,
        row_obj = _ref$row_obj === undefined ? {} : _ref$row_obj,
        to = _ref.to;

    var cells = columns.map(function (_ref2) {
        var col_index = _ref2.col_index,
            renderCellContent = _ref2.renderCellContent,
            title = _ref2.title,
            key = _ref2.key;

        var cell_content = title;
        if (!is_header) {
            var cell_value = row_obj[col_index] || '';
            cell_content = renderCellContent ? renderCellContent({ cell_value: cell_value, col_index: col_index, row_obj: row_obj, is_footer: is_footer }) : cell_value;
        }

        return _react2.default.createElement(
            _tableCell2.default,
            { col_index: col_index, key: key || col_index },
            cell_content
        );
    });

    var row_class_name = (0, _classnames2.default)('table__row', { 'table__row-link': to || replace }, _defineProperty({}, className + '__row', className));

    return to ? _react2.default.createElement(
        _reactRouterDom.NavLink,
        { className: row_class_name, to: to },
        cells
    ) : _react2.default.createElement(_tableRowInfo2.default, {
        className: row_class_name,
        cells: cells,
        replace: replace,
        is_footer: is_footer
    });
};

TableRow.propTypes = {
    className: _propTypes2.default.string,
    columns: _propTypes2.default.array,
    is_footer: _propTypes2.default.bool,
    is_header: _propTypes2.default.bool,
    replace: _propTypes2.default.object,
    row_obj: _propTypes2.default.object,
    to: _propTypes2.default.string
};

exports.default = TableRow;

/***/ }),

/***/ 850:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableCell = function TableCell(_ref) {
    var col_index = _ref.col_index,
        children = _ref.children;
    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('table__cell', col_index) },
        children
    );
};

TableCell.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]),
    col_index: _propTypes2.default.string
};

exports.default = TableCell;

/***/ }),

/***/ 851:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableRowInfo = function (_React$Component) {
    _inherits(TableRowInfo, _React$Component);

    function TableRowInfo(props) {
        _classCallCheck(this, TableRowInfo);

        var _this = _possibleConstructorReturn(this, (TableRowInfo.__proto__ || Object.getPrototypeOf(TableRowInfo)).call(this, props));

        _this.toggleDetails = function () {
            if (_this.props.replace) {
                _this.setState(function (state) {
                    return { showDetails: !state.showDetails };
                });
            }
        };

        _this.state = {
            showDetails: false
        };
        return _this;
    }

    _createClass(TableRowInfo, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                {
                    onClick: this.props.is_footer || !this.props.replace ? undefined : this.toggleDetails,
                    className: (0, _classnames2.default)(this.props.className, { 'statement__row--detail': this.state.showDetails })
                },
                this.state.showDetails ? _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        this.props.replace.message
                    )
                ) : this.props.cells
            );
        }
    }]);

    return TableRowInfo;
}(_react2.default.Component);

exports.default = TableRowInfo;


TableRowInfo.propTypes = {
    cells: _propTypes2.default.arrayOf(_propTypes2.default.node),
    className: _propTypes2.default.string,
    replace: _propTypes2.default.object
};

/***/ }),

/***/ 852:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(5);

var _money = __webpack_require__(83);

var _money2 = _interopRequireDefault(_money);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IndicativeCell = function IndicativeCell(_ref) {
    var amount = _ref.amount,
        currency = _ref.currency,
        status = _ref.status;

    var status_class_name = status ? 'indicative--' + status : undefined;

    return _react2.default.createElement(
        'div',
        { className: status_class_name },
        _react2.default.createElement(_money2.default, { amount: amount, currency: currency }),
        status === 'no-resale' && _react2.default.createElement(
            'div',
            { className: 'indicative__no-resale-msg' },
            (0, _localize.localize)('Resale not offered')
        )
    );
};

IndicativeCell.propTypes = {
    amount: _propTypes2.default.number,
    currency: _propTypes2.default.string,
    status: _propTypes2.default.string
};

exports.default = IndicativeCell;

/***/ }),

/***/ 853:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function Loading(_ref) {
    var is_invisible = _ref.is_invisible,
        theme = _ref.theme,
        id = _ref.id;
    return _react2.default.createElement(
        'div',
        { id: id, className: 'barspinner barspinner--' + (theme || 'dark') + (is_invisible ? ' invisible' : '') },
        Array.from(new Array(5)).map(function (x, inx) {
            return _react2.default.createElement('div', { key: inx, className: 'barspinner__rect barspinner__rect--' + (inx + 1) + ' rect' + (inx + 1) });
        })
    );
};

exports.default = Loading;

/***/ }),

/***/ 869:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _mobxReact = __webpack_require__(12);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(56);

var _DataTable = __webpack_require__(845);

var _DataTable2 = _interopRequireDefault(_DataTable);

var _helpers = __webpack_require__(177);

var _connect = __webpack_require__(7);

var _cardList = __webpack_require__(870);

var _cardList2 = _interopRequireDefault(_cardList);

var _emptyPortfolioMessage = __webpack_require__(299);

var _emptyPortfolioMessage2 = _interopRequireDefault(_emptyPortfolioMessage);

var _dataTableConstants = __webpack_require__(872);

var _loading = __webpack_require__(853);

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portfolio = function (_React$Component) {
    _inherits(Portfolio, _React$Component);

    function Portfolio() {
        _classCallCheck(this, Portfolio);

        return _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).apply(this, arguments));
    }

    _createClass(Portfolio, [{
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
                active_positions = _props.active_positions,
                is_mobile = _props.is_mobile,
                is_tablet = _props.is_tablet,
                is_loading = _props.is_loading,
                error = _props.error,
                totals = _props.totals,
                is_empty = _props.is_empty,
                currency = _props.currency;


            if (error) {
                return _react2.default.createElement(
                    'p',
                    null,
                    error
                );
            }

            if (is_loading) {
                return _react2.default.createElement(_loading2.default, null);
            }

            if (is_empty) {
                return _react2.default.createElement(_emptyPortfolioMessage2.default, null);
            }

            var should_show_cards = is_mobile || is_tablet;

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('portfolio container', { 'portfolio--card-view': should_show_cards }) },
                should_show_cards ? _react2.default.createElement(_cardList2.default, { data: active_positions, currency: currency }) : _react2.default.createElement(_DataTable2.default, {
                    className: 'portfolio',
                    columns: (0, _dataTableConstants.getTableColumnsTemplate)(currency),
                    data_source: active_positions,
                    footer: totals,
                    has_fixed_header: true,
                    getRowAction: function getRowAction(row_obj) {
                        return (0, _helpers.getContractPath)(row_obj.id);
                    }
                })
            );
        }
    }]);

    return Portfolio;
}(_react2.default.Component);

Portfolio.propTypes = {
    active_positions: _mobxReact.PropTypes.arrayOrObservableArray,
    currency: _propTypes2.default.string,
    error: _propTypes2.default.string,
    history: _propTypes2.default.object,
    is_empty: _propTypes2.default.bool,
    is_loading: _propTypes2.default.bool,
    is_mobile: _propTypes2.default.bool,
    is_tablet: _propTypes2.default.bool,
    onMount: _propTypes2.default.func,
    onUnmount: _propTypes2.default.func,
    totals: _propTypes2.default.object
};

exports.default = (0, _connect.connect)(function (_ref) {
    var modules = _ref.modules,
        client = _ref.client,
        ui = _ref.ui;
    return {
        currency: client.currency,
        active_positions: modules.portfolio.active_positions,
        error: modules.portfolio.error,
        is_empty: modules.portfolio.is_empty,
        is_loading: modules.portfolio.is_loading,
        totals: modules.portfolio.totals,
        onMount: modules.portfolio.onMount,
        onUnmount: modules.portfolio.onUnmount,
        is_mobile: ui.is_mobile,
        is_tablet: ui.is_tablet
    };
})((0, _reactRouterDom.withRouter)(Portfolio));

/***/ }),

/***/ 870:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _mobxReact = __webpack_require__(12);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _portfolioCard = __webpack_require__(871);

var _portfolioCard2 = _interopRequireDefault(_portfolioCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardList = function CardList(_ref) {
    var data = _ref.data,
        currency = _ref.currency;
    return _react2.default.createElement(
        'div',
        { className: 'card-list' },
        data.map(function (portfolio_position, id) {
            return _react2.default.createElement(_portfolioCard2.default, _extends({
                key: id
            }, portfolio_position, {
                currency: currency
            }));
        })
    );
};

CardList.propTypes = {
    currency: _propTypes2.default.string,
    data: _mobxReact.PropTypes.arrayOrObservableArray
};

exports.default = CardList;

/***/ }),

/***/ 871:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(56);

var _money = __webpack_require__(83);

var _money2 = _interopRequireDefault(_money);

var _helpers = __webpack_require__(177);

var _remainingTime = __webpack_require__(178);

var _remainingTime2 = _interopRequireDefault(_remainingTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PortfolioCard = function PortfolioCard(_ref) {
    var currency = _ref.currency,
        details = _ref.details,
        expiry_time = _ref.expiry_time,
        id = _ref.id,
        indicative = _ref.indicative,
        payout = _ref.payout,
        purchase = _ref.purchase,
        reference = _ref.reference,
        status = _ref.status;
    return _react2.default.createElement(
        _reactRouterDom.NavLink,
        {
            className: 'portfolio-card card-list__card card-list__card-link',
            activeClassName: 'active',
            to: (0, _helpers.getContractPath)(id)
        },
        _react2.default.createElement(
            'div',
            { className: 'portfolio-card__header' },
            _react2.default.createElement(
                'span',
                { className: 'portfolio-card__date' },
                _react2.default.createElement(_remainingTime2.default, { end_time: expiry_time })
            ),
            _react2.default.createElement(
                'span',
                { className: 'portfolio-card__refid' },
                reference
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'portfolio-card__body' },
            _react2.default.createElement(
                'div',
                { className: 'portfolio-card__desc' },
                details
            ),
            _react2.default.createElement(
                'div',
                { className: 'portfolio-card__row' },
                _react2.default.createElement(
                    'div',
                    { className: 'portfolio-card__cell portfolio-card__purchase' },
                    _react2.default.createElement(
                        'span',
                        { className: 'portfolio-card__cell-text' },
                        _react2.default.createElement(_money2.default, { amount: purchase, currency: currency })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'portfolio-card__cell portfolio-card__payout' },
                    _react2.default.createElement(
                        'span',
                        { className: 'portfolio-card__cell-text' },
                        _react2.default.createElement(_money2.default, { amount: payout, currency: currency })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'portfolio-card__cell portfolio-card__indicative portfolio-card__indicative--' + status },
                    _react2.default.createElement(
                        'span',
                        { className: 'portfolio-card__cell-text' },
                        _react2.default.createElement(_money2.default, { amount: indicative, currency: currency })
                    )
                )
            )
        )
    );
};

PortfolioCard.propTypes = {
    currency: _propTypes2.default.string,
    details: _propTypes2.default.string,
    expiry_time: _propTypes2.default.number,
    id: _propTypes2.default.number,
    indicative: _propTypes2.default.number,
    payout: _propTypes2.default.number,
    purchase: _propTypes2.default.number,
    reference: _propTypes2.default.number,
    status: _propTypes2.default.string
};

exports.default = PortfolioCard;

/***/ }),

/***/ 872:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTableColumnsTemplate = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(5);

var _money = __webpack_require__(83);

var _money2 = _interopRequireDefault(_money);

var _remainingTime = __webpack_require__(178);

var _remainingTime2 = _interopRequireDefault(_remainingTime);

var _contractTypeCell = __webpack_require__(873);

var _contractTypeCell2 = _interopRequireDefault(_contractTypeCell);

var _indicativeCell = __webpack_require__(852);

var _indicativeCell2 = _interopRequireDefault(_indicativeCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/display-name, react/prop-types */
var getTableColumnsTemplate = exports.getTableColumnsTemplate = function getTableColumnsTemplate(currency) {
    return [{
        title: (0, _localize.localize)('Reference No.'),
        col_index: 'reference',
        renderCellContent: function renderCellContent(_ref) {
            var cell_value = _ref.cell_value,
                is_footer = _ref.is_footer;
            return is_footer ? (0, _localize.localize)('Total') : cell_value;
        }
    }, {
        title: (0, _localize.localize)('Contract Type'),
        col_index: 'type',
        renderCellContent: function renderCellContent(_ref2) {
            var cell_value = _ref2.cell_value,
                is_footer = _ref2.is_footer;

            if (is_footer) return '';
            return _react2.default.createElement(_contractTypeCell2.default, { type: cell_value });
        }
    }, {
        title: (0, _localize.localize)('Contract Details'),
        col_index: 'details'
    }, {
        title: (0, _localize.localize)('Remaining Time'),
        col_index: 'expiry_time',
        renderCellContent: function renderCellContent(_ref3) {
            var cell_value = _ref3.cell_value,
                is_footer = _ref3.is_footer;
            return is_footer ? '' : _react2.default.createElement(_remainingTime2.default, { end_time: cell_value });
        }
    }, {
        title: (0, _localize.localize)('Potential Payout'),
        col_index: 'payout',
        renderCellContent: function renderCellContent(_ref4) {
            var cell_value = _ref4.cell_value;
            return _react2.default.createElement(_money2.default, { amount: cell_value, currency: currency });
        }
    }, {
        title: (0, _localize.localize)('Purchase'),
        col_index: 'purchase',
        renderCellContent: function renderCellContent(_ref5) {
            var cell_value = _ref5.cell_value;
            return _react2.default.createElement(_money2.default, { amount: cell_value, currency: currency });
        }
    }, {
        title: (0, _localize.localize)('Indicative'),
        col_index: 'indicative',
        renderCellContent: function renderCellContent(_ref6) {
            var cell_value = _ref6.cell_value,
                row_obj = _ref6.row_obj;
            return _react2.default.createElement(_indicativeCell2.default, { amount: +cell_value, currency: currency, status: row_obj.status });
        }
    }];
};
/* eslint-enable react/display-name, react/prop-types */

/***/ }),

/***/ 873:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _contract = __webpack_require__(92);

var _icon = __webpack_require__(48);

var _Types = __webpack_require__(128);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContractTypeCell = function ContractTypeCell(_ref) {
    var type = _ref.type;
    return _react2.default.createElement(
        'div',
        { className: 'contract-type' },
        _react2.default.createElement(
            'div',
            { className: 'type-wrapper' },
            _react2.default.createElement(_icon.Icon, { icon: _Types.IconTradeType, type: type.toLowerCase(), className: 'type' })
        ),
        _react2.default.createElement(
            'span',
            null,
            type && (0, _contract.getContractTypeDisplay)(type) || ''
        )
    );
};

ContractTypeCell.propTypes = {
    type: _propTypes2.default.string
};

exports.default = ContractTypeCell;

/***/ })

}]);