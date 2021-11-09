import React from 'react';
import styled from "@emotion/styled";

const ContentSection = styled.section`
    margin: 40px 55px 150px 55px;
    
    & a {
        text-decoration: none;
        color: #61a60f;
    }
`;

const InnerContentSection = styled.section`
    margin: 0 100px;
`;

export const Content = (props:any) => {
    return (
        <ContentSection>
            {props.children}
        </ContentSection>
    )
};

export const InnerFormContent = (props:any) => (
    <InnerContentSection>
        {props.children}
    </InnerContentSection>
);