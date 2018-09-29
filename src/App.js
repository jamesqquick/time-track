import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Team from './components/Team';
import Game from './components/Game';
import Teams from './components/Teams';
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/teams" component={Teams} />
                    <Route exact path="/teams/:team" component={Team} />
                    <Route exact path="/game" component={Game} />

                </div>

            </BrowserRouter>


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
