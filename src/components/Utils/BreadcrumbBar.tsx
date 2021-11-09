import React from 'react';
import {NavLink} from "react-router-dom";
import "./BreadcrumbBar.css";
import {LinkText} from "../Styles/Typo";
//@ts-ignore
import styled from "@emotion/styled/macro";

const LinkToTop = styled.div`
  & > a {
    ${LinkText};
  }
  flex-grow: 0;
`;

const LeftArrow = styled.div`
    border-style: solid;
    border-width: 0 2px 2px 0;
    padding: 3px;
    display: inline-block;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    margin-bottom: 2px;
    margin-right: 5px;
`;

export const BreadcrumbBar = (props:{parentPath: string, backText: string}) => (
    <div className="breadcrumbBar">
        <LinkToTop>
            <NavLink to={props.parentPath} className="breadLink"><LeftArrow /> {props.backText}</NavLink>
        </LinkToTop>
    </div>
);