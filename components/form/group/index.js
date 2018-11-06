import React from "react";
import { FormGroup, Label, ControlFeedback } from "@smooth-ui/core-sc";
import { ErrorMessage } from "formik";
import { omit } from "ramda";
import Field from "../field";

const EnhancedFormGroup = ({ name, label, ...props }) => (
  <FormGroup>
    <Label htmlFor={`input-${name}`}>{label}</Label>
    <Field name={name} id={`input-${name}`} {...omit(["props"], props)} />
    <ErrorMessage name={name} component={ControlFeedback} variant="warning" />
  </FormGroup>
);

export default EnhancedFormGroup;
