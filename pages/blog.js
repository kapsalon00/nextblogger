import React from "react";
import styled from "styled-components";
import { projectFirestore } from "../src/firebase/config";
import Link from "next/link";

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
            <Link href="/blog/[id]" as={`/blog/${dat.id}`}>
              <Title>{dat.title}</Title>
            </Link>
            <Description>{dat.desc}</Description>
          </div>
        );
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
          title: data.data().title,
          desc: data.data().desc,
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
