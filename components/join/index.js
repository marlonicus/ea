import React from "react";
import { FormGroup, Label, Button, Alert } from "@smooth-ui/core-sc";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import EnhancedFormGroup from "../form/group";
import RoleChoice from "./ui/role-choice";
import Field from "../form/field";

const JoinSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Name too short")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .required("Required")
    .matches(/\d/, "Must contain at least one number")
    .matches(/\W/, "Must contain at least one special character")
    .min(8, "Too short"),
  "password-2": Yup.string()
    .oneOf([Yup.ref("password"), null], "The passwords don't match")
    .required("Required")
});

const Join = ({ onSubmit }) => (
  <Formik
    initialValues={{
      role: "artist",
      email: "",
      name: "",
      password: "",
      "password-2": ""
    }}
    validationSchema={JoinSchema}
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
    {({ values, isSubmitting, setFieldValue, setFieldTouched, status }) => (
      <Form>
        <RoleChoice />

        <EnhancedFormGroup
          name="name"
          label="Name"
          setFieldValue={setFieldValue}
          setFieldTouched={setFieldTouched}
          placeholder={
            values.role === "artist"
              ? "eg. Georgia O'Keeffe"
              : "eg. Ada Lovelace"
          }
          disabled={isSubmitting}
        />

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

        <EnhancedFormGroup
          name="password-2"
          type="password"
          label="Confirm password"
          setFieldValue={setFieldValue}
          setFieldTouched={setFieldTouched}
          placeholder="••••••••"
          disabled={isSubmitting}
        />

        {status && <Alert>{status}</Alert>}

        <Button type="submit" mx="auto" display="block" disabled={isSubmitting}>
          {isSubmitting ? "Loading" : "Create account"}
        </Button>
      </Form>
    )}
  </Formik>
);

export default Join;
