import React from 'react';

const Action = (props) => {
    return (
        <div>
            <button onClick={props.selectOption} disabled={!props.hasOptions}>What should I do?</button>
            {props.hasOptions ? <h2>{props.chosenOption}</h2> : undefined}
        </div>
    )
}

export default Action;
