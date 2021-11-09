import React, {Component} from "react";
import 'url-search-params-polyfill';
import {reject} from "q";
import {authFetch} from "../../helpers/authFetch";

export const SharedLoginContext = React.createContext<any>({});
export const LoginConsumer = SharedLoginContext.Consumer;

export class LoginProvider extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isLoggedIn: false,
            attemptLogin: this.attemptLogin,
            attemptLogout: this.attemptLogout,
            retrieveUserData: this.retrieveUserData,
            setUserOrganizationUnitByKey: this.setUserOrganizationUnitByKey,
            userData: {},
        };
    };

    retrieveUserData = () => {
        return authFetch('/kateterablation/api/user/')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                return reject("Retrieval of User data failed with code " + response.statusText);
            }).then((data: any) =>
                this.setState({userData: data, isLoggedIn: true}));
    };

    attemptLogin = (username: string, password: string) => {
        let formData = new URLSearchParams({j_username: username, j_password: password});
        return authFetch('/kateterablation/j_spring_security_check',
            {
                method: "POST",
                body: formData,
            })
            .then(response => {
                return response.text().then(data => {
                    if (response.ok) {
                        return data;
                    }
                    return reject(data);
                });
            })
            .then(() => this.retrieveUserData());
    };

    attemptLogout = () => {
        return authFetch("kateterablation/j_spring_security_logout").then(() => this.setState({
            userData: {},
            isLoggedIn: false
        }));
    };

    setUserOrganizationUnitByKey = (key: string) => {
        let ou = this.findOrganizationUnit(key);
        return authFetch('/kateterablation/api/user/unit', {method: "POST", body: JSON.stringify(ou), headers: {"Content-Type": "application/json"}})
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                return reject("Retrieval of User data failed with code " + response.statusText);
            })
            .then(data => {
                let currentData = this.state.userData;
                currentData.currentOrganizationUnit = data;
                this.setState({userData: currentData});
                console.log(this.state.userData);
            })
    };

    findOrganizationUnit = (key: string) => {
        let foundOrganizationUnit = null;
        if (this.state.userData.availableOrganizationUnits) {
            this.state.userData.availableOrganizationUnits.forEach((ou: any) => {
                if (ou.reference.reference === key) {
                    foundOrganizationUnit = ou;
                }
            })
        }
        return foundOrganizationUnit;
    };

    render = () => {
        return (
            <SharedLoginContext.Provider value={this.state}>
                {this.props.children}
            </SharedLoginContext.Provider>
        )
    }
}
