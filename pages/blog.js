import React from "react";
import styled from "styled-components";
import { projectFirestore } from "../src/firebase/config";

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

const blog = ({ data }) => {
  return (
    <Wrapper>
      {data.map((dat) => {
        return (
          <div key={dat.id}>
            <Title>{dat.title}</Title>
            <Description>{dat.desc}</Description>
            {dat.paragraphs.map((p) => {
              return <p>{p}</p>;
            })}
          </div>
        );
      })}
      {data.map((dat) => {
        dat.comments.map((comment) => {
          return <p style={{ color: "red" }}>{"1111111111111 " + comment}</p>;
        });
      })}
    </Wrapper>
  );
};

export const getStaticProps = async () => {
  const documents = [];
  await projectFirestore
    .collection("blog-posts")
    .get()
    .then((snapshot) => {
      snapshot.forEach((data) => {
        documents.push({
          ...data.data(),
          id: data.id,
        });
      });
    });
  return {
    props: {
      data: documents,
    },
  };
};

export default blog;
