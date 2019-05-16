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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./style.scss");
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            clicked: false
        };
        _this.handleClick = function () {
            if (!_this.state.clicked) {
                _this.setState({ clicked: true });
                _this.props.setValue(_this.props.row, _this.props.col);
            }
        };
        return _this;
    }
    Square.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.enable !== this.props.enable) {
            this.setState({ clicked: nextProps.enable });
        }
    };
    Square.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "square " + this.props.value, onClick: this.handleClick },
            react_1.default.createElement("span", null, this.props.value)));
    };
    return Square;
}(react_1.Component));
exports.default = Square;
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;AAAA,6CAAwC;AACxC,wBAAqB;AAKrB;IAAqB,0BAAuB;IAA5C;QAAA,qEAuBC;QAtBG,WAAK,GAAG;YACJ,OAAO,EAAE,KAAK;SACjB,CAAA;QAQD,iBAAW,GAAG;YACV,IAAI,CAAC,KAAI,CAAC,KAAK,CAAC,OAAO,EAAE;gBACrB,KAAI,CAAC,QAAQ,CAAC,EAAE,OAAO,EAAE,IAAI,EAAE,CAAC,CAAC;gBACjC,KAAI,CAAC,KAAK,CAAC,QAAQ,CAAC,KAAI,CAAC,KAAK,CAAC,GAAG,EAAE,KAAI,CAAC,KAAK,CAAC,GAAG,CAAC,CAAC;aACvD;QACL,CAAC,CAAA;;IAOL,CAAC;IAlBG,0CAAyB,GAAzB,UAA0B,SAAc;QACpC,IAAI,SAAS,CAAC,MAAM,KAAK,IAAI,CAAC,KAAK,CAAC,MAAM,EAAE;YACxC,IAAI,CAAC,QAAQ,CAAC,EAAE,OAAO,EAAE,SAAS,CAAC,MAAM,EAAE,CAAC,CAAC;SAChD;IACL,CAAC;IASD,uBAAM,GAAN;QACI,OAAO,CACH,uCAAK,SAAS,EAAE,YAAU,IAAI,CAAC,KAAK,CAAC,KAAO,EAAE,OAAO,EAAE,IAAI,CAAC,WAAW;YAAE,4CAAO,IAAI,CAAC,KAAK,CAAC,KAAK,CAAQ,CAAM,CACjH,CAAA;IACL,CAAC;IACL,aAAC;AAAD,CAAC,AAvBD,CAAqB,iBAAS,GAuB7B;AAED,kBAAe,MAAM,CAAA"}