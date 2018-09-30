import React from 'react'
import Navbar from './Navbar';
import AddTeamForm from './AddTeamForm';
import Card from './Card';
import { MyContext } from '../Context';
export default class Team extends React.Component {

    render() {
        return (
            <MyContext.Consumer>
                {(context) => (
                    <div>
                        <Navbar title='Teams' onBack={() => this.props.history.push('/')} />
                        <div className="container">
                            <AddTeamForm onFormSubmit={context.addTeam} />
                            {
                                Object.keys(context.state.teams).map((teamId, index) => {
                                    const team = context.state.teams[teamId];
                                    return (
                                        <Card title={team.name} subtitle={' players'} key={teamId} menuBtnText='-' onMenuBtnClick={() => context.removeTeam(teamId)} onCardClick={() => this.teamSelected(teamId)} />
                                    )
                                })
                            }
                        </div>
                    </div>
                )}
            </MyContext.Consumer>
        )
    }

    teamSelected = (teamId) => {
        this.props.history.push(`/teams/${teamId}`);
    }

}
