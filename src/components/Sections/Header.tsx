import React from 'react';
import {Navbar} from "../Navbar/Navbar";
import SearchForm from "../Search/SearchForm";
import './Header.css';
import {UserIcon} from "../User/UserIcon";
import {LoginConsumer} from "../LoginDialog/LoginProvider";
import {RegisterTitle} from "../App/RegisterTitle";

export const Header = () => {
    return (<>
            <div className="header">
                <div className="generalInformation">
                    <LoginConsumer>
                        { ({isLoggedIn}) => (
                            isLoggedIn ?
                                <>
                                    <UserIcon />
                                </> :
                                <></>
                        )}
                    </LoginConsumer>
                    <RegisterTitle/>
                </div>
                <div className="pusher" />

                <LoginConsumer>
                    { ({isLoggedIn}) => (
                        isLoggedIn ?
                        <>
                            <Navbar/>
                            <SearchForm />
                        </> :
                        <></>
                    )}
                </LoginConsumer>
            </div>
        </>
    );
};