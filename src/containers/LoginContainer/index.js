import React, { Component } from 'react';
import LoginComponent from '../../components/LoginComponent';
import {aPost, routes} from "../../api/api";

export default class LoginContainer extends Component {

    constructor(props) {
        super(props);

        // initialize state here
        // use this.setState() outside of constructor to set the value
        this.state = {
            email: '',
            password: '',
            errors: []
        };
    }

    handleEmailChange = e => {
        this.setState({ email: e.target.value });
    };

    handlePasswordChange = e => {
        this.setState({ password: e.target.value });
    };

    handleLogin = () => {
        const postData = {
            username: this.state.email,
            password: this.state.password
        };

        aPost(routes.login, postData).then(response => {
            const { status, data } = response;

            if (status === 200) {
                localStorage.token = data.token;

                if (data.customer !== undefined && data.customer !== null) {
                    localStorage.loggedInUser = JSON.stringify(data.customer);
                    this.props.history.push('/customer');

                } else if (data.resto !== undefined && data.resto !== null) {
                    localStorage.loggedInUser = JSON.stringify(data.resto);
                    this.props.history.push('/restaurant');
                }
            }
        }).catch(err => {
            if (err.response !== null && err.response !== undefined) {
                const errors = Object.keys(err.response.data).map(key => ({key, value: err.response.data[key]}));
                this.setState({errors});
            }
        });
    };

    handleSignup = () => {
        this.props.history.push('/signup');
    };

    render() {
        return (
            <div className="fade-in">
                <LoginComponent
                    email={this.state.email}
                    password={this.state.password}
                    handleEmailChange={this.handleEmailChange}
                    handlePasswordChange={this.handlePasswordChange}
                    handleLogin={this.handleLogin}
                    handleSignup={this.handleSignup}
                    validationState={this.getValidationState}
                    errors={this.state.errors}
                />
            </div>
        );
    }
}
