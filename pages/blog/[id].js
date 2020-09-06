import React, { useState } from "react";
import { projectFirestore } from "../../src/firebase/config";
import styled from "styled-components";
import { Comment, Header, Form, Button } from "semantic-ui-react";
import device from "../../public/consts/device";

const Wrapper = styled.div`
  margin-top: 50px;
`;
const P = styled.p`
  width: 80%;
  margin: 10px auto;
`;
const PostWrapper = styled.div`
  margin-bottom: 50px;
`;
const CommentsWrapper = styled.div`
  margin: 50px 20px 0 20px;
  @media ${device.tablet} {
  }
`;

const id = ({ data, comments }) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const handleAddPost = () => {
    projectFirestore
      .collection("blog-posts")
      .doc(data.id)
      .get()
      .then((details) => {
        details.forEach((doc) => {
          let jsonData = doc.data();
        });
      });
    projectFirestore
      .collection("blog-posts")
      .doc(data.id)
      .set(
        {
          comments: [
            {
              poster: name,
              post: content,
              //   postedOn: firebase.firestore.FieldValue.serverTimestamp(),
            },
          ],
        },
        { merge: true }
      );
    console.log("coś poszlo");
  };
  return (
    <Wrapper>
      <PostWrapper>
        <h1 style={{ textAlign: "center" }}>{data.title}</h1>
        {data.paragraphs.map((p, index) => {
          return <P key={index}>{p}</P>;
        })}
      </PostWrapper>
      <CommentsWrapper>
        <Comment.Group style={{ margin: "0 auto" }}>
          <Header as="h3" dividing>
            Comments
          </Header>
          {comments.map((comment, index) => {
            return (
              <Comment key={index}>
                <Comment.Content>
                  <Comment.Author as="a">{comment.poster}</Comment.Author>
                  <Comment.Metadata>
                    <div>
                      {comment.postedOn.slice(1, 11) +
                        " " +
                        comment.postedOn.slice(12, 20)}
                    </div>
                  </Comment.Metadata>
                  <Comment.Text>{comment.post}</Comment.Text>
                </Comment.Content>
              </Comment>
            );
          })}
          <Form reply>
            <Form.Input
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />
            <Form.TextArea onChange={(e) => setContent(e.target.value)} />
            <Button
              onClick={handleAddPost}
              content="Add Reply"
              labelPosition="left"
              icon="edit"
              primary
            />
          </Form>
        </Comment.Group>
      </CommentsWrapper>
    </Wrapper>
  );
};

export const getStaticPaths = async () => {
  const pathsToPass = [];
  await projectFirestore
    .collection("blog-posts")
    .get()
    .then((snapshot) => {
      snapshot.forEach((data) => {
        pathsToPass.push({ params: { id: data.id } });
      });
    });

  return {
    paths: pathsToPass,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  let documents = null;
  const commentss = [];
  await projectFirestore
    .collection("blog-posts")
    .doc(params.id)
    .get()
    .then((snapshot) => {
      snapshot.data().comments.forEach((dataPiece) => {
        commentss.push({
          post: dataPiece.post,
          poster: dataPiece.poster,
          postedOn: JSON.stringify(dataPiece.postedOn.toDate()),
        });
      });

      documents = {
        title: snapshot.data().title,
        paragraphs: snapshot.data().paragraphs,
        id: snapshot.id,
      };
    });
  return {
    props: {
      data: documents,
      comments: commentss,
    },
  };
};
export default id;
