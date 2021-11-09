import React from 'react';
import {LoginConsumer} from "../LoginDialog/LoginProvider";

export const OrganizationUnit = () => (
    <LoginConsumer>
        { ({userData}) =>
            {
                return userData.currentOrganizationUnit ? <h6 className="organizationUnit">{userData.currentOrganizationUnit.name || 'No organization unit found.'}</h6> : <></>
            }
        }
    </LoginConsumer>
);