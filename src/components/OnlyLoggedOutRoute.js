import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import MyContext from '../Context';

export default ({ component: Component, ...rest }) => {
    return (
        <MyContext.Consumer>
            {context =>
                !context.state.user ? (
                    <Route {...rest} component={Component} />
                ) : (
                    <Redirect to="/home" />
                )
            }
            /> )}
        </MyContext.Consumer>
    );
};
