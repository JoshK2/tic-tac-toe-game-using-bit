/**
 * @description
 * check winner horizontal, vertical and diagonal
 * @param {Array.<string[]>} matrix 2d array with X and O 
 * @param {number} rowsNum number of rows
 * @param {number} colsNum number of columns
 * @param {number} numToWin the number of matching to win
 * @param {number} lastRow the row number of the square player click
 * @param {number} lastCol the column number of the square player click
 * @returns {string} return the winner, X or O or '' if no one win. 
 * @example
 * import winnerCalc from '@bit/joshk.tic-tac-toe-game.utils.winner-calc';
 *
 * const matrix = [
 *   ['O', 'O', 'X'],
 *   ['O', 'X', ''],
 *   ['X', '', '']
 * ];
 * const result = winnerCalc(matrix, 3, 3, 3, 0, 2);
 *
 * export default result
 */

import haveEmptyCell from '../HaveEmptyCell'

function winnerCalc(matrix: Array<Array<string>>, rowsNum: number, colsNum: number, numToWin: number, lastRow: number, lastCol: number): string {
    let winner: string = '';
    let match: number = 0;
    const lastValue: string = matrix[lastRow][lastCol];

    //check Horizontal
    for (let c = 0; c < colsNum; c++) {
        let currentValue = matrix[lastRow][c];
        if (currentValue === lastValue)
            match++;
        else match = 0;
        if (match === numToWin) {
            winner = lastValue;
            break;
        }
    }
    if (winner !== '')
        return winner;

    match = 0;
    //check Vertical
    for (let r = 0; r < rowsNum; r++) {
        let currentValue = matrix[r][lastCol];
        if (currentValue === lastValue)
            match++;
        else match = 0;
        if (match === numToWin) {
            winner = lastValue;
            break;
        }
    }
    if (winner !== '')
        return winner;

    //check diagonal top-left to bottom-right - include middle
    match = 0;
    for (let r = 0; r <= rowsNum - numToWin; r++)
    {
        let rowPosition = r;
        for (let column = 0; column < colsNum && rowPosition < rowsNum; column++)
        {
            const currentValue = matrix[rowPosition][column];
            if (currentValue === lastValue)
                match++;
            else match = 0;
            if (match === numToWin)
            {
                winner = lastValue;
                break;
            }
            rowPosition++;
        }
        if (winner !== '') break;
    }
    if (winner !== '')
        return winner;

    //check diagonal top-left to bottom-right - after middle
    match = 0;
    for (let c = 1; c <= colsNum - numToWin; c++)
    {
        let columnPosition = c;
        for (let row = 0; row < rowsNum && columnPosition < colsNum; row++)
        {
            let currentValue = matrix[row][columnPosition];
            if (currentValue === lastValue)
                match++;
            else match = 0;
            if (match === numToWin)
            {
                winner = lastValue;
                break;
            }
            columnPosition++;
        }
        if (winner !== '') break;
    }
    if (winner !== '')
        return winner;

    //check diagonal bottom-left to top-right - include middle
    match = 0;
    for (let r = rowsNum - 1; r >= rowsNum - numToWin - 1; r--)
    {
        let rowPosition = r;
        for (let column = 0; column < colsNum && rowPosition < rowsNum && rowPosition >= 0; column++)
        {
            let currentValue = matrix[rowPosition][column];
            if (currentValue === lastValue)
                match++;
            else match = 0;
            if (match === numToWin)
            {
                winner = lastValue;
                break;
            }
            rowPosition--;
        }
        if (winner !== '') break;
    }
    if (winner !== '')
        return winner;

    //check diagonal bottom-left to top-right - after middle
    match = 0;
    for (let c = 1; c < colsNum; c++)
    {
        let columnPosition = c;
        for (let row = rowsNum - 1; row < rowsNum && columnPosition < colsNum && columnPosition >= 1; row--)
        {
            let currentValue = matrix[row][columnPosition];
            if (currentValue === lastValue)
                match++;
            else match = 0;
            if (match === numToWin)
            {
                winner = lastValue;
                break;
            }
            columnPosition++;
        }
        if (winner !== '') break;
    }
    if (winner !== '')
        return winner;

    if(haveEmptyCell(matrix, rowsNum, colsNum) === false) {
        winner = '-1';
    }

    return winner;
}

export default winnerCalc