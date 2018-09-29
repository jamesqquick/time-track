import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';

class App extends Component {
    render() {
        return (
            <Navbar title='Time Track' onBack={this.onBack} />
        );
    }

    onBack = () => {
        console.log("back pressed");
    }
}

export default App;
