import React from "react";
import styled from "styled-components";
import { map } from "../../utils/fp";

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

const List = styled.ol`
  margin: 0;
  padding: 0;
`;

const Title = styled.h2``;

const FilterableList = ({ title, listItems, ListItemComponent }) => (
  <Container>
    <MaxWidth>
      <FilterContainer>
        <Title>Filter</Title>
      </FilterContainer>
      <ListContainer>
        <Title>{title}</Title>
        <List>{map(ListItemComponent, listItems)}</List>
      </ListContainer>
    </MaxWidth>
  </Container>
);

export default FilterableList;
