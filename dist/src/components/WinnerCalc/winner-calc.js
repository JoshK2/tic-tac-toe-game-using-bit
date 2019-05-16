"use strict";
/**
 * @description
 * check winner horizontal and vertical
 * @param {string[]} matrix 2d array with X and O
 * @param {number} rowsNum number of rows
 * @param {number} colsNum number of columns
 * @param {number} numToWin the number of matching to win
 * @param {number} lastRow the row number of the square player click
 * @param {number} lastCol the column number of the square player click
 */
Object.defineProperty(exports, "__esModule", { value: true });
function winnerCalc(matrix, rowsNum, colsNum, numToWin, lastRow, lastCol) {
    var winner = '';
    var match = 0;
    var lastValue = matrix[lastRow][lastCol];
    //check Horizontal
    for (var c = 0; c < colsNum; c++) {
        var currentValue = matrix[lastRow][c];
        if (currentValue === lastValue)
            match++;
        else
            match = 0;
        if (match === numToWin) {
            winner = lastValue;
            break;
        }
    }
    if (winner !== '') {
        return winner;
    }
    match = 0;
    //check Vertical
    for (var r = 0; r < rowsNum; r++) {
        var currentValue = matrix[r][lastCol];
        if (currentValue === lastValue)
            match++;
        else
            match = 0;
        if (match === numToWin) {
            winner = lastValue;
            break;
        }
    }
    if (winner !== '') {
        return winner;
    }
    return winner;
}
exports.default = winnerCalc;
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";AAAA;;;;;;;;;GASG;;AAEH,SAAS,UAAU,CAAC,MAAkB,EAAE,OAAe,EAAE,OAAe,EAAE,QAAgB,EAAE,OAAe,EAAE,OAAe;IACxH,IAAI,MAAM,GAAW,EAAE,CAAC;IACxB,IAAI,KAAK,GAAW,CAAC,CAAC;IACtB,IAAM,SAAS,GAAW,MAAM,CAAC,OAAO,CAAC,CAAC,OAAO,CAAC,CAAC;IAEnD,kBAAkB;IAClB,KAAK,IAAI,CAAC,GAAG,CAAC,EAAE,CAAC,GAAG,OAAO,EAAE,CAAC,EAAE,EAChC;QACI,IAAI,YAAY,GAAG,MAAM,CAAC,OAAO,CAAC,CAAC,CAAC,CAAC,CAAC;QACtC,IAAI,YAAY,KAAK,SAAS;YAC1B,KAAK,EAAE,CAAC;;YACP,KAAK,GAAG,CAAC,CAAC;QACf,IAAG,KAAK,KAAK,QAAQ,EACrB;YACI,MAAM,GAAG,SAAS,CAAC;YACnB,MAAM;SACT;KACJ;IACD,IAAI,MAAM,KAAK,EAAE,EACjB;QACI,OAAO,MAAM,CAAC;KACjB;IAED,KAAK,GAAG,CAAC,CAAC;IACV,gBAAgB;IAChB,KAAK,IAAI,CAAC,GAAG,CAAC,EAAE,CAAC,GAAG,OAAO,EAAE,CAAC,EAAE,EAChC;QACI,IAAI,YAAY,GAAG,MAAM,CAAC,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC;QACtC,IAAI,YAAY,KAAK,SAAS;YAC1B,KAAK,EAAE,CAAC;;YACP,KAAK,GAAG,CAAC,CAAC;QACf,IAAI,KAAK,KAAK,QAAQ,EACtB;YACI,MAAM,GAAG,SAAS,CAAC;YACnB,MAAM;SACT;KACJ;IACD,IAAI,MAAM,KAAK,EAAE,EACjB;QACI,OAAO,MAAM,CAAC;KACjB;IAED,OAAO,MAAM,CAAC;AAClB,CAAC;AAED,kBAAe,UAAU,CAAA"}