import React from 'react';

//@ts-ignore
import styled from "@emotion/styled/macro";
import {BodyTextMedium} from "../Styles/Typo";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import {RadioGroup} from "@material-ui/core";
import {Blue} from "../Styles/Colors";

const UCRRadio = styled.div`
    ${BodyTextMedium};
    background-color: ${(props:any) => props.active ? '#ffffff': Blue.Darker};
    color: ${(props:any) => props.active ? '#000000': '#ffffff'};
    border: 2px solid ${Blue.Darker};
    border-radius: 21px;
    width: 250px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledRadioGroup = styled(RadioGroup)`
    display: flex;
    flex-direction: row !important;    
`;

const FormRadio = ({label, ...others}:any) => {console.log(others); return <Radio {...others} label={""} checkedIcon={<UCRRadio active={true}>{label}</UCRRadio>} icon={<UCRRadio active={false}>{label}</UCRRadio>} />};

export const UCRRadioGroup = ({label, values, ...others}:any) => (<>
    <FormLabel component="label">{label}</FormLabel>
    <StyledRadioGroup {...others}>
        { values.map((value:any) => (
            <FormRadio value={value.key} label={value.label} />
        ))}
    </StyledRadioGroup>
</>);