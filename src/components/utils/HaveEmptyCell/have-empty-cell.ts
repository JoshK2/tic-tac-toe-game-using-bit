/**
 * @description
 * check if 2d array have an empty cell
 * @param {{Array.<string[]>}} matrix 2d array
 * @param {number} rowsNum number of rows
 * @param {number} colsNum number of columns
 * @returns {boolean} return true if empty cell was found, and false if not.
 * @example
 * import haveEmptyCell from '@bit/joshk.tic-tac-toe-game.utils.have-empty-cell';
 *
 * const matrix = [
 *          ['X', 'O', 'X'],
 *          ['O', 'X', 'O'],
 *          ['O', 'X', 'O']
 *      ];
 * const result = haveEmptyCell(matrix, 3, 3);
 *
 * export default result
 * @example
 * import haveEmptyCell from '@bit/joshk.tic-tac-toe-game.utils.have-empty-cell';
 *
 * const matrix = [
 *          ['X', 'O', 'X'],
 *          ['O', '', 'O'],
 *          ['O', 'X', 'O']
 *      ];
 * const result = haveEmptyCell(matrix, 3, 3);
 *
 * export default result
 * @example
 * import haveEmptyCell from '@bit/joshk.tic-tac-toe-game.utils.have-empty-cell';
 *
 * const matrix = [
 *          ['X', 'O', 'X'],
 *          ['O', , 'O'],
 *          ['O', 'X', 'O']
 *      ];
 * const result = haveEmptyCell(matrix, 3, 3);
 *
 * export default result
 * @example
 * import haveEmptyCell from '@bit/joshk.tic-tac-toe-game.utils.have-empty-cell';
 *
 * const matrix = [
 *          ['X', 'O', 'X'],
 *          ['O', null, 'O'],
 *          ['O', 'X', 'O']
 *      ];
 * const result = haveEmptyCell(matrix, 3, 3);
 *
 * export default result
 */

function haveEmptyCell(matrix: Array<Array<string>>, rowsNum: number, colsNum: number): boolean {
    let empty: boolean = false;
    for (let x = 0; x < rowsNum; x++) {
        for (let y = 0; y < colsNum; y++) {
            const element: any = matrix[x][y];
            if (!element) {
                empty = true;
                break;
            }
        }
        if (empty)
            break;
    }
    return empty;
}

export default haveEmptyCell