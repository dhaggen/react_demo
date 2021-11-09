import React from 'react';
import {Route, withRouter} from "react-router";
import {Component} from "react";
import {LoginConsumer} from "../LoginDialog/LoginProvider";

const PrivateRoute = ({ component:Component, ...rest}:any) => {
    const authenticateLogin = (props:any, isLoggedIn:boolean) => {
        if(isLoggedIn) {
            window.scrollTo(0, 0);
            return <Component {...props} />
        } else {
            props.history.push({pathname: "/login/", state: { from: props.location}});
            return <></>;
        }
    };

    return <Route
        {...rest}
        render={props => (
            <LoginConsumer>
                {({isLoggedIn}) =>
                    authenticateLogin(props, isLoggedIn)
                }
            </LoginConsumer>
        )
        }
    />
};

export default withRouter(PrivateRoute);