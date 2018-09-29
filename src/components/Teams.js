import React from 'react'
import Navbar from './Navbar';
import AddTeamForm from './AddTeamForm';
import Card from './Card';
export default class Team extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            teams: []
        }
    }

    render() {
        return (
            <div>
                <Navbar title='Teams' onBack={() => this.props.history.push('/')} />
                <div className="container">
                    <AddTeamForm onFormSubmit={this.addTeamFormSubmitted} />
                    {this.state.teams.map((team, index) =>
                        <Card title={team.name} subtitle={team.players.length + ' players'} key={index} menuBtnText='-' onMenuBtnClick={() => this.removeTeam(index)} onCardClick={() => this.teamSelected(team)} />
                        // <Card title={team.name} subtitle={team.players.length + ' players'} key={team.name} badgeTitle='27' badgeSubtitle='min' menuBtnText='-'/>
                    )}
                </div>
            </div>
        )
    }
    addTeamFormSubmitted = (name) => {
        console.log(name);
        this.setState({
            teams: [...this.state.teams, { name, players: [] }]
        })
    }

    removeTeam = (index) => {
        console.log("removing team", index);
        const teams = [...this.state.teams];
        teams.splice(index, 1);
        this.setState({
            teams
        })
    }

    teamSelected = (team) => {
        console.log(team);
        this.props.history.push(`/teams/${team.name}`);
    }

}
