import React from 'react';

// CSS
import './styles/Notfound.css'

function NotFound () {
    return(
        <React.Fragment>
            <div className="Notfound-container .d-sm-block">
                <div className="Notfound-title">
                    <h1>404: not found</h1>
                </div>
                <div className="Notfound-image">
                    <img className="img-fluid" src="https://static.platzi.com/static/images/error/img404.png" alt="Not found logo" />
                </div>
            </div>
        </React.Fragment>
    );
}

export default NotFound;