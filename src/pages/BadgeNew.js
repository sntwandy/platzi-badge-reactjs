import React from 'react';

// Components
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import Error from '../components/Error';

// Styles
import './styles/BadgeNew.css'

// Images
import header from '../images/platziconf-logo.svg'

// API
import API from '../api';
import api from '../api';
class BadgeNew extends React.Component {

    // Initializing the state
    state = { form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
    } };

    // Save the state from badge form
    handleChange = e => {
        // const nextForm = this.state.form;
        // nextForm[e.target.name] = e.target.value;
        this.setState( {
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        } );
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState( { loading: true, error: null } );
        try {
            await API.badges.create(this.state.form);
            this.setState( { loading: false, error: null } );
        } catch(error) {
            this.setState( { loading: false, error: true  } );
        }
    }
    render() {
        return(
            <React.Fragment>
                <div className="BadgeNew-hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                            firstName={this.state.form.firstName || 'FIRST_NAME'}
                            lastName={this.state.form.lastName || 'LAST_NAME'}
                            avatarUrl="https://i.imgur.com/q31Oq0S.jpg"
                            twitter={this.state.form.twitter || 'TWITTER'}
                            jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                            email={this.state.form.email || 'EMAIL'}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;