import React from "react";
import styled from "styled-components";
import { mapProps } from "recompose";

const RadioContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const RadioLabel = styled.label`
  cursor: pointer;
  width: 60px;
  height: 60px;
  border-radius: 50% 50%;
  border: 2px solid black;
  font-size: 12px;
  text-align: center;
  vertical-align: middle;
  line-height: 60px;
  background: #ccc;
  opacity: 0.6;
  display: inline;
`;

const RadioInput = styled.input`
  opacity: 0;
  position: absolute;
  top: -9999px;

  :checked + label {
    background: white;
    opacity: 1;
  }
`;

const Radio = mapProps(props => ({
  onChange: props.onChange,
  type: "radio",
  checked: props.selectedRole === props.value,
  id: props.value,
  value: props.value
}))(RadioInput);

const RadioButtonAndLabel = ({ value, changeRole, selectedRole }) => (
  <>
    <Radio
      value={value}
      onChange={() => changeRole(value)}
      selectedRole={selectedRole}
    />
    <RadioLabel htmlFor={value}>{value}</RadioLabel>
  </>
);

const RoleChoice = ({ selectedRole, changeRole }) => (
  <RadioContainer>
    <RadioButtonAndLabel
      value="artist"
      changeRole={changeRole}
      selectedRole={selectedRole}
    />
    <RadioButtonAndLabel
      value="scientist"
      changeRole={changeRole}
      selectedRole={selectedRole}
    />
  </RadioContainer>
);

export default RoleChoice;
