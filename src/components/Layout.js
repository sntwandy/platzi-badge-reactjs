import React from 'react';

// Components
import Navbar from './NavBar';

function Layout (props) {
    // const children = this.props.children;
    return(
        <React.Fragment>
            <Navbar />
            {props.children}
        </React.Fragment>
    );
}

export default Layout;