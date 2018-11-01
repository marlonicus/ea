import React from "react";
import { FormGroup, Label, Input, Button } from "@smooth-ui/core-sc";
import { Form } from "react-final-form";
import { Field } from "react-final-form-html5-validation";

const Login = ({ onSubmit }) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="input-email">Email</Label>
          <Field name="email">
            {({ input }) => (
              <Input
                control
                id="input-email"
                placeholder="email@example.com"
                {...input}
              />
            )}
          </Field>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="input-password-2">Password</Label>
          <Field name="password" type="password">
            {({ input }) => (
              <Input
                control
                id="input-password"
                type="password"
                placeholder="•••••••"
                {...input}
              />
            )}
          </Field>
        </FormGroup>

        <Button type="submit" mx="auto" display="block">
          Login
        </Button>
      </form>
    )}
  />
);

export default Login;
