import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <>
      <Title>Welcome to the blog</Title>
    </>
  );
}
