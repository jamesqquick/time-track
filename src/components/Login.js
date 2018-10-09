import React, { Component } from 'react';
import firebase from 'firebase';
import { firebaseApp } from '../firebase';

export default class Login extends Component {
    constructor() {}

    render() {
        return (
            <form>
                Login
                <Button onBtnClick={this.login} btnText="Login With Twitter" />
            </form>
        );
    }

    login = () => {
        const authProvider = new firebase.auth.TwitterAuthProvider();
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.authHandler);
    };

    authHandler = async authData => {
        console.log(authData);
        this.props.loggedInHandler();
    };
}
