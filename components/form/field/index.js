import React from "react";
import { Field } from "formik";
import { Input } from "@smooth-ui/core-sc";

const EnhancedField = ({
  setFieldValue,
  setFieldTouched,
  Component = Input,
  ...props
}) => (
  <Field
    control
    onChange={event => setFieldValue(props.name, event.currentTarget.value)}
    onBlur={() => setFieldTouched(props.name)}
    component={Component}
    {...props}
  />
);

export default EnhancedField;
