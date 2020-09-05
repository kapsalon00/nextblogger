import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../context/ModalContext";
import Link from "next/link";

const ModalWrap = styled.div`
  display: ${(props) =>
    props.isOpen ? "block" : "none"}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;
const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
`;
const FlexWrapper = styled.div`
  display: none;
  margin: 0px 50px 0 0;
  display: flex;
  flex-direction: column;
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
  }
`;

const Modal = () => {
  const { isOpen, setisOpen } = useContext(ModalContext);
  return (
    <ModalWrap isOpen={isOpen}>
      <ModalContent>
        <span
          onClick={() => setisOpen(false)}
          style={{
            color: "aaa",
            float: "right",
            fontSize: "28px",
            fontWeight: "bold",
          }}
          class="close"
        >
          &times;
        </span>

        <FlexWrapper>
          <Link href="/blog">
            <StyledButton onClick={() => setisOpen(false)}>
              <a>BLOG</a>
            </StyledButton>
          </Link>
          <Link href="/about">
            <StyledButton onClick={() => setisOpen(false)}>
              <a>ABOUT</a>
            </StyledButton>
          </Link>
          <Link href="/cart">
            <StyledButton onClick={() => setisOpen(false)}>
              <a>LOGIN</a>
            </StyledButton>
          </Link>
          <Link href="/cart">
            <StyledButton onClick={() => setisOpen(false)}>
              <a>SIGNUP</a>
            </StyledButton>
          </Link>
        </FlexWrapper>
      </ModalContent>
    </ModalWrap>
  );
};

export default Modal;
