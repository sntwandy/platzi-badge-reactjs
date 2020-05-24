import React from 'react';
import { Link } from 'react-router-dom';

// Components
import FilterBadges from './FilterBadges';

// CSS
import './styles/BadgesList.css';

// Custom Hooks
function useSearchBadges (props) {
    const [filteredBadges, setFilteredBadges] = React.useState(props.badges);

    const [query, setQuery] = React.useState('');

    React.useMemo( () => {
        const results = props.badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
        });
        setFilteredBadges(results);
    }, [props.badges, query]);
    return { setQuery, query,filteredBadges }
}

function BadgesList (props) {
    const { setQuery, query, filteredBadges } = useSearchBadges(props);
    return(
        <div className="BadgesList">
            <ul className="list-unstyled">
            <FilterBadges value={query} onChange={ (e) => { setQuery(e.target.value) } }/>
                {filteredBadges.length === 0 ? <h2>No were found</h2> :
                    filteredBadges.map( badge => {
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
        </div>
    );
}

export default BadgesList;