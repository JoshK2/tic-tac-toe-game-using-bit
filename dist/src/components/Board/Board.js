"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Square_1 = __importDefault(require("../Square"));
var WinnerCalc_1 = __importDefault(require("../WinnerCalc"));
require("./style.scss");
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            matrix: new Array(_this.props.rows).fill(null).map(function (item) { return (new Array(_this.props.cols).fill(null)); }),
            turn: 'X',
            win: false
        };
        _this.createBoard = function () {
            var board = [];
            var matrix = _this.state.matrix;
            for (var r = 0; r < _this.props.rows; r++) {
                var row = [];
                for (var c = 0; c < _this.props.cols; c++) {
                    row.push(react_1.default.createElement(Square_1.default, { row: r, col: c, key: r + c, setValue: _this.handleSetValue, value: matrix[r][c], enable: _this.state.win }));
                }
                board.push(react_1.default.createElement("div", { className: "row", style: { width: row.length * 58 }, key: "row" + r }, row));
            }
            return board;
        };
        _this.handleSetValue = function (lastRow, lastCol) {
            var matrix = _this.state.matrix;
            var turn = _this.state.turn;
            matrix[lastRow][lastCol] = turn;
            var _a = _this.props, rows = _a.rows, cols = _a.cols, numToWin = _a.numToWin;
            var winner = WinnerCalc_1.default(matrix, rows, cols, numToWin, lastRow, lastCol);
            console.log("the winner is: " + winner);
            _this.setState({ matrix: matrix, turn: turn === 'X' ? 'O' : 'X', win: winner !== '' });
        };
        return _this;
    }
    Board.prototype.render = function () {
        console.log(this.state.matrix);
        var _a = this.state, turn = _a.turn, win = _a.win;
        var status = win ? "The winner is " + (turn === 'X' ? 'O' : 'X') : "Next player: " + turn;
        return (react_1.default.createElement("div", { className: "board" },
            react_1.default.createElement("div", { className: "status" }, status),
            this.createBoard()));
    };
    return Board;
}(react_1.Component));
exports.default = Board;
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":"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"}