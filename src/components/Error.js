import React from 'react';

// CSS
import './styles/Error.css'

function Error (props) {
    return (
        <React.Fragment>
            <h3 className="Error-title">`Error: ${props.error}`</h3>
        </React.Fragment>
    );
}

export default Error;