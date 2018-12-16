import React from "react";
import { connect } from "react-redux";
import { identity } from "ramda";
import CreateJob from "../../components/jobs/create/form";
import { createJob } from "../../utils/client-api";

const transformApiErrorsToObject = apiErrors => apiErrors.message;

const submitHandler = async ({ successHandler, loggedInUser, fields }) => {
  try {
    await createJob({
      fields,
      loggedInUser
    });

    successHandler();

    return {
      success: true
    };
  } catch (e) {
    return transformApiErrorsToObject(e);
  }
};

const CreateJobContainer = ({ successHandler = () => {}, loggedInUser }) => (
  <CreateJob
    onSubmit={fields => submitHandler({ successHandler, loggedInUser, fields })}
  />
);

export default connect(identity)(CreateJobContainer);
