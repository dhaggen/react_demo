import React from 'react';
import {Select} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl"

export const OrganizationSelect = ({extraFieldProps, organizationUnits}: any) => (<>
    <FormControl>
        <InputLabel htmlFor={extraFieldProps.name}>Organisationsenhet</InputLabel>
        <Select autoWidth={true} value={""} className="ou-selector" {...extraFieldProps}>
            {organizationUnits.map((organizationUnit: any) => (
                <MenuItem key={organizationUnit.reference.reference} value={organizationUnit.reference.reference}>{organizationUnit.name}</MenuItem>
            ))}
        </Select>
    </FormControl>
    </>
);