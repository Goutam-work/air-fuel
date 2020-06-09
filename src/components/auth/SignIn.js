import React, { Component } from 'react';
import { connect } from 'react-redux';
import {auth} from '../../store/actions/authAction'

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleInputChanges = (event) => {
        this.setState({ [event.target.name]: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAuth( this.state.email, this.state.password);
    }

    render() {
        let errorMessage,loadingMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error}</p>
            );
        }
        if (this.props.loading) {
            loadingMessage = (
                <p>loading.......</p>
            );
        }
        return (
            <div className="container">
                <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <input type="text" name="email" className="form-control" value={this.state.email}  placeholder="Enter Email" onChange={this.handleInputChanges}></input>
                    </div>

                    <div className="form-group">
                        <input type="password" name="password" className="form-control" value={this.state.password}  placeholder="Enter Password" onChange={this.handleInputChanges}></input>
                    </div>
                    {loadingMessage}
                    {errorMessage}
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Sign In</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( email, password ) => dispatch(auth( email, password ) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( SignIn );

//export default SignIn;