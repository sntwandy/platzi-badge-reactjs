import React from 'react';

// Components
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
// Styles
import './styles/BadgeNew.css'

// Images
import header from '../images/badge-header.svg'

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
                            firstName={this.state.form.firstName}
                            lastName={this.state.form.lastName}
                            avatarUrl="https://i.imgur.com/q31Oq0S.jpg"
                            twitter={this.state.form.twitter}
                            jobTitle={this.state.form.jobTitle}
                            email={this.state.form.email}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm
                            onChange={this.handleChange}
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