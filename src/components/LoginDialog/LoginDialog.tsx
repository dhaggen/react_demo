import React from "react";
import {Dialog} from "@material-ui/core";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import {LoginForm} from "./LoginForm";
import {Formik} from "formik";
import * as Yup from 'yup';

interface LoginDialogProps {
    open: boolean,
    onClose: Function,
    onLoginAttempt: Function,
}

export const LoginDialog = (props: LoginDialogProps) => {

    const LoginSchema = Yup.object().shape({
        username: Yup.string().required("Användarnamn krävs!"),
        password: Yup.string().required("Lösenord krävs!"),
    });

    return (
        <Dialog open={props.open} onClose={() => props.onClose()} fullWidth maxWidth="sm" aria-labelledby="form-dialog-title">
            <DialogTitle>
                Logga in
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Mata in ditt anv&auml;ndarnamn och lösenord i systemet nedan.<br/> Ditt lösenord kommer d&ouml;ljas direkt du matar in det.
                </DialogContentText>
                <Formik onSubmit={(values, {setSubmitting, setStatus}) => {
                    props.onLoginAttempt(values.username, values.password)
                        .then(() => setSubmitting(false))
                        .then(() => props.onClose())
                        .catch((error: any) => {
                            setStatus({submission: error});
                            setSubmitting(false);
                        });
                }}
                        validationSchema={LoginSchema}
                        onReset={() => props.onClose()}
                        initialValues={{username: '', password: ''}}
                        component={LoginForm}/>
            </DialogContent>
        </Dialog>
    );
};