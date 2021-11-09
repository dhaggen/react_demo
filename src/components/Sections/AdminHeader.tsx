import React, {useContext} from 'react';
//@ts-ignore
import styled from '@emotion/styled/macro';
import {SharedLoginContext} from "../LoginDialog/LoginProvider";
import {NavLink} from "react-router-dom";
import {BodyTextMedium} from "../Styles/Typo";
import {Blue, Green} from "../Styles/Colors";

const AdminBarWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  &:first-child {
    margin-left: 50px;
  }
`;

const AdminBarItem = styled.div`
  background-color: ${(props:any) => props.isAdminPage ? Blue.Lighter : Green.Darker};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  margin-left: 5px;
  margin-top: 8px;
  height: 24px;
`;

const AdminBarLink = styled(NavLink)`
  &.active {
    cursor: default;
    color: #ffffff;
  }
  
  ${BodyTextMedium};
  text-align: center;
  margin: 0 12px;
  text-decoration: none;
  font-weight: 500;
  
`;

export const AdminHeader = () => {
    const loginContext = useContext(SharedLoginContext);
    const userSettings = loginContext.userData;

    const translateRoles = (authorities:Array<object>) => {
        if(!authorities) {
            return false;
        }
        let currentAuths = authorities.map((auth:any) => auth.authority);
        return currentAuths.includes("ROLE_SYSADMIN");
    };

    const isAdmin = translateRoles(userSettings.authorities);

    return (isAdmin ?
        <AdminBarWrapper>
            <AdminBarItem>
                <AdminBarLink to="/reports/">Kvalitetsregistret</AdminBarLink>
            </AdminBarItem>
            <AdminBarItem isAdminPage={true}>
                <AdminBarLink to="/admin/">Administrera</AdminBarLink>
            </AdminBarItem>
        </AdminBarWrapper> :
        <></>)
};
