import React from "react";
import { FormGroup, Label, ControlFeedback } from "@smooth-ui/core-sc";
import { ErrorMessage } from "formik";
import Field from "../field";

const EnhancedFormGroup = ({ name, label, InputComponent, ...props }) => (
  <FormGroup>
    <Label htmlFor={`input-${name}`}>{label}</Label>
    <Field
      name={name}
      id={`input-${name}`}
      Component={InputComponent}
      {...props}
    />
    <ErrorMessage name={name} component={ControlFeedback} variant="warning" />
  </FormGroup>
);

export default EnhancedFormGroup;
