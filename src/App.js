import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Team from './components/Team';
import Game from './components/Game';
import Teams from './components/Teams';
import base from './firebase';
import { MyContext } from './Context';
import Login from './components/Login';
import OnlyLoggedInRoute from './components/OnlyLoggedInRoute';
import OnlyLoggedOutRoute from './components/OnlyLoggedOutRoute';

//Create a provider component
class MyProvider extends Component {
    state = {
        teams: {},
        user: null
    };

    componentDidMount() {
        this.ref = base.syncState('teams', {
            context: this,
            state: 'teams'
        });
    }

    componentWillUnmount() {
        base.remove(this.ref);
    }

    render() {
        return (
            <MyContext.Provider
                value={{
                    state: this.state,
                    addTeam: this.addTeam,
                    removeTeam: this.removeTeam,
                    addPlayerToTeam: this.addPlayerToTeam,
                    removePlayerFromTeam: this.removePlayerFromTeam
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }

    addTeam = name => {
        const team = { name, players: {} };
        const id = Date.now();
        const teams = { ...this.state.teams };
        teams[id] = team;
        this.setState({
            teams
        });
    };

    removeTeam = id => {
        const teams = { ...this.state.teams };
        teams[id] = null;
        this.setState({
            teams
        });
    };

    addPlayerToTeam = (teamId, playerName) => {
        const teams = { ...this.state.teams };
        const team = this.state.teams[teamId];
        const playerId = Date.now();
        if (!team.players) {
            team.players = {};
        }
        team.players[playerId] = { name: playerName };
        teams[teamId] = team;
        this.setState({
            teams
        });
    };

    removePlayerFromTeam = (teamId, playerId) => {
        const teams = { ...this.state.teams };
        if (teams[teamId] && teams[teamId].players) {
            teams[teamId].players[playerId] = null;
        }
        this.setState({
            teams
        });
    };

    loggedInHandler = authData => {
        console.log(authData);
        //update user in state and navigate to home page
    };
}
class App extends Component {
    render() {
        return (
            <MyProvider>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={Home} />
                        <OnlyLoggedInRoute
                            exact
                            path="/teams"
                            component={Teams}
                        />
                        <OnlyLoggedInRoute
                            exact
                            path="/teams/:team"
                            component={Team}
                        />
                        <OnlyLoggedInRoute
                            exact
                            path="/game"
                            component={Game}
                        />
                        <OnlyLoggedOutRoute
                            exact
                            path="/login"
                            component={Login}
                            loggedInHandler={this.loggedInHandler}
                        />
                    </div>
                </BrowserRouter>
            </MyProvider>
        );
    }
}

export default App;
