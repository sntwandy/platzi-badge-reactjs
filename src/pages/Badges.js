import React from 'react';
import { Link } from 'react-router-dom';

// Images
import confLogo from '../images/badge-header.svg';

// CSS
import './styles/Badges.css';

// Components
import BadgesList from '../components/BadgesList';

class Badges extends React.Component {

    // Call 1
    constructor(props){
        super(props); // Call the super class component
        console.log('1. Constructor()');

        // Initializing the state
        this.state = {
            data: [],
            }
        }

        // Call 3
        componentDidMount () {
            console.log('3. ComponentDidMount()');

            this.timeoutId =  setTimeout(() => {
                this.setState( {
                    data: [
                        {
                            "id": "2de30c42-9deb-40fc-a41f-05e62b5939a7",
                            "firstName": "Freda",
                            "lastName": "Grady",
                            "email": "Leann_Berge@gmail.com",
                            "jobTitle": "Legacy Brand Director",
                            "twitter": "FredaGrady22221-7573",
                            "avatarUrl": "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
                        },
                        {
                            "id": "d00d3614-101a-44ca-b6c2-0be075aeed3d",
                            "firstName": "Major",
                            "lastName": "Rodriguez",
                            "email": "Ilene66@hotmail.com",
                            "jobTitle": "Human Research Architect",
                            "twitter": "MajorRodriguez61545",
                            "avatarUrl": "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
                        },
                        {
                            "id": "63c03386-33a2-4512-9ac1-354ad7bec5e9",
                            "firstName": "Daphney",
                            "lastName": "Torphy",
                            "email": "Ron61@hotmail.com",
                            "jobTitle": "National Markets Officer",
                            "twitter": "DaphneyTorphy96105",
                            "avatarUrl": "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
                        },
                    ]
                } )
            }, 3000);
        }

        // Call 5
        componentDidUpdate (prevProps, prevState) {
            console.log('5. ComponentDidUpdate()');
            console.log( { prevProps: prevProps, prevState:  prevState } );
            console.log( { props: this.props, state: this.state } );
        }

        // Call 6
        componentWillUnmount () {
            console.log('6. ComponentWillUnMount');
            clearTimeout(this.timeoutId);
        }

    // Call 2/4
    render() {
        console.log('2/4. Render()');
        return(
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges-hero">
                        <div className="Badges-container">
                            <img className="Badges-conf-logo" src={confLogo} alt="Conf Logo"/>
                        </div>
                    </div>
                </div>
                <div className="Badge-container">
                    <div className="Badges-buttons">
                        <Link to="/Badges/new" className="btn btn-primary">New Badge</Link>
                    </div>
                    <div className="Badges-list">
                        <div className="Badges-container">
                            <BadgesList badges={this.state.data} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;