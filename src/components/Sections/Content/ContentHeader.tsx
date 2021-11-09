import React from 'react';
import './ContentHeader.css';
import {SaveAlt} from "@material-ui/icons";
//@ts-ignore
import css from '@emotion/css/macro';
//@ts-ignore
import styled from '@emotion/styled/macro';
import {BodyTextMedium, Header2, Header6} from "../../Styles/Typo";

const ContentHeaderText = styled.div`
    margin: 30px 55px 30px 55px;
    flex-grow: 1;
`;

const ContentHeaderWrapper = styled.div`
    background-color: #c6e59b;
    display: flex;
    ${(props:any) => props.isSmall ? small : large};

`;

export const ContentHeaderTitle = styled.div`
  margin-bottom: 15px;
  ${Header2};
`;

export const ContentHeaderSubtext = styled.div`
  ${BodyTextMedium}
`;

const large = css`
    height: 160px;
`;

const small = css`
    height: 64px;
    position: -webkit-sticky;
    position: sticky;
    z-index: 1;
    top: 0;
    
    ${ContentHeaderText} {
      margin: 8px 55px 8px 55px;
    }
    ${ContentHeaderTitle} {
      ${Header6};
      margin-bottom: 0;
    }
`;



export const ContentHeader = (props:any) => {
    return (
        <ContentHeaderWrapper isSmall={props.style === "small"}>
            <ContentHeaderText>
                {props.children.filter((child:any) => child.type.displayName ==='ContentHeaderTitle' || child.type.displayName ==='ContentHeaderSubtext')}
            </ContentHeaderText>
            <div className="contentHeaderNotes">
                {props.children.filter((child:any) => child.type.name ==='ContentHeaderNote')}
            </div>
        </ContentHeaderWrapper>
    );
};

export const ContentHeaderNote = (props:any) => (
    <div className={`note contentHeaderNote`}>
        {props.children}
    </div>
);

/*export const ContentHeaderTitle = (props:any) => (
    <ContentHeaderTitleStyled>{props.children}</ContentHeaderTitleStyled>
);*/

/*export const ContentHeaderSubtext = (props:any) => (
    <ContentHeaderSubtextStyled>{props.children}</ContentHeaderSubtextStyled>
);*/

export const DownloadLink = (props:any) => (
    <span className="downloadLink" onClick={() => props.onClick || console.log("Clicked on link")}>
        <SaveAlt className="saveIcon" style={{ fontSize: 24 }}/><span className="downloadLinkText">{props.children}</span>
    </span>
);