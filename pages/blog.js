import React from "react";
import styled from "styled-components";
import { projectFirestore } from "../src/firebase/config";
import Link from "next/link";
import { Button, Card } from "semantic-ui-react";
import device from "../public/consts/device";

const Wrapper = styled.div`
  max-width: 960px;
  margin: 50px auto 0 auto;
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;
const CardWrapper = styled.div`
  margin-bottom: 20px;
`;

const blog = ({ data }) => {
  return (
    <Wrapper>
      {data.map((dat) => {
        return (
          <CardWrapper key={dat.id}>
            <Card style={{ margin: "0 auto" }} key={dat.id}>
              <Card.Content>
                <Card.Header>{dat.title}</Card.Header>
                <Card.Description>{dat.desc}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Link href="/blog/[id]" as={`/blog/${dat.id}`}>
                    <Button basic color="green">
                      View post
                    </Button>
                  </Link>
                </div>
              </Card.Content>
              <Card.Content extra>
                {"Added: " + dat.addedOn.slice(1, 11)}
              </Card.Content>
            </Card>
          </CardWrapper>
        );
      })}
    </Wrapper>
  );
};

export const getStaticProps = async () => {
  const documents = [];
  await projectFirestore
    .collection("blog-posts")
    .orderBy("added", "desc")
    .get()
    .then((snapshot) => {
      snapshot.forEach((data) => {
        documents.push({
          title: data.data().title,
          desc: data.data().desc,
          addedOn: JSON.stringify(data.data().added.toDate()),
          id: data.id,
        });
      });
    });
  return {
    props: {
      data: documents,
    },
    revalidate: 1,
  };
};

export default blog;
