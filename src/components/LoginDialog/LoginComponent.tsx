import React, {useContext, useState} from 'react';
import {LoginDialog} from "./LoginDialog";
import {SharedLoginContext} from "./LoginProvider";
import {withRouter} from "react-router-dom";
import {Button} from "@material-ui/core";

const LoginComponent = (props:any) => {
    const [openLoginDialog, setOpenLoginDialog] = useState(false);
    const loginContext = useContext(SharedLoginContext);

    const handleClickLogin = () => {
        setOpenLoginDialog(true);
    };

    const handleDialogExit = () => {
        setOpenLoginDialog(false);
    };

    const LoginButton = () => (
        <>
            <LoginDialog open={ openLoginDialog } onClose={ handleDialogExit } onLoginAttempt={loginContext.attemptLogin}/>
            <Button variant="outlined" color="secondary" onClick={handleClickLogin}>
                Logga in
            </Button>
        </>
    );

    const LogoutButton = () => (
        <Button variant="outlined" color="secondary" onClick={() => loginContext.attemptLogout()}>
            Logga ut
        </Button>
    );

    return (!loginContext.isLoggedIn ? LoginButton() : LogoutButton());
};

export default withRouter(LoginComponent);