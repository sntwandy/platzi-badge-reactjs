import React from 'react';

// CSS
import './styles/Loading.css';

function Loading () {
    return(
        <React.Fragment>
            <div className="Loading">
                <div className="Loading-circle"></div>
                <div className="Loading-circle"></div>
                <div className="Loading-circle"></div>
            </div>
        </React.Fragment>
    );
}

export default Loading;