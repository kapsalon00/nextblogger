import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
  overflow: hidden;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;
const StyledHeader = styled.h1`
  margin: 0 0 0 20px;
  padding: 0;
  font-weight: bold;
  line-height: 86px;
  display: flex;
  align-items: center;
  text-align: justify;
  font-size: 50px;
  color: black;
  background-color: white;
`;
const FlexWrapper = styled.div`
  margin: 0px 50px 0 0;
  display: flex;
  align-items: center;
`;
const StyledButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: white;
  color: black;
  border-style: none;
  margin: 5px;
  font-size: 20px;
  &:hover {
    background-color: black;
    color: white;
  }
`;
const Navbar = () => {
  return (
    <Wrapper>
      <Link href="/">
        <StyledHeader>
          <a>NextBloggerino</a>
        </StyledHeader>
      </Link>
      <FlexWrapper>
        <Link href="/blog">
          <StyledButton>
            <a>BLOG</a>
          </StyledButton>
        </Link>
        <Link href="/about">
          <StyledButton>
            <a>ABOUT</a>
          </StyledButton>
        </Link>
        <Link href="/cart">
          <StyledButton>
            <a>LOGIN</a>
          </StyledButton>
        </Link>
        <Link href="/cart">
          <StyledButton>
            <a>SIGNUP</a>
          </StyledButton>
        </Link>
      </FlexWrapper>
    </Wrapper>
  );
};

export default Navbar;
