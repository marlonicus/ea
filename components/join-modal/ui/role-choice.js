import styled from "styled-components";
import { withProps, withStateHandlers, compose, mapProps } from "recompose";

const RadioContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const RadioLabel = styled.label`
  cursor: pointer;
  width: 60px;
  height: 60px;
  border-radius: 50% 50%;
  border: 2px solid black;
  font-size: 12px;
  text-align: center;
  vertical-align: middle;
  line-height: 60px;
  background: #ccc;
  opacity:0.6;
  display: inline;
`;

const RadioInput = styled.input`
  opacity: 0;
  position: absolute;
  top: -9999px;

  :checked + label {
    background: white;
    opacity: 1;
  }
`;

const withRadioSelection = withStateHandlers(
  { role: "artist" },
  { change: () => type => ({ role: type }) }
);

const Radio = compose(
  withProps({ type: "radio" }),
  mapProps(props => ({
    ...props,
    checked: props.role === props.value,
    onChange: () => props.change(props.value),
    id: props.value
  }))
)(RadioInput);

const RadioButtonAndLabel = ({ value, onChange, selectedRole }) => (
  <>
    <Radio value={value} change={onChange} role={selectedRole} />
    <RadioLabel for={value} >{ value }</RadioLabel>
  </>
)

const RoleChoice = withRadioSelection(({ role, change }) => (
  <RadioContainer>
    <RadioButtonAndLabel value="artist" onChange={change} selectedRole={role} />
    <RadioButtonAndLabel value="scientist" onChange={change} selectedRole={role} />
  </RadioContainer>
));

export default RoleChoice;
