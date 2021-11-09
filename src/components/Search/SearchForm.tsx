import React, {useRef, useState} from 'react';
import {Field, Form, Formik} from "formik";
import "./SearchForm.css";
import {withRouter} from "react-router";
import {reject} from "q";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import {Info} from "@material-ui/icons";
import {authFetch} from "../../helpers/authFetch";
import CircularProgress from "@material-ui/core/CircularProgress";
import {HeaderDropdown} from "../Navbar/HeaderDropdown";
import {SearchInfo} from "./SearchInfo";
//@ts-ignore
import styled from "@emotion/styled/macro";
import {InputBase} from "@material-ui/core";

const StyledInfo = styled(Info)`
  color: #61a60f;
  margin: 0 10px;
  cursor: help;
`;


const SearchForm = (props: any) => {
    const anchorRef = useRef(null);
    const [hoveringTooltip, setHoveringTooltip] = useState(false);

    const searchForSpecificPatient = (searchValue: string) => {
        return authFetch("/kateterablation/api/patient/search/" + searchValue)
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                return reject("Other error");
            })
            .then(data => {
                // @ts-ignore
                if(data.length > 0) {
                    return data;
                }
                return reject("Not found");
            })
    };

    return(<Formik ref={anchorRef} onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
            searchForSpecificPatient(values.searchValue)
                .then( (data:any) => { props.history.push(`/patient/${data[0].id}`)} )
                .catch(error => setSubmitting(false))
                .finally(() => setSubmitting(false));
        }, 4000);
    }}
            initialValues={{searchValue: ''}}>
        {({isSubmitting}) => (
            <Form className="searchForm" >
                <Field name="searchValue" type="search">
                    {({field}: any) => (
                        <InputBase className="searchField" autoFocus {...field} type="text" disabled={isSubmitting} disableUnderline={true} placeholder="Personnr/id-nr"
                               startAdornment={
                                   (<StyledInfo onMouseEnter={() => setHoveringTooltip(true)} onMouseLeave={() => setHoveringTooltip(false)} />)
                               }

                               endAdornment={
                                   (<Button variant="contained" color="primary" className="searchButton" type="submit">
                                       { isSubmitting ?  <CircularProgress color="inherit" size={24} /> : 'Sök'}
                                   </Button>)
                               }
                        />
                    )}
                </Field>
                <div>
                    { hoveringTooltip ? <HeaderDropdown component={SearchInfo} anchorRef={anchorRef} /> : null}
                </div>
            </Form>
        )}
    </Formik>)
};

export default withRouter(SearchForm);
