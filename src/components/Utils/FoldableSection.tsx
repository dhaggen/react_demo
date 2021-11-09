import React, {useState} from 'react';
import './FoldableSection.css';
//@ts-ignore
import styled from '@emotion/styled/macro';
import {LinkText} from "../Styles/Typo";

const FoldableLinkText = styled.div`
  margin-top: 15px;
  ${LinkText};
`;

const Arrow = styled.div`
    border-style: solid;
    border-width: 0 3px 3px 0;
    padding: 3px;
    display: inline-block;
    transform: rotate(${(props:any) => props.isFolded ? '45deg' : '135deg'});
    -webkit-transform: rotate(${(props:any) => props.isFolded ? '45deg' : '135deg'});
    margin-left: 10px;
    margin-bottom: 1px;
    margin-right: 5px;
`;


export const FoldableSection = (props:{title: string, folded:boolean, children:any}) => {
    const [folded, setFolded] = useState(props.folded);
    return (
    <div className="foldableSection">
        <div className="foldableHeader">
            <h3>{props.title}</h3>
            <FoldableLinkText onClick={() => setFolded(!folded)}>
                {folded? `Visa` : `Dölj`} sektion <Arrow isFolded={folded}/>
            </FoldableLinkText>
        </div>
        <hr />
        <div className="foldableContent">
            {folded ? null : props.children}
        </div>
    </div>)
};