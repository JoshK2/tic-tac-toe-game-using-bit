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
var Style = /** @class */ (function (_super) {
    __extends(Style, _super);
    function Style() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Style.prototype.render = function () {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("link", { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/primereact@3.1.0/resources/themes/nova-light/theme.css' }),
            react_1.default.createElement("link", { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/primereact@3.1.0/resources/primereact.min.css' }),
            react_1.default.createElement("link", { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/primeicons@1.0.0/primeicons.css' })));
    };
    return Style;
}(react_1.Component));
exports.default = Style;
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;AAAA,6CAAyC;AAEzC;IAAmC,yBAAS;IAA5C;;IAUA,CAAC;IATG,sBAAM,GAAN;QACI,OAAO,CACH;YACI,wCAAM,GAAG,EAAC,YAAY,EAAC,IAAI,EAAC,UAAU,EAAC,IAAI,EAAC,qFAAqF,GAAG;YACpI,wCAAM,GAAG,EAAC,YAAY,EAAC,IAAI,EAAC,UAAU,EAAC,IAAI,EAAC,4EAA4E,GAAE;YAC1H,wCAAM,GAAG,EAAC,YAAY,EAAC,IAAI,EAAC,UAAU,EAAC,IAAI,EAAC,8DAA8D,GAAE,CAC1G,CACT,CAAA;IACL,CAAC;IACL,YAAC;AAAD,CAAC,AAVD,CAAmC,iBAAS,GAU3C"}