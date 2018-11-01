import React from "react";
import Login from "../../components/login";
import { signIn } from "../../utils/auth";

/**
  @TODO: This should handle validation of the form, and
  handle responding to the success/failure of the login.
*/

const loginHandler = async ({ email, password }) => {
  const res = await signIn({
    username: email,
    password
  });

  console.log("Login sent: ", res);
};

const LoginContainer = () => <Login onSubmit={loginHandler} />;

export default LoginContainer;
