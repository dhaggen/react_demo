import React, {useState} from "react";
import {Table} from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {Redirect, withRouter} from "react-router";

const AblationTable = ({ablations, history}: any) => {

    if(!ablations || ablations.length <= 0) {
        return (<></>);
    }
    return(<Paper className="test" elevation={0} square={true}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Patient</TableCell>
                        <TableCell>Utfört</TableCell>
                        <TableCell>Center</TableCell>
                        <TableCell>Åtgärder</TableCell>
                        <TableCell>Ålder</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ablations.map((row:any) => (
                        <TableRow className="row-item" hover={true} key={row.id} onClick={() => history.push(`/patient/${row.patientId}/ablation/${row.id}`)}>
                            <TableCell component="th" scope="row">{row.patientIdentifier}</TableCell>
                            <TableCell>{row.performedAtDate}</TableCell>
                            <TableCell>{row.ablationCenterName}</TableCell>
                            <TableCell>{row.ablationProcedures.join(', ')}</TableCell>
                            <TableCell>{row.patientAge}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default withRouter(AblationTable);