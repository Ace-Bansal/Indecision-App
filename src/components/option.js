import React from 'react';

export default class Option extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveSingle = this.handleRemoveSingle.bind(this);
    }
    handleRemoveSingle() {
        this.props.handleRemoveSingle(this.props.option)
    }

    render() {
        return (
            <div>
                <p>{this.props.option}</p>
                <button onClick={this.handleRemoveSingle}>Remove</button>
            </div>
        )
    }
}
