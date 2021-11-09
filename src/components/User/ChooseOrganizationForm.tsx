import React, {useContext, useEffect} from 'react';
import {Field, Form, Formik} from "formik";
import {SharedLoginContext} from "../LoginDialog/LoginProvider";
import {Button} from "@material-ui/core";
import {Content, InnerFormContent} from "../Sections/Content/Content";
import {UCRRadioGroup} from "../Form/UCRTextField";

export const ChooseOrganizationForm = ({selectedOrganizationUnit, ...rest}:any) => {
    const loginContext = useContext(SharedLoginContext);
    const organizationUnits = loginContext.userData.availableOrganizationUnits;
    useEffect(() => {
        if(organizationUnits && organizationUnits.length === 1) {
            loginContext.setUserOrganizationUnitByKey(organizationUnits[0].reference.reference);
            let redirectPath = (rest.location.pathname === rest.location.state.from.pathname) ? '/reports/' : rest.location.state.from;
            rest.history.push(redirectPath);
        }

        if(!rest.location.state.userInitiated && loginContext.userData.currentOrganizationUnit && loginContext.userData.currentOrganizationUnit.active) {
            let redirectPath = (rest.location.pathname === rest.location.state.from.pathname) ? '/reports/' : rest.location.state.from;
            rest.history.push(redirectPath);
        }
    }, [organizationUnits]);

    return (

        <Content>
            <InnerFormContent>
            <Formik onSubmit={(values, {setSubmitting}) => {
                loginContext.setUserOrganizationUnitByKey(values.organizationUnitKey)
                    .then(() => { setSubmitting(false); rest.history.push(rest.location.state.from) })
                    .catch(setSubmitting(false));
            }} initialValues={{organizationUnitKey:  selectedOrganizationUnit}}>
                <Form>
                    <Field name="organizationUnitKey" >
                        {({field}: any) => {console.log(field); return (<>
                            <UCRRadioGroup required {...field} label="Enhet" values={organizationUnits.map((unit:any) => ({key: unit.reference.reference, label: unit.name}))} />
                        </>)}}
                    </Field>
                    <Button type="submit">Sätt enhet</Button>
                </Form>
            </Formik>
            </InnerFormContent>
        </Content>
    )
};