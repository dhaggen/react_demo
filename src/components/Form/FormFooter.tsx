import React, {Component} from 'react';
//@ts-ignore
import styled from "@emotion/styled/macro";
import {LinkText} from "../Styles/Typo";
import {UCRButton} from "./UCRTextField";

const FormFooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

const LinkToTop = styled.div`
  & > a {
    ${LinkText};
  }
  flex-grow: 0;
`;

const Pusher = styled.div`
  flex-grow: 3;
`;

const Content = styled.div`
  margin: 0 25px;
`;

const Actions = styled.div`
  ${UCRButton} {
    margin-left: 25px;
  }
`;

const UpArrow = styled.div`
    border-style: solid;
    border-width: 0 2px 2px 0;
    padding: 3px;
    display: inline-block;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    margin-bottom: 1px;
    margin-right: 5px;
`;

export const FormFooter = ({
                               component,
                               onPublish,
                               onSave
                           }: { topAnchor: string, component?: any, onSave?: Function, onPublish?: Function }) => {
    let actionButtons = [];

    if(onSave) {
        actionButtons.push(<UCRButton onClick={() => onSave()}>Spara</UCRButton>);
    }
    if(onPublish) {
        actionButtons.push(<UCRButton onClick={() => onPublish()}>Publicera</UCRButton>);
    }

    return (
    <FormFooterWrapper>
        <LinkToTop>
            <a href={"#pageTop"}><UpArrow /> Tillbaka till sidans topp</a>
        </LinkToTop>
        <Pusher />
        <Content>
            {component}
        </Content>
        <Actions>
            {actionButtons}
        </Actions>
    </FormFooterWrapper>
    )
};
