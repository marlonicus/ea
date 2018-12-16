import React from "react";
import { Button, Alert } from "@smooth-ui/core-sc";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import EnhancedFormGroup from "../../../form/group";

const CreateJobSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Try and be a little more descriptive here")
    .required("Your project neeeds a title"),

  field: Yup.string()
    .min(3, "Try and be a little more descriptive here")
    .required("Your project neeeds a field"),

  location: Yup.string()
    .min(2, "Must be at least 2 characters long")
    .required("Where is the project located?")
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
          label="Project Title"
          setFieldValue={setFieldValue}
          setFieldTouched={setFieldTouched}
          placeholder=""
          disabled={isSubmitting}
        />

        <EnhancedFormGroup
          name="field"
          label="Field of research/topic"
          setFieldValue={setFieldValue}
          setFieldTouched={setFieldTouched}
          placeholder=""
          disabled={isSubmitting}
        />

        <EnhancedFormGroup
          name="location"
          label="Location"
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
