
function winnerCalc(matrix: string[][], rowsNum: number, colsNum: number, numToWin: number, lastRow: number, lastCol: number): string {
    let winner: string = '';
    let match: number = 0;
    const lastValue: string = matrix[lastRow][lastCol];

    //check Horizontal
    for (let c = 0; c < colsNum; c++)
    {
        let currentValue = matrix[lastRow][c];
        if (currentValue === lastValue)
            match++;
        else match = 0;
        if(match === numToWin)
        {
            winner = lastValue;
            break;
        }
    }
    if (winner !== '')
    {
        return winner;
    }

    match = 0;
    //check Vertical
    for (let r = 0; r < rowsNum; r++)
    {
        let currentValue = matrix[r][lastCol];
        if (currentValue === lastValue)
            match++;
        else match = 0;
        if (match === numToWin)
        {
            winner = lastValue;
            break;
        }
    }
    if (winner !== '')
    {
        return winner;
    }

    return winner;
}

export default winnerCalc