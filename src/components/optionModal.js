import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal isOpen={!!props.chosenOption} contentLabel="Selected Option" onRequestClose={props.okay}>
            <h3>Selected Option</h3>
            {props.chosenOption ? <p>{props.chosenOption}</p> : undefined}
            <button onClick={props.okay}>Okay</button>
        </Modal>
    )
}

export default OptionModal;