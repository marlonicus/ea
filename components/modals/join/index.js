import React from "react";
import styled from "styled-components";
import { withState } from "recompose";
import { postJson } from "../../../utils/browser";
import RoleChoice from "./ui/role-choice";

const Form = styled.form`
  width: 40vw;
  background: white;
  pointer-events: all;
  padding: 20px;
`;

const Label = styled.label`
  margin: 20px 0 10px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  margin: 0;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  display: block;
  margin: 20px auto 0;
`;

const withInputs = withState("inputs", "changeInput", {
  role: "artist",
  name: "",
  email: "",
  password: "",
  password2: ""
});

const submit = async ({ name, password, password2, email, role }) => {
  try {
    const res = await postJson("/join", { name, password, email, role });
    console.log("recieved:", res);
  } catch (err) {
    console.log(err);
  }
};

const JoinModal = ({ inputs, changeInput }) => (
  <Form
    onClick={e => {
      e.stopPropagation();
    }}
  >
    <RoleChoice
      changeRole={role => changeInput({ ...inputs, role })}
      selectedRole={inputs.role}
    />

    <Label>Name</Label>
    <Input
      type="text"
      onChange={ev => changeInput({ ...inputs, name: ev.target.value })}
    />

    <Label>Email</Label>
    <Input
      type="email"
      onChange={ev => changeInput({ ...inputs, email: ev.target.value })}
    />

    <Label>Password</Label>
    <Input
      type="password"
      onChange={ev => changeInput({ ...inputs, password: ev.target.value })}
    />

    <Label>Confirm Password</Label>
    <Input
      type="password"
      onChange={ev => changeInput({ ...inputs, password2: ev.target.value })}
    />

    <SubmitButton
      onClick={e => {
        e.stopPropagation();
        e.preventDefault();
        submit(inputs);
      }}
    >
      Create account
    </SubmitButton>
  </Form>
);

export default withInputs(JoinModal);
