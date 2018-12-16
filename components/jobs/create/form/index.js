import React from "react";
import { Button, Alert } from "@smooth-ui/core-sc";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import EnhancedFormGroup from "../../../form/group";

const CreateJobSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Try and be a little more descriptive here")
    .required("Your project neeeds a title"),

  description: Yup.string()
    .min(3, "Try and be a little more descriptive here")
    .required("Your project neeeds a description")
});

const CreateJob = ({ onSubmit }) => (
  <Formik
    initialValues={{
      title: "",
      description: ""
    }}
    validationSchema={CreateJobSchema}
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
          name="title"
          label="Title"
          setFieldValue={setFieldValue}
          setFieldTouched={setFieldTouched}
          placeholder="The name of your project"
          disabled={isSubmitting}
        />

        <EnhancedFormGroup
          name="description"
          label="Description of scope"
          setFieldValue={setFieldValue}
          setFieldTouched={setFieldTouched}
          placeholder=""
          disabled={isSubmitting}
        />

        {status && <Alert>{status}</Alert>}

        <Button type="submit" mx="auto" display="block" disabled={isSubmitting}>
          {isSubmitting ? "Loading" : "Post job"}
        </Button>
      </Form>
    )}
  </Formik>
);

export default CreateJob;
