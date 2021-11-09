import React from 'react';
import {Field, Form, Formik} from "formik";
import 'url-search-params-polyfill';
import {reject} from "q";
import {Button, Select} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import "./PatientFilterForm.css";
import {authFetch} from "../../helpers/authFetch";

enum PatientGender {
    Male = 'MALE', Female = 'FEMALE', Unspecified = ''
}

export const PatientFilterForm = (props: {onFilterResult: Function}) => {

    const filterPatients = (filterValue: any) => {
        let ageRange = ``;
        if(!filterValue.ageRange.ignore) {
            ageRange = `&minAge=${filterValue.ageRange.min}&maxAge=${filterValue.ageRange.max}`;
        }

        return authFetch(`/kateterablation/api/patient/filter/?sexes=${filterValue.gender}${ageRange}`)
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                reject("Other error");
            })
    };

    return(<Formik onSubmit={(values, {setSubmitting}) => {
        filterPatients(values)
            .then(data => props.onFilterResult(data))
            .finally(() => setSubmitting(false));
    }}
                   initialValues={{gender: PatientGender.Unspecified, ageRange: {min: 0, max: 100, ignore: true}}}>
        {({values, isSubmitting}) => (
            <Form className="row-form">
                <Field name="gender">
                    {({field}: any) => (
                        <>
                            <FormLabel component="label">Kön</FormLabel>
                            <RadioGroup {...field} label="Kön" className="genderPicker">
                                <FormControlLabel disabled={isSubmitting} value={PatientGender.Male} control={<Radio/>}
                                                  label="Man"/>
                                <FormControlLabel disabled={isSubmitting} value={PatientGender.Female} control={<Radio/>}
                                                  label="Kvinna"/>
                                <FormControlLabel disabled={isSubmitting} value={PatientGender.Unspecified} control={<Radio/>}
                                                  label="Ospecifierat"/>
                            </RadioGroup>
                        </>
                    )}
                </Field>
                <FormLabel component="label">Åldersspann</FormLabel>
                <Field name="ageRange.min" >
                    {({field}: any) => (
                        <Select disabled={values.ageRange.ignore} className="age-selector" {...field}>
                            <MenuItem value={0}>Noll</MenuItem>
                            <MenuItem value={10}>Tio</MenuItem>
                            <MenuItem value={20}>Tjugo</MenuItem>
                            <MenuItem value={30}>Trettio</MenuItem>
                            <MenuItem value={40}>Förtio</MenuItem>
                            <MenuItem value={50}>Femtio</MenuItem>
                            <MenuItem value={60}>Sextio</MenuItem>
                            <MenuItem value={70}>Sjuttio</MenuItem>
                            <MenuItem value={80}>Åttio</MenuItem>
                            <MenuItem value={90}>Nittio</MenuItem>
                        </Select>
                    )}
                </Field>
                <FormLabel component="label">till</FormLabel>
                <Field name="ageRange.max" >
                    {({field}: any) => (
                        <Select disabled={values.ageRange.ignore} className="age-selector" {...field}>
                            <MenuItem value={10}>Tio</MenuItem>
                            <MenuItem value={20}>Tjugo</MenuItem>
                            <MenuItem value={30}>Trettio</MenuItem>
                            <MenuItem value={40}>Förtio</MenuItem>
                            <MenuItem value={50}>Femtio</MenuItem>
                            <MenuItem value={60}>Sextio</MenuItem>
                            <MenuItem value={70}>Sjuttio</MenuItem>
                            <MenuItem value={80}>Åttio</MenuItem>
                            <MenuItem value={90}>Nittio</MenuItem>
                            <MenuItem value={100}>Ett hundra</MenuItem>
                        </Select>
                    )}
                </Field>
                <FormLabel component="label">Sök utan ålder</FormLabel>
                <Field name="ageRange.ignore">
                    {({field}: any) => (
                        <Checkbox checked={values.ageRange.ignore} {...field} value="ageRange.ignore"/>
                    )}
                </Field>
                <Button type="submit" color="primary" variant="contained" disabled={isSubmitting}>
                    { isSubmitting ? <>Söker patienter <CircularProgress className="loading" size={15}/></> : "Sök patient"}
                </Button>
            </Form>
        )}
    </Formik>)
};