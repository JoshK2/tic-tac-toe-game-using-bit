import React, { Component } from 'react'
import './style.scss'

type State = { clicked: boolean }
type Props = {
    /** row value in 2d array to be returned when is clicked  */
    row: number,
    /** column value in 2d array to be returned when is clicked */
    col: number,
    /** function that called to send row and column values to update value in 2d array */
    setValue: Function,
    /** value to set (X/O) */
    value: string,
    /** disable the square */
    disable: boolean,
    /** optional hex color to override X and O color */
    color?: string
}

/**
 * @description
 * Square is a cell in the main 2d array, and can receive any value and optional color.
 * @example
 * import React from 'react';
 * import Square from '@bit/joshk.tic-tac-toe-game.square';
 *
 * export default (
 *   <Square value="O"/>
 * )
 */
class Square extends Component<Props, State> {
    state = {
        clicked: false
    }

    componentWillReceiveProps(nextProps: any) {
        if (nextProps.disable === true) {
            this.setState({ clicked: true });
        }
    }

    handleClick = () => {
        if (!this.state.clicked) {
            this.setState({ clicked: true });
            this.props.setValue(this.props.row, this.props.col);
        }
    }

    render() {
        const { value, color } = this.props;
        return (
            <div className={`square ${value}`} onClick={this.handleClick}><span style={{ color: color ? `${color}` : '' }}>{value}</span></div>
        )
    }
}

export default Square