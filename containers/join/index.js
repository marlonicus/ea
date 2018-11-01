import React from "react";
import Join from "../../components/join";
import { signUp } from "../../utils/auth";

/**
  @TODO: This should handle validation of the form, and
  handle responding to the success/failure of the sign up.
*/

const signUpHandler = async ({ email, name, password, role }) => {
  const res = await signUp({
    username: email,
    password,
    name,
    role
  });

  console.log("Sign up sent: ", res);
};

const JoinContainer = () => <Join onSubmit={signUpHandler} />;

export default JoinContainer;
