import React from 'react';
import md5 from 'md5';

// Components
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
// import Error from '../components/Error';
import Loading from '../components/Loading';

// Styles
import './styles/BadgeEdit.css'

// Images
import header from '../images/platziconf-logo.svg'

// API
import API from '../api';
class BadgeEdit extends React.Component {

    // Initializing the state
    state = {
        loading: true,
        error: null,
        form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
    } };

    componentDidMount () {
        this.fetchData();
    }

    fetchData = async e => {
        this.setState( { loading: true, error: null } );
        try {
            const data = await API.badges.read(this.props.match.params.badgeId);
            this.setState( { loading: false, form: data } );
        } catch(error) {
            this.setState({ loading: false, error: error });
        }
    }

    // Save the state from badge form
    handleChange = e => {
        // const nextForm = this.state.form;
        // nextForm[e.target.name] = e.target.value;
        this.setState( {
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
                avatarUrl: `https://www.gravatar.com/avatar/${md5(this.state.form.email)}?d=identicon`,
            }
        } );
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState( { loading: true, error: null } );
        try {
            await API.badges.update(this.props.match.params.badgeId ,this.state.form);
            this.setState( { loading: false, error: null } );
            this.props.history.push('/Badges');
        } catch(error) {
            this.setState( { loading: false, error: error  } );
        }
    }
    render() {

        if (this.state.loading) {
            return <Loading />
        }

        return(
            <React.Fragment>
                <div className="BadgeEdit-hero">
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
                            <h1>Edit Attendant</h1>
                            <BadgeForm
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            formValues={this.state.form}
                            error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeEdit;