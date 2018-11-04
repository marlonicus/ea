import React from "react";
import styled from "styled-components";
import { Field } from "formik";

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

const RadioButtonAndLabel = ({ value }) => (
  <Field name="role" value={value} type="radio" component="input">
    {({ field, form }) => (
      <>
        <RadioInput
          id={value}
          {...field}
          defaultChecked={form.initialValues.role === value}
          type="radio"
        />
        <RadioLabel htmlFor={value}>{value}</RadioLabel>
      </>
    )}
  </Field>
);

const RoleChoice = () => (
  <RadioContainer>
    <RadioButtonAndLabel value="artist" />
    <RadioButtonAndLabel value="scientist" />
  </RadioContainer>
);

export default RoleChoice;
