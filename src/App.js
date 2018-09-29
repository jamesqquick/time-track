import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';

class App extends Component {
    render() {
        return (
            <Navbar title='Time Track' onBack={this.onBack} onMenu={this.onMenu} menuItemText="Add" />
        );
    }

    onBack = () => {
        console.log("back pressed");
    }

    onMenu = () => {
        console.log('menu pressed');
    }
}

export default App;
