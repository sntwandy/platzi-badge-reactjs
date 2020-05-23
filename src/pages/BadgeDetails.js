import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Badge from '../components/Badge';
import Loading from '../components/Loading';
import Error from '../components/Error';

// CSS
import './styles/BadgeDetails.css';

// Images
import confLogo from '../images/platziconf-logo.svg';

// API
import API from '../api';

class BadgeDetails extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            data: undefined,
        }
    }

    componentDidMount () {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState( { loading: true, error: null } );
        try {
        const data = await API.badges.read(this.props.match.params.badgeId)
        this.setState( { loading: false, error: null, data: data } );
        } catch (error) {
            this.setState( { loading: false, error: error } );
        }
    }

    render () {

        if (this.state.loading) {
            return <Loading />
        }

        if (this.state.error) {
            return <Error error={this.state.error} />
        }

        return(
            <React.Fragment>
                <div className="BadgeDetails-hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={confLogo} alt="Conference logo"/>
                            </div>
                            <div className="col-6 BadgeDetails-hero-attendant-name">
                                <h1>{this.state.data.firstName} {this.state.data.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                            firstName={this.state.data.firstName}
                            lastName={this.state.data.lastName}
                            jobTitle={this.state.data.jobTitle}
                            twitter={this.state.data.twitter}
                            email={this.state.data.email}
                            />
                        </div>
                        <div className="col BadgeDetailsActions-container">
                            <h2>Actions</h2>
                            <div className="BadgeDetailsActions-buttons">
                                <div className="BadgeDetailsActions-edit">
                                    <Link className="btn btn-primary" to={`/badges/${this.state.data.id}/edit`}>Edit</Link>
                                </div>
                                <div>
                                    <button className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeDetails;