import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
// Components
import Badge from '../components/Badge';

// CSS
import './styles/BadgeDetails.css';

// Images
import confLogo from '../images/platziconf-logo.svg';

function BadgeDetails (props) {
    return(
        <React.Fragment>
                <div className="BadgeDetails-hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={confLogo} alt="Conference logo"/>
                            </div>
                            <div className="col-6 BadgeDetails-hero-attendant-name">
                                <h1>{props.badge.firstName} {props.badge.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                            firstName={props.badge.firstName}
                            lastName={props.badge.lastName}
                            jobTitle={props.badge.jobTitle}
                            twitter={props.badge.twitter}
                            email={props.badge.email}
                            />
                        </div>
                        <div className="col BadgeDetailsActions-container">
                            <h2>Actions</h2>
                            <div className="BadgeDetailsActions-buttons">
                                <div className="BadgeDetailsActions-edit">
                                    <Link className="btn btn-primary" to={`/badges/${props.badge.id}/edit`}>Edit</Link>
                                </div>
                                <div>
                                    <button className="btn btn-danger">Delete</button>
                                    {ReactDOM.createPortal( <h1>Hello</h1>, document.getElementById('modal') )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
    );
}

export default BadgeDetails;