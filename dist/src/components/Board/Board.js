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
var PrimereactStyle_1 = __importDefault(require("../Game/PrimereactStyle"));
var primefaces_primereact_button_1 = require("@bit/primefaces.primereact.button");
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            matrix: new Array(_this.props.rows).fill(null).map(function (item) { return (new Array(_this.props.cols).fill(null)); }),
            turn: 'X',
            winner: ''
        };
        _this.createBoard = function () {
            var board = [];
            var matrix = _this.state.matrix;
            for (var r = 0; r < _this.props.rows; r++) {
                var row = [];
                for (var c = 0; c < _this.props.cols; c++) {
                    row.push(react_1.default.createElement(Square_1.default, { row: r, col: c, key: r + c, setValue: _this.handleSetValue, value: matrix[r][c], enable: _this.state.winner !== '' }));
                }
                board.push(react_1.default.createElement("div", { className: "row", key: "row" + r }, row));
            }
            return react_1.default.createElement("div", { className: "rows-holder", style: { width: _this.props.cols * 56 } }, board);
        };
        _this.handleSetValue = function (lastRow, lastCol) {
            var _a = _this.state, matrix = _a.matrix, turn = _a.turn;
            matrix[lastRow][lastCol] = turn;
            var _b = _this.props, rows = _b.rows, cols = _b.cols, numToWin = _b.numToWin;
            var winner = WinnerCalc_1.default(matrix, rows, cols, numToWin, lastRow, lastCol);
            console.log("the winner is: " + winner);
            _this.setState({ matrix: matrix, turn: turn === 'X' ? 'O' : 'X', winner: winner });
        };
        _this.restartGame = function () {
            _this.setState({
                matrix: new Array(_this.props.rows).fill(null).map(function (item) { return (new Array(_this.props.cols).fill(null)); }),
                turn: _this.state.turn === 'X' ? 'O' : 'X',
                winner: ''
            });
        };
        return _this;
    }
    Board.prototype.render = function () {
        console.log(this.state.matrix);
        var _a = this.state, turn = _a.turn, winner = _a.winner;
        var status = "Next player: " + turn;
        if (winner !== '') {
            if (winner === '-1') {
                status = "Draw!";
            }
            else {
                status = "The winner is " + (turn === 'X' ? 'O' : 'X');
            }
        }
        return (react_1.default.createElement("div", { className: "board" },
            react_1.default.createElement("div", { className: "status" }, status),
            this.createBoard(),
            react_1.default.createElement(PrimereactStyle_1.default, null),
            react_1.default.createElement(primefaces_primereact_button_1.Button, { label: 'Restart', className: 'p-button-raised restart', onClick: this.restartGame })));
    };
    return Board;
}(react_1.Component));
exports.default = Board;
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":"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"}