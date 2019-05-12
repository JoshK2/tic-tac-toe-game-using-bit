import React, { Component } from 'react'
import './style.scss'

type State = {}
type Props = { row: number, col: number, setValue: Function, value: string }

class Square extends Component<Props, State> {
    handleClick = () => {
        this.props.setValue(this.props.row, this.props.col)
    }

    render() {
        return (
            <div className="square" onClick={this.handleClick}><span>{this.props.value}</span></div>
        )
    }
}

export default Square