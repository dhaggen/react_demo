import React from "react";
import {Note} from "../Search/Note";
import {Divider} from "@material-ui/core";
import "./Reports.css";
import {ContentHeader, ContentHeaderSubtext, ContentHeaderTitle} from "../Sections/Content/ContentHeader";
import {Content, InnerFormContent} from "../Sections/Content/Content";
//@ts-ignore
import styled from '@emotion/styled/macro';

const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const ReportList = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

const ReportRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
  
  & div:nth-of-type(even) {
    margin-left: 25px;
    flex-grow: 1;
  }
`;

export const Reports = (props:any) => {
    return(<>
        <ContentHeader>
            <ContentHeaderTitle>Rapporter</ContentHeaderTitle>
            <ContentHeaderSubtext>Om kunden önskar skapa specifika rapporter, vänligen kontakta Fredrik Testberg, som är den som kravställer systemet gentemot leverantören UCR. Se menyalternativet "Kontakt" ovan.</ContentHeaderSubtext>
        </ContentHeader>
        <Content>
            <InnerFormContent>
                <h3>Din enhets rapporter</h3>
                <Divider/>
                <ReportList>
                    <ReportRow>
                        <Note title="Kvalitetsindex: Trender & jämförelser" content={content} linkPath="/reports/excel/" linkText="Ladda ned Excelrapport"/>
                        <Note title="Excelrapport" content={content} linkPath="/reports/excel/" linkText="Ladda ned Excelrapport"/>
                    </ReportRow>
                    <ReportRow>
                        <Note title="Koll på läget" content={content} linkPath="/reports/excel/" linkText="Ladda ned Excelrapport"/>
                        <Note title="Produktion" content={content} linkPath="/reports/excel/" linkText="Ladda ned Excelrapport"/>
                    </ReportRow>
                </ReportList>
            </InnerFormContent>
        </Content>
    </>);
};
