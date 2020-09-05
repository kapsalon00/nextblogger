import React from "react";
import styled from "styled-components";
import device from "../../public/consts/device";

const Wrapper = styled.div`
  width: auto;
  height: 400px;
  padding-top: 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
    margin: 20px;
  }
  @media ${device.laptop} {
    width: auto;
    height: 400px;
    padding-top: 50px;
    background-color: white;
    display: flex;
    justify-content: space-around;
  }
  @media ${device.laptop} {
    max-width: 1800px;
    margin: 0 auto;
  }
`;
const Line = styled.div`
  min-width: auto;
  max-width: 500px;
  width: 80vw;
  height: 0px;
  border: 1px solid #000000;
  margin: ${(props) => (props.center ? "0 auto" : "")};
  @media ${device.tablet} {
    min-width: auto;
    max-width: 500px;
    width: 25vw;
    height: 0px;
    border: 1px solid #000000;
  }
`;
const Paragraph = styled.p`
  color: #666666;
  margin: 0 auto;
  font-size: ${(props) => props.fontSize};
  width: ${(props) => (props.width ? "80%" : "")};
  @media ${device.laptop} {
    color: #666666;
    font-size: ${(props) => props.fontSize};
  }
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

  @media ${device.laptop} {
    display: block;
    text-decoration: none;
    color: #666666;
    font-size: 20px;
    margin-top: 20px;
    &:hover {
      color: white;
    }
  }
`;
const StyledInput = styled.input`
  margin: 10px auto 0 auto;
  margin-bottom: 10px;
  display: block;
  border: 0;
  width: 250px;
  height: 40px;
  background-color: #d9d9d9;
  @media ${device.tablet} {
    width: 190px;
  }
  @media ${device.laptop} {
    margin-bottom: 10px;
    display: block;
    border: 0;
    width: 250px;
    height: 40px;
    background-color: #d9d9d9;
  }
`;
const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  background-color: black;
  color: white;
  @media ${device.laptop} {
    width: 100px;
    height: 40px;
    border: none;
    background-color: black;
    color: white;
  }
`;
const SectionWrapper = styled.div`
  margin: 0 auto 80px auto;
  text-align: center;
  overflow-wrap: ${(props) => (props.overflow ? "break-word" : "")};
  @media ${device.laptop} {
    width: ${(props) => (props.viewwidth ? "25vw" : "")};
  }
`;
const Footer = () => {
  return (
    <Wrapper>
      <SectionWrapper>
        <Paragraph fontSize={"35px"}>Links</Paragraph>
        <Line></Line>
        <div>
          <StyledLink>CONTACT ME</StyledLink>
          <StyledLink>FAQS</StyledLink>
          <StyledLink>THE STORY</StyledLink>
        </div>
      </SectionWrapper>
      <SectionWrapper overflow viewwidth>
        <Paragraph fontSize={"35px"}>About</Paragraph>
        <Line center></Line>
        <Paragraph width style={{ marginTop: "20px" }}>
          Lorem Lorem Lorem LoremL orem LoremLore m Lorem Lorem LoremLorem Lore
          mLorem LoremLorem LoremLorem Lorem LoremLorem LoremLorem LoremLorem
          Lorem LoremLorem LoremLorem LoremLorem Lorem LoremLorem LoremLorem Lo
          remLorem Lorem LoremLorem LoremLorem LoremLorem Lorem LoremLorem
          LoremLorem Lor emLorem Lorem LoremLorem LoremLorem LoremLorem Lorem
        </Paragraph>
      </SectionWrapper>
      <SectionWrapper>
        <Paragraph fontSize={"35px"}>Newsletter</Paragraph>
        <Line center></Line>
        <Paragraph style={{ marginTop: "20px" }}>
          Join my mailing list
        </Paragraph>
        <StyledInput placeholder="email@email.com"></StyledInput>
        <StyledButton>Subscribe</StyledButton>
      </SectionWrapper>
    </Wrapper>
  );
};

export default Footer;
