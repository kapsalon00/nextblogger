import React, { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import device from "../../public/consts/device";
import Modal from "../components/Modal";
import { ModalContext } from "../context/ModalContext";

const Wrapper = styled.div`
  overflow: hidden;
  background-color: white;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  @media ${device.laptop} {
    overflow: hidden;
    background-color: white;
    display: flex;
    justify-content: space-between;
  }
  @media ${device.laptop} {
    max-width: 1800px;
    margin: 0 auto;
  }
`;
const StyledHeader = styled.h1`
  margin: auto 0 auto 20px;
  @media ${device.tablet} {
    margin: 0 0 0 20px;
    padding: 0;
    font-weight: bold;
    line-height: 86px;
    display: flex;
    align-items: center;
    text-align: justify;
    font-size: 40px;
    color: black;
    background-color: white;
  }
`;
const FlexWrapper = styled.div`
  display: none;
  @media ${device.laptop} {
    margin: 8px 50px 0 0;
    display: flex;
    align-items: center;
  }
`;
const StyledButton = styled.button`
  @media ${device.laptop} {
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
  }
`;
const Hamburger = styled.div`
  display: inline-block;
  cursor: pointer;
  @media ${device.tablet} {
    margin: auto 20px auto auto;
  }
  @media ${device.laptop} {
    display: none;
  }
`;
const Patty = styled.div`
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
  @media ${device.laptop} {
    display: none;
  }
`;

const Navbar = () => {
  const { setisOpen } = useContext(ModalContext);
  return (
    <Wrapper>
      <Link href="/">
        <StyledHeader>
          <a style={{ color: "black" }}>NextBloggerino</a>
        </StyledHeader>
      </Link>
      <Modal></Modal>
      <Hamburger onClick={() => setisOpen(true)}>
        <Patty></Patty>
        <Patty></Patty>
        <Patty></Patty>
      </Hamburger>
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
      </FlexWrapper>
    </Wrapper>
  );
};

export default Navbar;
