import React, { Component } from 'react'
import Square from '../Square'
import winnerCalc from '../WinnerCalc'
import './style.scss'
import PrimereactStyle from '../Game/PrimereactStyle'
import { Button } from '@bit/primefaces.primereact.button'

type State = { matrix: Array<Array<string>>, turn: string, winner: string }
type Props = { rows: number, cols: number, numToWin: number }

class Board extends Component<Props, State> {
    state = {
        matrix: new Array(this.props.rows).fill(null).map(item => (new Array(this.props.cols).fill(null))),
        turn: 'X',
        winner: ''
    }
    
    createBoard = () => {
        let board = [];
        let matrix = this.state.matrix;
        for (let r = 0; r < this.props.rows; r++) {
            let row = [];
            for (let c = 0; c < this.props.cols; c++) {
                row.push(<Square row={r} col={c} key={r + c} setValue={this.handleSetValue} value={matrix[r][c]} enable={this.state.winner !== ''} />);
            }
            board.push(<div className="row" key={"row" + r}>{row}</div>);
        }
        return <div className="rows-holder" style={{ width: this.props.cols * 56 }} >{board}</div>
    }

    handleSetValue = (lastRow: number, lastCol: number) => {
        let { matrix, turn } = this.state;
        matrix[lastRow][lastCol] = turn;
        const { rows, cols, numToWin } = this.props;
        const winner: string = winnerCalc(matrix, rows, cols, numToWin, lastRow, lastCol);
        console.log(`the winner is: ${winner}`);
        this.setState({ matrix: matrix, turn: turn === 'X' ? 'O' : 'X', winner: winner });
    }

    restartGame = () => {
        this.setState({
            matrix: new Array(this.props.rows).fill(null).map(item => (new Array(this.props.cols).fill(null))),
            turn: this.state.turn === 'X' ? 'O' : 'X',
            winner: ''
        });
    }

    render() {
        console.log(this.state.matrix);
        const { turn, winner } = this.state;
        let status: any = `Next player: ${turn}`;
        if (winner !== '') {
            if (winner === '-1') {
                status = `Draw!`;
            } else {
                status = `The winner is ${turn === 'X' ? 'O' : 'X'}`;
            }
        }
        return (
            <div className="board">
                <div className="status">{status}</div>
                {this.createBoard()}
                <PrimereactStyle />
                <Button label='Restart' className='p-button-raised restart' onClick={this.restartGame} />
            </div>
        )
    }
}

export default Board