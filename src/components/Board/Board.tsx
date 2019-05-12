import React, { Component } from 'react'
import Square from '../Square'
import winnerCalc from '../WinnerCalc'
import './style.scss'

type State = { matrix: string[][], turn: string, status: string }
type Props = { rows: number, columns: number }

class Board extends Component<Props, State> {
    state = {
        matrix: new Array(this.props.rows).fill(null).map(item => (new Array(this.props.columns).fill(null))),
        turn: 'X',
        status: ''
    }

    createBoard = (): Array<any> => {
        let board = [];
        let matrix = this.state.matrix;
        for (let r = 0; r < this.props.rows; r++) {
            let row = [];
            for (let c = 0; c < this.props.columns; c++) {
                row.push(<Square row={r} col={c} key={r + c} setValue={this.handleSetValue} value={matrix[r][c]} />);
            }
            board.push(<div className="row" key={"row" + r}>{row}</div>);
        }
        return board;
    }

    handleSetValue = (row: number, column: number) => {
        console.log(`the row is ${row} and the column is ${column}`);
        let matrix = this.state.matrix;
        let turn = this.state.turn;
        matrix[row][column] = turn;
        this.setState({ matrix: matrix, turn: turn === 'X' ? 'O' : 'X' });
        const winner = winnerCalc(matrix, this.props.rows, this.props.columns, 3, row, column);
        console.log(`the winner is: ${winner}`);
    }

    render() {
        console.log(this.state.matrix);
        const { turn, status } = this.state;
        return (
            <div className="board">
                <div>Next player: {turn}</div>
                {this.createBoard()}
                <div>{status}</div>
            </div>
        )
    }
}

export default Board