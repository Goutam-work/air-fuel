import React, { Component } from 'react'
import TabLinks from './TabLinks'
import SignInLinks from './SignInLinks'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to="/home" className="nav-link">
                    <span className="red big">Air</span>
                    <span className="blue big">Fuel</span>
                </NavLink>
                
                <div className="collapse navbar-collapse" id="navbarText">
                        <TabLinks/>
                    <span className="navbar-text">
                        <SignInLinks/>
                    </span>
                </div>
            </nav>
        )
    }
}

export default Navbar;