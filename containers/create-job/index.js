import React from "react";
import { connect } from "react-redux";
import { identity } from "ramda";
import CreateJob from "../../components/create-job";
import { createJob } from "../../utils/client-api";

const transformApiErrorsToObject = apiErrors => apiErrors.message;

const loginHandler = async ({
  title,
  description,
  successHandler,
  loggedInUser
}) => {
  try {
    await createJob({
      title,
      description,
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
    onSubmit={({ title, description }) =>
      loginHandler({ title, description, successHandler, loggedInUser })
    }
  />
);

export default connect(identity)(CreateJobContainer);
