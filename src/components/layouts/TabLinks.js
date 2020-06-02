import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class TabLinks extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink to="/airports" className="nav-link">Airports</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/aircrafts" className="nav-link">Aircrafts</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/transactions" className="nav-link">Transaction</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/report/full" className="nav-link">Report</NavLink>
                </li>
            </ul>
        )
    }
}

export default TabLinks;