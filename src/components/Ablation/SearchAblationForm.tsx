import React from 'react';
import {Field, Form, Formik} from "formik";
import 'url-search-params-polyfill';
import {reject} from "q";
import {Button} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import { polyfill } from 'es6-promise';
import {OrganizationSelect} from "../User/OrganizationSelect";
import {DateFormatInput} from "material-ui-next-pickers";
import {AblationProcedureSelect} from "../User/AblationProcedureSelect";
import {authFetch} from "../../helpers/authFetch";

interface AblationSearchFilter {
    fromDate: string,
    toDate: string,
    ssn: string,
    procedure: string,
    centreKey: string,
}

export const SearchAblationForm = (props: {onFilterResult: Function, ablationProcedures: Array<Object>, organizationUnits: Array<Object>, currentOrganizationUnit: any}) => {
    polyfill();
    const toQueryString = (paramsObject: any) => {
        return Object
            .keys(paramsObject)
            .filter( key => paramsObject[key])
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(paramsObject[key])}`)
            .join('&')
            ;
    };

    const formatDate = (date:Date) => {
        if(!date) {
            return "";
        }
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return `${year}-${month}-${day}`;
    };

    const filterAblations = (formValues: any) => {
        let filterValues: AblationSearchFilter = {
            fromDate: formatDate(formValues.dateRange.from),
            toDate: formatDate(formValues.dateRange.to),
            ssn: formValues.patientId,
            procedure: formValues.ablationProcedure,
            centreKey: formValues.center,
        };

        return authFetch(`/kateterablation/api/ablation/filter?${toQueryString(filterValues)}`)
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                reject("Other error");
            })
    };

    return(<Formik onSubmit={(values, {setSubmitting}) => {
        filterAblations(values)
            .then(data => props.onFilterResult(data))
            .finally(() => setSubmitting(false));
    }}
                   initialValues={{dateRange: {from: "", to: ""}, patientId: "", ablationProcedure: "", center: props.currentOrganizationUnit.reference.reference}}>
        {({values, isSubmitting, setFieldValue}) => (
            <Form className="row-form">
                <FormLabel component="label">Från datum</FormLabel>
                <Field name="dateRange.from" >
                    {({field}: any) => (
                        <DateFormatInput name={field.name} onChange={(value) => setFieldValue(field.name, value)} value={field.value}/>
                    )}
                </Field>
                <FormLabel component="label">Till datum</FormLabel>
                <Field name="dateRange.to" >
                    {({field}: any) => (
                        <DateFormatInput name={field.name} onChange={(value) => setFieldValue(field.name, value)} value={field.value}/>
                    )}
                </Field>
                <FormLabel component="label">Patient Id</FormLabel>
                <Field name="patientId" >
                    {({field}: any) => (
                        <TextField {...field} />
                    )}
                </Field>
                <Field name="ablationProcedure" >
                    {({field}: any) => (
                        <AblationProcedureSelect fieldProperties={field} ablationProcedures={props.ablationProcedures} />
                    )}
                </Field>
                <Field name="center" >
                    {({field}: any) => (
                        <OrganizationSelect extraFieldProps={field} organizationUnits={props.organizationUnits}/>
                    )}
                </Field>
                <Button type="submit" color="primary" variant="contained" disabled={isSubmitting}>
                    { isSubmitting ? <>Söker ablationer <CircularProgress className="loading" size={15}/></> : "Sök Ablation"}
                </Button>
            </Form>
        )}
    </Formik>)
};