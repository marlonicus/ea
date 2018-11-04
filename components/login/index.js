import React from "react";
import { FormGroup, Label, Button, Alert } from "@smooth-ui/core-sc";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Field from "../form/field";

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
          <Field
            name="email"
            id="input-email"
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            placeholder="email@example.com"
          />
          <ErrorMessage name="email" component={Alert} variant="warning" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="input-password">Password</Label>
          <Field
            name="password"
            type="password"
            id="input-password"
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            placeholder="••••••••"
          />
          <ErrorMessage name="password" component={Alert} variant="warning" />
        </FormGroup>

        {status && <Alert>{status}</Alert>}

        <Button type="submit" mx="auto" display="block" disabled={isSubmitting}>
          {isSubmitting ? "Loading" : "Login"}
        </Button>
      </Form>
    )}
  </Formik>
);

export default Login;
