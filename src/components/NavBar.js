import React from 'react';

import logo from '../images/logo.svg';
import './styles/Navbar.css';

class NavBar extends React.Component {
    render() {
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <a className="Navbar-brand" href="/">
                        <img className="Navbar-brand-logo" src={logo} alt=""/>
                        <span className="front-weight-light">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default NavBar;