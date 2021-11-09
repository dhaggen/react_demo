import React, {useContext} from 'react';
import "./UCRModal.css";
import {Field, Form, Formik} from "formik";
import {SharedLoginContext} from "../LoginDialog/LoginProvider";
import * as Yup from "yup";
import {UCRRadioGroup} from "../Form/UCRTextField";

export const UCRModal = (props:{isOpen: boolean, onClose?:Function}) => {
    const loginContext = useContext(SharedLoginContext);
    let organizationUnits = loginContext.userData.availableOrganizationUnits;
    const currentUnit = loginContext.userData.currentOrganizationUnit;

    const OrganizationUnitSchema = Yup.object().shape({
        organizationUnitKey: Yup.string().required("Enhetsval krävs!"),
    });

    const initialUnitReference = (currentUnit.reference ? currentUnit.reference.reference : null);

    if(!loginContext.userData || !organizationUnits) {
        organizationUnits = [];
    }

    if(!props.isOpen) {
        return <></>
    }
    return (
        <div className="UCRModal">
            <div className="UCRModalBox" onClick={(event) => event.stopPropagation()}>
                <Formik onSubmit={(values, {setSubmitting}) => {
                    if(values.organizationUnitKey === initialUnitReference) {
                        setSubmitting(false);
                        (props.onClose ? props.onClose() : undefined)
                    } else {
                        loginContext.setUserOrganizationUnitByKey(values.organizationUnitKey)
                            .then(() => setSubmitting(false))
                            .then(() => (props.onClose ? props.onClose() : undefined));
                    }
                }} validationSchema={OrganizationUnitSchema} initialValues={{organizationUnitKey:  initialUnitReference}}>
                    {({submitForm, setFieldValue}) => (
                        <Form>
                            <div className="UCRModalBoxHeader">
                                <h3>Välj enhet</h3>
                            </div>
                            <div className="UCRModalBoxContent regularText">
                                <Field name="organizationUnitKey" >
                                    {({field}: any) => {console.log(field); return (<>
                                        <UCRRadioGroup required {...field} label="Enhet" values={organizationUnits.map((unit:any) => ({key: unit.reference.reference, label: unit.name}))} />
                                    </>)}}
                                </Field>
                            </div>
                            <div className="UCRModalBoxActions">
                                <div className="button confirm" onClick={() => submitForm()}>
                                    <h6><b>OK</b></h6>
                                </div>
                            </div>
                        </Form>
                    )}

                </Formik>
            </div>
        </div>);
};