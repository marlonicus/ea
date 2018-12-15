import React from "react";
import styled from "styled-components";
import ProfilesList from "../list";

const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 2em;
`;

const MaxWidth = styled.div`
  display: flex;
  max-width: 1024px;
  width: 100%;
`;

const FilterContainer = styled.aside`
  margin-right: 10em;
`;

const ListContainer = styled.article`
  flex: 1;
`;

const Title = styled.h2``;

const ProfilesTemplate = ({ type, users }) => (
  <Container>
    <MaxWidth>
      <FilterContainer>
        <Title>Filter</Title>
      </FilterContainer>
      <ListContainer>
        <Title>{`${type} Profiles`}</Title>
        <ProfilesList users={users} />
      </ListContainer>
    </MaxWidth>
  </Container>
);

export default ProfilesTemplate;
