import React from "react";
import { projectFirestore } from "../../src/firebase/config";

const id = ({ data }) => {
  return (
    <>
      <h1 style={{ color: "red" }}>{data.addedOn.slice(1, 11)}</h1>
      <h1>{data.title}</h1>
      {data.paragraphs.map((p, index) => {
        return <p key={index}>{p}</p>;
      })}
    </>
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
  await projectFirestore
    .collection("blog-posts")
    .doc(params.id)
    .get()
    .then((snapshot) => {
      console.log("the date timestamp is: " + snapshot.data().added.toDate());
      let temp = JSON.stringify(snapshot.data().added.toDate());
      console.log("temp is: " + temp);
      documents = {
        title: snapshot.data().title,
        paragraphs: snapshot.data().paragraphs,
        addedOn: temp,
      };
    });
  return {
    props: {
      data: documents,
    },
  };
};
export default id;
