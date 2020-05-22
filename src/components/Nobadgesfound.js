import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import './styles/Nobadgesfound.css';

function Nobadgesfound () {
    return (
        <React.Fragment>
            <div className="Nobadgesfound-container">
                <h3>No badges were found</h3>
                <Link className="btn btn-primary" to="/Badges/new">Create a new badge</Link>
            </div>
        </React.Fragment>
    );
}

export default Nobadgesfound;