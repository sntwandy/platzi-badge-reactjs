import React from 'react';
import { Link } from 'react-router-dom';

/// CSS
import './styles/Home.css';

import platziConfLogo from '../images/platziconf-logo.svg';
import astronauts from '../images/astronauts.svg';

function Home () {
    return(
        <React.Fragment>
            <div className="Home-background">
                <div className="Home-content">
                    <div className="Home-content-conf">
                        <img className="img-fluid" src={platziConfLogo} alt=""/>
                        <h2>Print your badges</h2>
                        <p>The easiest way to manage your conference</p>
                        <Link className="btn btn-primary" to="/Badges">Start now</Link>
                    </div>
                    <div className="Home-astronauts">
                        <img className="Home-astronauts img-fluid" src={astronauts} alt=""/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;