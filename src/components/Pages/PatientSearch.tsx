import React, {useState} from "react";
import Paper from "@material-ui/core/Paper";
import {PatientFilterForm} from "../Search/PatientFilterForm";
import PatientTable from "../Patient/PatientTable";
import {ContentHeader, ContentHeaderSubtext, ContentHeaderTitle} from "../Sections/Content/ContentHeader";
import {Content, InnerFormContent} from "../Sections/Content/Content";

export const PatientSearch = () => {
    const [patients, setPatients] = useState([]);
    return(<>
            <ContentHeader>
                <ContentHeaderTitle>
                    Sök patient
                </ContentHeaderTitle>
                <ContentHeaderSubtext>
                    Sök bland de registrerade patienterna
                </ContentHeaderSubtext>
            </ContentHeader>
            <Content>
                <InnerFormContent>
                    <PatientFilterForm onFilterResult={(data:any) => setPatients(data)} />
                    <PatientTable patients={patients}/>
                </InnerFormContent>
            </Content>
        </>
    );
};