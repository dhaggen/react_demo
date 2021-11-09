import React, {useState} from 'react';
import 'url-search-params-polyfill';
import Paper from "@material-ui/core/Paper";
import {SearchAblationForm} from "../Ablation/SearchAblationForm";
import {reject} from "q";
import {LoginConsumer} from "../LoginDialog/LoginProvider";
import AblationTable from "../Patient/AblationTable";
import { polyfill } from 'es6-promise';
import {authFetch} from "../../helpers/authFetch";

export const AblationSearch = () => {
    const [ablations, setAblations] = useState([]);
    const [ablationProcedures, setAblationProcedures] = useState([]);

    polyfill();

    const getAblationProcedures = () => {
        return authFetch(`/kateterablation/api/ablation/procedures/`)
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                reject("Could not get ablation procedures");
            }).then(data => setAblationProcedures(data));
    };

    if(ablationProcedures && ablationProcedures.length <= 0) {
        getAblationProcedures();
    }

    return(<>
            <h3>
                Sök ablationer
            </h3>
            <Paper className="test" elevation={0} square={true}>
                <LoginConsumer>
                    {({isLoggedIn, userData}) =>
                        <>{isLoggedIn ?
                            <SearchAblationForm onFilterResult={(data:any) => {console.log(data); setAblations(data);}} ablationProcedures={ablationProcedures} organizationUnits={userData.availableOrganizationUnits} currentOrganizationUnit={userData.currentOrganizationUnit} />
                            : null}
                        </>
                    }
                </LoginConsumer>
            </Paper>
            <AblationTable ablations={ablations}/>
        </>
    );
};