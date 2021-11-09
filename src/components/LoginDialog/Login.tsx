import React, {useContext, useEffect, useState} from 'react';
import {LoginForm} from "./LoginForm";
import {Formik} from "formik";
import {SharedLoginContext} from "./LoginProvider";
import * as Yup from "yup";
import {withRouter} from "react-router";
import {Content, InnerFormContent} from "../Sections/Content/Content";

const Login = (props: any) => {
    const [loginVerified, setLoginVerified] = useState(false); // If no page was attempted to be visited, allow User to directly use this page.
    const loginContext = useContext(SharedLoginContext);

    const lastVisitedPage = (props.location.state && props.location.state.from) ? props.location.state.from : '/';

    const LoginSchema = Yup.object().shape({
        username: Yup.string().required("Användarnamn krävs!"),
        password: Yup.string().required("Lösenord krävs!"),
    });

    const isLoggedIn = loginContext.isLoggedIn;
    const retrieveUserData = loginContext.retrieveUserData;
    const attemptLogin = loginContext.attemptLogin;

    useEffect(() => {
        if(!loginVerified && !isLoggedIn) {
            retrieveUserData()
                .then(setLoginVerified(true));
        }
    });

    useEffect( () => {
        if(isLoggedIn) {
            props.history.push({pathname: "/login/chooseUnit/", state: {from: lastVisitedPage}})
        }
    }, [isLoggedIn]);

    const loginForm = () => (
        <Content>
            <InnerFormContent>
                <Formik onSubmit={(values, {setSubmitting, setStatus}) => {
                    setTimeout(() => {
                            attemptLogin(values.username, values.password)
                            .then(() => setSubmitting(false))
                            .catch((error: any) => {
                                setStatus({submission: error});
                                setSubmitting(false);
                            });

                    }, 4000);
                }}
                        validationSchema={LoginSchema}
                        onReset={() => {}}
                        initialValues={{username: '', password: ''}}
                        component={LoginForm}/>
            </InnerFormContent>
        </Content>
    );

    return (
        (!isLoggedIn && loginVerified ? loginForm() : <div></div>)
    )

};

export default withRouter(Login);