import React, { useState } from "react";
import { projectFirestore, timestamp } from "../../src/firebase/config";
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

const id = ({ data, commentsTest }) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState(commentsTest);
  const handleAddPost = () => {
    if (!name || !content) {
      alert("Fill comment form");
    } else {
      projectFirestore
        .collection("blog-posts")
        .doc(data.id)
        .collection("comments")
        .add({ poster: name, post: content, postedOn: timestamp() });

      setComments([
        //this set is so comments appear instantly
        {
          poster: name,
          post: content,
          postedOn: JSON.stringify(new Date()),
        },
        ...comments,
      ]);
      setName("");
      setContent("");
    }
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
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  let documents = null;
  const commentss = [];

  await projectFirestore
    .collection("blog-posts")
    .doc(params.id)
    .collection("comments")
    .orderBy("postedOn", "desc")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        commentss.push({
          post: doc.data().post,
          poster: doc.data().poster,
          postedOn: JSON.stringify(doc.data().postedOn.toDate()),
        });
      });
    });

  await projectFirestore
    .collection("blog-posts")
    .doc(params.id)
    .get()
    .then((snapshot) => {
      documents = {
        title: snapshot.data().title,
        paragraphs: snapshot.data().paragraphs,
        id: snapshot.id,
      };
    });

  return {
    props: {
      data: documents,
      commentsTest: commentss,
    },
    revalidate: 1,
  };
};
export default id;
