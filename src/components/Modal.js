import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './styles/Modal.css';

function Modal (props) {
    if (!props.isOpen) {
        return null;
    }
    return (
        ReactDOM.createPortal(
        <div className="Modal">
            <div className="Modal-container">
                {props.children}
                <button onClick={props.onClose} className="Modal-close-button">X</button>
            </div>
        </div>,
        document.getElementById('modal') )
    );
}

export default Modal;