import React from 'react'
import Card from './Card';
import AddPlayerForm from './AddPlayerForm';
import Navbar from './Navbar';
import { MyContext } from '../Context';

export default class Team extends React.Component {


    render() {

        return (
            <MyContext.Consumer>
                {(context) => {
                    console.log(context.state.teams);
                    const teamId = this.props.match.params.team
                    const team = context.state.teams[teamId];
                    return (
                        <div>
                            <Navbar
                                title={team ? team.name : 'Loading...'}
                                onBack={() => this.props.history.push('/teams')} />

                            {team ? (

                                <div className="container">
                                    <AddPlayerForm onFormSubmit={(playerName) => context.addPlayerToTeam(teamId, playerName)} />

                                    {team.players ? Object.keys(team.players).map((playerId, index) =>
                                        <Card title={team.players[playerId].name} key={playerId} menuBtnText='-' onMenuBtnClick={() => context.removePlayerFromTeam(teamId, playerId)} />
                                    ) : ''}
                                </div>
                            ) : ''}

                        </div>
                    )
                }}
            </MyContext.Consumer>
        )
    }
}
