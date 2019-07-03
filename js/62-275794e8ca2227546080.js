(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ 817:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Templates are from Binary 1.0, it should be checked if they need change or not and add all of trade types

var TradeCategories = function TradeCategories(_ref) {
    var category = _ref.category;

    var TradeTypeTemplate = void 0;
    if (category) {
        switch (category) {
            case 'rise_fall':
                TradeTypeTemplate = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        (0, _localize.localize)('If you select "Rise", you win the payout if the exit spot is strictly higher than the entry spot.')
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        (0, _localize.localize)('If you select "Fall", you win the payout if the exit spot is strictly lower than the entry spot.')
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        (0, _localize.localize)('If you select "Allow equals", you win the payout if exit spot is higher than or equal to entry spot for "Rise". Similarly, you win the payout if exit spot is lower than or equal to entry spot for "Fall".')
                    )
                );
                break;
            case 'rise_fall_equal':
                TradeTypeTemplate = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        (0, _localize.localize)('If you select "Rise", you win the payout if the exit spot is strictly higher than the entry spot.')
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        (0, _localize.localize)('If you select "Fall", you win the payout if the exit spot is strictly lower than the entry spot.')
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        (0, _localize.localize)('If you select "Allow equals", you win the payout if exit spot is higher than or equal to entry spot for "Rise". Similarly, you win the payout if exit spot is lower than or equal to entry spot for "Fall".')
                    )
                );
                break;
            case 'high_low':
                TradeTypeTemplate = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        (0, _localize.localize)('If you select "Higher", you win the payout if the exit spot is strictly higher than the barrier.')
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        (0, _localize.localize)('If you select "Lower", you win the payout if the exit spot is strictly lower than the barrier.')
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        (0, _localize.localize)('If the exit spot is equal to the barrier, you don\'t win the payout.')
                    )
                );
                break;
            case 'end':
                TradeTypeTemplate = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        (0, _localize.localize)('If you select "Ends Between", you win the payout if the exit spot is strictly higher than the Low barrier AND strictly lower than the High barrier.')
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        (0, _localize.localize)('If you select "Ends Outside", you win the payout if the exit spot is EITHER strictly higher than the High barrier, OR strictly lower than the Low barrier.')
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        (0, _localize.localize)('If the exit spot is equal to either the Low barrier or the High barrier, you don\'t win the payout.')
                    )
                );
                break;
            case 'stay':
                TradeTypeTemplate = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        (0, _localize.localize)('If you select "Stays Between", you win the payout if the market stays between (does not touch) either the High barrier or the Low barrier at any time during the contract period')
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        (0, _localize.localize)('If you select "Goes Outside", you win the payout if the market touches either the High barrier or the Low barrier at any time during the contract period.')
                    )
                );
                break;
            case 'match_diff':
                TradeTypeTemplate = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        (0, _localize.localize)('If you select "Matches", you will win the payout if the last digit of the last tick is the same as your prediction.')
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        (0, _localize.localize)('If you select "Differs", you will win the payout if the last digit of the last tick is not the same as your prediction.')
                    )
                );
                break;
            case 'even_odd':
                TradeTypeTemplate = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        (0, _localize.localize)('If you select "Even", you will win the payout if the last digit of the last tick is an even number (i.e., 2, 4, 6, 8, or 0).')
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        (0, _localize.localize)('If you select "Odd", you will win the payout if the last digit of the last tick is an odd number (i.e., 1, 3, 5, 7, or 9).')
                    )
                );
                break;
            case 'over_under':
                TradeTypeTemplate = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        (0, _localize.localize)('If you select "Over", you will win the payout if the last digit of the last tick is greater than your prediction.')
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        (0, _localize.localize)('If you select "Under", you will win the payout if the last digit of the last tick is less than your prediction.')
                    )
                );
                break;
            case 'touch':
                TradeTypeTemplate = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        (0, _localize.localize)('If you select "Touch", you win the payout if the market touches the barrier at any time during the contract period.')
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        (0, _localize.localize)('If you select "No Touch", you win the payout if the market never touches the barrier at any time during the contract period.')
                    )
                );
                break;
            case 'asian':
                TradeTypeTemplate = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        (0, _localize.localize)('Asian options settle by comparing the last tick with the average spot over the period.')
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        (0, _localize.localize)('If you select "Asian Rise", you will win the payout if the last tick is higher than the average of the ticks.')
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        (0, _localize.localize)('If you select "Asian Fall", you will win the payout if the last tick is lower than the average of the ticks.')
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        (0, _localize.localize)('If the last tick is equal to the average of the ticks, you don\'t win the payout.')
                    )
                );
                break;
            default:
                TradeTypeTemplate = _react2.default.createElement(
                    'p',
                    null,
                    (0, _localize.localize)('Description not found.')
                );
                break;
        }
    }
    return _react2.default.createElement(
        'div',
        null,
        TradeTypeTemplate
    );
};

TradeCategories.propTypes = {
    category: _propTypes2.default.string
};

exports.default = TradeCategories;

/***/ })

}]);