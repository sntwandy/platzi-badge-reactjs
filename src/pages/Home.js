import React from 'react';
import { Link } from 'react-router-dom';
import Config from '../Config';

/// CSS
import './styles/Home.css';

import platziConfLogo from '../images/platziconf-logo.svg';
import astronauts from '../images/astronauts.svg';

function Home () {
    Config();
    return(
        <React.Fragment>
            <div className="Home-background">
                <div className="row Home-content">
                    <div className="col-sm-8 col-md-5 Home-content-conf">
                        <img className="img-fluid" src={platziConfLogo} alt=""/>
                        <h2>Print your badges</h2>
                        <p>The easiest way to manage your conference</p>
                        <Link className="btn btn-primary" to="/Badges">Start now</Link>
                    </div>
                    <div className="col-sm-8 col-md-5 Home-astronauts">
                        <img className="Home-astronauts img-fluid" src={astronauts} alt=""/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;