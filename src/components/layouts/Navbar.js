import React, { Component } from 'react'
import TabLinks from './TabLinks'
import SignInLinks from './SignInLinks'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to="/" className="nav-link">
                    <span className="red big">Air</span>
                    <span className="blue big">Fuel</span>
                </NavLink>
                
                <div className="collapse navbar-collapse" id="navbarText">
                        {this.props.isLoggedIn ?
                            <TabLinks/> :
                            null
                        }
                    <span className="navbar-text">
                        <SignInLinks isLoggedIn={this.props.isLoggedIn}/>
                    </span>
                </div>
            </nav>
        )
    }
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.auth.token !== null
    };
};
export default connect( mapStateToProps)(Navbar);