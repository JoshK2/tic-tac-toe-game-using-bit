/**
 * @description
 * check if 2d array have an empty cell
 * @param {{Array.<string[]>}} matrix 
 * @param {number} rowsNum number of rows
 * @param {number} colsNum number of columns
 * @returns {boolean} return true if empty cell was found, and false if not.
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