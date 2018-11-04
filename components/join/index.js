import React from "react";
import { FormGroup, Label, Button, Alert } from "@smooth-ui/core-sc";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
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

        <FormGroup>
          <Label htmlFor="input-name">Name</Label>
          <Field
            name="name"
            id="input-name"
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            isSubmitting={isSubmitting}
            placeholder={
              values.role === "artist"
                ? "eg. Georgia O'Keeffe"
                : "eg. Ada Lovelace"
            }
          />
          <ErrorMessage name="name" component={Alert} variant="warning" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="input-email">Email</Label>
          <Field
            name="email"
            id="input-email"
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            isSubmitting={isSubmitting}
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
            isSubmitting={isSubmitting}
            placeholder="••••••••"
          />
          <ErrorMessage name="password" component={Alert} variant="warning" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="input-password-2">Confirm password</Label>
          <Field
            name="password-2"
            type="password"
            id="input-password-2"
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            isSubmitting={isSubmitting}
            placeholder="••••••••"
          />
          <ErrorMessage name="password-2" component={Alert} variant="warning" />
        </FormGroup>

        {status && <Alert>{status}</Alert>}

        <Button type="submit" mx="auto" display="block" disabled={isSubmitting}>
          {isSubmitting ? "Loading" : "Create account"}
        </Button>
      </Form>
    )}
  </Formik>
);

export default Join;
