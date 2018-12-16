import React from "react";
import styled from "styled-components";
import { Button, Alert, Textarea } from "@smooth-ui/core-sc";
import { Formik, Form } from "formik";
import { withProps } from "recompose";
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
    .required("Where is the project located?"),

  deadline: Yup.string()
    .min(6, "Must be in the format DD/MM/YYYY")
    .required("When do you need the visualisations by?")
});

const LeftContainer = styled.div`
  flex: 0.7;
  padding-right: 1rem;
`;

const RightContainer = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  justify-content: flex-end;
`;

const FormContainer = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 4rem;
  max-width: 1024px;
  justify-content: center;
  margin: 0 auto;
`;

const SubmitContainer = styled.div`
  flex: 0 1 100%;
  text-align: right;
  width: 100%;
`;

const SubmitButton = styled(Button)`
  display: inline-block;
`;

const EnhancedTextArea = styled(withProps({ as: "textarea" })(Textarea))`
  height: ${({ height }) => height}px;
`;

const CreateJob = ({ onSubmit }) => (
  <Formik
    initialValues={{
      title: "",
      field: "",
      location: "",
      deadline: "",
      description: "",
      requirements: ""
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
      <FormContainer>
        <LeftContainer>
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

          <EnhancedFormGroup
            name="deadline"
            label="Deadline"
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            placeholder="DD/MM/YYYY"
            disabled={isSubmitting}
          />

          <EnhancedFormGroup
            name="description"
            label="Content of project"
            InputComponent={EnhancedTextArea}
            height="100"
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            placeholder="Roughly summarise what your research project is about."
            disabled={isSubmitting}
          />
        </LeftContainer>

        <RightContainer>
          <EnhancedFormGroup
            name="requirements"
            label="What I'm looking for"
            height="300"
            InputComponent={EnhancedTextArea}
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            // eslint-disable-next-line react/jsx-curly-brace-presence
            placeholder={`Describe what you are looking for in the visualisations. Be precise if you have a specific vision, or keep it open for exploration.

Communication is key.`}
            disabled={isSubmitting}
          />

          {status && <Alert>{status}</Alert>}
        </RightContainer>
        <SubmitContainer>
          <SubmitButton type="submit" mx="auto" disabled={isSubmitting}>
            {isSubmitting ? "Publishing..." : "Publish project"}
          </SubmitButton>
        </SubmitContainer>
      </FormContainer>
    )}
  </Formik>
);

export default CreateJob;
