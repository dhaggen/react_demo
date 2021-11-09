import React, {useState} from 'react';
import {Face} from "@material-ui/icons";
import {HeaderDropdown} from "../Navbar/HeaderDropdown";
import UserSettings from "./UserSettings";
import useComponentVisible from "../Hooks/useComponentVisible";
//@ts-ignore
import styled from '@emotion/styled/macro';

const IconWrapper = styled.div`
    margin: 10px 10px 10px 0;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    cursor: pointer;
    
    background-color: ${(props:any) => props.isActive ? '#ecfad8': '#C6E59B'};
    color: ${(props:any) => props.isActive ? 'rgba(0, 0, 0, 0.9)': 'rgba(0, 0, 0, 0.6)'};
`;

const StyledFace = styled(Face)`
    margin-left: 7px;
    margin-top: 7px;
`;


export const UserIcon = () => {
    const { containerRef, displayerRef, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

    return (
        <>
            <IconWrapper ref={displayerRef} isActive={isComponentVisible} onClick={() => setIsComponentVisible(!isComponentVisible)}>
                <StyledFace style={{ fontSize: 30 }}/>
            </IconWrapper>
            <div ref={containerRef}>
                { isComponentVisible ? <HeaderDropdown component={UserSettings} anchorRef={displayerRef} onClose={setIsComponentVisible}/> : null}
            </div>
        </>
    );
}