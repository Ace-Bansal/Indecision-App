import React from 'react';

import Option from './option';

export default class Options extends React.Component {
    render() {
        return (
            <div>
                {this.props.options.length > 0 ? <h3>Here are the options</h3> : <h3>No Options</h3>}
                {this.props.options.map(x => <Option handleRemoveSingle={this.props.handleRemoveSingle} key={x} option={x} />)}
                <button onClick={this.props.handleRemoveAll}>Remove All</button>
            </div>
        )
    }
}
