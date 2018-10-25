import { JoinModalConsumer, JoinModalProvider } from "./context";
import RoleChoice from "./ui/role-choice";
import styled from "styled-components";
import { withProps, withStateHandlers, compose, mapProps } from "recompose";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: visible;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

const JoinModal = () => (
  <JoinModalConsumer>
    {({ isEnabled, hideLogin }) =>
      isEnabled && (
        <Root onClick={hideLogin}>
          <Form
            onClick={e => {
              e.stopPropagation();
            }}
          >
            <RoleChoice />

            <Label>Name</Label>
            <Input type="text " />

            <Label>Email</Label>
            <Input type="email" />

            <Label>Password</Label>
            <Input type="password" />

            <Label>Confirm Password</Label>
            <Input type="password" />

            <SubmitButton onClick={e => {
              e.stopPropagation();
              e.preventDefault();
            }}>Create account</SubmitButton>
          </Form>
        </Root>
      )
    }
  </JoinModalConsumer>
);

export default JoinModal;
