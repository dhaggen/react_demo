import React from "react";
import InputBase, {InputBaseProps} from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import {Lock} from "@material-ui/icons";
import {Error} from "@material-ui/icons";
import {BodyTextLarge, BodyTextMedium, BodyTextSmall, Header6} from "../Styles/Typo";

//@ts-ignore
import styled from "@emotion/styled/macro";
import {Button, FormControl, RadioGroup} from "@material-ui/core";
import FormLabel, {FormLabelProps} from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import {Blue, Green} from "../Styles/Colors";

const UCRTextFieldInput = styled((props: InputBaseProps) => (
    <InputBase endAdornment={<InputAdornment className="inputAdornment" position="end"><Lock /></InputAdornment>} classes={{focused: 'focused', input: 'inputBase', disabled: 'disabled', error: 'error'}} {...props} />
))`

    box-sizing: border-box;
    border-radius:  6px;
    border: solid 1px rgba(0, 0, 0, 0.35);
    background: #ffffff;
    ${BodyTextLarge};
      
     &.focused {
      box-sizing: border-box;
      border: solid 1px ${Green.NormalDark};
    }
    
    & .inputAdornment {
      display: none;
    }
    
    &.disabled .inputAdornment {
      display: flex;
      margin-right: 11px;
    }

    &.disabled {
      background-color: rgba(0, 0, 0, 0.15);
      border: solid 1px rgba(0, 0, 0, 0.35);
    }
    
    &.error {
      border: solid 2px #CF3B12;
    }

  &.disabled .inputBase {
    color: rgba(0, 0, 0, 0.6);
  }
  
  & .inputBase {
    padding: 0;
    margin: 10px 50px 8px 15px;
  }
`;

``;

const UCRTextFieldLabel = styled((props: FormLabelProps) => (
        <FormLabel classes={{filled: 'root', error: 'error', required: 'required', asterisk: 'asterisk'}} {...props} />
))`
    margin: 20px 0 3px 0;
    ${BodyTextMedium};
    
    &.root {
      ${BodyTextMedium};
      margin: 20px 0 3px 0;
      color: rgba(0, 0, 0, 0.6);
    }
    
    &.required {
      ${BodyTextMedium};
      color: rgba(0, 0, 0, 0.6);
    }
    
    & .asterisk {
      visibility: hidden;
    }
    
    &.required:after {
      color: #CF3B12;
      content: '\\2022';
      font-size: 25px;
    }
`;

const UCRFormErrorMessage = styled.div`
  color: #CF3B12;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const UCRFormControl = styled(FormControl)`
    ${UCRTextFieldLabel} {
      flex: 1;
    }
    ${UCRTextFieldInput} {
      flex: 0 0 ${(props:any) => props.fullWidth ? '770px' : '370px'};
    }
    ${UCRFormErrorMessage} {
      flex-grow: 1;
    }
`;

const ErrorLabel = styled.label`
  margin-left: 7px;
`;

const ErrorInfo = styled.div`
  margin-left: 8px;
  ${BodyTextSmall};
  color: rgba(0, 0, 0, 0.6);
`;

const ErrorDot = styled.span`
  color: #CF3B12;
  font-size: 30px;
`;

export const ErrorInfoBox = () => (
    <ErrorInfo>
        <ErrorDot>&#8226;</ErrorDot> = Fältet är obligatoriskt
    </ErrorInfo>
);


export const UCRTextField = (props:any) => (
    <UCRFormControl fullWidth={props.fullWidth}>
        <Row>
            <UCRTextFieldLabel required={props.required}>{props.label}</UCRTextFieldLabel>
        </Row>
        <Row>
            <UCRTextFieldInput {...props}/>
            <UCRFormErrorMessage>{props.errors ? (<><Error /><ErrorLabel>{props.errors}</ErrorLabel></>) : <></> }</UCRFormErrorMessage>
        </Row>
    </UCRFormControl>
);

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

export const UCRRadioGroup = ({label, values, fullWidth, errors, required, ...others}:any) => (<>
    <UCRFormControl fullWidth={fullWidth}>
        <Row>
            <UCRTextFieldLabel required={required}>{label}</UCRTextFieldLabel>
        </Row>
        <Row>
            <StyledRadioGroup {...others}>
                { values.map((value:any) => (
                    <FormRadio value={value.key} label={value.label} />
                ))}
            </StyledRadioGroup>
            <UCRFormErrorMessage>{errors ? (<><Error /><ErrorLabel>{errors}</ErrorLabel></>) : <></> }</UCRFormErrorMessage>
        </Row>
    </UCRFormControl>
</>);

export const UCRButton = styled(Button)`
  width: 115px;
  height: 42px;
  border-radius: 6px;
  background-color: ${Green.Darker} !important;
  margin-top: 43px;
  
  
  & span {
    ${Header6};
    color: #ffffff;
    text-transform: none;
  }
  
  &:hover {
    background-color: ${Green.Darkest} !important;
  }
`;