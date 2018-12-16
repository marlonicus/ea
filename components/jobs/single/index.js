import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  max-width: 1024px;
  margin: 0 auto;
`;

const InfoContainer = styled.ul`
  flex: 0.4;
  margin: 0 2rem 0 0;
  padding: 0;
`;

const DescriptionContainer = styled.div`
  flex: 1;
`;

const InfoBlockContainer = styled.li`
  list-style: none;
  background: #eee;
  margin: 0 0 1rem 0;
`;

const InfoBlockTitle = styled.h3`
  padding: 1rem 0 0 1rem;
  margin: 0;
`;

const InfoBlockBody = styled.p`
  margin: 0;
  padding: 0 0 1rem 1rem;
`;

const DescriptionBlockBody = styled.p`
  background: #eee;
  padding: 1rem;
`;

const ContainerTitle = styled.h2`
  color: #555;
`;

const InfoBlock = ({ title, value }) => (
  <InfoBlockContainer>
    <InfoBlockTitle>{title}</InfoBlockTitle>
    <InfoBlockBody>{value}</InfoBlockBody>
  </InfoBlockContainer>
);

const SingleJob = ({ description, location, requirements, deadline }) => (
  <Container>
    <InfoContainer>
      <ContainerTitle>Info</ContainerTitle>
      <InfoBlock title="Location" value={location} />
      <InfoBlock title="Deadline" value={deadline} />
    </InfoContainer>

    <DescriptionContainer>
      <ContainerTitle>Description</ContainerTitle>
      <DescriptionBlockBody>{description}</DescriptionBlockBody>

      <ContainerTitle>What&apos;s required:</ContainerTitle>
      <DescriptionBlockBody>{requirements}</DescriptionBlockBody>
    </DescriptionContainer>
  </Container>
);

export default SingleJob;
