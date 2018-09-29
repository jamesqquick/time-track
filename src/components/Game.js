import React from 'react'
import Navbar from './Navbar';

export default (props) => {
    return (
        <div>
            <Navbar title='Game' onBack={() => props.history.push('/')} />
        </div>
    )
}
