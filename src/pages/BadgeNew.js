import React from 'react';

// Components
import NavBar from '../components/NavBar';
import Badge from '../components/Badge';

// Styles
import './styles/BadgeNew.css'

// Images
import header from '../images/badge-header.svg'

class BadgeNew extends React.Component {
    render() {
        return(
            <div>
                <NavBar />
                <div className="BadgeNew-hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge firstName="Megan" lastName="Herrera" avatarUrl="https://i.imgur.com/q31Oq0S.jpg" twitter="meganhrra" jobTitle="Criminology" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;