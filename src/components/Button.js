import React from 'react'

export default (props) => {
  return (
    <button className="btn" onClick={props.onBtnClick}>{props.btnText}</button>

  )
}
