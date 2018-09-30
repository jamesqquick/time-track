import React from 'react'
import Navbar from './Navbar';
import GamePlayersList from './GamePlayersList';
import Button from './Button';
import { MyContext } from '../Context';
export default class Game extends React.Component {


    constructor() {
        super();

        this.gameStates = {
            PLAYING: 'playing',
            PAUSED: 'paused',
            STOPPED: 'stopped'
        };

        this.state = {
            starters: [],
            bench: [],
            selectedTeamId: '',
            gameState: this.gameStates.STOPPED,
            startTimeStamp: undefined,
            currentSeconds: 0,
            currentMinutes: 0,
            timerInterval: undefined
        }
    }


    render() {

        return (
            <MyContext.Consumer>
                {(context) => (
                    <div>
                        <Navbar title={context.state.teams ? 'Game' : 'Loading...'} onBack={() => this.props.history.push('/')} />
                        <div className="container">

                            {this.state.gameState !== this.gameStates.STOPPED &&
                                <p id="timer">{this.formatNumberString(this.state.currentMinutes) + ':' + this.formatNumberString(this.state.currentSeconds)}</p>
                            }

                            <p className="player-list__title">Team</p>

                            <select className="form-input" value={this.state.selectedTeamId} onChange={(e) => this.selectedTeamChange(e, context.state.teams)}>
                                {
                                    Object.keys(context.state.teams).map((teamId, index) => {
                                        const team = context.state.teams[teamId];
                                        return (
                                            <option value={teamId} key={teamId}>{team.name}</option>
                                        )
                                    })
                                }
                            </select>
                            <GamePlayersList players={this.state.starters} listName="Starters" playOrBenchPlayer={this.benchPlayer} emptyListMessage="Add players from your bench" />
                            <GamePlayersList players={this.state.bench} listName="Bench" playOrBenchPlayer={this.startPlayer} />

                            {this.state.gameState === this.gameStates.STOPPED &&
                                <Button onBtnClick={this.startGame} btnText='Start Game' />
                            }

                            {this.state.gameState === this.gameStates.PLAYING &&
                                <Button classString="background-warning" onBtnClick={this.pauseGame} btnText='Pause Game' />
                            }

                            {this.state.gameState === this.gameStates.PAUSED &&
                                <Button classString="background-warning" onBtnClick={this.resumeGame} btnText='Resume Game' />
                            }


                            {this.state.gameState !== this.gameStates.STOPPED &&
                                <Button classString="background-danger" onBtnClick={this.endGame} btnText='End Game' />
                            }

                        </div>
                    </div>
                )}
            </MyContext.Consumer>
        )
    }

    formatNumberString(num) {
        return ('0' + num.toString()).slice(-2);
    }

    selectedTeamChange = (e, teams) => {
        const teamId = e.target.value;
        const team = teams[teamId];
        const teamPlayersArray = Object.keys(team.players).map((playerId) => ({
            name: team.players[playerId].name,
            minutes: 0
        })
        );

        this.setState({
            selectedTeamId: e.target.value,
            bench: teamPlayersArray,
            starters: []
        })
    }

    startGame = () => {
        const timerInterval = setInterval(() => {
            let currentSeconds = this.state.currentSeconds + 1;
            console.log(currentSeconds);
            let currentMinutes = this.state.currentMinutes;

            let starters = [...this.state.starters];
            if (currentSeconds >= 60) {
                currentSeconds = 0;
                currentMinutes++;

                starters = starters.map(player => ({ ...player, minutes: player.minutes + 1 }));
            }
            this.setState({
                currentSeconds,
                currentMinutes,
                starters
            })
        }, 100)


        this.setState({
            gameState: this.gameStates.PLAYING,
            timerInterval
        })
    }

    resumeGame = () => {
        this.startGame();
        this.setState({
            gameState: this.gameStates.PLAYING
        })
    }

    pauseGame = () => {
        clearInterval(this.state.timerInterval);

        this.setState({
            gameState: this.gameStates.PAUSED
        })
    }

    endGame = () => {
        clearInterval(this.state.timerInterval);

        let starters = [...this.state.starters];
        let bench = [...this.state.bench];

        starters = starters.map(player => ({ ...player, minutes: 0 }));
        bench = bench.map(player => ({ ...player, minutes: 0 }));


        this.setState({
            gameState: this.gameStates.STOPPED,
            currentSeconds: 0,
            currentMinutes: 0,
            bench,
            starters
        })
    }

    benchPlayer = (player) => {
        const state = this.state;
        const index = state.starters.indexOf(player);
        state.starters.splice(index, 1);
        state.bench.push(player);
        this.setState(state);
    }

    startPlayer = (player) => {
        const state = this.state;
        const index = state.bench.indexOf(player);
        state.bench.splice(index, 1);
        state.starters.push(player);
        this.setState(state);
    }

}
