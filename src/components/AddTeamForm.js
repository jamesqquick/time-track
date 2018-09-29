import React from 'react'

export default class AddTeamForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teamName: ''
        }
    }

    render() {

        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="form-input-with-button">
                    <input className="form-input" type="text" placeholder="Add a new team" onChange={this.teamNameChanged} value={this.state.teamName} />
                    <button className="nested-input-btn" disabled={!this.state.teamName}>+</button>
                </div>
            </form>
        )
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.teamName);
        this.setState({
            teamName: ''
        })
    }

    teamNameChanged = (e) => {
        const teamName = e.target.value;
        this.setState({ teamName });
    }
}
