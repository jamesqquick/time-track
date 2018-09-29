import React from 'react'

export default (props) => {
    return (
        <nav id="nav">
            <div className="menu-btn" id="backBtn" onClick={props.onBack}>{props.onBack ? 'Back' : ''}</div>
            <p>{props.title}</p>
            <div className="menu-btn" onClick={props.onMenu}>{props.menuItemText}</div>
        </nav>
    )
}
