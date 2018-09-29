import React from 'react'
import Card from './Card';
import AddPlayerForm from './AddPlayerForm';
import Navbar from './Navbar';

export default class Team extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            players: []
        }
    }
    render() {

        return (
            <div>
                <Navbar title={this.props.match.params.team} onBack={() => this.props.history.push('/teams')} />
                <div className="container">
                    <AddPlayerForm onFormSubmit={this.addPlayerFormSubmitted} />
                    {this.state.players.map((player, index) =>
                        <Card title={player} key={index} menuBtnText='-' onMenuBtnClick={() => this.removePlayer(index)} />

                    )}
                </div>
            </div>
        )
    }

    removePlayer = (index) => {
        const players = [...this.state.players];
        players.splice(index, 1);
        this.setState({
            players
        })
    }

    addPlayerFormSubmitted = (name) => {
        console.log(name);
        this.setState({
            players: [...this.state.players, name]
        })
    }
}
