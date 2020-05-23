import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import './styles/BadgesList.css';

class BadgesList extends React.Component {
    render() {
        return(
            <ul className="list-unstyled">
            {this.props.badges.map( badge => {
                return(
                    <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                        <li key={badge.id} className="BadgesList-container">
                            <div className="BadgesList-image">
                                <img src={badge.avatarUrl} alt={badge.firstName}/>
                            </div>
                            <div className="BadgesList-text-container">
                                <span className="BadgesList-name">{badge.firstName} {badge.lastName}</span>
                                <div className="BadgeList-twitter-container">
                                    <img className="BadgesList-twitter-logo" src="https://i.imgur.com/vd2ZIj6.png" alt="Twitter Logo"/>
                                    <span>@{badge.twitter}</span>
                                </div>
                                <span>{badge.jobTitle}</span>
                            </div>
                        </li>
                    </Link>
                );
            })}
        </ul>
        );
    }
}

export default BadgesList;