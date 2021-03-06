import React from "react";
import { Button, Alert } from "@smooth-ui/core-sc";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import EnhancedFormGroup from "../form/group";

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
        <EnhancedFormGroup
          name="email"
          label="Email address"
          setFieldValue={setFieldValue}
          setFieldTouched={setFieldTouched}
          placeholder="email@example.com"
          disabled={isSubmitting}
        />

        <EnhancedFormGroup
          name="password"
          type="password"
          label="Password"
          setFieldValue={setFieldValue}
          setFieldTouched={setFieldTouched}
          placeholder="••••••••"
          disabled={isSubmitting}
        />

        {status && <Alert>{status}</Alert>}

        <Button type="submit" mx="auto" display="block" disabled={isSubmitting}>
          {isSubmitting ? "Loading" : "Login"}
        </Button>
      </Form>
    )}
  </Formik>
);

export default Login;
