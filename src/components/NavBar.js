import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg';
import './styles/Navbar.css';

class NavBar extends React.Component {
    render() {
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar-brand" to="/">
                        <img className="Navbar-brand-logo" src={logo} alt=""/>
                        <span className="front-weight-light">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default NavBar;