import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: auto;
  height: 400px;
  padding-top: 50px;
  background-color: white;
  display: flex;
  justify-content: space-around;
`;
const Line = styled.div`
  min-width: auto;
  max-width: 500px;
  width: 25vw;
  height: 0px;
  border: 1px solid #000000;
`;
const Paragraph = styled.p`
  color: #666666;
  font-size: ${(props) => props.fontSize};
`;
const StyledLink = styled.a`
  display: block;
  text-decoration: none;
  color: #666666;
  font-size: 20px;
  margin-top: 20px;
  &:hover {
    color: white;
  }
`;
const StyledInput = styled.input`
  margin-bottom: 10px;
  display: block;
  border: 0;
  width: 250px;
  height: 40px;
  background-color: #d9d9d9;
`;
const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  background-color: black;
  color: white;
`;
const Footer = () => {
  return (
    <Wrapper>
      <div>
        <Paragraph fontSize={"35px"}>Links</Paragraph>
        <Line></Line>
        <div>
          <StyledLink>CONTACT ME</StyledLink>
          <StyledLink>FAQS</StyledLink>
          <StyledLink>THE STORY</StyledLink>
        </div>
      </div>
      <div style={{ overflowWrap: "break-word", width: "25vw" }}>
        <Paragraph fontSize={"35px"}>About</Paragraph>
        <Line></Line>
        <Paragraph style={{ marginTop: "20px" }}>
          Lorem Lorem Lorem LoremL orem LoremLore m Lorem Lorem LoremLorem Lore
          mLorem LoremLorem LoremLorem Lorem LoremLorem LoremLorem LoremLorem
          Lorem LoremLorem LoremLorem LoremLorem Lorem LoremLorem LoremLorem Lo
          remLorem Lorem LoremLorem LoremLorem LoremLorem Lorem LoremLorem
          LoremLorem Lor emLorem Lorem LoremLorem LoremLorem LoremLorem Lorem
        </Paragraph>
      </div>
      <div>
        <Paragraph fontSize={"35px"}>Newsletter</Paragraph>
        <Line></Line>
        <Paragraph style={{ marginTop: "20px" }}>
          Join my mailing list
        </Paragraph>
        <StyledInput placeholder="email@email.com"></StyledInput>
        <StyledButton>Subscribe</StyledButton>
      </div>
    </Wrapper>
  );
};

export default Footer;
