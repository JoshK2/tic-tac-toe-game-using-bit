"use strict";
/**
 * @description
 * check winner horizontal and vertical
 * @param {Array.<string[]>} matrix 2d array with X and O
 * @param {number} rowsNum number of rows
 * @param {number} colsNum number of columns
 * @param {number} numToWin the number of matching to win
 * @param {number} lastRow the row number of the square player click
 * @param {number} lastCol the column number of the square player click
 * @returns {string} return the winner, X or O or '' if no one win.
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
    if (winner !== '')
        return winner;
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
    if (winner !== '')
        return winner;
    //check diagonal top-left to bottom-right - include middle
    match = 0;
    for (var r = 0; r <= rowsNum - numToWin; r++) {
        var rowPosition = r;
        for (var column = 0; column < colsNum && rowPosition < rowsNum; column++) {
            var currentValue = matrix[rowPosition][column];
            if (currentValue === lastValue)
                match++;
            else
                match = 0;
            if (match === numToWin) {
                winner = lastValue;
                break;
            }
            rowPosition++;
        }
        if (winner !== '')
            break;
    }
    if (winner !== '')
        return winner;
    //check diagonal top-left to bottom-right - after middle
    match = 0;
    for (var c = 1; c <= colsNum - numToWin; c++) {
        var columnPosition = c;
        for (var row = 0; row < rowsNum && columnPosition < colsNum; row++) {
            var currentValue = matrix[row][columnPosition];
            if (currentValue === lastValue)
                match++;
            else
                match = 0;
            if (match === numToWin) {
                winner = lastValue;
                break;
            }
            columnPosition++;
        }
        if (winner !== '')
            break;
    }
    if (winner !== '')
        return winner;
    //check diagonal bottom-left to top-right - include middle
    match = 0;
    for (var r = rowsNum - 1; r >= rowsNum - numToWin; r--) {
        var rowPosition = r;
        for (var column = 0; column < colsNum && rowPosition < rowsNum && rowPosition >= 0; column++) {
            var currentValue = matrix[rowPosition][column];
            if (currentValue === lastValue)
                match++;
            else
                match = 0;
            if (match === numToWin) {
                winner = lastValue;
                break;
            }
            rowPosition--;
        }
        if (winner !== '')
            break;
    }
    if (winner !== '')
        return winner;
    //check diagonal bottom-left to top-right - after middle
    match = 0;
    for (var c = 1; c < colsNum; c++) {
        var columnPosition = c;
        for (var row = rowsNum - 1; row < rowsNum && columnPosition < colsNum && columnPosition >= 1; row--) {
            var currentValue = matrix[row][columnPosition];
            if (currentValue === lastValue)
                match++;
            else
                match = 0;
            if (match === numToWin) {
                winner = lastValue;
                break;
            }
            columnPosition++;
        }
        if (winner !== '')
            break;
    }
    if (winner !== '')
        return winner;
    if (emptyCell(matrix, rowsNum, colsNum) === false) {
        winner = '-1';
    }
    return winner;
}
function emptyCell(matrix, rowsNum, colsNum) {
    var empty = false;
    for (var x = 0; x < rowsNum; x++) {
        for (var y = 0; y < colsNum; y++) {
            var element = matrix[x][y];
            if (element !== null) {
                empty = true;
                break;
            }
        }
        if (empty)
            break;
    }
    return empty;
}
exports.default = winnerCalc;
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":"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"}