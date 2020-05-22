import React from 'react';

// CSS
import './styles/BadgesList.css';

// Components
import Loading from './Loading';

class BadgesList extends React.Component {
    render() {
        return(
            <React.Fragment>
            <ul className="list-unstyled">
            {this.props.badges.results.map( badge => {
                return(
                    <li key={badge.id} className="BadgesList-container">
                        <div className="BadgesList-image">
                            <img src={badge.image} alt={badge.name}/>
                        </div>
                        <div className="BadgesList-text-container">
                            <span className="BadgesList-name">{badge.name}</span>
                            <div className="BadgeList-twitter-container">
                                <img className="BadgesList-twitter-logo" src="https://i.imgur.com/vd2ZIj6.png" alt="Twitter Logo"/>
                                <span>@{badge.status}</span>
                            </div>
                            <span>{badge.species}</span>
                        </div>
                    </li>
                );
            })}
        </ul>
        {this.props.loading && (
            <Loading />
        )}
        </React.Fragment>
        );
    }
}

export default BadgesList;