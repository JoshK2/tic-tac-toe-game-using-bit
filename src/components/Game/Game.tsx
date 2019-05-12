import React, { Component } from 'react'
import Board from '../Board'
import './style.scss'

type State = {}
type Props = { size: Array<number> }

class Game extends Component<Props, State> {
    render() {
        return (
            <Board rows={this.props.size[0]} columns={this.props.size[1] || this.props.size[0]} />
        )
    }
}

export default Game