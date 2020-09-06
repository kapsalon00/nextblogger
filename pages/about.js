import React from "react";
import styled from "styled-components";
import device from "../public/consts/device";

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  @media ${device.tablet} {
    margin: 0 auto;
    margin-top: 50px;
    width: 600px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Paragraph = styled.p`
  color: #666666;
  font-size: ${(props) => props.fontSize};
`;
const Contact = () => {
  return (
    <Wrapper>
      <Paragraph fontSize="20px">Great story</Paragraph>
      <Paragraph fontSize="20px">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </Paragraph>
      <Paragraph fontSize="20px">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt.
      </Paragraph>
      <Paragraph fontSize="20px">
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
        ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
        laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel
        eum iure reprehenderit qui in ea voluptate velit esse quam nihil
        molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
        nulla pariatur?"
      </Paragraph>
    </Wrapper>
  );
};

export default Contact;
