import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class SignInLinks extends Component {

    render() {
        return (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    {!this.props.isLoggedIn ?
                    <NavLink to="/signin" className="nav-link">Sign In</NavLink> :
                    <NavLink to="/logout" className="nav-link">Log Out</NavLink>
                    }
                    
                </li>
            </ul>
        )
    }
}



export default SignInLinks;