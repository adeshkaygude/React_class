
import React from "react";
import styled from "styled-components";

const Title = styled.h3`
  color: red;
  font-style: italic;

  &:hover {
    color: green;
  }
`;

const StyledComp = () => {
  return (
    <>
      <h3>Style Components</h3>
      <Title>Style Components</Title>
    </>
  );
};

export default StyledComp;
