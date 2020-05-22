import React from 'react';
import { Link } from 'react-router-dom';
import Config from '../Config';

// Images
import confLogo from '../images/badge-header.svg';

// CSS
import './styles/Badges.css';

// Components
import BadgesList from '../components/BadgesList';
import Loading from '../components/Loading';
import Nobadgesfound from '../components/Nobadgesfound';
import Error from '../components/Error';
import API from '../api';

class Badges extends React.Component {

    // Call 1
    constructor(props){
        super(props); // Call the super class component
        // Initializing the state
        this.state = {
            loading: true,
            error: null,
            data: undefined,
            }
        }

        // Call 3
        componentDidMount () {
            // console.log('3. ComponentDidMount()');
            this.fetchData();
            this.intervalId = setInterval( () => this.fetchData(), 5000);
        }

        fetchData = async () => {
            this.setState( { loading: true, error: null } );
            try {
                const data = await API.badges.list();
                this.setState({ loading: false, data: data });
            } catch (error) {
                this.setState({ loading: false, error: true });
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
           // clearTimeout(this.timeoutId);
            clearInterval(this.intervalId);
        }

    // Call 2/4
    render() {
        if (this.state.loading === true && this.state.data === undefined) {
            return <Loading />;
        }

        if (this.state.error) {
            return <Error />;
        }
        Config();
        return(
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges-hero">
                        <div className="Badges-container">
                            <img className="Badges-conf-logo" src={confLogo} alt="Conf Logo"/>
                        </div>
                    </div>
                </div>
                {this.state.data.length === 0 ?  <Nobadgesfound /> :
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
                }
            </React.Fragment>
        );
    }
}

export default Badges;