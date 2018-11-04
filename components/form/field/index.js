import React from "react";
import { Field } from "formik";
import { Input } from "@smooth-ui/core-sc";

const EnahncedField = ({
  setFieldValue,
  setFieldTouched,
  isSubmitting,
  ...props
}) => (
  <Field
    control
    component={Input}
    disabled={isSubmitting}
    onChange={event => setFieldValue(props.name, event.currentTarget.value)}
    onBlur={() => setFieldTouched(props.name)}
    {...props}
  />
);

export default EnahncedField;
