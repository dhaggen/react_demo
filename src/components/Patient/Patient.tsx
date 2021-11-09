import React, {useEffect, useRef, useState} from "react";
import {authFetch} from "../../helpers/authFetch";
import {Button, Divider} from "@material-ui/core";
import {ContentHeader, ContentHeaderSubtext, ContentHeaderTitle} from "../Sections/Content/ContentHeader";
import {Content, InnerFormContent} from "../Sections/Content/Content";
import {FoldableSection} from "../Utils/FoldableSection";
import {Table} from "../Utils/Table";
import {Field, Form, Formik, FormikValues} from "formik";
import {reject} from "q";
import * as Yup from 'yup';
import {ErrorInfoBox, UCRRadioGroup, UCRTextField} from "../Form/UCRTextField";
//@ts-ignore
import styled from '@emotion/styled/macro';
import {FormFooter} from "../Form/FormFooter";


export interface Patient {
    id: number
    initialLegalAuthenticator: string,
    latestLegalAuthenticator: string,
    identifier: string,
    identifierType: IDENTIFIER_TYPE,
    birthDate: Date,
    firstName: string,
    lastName: string,
    deRegistrationStatus: any,
    street: string,
    postalCode: string,
    city: string,
    sex: SEX,
    county: string,
    email: string
}

export interface Event {
    eventId: number,
    eventType: string,
    eventName: string,
    eventDate: Date,
    controlDate: Date,
    triggeredBy: string,
    centerId: string,
    relatedEntityId: number,
}

enum SEX {
    MALE = "MALE",
    FEMALE = "FEMALE",
    UNKNOWN = "UNKNOWN",
}

enum IDENTIFIER_TYPE {
    SOCIAL_SECURITY_NUMBER = "SOCIAL_SECURITY_NUMBER",
    TEMPORARY = "TEMPORARY",
    UNKNOWN = "UNKNOWN"
}

const patientInfoValidationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'För kort')
        .required( 'Skriv in ett förnamn' ),
    lastName: Yup.string()
        .min(2, 'För kort')
        .required('Skriv in ett efternamn'),
    email: Yup.string()
        .min(2, 'För kort')
        .email('Skriv in en giltig e-postadress'),
});


const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const PatientForm = (patient:Patient, patientUpdateFunction:Function, formRef:any) => {
    return(<Formik ref={formRef} onSubmit={(values, {setSubmitting}) => {
        console.log(values);
        return authFetch(`/kateterablation/api/patient/${patient.id}/`, {method: "PUT", body: JSON.stringify(values), headers: {"Content-Type": "application/json"}})
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                return reject("Retrieval of User data failed with code " + response.statusText);
            })
            .then( (data) => patientUpdateFunction(data))
            .then(() => setSubmitting(false));
    }}
           validationSchema={patientInfoValidationSchema}
           initialValues={patient}>
        {({values, isSubmitting, errors}) => (
            <StyledForm noValidate>
                <ErrorInfoBox />
                <UCRTextField label="ID" disabled value={values.id} />
                <UCRTextField label="Personnummer" disabled value={values.identifier} />

                <Field name="sex" disabled={isSubmitting}>
                    {({field}: any) => <>
                        <UCRRadioGroup required {...field} label="Kön" values={[{key: SEX.MALE, label: "Man"}, {key: SEX.FEMALE, label: "Kvinna"}, {key: SEX.UNKNOWN, label: "Ospecifierat"}]} />
                        </>}
                </Field>

                <Field name="firstName">
                    {({field}: any) => (
                        <UCRTextField disabled={isSubmitting} errors={errors.firstName} required={true} label="Förnamn" error={errors.firstName} helperText={errors.firstName ? errors.firstName : `Patientens tilltalsnamn`} {...field} />
                    )}
                </Field>
                <Field name="lastName" >
                    {({field}: any) => (
                        <UCRTextField disabled={isSubmitting} errors={errors.lastName} required={true} label="Efternamn" error={errors.lastName} helperText={errors.lastName ? errors.lastName : `Patientens efternamn`} {...field} />
                    )}
                </Field>
                <Field name="street" >
                    {({field}: any) => (
                        <UCRTextField disabled={isSubmitting} label="Adress" helperText="Patientens adress" {...field} />
                    )}
                </Field>
                <Field name="postalCode" >
                    {({field}: any) => (
                        <UCRTextField disabled={isSubmitting} label="Postnummer" helperText="Patientens postnummer" {...field} />
                    )}
                </Field>
                <Field name="city" >
                    {({field}: any) => (
                        <UCRTextField disabled={isSubmitting} label="Ort" helperText="Patientens hemort" {...field} />
                    )}
                </Field>
                <Field name="county">
                    {({field}: any) => (
                        <UCRTextField disabled={isSubmitting} label="Län" helperText="Länet där patientens hemort ligger (2 siffror, t.ex. 03 = Uppsala)" {...field} />
                    )}
                </Field>
                <Field name="email">
                    {({field}: any) => (
                        <UCRTextField disabled={isSubmitting} fullWidth errors={errors.email} label="E-postadress"  error={errors.email} helperText={errors.email ? errors.email : `Patientens epostadress`} {...field} />
                    )}
                </Field>
            </StyledForm>
        )}
    </Formik>);
};

const birthdateToAge = (birthDate:Date) => {
    let currentDate = new Date();
    let ageDate = new Date(birthDate);
    return Math.abs(ageDate.getUTCFullYear() - currentDate.getUTCFullYear());
};

const translateGender = (gender:SEX) => {
    switch(gender) {
        case SEX.MALE:
            return "Man";
        case SEX.FEMALE:
            return "Kvinna";
        case SEX.UNKNOWN:
            return "Kön saknas";
    }
};

const PatientFormHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

const PatientInfo = (props:{patient: Patient}) => (
    <>
        <b>{props.patient.identifier ? `${props.patient.identifier.slice(0, -4)}-${props.patient.identifier.slice(-4)}` : ``}</b>
        &nbsp;&nbsp;
        {translateGender(props.patient.sex) ||``} {`${birthdateToAge(props.patient.birthDate)} år` || ``}
    </>
);

const Patient = (props: any) => {
    const [patient, setPatient] = useState<Patient>({} as Patient);
    const [events, setEvents] = useState<Array<Event>>([]);
    const formRef = useRef({} as Formik<FormikValues>);


    useEffect(() => {
        authFetch(`/kateterablation/api/patient/${props.match.params.id}`)
            .then((response) => response.json())
            .then((data) => setPatient(data as Patient));
    }, []);

    useEffect( () => {
        if(patient.id) {
            authFetch(`/kateterablation/api/patient/${patient.id}/events`)
                .then((response) => response.json())
                .then((data) => setEvents(data));
        }
    }, [patient]);

    return(
        <>
            <ContentHeader style="small">
                <ContentHeaderTitle>
                   {patient.firstName || ``} {patient.lastName || ``}
                </ContentHeaderTitle>
                <ContentHeaderSubtext>
                    <PatientInfo patient={patient} />
                </ContentHeaderSubtext>
            </ContentHeader>
            <Content>
                <InnerFormContent>
                    <PatientFormHeader>
                        <h3>Personuppgifter</h3>
                        <span>Senast ändrad {events.length > 0 ? events[0].eventDate : null}</span>
                    </PatientFormHeader>
                    <Divider/>
                    {patient.id ? PatientForm(patient, setPatient, formRef) : null}
                    <FormFooter topAnchor="#pageTop" onSave={() => { if(formRef.current) { formRef.current.submitForm(); }}} onPublish={() => {}} component={<PatientInfo patient={patient} />}/>
                    <FoldableSection title="Ändringshistorik" folded={true}>
                        <Table events={events}/>
                    </FoldableSection>
                </InnerFormContent>
            </Content>
        </>
    );
};

export default Patient;