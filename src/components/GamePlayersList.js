import React from 'react'
import Card from './Card';
export default class GamePlayersList extends React.Component {

    render() {

        return (
            <div className="player-list">
                <p className="player-list__title">{this.props.listName}</p>
                {Object.keys(this.props.players).length === 0 ? <p className="secondary-text">{this.props.emptyListMessage}</p> :
                    this.props.players.map(player =>
                        <Card
                            title={player.name}
                            key={player.name}
                            badgeTitle={player.minutes}
                            badgeSubtitle='min'
                            menuBtnText={this.props.listName === 'Starters' ? '-' : '+'}
                            onMenuBtnClick={() => this.props.playOrBenchPlayer(player)} />
                    )
                }
            </div>
        )
    }

}
