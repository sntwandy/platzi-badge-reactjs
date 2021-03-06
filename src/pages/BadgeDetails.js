import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

// CSS
import './styles/BadgeDetails.css';

// Images
import confLogo from '../images/platziconf-logo.svg';


// Custom hooks
function useIncreaseCount (max) {
    // Hooks 'useState'
    const [count , setCount] = React.useState(0);

    if (count > max) {
        setCount(0);
    }
    return [count, setCount];
}

function BadgeDetails (props) {
    // const [state, setState] = React.useState();
    const [count, setCount] = useIncreaseCount(5);

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
                                    <button onClick={ () => {
                                        setCount(count + 1);
                                    } } className="mr-4 btn btn-primary">Increase count: {count}</button>
                                    <Link className="btn btn-primary" to={`/badges/${props.badge.id}/edit`}>Edit</Link>
                                </div>
                                <div>
                                    <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                                    <DeleteBadgeModal isOpen={props.modalIsOpen} onClose={props.onCloseModal} onDeleteBadge={props.onDeleteBadge} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
    );
}

export default BadgeDetails;