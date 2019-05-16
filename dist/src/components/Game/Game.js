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
var Board_1 = __importDefault(require("../Board"));
require("./style.scss");
var PrimereactStyle_1 = __importDefault(require("./PrimereactStyle"));
var primefaces_primereact_inputtext_1 = require("@bit/primefaces.primereact.inputtext");
var primefaces_primereact_button_1 = require("@bit/primefaces.primereact.button");
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            rows: 0,
            columns: 0,
            minToWin: 0,
            goodValues: false
        };
        _this.PlayBtnClick = function () {
            var _a = _this.state, rows = _a.rows, columns = _a.columns, minToWin = _a.minToWin;
            var max = rows > columns ? rows : columns;
            if (rows > 0 && columns > 0 && minToWin > 0 && minToWin <= max)
                _this.setState({ goodValues: true });
        };
        _this.SetValue = function (key, value) {
            var _a;
            _this.setState((_a = {}, _a[key] = value && parseInt(value[0]) !== 0 ? parseInt(value) : '', _a));
        };
        return _this;
    }
    Game.prototype.StartGame = function () {
        return react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Board_1.default, { rows: this.state.rows, cols: this.state.columns, numToWin: this.state.minToWin }),
            react_1.default.createElement("div", { style: { clear: 'both' } }));
    };
    Game.prototype.ConfigGame = function () {
        var _this = this;
        return (react_1.default.createElement("div", { className: "config" },
            react_1.default.createElement(PrimereactStyle_1.default, null),
            react_1.default.createElement("h3", null, "Set rows and columns number to start playing"),
            react_1.default.createElement("div", { className: "input-value" },
                react_1.default.createElement("span", { className: 'p-float-label' },
                    react_1.default.createElement(primefaces_primereact_inputtext_1.InputText, { id: 'float-input-rows', type: 'number', min: 0, size: 30, value: this.state.rows, onChange: function (e) { return _this.SetValue('rows', e.target.value); } }),
                    react_1.default.createElement("label", { htmlFor: 'float-input-rows' }, "Rows")),
                react_1.default.createElement("span", { className: 'p-float-label' },
                    react_1.default.createElement(primefaces_primereact_inputtext_1.InputText, { id: 'float-input-columns', type: 'number', min: 0, size: 30, value: this.state.columns, onChange: function (e) { return _this.SetValue('columns', e.target.value); } }),
                    react_1.default.createElement("label", { htmlFor: 'float-input-columns' }, "Columns")),
                react_1.default.createElement("span", { className: 'p-float-label' },
                    react_1.default.createElement(primefaces_primereact_inputtext_1.InputText, { id: 'float-input-mintowin', type: 'number', min: 0, size: 30, value: this.state.minToWin, onChange: function (e) { return _this.SetValue('minToWin', e.target.value); } }),
                    react_1.default.createElement("label", { htmlFor: 'float-input-mintowin' }, "Min to win")),
                react_1.default.createElement(primefaces_primereact_button_1.Button, { label: 'Play', className: 'p-button-raised', onClick: this.PlayBtnClick }),
                react_1.default.createElement("div", { style: { clear: 'both' } })),
            react_1.default.createElement("div", { style: { clear: 'both' } })));
    };
    Game.prototype.render = function () {
        if (!this.state.goodValues) {
            return this.ConfigGame();
        }
        else {
            return this.StartGame();
        }
    };
    return Game;
}(react_1.Component));
exports.default = Game;
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":"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"}