import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.primary};
`;
const Description = styled.div`
  text-align: center;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.primary};
`;

const blog = () => {
  return (
    <Wrapper>
      <Title>Welcome to the blog</Title>
      <Description>Welcome to the blog</Description>
    </Wrapper>
  );
};
export default blog;
