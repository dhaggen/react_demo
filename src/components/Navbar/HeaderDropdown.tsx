import React, {Component} from 'react';
//@ts-ignore
import styled from "@emotion/styled/macro";
import {findDOMNode} from "react-dom";

const HeaderDropdownContent = styled.div`
    position: absolute;
    top: ${(props:any) => props.anchorBoundaries ? (props.anchorBoundaries.y + props.anchorBoundaries.height) + 10 + 'px' : '5px'};
    left: ${(props:any) => props.anchorBoundaries ? (props.anchorBoundaries.x) + 'px' : '5px'};
    background-color: #ecfad8;
    color: #000000;
    z-index: 2;
    border-left: 1px solid #488400;
    border-right: 1px solid #488400;
    border-bottom: 1px solid #488400;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15), inset 0 -1px 0 0 #488400, inset -1px 0 0 0 #488400, inset 1px 0 0 0 #488400;
`;

const HeaderDropdownArrow = styled.div`
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;

    border-bottom: 10px solid #ecfad8;
    width: 0px;
    position: absolute;
    left: 11px;
    top: -10px;
`;

export const HeaderDropdown = ({component:Component, ...props}:any) => {
    let node = findDOMNode(props.anchorRef.current);
    let boundingRect = null;
    if(node && (node as Element).getBoundingClientRect) {
        boundingRect = (node as Element).getBoundingClientRect();
        console.log((node as Element).getBoundingClientRect());
    }
    return (
        <HeaderDropdownContent {...props} anchorBoundaries={boundingRect}>
            <HeaderDropdownArrow/>
            <Component />
        </HeaderDropdownContent>
    )
};