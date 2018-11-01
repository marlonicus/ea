import React from "react";
import { FormGroup, Label, Input, Button } from "@smooth-ui/core-sc";
import { Form } from "react-final-form";
import { Field } from "react-final-form-html5-validation";
import RoleChoice from "./ui/role-choice";

const Join = ({ onSubmit }) => (
  <Form
    onSubmit={onSubmit}
    render={({ values, handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <RoleChoice />

        <FormGroup>
          <Label htmlFor="input-name">Name</Label>
          <Field name="name">
            {({ input }) => (
              <Input
                control
                id="input-name"
                placeholder={
                  values.role === "artist"
                    ? "eg. Georgia O'Keeffe"
                    : "eg. Ada Lovelace"
                }
                {...input}
              />
            )}
          </Field>
        </FormGroup>

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
              <Input control id="input-password" type="password" {...input} />
            )}
          </Field>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="input-password-2">Confirm Password</Label>
          <Field name="password-2" type="password">
            {({ input }) => (
              <Input control id="input-password-2" type="password" {...input} />
            )}
          </Field>
        </FormGroup>

        <Button type="submit" mx="auto" display="block">
          Create account
        </Button>
      </form>
    )}
  />
);

export default Join;
