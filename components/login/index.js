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

const Login = ({ onSubmit }) => (
  <Formik
    initialValues={{
      email: "",
      password: ""
    }}
    validateOnBlur
    validateOnChange
    validationSchema={LoginSchema}
    onSubmit={async (values, actions) => {
      // actions: { setSubmitting, setErrors, setStatus }
      // await onSubmit(values);
      actions.setSubmitting(false);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <FormGroup>
          <Label htmlFor="input-email">Email</Label>
          <Field
            control
            name="email"
            id="input-email"
            // component={Input}
            placeholder="email@example.com"
          />
          <ErrorMessage name="email" component={Alert} variant="warning" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="input-password">Password</Label>
          <Field
            control
            name="password"
            id="input-password"
            component={Input}
            placeholder="••••••••"
          />
          <ErrorMessage name="password" component={Alert} variant="warning" />
        </FormGroup>

        <Button type="submit" mx="auto" display="block" disabled={isSubmitting}>
          Login
        </Button>
      </Form>
    )}
  </Formik>
);

export default Login;
