import React from 'react';
import {NavLink} from "react-router-dom";
//@ts-ignore
import styled from '@emotion/styled/macro';
import {BodyTextMedium, Header3, LinkText} from "../Styles/Typo";

const NoteContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.07);
    border-radius: 6px;
`;

const NoteTitle = styled.h3`
    ${Header3};
    margin: 40px 20px 30px 30px;
    color: #488400;
`;

const NoteContent = styled.div`
    margin: 20px 30px;
    ${BodyTextMedium};
`;

const NoteFooter = styled.div`
    margin: 20px 40px 30px 30px;
    
    & > a {
      ${LinkText};
    }
`;

const RightArrow = styled.div`
    border-style: solid;
    border-width: 0 2px 2px 0;
    padding: 3px;
    display: inline-block;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    margin-bottom: 1px;
    margin-left: 5px;
`;

export const Note = (props:any) => (
    <NoteContainer>
        <NoteTitle>{props.title}</NoteTitle>
        <NoteContent>
            {props.content}
        </NoteContent>
        <NoteFooter>
            <NavLink to={props.linkPath}>{props.linkText}<RightArrow /></NavLink>
        </NoteFooter>
    </NoteContainer>
);