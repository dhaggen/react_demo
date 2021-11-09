import React from "react";
import {Table} from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import {Redirect, withRouter} from "react-router";
//@ts-ignore
import styled from '@emotion/styled/macro';

const StyledTable = styled(Table)`
  margin: 15px 55px;
`;

const StyledRow = styled(TableRow)`
  background-color: ${(props:any) => props.ishead ? '#397c93' : '#ffffff'};
  height: 43px;
  cursor: pointer;
  
  & th, td {
    font-size: 12px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.67;
    letter-spacing: 0.5px;
    text-align: center;
    font-family: 'Rubik', sans-serif !important;
    color: ${(props:any) => props.ishead ? '#ffffff' : '#000000'};
  }
  
  & th:first-child {
      border-top-left-radius: 6px;
  }
  
  & th:last-child {
      border-top-right-radius: 6px;
  }
`;



const UCRTable = ({patients, history}: any) => {

    if(!patients || patients.length <= 0) {
        return (<></>);
    }
    return(
            <StyledTable>
                <TableHead>
                    <StyledRow ishead={true}>
                        <TableCell>Identifierare</TableCell>
                        <TableCell>Kön</TableCell>
                        <TableCell>Förnamn</TableCell>
                        <TableCell>Efternamn</TableCell>
                        <TableCell>Stad</TableCell>
                        <TableCell>Län</TableCell>
                    </StyledRow>
                </TableHead>
                <TableBody>
                    {patients.map((row:any) => (
                    <StyledRow className="row-item" hover={true} key={row.id} onClick={() => history.push({ pathname: `/patient/${row.id}`, state: { patientData: row }})}>
                        <TableCell component="td" scope="row">{row.identifier}</TableCell>
                        <TableCell>{row.sex}</TableCell>
                        <TableCell>{row.firstName}</TableCell>
                        <TableCell>{row.lastName}</TableCell>
                        <TableCell>{row.city}</TableCell>
                        <TableCell>{row.county}</TableCell>
                    </StyledRow>
                    ))}
                </TableBody>
            </StyledTable>
    );
};

export default withRouter(UCRTable);
