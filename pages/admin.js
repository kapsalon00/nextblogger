import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Button, Form } from "semantic-ui-react";
import {
  projectAuth,
  projectFirestore,
  timestamp,
} from "../src/firebase/config";
import { AuthContext } from "../src/context/AuthContext";

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const AdminPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const AdminControll = styled.div``;
const AdminPreview = styled.div`
  margin: 20px;
`;

const admin = () => {
  const { isAuth } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [paragraphs, setParagraphs] = useState([]);

  const handleLogin = () => {
    projectAuth.signInWithEmailAndPassword(email, password);
    setEmail("");
    setPassword("");
  };

  const handleLogout = () => {
    projectAuth.signOut();
  };
  const handleSubmit = () => {
    projectFirestore.collection("blog-posts").add({
      added: timestamp(),
      desc: description,
      paragraphs: paragraphs,
      title: title,
    });
    //

    setParagraph("");
    setParagraphs([]);
    setTitle("");
    setDescription("");
  };
  const handleAddParagraph = () => {
    setParagraphs([...paragraphs, paragraph]);
    setParagraph("");
  };
  return (
    <Wrapper>
      {!isAuth && (
        <Form style={{ margin: "20px" }}>
          <Form.Field>
            <label>Email</label>
            <input
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Field>
          <Button onClick={handleLogin} type="submit">
            Login
          </Button>
        </Form>
      )}
      {isAuth && (
        <AdminPanelWrapper>
          <Button
            style={{ margin: "10px auto", maxWidth: "200px" }}
            onClick={handleLogout}
          >
            logout
          </Button>
          <AdminControll>
            <Form style={{ margin: "20px" }}>
              <Form.Field>
                <label>Title</label>
                <input
                  value={title}
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                />
              </Form.Field>
              <Form.Field>
                <label>Description</label>
                <input
                  value={description}
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                />
              </Form.Field>
              <Form.Field>
                <label>Paragraph</label>
                <textarea
                  value={paragraph}
                  onChange={(e) => setParagraph(e.target.value)}
                  type="text"
                  placeholder="Paragraph"
                />
              </Form.Field>
              <Button onClick={handleAddParagraph}>Add Paragraph</Button>
            </Form>
          </AdminControll>
          <AdminPreview>
            <h1 style={{ textAlign: "center" }}>{title}</h1>
            {paragraphs.map((P) => {
              return <p>{P}</p>;
            })}
            <Button onClick={handleSubmit}>Submit</Button>
          </AdminPreview>
        </AdminPanelWrapper>
      )}
    </Wrapper>
  );
};

export default admin;
