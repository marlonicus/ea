import React from "react";
import { FormGroup, Label, Input, Button, Alert } from "@smooth-ui/core-sc";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string().required("Required")
});

const EnhancedField = ({ setFieldValue, setFieldTouched, ...props }) => (
  <Field
    control
    onChange={event => setFieldValue(props.name, event.currentTarget.value)}
    onBlur={() => setFieldTouched(props.name)}
    {...props}
  />
);

const Login = ({ onSubmit }) => (
  <Formik
    initialValues={{
      email: "",
      password: ""
    }}
    validationSchema={LoginSchema}
    onSubmit={async (values, actions) => {
      actions.setStatus();
      const res = await onSubmit(values);
      if (res && res.success) {
        return;
      }
      actions.setStatus(res);
      actions.setSubmitting(false);
    }}
  >
    {({ isSubmitting, setFieldValue, setFieldTouched, status }) => (
      <Form>
        <FormGroup>
          <Label htmlFor="input-email">Email</Label>
          <EnhancedField
            control
            name="email"
            id="input-email"
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            component={Input}
            placeholder="email@example.com"
          />
          <ErrorMessage name="email" component={Alert} variant="warning" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="input-password">Password</Label>
          <EnhancedField
            control
            name="password"
            type="password"
            id="input-password"
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            component={Input}
            placeholder="••••••••"
          />
          <ErrorMessage name="password" component={Alert} variant="warning" />
        </FormGroup>

        {status && <Alert>{status}</Alert>}

        <Button type="submit" mx="auto" display="block" disabled={isSubmitting}>
          Login
        </Button>
      </Form>
    )}
  </Formik>
);

export default Login;
