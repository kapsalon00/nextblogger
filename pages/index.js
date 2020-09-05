import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
  background: url("/images/landing1.jpg") no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
`;
const Title = styled.h1`
  padding-top: 200px;
  text-align: center;
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <Wrapper>
      <Title>Welcome to the blog</Title>
    </Wrapper>
  );
}
