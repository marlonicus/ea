import React from "react";
import { Field } from "formik";
import { Input } from "@smooth-ui/core-sc";

const EnhancedField = ({ setFieldValue, setFieldTouched, ...props }) => (
  <Field
    control
    component={Input}
    onChange={event => setFieldValue(props.name, event.currentTarget.value)}
    onBlur={() => setFieldTouched(props.name)}
    {...props}
  />
);

export default EnhancedField;
