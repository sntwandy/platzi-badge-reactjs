import React from 'react';

// Components
import BadgeDetails from './BadgeDetails';
import Loading from '../components/Loading';
import Error from '../components/Error';

// API
import API from '../api';

class BadgeDetailsContainer extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            data: undefined,
            modalIsOpen: false,
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

    handleOpenModal = e => {
        this.setState( { modalIsOpen: true } );
    }

    handleCloseModal = e => {
        this.setState( { modalIsOpen: false } );
    }

    handleDeleteBadge = async e => {
        this.setState( { loading: true, error: null } )
        try {
            await API.badges.remove(this.props.match.params.badgeId);
            this.setState( { loading: false, error: null } );
            this.props.history.push('/badges');
        } catch(error) {
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
            <BadgeDetails
            badge={this.state.data}
            onCloseModal={this.handleCloseModal}
            onOpenModal={this.handleOpenModal}
            modalIsOpen={this.state.modalIsOpen}
            onDeleteBadge={this.handleDeleteBadge}
            />
        );
    }
}

export default BadgeDetailsContainer;