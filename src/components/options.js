import React from 'react';

import Option from './option';

const Options = (props) => {
    return (
        <div>
            {props.options.length > 0 ? <h3>Here are the options</h3> : <h3>No Options</h3>}
            {props.options.map(x => <Option handleRemoveSingle={props.handleRemoveSingle} key={x} option={x} />)}
            <button onClick={props.handleRemoveAll}>Remove All</button>
        </div>
    )
}

export default Options;