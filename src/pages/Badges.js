import React from 'react';
import { Link } from 'react-router-dom';
import Config from '../Config';

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
            loading: true,
            error: null,
            data: {
                results: [],
            }
            }
        }

        // Call 3
        componentDidMount () {
            console.log('3. ComponentDidMount()');
            this.fetchCharacters();
        }

        fetchCharacters = async () => {
            this.setState( {
                loading: true,
                error: null,
            } );

            try {
                const response = await fetch('https://rickandmortyapi.com/api/character/');
                const data = await response.json();
                this.setState( {
                    loading: false,
                    data: data,
                } );
            } catch(error) {
                this.setState( {
                    loading: false,
                    error: true,
                } );
            }

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
        if (this.state.error) {
            return `Error: ${this.state.error.message}`;
        }
        Config();
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
                            <BadgesList badges={this.state.data} loading={this.state.loading} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;