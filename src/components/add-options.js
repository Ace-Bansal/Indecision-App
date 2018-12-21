import React from 'react';

export default class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error: undefined
        }
    }
    onFormSubmit(e) {
        e.preventDefault();
        let addedOption = e.target.elements.input.value.trim();
        let error = this.props.handleFormSubmit(addedOption);
        this.setState(() => ({ error }));


        e.target.elements.input.value = ''
    }
    render() {
        return (
            <div>
                {this.state.error != undefined ? <h3>{this.state.error}</h3> : undefined}
                <form onSubmit={this.onFormSubmit}>
                    <input type='text' name='input' />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}
