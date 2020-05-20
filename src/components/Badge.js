import React from 'react';

import confLogo from '../images/badge-header.svg';
import avatar from '../images/Baby.jpg';

import './styles/Badge.css';
class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge-header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>
                <div className="Badge-section-name">
                    <img className="Badge-avatar" src={avatar} alt="Avatar"/>
                    <h1>Megan <br/> Herrera</h1>
                </div>
                <div className="Badge-section-info">
                    <h3>Criminology</h3>
                    <div>@meganhrra</div>
                </div>
                <div className="Badge-footer">
                    <span>#PlatziConf</span>
                </div>
            </div>
        )
    }
}

export default Badge;