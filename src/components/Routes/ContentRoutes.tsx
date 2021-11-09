import React from 'react';
import {Route, Switch} from "react-router";
import {Home} from "../Pages/Home";
import {Contact} from "../Pages/Contact";
import {Help} from "../Pages/Help";
import {AblationSearch} from "../Pages/AblationSearch";
import {PatientSearch} from "../Pages/PatientSearch";
import {NotFound} from "../Pages/NotFound";
import Patient from "../Patient/Patient";
import {Reports} from "../Reports/Reports";
import PrivateRoute from "./PrivateRoute";
import Login from "../LoginDialog/Login";
import {ChooseOrganizationForm} from "../User/ChooseOrganizationForm";
import {ExcelReport} from "../Reports/ExcelReport";
import {Support} from "../Pages/Support";

export const ContentRoutes = () => (
<Switch>
        <PrivateRoute exact path="/" component={Home}/>
        <PrivateRoute exact path="/contact/" component={Contact}/>
        <PrivateRoute exact path="/support/" component={Support}/>
        <PrivateRoute exact path="/help/" component={Help}/>
        <PrivateRoute path="/ablation/search/" exact component={AblationSearch}/>
        <PrivateRoute path="/patient/search/" exact component={PatientSearch}/>
        <PrivateRoute path='/patient/:patientId/ablation/:ablationId' exact component={NotFound} />
        <PrivateRoute path='/patient/:id' exact component={Patient} />
        <PrivateRoute path='/reports/' exact component={Reports} />
        <PrivateRoute path='/reports/excel/' exact component={ExcelReport} />
        <Route exact path="/login/" component={Login} />
        <PrivateRoute exact path="/login/chooseUnit/" component={ChooseOrganizationForm} />

        <Route exact component={NotFound} />
</Switch>
);