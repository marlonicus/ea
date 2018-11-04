import React from "react";
import Join from "../../components/join";
import { signUp } from "../../utils/auth";

const transformApiErrorsToObject = apiErrors => apiErrors.message;

const signUpHandler = successHandler => async ({
  email,
  name,
  password,
  role
}) => {
  try {
    await signUp({
      username: email,
      password,
      name,
      role
    });

    successHandler();

    return {
      success: true
    };
  } catch (e) {
    return transformApiErrorsToObject(e);
  }
};

const JoinContainer = ({ successHandler }) => (
  <Join onSubmit={signUpHandler(successHandler)} />
);

export default JoinContainer;
