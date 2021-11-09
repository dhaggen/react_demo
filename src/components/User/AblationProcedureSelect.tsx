import {Select} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";

export const AblationProcedureSelect = ({fieldProperties, ablationProcedures}: any) => (
    <Select autoWidth={true} className="age-selector" {...fieldProperties}>
        <MenuItem key="" value=""></MenuItem>
        { ablationProcedures.map((procedure:any) => (
            <MenuItem key={procedure.id} value={procedure.id}>{procedure.label}</MenuItem>
        ))}
    </Select>
);