import React from "react";
import { FormGroup, Label, Input, Button, Alert } from "@smooth-ui/core-sc";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import RoleChoice from "./ui/role-choice";

const JoinSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name too short")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string().required("Required"),
  "password-2": Yup.string()
    .oneOf([Yup.ref("password"), null], "The passwords don't match")
    .required("Required")
});

const EnhancedField = ({ setFieldValue, setFieldTouched, ...props }) => (
  <Field
    control
    onChange={event => setFieldValue(props.name, event.currentTarget.value)}
    onBlur={() => setFieldTouched(props.name)}
    {...props}
  />
);

const Join = ({ onSubmit }) => (
  <Formik
    initialValues={{
      email: "",
      password: ""
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
          <EnhancedField
            control
            name="name"
            id="input-name"
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            component={Input}
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

        <FormGroup>
          <Label htmlFor="input-password-2">Confirm password</Label>
          <EnhancedField
            control
            name="password-2"
            type="password"
            id="input-password-2"
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            component={Input}
            placeholder="••••••••"
          />
          <ErrorMessage name="password-2" component={Alert} variant="warning" />
        </FormGroup>

        <Button type="submit" mx="auto" display="block">
          Create account
        </Button>
      </Form>
    )}
  </Formik>
);

export default Join;
