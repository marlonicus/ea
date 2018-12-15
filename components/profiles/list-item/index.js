import React from "react";
import styled from "styled-components";

const Item = styled.li`
  width: 100%;
  background: #ddd;
  list-style: none;
  margin: 0;
  padding: 1em;
  margin-bottom: 1em;
  display: flex;
  align-items: start;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  background: #666;
  width: 100px;
  margin-right: 1em;
  height: 100px;
`;

const Title = styled.h4`
  margin: 0;
  padding: 0;
`;

const ProfileListItem = ({ name }, index) => (
  <Item key={index}>
    <ProfileImage />
    <Title>{name}</Title>
  </Item>
);

export default ProfileListItem;
