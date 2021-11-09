import React from 'react';
import {Field, Form, FormikValues} from "formik";
import {Button, TextField} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

export const LoginForm = (props: FormikValues) => {
    return (
    <Form>
        <Field name="username">
            {({ field }: any) => (<>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Användarnamn"
                    type="text"
                    fullWidth
                    error={'username' in props.errors && 'username' in props.touched}
                    disabled={props.isSubmitting}
                    {...field}
                />
                </>
            )}
        </Field>
        <Field name="password">
            {({ field }: any) => (
                <>
                <TextField
                    id="password"
                    label="Lösenord"
                    type="password"
                    margin="dense"
                    error={'password' in props.errors && 'password' in props.touched}
                    fullWidth
                    disabled={props.isSubmitting}
                    {...field}
                />
                </>
            )}
        </Field>
        { props.status && props.status.submission ? <p>{props.status.submission}</p> : null }
        <Button type="reset" color="primary" disabled={props.isSubmitting}>
            Avbryt
        </Button>
        <Button type="submit" color="primary" variant="contained" disabled={props.isSubmitting || !props.isValid}>
            { props.isSubmitting ? <>Loggar in <CircularProgress className="loading" size={15} /></> : "Logga in"}
        </Button>
    </Form>
)};