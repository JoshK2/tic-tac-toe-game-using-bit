import React, { Component } from 'react'
import './style.scss'

type State = { clicked: boolean }
type Props = { row: number, col: number, setValue: Function, value: string, disable: boolean }

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
        return (
            <div className={`square ${this.props.value}`} onClick={this.handleClick}><span>{this.props.value}</span></div>
        )
    }
}

export default Square