import React from "react";
import Login from "../../components/login";
import { signIn } from "../../utils/auth";

const transformApiErrorsToObject = apiErrors => apiErrors.message;

const loginHandler = successHandler => async ({ email, password }) => {
  try {
    await signIn({
      username: email,
      password
    });

    successHandler();

    return {
      success: true
    };
  } catch (e) {
    return transformApiErrorsToObject(e);
  }
};

const LoginContainer = ({ successHandler = () => {} }) => (
  <Login onSubmit={loginHandler(successHandler)} />
);

export default LoginContainer;
