import React, { Component } from 'react'
import Square from '../Square'
import winnerCalc from '../WinnerCalc'
import './style.scss'

type State = { matrix: string[][], turn: string, win: boolean }
type Props = { rows: number, columns: number, minToWin: number }

class Board extends Component<Props, State> {
    state = {
        matrix: new Array(this.props.rows).fill(null).map(item => (new Array(this.props.columns).fill(null))),
        turn: 'X',
        win: false
    }

    createBoard = (): Array<any> => {
        let board = [];
        let matrix = this.state.matrix;
        for (let r = 0; r < this.props.rows; r++) {
            let row = [];
            for (let c = 0; c < this.props.columns; c++) {
                row.push(<Square row={r} col={c} key={r + c} setValue={this.handleSetValue} value={matrix[r][c]} enable={this.state.win} />);
            }
            board.push(<div className="row" style={{width: row.length * 58}} key={"row" + r}>{row}</div>);
        }
        return board;
    }

    handleSetValue = (row: number, column: number) => {
        let matrix = this.state.matrix;
        let turn = this.state.turn;
        matrix[row][column] = turn;
        const winner = winnerCalc(matrix, this.props.rows, this.props.columns, this.props.minToWin, row, column);
        console.log(`the winner is: ${winner}`);
        this.setState({ matrix: matrix, turn: turn === 'X' ? 'O' : 'X', win: winner !== '' });
    }

    render() {
        console.log(this.state.matrix);
        const { turn, win } = this.state;
        const status = win ? `The winner is ${turn === 'X' ? 'O' : 'X'}` : `Next player: ${turn}`
        return (
            <div className="board">
                <div className="status">{status}</div>
                {this.createBoard()}
            </div>
        )
    }
}

export default Board