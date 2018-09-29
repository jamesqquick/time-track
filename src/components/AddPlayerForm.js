import React from 'react'

export default class AddPlayerForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playerName: ''
        }
    }

    render() {

        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="form-input-with-button">
                    <input className="form-input" type="text" placeholder="Add a new player" onChange={this.playerNameChanged} value={this.state.playerName} />
                    <button className="nested-input-btn" disabled={!this.state.playerName}>+</button>
                </div>
            </form>
        )
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.playerName);
        this.setState({
            playerName: ''
        })
    }

    playerNameChanged = (e) => {
        const playerName = e.target.value;
        this.setState({ playerName });
    }
}
