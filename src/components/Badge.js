import React from 'react';

// Components
import Gravatar from './Gravatar';

// Images
import confLogo from '../images/badge-header.svg';

// CSS
import './styles/Badge.css';
class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge-header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>
                <div className="Badge-section-name">
                    <Gravatar className="Badge-avatar" email={this.props.email} />
                    <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
                </div>
                <div className="Badge-section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.twitter}</div>
                </div>
                <div className="Badge-footer">
                    <span>#PlatziConf</span>
                </div>
            </div>
        )
    }
}

export default Badge;