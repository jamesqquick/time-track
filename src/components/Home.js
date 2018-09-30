import React from 'react'
import Navbar from './Navbar';
import Button from './Button';
export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Navbar title='Time Track' />
                <div className="container">
                    <Button onBtnClick={() => this.props.history.push('/teams')} btnText='My Teams' />
                    <Button onBtnClick={() => this.props.history.push('/game')} btnText='Start Game' />
                </div>

            </div>
        );
    }


}
