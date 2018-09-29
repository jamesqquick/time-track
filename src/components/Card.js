import React from 'react'

export default class Card extends React.Component {
    render() {

        return (
            <div className="card" onClick={this.props.onCardClick}>
                <div className="card-badge">
                    <div className="card-badge__title">{this.props.badgeTitle}</div>
                    <div className="card-badge__subtitle">{this.props.badgeSubtitle}</div>
                </div>
                <div className="card-content">
                    <div className="card-content__title">{this.props.title}</div>
                    <div className="card-content__subtitle">{this.props.subtitle}</div>
                </div>
                <div className="card-menu">
                    <button className="card-menu__btn" onClick={this.onMenuBtnClick}>{this.props.menuBtnText}</button>
                </div>
            </div>
        )
    }

    onMenuBtnClick = (e) => {
        e.stopPropagation();
        this.props.onMenuBtnClick();
    }
}

