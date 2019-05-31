(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["open_positions~profit_table~statement"],{

/***/ 846:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dataTable = __webpack_require__(850);

var _dataTable2 = _interopRequireDefault(_dataTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _dataTable2.default;

/***/ }),

/***/ 850:
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

var _ttReactCustomScrollbars = __webpack_require__(103);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _tableRow = __webpack_require__(851);

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

/***/ 851:
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

var _reactRouterDom = __webpack_require__(57);

var _tableCell = __webpack_require__(852);

var _tableCell2 = _interopRequireDefault(_tableCell);

var _tableRowInfo = __webpack_require__(853);

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

/***/ 852:
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

/***/ 853:
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
                    this.props.replace.component ? this.props.replace.component : _react2.default.createElement(
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

/***/ 854:
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

var _money = __webpack_require__(67);

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

/***/ 855:
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

var EmptyTradeHistoryMessage = function EmptyTradeHistoryMessage(_ref) {
    var has_selected_date = _ref.has_selected_date,
        component_icon = _ref.component_icon,
        localized_message = _ref.localized_message,
        localized_period_message = _ref.localized_period_message;

    var ComponentIcon = component_icon;

    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            'div',
            { className: 'empty-trade-history' },
            _react2.default.createElement(ComponentIcon, { className: 'empty-trade-history__icon' }),
            _react2.default.createElement(
                'span',
                { className: 'empty-trade-history__text' },
                !has_selected_date ? localized_message : localized_period_message
            )
        )
    );
};

EmptyTradeHistoryMessage.propTypes = {
    component_icon: _propTypes2.default.func,
    has_selected_date: _propTypes2.default.bool,
    localized_message: _propTypes2.default.string,
    localized_period_message: _propTypes2.default.string
};

exports.default = EmptyTradeHistoryMessage;

/***/ }),

/***/ 856:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReportsMeta = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReportsMeta = function ReportsMeta(_ref) {
    var i18n_heading = _ref.i18n_heading,
        i18n_message = _ref.i18n_message;
    return _react2.default.createElement(
        'div',
        { className: 'reports__meta' },
        _react2.default.createElement(
            'div',
            { className: 'reports__meta-description' },
            _react2.default.createElement(
                'h1',
                { className: 'reports__meta-description--heading' },
                i18n_heading
            ),
            _react2.default.createElement(
                'p',
                { className: 'reports__meta-description--paragraph' },
                i18n_message
            )
        )
    );
};

exports.ReportsMeta = ReportsMeta;

/***/ }),

/***/ 857:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getOpenPositionsColumnsTemplate = exports.getProfitTableColumnsTemplate = exports.getStatementTableColumnsTemplate = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(5);

var _Label = __webpack_require__(889);

var _Label2 = _interopRequireDefault(_Label);

var _money = __webpack_require__(67);

var _money2 = _interopRequireDefault(_money);

var _ProgressSliderStream = __webpack_require__(891);

var _ProgressSliderStream2 = _interopRequireDefault(_ProgressSliderStream);

var _indicativeCell = __webpack_require__(854);

var _indicativeCell2 = _interopRequireDefault(_indicativeCell);

var _profitLoss = __webpack_require__(861);

var _marketSymbolIconRow = __webpack_require__(893);

var _marketSymbolIconRow2 = _interopRequireDefault(_marketSymbolIconRow);

var _profit_loss_cell = __webpack_require__(896);

var _profit_loss_cell2 = _interopRequireDefault(_profit_loss_cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getModeFromValue = function getModeFromValue(key) {
    var map = {
        deposit: 'warn',
        withdrawal: 'info',
        sell: 'danger',
        buy: 'success',
        default: 'default'
    };

    if (Object.keys(map).find(function (x) {
        return x === key;
    })) {
        return map[key];
    }

    return map.default;
};
/* eslint-disable react/display-name, react/prop-types */
var getStatementTableColumnsTemplate = exports.getStatementTableColumnsTemplate = function getStatementTableColumnsTemplate(currency) {
    return [{
        key: 'icon',
        title: '',
        col_index: 'action_type',
        renderCellContent: function renderCellContent(_ref) {
            var cell_value = _ref.cell_value,
                row_obj = _ref.row_obj;
            return _react2.default.createElement(_marketSymbolIconRow2.default, {
                action: cell_value,
                key: row_obj.transaction_id,
                payload: row_obj
            });
        }
    }, {
        title: (0, _localize.localize)('Ref. ID'),
        col_index: 'refid'
    }, {
        title: (0, _localize.localize)('Transaction time'),
        col_index: 'date'
    }, {
        key: 'mode',
        title: (0, _localize.localize)('Transaction'),
        col_index: 'action_type',
        renderCellContent: function renderCellContent(_ref2) {
            var cell_value = _ref2.cell_value,
                row_obj = _ref2.row_obj;
            return _react2.default.createElement(
                _Label2.default,
                { mode: getModeFromValue(cell_value) },
                row_obj.action
            );
        }
    }, {
        title: (0, _localize.localize)('Credit/Debit'),
        col_index: 'amount',
        renderCellContent: function renderCellContent(_ref3) {
            var cell_value = _ref3.cell_value;
            return _react2.default.createElement(
                'div',
                { className: 'amount--' + (0, _profitLoss.getProfitOrLoss)(cell_value) },
                _react2.default.createElement(_money2.default, { has_sign: true, amount: cell_value.replace(/[,]+/g, ''), currency: currency })
            );
        }
    }, {
        title: (0, _localize.localize)('Balance'),
        col_index: 'balance',
        renderCellContent: function renderCellContent(_ref4) {
            var cell_value = _ref4.cell_value;
            return _react2.default.createElement(_money2.default, { amount: cell_value.replace(/[,]+/g, ''), currency: currency });
        }
    }];
};
var getProfitTableColumnsTemplate = exports.getProfitTableColumnsTemplate = function getProfitTableColumnsTemplate(currency) {
    return [{
        key: 'icon',
        title: '',
        col_index: 'action_type',
        renderCellContent: function renderCellContent(_ref5) {
            var cell_value = _ref5.cell_value,
                row_obj = _ref5.row_obj,
                is_footer = _ref5.is_footer;

            if (is_footer) return (0, _localize.localize)('Total profit/loss');

            return _react2.default.createElement(_marketSymbolIconRow2.default, {
                action: cell_value,
                key: row_obj.transaction_id,
                payload: row_obj
            });
        }
    }, {
        title: (0, _localize.localize)('Ref. ID'),
        col_index: 'transaction_id'
    }, {
        title: (0, _localize.localize)('Buy time'),
        col_index: 'purchase_time'
    }, {
        title: (0, _localize.localize)('Buy price'),
        col_index: 'buy_price',
        renderCellContent: function renderCellContent(_ref6) {
            var cell_value = _ref6.cell_value,
                is_footer = _ref6.is_footer;

            if (is_footer) return '';

            return _react2.default.createElement(_money2.default, { amount: cell_value, currency: currency });
        }
    }, {
        title: (0, _localize.localize)('Sell time'),
        col_index: 'sell_time'
    }, {
        title: (0, _localize.localize)('Sell price'),
        col_index: 'sell_price',
        renderCellContent: function renderCellContent(_ref7) {
            var cell_value = _ref7.cell_value,
                is_footer = _ref7.is_footer;

            if (is_footer) return '';

            return _react2.default.createElement(_money2.default, { amount: cell_value, currency: currency });
        }
    }, {
        title: (0, _localize.localize)('Profit/Loss'),
        col_index: 'profit_loss',
        renderCellContent: function renderCellContent(_ref8) {
            var cell_value = _ref8.cell_value;
            return _react2.default.createElement(
                _profit_loss_cell2.default,
                { value: cell_value },
                _react2.default.createElement(_money2.default, { has_sign: true, amount: cell_value.replace(/[,]+/g, ''), currency: currency })
            );
        }
    }];
};
var getOpenPositionsColumnsTemplate = exports.getOpenPositionsColumnsTemplate = function getOpenPositionsColumnsTemplate(currency) {
    return [{
        title: '',
        col_index: 'type',
        renderCellContent: function renderCellContent(_ref9) {
            var cell_value = _ref9.cell_value,
                row_obj = _ref9.row_obj,
                is_footer = _ref9.is_footer;

            if (is_footer) return (0, _localize.localize)('Total');

            return _react2.default.createElement(_marketSymbolIconRow2.default, {
                action: cell_value,
                key: row_obj.id,
                payload: row_obj.contract_info
            });
        }
    }, {
        title: (0, _localize.localize)('Ref. ID'),
        col_index: 'reference'
    }, {
        title: (0, _localize.localize)('Buy price'),
        col_index: 'purchase',
        renderCellContent: function renderCellContent(_ref10) {
            var cell_value = _ref10.cell_value;
            return _react2.default.createElement(_money2.default, { amount: cell_value, currency: currency });
        }
    }, {
        title: (0, _localize.localize)('Potential payout'),
        col_index: 'payout',
        renderCellContent: function renderCellContent(_ref11) {
            var cell_value = _ref11.cell_value;
            return cell_value ? _react2.default.createElement(_money2.default, { amount: cell_value, currency: currency }) : _react2.default.createElement(
                'span',
                null,
                '-'
            );
        }
    }, {
        title: (0, _localize.localize)('Indicative price'),
        col_index: 'indicative',
        renderCellContent: function renderCellContent(_ref12) {
            var cell_value = _ref12.cell_value,
                row_obj = _ref12.row_obj;
            return _react2.default.createElement(_indicativeCell2.default, { amount: +cell_value, currency: currency, status: row_obj.status });
        }
    }, {
        title: (0, _localize.localize)('Remaining time'),
        col_index: 'id',
        renderCellContent: function renderCellContent(_ref13) {
            var cell_value = _ref13.cell_value;
            return _react2.default.createElement(_ProgressSliderStream2.default, { id: cell_value });
        }
    }];
};
/* eslint-enable react/display-name, react/prop-types */

/***/ }),

/***/ 858:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var getMarketInformation = exports.getMarketInformation = function getMarketInformation(payload) {
    var pattern = new RegExp('^([A-Z]+)_((OTC_[A-Z0-9]+)|R_[\\d]{2,3}|[A-Z]+)_'); // Used to get market name from shortcode
    var extracted = pattern.exec(payload.shortcode);
    if (extracted !== null) {
        return {
            category: extracted[1].toLowerCase(),
            underlying: extracted[2]
        };
    }
    return null;
};

/***/ }),

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _loading = __webpack_require__(296);

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaceholderComponent = function PlaceholderComponent(props) {
    var EmptyMessageComponent = props.empty_message_component;
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        props.is_empty && _react2.default.createElement(EmptyMessageComponent, {
            component_icon: props.component_icon,
            has_selected_date: props.has_selected_date,
            localized_message: props.localized_message
        }),
        props.is_loading && _react2.default.createElement(_loading2.default, null)
    );
};

PlaceholderComponent.propTypes = {
    component_icon: _propTypes2.default.func,
    empty_message_component: _propTypes2.default.func,
    has_selected_date: _propTypes2.default.bool,
    localized_message: _propTypes2.default.string
};

exports.default = PlaceholderComponent;

/***/ }),

/***/ 861:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getProfitOrLoss = exports.getProfitOrLoss = function getProfitOrLoss(value) {
  return +value.replace(/,/g, '') >= 0 ? 'profit' : 'loss';
};

/***/ }),

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _label = __webpack_require__(890);

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _label2.default;

/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var available_modes = ['default', 'success', 'warn', 'danger', 'info'];

var Label = function Label(_ref) {
    var mode = _ref.mode,
        children = _ref.children;

    var type = available_modes.some(function (m) {
        return m === mode;
    }) ? mode : 'default';

    return _react2.default.createElement(
        'span',
        { className: (0, _classnames2.default)('label', _defineProperty({}, 'label--' + type, type))
        },
        children
    );
};
Label.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
    mode: _propTypes2.default.oneOf(available_modes)
};
exports.default = Label;

/***/ }),

/***/ 891:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _progressSliderStream = __webpack_require__(892);

var _progressSliderStream2 = _interopRequireDefault(_progressSliderStream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _progressSliderStream2.default;

/***/ }),

/***/ 892:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _helpers = __webpack_require__(182);

var _positionsProgressSlider = __webpack_require__(304);

var _positionsProgressSlider2 = _interopRequireDefault(_positionsProgressSlider);

var _connect = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressSliderStream = function ProgressSliderStream(_ref) {
    var id = _ref.id,
        is_loading = _ref.is_loading,
        getPositionById = _ref.getPositionById,
        server_time = _ref.server_time;

    var position = getPositionById(id);
    if (!position) {
        return _react2.default.createElement('div', null);
    }

    var contract_info = position.contract_info;

    var percentage = (0, _helpers.getTimePercentage)(server_time, contract_info.purchase_time, contract_info.date_expiry);

    return _react2.default.createElement(_positionsProgressSlider2.default, {
        is_loading: is_loading,
        remaining_time: contract_info.date_expiry,
        percentage: percentage,
        has_result: false,
        current_tick: position.current_tick,
        ticks_count: contract_info.ticks_count
    });
};

ProgressSliderStream.propTypes = {
    getPositionById: _propTypes2.default.func,
    id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    is_loading: _propTypes2.default.bool,
    server_time: _propTypes2.default.object
};

exports.default = (0, _connect.connect)(function (_ref2) {
    var modules = _ref2.modules,
        common = _ref2.common;
    return {
        is_loading: modules.portfolio.is_loading,
        server_time: common.server_time,
        getPositionById: modules.portfolio.getPositionById
    };
})(ProgressSliderStream);

/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _underlyingIcon = __webpack_require__(297);

var _Common = __webpack_require__(11);

var _iconDeposit = __webpack_require__(894);

var _iconWithdrawal = __webpack_require__(895);

var _Types = __webpack_require__(130);

var _marketUnderyling = __webpack_require__(858);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MarketSymbolIconRow = function MarketSymbolIconRow(_ref) {
    var payload = _ref.payload,
        show_description = _ref.show_description;

    var should_show_category_icon = typeof payload.shortcode === 'string';
    var market_information = (0, _marketUnderyling.getMarketInformation)(payload);

    if (should_show_category_icon && market_information) {
        return _react2.default.createElement(
            'div',
            { className: 'market-symbol-icon' },
            _react2.default.createElement(
                'div',
                { className: 'market-symbol-icon-name' },
                _react2.default.createElement(_underlyingIcon.UnderlyingIcon, { market: market_information.underlying }),
                show_description && payload.display_name
            ),
            _react2.default.createElement(
                'div',
                { className: 'market-symbol-icon-category' },
                _react2.default.createElement(_Types.IconTradeType, { type: market_information.category }),
                show_description && market_information.category
            )
        );
    } else if (['deposit', 'withdrawal'].includes(payload.action_type)) {
        return _react2.default.createElement(
            'div',
            { className: 'market-symbol-icon' },
            payload.action_type === 'deposit' ? _react2.default.createElement(_Common.Icon, { icon: _iconDeposit.IconDeposit }) : _react2.default.createElement(_Common.Icon, { icon: _iconWithdrawal.IconWithdrawal })
        );
    }

    return _react2.default.createElement(
        'svg',
        { width: '32', height: '32', className: 'unknown-icon' },
        _react2.default.createElement('rect', { width: '32', height: '32' })
    );
};

MarketSymbolIconRow.propTypes = {
    action: _propTypes2.default.string,
    payload: _propTypes2.default.object,
    show_description: _propTypes2.default.bool
};

exports.default = MarketSymbolIconRow;

/***/ }),

/***/ 894:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IconDeposit = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconDeposit = function IconDeposit(_ref) {
    var className = _ref.className;
    return _react2.default.createElement(
        'svg',
        { className: className, width: '32', height: '32' },
        _react2.default.createElement('path', {
            d: 'M21.9615595 2.06086937l4.3389292.61984703c1.3668351.19526215 2.3165825 1.46159211 2.1213204 2.82842713a2.50000145 2.50000145 0 0 1-.0710639.33324943l-1.3699928 4.79497484c-.0758621.2655175-.352605.4192635-.6181225.3434014-.2655175-.0758622-.4192636-.3526051-.3434014-.6181226l1.3699928-4.79497477a1.50000687 1.50000687 0 0 0 .0426383-.19994966c.1171573-.82010101-.4526912-1.57989899-1.2727922-1.69705627L22 3.07651341V10.5c0 .2761424-.2238576.5-.5.5s-.5-.2238576-.5-.5V2.5091859a.49937872.49937872 0 0 1-.0000157-.01613236C20.9962426 1.66782199 20.3261104 1 19.5 1h-12C6.67157288 1 6 1.67157288 6 2.5v8c0 .2761424-.22385763.5-.5.5-.27614237 0-.5-.2238576-.5-.5v-8C5 1.11928813 6.11928813 0 7.5 0h12c1.2308916 0 2.2540152.88956026 2.4615595 2.06086937zM14 3.70710678V10.5c0 .2761424-.2238576.5-.5.5s-.5-.2238576-.5-.5V3.70710678l-2.1464466 2.14644661c-.1952622.19526215-.5118446.19526215-.7071068 0-.19526214-.19526215-.19526214-.51184463 0-.70710678l3-3c.1952622-.19526215.5118446-.19526215.7071068 0l3 3c.1952621.19526215.1952621.51184463 0 .70710678-.1952622.19526215-.5118446.19526215-.7071068 0L14 3.70710678zM30 12.5V18h.5c.8284271 0 1.5.6715729 1.5 1.5v5c0 .8284271-.6715729 1.5-1.5 1.5H30v3.5c0 1.3807119-1.1192881 2.5-2.5 2.5h-25C1.11928813 32 0 30.8807119 0 29.5V9c0-2.30676577 1.35906547-4 3.5-4 .27614237 0 .5.22385763.5.5 0 .27614237-.22385763.5-.5.5C1.96568485 6 1 7.20312867 1 9c0 1.6568542 1.34314575 3 3 3h25.5c.2761424 0 .5.2238576.5.5zm-1 .5H4c-1.19469253 0-2.26705555-.5237549-3-1.3541756V29.5c0 .8284271.67157288 1.5 1.5 1.5h25c.8284271 0 1.5-.6715729 1.5-1.5V26h-6c-2.209139 0-4-1.790861-4-4s1.790861-4 4-4h6v-5zm-6 12h7.5c.2761424 0 .5-.2238576.5-.5v-5c0-.2761424-.2238576-.5-.5-.5H23c-1.6568542 0-3 1.3431458-3 3s1.3431458 3 3 3zm0-4.5c.8284271 0 1.5.6715729 1.5 1.5s-.6715729 1.5-1.5 1.5-1.5-.6715729-1.5-1.5.6715729-1.5 1.5-1.5zm0 1c-.2761424 0-.5.2238576-.5.5s.2238576.5.5.5.5-.2238576.5-.5-.2238576-.5-.5-.5z',
            fill: '#2A3052',
            fillRule: 'evenodd',
            fillOpacity: '.8',
            className: 'color1-fill'
        })
    );
};

exports.IconDeposit = IconDeposit;

/***/ }),

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IconWithdrawal = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconWithdrawal = function IconWithdrawal(_ref) {
    var className = _ref.className;
    return _react2.default.createElement(
        'svg',
        { className: className, width: '32', height: '32' },
        _react2.default.createElement('path', {
            d: 'M0 23V2.5C0 1.11928813 1.11928813 0 2.5 0h25C28.8807119 0 30 1.11928813 30 2.5V6h.5c.8284271 0 1.5.67157288 1.5 1.5v5c0 .8284271-.6715729 1.5-1.5 1.5H30v5.5c0 .2761424-.2238576.5-.5.5H4c-1.65685425 0-3 1.3431458-3 3 0 1.7968713.96568485 3 2.5 3 .27614237 0 .5.2238576.5.5s-.22385763.5-.5.5C1.35906547 27 0 25.3067658 0 23zm1-2.6458244C1.73294445 19.5237549 2.80530747 19 4 19h25v-5h-6c-2.209139 0-4-1.790861-4-4s1.790861-4 4-4h6V2.5c0-.82842712-.6715729-1.5-1.5-1.5h-25C1.67157288 1 1 1.67157288 1 2.5v17.8541756zM23 7c-1.6568542 0-3 1.34314575-3 3 0 1.6568542 1.3431458 3 3 3h7.5c.2761424 0 .5-.2238576.5-.5v-5c0-.27614237-.2238576-.5-.5-.5H23zm0 4.5c-.8284271 0-1.5-.6715729-1.5-1.5 0-.82842712.6715729-1.5 1.5-1.5s1.5.67157288 1.5 1.5c0 .8284271-.6715729 1.5-1.5 1.5zm0-1c.2761424 0 .5-.2238576.5-.5 0-.27614237-.2238576-.5-.5-.5s-.5.22385763-.5.5c0 .2761424.2238576.5.5.5zm-2.0000155 19.0068996A.49938076.49938076 0 0 1 21 29.4907533V21.5c0-.2761424.2238576-.5.5-.5s.5.2238576.5.5v7.4234258l4.1590674-.5941525c.820101-.1171573 1.3899495-.8769553 1.2727922-1.6970563a1.50001114 1.50001114 0 0 0-.0426383-.1999497l-1.3699928-4.7949748c-.0758622-.2655175.0778839-.5422604.3434014-.6181225.2655175-.0758621.5422604.0778839.6181225.3434014l1.3699928 4.7949748a2.50000236 2.50000236 0 0 1 .0710639.3332494c.1952621 1.3668351-.7544853 2.633165-2.1213204 2.8284272l-4.3389181.6198454C21.7540516 31.1104081 20.7309134 32 19.5 32h-12C6.11928813 32 5 30.8807119 5 29.5v-8c0-.2761424.22385763-.5.5-.5.27614237 0 .5.2238576.5.5v8c0 .8284271.67157288 1.5 1.5 1.5h12c.826126 0 1.496268-.6678473 1.4999845-1.4931004zM14 28.2928932l2.1464466-2.1464466c.1952622-.1952621.5118446-.1952621.7071068 0 .1952621.1952622.1952621.5118446 0 .7071068l-3 3c-.1952622.1952621-.5118446.1952621-.7071068 0l-3-3c-.19526214-.1952622-.19526214-.5118446 0-.7071068.1952622-.1952621.5118446-.1952621.7071068 0L13 28.2928932V21.5c0-.2761424.2238576-.5.5-.5s.5.2238576.5.5v6.7928932z',
            fill: '#2A3052',
            fillRule: 'evenodd',
            fillOpacity: '.8',
            className: 'color1-fill'
        })
    );
};

exports.IconWithdrawal = IconWithdrawal;

/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _profitLoss = __webpack_require__(861);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProfitLossCell = function ProfitLossCell(_ref) {
    var value = _ref.value,
        children = _ref.children;

    var status = (0, _profitLoss.getProfitOrLoss)(value);

    return _react2.default.createElement(
        'span',
        { className: 'amount--' + status },
        children
    );
};

ProfitLossCell.propTypes = {
    value: _propTypes2.default.string
};

exports.default = ProfitLossCell;

/***/ })

}]);