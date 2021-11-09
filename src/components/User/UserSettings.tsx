import React, {useContext, useState} from 'react';
import {Divider} from "@material-ui/core";
import {SharedLoginContext} from "../LoginDialog/LoginProvider";
import {withRouter} from "react-router-dom";
import {UCRModal} from "../Utils/UCRModal";
//@ts-ignore
import styled from "@emotion/styled/macro";
import {BodyTextMedium, Header6, LinkText} from "../Styles/Typo";

const UserSettingsWrapper = styled.div`
    margin: 15px 20px;
    width: 350px;
    color: rgba(0, 0, 0, 0.9);
`;

const Username = styled.h6`
  ${Header6};
`;

const UserRoles = styled.span`
  ${BodyTextMedium}
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 9px 0;
`;

const CurrentOrganizationUnit = styled.div`
  display: flex;
  flex-grow: 1;
`;

const SettingsLink = styled.div`
  width: 80px;
  display: flex;
  flex-grow: 0;
  ${BodyTextMedium}
  ${LinkText}
`;

const UserSettings = (props:any) => {
    const loginContext = useContext(SharedLoginContext);
    const [openChangeUnit, setOpenChangeUnit] = useState(false);
    const userSettings = loginContext.userData;

    const translateRoles = (authorities:Array<object>) => {
        let currentAuths = authorities.map((auth:any) => auth.authority);
        if(currentAuths.includes("ROLE_SYSADMIN")) {
            return `Systemadministratör`
        }
        if(currentAuths.includes("ROLE_USER")) {
            return `Systemanvändare`
        }
    };

    return (
    <UserSettingsWrapper>
        <Username>{userSettings.personalInfo.firstName || ``} {userSettings.personalInfo.lastName || ``}</Username>
        <UserRoles>
            { translateRoles(userSettings.authorities) }
        </UserRoles>

        <FlexRow>
            <CurrentOrganizationUnit>{userSettings.currentOrganizationUnit.name || `None selected`}</CurrentOrganizationUnit>
            <SettingsLink onClick={() => { setOpenChangeUnit(true); } }>Byt enhet &rt; </SettingsLink>
        </FlexRow>

        <UCRModal isOpen={openChangeUnit} onClose={() => setOpenChangeUnit(false)} />

        <Divider />

        <FlexRow>
            <span className="currentLanguage">{userSettings.currentLanguage || `Svenska`}</span>
        </FlexRow>
        <FlexRow>
            <SettingsLink onClick={() => { loginContext.attemptLogout().finally(() => props.history.push('/login/')); } }>Logga ut</SettingsLink>
        </FlexRow>
    </UserSettingsWrapper>
)};

export default withRouter(UserSettings);
