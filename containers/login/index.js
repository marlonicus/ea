import React from "react";
import Login from "../../components/login";
import { signIn } from "../../utils/auth";

/**
  @TODO: This should handle validation of the form, and
  handle responding to the success/failure of the login.
*/

const loginHandler = async ({ email, password }) =>
  signIn({
    username: email,
    password
  });

const LoginContainer = () => <Login onSubmit={loginHandler} />;

export default LoginContainer;
